
/* ─── 工具函数 ─── */
function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}
function fmt(v, unit) {
  if (v === null || v === undefined) return '<span style="color:var(--text-muted)">—</span>';
  if (typeof v === 'number') {
    // 科学计数法处理
    if (Math.abs(v) < 0.001 || Math.abs(v) >= 1e12) return v.toExponential(3) + (unit || '');
    // 小数点位数
    var s = Math.abs(v) < 1 ? v.toFixed(6) : v.toFixed(2);
    // 去掉末尾多余的0
    if (s.indexOf('.') > -1) s = s.replace(/0+$/, '').replace(/\.$/, '');
    return s + (unit || '');
  }
  return v + (unit || '');
}

const SHELL_NAMES = ['K','L','M','N','O','P','Q'];

/* ── 异步加载 Markdown 详情（优先加载 details/{symbol}.md） ── */
function loadMarkdownAsync(el) {
  var mdUrl = 'details/' + el.symbol + '.md';
  fetch(mdUrl)
    .then(function(resp) {
      if (!resp.ok) throw new Error('File not found');
      return resp.text();
    })
    .then(function(mdRaw) {
      renderMarkdown(mdRaw);
    })
    .catch(function() {
      // fetch 失败，保持原有的同步加载内容（已有 getElementMarkdown 渲染结果）
      // 如果原有内容也没有，显示提示
      var current = document.getElementById('mdContent').innerHTML;
      if (!current || current.indexOf('加载元素详情中') >= 0 || current.trim() === '') {
        document.getElementById('mdContent').innerHTML =
          '<p style="color:var(--text-muted);text-align:center;padding:32px">暂无该元素的详细介绍。</p>';
      }
    });
}

function renderMarkdown(mdRaw) {
  if (typeof marked !== 'undefined' && marked.parse) {
    marked.setOptions({ breaks: true, gfm: true });
    try {
      document.getElementById('mdContent').innerHTML = marked.parse(mdRaw);
    } catch(e) {
      document.getElementById('mdContent').innerHTML =
        '<pre style="white-space:pre-wrap;color:var(--text-primary);padding:16px">' +
        mdRaw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
    }
  } else {
    document.getElementById('mdContent').innerHTML =
      '<pre style="white-space:pre-wrap;color:var(--text-primary);padding:16px">' +
      mdRaw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
  }

  // 更新目录
  var headings = document.querySelectorAll('#mdContent h2, #mdContent h3');
  var tocList = document.getElementById('tocList');
  tocList.innerHTML = '';
  headings.forEach(function(h, i) {
    var id = 'section-' + i;
    h.id = id;
    var li = document.createElement('li');
    li.className = 'toc-item';
    li.style.paddingLeft = h.tagName === 'H3' ? '12px' : '0';
    li.innerHTML = '<a class="toc-link" href="#' + id + '">' + h.textContent.trim() + '</a>';
    tocList.appendChild(li);
  });

  // KaTeX 渲染
  try {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('mdContent'), {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ]
      });
    }
  } catch(e) {}
}

async function init() {
  var z = parseInt(getParam('z') || '1', 10);
  if (isNaN(z) || z < 1 || z > 118) z = 1;

  var el = ELEMENTS.find(function(e) { return e.z === z; });
  if (!el) { document.getElementById('mdContent').innerHTML = '<p>未找到该元素。</p>'; return; }

  /* ── 标题 ── */
  document.title = el.name + '（' + el.symbol + '）· 化学元素周期表';

  /* ── 英雄卡 ── */
  var heroCard = document.getElementById('elHeroCard');
  heroCard.className = 'el-hero-card cat-' + el.category;
  document.getElementById('elHeroZ').textContent = el.z;
  document.getElementById('elHeroSymbol').textContent = el.symbol;
  document.getElementById('elHeroName').textContent = el.name;
  document.getElementById('elHeroNameEn').textContent = el.nameEn;
  if (el.radioactive) document.getElementById('elHeroRadio').classList.remove('hidden');

  /* ── 基本属性表 ── */
  var catCN   = (CATEGORY_CN && CATEGORY_CN[el.category]) || el.category;
  var stateCN = {solid:'固态',liquid:'液态',gas:'气态',synthetic:'人造元素'}[el.state] || el.state;
  document.getElementById('propsBody').innerHTML = [
    ['原子序数', el.z],
    ['符号', el.symbol],
    ['英文名', el.nameEn],
    ['原子量', fmt(el.mass, ' u')],
    ['类别', catCN],
    ['常温状态', stateCN],
    ['放射性', el.radioactive ? '☢ 是' : '否'],
    ['周期', '第 ' + el.period + ' 周期'],
    ['族', '第 ' + el.group + ' 族'],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 物理性质 ── */
  document.getElementById('physPropsBody').innerHTML = [
    ['熔点', fmt(el.meltingPoint, ' °C')],
    ['沸点', fmt(el.boilingPoint, ' °C')],
    ['密度 (20°C)', fmt(el.density, ' g/cm³')],
    ['电负性 (Pauling)', el.electronegativity !== null ? el.electronegativity.toFixed(2) : '<span style="color:var(--text-muted)">—</span>'],
    ['第一电离能', fmt(el.ionizationEnergy, ' kJ/mol')],
    ['电子亲和能', fmt(el.electronAffinity, ' kJ/mol')],
    ['常见氧化态', el.oxidationStates && el.oxidationStates.length > 0 ? el.oxidationStates.map(function(s){return (s>0?'+':'')+s;}).join(', ') : '<span style="color:var(--text-muted)">—</span>'],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 原子与晶体 ── */
  var crystalCN = (CRYSTAL_CN && CRYSTAL_CN[el.crystalStructure]) || el.crystalStructure || '未知';
  document.getElementById('crystalPropsBody').innerHTML = [
    ['原子半径', fmt(el.atomicRadius, ' pm')],
    ['共价半径', fmt(el.covalentRadius, ' pm')],
    ['范德华半径', fmt(el.vdwRadius, ' pm')],
    ['晶体结构', crystalCN],
    ['电阻率 (20°C)', el.electricalResistivity !== null ? (el.electricalResistivity > 1e6 ? el.electricalResistivity.toExponential(1) + ' nΩ·m' : fmt(el.electricalResistivity, ' nΩ·m')) : '<span style="color:var(--text-muted)">—</span>'],
    ['热导率', fmt(el.thermalConductivity, ' W/(m·K)')],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 材料与工程 ── */
  document.getElementById('materialPropsBody').innerHTML = [
    ['莫氏硬度', fmt(el.hardnessMohs)],
    ['杨氏模量', fmt(el.youngsModulus, ' GPa')],
    ['剪切模量', fmt(el.shearModulus, ' GPa')],
    ['体积模量', fmt(el.bulkModulus, ' GPa')],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 热力学数据 ── */
  document.getElementById('thermoPropsBody').innerHTML = [
    ['标准生成焓 ΔHf°', fmt(el.deltaHf, ' kJ/mol')],
    ['标准生成吉布斯自由能 ΔGf°', fmt(el.deltaGf, ' kJ/mol')],
    ['标准摩尔熵 S°', fmt(el.standardEntropy, ' J/(mol·K)')],
    ['标准摩尔热容 Cp', fmt(el.molarHeatCapacity, ' J/(mol·K)')],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 电化学数据 ── */
  document.getElementById('electroPropsBody').innerHTML = [
    ['标准电极电位 E°', el.stdElectrodePotential !== null ? fmt(el.stdElectrodePotential, ' V') + (el.redoxCouple ? '（' + el.redoxCouple + '）' : '') : '<span style="color:var(--text-muted)">—</span>'],
    ['电化当量', el.electrochemicalEquivalent !== null ? fmt(el.electrochemicalEquivalent, ' g/A·h') : '<span style="color:var(--text-muted)">—</span>'],
    ['常见离子半径', el.ionicRadius !== null ? fmt(el.ionicRadius, ' pm') : '<span style="color:var(--text-muted)">—</span>'],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 同位素 ── */
  buildIsotopeSection(el);

  /* ── 标识符与丰度 ── */
  document.getElementById('idPropsBody').innerHTML = [
    ['地壳丰度', fmt(el.crustAbundance, ' ppm')],
    ['CAS 号', el.casNumber ? '<a class="prop-link" href="https://commonchemistry.cas.org/detail?cas_rn='+el.casNumber+'" target="_blank" title="CAS Common Chemistry">'+el.casNumber+'</a>' : '<span style="color:var(--text-muted)">—</span>'],
    ['PubChem CID', el.pubChemCid ? '<a class="prop-link" href="https://pubchem.ncbi.nlm.nih.gov/compound/'+el.pubChemCid+'" target="_blank" title="PubChem">'+el.pubChemCid+'</a>' : '<span style="color:var(--text-muted)">—</span>'],
  ].map(function(p){ return '<div class="prop-row"><span class="prop-label">'+p[0]+'</span><span class="prop-value">'+p[1]+'</span></div>'; }).join('');

  /* ── 数据来源 ── */
  var srcHtml = '';
  if (typeof DATA_SOURCES === 'object') {
    srcHtml += '<div style="margin-bottom:2px"><strong>原子量：</strong>'+DATA_SOURCES.atomicWeight+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>熔沸点：</strong>'+DATA_SOURCES.meltingBoiling+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>密度/半径/电阻：</strong>'+DATA_SOURCES.radii+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>电离能：</strong>'+DATA_SOURCES.ionizationEnergy+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>热力学：</strong>'+DATA_SOURCES.thermodynamics+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>晶体结构：</strong>'+DATA_SOURCES.crystalStructure+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>CAS/PubChem：</strong>'+DATA_SOURCES.casNumber+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>同位素：</strong>'+DATA_SOURCES.isotopes+'</div>';
    srcHtml += '<div style="margin-bottom:2px"><strong>电化学：</strong>'+DATA_SOURCES.electrochemistry+'</div>';
  } else {
    srcHtml = '数据来源信息未加载';
  }
  document.getElementById('sourcesBody').innerHTML = srcHtml;

  /* ── GHS 安全信息 ── */
  buildGHSInfo(el);

  /* ── P3：工业安全数据 ── */
  if (typeof renderP3Cards === 'function') {
    renderP3Cards(el);
  }

  /* ── 电子壳层 ── */
  var shellsHtml = el.electrons.map(function(n, i) {
    return '<div class="electron-shell-row">'
      + '<span class="shell-label">' + (SHELL_NAMES[i] || (i+1)) + '</span>'
      + '<div class="shell-electrons">' + Array(n).fill('<div class="electron-dot"></div>').join('') + '</div>'
      + '<span style="font-size:10px;color:var(--text-muted);margin-left:4px">'+n+'e⁻</span></div>';
  }).join('');
  document.getElementById('electronShells').innerHTML = shellsHtml;

  /* ── 前/后导航 ── */
  var prev = ELEMENTS.find(function(e) { return e.z === z - 1; });
  var next = ELEMENTS.find(function(e) { return e.z === z + 1; });
  var btnPrev = document.getElementById('btnPrev');
  var btnNext = document.getElementById('btnNext');
  if (prev) { btnPrev.href = 'element.html?z=' + prev.z; btnPrev.textContent = '← ' + prev.name; }
  else { btnPrev.style.visibility = 'hidden'; }
  if (next) { btnNext.href = 'element.html?z=' + next.z; btnNext.textContent = next.name + ' →'; }
  else { btnNext.style.visibility = 'hidden'; }

  /* ── 搜索框快捷链接 ── */
  var shortcuts = ELEMENTS.filter(function(e2) { return e2.group === el.group && e2.z !== el.z; }).slice(0, 6);
  document.getElementById('searchShortcuts').innerHTML =
    '<span style="font-size:11px;color:var(--text-muted)">同族元素：</span>' +
    shortcuts.map(function(e2){ return '<a class="search-shortcut" href="element.html?z='+e2.z+'">'+e2.symbol+' '+e2.name+'</a>'; }).join('');

  /* ── Markdown 内容 ── */
  var mdRaw;
  try {
    if (typeof getElementMarkdown !== 'function') {
      throw new Error('element-details.js 未正确加载');
    }
    mdRaw = getElementMarkdown(el);
  } catch(e) {
    document.getElementById('mdContent').innerHTML =
      '<p style="color:var(--accent-red);padding:32px;text-align:center">'
      + '❌ 元素数据加载失败：' + e.message + '<br>'
      + '<small>请检查 <code>data/element-details.js</code> 文件是否存在且语法正确</small></p>';
    return;
  }

  if (typeof marked !== 'undefined' && marked.parse) {
    marked.setOptions({ breaks: true, gfm: true });
    try {
      document.getElementById('mdContent').innerHTML = marked.parse(mdRaw);
    } catch(e) {
      document.getElementById('mdContent').innerHTML =
        '<pre style="white-space:pre-wrap;color:var(--text-primary);padding:16px">' +
        mdRaw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
    }
  } else {
    document.getElementById('mdContent').innerHTML =
      '<pre style="white-space:pre-wrap;color:var(--text-primary);padding:16px">' +
      mdRaw.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + '</pre>';
  }

  /* ── 目录 ── */
  var headings = document.querySelectorAll('#mdContent h2, #mdContent h3');
  var tocList = document.getElementById('tocList');
  tocList.innerHTML = '';
  headings.forEach(function(h, i) {
    var id = 'section-' + i;
    h.id = id;
    var li = document.createElement('li');
    li.className = 'toc-item';
    li.style.paddingLeft = h.tagName === 'H3' ? '12px' : '0';
    li.innerHTML = '<a class="toc-link" href="#' + id + '">' + h.textContent.replace(/^[🔬⚗️🧪🏭⚠️🔮]/u,'').trim() + '</a>';
    tocList.appendChild(li);
  });

  /* ── KaTeX 渲染数学公式 ── */
  try {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.getElementById('mdContent'), {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$',  right: '$',  display: false}
        ],
        throwOnError: false
      });
    }
  } catch(e) {}

  /* ── 搜索框预填 ── */
  document.getElementById('siteSearchInput').placeholder = '搜索元素，如：氢、Fe、' + (el.z + 1) + '…';

  /* ── 异步加载详情 Markdown（优先 details/{symbol}.md） ── */
  loadMarkdownAsync(el);
}

/* ── 同位素信息构建 ── */
function buildIsotopeSection(el) {
  var isotopes = el.isotopes || [];
  if (isotopes.length === 0) {
    document.getElementById('isotopeSummary').innerHTML = '<div class="prop-row"><span class="prop-label">数据</span><span class="prop-value" style="color:var(--text-muted)">暂无</span></div>';
    document.getElementById('isotopeTableWrap').innerHTML = '<p style="color:var(--text-muted)">暂无同位素数据</p>';
    return;
  }

  var stable = isotopes.filter(function(i) { return i.halfLife === 'stable'; });
  var radioactive = isotopes.filter(function(i) { return i.halfLife !== 'stable'; });

  // Sidebar summary
  var summaryParts = [];
  summaryParts.push('<div class="prop-row"><span class="prop-label">同位素总数</span><span class="prop-value">' + isotopes.length + ' 种</span></div>');
  if (stable.length > 0) {
    summaryParts.push('<div class="prop-row"><span class="prop-label">稳定同位素</span><span class="prop-value" style="color:var(--accent-green)">' + stable.length + ' 种</span></div>');
  }
  if (radioactive.length > 0) {
    summaryParts.push('<div class="prop-row"><span class="prop-label">放射性同位素</span><span class="prop-value" style="color:var(--accent-orange)">' + radioactive.length + ' 种</span></div>');
  }
  // Show mass range
  var masses = isotopes.map(function(i) { return i.massNumber; });
  summaryParts.push('<div class="prop-row"><span class="prop-label">质量数范围</span><span class="prop-value">' + Math.min.apply(null, masses) + ' — ' + Math.max.apply(null, masses) + '</span></div>');
  document.getElementById('isotopeSummary').innerHTML = summaryParts.join('');

  // Detailed table
  var tableHtml = '<table class="isotope-table"><thead><tr>'
    + '<th>质量数</th><th>天然丰度</th><th>半衰期</th><th>衰变模式</th><th>备注</th>'
    + '</tr></thead><tbody>';
  for (var i = 0; i < isotopes.length; i++) {
    var iso = isotopes[i];
    var isStable = iso.halfLife === 'stable';
    var rowClass = isStable ? 'iso-stable' : 'iso-radio';
    var ab = iso.abundance !== null ? iso.abundance + '%' : '<span style="color:var(--text-muted)">—</span>';
    var hl = isStable
      ? '<span style="color:var(--accent-green)">✔ 稳定</span>'
      : '<span style="color:var(--accent-orange)">' + iso.halfLife + '</span>';
    var dm = iso.decayMode || (isStable ? '—' : '<span style="color:var(--text-muted)">—</span>');
    var note = iso.note ? iso.note.replace(/^'(.*)'$/, '$1') : '—';
    tableHtml += '<tr class="' + rowClass + '"><td><strong>' + iso.massNumber + '</strong></td>'
      + '<td>' + ab + '</td><td>' + hl + '</td><td>' + dm + '</td><td style="font-size:11px;color:var(--text-muted)">' + note + '</td></tr>';
  }
  tableHtml += '</tbody></table>';

  // Source info
  if (typeof DATA_SOURCES === 'object' && DATA_SOURCES.isotopes) {
    tableHtml += '<p style="font-size:10px;color:var(--text-muted);margin-top:8px">数据来源：' + DATA_SOURCES.isotopes + '</p>';
  }
  document.getElementById('isotopeTableWrap').innerHTML = tableHtml;
}

/* ── GHS 安全信息构建 ── */
function buildGHSInfo(el) {
  var container = document.getElementById('ghsBody');
  var ghs = getGHSData(el);
  if (!ghs || ghs.noData) {
    container.innerHTML = '<p style="color:var(--text-muted);font-size:13px">' + (ghs ? ghs.note : '该元素安全数据待补充，请参考 ILO/WHO ICSC 国际化学品安全卡。') + '</p>';
    if (!ghs || ghs.note) {
      document.getElementById('ghsCard').style.display = 'block';
    }
    return;
  }

  var html = '';

  // GHS 象形图
  if (ghs.pictograms && ghs.pictograms.length > 0) {
    html += '<div class="ghs-pictograms">';
    html += ghs.pictograms.map(function(p) {
      return '<span class="ghs-icon ghs-' + p + '" title="' + p + '">' + getGHSSymbol(p) + '</span>';
    }).join('');
    html += '</div>';
  }

  // 信号词
  if (ghs.signal) {
    html += '<div class="ghs-signal ' + (ghs.signal === 'Danger' ? 'ghs-danger' : 'ghs-warning') + '">'
      + (ghs.signal === 'Danger' ? '⚠ 危险 Danger' : '⚡ 警告 Warning') + '</div>';
  }

  // H/P 编码
  if (ghs.hCodes && ghs.hCodes.length > 0) {
    html += '<div class="ghs-codes"><strong>H 编码 (危害声明)：</strong><br>';
    html += ghs.hCodes.map(function(c) { return '<span class="ghs-code-tag">' + c + '</span>'; }).join(' ');
    html += '</div>';
  }
  if (ghs.pCodes && ghs.pCodes.length > 0) {
    html += '<div class="ghs-codes"><strong>P 编码 (防范说明)：</strong><br>';
    html += ghs.pCodes.map(function(c) { return '<span class="ghs-code-tag">' + c + '</span>'; }).join(' ');
    html += '</div>';
  }

  // UN 运输
  if (ghs.unNumber) {
    html += '<div class="ghs-un"><strong>UN 编号：</strong>' + ghs.unNumber + ' | 运输分类：' + (ghs.transportClass || '—') + '</div>';
  }

  // IDLH/OEL
  if (ghs.idlh) {
    html += '<div class="ghs-exposure"><strong>IDLH：</strong>' + ghs.idlh + '</div>';
  }
  if (ghs.oel) {
    html += '<div class="ghs-exposure"><strong>OEL (8h TWA)：</strong>' + ghs.oel + '</div>';
  }

  // 泄漏处理
  if (ghs.spillResponse) {
    html += '<div class="ghs-spill"><strong>泄漏处理：</strong><br>' + ghs.spillResponse + '</div>';
  }

  container.innerHTML = html;
}

/* ── GHS 数据（部分元素有） ── */
function getGHSData(el) {
  // 按元素提供基础GHS数据 — 覆盖高风险元素
  var map = {
    1:  {noData:true, note:'氢气为易燃气体，详细安全数据请参考 ILO/WHO ICSC 0001。'},
    3:  {noData:true, note:'锂金属遇水反应剧烈，接触潮湿空气可能自燃。'},
    4:  {pictograms:['GHS06','GHS08'], signal:'Danger', hCodes:['H301','H315','H317','H319','H330','H335','H350','H372'], pCodes:['P201','P260','P280','P284','P304+P340','P310'], unNumber:'UN 1567', transportClass:'6.1'},
    9:  {pictograms:['GHS03','GHS06'], signal:'Danger', hCodes:['H270','H330','H314'], pCodes:['P220','P244','P260','P280','P303+P361+P353','P304+P340','P315'], unNumber:'UN 1045', transportClass:'2.2/5.1/8', oel:'1 ppm (F₂)', idlh:'25 ppm (F₂)'},
    11: {pictograms:['GHS02','GHS05'], signal:'Danger', hCodes:['H260','H314'], pCodes:['P223','P231+P232','P280','P305+P351+P338','P370+P378'], unNumber:'UN 1428', transportClass:'4.3'},
    15: {pictograms:['GHS02','GHS06'], signal:'Danger', hCodes:['H228','H412'], pCodes:['P210','P273'], unNumber:'UN 1338 (红磷)', transportClass:'4.1'},
    16: {noData:true, note:'硫磺粉尘可能形成爆炸性混合物。SO₂ 吸入有毒，详细数据请参考 ICSC 0074。'},
    17: {pictograms:['GHS03','GHS06','GHS09'], signal:'Danger', hCodes:['H270','H330','H315','H319','H335','H400'], pCodes:['P220','P260','P273','P280','P304+P340','P315','P403+P233'], unNumber:'UN 1017', transportClass:'2.2/5.1/8', idlh:'10 ppm', oel:'1 ppm (Cl₂)'},
    24: {noData:true, note:'六价铬化合物具致癌性（IARC 1类）。金属铬粉尘可燃。'},
    33: {pictograms:['GHS06','GHS09'], signal:'Danger', hCodes:['H301','H331','H410'], pCodes:['P261','P273','P301+P310','P311'], unNumber:'UN 1558', transportClass:'6.1'},
    35: {pictograms:['GHS06','GHS09'], signal:'Danger', hCodes:['H330','H314','H400'], pCodes:['P260','P273','P280','P284','P305+P351+P338','P310'], unNumber:'UN 1744', transportClass:'8/6.1', idlh:'3 ppm (Br₂)'},
    48: {pictograms:['GHS06','GHS08','GHS09'], signal:'Danger', hCodes:['H330','H341','H350','H361fd','H372','H410'], pCodes:['P201','P260','P273','P281','P304+P340','P310'], unNumber:'UN 2570', transportClass:'6.1'},
    53: {noData:true, note:'碘蒸气刺激性强。碘晶体直接接触可灼伤皮肤。'},
    80: {pictograms:['GHS06','GHS08','GHS09'], signal:'Danger', hCodes:['H330','H360D','H372','H410'], pCodes:['P201','P260','P273','P284','P304+P340','P310'], unNumber:'UN 2809', transportClass:'8/6.1', idlh:'10 mg/m³ (Hg)', oel:'0.025 mg/m³ (Hg)'},
    82: {pictograms:['GHS08','GHS09'], signal:'Danger', hCodes:['H302','H332','H360Df','H373','H410'], pCodes:['P201','P260','P273','P308+P313'], unNumber:'UN 3077', transportClass:'9'},
    86: {noData:true, note:'氡气为放射性惰性气体，吸入后α衰变产物沉积于肺部，是室内主要辐射源。'},
    92: {pictograms:['GHS06','GHS08','GHS09'], signal:'Danger', hCodes:['H300','H330','H373','H413'], pCodes:['P260','P264','P270','P284','P301+P310','P304+P340'], unNumber:'UN 2978 (六氟化铀)', transportClass:'7'},
    94: {pictograms:['GHS06','GHS08'], signal:'Danger', hCodes:['H300','H330','H373'], pCodes:['P260','P264','P270','P284','P301+P310'], unNumber:'UN 2918/2919', transportClass:'7', note:'钚为极毒放射性元素，吸入尤其危险。'}
  };
  return map[el.z] || {noData:true, note:'请参考 ILO/WHO ICSC 国际化学品安全卡获取完整信息。'};
}

function getGHSSymbol(code) {
  var sym = {
    'GHS01': '💥', 'GHS02': '🔥', 'GHS03': '⭕',
    'GHS04': '💨', 'GHS05': '🧪', 'GHS06': '💀',
    'GHS07': '❗', 'GHS08': '⚠️', 'GHS09': '🌊'
  };
  return sym[code] || code;
}

/* ── 站内搜索 ── */
function doSiteSearch() {
  var q = document.getElementById('siteSearchInput').value.trim();
  if (!q) return;
  var found = ELEMENTS.find(function(e) {
    return e.name === q || e.symbol.toLowerCase() === q.toLowerCase() || String(e.z) === q;
  }) || ELEMENTS.find(function(e) {
    return e.name.includes(q) || e.symbol.toLowerCase().includes(q.toLowerCase()) || e.nameEn.toLowerCase().includes(q.toLowerCase());
  });
  if (found) {
    window.location.href = 'element.html?z=' + found.z;
  } else {
    alert('未在本站找到"' + q + '"，请尝试站外搜索。');
  }
}

function doWebSearch() {
  var q = document.getElementById('siteSearchInput').value.trim() || document.title.split('（')[0].trim();
  window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(q + ' 化学元素'), '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
  try {
    init();
  } catch(e) {
    document.getElementById('mdContent').innerHTML =
      '<p style="color:var(--accent-red);padding:32px;text-align:center">'
      + '❌ 页面初始化失败：' + e.message + '<br>'
      + '<small>请打开浏览器控制台（F12）查看详细错误信息</small></p>';
    console.error('init error:', e);
  }
  document.getElementById('siteSearchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSiteSearch();
  });
});

/* ═══════════════════════════════════════
   3D 晶体结构渲染（Three.js）
   ═══════════════════════════════════════ */
let crystalScene = null, crystalCamera = null, crystalRenderer = null,
    crystalControls = null, crystalAnimationId = null, crystalAutoRotate = true;

window.toggle3DView = function() {
  const card = document.getElementById('crystal3DCard');
  if (!card) return;
  card.classList.toggle('hidden');
  if (!card.classList.contains('hidden')) {
    // 延迟初始化，等待卡片渲染完成
    setTimeout(() => initCrystalView(), 100);
  } else {
    disposeCrystalView();
  }
};

function initCrystalView() {
  const el = window.__currentElement;
  if (!el) return;
  const crystalData = (typeof ELEMENT_CRYSTAL !== 'undefined') ? ELEMENT_CRYSTAL[el.z] : null;
  if (!crystalData || !crystalData.type) {
    document.getElementById('crystalInfo').textContent = el.name + '（' + el.symbol + '）无可用晶体结构数据';
    return;
  }
  initCrystalScene(el, crystalData);
}

function initCrystalScene(el, crystalData) {
  const container = document.getElementById('crystal3DContainer');
  if (!container) return;
  const canvas = document.getElementById('crystalCanvas');
  const w = container.clientWidth, h = container.clientHeight;
  canvas.width = w; canvas.height = h;

  // 场景
  crystalScene = new THREE.Scene();
  crystalScene.background = new THREE.Color(0x0a0a1a);

  // 相机
  crystalCamera = new THREE.PerspectiveCamera(50, w/h, 0.1, 1000);
  crystalCamera.position.set(0, 0, 80);

  // 渲染器
  crystalRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  crystalRenderer.setSize(w, h);
  crystalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 灯光
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  crystalScene.add(ambientLight);
  const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight1.position.set(5, 10, 7);
  crystalScene.add(dirLight1);
  const dirLight2 = new THREE.DirectionalLight(0x8888ff, 0.3);
  dirLight2.position.set(-5, -3, -5);
  crystalScene.add(dirLight2);

  // 控制器
  if (typeof THREE.OrbitControls !== 'undefined') {
    crystalControls = new THREE.OrbitControls(crystalCamera, canvas);
    crystalControls.enableDamping = true;
    crystalControls.dampingFactor = 0.08;
    crystalControls.autoRotate = crystalAutoRotate;
    crystalControls.autoRotateSpeed = 1.5;
  }

  // 根据晶体类型生成结构
  buildCrystal(el, crystalData);

  // 动画循环
  function animate() {
    crystalAnimationId = requestAnimationFrame(animate);
    if (crystalControls) {
      crystalControls.update();
    }
    crystalRenderer.render(crystalScene, crystalCamera);
  }
  animate();

  // 窗口大小变化
  window.addEventListener('resize', onCrystalResize);
  document.getElementById('crystalInfo').textContent =
    el.name + '（' + el.symbol + '）· ' + (CRYSTAL_STRUCTURES[crystalData.type] ? CRYSTAL_STRUCTURES[crystalData.type].name : crystalData.type);
}

function buildCrystal(el, crystalData) {
  if (!crystalScene) return;
  const type = crystalData.type;
  const a = crystalData.a ? crystalData.a * 0.01 : 4.0; // 转换为 Å 并缩放
  const c = crystalData.c ? crystalData.c * 0.01 : a * 1.5;

  // 原子颜色（根据元素类别）
  const catColor = {
    'alkali-metal':'#e74c3c','alkaline-earth':'#e67e22','transition':'#3498db',
    'post-transition':'#2ecc71','metalloid':'#1abc9c','nonmetal':'#9b59b6',
    'halogen':'#f39c12','noble-gas':'#e91e8c','lanthanide':'#00bcd4','actinide':'#ff5722',
  };
  const atomColor = new THREE.Color(catColor[el.category] || '#aaa');

  // 原子材质
  const atomMaterial = new THREE.MeshStandardMaterial({ color: atomColor, metalness: 0.4, roughness: 0.3 });

  // 化学键材质
  const bondMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, transparent: true, opacity: 0.6 });

  // 根据晶体类型生成原子位置
  let positions = []; // [{x,y,z}]

  if (type === 'BCC') {
    // 体心立方：角点 + 体心
    const basis = [[0,0,0],[0.5,0.5,0.5]];
    positions = generateLattice(basis, a, a, a, 3);
  } else if (type === 'FCC') {
    // 面心立方：角点 + 三个面心
    const basis = [[0,0,0],[0.5,0.5,0],[0.5,0,0.5],[0,0.5,0.5]];
    positions = generateLattice(basis, a, a, a, 3);
  } else if (type === 'HCP') {
    // 六方最密堆积
    const basis = [[0,0,0],[2/3,1/3,0.5]];
    positions = generateHCPLattice(basis, a, c, 3);
  } else if (type === 'DIA') {
    // 金刚石型：FCC + 内部4个原子
    const basis = [[0,0,0],[0.5,0.5,0],[0.5,0,0.5],[0,0.5,0.5],
                   [0.25,0.25,0.25],[0.75,0.75,0.25],[0.75,0.25,0.75],[0.25,0.75,0.75]];
    positions = generateLattice(basis, a, a, a, 2);
  } else if (type === 'CUB') {
    // 简单立方
    const basis = [[0,0,0]];
    positions = generateLattice(basis, a, a, a, 3);
  } else {
    // 默认：简单立方
    const basis = [[0,0,0]];
    positions = generateLattice(basis, a, a, a, 3);
  }

  // 限制原子数量（性能考虑）
  if (positions.length > 200) positions = positions.slice(0, 200);

  // 创建原子球体
  const sphereGeo = new THREE.SphereGeometry(0.4, 24, 24);
  positions.forEach(pos => {
    const mesh = new THREE.Mesh(sphereGeo, atomMaterial);
    mesh.position.set(pos[0], pos[1], pos[2]);
    crystalScene.add(mesh);
  });

  // 添加晶格框线
  const edgesGeo = new THREE.BoxGeometry(a, a, a);
  const edges = new THREE.EdgesGeometry(edgesGeo);
  const edgesMat = new THREE.LineBasicMaterial({ color: 0x444488, transparent: true, opacity: 0.3 });
  // 为每个晶胞添加框线
  const range = type === 'HCP' ? 2 : 2;
  for (let ix = -range; ix <= range; ix++) {
    for (let iy = -range; iy <= range; iy++) {
      for (let iz = -range; iz <= range; iz++) {
        if (type === 'HCP') {
          // 六方晶格框线（简化）
          continue;
        }
        const line = new THREE.LineSegments(edges, edgesMat);
        line.position.set(ix*a, iy*a, iz*a);
        crystalScene.add(line);
      }
    }
  }

  // 相机适应
  const maxA = Math.max(a, c);
  crystalCamera.position.set(maxA*2, maxA*1.5, maxA*2);
  if (crystalControls) crystalControls.target.set(0,0,0);
}

function generateLattice(basis, a, b, c, n) {
  const positions = [];
  for (let ix = -n; ix <= n; ix++) {
    for (let iy = -n; iy <= n; iy++) {
      for (let iz = -n; iz <= n; iz++) {
        basis.forEach(([bx, by, bz]) => {
          positions.push([
            (ix + bx) * a,
            (iy + by) * b,
            (iz + bz) * c,
          ]);
        });
      }
    }
  }
  return positions;
}

function generateHCPLattice(basis, a, c, n) {
  // 六方晶格（简化实现）
  const positions = [];
  for (let ix = -n; ix <= n; ix++) {
    for (let iy = -n; iy <= n; iy++) {
      for (let iz = -n; iz <= n; iz++) {
        basis.forEach(([bx, by, bz]) => {
          // 六方坐标转笛卡尔
          const x = ((ix + bx) + 0.5 * (iy + by)) * a;
          const y = Math.sqrt(3)/2 * (iy + by) * a;
          const z = (iz + bz) * c;
          positions.push([x, y, z]);
        });
      }
    }
  }
  return positions;
}

function onCrystalResize() {
  const container = document.getElementById('crystal3DContainer');
  if (!container || !crystalCamera || !crystalRenderer) return;
  const w = container.clientWidth, h = container.clientHeight;
  crystalCamera.aspect = w/h;
  crystalCamera.updateProjectionMatrix();
  crystalRenderer.setSize(w, h);
}

window.resetCrystalView = function() {
  if (!crystalCamera || !crystalControls) return;
  crystalCamera.position.set(40, 30, 40);
  crystalControls.target.set(0,0,0);
  crystalControls.update();
};

window.toggleCrystalAutoRotate = function() {
  crystalAutoRotate = !crystalAutoRotate;
  if (crystalControls) crystalControls.autoRotate = crystalAutoRotate;
  const btn = document.getElementById('btnAutoRotate');
  if (btn) btn.textContent = '自动旋转：' + (crystalAutoRotate ? '开' : '关');
};

function disposeCrystalView() {
  if (crystalAnimationId) cancelAnimationFrame(crystalAnimationId);
  crystalAnimationId = null;
  if (crystalScene) {
    crystalScene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    crystalScene = null;
  }
  if (crystalRenderer) { crystalRenderer.dispose(); crystalRenderer = null; }
  crystalCamera = null; crystalControls = null;
  window.removeEventListener('resize', onCrystalResize);
}

