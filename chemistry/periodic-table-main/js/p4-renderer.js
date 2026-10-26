/**
 * P4 科研级数据渲染模块
 * 功能：渲染光谱数据、先进晶体学数据、研究前沿
 * 用法：在 element.html 中加载此文件，然后调用 renderP4Cards(el)
 */

/**
 * 渲染光谱数据卡片
 */
function renderSpectral(el) {
  var body = document.getElementById('spectralBody');
  if (!body) return;

  var html = '';

  // 原子发射光谱
  if (el.emissionLines && el.emissionLines.length > 0) {
    html += '<div style="margin-bottom:12px;"><strong>⚡ 原子发射光谱（特征谱线）</strong>';
    html += '<table style="width:100%;font-size:12px;margin-top:6px;border-collapse:collapse;">';
    html += '<tr style="background:var(--bg-main);color:var(--text-muted);font-size:11px;"><th style="padding:4px 8px;text-align:left;">波长 (nm)</th><th style="padding:4px 8px;text-align:left;">强度</th><th style="padding:4px 8px;text-align:left;">跃迁</th><th style="padding:4px 8px;text-align:left;">区域</th></tr>';
    el.emissionLines.forEach(function(line, idx) {
      var bg = idx % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-main)';
      html += '<tr style="background:' + bg + '">';
      html += '<td style="padding:4px 8px;font-family:monospace;font-weight:600;">' + line.wavelength + '</td>';
      html += '<td style="padding:4px 8px;">' + line.intensity + '</td>';
      html += '<td style="padding:4px 8px;font-size:11px;">' + (line.transition || '—') + '</td>';
      html += '<td style="padding:4px 8px;font-size:11px;color:var(--text-muted);">' + (line.region || '—') + '</td>';
      html += '</tr>';
    });
    html += '</table></div>';
  }

  // X 射线荧光
  if (el.xray) {
    html += '<div style="margin-bottom:12px;"><strong>🔬 X 射线荧光能量</strong>';
    html += '<div style="display:flex;gap:16px;margin-top:6px;font-size:13px;">';
    if (el.xray.Ka) html += '<span><strong>Kα：</strong>' + el.xray.Ka + ' keV</span>';
    if (el.xray.Kb) html += '<span><strong>Kβ：</strong>' + el.xray.Kb + ' keV</span>';
    if (el.xray.La) html += '<span><strong>Lα：</strong>' + el.xray.La + ' keV</span>';
    html += '</div></div>';
  }

  // XPS 结合能
  if (el.xps) {
    html += '<div style="margin-bottom:12px;"><strong>📊 XPS 结合能</strong>';
    html += '<div style="margin-top:6px;font-size:13px;">';
    html += '<div><strong>能级：</strong>' + el.xps.coreLevel + '</div>';
    html += '<div><strong>结合能：</strong><span style="font-family:monospace;font-weight:600;">' + el.xps.bindingEnergy + ' eV</span></div>';
    if (el.xps.note) html += '<div style="font-size:11px;color:var(--text-muted);margin-top:4px;">' + el.xps.note + '</div>';
    html += '</div></div>';
  }

  // NMR 性质
  if (el.nmr) {
    html += '<div style="margin-bottom:12px;"><strong>🧲 NMR 性质</strong>';
    html += '<div style="font-size:13px;line-height:1.8;margin-top:6px;">';
    html += '<div><strong>核自旋 I：</strong>' + el.nmr.spin + '</div>';
    if (el.nmr.naturalAbundance) html += '<div><strong>天然丰度：</strong>' + el.nmr.naturalAbundance + '%</div>';
    if (el.nmr.reference) html += '<div><strong>化学位移参考：</strong><span style="font-size:11px;">' + el.nmr.reference + '</span></div>';
    if (el.nmr.note) html += '<div style="font-size:11px;color:var(--text-muted);margin-top:4px;">' + el.nmr.note + '</div>';
    html += '</div></div>';
  }

  if (html === '') {
    html = '<p style="color:var(--text-muted)">该元素的光谱数据整理中。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染先进晶体学数据卡片
 */
function renderAdvancedCrystal(el) {
  var body = document.getElementById('advCrystalBody');
  if (!body) return;

  var html = '';

  // 从 crystal-structures.js 获取数据
  if (el.crystalType && el.crystalType !== 'unknown') {
    html += '<div style="margin-bottom:8px;"><strong>晶体结构类型：</strong>' + el.crystalType + '</div>';
  }

  if (el.spaceGroup) {
    html += '<div style="margin-bottom:8px;"><strong>空间群：</strong><span style="font-family:monospace;">' + el.spaceGroup + '</span></div>';
  }

  if (el.latticeParams) {
    html += '<div style="margin-bottom:8px;"><strong>晶格参数：</strong>';
    html += '<span style="font-family:monospace;font-size:12px;">a=' + el.latticeParams.a + ' Å';
    if (el.latticeParams.b) html += ', b=' + el.latticeParams.b + ' Å';
    if (el.latticeParams.c) html += ', c=' + el.latticeParams.c + ' Å';
    if (el.latticeParams.alpha) html += ', α=' + el.latticeParams.alpha + '°';
    html += '</span></div>';
  }

  if (el.coordinationNumber) {
    html += '<div style="margin-bottom:8px;"><strong>配位数：</strong>' + el.coordinationNumber + '</div>';
  }

  if (html === '') {
    html = '<p style="color:var(--text-muted)">该元素的先进晶体学数据整理中。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染研究前沿卡片
 */
function renderResearchFrontiers(el) {
  var body = document.getElementById('researchBody');
  if (!body) return;

  var html = '';

  if (el.researchFrontiers && el.researchFrontiers.length > 0) {
    el.researchFrontiers.forEach(function(item, idx) {
      html += '<div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border);">';
      html += '<div style="font-weight:600;font-size:13px;margin-bottom:4px;">🔬 ' + item.topic + '</div>';
      if (item.doi) {
        html += '<div style="font-size:11px;margin-bottom:4px;"><strong>DOI：</strong><a href="https://doi.org/' + item.doi + '" target="_blank" style="color:var(--accent-blue);">' + item.doi + '</a></div>';
      }
      if (item.year) html += '<div style="font-size:11px;color:var(--text-muted);">📅 ' + item.year + '</div>';
      html += '</div>';
    });
  } else {
    html = '<p style="color:var(--text-muted)">该元素的研究前沿数据整理中。</p>';
  }

  body.innerHTML = html;
}

/**
 * 渲染全部 P4 卡片（在 init() 中调用）
 */
function renderP4Cards(el) {
  renderSpectral(el);
  renderAdvancedCrystal(el);
  renderResearchFrontiers(el);
}
