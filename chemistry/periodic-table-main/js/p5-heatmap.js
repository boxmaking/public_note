/**
 * P5-2：属性热力图（周期表着色）
 * 功能：用户选择属性后，周期表格子按数值自动着色
 * 包含：颜色图例、数值范围显示、支持多种属性
 */

const P5_HEATMAP_PROPERTIES = [
  { key: 'electronegativity', label: '电负性',  unit: '',    min: 0.7, max: 3.98, colors: ['#2166ac','#4393c3','#92c5de','#d1e5f0','#fddbc7','#f4a582','#d6604d','#b2182b'] },
  { key: 'atomicRadius',    label: '原子半径',  unit: 'pm',  min: 30,  max: 300,  colors: ['#147432','#2ab763','#a6d96a','#f1feb4','#fdae61','#f46d43','#d73027'] },
  { key: 'density',         label: '密度',      unit: 'g/cm³', min: 0.09, max: 22.6, colors: ['#08519c','#3182bd','#6baed6','#bdd7e7','#fddbc7','#f4a582','#d73027'] },
  { key: 'meltingPoint',    label: '熔点',      unit: '°C',  min: -272.2, max: 3800, colors: ['#0571b0','#92c5de','#e6f5d0','#fdae61','#d73027'] },
  { key: 'boilingPoint',    label: '沸点',      unit: '°C',  min: -268.9, max: 5900, colors: ['#2166ac','#4393c3','#92c5de','#fddbc7','#f4a582','#d6604d'] },
  { key: 'mass',            label: '原子量',    unit: 'u',   min: 1.008, max: 294,   colors: ['#1465ac','#4393c3','#92c5de','#f1feb4','#fdae61','#d73027'] },
  { key: 'electronAffinity',label: '电子亲和能', unit: 'kJ/mol', min: -53, max: 349, colors: ['#8e0152','#c51b7d','#de77ae','#f1b6da','#eadaba','#7fbc41','#4d9221'] },
  { key: 'ionizationEnergy',label: '第一电离能', unit: 'kJ/mol', min: 374, max: 2372, colors: ['#330039','#67136b','#a02280','#e72582','#f49ac2','#fce8ec'] },
];

/* ---------- 获取元素属性值 ---------- */
function getPropertyValue(el, key) {
  switch (key) {
    case 'electronegativity':  return el.electronegativity ?? null;
    case 'atomicRadius':      return el.atomicRadius ?? el.vdwRadius ?? null;
    case 'density':           return el.density ?? null;
    case 'meltingPoint':     return el.meltingPoint ?? null;
    case 'boilingPoint':     return el.boilingPoint ?? null;
    case 'mass':             return Array.isArray(el.mass) ? (el.mass[0]+el.mass[1])/2 : el.mass;
    case 'electronAffinity': return el.electronAffinity ?? null;
    case 'ionizationEnergy': return el.ionizationEnergy ?? null;
    default: return null;
  }
}

/* ---------- 数值映射到颜色 ---------- */
function valueToColor(value, propCfg) {
  if (value === null || value === undefined) return '#555';
  const { min, max, colors } = propCfg;
  const t = Math.max(0, Math.min(1, (value - min) / (max - min)));
  const idx = Math.floor(t * (colors.length - 1));
  const c1 = colors[idx];
  const c2 = colors[Math.min(idx + 1, colors.length - 1)];
  // 简化：直接返回色阶颜色
  return colors[Math.round(t * (colors.length - 1))];
}

/* ---------- 应用热力图着色 ---------- */
function applyHeatmap(propertyKey) {
  const propCfg = P5_HEATMAP_PROPERTIES.find(p => p.key === propertyKey);
  if (!propCfg) return;

  // 收集所有有效值
  const values = ELEMENTS
    .map(el => getPropertyValue(el, propertyKey))
    .filter(v => v !== null && v !== undefined);

  if (values.length === 0) return;

  // 动态计算 min/max（若数据超出预设范围）
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);
  const effectiveMin = Math.min(propCfg.min, dataMin);
  const effectiveMax = Math.max(propCfg.max, dataMax);

  // 遍历所有元素格子着色
  ELEMENTS.forEach(el => {
    const val = getPropertyValue(el, propertyKey);
    const cell = document.querySelector(`.cell[z="${el.z}"]`);
    if (!cell) return;

    if (val === null || val === undefined) {
      cell.style.background = '#333';
      cell.title = `${el.nameZh || el.name}：${propCfg.label} — 无数据`;
      return;
    }

    const t = Math.max(0, Math.min(1, (val - effectiveMin) / (effectiveMax - effectiveMin)));
    const colorIdx = Math.round(t * (propCfg.colors.length - 1));
    const color = propCfg.colors[colorIdx];
    cell.style.background = color;
    cell.style.borderColor = color;

    // 文字颜色自适应
    const rgb = hexToRgb(color);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    cell.style.color = brightness > 128 ? '#000' : '#fff';

    cell.title = `${el.nameZh || el.name} (${el.symbol})\n${propCfg.label}：${val.toFixed(2)} ${propCfg.unit}`;
  });

  // 更新颜色图例
  updateHeatmapLegend(propCfg, effectiveMin, effectiveMax);
}

/* ---------- HEX 转 RGB ---------- */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  return { r, g, b };
}

/* ---------- 更新颜色图例 ---------- */
function updateHeatmapLegend(propCfg, dataMin, dataMax) {
  const legendEl = document.getElementById('heatmapLegend');
  if (!legendEl) return;

  let html = `<div style="margin-bottom:6px;font-weight:600;color:var(--accent)">${propCfg.label} 图例</div><div style="display:flex;align-items:center;gap:4px;flex-wrap:wrap">`;
  propCfg.colors.forEach((c, i) => {
    const ratio = i / (propCfg.colors.length - 1);
    const val = dataMin + ratio * (dataMax - dataMin);
    html += `<div style="display:flex;flex-direction:column;align-items:center;font-size:9px;color:var(--muted)">
      <div style="width:28px;height:16px;background:${c};border-radius:2px"></div>
      <span>${val.toFixed(1)}</span>
    </div>`;
  });
  html += `</div>
    <div style="margin-top:6px;font-size:11px;color:var(--muted)">
      数值范围：${dataMin.toFixed(2)} – ${dataMax.toFixed(2)} ${propCfg.unit}
    </div>`;
  legendEl.innerHTML = html;
  legendEl.style.display = 'block';
}

/* ---------- 重置热力图 ---------- */
function resetHeatmap() {
  ELEMENTS.forEach(el => {
    const cell = document.querySelector(`.cell[z="${el.z}"]`);
    if (!cell) return;
    // 恢复默认样式（根据元素类别）
    const catColors = {
      '非金属':     '#e8f5e9', '碱金属': '#fff3e0', '碱土金属': '#fce4ec',
      '过渡金属':    '#e3f2fd', '稀土金属': '#f3e5f5', '惰性气体': '#ede7f6',
      '卤素':       '#e0f7fa', '准金属': '#f1f8e9', '过渡金属/贵金属': '#e3f2fd',
      '放射性金属':  '#fbe9e7', '镧系': '#f3e5f5', '锕系': '#fff8e1',
      'unknown':    '#37474f',
    };
    const bg = catColors[el.category] || '#e3f2fd';
    cell.style.background = bg;
    cell.style.borderColor = bg;
    cell.style.color = '#000';
    cell.title = '';
  });

  const legendEl = document.getElementById('heatmapLegend');
  if (legendEl) legendEl.style.display = 'none';
}

/* ---------- 创建热力图控制面板 ---------- */
function createHeatmapPanel() {
  // 避免重复创建
  if (document.getElementById('heatmapPanel')) return;

  const panel = document.createElement('div');
  panel.id = 'heatmapPanel';
  panel.style.cssText = `
    position: fixed; top: 80px; right: 20px; z-index: 1000;
    background: var(--card, #161b22); border: 1px solid var(--border, #30363d);
    border-radius: 12px; padding: 16px; width: 260px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.4); display: none;
    max-height: 80vh; overflow-y: auto;
  `;

  let optionsHtml = '<option value="">— 选择属性 —</option>';
  P5_HEATMAP_PROPERTIES.forEach(p => {
    optionsHtml += `<option value="${p.key}">${p.label} (${p.unit})</option>`;
  });

  panel.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <span style="font-weight:700;color:var(--accent)">📊 属性热力图</span>
      <button onclick="document.getElementById('heatmapPanel').style.display='none'"
        style="background:none;border:none;color:var(--muted);font-size:18px;cursor:pointer">✕</button>
    </div>
    <select id="heatmapSelect" style="width:100%;padding:6px 8px;border-radius:6px;border:1px solid var(--border);background:var(--bg);color:var(--text);margin-bottom:10px">
      ${optionsHtml}
    </select>
    <button onclick="applyHeatmap(document.getElementById('heatmapSelect').value)"
      style="width:100%;padding:8px;background:var(--accent);color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;margin-bottom:8px">
      🎨 应用着色
    </button>
    <button onclick="resetHeatmap()"
      style="width:100%;padding:8px;background:var(--border);color:var(--text);border:none;border-radius:6px;cursor:pointer;font-weight:600">
      ↩️ 重置
    </button>
    <div id="heatmapLegend" style="display:none;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)"></div>
    <div style="margin-top:10px;font-size:11px;color:var(--muted);line-height:1.6">
      💡 点击元素可查看具体数值<br>
      颜色越深表示数值越大
    </div>
  `;

  document.body.appendChild(panel);
}

/* ---------- 切换热力图面板 ---------- */
function toggleHeatmapPanel() {
  createHeatmapPanel();
  const panel = document.getElementById('heatmapPanel');
  if (panel) {
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
  }
}

// 导出到全局
if (typeof window !== 'undefined') {
  window.toggleHeatmapPanel = toggleHeatmapPanel;
  window.applyHeatmap = applyHeatmap;
  window.resetHeatmap = resetHeatmap;
}
