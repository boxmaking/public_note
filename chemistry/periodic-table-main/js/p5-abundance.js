/**
 * P5-6 元素丰度图模块（改进版）
 * 功能：展示元素在地壳/太阳系/人体中的丰度对比，支持线性/对数坐标切换
 * 依赖：Chart.js
 * 改进：修复 CSS 变量名、添加线性/对数切换、支持 i18n、优化图表交互
 */

(function () {
  'use strict';

  // ── 丰度对比环境 ──
  const ENVIRONMENTS = [
    { key: 'crust',  zh: '地壳',  en: 'Crust',  color: '#a855f7', icon: '🌍' },
    { key: 'solar',  zh: '太阳系', en: 'Solar',  color: '#f59e0b', icon: '☀️' },
    { key: 'human',  zh: '人体',  en: 'Human',  color: '#10b981', icon: '🧑' },
  ];

  // ── 当前选中的元素 ──
  let _currentEl = null;
  let _currentScale = 'log'; // 'log' 或 'linear'

  // ── 获取丰度数据（从 ABUNDANCE_DATA 或 elements.js 中读取）──
  function getAbundance(z, env) {
    if (window.ABUNDANCE_DATA && window.ABUNDANCE_DATA[env] && window.ABUNDANCE_DATA[env][z] !== undefined) {
      return window.ABUNDANCE_DATA[env][z];
    }
    // 回退：从元素对象中读取
    const el = window.ELEMENTS && window.ELEMENTS.find(e => e.z === z);
    if (el && el.abundance && el.abundance[env] !== undefined) return el.abundance[env];
    return null;
  }

  // ── 格式化丰度值 ──
  function formatAbundance(val, env) {
    if (val === null || val === undefined) return '—';
    if (env === 'solar') return 'Si=10⁶ 基准，相对 ' + val.toExponential(1);
    if (val >= 10000) return (val / 10000).toFixed(1) + '%';
    if (val >= 1) return val.toFixed(2) + ' ppm';
    return val.toExponential(1) + ' ppm';
  }

  // ── 丰度备注 ──
  function getAbundanceNote(el, environment) {
    const notes = {
      crust: {
        8:  '氧是地壳中含量最高的元素（46.1%）',
        14: '硅是地壳中第二高的元素（27.7%）',
        13: '铝是地壳中含量最高的金属元素（8.2%）',
        26: '铁是地壳中含量最高的金属元素（5.63%）',
      },
      solar: {
        1:  '氢是太阳系中含量最高的元素',
        2:  '氦是太阳系中第二丰富的元素（来自恒星核融合）',
      },
      human: {
        8:  '氧主要存在于水和有机分子中',
        6:  '碳是有机分子的基础元素',
        1:  '氢主要存在于水和有机分子中',
        20: '钙是骨骼和牙齿的主要成分',
        15: '磷是骨骼（羟基磷灰石）和 ATP 的重要成分',
      },
    };
    return (notes[environment] && notes[environment][el.z]) || '';
  }

  // ── 渲染丰度卡片 ──
  window.renderAbundanceChart = function (el) {
    const card = document.getElementById('abundanceCard');
    const body = document.getElementById('abundanceBody');
    if (!card || !body) return;

    _currentEl = el;
    card.style.display = 'block';

    // 检查是否有数据
    const hasData = ENVIRONMENTS.some(env => getAbundance(el.z, env.key) !== null);

    if (!hasData) {
      body.innerHTML = '<p style="color:var(--text-muted);font-size:13px">当前元素的丰度数据暂缺</p>';
      return;
    }

    const isEn = window.I18N && window.I18N.isEn && window.I18N.isEn();

    // 构建内部 HTML（修复 CSS 变量名 + 添加坐标切换）
    body.innerHTML = `
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:12px">
        <label style="font-size:12px;color:var(--text-muted);white-space:nowrap">对比维度：</label>
        <label style="font-size:12px;color:var(--text-muted);margin-left:4px;cursor:pointer">
          <input type="checkbox" id="abCrust" checked style="margin-right:4px">🌍 ${isEn ? 'Crust' : '地壳'}
        </label>
        <label style="font-size:12px;color:var(--text-muted);margin-left:8px;cursor:pointer">
          <input type="checkbox" id="abSolar" checked style="margin-right:4px">☀️ ${isEn ? 'Solar' : '太阳系'}
        </label>
        <label style="font-size:12px;color:var(--text-muted);margin-left:8px;cursor:pointer">
          <input type="checkbox" id="abHuman" style="margin-right:4px">🧑 ${isEn ? 'Human' : '人体'}
        </label>
        <span style="margin-left:auto;font-size:12px;color:var(--text-muted)">坐标：</span>
        <label style="font-size:12px;color:var(--text-muted);cursor:pointer">
          <input type="radio" name="abScale" value="log" checked style="margin-right:4px">log₁₀
        </label>
        <label style="font-size:12px;color:var(--text-muted);margin-left:6px;cursor:pointer">
          <input type="radio" name="abScale" value="linear" style="margin-right:4px">线性
        </label>
      </div>
      <div style="position:relative;height:260px">
        <canvas id="abundanceChartCanvas"></canvas>
      </div>
      <div id="abundanceTable" style="margin-top:12px;font-size:12px"></div>
      <p id="abundanceNote" style="margin-top:10px;font-size:11px;color:var(--text-muted);line-height:1.6"></p>
    `;

    // 绑定事件
    ['abCrust', 'abSolar', 'abHuman'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('change', updateAbundanceChart);
    });
    document.querySelectorAll('input[name="abScale"]').forEach(r => {
      r.addEventListener('change', function () {
        _currentScale = this.value;
        updateAbundanceChart();
      });
    });

    // 初始渲染
    updateAbundanceChart();

    function updateAbundanceChart() {
      const showCrust = document.getElementById('abCrust').checked;
      const showSolar = document.getElementById('abSolar').checked;
      const showHuman = document.getElementById('abHuman').checked;
      drawAbundanceChart(el, { showCrust, showSolar, showHuman, scale: _currentScale });
      updateAbundanceTable(el, { showCrust, showSolar, showHuman });
    }

    function updateAbundanceTable(el, options) {
      const tableDiv = document.getElementById('abundanceTable');
      const isEn = window.I18N && window.I18N.isEn && window.I18N.isEn();
      let html = '<table style="width:100%;border-collapse:collapse;font-size:12px">';
      html += '<tr style="background:var(--bg-card);font-weight:600">';
      html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">' + (isEn ? 'Environment' : '环境') + '</td>';
      html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">' + (isEn ? 'Abundance' : '丰度') + '</td>';
      html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border);color:var(--text-muted)">' + (isEn ? 'Note' : '说明') + '</td>';
      html += '</tr>';

      if (options.showCrust) {
        const val = getAbundance(el.z, 'crust');
        html += '<tr>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">🌍 ' + (isEn ? 'Crust' : '地壳') + '</td>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">' + formatAbundance(val, 'crust') + '</td>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border);color:var(--text-muted)">' + getAbundanceNote(el, 'crust') + '</td>';
        html += '</tr>';
      }

      if (options.showSolar) {
        const val = getAbundance(el.z, 'solar');
        html += '<tr>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">☀️ ' + (isEn ? 'Solar' : '太阳系') + '</td>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">' + formatAbundance(val, 'solar') + '</td>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border);color:var(--text-muted)">' + (isEn ? 'Relative to Si=10⁶' : '以 Si=10⁶ 为基准的相对原子数') + '</td>';
        html += '</tr>';
      }

      if (options.showHuman) {
        const val = getAbundance(el.z, 'human');
        html += '<tr>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">🧑 ' + (isEn ? 'Human' : '人体') + '</td>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border)">' + formatAbundance(val, 'human') + '</td>';
        html += '<td style="padding:6px 10px;border-bottom:1px solid var(--border);color:var(--text-muted)">' + getAbundanceNote(el, 'human') + '</td>';
        html += '</tr>';
      }

      html += '</table>';
      tableDiv.innerHTML = html;
    }
  };

  // ── 绘制丰度对比图 ──
  function drawAbundanceChart(el, options) {
    const canvas = document.getElementById('abundanceChartCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const isEn = window.I18N && window.I18N.isEn && window.I18N.isEn();
    const { scale } = options;

    const datasets = [];

    ENVIRONMENTS.forEach(env => {
      if (!options['show' + env.key.charAt(0).toUpperCase() + env.key.slice(1)]) return;
      const val = getAbundance(el.z, env.key);
      if (val === null) return;

      let dataVal;
      if (scale === 'log') {
        // 对数坐标：使用 log10(val + 1) 避免 log(0)
        dataVal = Math.log10(val + 1);
      } else {
        // 线性坐标：使用原始值
        dataVal = val;
      }

      datasets.push({
        label: isEn ? env.en : env.zh,
        data: [dataVal],
        backgroundColor: env.color + 'cc',
        borderColor: env.color,
        borderRadius: 6,
        barPercentage: 0.6,
      });
    });

    if (datasets.length === 0) return;

    // 销毁旧图表
    if (window._abundanceChartInstance) {
      window._abundanceChartInstance.destroy();
      window._abundanceChartInstance = null;
    }

    // x 轴配置
    let xAxisConfig;
    if (scale === 'log') {
      xAxisConfig = {
        type: 'linear',
        title: {
          display: true,
          text: isEn ? 'Abundance (log₁₀)' : '丰度（对数坐标 log₁₀）',
          color: '#8b949e',
          font: { size: 12 }
        },
        grid: { color: 'rgba(48,54,61,0.5)' },
        ticks: {
          color: '#8b949e',
          font: { size: 10 },
          callback: function (val) {
            return '10^' + val.toFixed(0);
          }
        }
      };
    } else {
      xAxisConfig = {
        type: 'logarithmic',
        title: {
          display: true,
          text: isEn ? 'Abundance (log scale axis)' : '丰度（对数坐标轴）',
          color: '#8b949e',
          font: { size: 12 }
        },
        grid: { color: 'rgba(48,54,61,0.5)' },
        ticks: {
          color: '#8b949e',
          font: { size: 10 },
          callback: function (val) {
            if (val >= 100000) return (val / 10000).toFixed(0) + '%';
            if (val >= 100) return val.toFixed(0);
            if (val > 0) return val.toExponential(0);
            return '';
          }
        }
      };
    }

    // 创建新图表（水平柱状图）
    window._abundanceChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [isEn ? (el.nameEn || el.name) + ' (' + el.symbol + ')' : el.name + '（' + el.symbol + '）'],
        datasets: datasets,
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500,
          easing: 'easeOutQuart',
        },
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { color: '#8b949e', font: { size: 11 }, boxWidth: 12, padding: 12 }
          },
          tooltip: {
            backgroundColor: 'rgba(22,27,34,0.95)',
            titleColor: '#e6edf3',
            bodyColor: '#8b949e',
            borderColor: '#30363d',
            borderWidth: 1,
            padding: 10,
            callbacks: {
              label: function (context) {
                const rawVal = getAbundance(el.z,
                  ENVIRONMENTS.find(e => (isEn ? e.en : e.zh) === context.dataset.label).key
                );
                if (rawVal === null) return '';
                if (scale === 'log') {
                  const actual = Math.pow(10, context.parsed.x) - 1;
                  return (isEn ? 'Abundance: ≈ ' : '丰度：≈ ') + actual.toExponential(2);
                } else {
                  return (isEn ? 'Abundance: ' : '丰度：') + formatAbundance(rawVal,
                    ENVIRONMENTS.find(e => (isEn ? e.en : e.zh) === context.dataset.label).key
                  );
                }
              }
            }
          }
        },
        scales: {
          x: xAxisConfig,
          y: {
            grid: { display: false },
            ticks: { color: '#8b949e', font: { size: 11 } }
          }
        }
      }
    });

    // 更新说明文字
    const src = window.ABUNDANCE_DATA && window.ABUNDANCE_DATA.sources && window.ABUNDANCE_DATA.sources.crust
      ? window.ABUNDANCE_DATA.sources.crust
      : 'CRC Handbook / USGS';
    const noteEl = document.getElementById('abundanceNote');
    if (noteEl) {
      noteEl.textContent = (isEn ? `Data source: ${src}. ` : `数据来源：${src}。`)
        + (scale === 'log'
          ? (isEn ? 'Log coordinate (log₁₀) for comparing values across orders of magnitude.' : '丰度数据使用对数坐标展示（log₁₀），便于对比差异极大的数值。')
          : (isEn ? 'Linear coordinate view. Use log scale for better comparison of widely varying values.' : '当前为线性坐标视图。建议使用对数坐标以便对比跨度较大的数值。'));
    }
  }

  // ── 监听语言切换，重绘图表 ──
  document.addEventListener('langchange', function () {
    if (_currentEl) {
      setTimeout(() => {
        const card = document.getElementById('abundanceCard');
        if (!card || card.style.display === 'none') return;
        // 重新渲染整个卡片以更新所有文本
        window.renderAbundanceChart(_currentEl);
      }, 50);
    }
  });

})();
