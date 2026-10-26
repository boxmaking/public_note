// js/table.js — 周期表渲染逻辑

/* ── 周期表标准布局映射 ── */
// [period, group] → grid位置（group从1开始，18为最后一族）
// 周期表用 CSS Grid：第1列是周期标签，第2-19列是族 1-18

/* ── 辅助常量（从 ELEMENTS 中派生） ── */
var CATEGORY_CN = {
  'alkali-metal':'碱金属','alkaline-earth':'碱土金属','transition':'过渡金属',
  'post-transition':'后过渡金属','metalloid':'准金属','nonmetal':'非金属',
  'halogen':'卤素','noble-gas':'稀有气体','lanthanide':'镧系','actinide':'锕系'
};
var CRYSTAL_CN = {
  'bcc':'体心立方','fcc':'面心立方','hcp':'密排六方',
  'diamond cubic':'金刚石立方','orthorhombic':'正交',
  'monoclinic':'单斜','rhombohedral':'三方','tetragonal':'四方',
  'cubic':'立方','hexagonal':'六方','simple cubic':'简单立方','unknown':'未知'
};

function getLanthanides() { return (typeof ELEMENTS !== 'undefined') ? ELEMENTS.filter(e => e.z >= 57 && e.z <= 71) : []; }
function getActinides()  { return (typeof ELEMENTS !== 'undefined') ? ELEMENTS.filter(e => e.z >= 89 && e.z <= 103) : []; }

function buildPeriodicTable(mode) {
  const tableId = mode === 'simple' ? 'tableSimple' : 'tableFull';
  const container = document.getElementById(tableId);
  if (!container) return;
  container.innerHTML = '';

  // 主表：第1-7周期
  const mainElements = ELEMENTS.filter(e =>
    !(e.z >= 57 && e.z <= 71) && !(e.z >= 89 && e.z <= 103)
  );

  // ── 族标题行（第1行）
  const groupRow = document.createElement('div');
  groupRow.style.cssText = 'display:contents';
  // 占位（第1列：周期标签列）
  container.appendChild(makeEmpty(''));
  for (let g = 1; g <= 18; g++) {
    const gl = document.createElement('div');
    gl.className = 'group-label';
    gl.textContent = g;
    container.appendChild(gl);
  }

  // ── 第1-7行（7个周期）
  for (let p = 1; p <= 7; p++) {
    // 周期标签
    const pl = document.createElement('div');
    pl.className = 'period-label';
    pl.textContent = p;
    container.appendChild(pl);

    for (let g = 1; g <= 18; g++) {
      // 找到该位置的元素
      let el = findElement(p, g, mainElements);
      if (el) {
        container.appendChild(makeCard(el, mode));
      } else if (p === 6 && g === 3) {
        // 镧系占位
        const ph = makePlaceholder('57-71', 'lanthanide', '镧系');
        container.appendChild(ph);
      } else if (p === 7 && g === 3) {
        // 锕系占位
        const ph = makePlaceholder('89-103', 'actinide', '锕系');
        container.appendChild(ph);
      } else {
        container.appendChild(makeEmpty());
      }
    }
  }

  // ── 镧系行
  const lantWrapper = document.createElement('div');
  lantWrapper.style.cssText = `
    display:grid;
    grid-template-columns: 28px 28px repeat(15, 1fr);
    gap:3px;
    margin-top:8px;
    max-width:100%;
  `;
  // 空两格
  lantWrapper.appendChild(makeEmpty());
  const lantLabel = document.createElement('div');
  lantLabel.className = 'series-label';
  lantLabel.innerHTML = '<span style="font-size:9px;color:var(--text-muted)">La<br>系</span>';
  lantWrapper.appendChild(lantLabel);
  getLanthanides().forEach(el => lantWrapper.appendChild(makeCard(el, mode)));
  container.parentElement.appendChild(lantWrapper);

  // ── 锕系行
  const actWrapper = document.createElement('div');
  actWrapper.style.cssText = `
    display:grid;
    grid-template-columns: 28px 28px repeat(15, 1fr);
    gap:3px;
    margin-top:3px;
    max-width:100%;
  `;
  actWrapper.appendChild(makeEmpty());
  const actLabel = document.createElement('div');
  actLabel.className = 'series-label';
  actLabel.innerHTML = '<span style="font-size:9px;color:var(--text-muted)">Ac<br>系</span>';
  actWrapper.appendChild(actLabel);
  getActinides().forEach(el => actWrapper.appendChild(makeCard(el, mode)));
  container.parentElement.appendChild(actWrapper);
}

function findElement(period, group, elements) {
  return elements.find(e => e.period === period && e.group === group) || null;
}

function makeEmpty(text) {
  const d = document.createElement('div');
  d.className = 'el-empty';
  if (text) d.textContent = text;
  return d;
}

function makePlaceholder(range, cat, label) {
  const d = document.createElement('div');
  d.className = `el-card el-empty cat-${cat}`;
  d.style.cssText = 'padding:4px 2px;text-align:center;border-radius:5px;opacity:.7;cursor:default;min-height:40px;display:flex;align-items:center;justify-content:center;flex-direction:column;';
  d.innerHTML = `<span style="font-size:8px;color:rgba(255,255,255,.5)">${range}</span>
                 <span style="font-size:9px;color:rgba(255,255,255,.8);font-weight:600">${label}</span>`;
  return d;
}

function getElDisplayName(el) {
  // 语言切换时动态决定显示中文名还是英文名
  if (typeof I18N !== 'undefined' && I18N.isEn && I18N.isEn()) {
    return el.nameEn || el.name;
  }
  return el.name;
}

function makeCard(el, mode) {
  const card = document.createElement('div');
  card.className = `el-card ${mode} cat-${el.category}`;
  card.dataset.z = el.z;
  card.title = `${el.name} (${el.symbol})`;

  const stateMap = {solid:'固',liquid:'液',gas:'气',synthetic:'合'};
  const stateCls  = {solid:'s',liquid:'l',gas:'g',synthetic:'m'};

  if (mode === 'simple') {
    card.innerHTML = `
      ${el.radioactive ? '<span class="radio-flag">☢</span>' : ''}
      <span class="el-z">${el.z}</span>
      <span class="el-symbol">${el.symbol}</span>
      <span class="el-name" data-zh="${el.name}" data-en="${el.nameEn || el.name}">${getElDisplayName(el)}</span>
    `;
  } else {
    card.innerHTML = `
      ${el.radioactive ? '<span class="radio-flag">☢</span>' : ''}
      <span class="el-z">${el.z}</span>
      <span class="el-symbol">${el.symbol}</span>
      <span class="el-name" data-zh="${el.name}" data-en="${el.nameEn || el.name}">${getElDisplayName(el)}</span>
      <span class="el-mass">${el.mass}</span>
      <span class="el-config">${el.electrons.join(',')}</span>
      <span class="el-state state-${stateCls[el.state]}">${stateMap[el.state]}</span>
    `;
  }

  // 点击跳转详情页
  card.addEventListener('click', () => {
    window.location.href = `element.html?z=${el.z}`;
  });

  // 悬停提示
  card.addEventListener('mouseenter', e => showTooltip(e, el));
  card.addEventListener('mousemove',  e => moveTooltip(e));
  card.addEventListener('mouseleave', () => hideTooltip());

  return card;
}

/* ── 工具提示 ── */
let tooltip = null;

function ensureTooltip() {
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
  }
}

function showTooltip(e, el) {
  ensureTooltip();
  const catCN = (CATEGORY_CN && CATEGORY_CN[el.category]) || el.category;
  const stateCN = {solid:'固态',liquid:'液态',gas:'气态',synthetic:'人造元素'}[el.state] || '';
  const crystalCN = (CRYSTAL_CN && CRYSTAL_CN[el.crystalStructure]) || el.crystalStructure || '';

  function f(v,u) {
    if (v === null || v === undefined) return '—';
    if (typeof v === 'number') {
      if (Math.abs(v) < 0.001 || Math.abs(v) >= 1e12) return v.toExponential(2) + (u||'');
      return parseFloat(v.toFixed(2)) + (u||'');
    }
    return v + (u||'');
  }

  tooltip.innerHTML = `
    <div class="tooltip-symbol" style="color:#fff">${el.symbol}</div>
    <div class="tooltip-name">${el.name} <span style="font-weight:400;opacity:.7">${el.nameEn}</span></div>
    <div class="tooltip-info">
      <div class="tooltip-row"><span class="tooltip-l">原子序数</span><span>${el.z}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">原子量</span><span>${el.mass} u</span></div>
      <div class="tooltip-row"><span class="tooltip-l">熔点</span><span>${f(el.meltingPoint, ' °C')}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">沸点</span><span>${f(el.boilingPoint, ' °C')}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">密度</span><span>${f(el.density, ' g/cm³')}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">电负性</span><span>${el.electronegativity !== null ? el.electronegativity.toFixed(2) : '—'}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">电子排布</span><span>${el.electrons.join(', ')}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">类别</span><span>${catCN}</span></div>
      <div class="tooltip-row"><span class="tooltip-l">常温状态</span><span>${stateCN}${crystalCN ? ' · '+crystalCN : ''}</span></div>
      ${el.radioactive ? '<div class="tooltip-row"><span class="tooltip-l"></span><span style="color:#f85149">☢ 放射性</span></div>' : ''}
      <div style="font-size:10px;color:var(--text-muted);margin-top:6px;text-align:center">点击查看详情 →</div>
    </div>
  `;
  moveTooltip(e);
  tooltip.classList.add('visible');
}

function moveTooltip(e) {
  if (!tooltip) return;
  const x = e.clientX + 16;
  const y = e.clientY + 16;
  const tw = tooltip.offsetWidth || 260;
  const th = tooltip.offsetHeight || 160;
  tooltip.style.left = (x + tw > window.innerWidth - 10 ? x - tw - 30 : x) + 'px';
  tooltip.style.top  = (y + th > window.innerHeight - 10 ? y - th - 20 : y) + 'px';
}

function hideTooltip() {
  if (tooltip) tooltip.classList.remove('visible');
}

/* ── 视图切换 ── */
function switchView(view) {
  document.getElementById('viewSimple').classList.toggle('hidden', view !== 'simple');
  document.getElementById('viewFull').classList.toggle('hidden', view !== 'full');
  document.getElementById('btnSimple').classList.toggle('active', view === 'simple');
  document.getElementById('btnFull').classList.toggle('active', view === 'full');

  // 懒渲染
  if (view === 'full' && !document.getElementById('tableFull').hasChildNodes()) {
    buildPeriodicTable('full');
  }
}

/* ── 初始化 ── */
document.addEventListener('DOMContentLoaded', () => {
  buildPeriodicTable('simple');
});

/* ── 语言切换响应：更新所有元素卡片名称 ── */
document.addEventListener('langchange', (e) => {
  const isEn = e.detail && e.detail.lang === 'en';
  document.querySelectorAll('.el-card .el-name[data-zh]').forEach(span => {
    span.textContent = isEn ? (span.dataset.en || span.dataset.zh) : span.dataset.zh;
  });
  // 同步 tooltip 显示语言（下次 hover 时会重新调用 showTooltip，无需特殊处理）
});
