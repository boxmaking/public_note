/**
 * P3 工业安全数据渲染模块
 * 用法：在 element.html 的 <script> 区域加载此文件，
 *       然后在 init() 中调用 renderP3Cards(el);
 */

/**
 * 渲染 GHS 安全分类卡片
 */
function renderGhs(el) {
  var body = document.getElementById('ghsBody');
  if (!body) return;

  var html = '';

  // GHS 象形图标签
  var ghsLabels = {
    'GHS01': '💥 爆炸',
    'GHS02': '🔥 易燃',
    'GHS03': '🔥 助燃',
    'GHS04': '💨 高压气体',
    'GHS05': '🧪 腐蚀',
    'GHS06': '💀 急性毒性',
    'GHS07': '❗ 刺激性',
    'GHS08': '🫁 健康危害',
    'GHS09': '🌊 环境危害',
  };

  if (el.ghsPictograms && el.ghsPictograms.length > 0) {
    html += '<div style="margin-bottom:10px">';
    el.ghsPictograms.forEach(function(code) {
      var label = ghsLabels[code] || code;
      html += '<span style="display:inline-block;background:var(--bg-card);border:1px solid var(--border);border-radius:6px;padding:4px 10px;margin:3px;font-size:12px;">' + label + '</span>';
    });
    html += '</div>';
  }

  // 信号词
  if (el.ghsSignal) {
    var color = el.ghsSignal === 'Danger' ? 'var(--accent-red)' : 'var(--accent-orange)';
    html += '<div style="margin-bottom:6px"><strong>信号词：</strong><span style="color:' + color + ';font-weight:700;"> ' + el.ghsSignal + '</span></div>';
  }

  // H 语句
  if (el.ghsHStatements && el.ghsHStatements.length > 0) {
    html += '<div style="margin-bottom:6px"><strong>H 语句：</strong>';
    html += '<span style="color:var(--accent-red);font-size:12px;">' + el.ghsHStatements.join(', ') + '</span></div>';
  }

  // P 语句
  if (el.ghsPStatements && el.ghsPStatements.length > 0) {
    html += '<div style="margin-bottom:6px"><strong>P 语句：</strong>';
    html += '<span style="color:var(--accent-blue);font-size:12px;">' + el.ghsPStatements.join(', ') + '</span></div>';
  }

  // UN 编号 & 运输分类
  if (el.unNumber) {
    html += '<div style="margin-bottom:6px"><strong>UN 编号：</strong>' + el.unNumber + '</div>';
  }
  if (el.transportClass) {
    html += '<div style="margin-bottom:6px"><strong>运输分类：</strong>' + el.transportClass + '</div>';
  }

  if (html === '') {
    html = '<p style="color:var(--text-muted)">该元素无 GHS 分类数据。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染毒理与职业暴露卡片
 */
function renderToxic(el) {
  var body = document.getElementById('toxicBody');
  if (!body) return;

  var html = '';

  var addRow = function(label, value, unit) {
    if (value === null || value === undefined) return '';
    return '<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border);"><span>' + label + '</span><span style="font-weight:600;">' + value + (unit ? ' ' + unit : '') + '</span></div>';
  };

  html += addRow('经口 LD₅₀', el.ld50Oral, 'mg/kg');
  html += addRow('经皮 LD₅₀', el.ld50Dermal, 'mg/kg');
  html += addRow('吸入 LC₅₀', el.lc50Inhalation, 'mg/L');
  html += addRow('OEL TWA', el.oelTWA, 'mg/m³');
  html += addRow('OEL STEL', el.oelSTEL, 'mg/m³');
  html += addRow('IDLH', el.idlh, 'mg/m³');

  // 致癌性分类
  if (el.carcinogenicity) {
    var color = 'var(--text-primary)';
    if (el.carcinogenicity === '1') color = 'var(--accent-red)';
    else if (el.carcinogenicity === '2A' || el.carcinogenicity === '2B') color = 'var(--accent-orange)';
    var label = {
      '0': '未分类',
      '1': 'IARC 1类（确证致癌）',
      '2A': 'IARC 2A类（可能致癌）',
      '2B': 'IARC 2B类（可疑致癌）',
      '3': 'IARC 3类（未分类）',
    }[el.carcinogenicity] || el.carcinogenicity;
    html += '<div style="display:flex;justify-content:space-between;padding:3px 0;border-bottom:1px solid var(--border);"><span>致癌分类</span><span style="font-weight:600;color:' + color + ';">' + label + '</span></div>';
  }

  if (html === '') {
    html = '<p style="color:var(--text-muted)">该元素无毒性数据。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染工业生产数据卡片
 */
function renderIndustrial(el) {
  var body = document.getElementById('industrialBody');
  if (!body) return;

  var html = '';

  if (el.productionMethod) {
    html += '<div style="margin-bottom:8px;"><strong>工业制备：</strong><p style="margin:4px 0;font-size:12px;color:var(--text-secondary);line-height:1.6;">' + el.productionMethod + '</p></div>';
  }
  if (el.annualProduction) {
    html += '<div style="margin-bottom:8px;"><strong>全球年产量：</strong>' + el.annualProduction + '</div>';
  }
  if (el.pricePerKg && el.pricePerKg !== '数据整理中…') {
    html += '<div style="margin-bottom:8px;"><strong>参考价格：</strong>' + el.pricePerKg + '</div>';
  }
  if (el.majorMinerals && el.majorMinerals.length > 0) {
    html += '<div style="margin-bottom:8px;"><strong>主要矿物：</strong><p style="margin:4px 0;font-size:12px;color:var(--text-secondary);">' + el.majorMinerals.join('、') + '</p></div>';
  }
  if (el.crustAbundance) {
    html += '<div style="margin-bottom:8px;"><strong>地壳丰度：</strong>' + el.crustAbundance + '</div>';
  }

  if (html === '') {
    html = '<p style="color:var(--text-muted)">该元素工业生产数据整理中。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染应急处置卡片
 */
function renderEmergency(el) {
  var body = document.getElementById('emergencyBody');
  if (!body) return;

  var html = '';

  if (el.ergGuide) {
    html += '<div style="margin-bottom:8px;"><strong>ERG 指南：</strong><span style="background:var(--bg-card);padding:2px 8px;border-radius:4px;font-family:monospace;">' + el.ergGuide + '</span></div>';
  }
  if (el.ppe) {
    html += '<div style="margin-bottom:8px;"><strong>个人防护（PPE）：</strong><p style="margin:4px 0;font-size:12px;color:var(--text-secondary);line-height:1.6;">' + el.ppe + '</p></div>';
  }
  if (el.firefightingAgent) {
    html += '<div style="margin-bottom:8px;"><strong>适用灭火剂：</strong><p style="margin:4px 0;font-size:12px;color:var(--text-secondary);line-height:1.6;">' + el.firefightingAgent + '</p></div>';
  }
  if (el.neutralizationMethod) {
    html += '<div style="margin-bottom:8px;"><strong>泄漏处置：</strong><p style="margin:4px 0;font-size:12px;color:var(--text-secondary);line-height:1.6;">' + el.neutralizationMethod + '</p></div>';
  }

  if (html === '') {
    html = '<p style="color:var(--text-muted)">该元素无应急处置数据。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染全部 P3 卡片（在 init() 中调用）
 */
function renderP3Cards(el) {
  renderGhs(el);
  renderToxic(el);
  renderIndustrial(el);
  renderEmergency(el);
}
