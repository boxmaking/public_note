/**
 * P5-5 属性趋势图模块（改进版）
 * 功能：展示同周期/同族内属性变化趋势
 * 依赖：Chart.js（已在 element.html 中加载）
 * 改进：修复 CSS 变量名、支持 i18n、优化图表交互、增大画布高度
 */

(function () {
  'use strict';

  // ── 可展示的趋势属性 ──
  const TREND_PROPS = [
    { key: 'electronegativity', zh: '电负性',    en: 'Electronegativity', unit: '',     color: '#f59e0b' },
    { key: 'atomicRadius',     zh: '原子半径',    en: 'Atomic Radius',    unit: 'pm',   color: '#3b82f6' },
    { key: 'ionizationEnergy', zh: '第一电离能',  en: 'IE₁',              unit: 'eV',   color: '#ef4444' },
    { key: 'electronAffinity', zh: '电子亲和能',  en: 'Electron Affinity', unit: 'eV',   color: '#10b981' },
    { key: 'density',          zh: '密度',        en: 'Density',          unit: 'g/cm³', color: '#8b5cf6' },
    { key: 'meltingPoint',     zh: '熔点',        en: 'Melting Point',    unit: 'K',    color: '#ec4899' },
    { key: 'boilingPoint',     zh: '沸点',        en: 'Boiling Point',    unit: 'K',    color: '#14b8a6' },
    { key: 'mass',             zh: '原子量',      en: 'Atomic Mass',     unit: 'u',    color: '#f97316' },
  ];

  // ── 判断周期 ──
  function getPeriod(z) {
    if (z <= 2) return 1;
    if (z <= 10) return 2;
    if (z <= 18) return 3;
    if (z <= 36) return 4;
    if (z <= 54) return 5;
    if (z <= 86) return 6;
    return 7;
  }

  // ── 获取同周期元素 ──
  function getPeriodElements(z) {
    const period = getPeriod(z);
    return ELEMENTS.filter(e => getPeriod(e.z) === period)
      .sort((a, b) => a.z - b.z);
  }

  // ── 获取同族元素 ──
  function getGroupElements(z) {
    const el = ELEMENTS.find(e => e.z === z);
    if (!el || !el.group) return [];
    return ELEMENTS.filter(e => e.group === el.group && e.state !== 'unknown')
      .sort((a, b) => a.z - b.z);
  }

  // ── 获取属性值 ──
  function getPropValue(el, propKey) {
    const val = el[propKey];
    if (val !== undefined && val !== null) return val;
    // 尝试从 thermo 中获取
    if (el.thermo) {
      const thermoMap = {
        'ionizationEnergy': 'ie1',
        'electronAffinity': 'ea',
      };
      const tKey = thermoMap[propKey];
      if (tKey && el.thermo[tKey] !== undefined) return el.thermo[tKey];
    }
    return null;
  }

  // ── 当前选中的元素（用于 langchange 时重绘）──
  let _currentEl = null;

  // ── 渲染趋势图卡片 ──
  window.renderTrendChart = function (el) {
    const card = document.getElementById('trendCard');
    const body = document.getElementById('trendBody');
    if (!card || !body) return;

    _currentEl = el;
    card.style.display = 'block';

    const periodEls = getPeriodElements(el.z);
    const groupEls  = getGroupElements(el.z);

    if (periodEls.length === 0 && groupEls.length === 0) {
      body.innerHTML = '<p style="color:var(--text-muted)">暂无同周期/同族数据</p>';
      return;
    }

    // 构建内部 HTML（修复 CSS 变量名）
    body.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:12px">
        <label style="font-size:12px;color:var(--text-muted);white-space:nowrap">选择属性：</label>
        <select id="trendPropSelect" style="padding:5px 10px;border-radius:6px;border:1px solid var(--border);background:var(--bg-card);color:var(--text-primary);font-size:13px">
          ${TREND_PROPS.map(p => `<option value="${p.key}">${p.zh}</option>`).join('')}
        </select>
        <label style="font-size:12px;color:var(--text-muted);margin-left:8px;cursor:pointer">
          <input type="radio" name="trendScope" value="period" checked style="margin-right:4px">同周期（第 ${getPeriod(el.z)} 周期）
        </label>
        <label style="font-size:12px;color:var(--text-muted);margin-left:8px;cursor:pointer">
          <input type="radio" name="trendScope" value="group" style="margin-right:4px">同族（${el.group || '—'} 族）
        </label>
      </div>
      <div style="position:relative;height:280px">
        <canvas id="trendChartCanvas"></canvas>
      </div>
      <p id="trendNote" style="margin-top:10px;font-size:11px;color:var(--text-muted);line-height:1.6"></p>
    `;

    // 绑定事件
    const propSelect  = document.getElementById('trendPropSelect');
    const scopeRadios = document.querySelectorAll('input[name="trendScope"]');

    function updateChart() {
      const propKey = propSelect.value;
      const scope = document.querySelector('input[name="trendScope"]:checked').value;
      const elements = scope === 'period' ? periodEls : groupEls;
      drawTrendChart(propKey, elements, scope, el.z);
    }

    propSelect.addEventListener('change', updateChart);
    scopeRadios.forEach(r => r.addEventListener('change', updateChart));

    // 初始渲染
    updateChart();
  };

  // ── 绘制趋势图 ──
  function drawTrendChart(propKey, elements, scope, currentZ) {
    const canvas = document.getElementById('trendChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const isEn  = window.I18N && window.I18N.isEn && window.I18N.isEn();
    const propInfo = TREND_PROPS.find(p => p.key === propKey) || TREND_PROPS[0];

    // 收集数据（跳过 null 值）
    const labels = [];
    const values = [];
    const pointBG = [];
    let currentIndex = -1;

    elements.forEach(e => {
      const val = getPropValue(e, propKey);
      if (val === null || val === undefined) return;
      labels.push(e.symbol);
      values.push(typeof val === 'object' && val.min ? (val.min + val.max) / 2 : val);
      const isCurrent = e.z === currentZ;
      pointBG.push(isCurrent ? propInfo.color : 'rgba(156,163,175,0.35)');
      if (isCurrent) currentIndex = labels.length - 1;
    });

    if (values.length === 0) {
      const note = document.getElementById('trendNote');
      if (note) note.textContent = `所选属性"${isEn ? propInfo.en : propInfo.zh}"在同${scope === 'period' ? (isEn ? 'period' : '周期') : (isEn ? 'group' : '族')}中暂无数据`;
      return;
    }

    // 销毁旧图表
    if (window._trendChartInstance) {
      window._trendChartInstance.destroy();
      window._trendChartInstance = null;
    }

    const labelStr  = isEn ? propInfo.en : propInfo.zh;
    const unitStr   = propInfo.unit ? `（${propInfo.unit}）` : '';
    const xTitle    = scope === 'period'
      ? (isEn ? `Period ${getPeriod(currentZ)}` : `第 ${getPeriod(currentZ)} 周期`)
      : (isEn ? 'Same Group' : '同族元素');

    // 创建新图表
    window._trendChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: labelStr,
          data: values,
          borderColor: propInfo.color,
          backgroundColor: propInfo.color + '18',
          pointBackgroundColor: pointBG,
          pointBorderColor: pointBG.map(c =>
            c === propInfo.color ? '#fff' : 'rgba(156,163,175,0.6)'
          ),
          pointBorderWidth: pointBG.map(c =>
            c === propInfo.color ? 2 : 1
          ),
          pointRadius: labels.map((_, i) => i === currentIndex ? 7 : 4),
          pointHoverRadius: 8,
          borderWidth: 2,
          fill: true,
          tension: 0.35,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 600,
          easing: 'easeOutQuart',
        },
        interaction: {
          mode: 'nearest',
          axis: 'x',
          intersect: false,
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(22,27,34,0.95)',
            titleColor: '#e6edf3',
            bodyColor: '#8b949e',
            borderColor: '#30363d',
            borderWidth: 1,
            padding: 10,
            displayColors: false,
            callbacks: {
              title: function (items) {
                const idx = items[0].dataIndex;
                const sym = labels[idx];
                const e = elements.find(e2 => e2.symbol === sym);
                return e ? `${e.name}（${sym}）` : sym;
              },
              label: function (context) {
                return `${labelStr}：${context.parsed.y.toFixed(2)} ${propInfo.unit}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: `${labelStr}${unitStr}`,
              color: '#8b949e',
              font: { size: 12 }
            },
            grid: { color: 'rgba(48,54,61,0.5)' },
            ticks: { color: '#8b949e', font: { size: 11 } }
          },
          x: {
            title: {
              display: true,
              text: xTitle,
              color: '#8b949e',
              font: { size: 12 }
            },
            grid: { display: false },
            ticks: { color: '#8b949e', font: { size: 11 } }
          }
        }
      }
    });

    // 更新说明文字
    const elName = (window.I18N && window.I18N.isEn && window.I18N.isEn())
      ? (ELEMENTS.find(e => e.z === currentZ) || {}).nameEn || el.name
      : (ELEMENTS.find(e => e.z === currentZ) || {}).name;
    const scopeLabel = scope === 'period'
      ? `第 ${getPeriod(currentZ)} 周期`
      : `第 ${(ELEMENTS.find(e => e.z === currentZ) || {}).group || '—'} 族`;
    const noteStr = isEn
      ? `Trend of ${propInfo.en} in ${scope === 'period' ? `Period ${getPeriod(currentZ)}` : `Group ${(ELEMENTS.find(e => e.z === currentZ) || {}).group || '—'}`}. ▲ marks current element (${elName}).`
      : `${scopeLabel}中"${propInfo.zh}"的变化趋势。▲ 标记当前元素（${elName}）。`;
    const noteEl = document.getElementById('trendNote');
    if (noteEl) noteEl.textContent = noteStr;
  }

  // ── 监听语言切换，重绘图表 ──
  document.addEventListener('langchange', function () {
    if (_currentEl) {
      // 短暂延迟确保 DOM 已更新
      setTimeout(() => {
        const propSelect = document.getElementById('trendPropSelect');
        if (!propSelect) return;
        const propKey = propSelect.value;
        const scope = document.querySelector('input[name="trendScope"]:checked');
        const elements = !scope || scope.value === 'period'
          ? getPeriodElements(_currentEl.z)
          : getGroupElements(_currentEl.z);
        drawTrendChart(propKey, elements, !scope ? 'period' : scope.value, _currentEl.z);
      }, 50);
    }
  });

})();
