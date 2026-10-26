/**
 * 数据导出模块
 * 功能：JSON 导出、CSV 导出
 * 用法：在 index.html 中加载此文件，然后调用
 *   exportJson(ELEMENTS)   — 下载 JSON 文件
 *   exportCsv(ELEMENTS)    — 下载 CSV 文件
 */

/**
 * 导出为 JSON 文件
 */
function exportJson(ELEMENTS) {
  var data = JSON.stringify(ELEMENTS, null, 2);
  var blob = new Blob([data], { type: 'application/json;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'elements-' + new Date().toISOString().slice(0,10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * 导出为 CSV 文件
 */
function exportCsv(ELEMENTS) {
  // CSV 表头（选择主要字段）
  var headers = [
    'z', 'symbol', 'name', 'nameEn', 'mass', 'category',
    'state', 'radioactive', 'period', 'group',
    'meltingPoint', 'boilingPoint', 'density', 'electronegativity',
    'atomicRadius', 'covalentRadius', 'vdwRadius',
    'stdElectrodePotential', 'redoxCouple',
    'ghsSignal', 'carcinogenicity',
    'pricePerKg', 'majorMinerals',
  ];

  var csvRows = [];
  csvRows.push(headers.join(','));

  ELEMENTS.forEach(function(el) {
    var row = headers.map(function(h) {
      var val = el[h];
      if (val === null || val === undefined) return '';
      if (typeof val === 'string') {
        // 转义双引号、逗号和换行
        return '"' + val.replace(/"/g, '""') + '"';
      }
      if (Array.isArray(val)) return '"' + val.join(';') + '"';
      return val;
    });
    csvRows.push(row.join(','));
  });

  // BOM + CSV
  var BOM = '\uFEFF';
  var blob = new Blob([BOM + csvRows.join('\n')], { type: 'text/csv;charset=utf-8' });
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement('a');
  a.href     = url;
  a.download = 'elements-' + new Date().toISOString().slice(0,10) + '.csv';
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * 在页面中显示导出弹窗
 */
function showExportDialog(ELEMENTS) {
  var overlay = document.getElementById('exportOverlay');
  if (!overlay) {
    // 创建弹窗
    overlay = document.createElement('div');
    overlay.id = 'exportOverlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:9999;';
    overlay.innerHTML = [
      '<div style="background:var(--bg-card);border-radius:12px;padding:32px;max-width:420px;width:90%;box-shadow:0 8px 32px rgba(0,0,0,0.3);">',
        '<h3 style="margin:0 0 16px 0;color:var(--text-primary);">📦 数据导出</h3>',
        '<p style="color:var(--text-secondary);margin:0 0 20px 0;font-size:14px;">选择导出格式：</p>',
        '<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:24px;">',
          '<button onclick="doExport(\'json\')" style="padding:12px 16px;background:var(--accent-blue);color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;">📋 导出 JSON（完整数据）</button>',
          '<button onclick="doExport(\'csv\')" style="padding:12px 16px;background:var(--accent-green);color:#fff;border:none;border-radius:8px;font-size:14px;cursor:pointer;">📊 导出 CSV（表格数据）</button>',
        '</div>',
        '<button onclick="document.getElementById(\'exportOverlay\').style.display=\'none\'" style="width:100%;padding:10px;background:var(--bg-main);color:var(--text-secondary);border:1px solid var(--border);border-radius:8px;cursor:pointer;">取消</button>',
      '</div>',
    ].join('');
    document.body.appendChild(overlay);
  }
  overlay.style.display = 'flex';

  // 全局导出函数
  window.doExport = function(format) {
    overlay.style.display = 'none';
    if (format === 'json') exportJson(ELEMENTS);
    if (format === 'csv')  exportCsv(ELEMENTS);
  };
}
