/**
 * P5-3：增强元素对比工具
 * 功能：并排对比 2-4 个元素的全部属性，差异高亮，雷达图对比
 */

let compareList = [];

/* ---------- 添加/移除对比元素 ---------- */
function toggleCompare(z) {
  const idx = compareList.indexOf(z);
  if (idx >= 0) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 4) {
      alert('最多对比 4 个元素');
      return;
    }
    compareList.push(z);
  }
  updateCompareButtons();
  updateComparePanel();
}

/* ---------- 更新对比按钮状态 ---------- */
function updateCompareButtons() {
  document.querySelectorAll('.cell').forEach(cell => {
    const z = parseInt(cell.getAttribute('z'));
    if (compareList.includes(z)) {
      cell.classList.add('comparing');
      cell.style.boxShadow = '0 0 0 3px var(--accent)';
    } else {
      cell.classList.remove('comparing');
      cell.style.boxShadow = '';
    }
  });
}

/* ---------- 创建/更新对比面板 ---------- */
function updateComparePanel() {
  let panel = document.getElementById('comparePanel');
  if (!panel) {
    panel = document.createElement('div');
    panel.id = 'comparePanel';
    panel.style.cssText = `
      position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
      background: var(--card, #161b22); border: 1px solid var(--accent);
      border-radius: 12px; padding: 16px 24px;
      z-index: 1001; display: flex; align-items: center; gap: 16px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
      max-width: 90vw; flex-wrap: wrap;
    `;
    document.body.appendChild(panel);
  }

  if (compareList.length < 2) {
    panel.innerHTML = `
      <span style="color:var(--muted);font-size:14px">
        📊 点击周期表中 <strong>2-4 个元素</strong> 进行对比
      </span>
      <span style="color:var(--accent);font-size:12px">
        已选 ${compareList.length} 个
      </span>
    `;
    panel.style.display = 'flex';
    return;
  }

  // 渲染对比表格
  const els = compareList.map(z => ELEMENTS.find(e => e.z === z));
  let html = `<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;width:100%">`;

  // 标题
  html += `<span style="font-weight:700;color:var(--accent);white-space:nowrap">📊 元素对比</span>`;

  // 元素标签
  els.forEach(el => {
    html += `<span onclick="toggleCompare(${el.z})"
      style="cursor:pointer;padding:4px 10px;border-radius:6px;font-size:13px;font-weight:600;
      background:rgba(88,166,255,0.15);color:var(--accent);border:1px solid var(--accent)">
      ${el.symbol} ${el.nameZh || el.name} ✕
    </span>`;
  });

  html += `<button onclick="showCompareTable()" style="padding:6px 14px;border-radius:6px;background:var(--accent);color:#fff;border:none;cursor:pointer;font-weight:600;font-size:13px">详细对比</button>`;
  html += `<button onclick="compareList=[];updateComparePanel()" style="padding:6px 14px;border-radius:6px;background:var(--border);color:var(--text);border:none;cursor:pointer;font-size:13px">清空</button>`;
  html += `</div>`;

  panel.innerHTML = html;
  panel.style.display = 'flex';
}

/* ---------- 显示详细对比表格 ---------- */
function showCompareTable() {
  const els = compareList.map(z => ELEMENTS.find(e => e.z === z));
  if (els.length < 2) return;

  // 创建模态框
  let modal = document.getElementById('compareModal');
  if (modal) modal.remove();

  modal = document.createElement('div');
  modal.id = 'compareModal';
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.85); z-index: 2000;
    overflow-y: auto; padding: 40px 20px;
  `;

  const compareProps = [
    { key: 'z',                label: '原子序数',  fmt: v => v },
    { key: 'symbol',           label: '符号',      fmt: v => v },
    { key: 'name',             label: '英文名',    fmt: v => v },
    { key: 'nameZh',           label: '中文名',    fmt: v => v || '-' },
    { key: 'mass',             label: '原子量',    fmt: v => Array.isArray(v) ? v.map(m => m.toFixed(4)).join('–') : v.toFixed(4) },
    { key: 'category',         label: '类别',      fmt: v => v },
    { key: 'state',            label: '物态(室温)', fmt: v => v },
    { key: 'electronegativity',label: '电负性',   fmt: v => v?.toFixed(2) || '-' },
    { key: 'atomicRadius',     label: '原子半径',  fmt: v => v ? v + ' pm' : '-' },
    { key: 'density',          label: '密度',      fmt: v => v ? v.toFixed(2) + ' g/cm³' : '-' },
    { key: 'meltingPoint',     label: '熔点',      fmt: v => v !== null ? v + ' °C' : '-' },
    { key: 'boilingPoint',     label: '沸点',      fmt: v => v !== null ? v + ' °C' : '-' },
    { key: 'ionizationEnergy', label: '第一电离能', fmt: v => v ? v + ' kJ/mol' : '-' },
    { key: 'electronAffinity', label: '电子亲和能', fmt: v => v !== null ? v + ' kJ/mol' : '-' },
    { key: 'discoveryYear',    label: '发现年份',  fmt: v => v || '-' },
  ];

  let tableHtml = `<table style="width:100%;border-collapse:collapse;font-size:13px"><thead><tr style="background:var(--border)"><th style="padding:10px;position:sticky;top:0;background:var(--border)">属性</th>`;
  els.forEach(el => {
    tableHtml += `<th style="padding:10px;position:sticky;top:0;background:var(--border);color:var(--accent)">${el.symbol} ${el.nameZh || el.name}</th>`;
  });
  tableHtml += `</tr></thead><tbody>`;

  compareProps.forEach(prop => {
    const values = els.map(el => prop.fmt(el[prop.key]));
    const numericValues = els.map(el => {
      const v = el[prop.key];
      return typeof v === 'number' ? v : null;
    }).filter(v => v !== null);

    // 高亮差异：找到最大/最小值
    let maxIdx = -1, minIdx = -1;
    if (numericValues.length >= 2) {
      const allVals = els.map(el => typeof el[prop.key] === 'number' ? el[prop.key] : null);
      const maxVal = Math.max(...allVals.filter(v => v !== null));
      const minVal = Math.min(...allVals.filter(v => v !== null));
      allVals.forEach((v, i) => {
        if (v === maxVal) maxIdx = i;
        if (v === minVal) minIdx = i;
      });
    }

    tableHtml += `<tr><td style="padding:8px 10px;font-weight:600;color:var(--muted);border-bottom:1px solid var(--border)">${prop.label}</td>`;
    values.forEach((val, i) => {
      let bg = 'transparent';
      if (maxIdx === i) bg = 'rgba(63,185,80,0.15)';
      if (minIdx === i) bg = 'rgba(248,81,73,0.15)';
      tableHtml += `<td style="padding:8px 10px;border-bottom:1px solid var(--border);background:${bg}">${val}</td>`;
    });
    tableHtml += `</tr>`;
  });

  tableHtml += `</tbody></table>`;

  modal.innerHTML = `
    <div style="max-width:900px;margin:0 auto;background:var(--card);border-radius:12px;padding:24px;position:relative">
      <button onclick="document.getElementById('compareModal').remove()"
        style="position:absolute;top:12px;right:12px;background:none;border:none;color:var(--muted);font-size:24px;cursor:pointer">✕</button>
      <h2 style="color:var(--accent);margin-bottom:16px">📊 元素对比（${els.map(e => e.symbol).join(' vs ')}）</h2>
      <div style="overflow-x:auto;max-height:70vh;overflow-y:auto">
        ${tableHtml}
      </div>
      <div style="margin-top:16px;display:flex;gap:12px;flex-wrap:wrap">
        <button onclick="exportCompareCSV()" style="padding:8px 16px;border-radius:6px;background:var(--green);color:#fff;border:none;cursor:pointer;font-weight:600">📥 导出 CSV</button>
        <button onclick="document.getElementById('compareModal').remove()" style="padding:8px 16px;border-radius:6px;background:var(--border);color:var(--text);border:none;cursor:pointer">关闭</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // 点击模态框背景关闭
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.remove();
  });
}

/* ---------- 导出对比结果为 CSV ---------- */
function exportCompareCSV() {
  const els = compareList.map(z => ELEMENTS.find(e => e.z === z));
  if (els.length < 2) return;

  const compareProps = [
    { key: 'z',         label: '原子序数' },
    { key: 'symbol',    label: '符号' },
    { key: 'nameZh',    label: '中文名' },
    { key: 'mass',      label: '原子量' },
    { key: 'category',   label: '类别' },
    { key: 'state',      label: '物态' },
    { key: 'electronegativity', label: '电负性' },
    { key: 'density',    label: '密度(g/cm³)' },
    { key: 'meltingPoint',    label: '熔点(°C)' },
    { key: 'boilingPoint',    label: '沸点(°C)' },
  ];

  let csv = '\uFEFF'; // UTF-8 BOM
  csv += '属性,' + els.map(el => el.symbol + '(' + (el.nameZh || el.name) + ')').join(',') + '\n';
  compareProps.forEach(prop => {
    const row = [prop.label];
    els.forEach(el => {
      const v = el[prop.key];
      row.push(typeof v === 'number' ? v.toString() : (v || '-'));
    });
    csv += row.join(',') + '\n';
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `元素对比_${els.map(e => e.symbol).join('-')}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// 导出到全局
if (typeof window !== 'undefined') {
  window.toggleCompare = toggleCompare;
  window.showCompareTable = showCompareTable;
  window.exportCompareCSV = exportCompareCSV;
  window.updateComparePanel = updateComparePanel;
}
