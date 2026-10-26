/**
 * role-viewer.js — 角色视图切换器
 * 在元素详情页侧边栏顶部添加角色切换栏
 * 根据角色显示/隐藏最相关的信息维度
 * 用法：在 element.html 中加载此文件（需在 ELEMENTS 初始化后）
 */

(function() {
  'use strict';

  // ════════════════════════════════════════════════════
  //  角色定义
  // ════════════════════════════════════════════════════

  var ROLES = [
    {
      id: 'all',
      icon: '📋',
      label: '全部',
      desc: '显示所有数据维度',
      groups: ['core', 'safety', 'research', 'isotope'],
      cards: ['ghsCard','toxicCard','industrialCard','emergencyCard','spectralCard','advCrystalCard','researchCard','orbitalCard','trendCard','abundanceCard','relationsCard','compoundsCard'],
      extra: ['legal','engineering','education','economy','environment','biomedical','strategy','history','fun']
    },
    {
      id: 'teacher',
      icon: '👨‍🏫',
      label: '教师',
      desc: '教学场景：考点、实验、教材对齐',
      groups: ['core', 'isotope'],
      cards: ['compoundsCard','researchCard'],
      extra: ['education','history','fun'],
      expandGroups: ['safety']
    },
    {
      id: 'student',
      icon: '👨‍🎓',
      label: '学生',
      desc: '自主学习：记忆辅助、知识关联、趣味科普',
      groups: ['core', 'isotope'],
      cards: ['compoundsCard','abundanceCard'],
      extra: ['education','fun','history','biomedical'],
      expandGroups: ['research']
    },
    {
      id: 'engineer',
      icon: '👨‍🔧',
      label: '工程师',
      desc: '材料选型：牌号、加工、耐腐蚀、失效分析',
      groups: ['core', 'safety'],
      cards: ['industrialCard','advCrystalCard'],
      extra: ['engineering','strategy'],
      expandGroups: []
    },
    {
      id: 'lawyer',
      icon: '⚖️',
      label: '律师/合规',
      desc: '法规查询：危化品目录、REACH、运输法规',
      groups: ['safety'],
      cards: ['ghsCard','toxicCard','emergencyCard'],
      extra: ['legal','environment'],
      expandGroups: []
    },
    {
      id: 'enthusiast',
      icon: '🧪',
      label: '化工爱好者',
      desc: '实验参考：安全数据、化合物、科普',
      groups: ['safety', 'isotope'],
      cards: ['ghsCard','toxicCard','emergencyCard','compoundsCard','spectralCard'],
      extra: ['fun','history','biomedical'],
      expandGroups: ['research']
    },
    {
      id: 'economist',
      icon: '📊',
      label: '经济学家',
      desc: '市场分析：价格、供应链、生产商',
      groups: ['safety'],
      cards: ['industrialCard'],
      extra: ['economy','strategy','environment'],
      expandGroups: []
    },
    {
      id: 'policy',
      icon: '🏛️',
      label: '政策制定者',
      desc: '战略决策：关键矿产、环境影响、地缘政治',
      groups: ['safety'],
      cards: ['industrialCard'],
      extra: ['strategy','environment','economy','biomedical','legal'],
      expandGroups: []
    }
  ];

  // ════════════════════════════════════════════════════
  //  额外数据维度渲染器
  // ════════════════════════════════════════════════════

  var EXTRA_RENDERERS = {
    legal: function(el) {
      if (!el.legal) return null;
      var d = el.legal;
      var rows = '';
      if (d.hazardCategoryCN) rows += '<div class="prop-row"><span class="prop-label">危化品目录编号</span><span class="prop-value">' + d.hazardCategoryCN + '</span></div>';
      if (d.reach) rows += '<div class="prop-row"><span class="prop-label">REACH状态</span><span class="prop-value">' + d.reach + '</span></div>';
      if (d.rohs) rows += '<div class="prop-row"><span class="prop-label">RoHS限制</span><span class="prop-value">' + d.rohs + '</span></div>';
      if (d.imdg) rows += '<div class="prop-row"><span class="prop-label">IMDG运输</span><span class="prop-value">' + d.imdg + '</span></div>';
      if (d.iata) rows += '<div class="prop-row"><span class="prop-label">IATA-DGR</span><span class="prop-value">' + d.iata + '</span></div>';
      if (d.airDischargeLimit) rows += '<div class="prop-row"><span class="prop-label">大气排放限值</span><span class="prop-value">' + d.airDischargeLimit + '</span></div>';
      if (d.waterDischargeLimit) rows += '<div class="prop-row"><span class="prop-label">水排放限值</span><span class="prop-value">' + d.waterDischargeLimit + '</span></div>';
      if (d.exportControl) rows += '<div class="prop-row"><span class="prop-label">进出口管制</span><span class="prop-value">' + d.exportControl + '</span></div>';
      if (d.gbzStandard) rows += '<div class="prop-row"><span class="prop-label">职业健康标准</span><span class="prop-value">' + d.gbzStandard + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">📜 法规合规信息</div><div>' + rows + '</div></div>' : null;
    },
    engineering: function(el) {
      if (!el.engineering) return null;
      var d = el.engineering;
      var rows = '';
      if (d.astmGrade) rows += '<div class="prop-row"><span class="prop-label">ASTM牌号</span><span class="prop-value">' + d.astmGrade + '</span></div>';
      if (d.gbGrade) rows += '<div class="prop-row"><span class="prop-label">GB牌号</span><span class="prop-value">' + d.gbGrade + '</span></div>';
      if (d.alloy) rows += '<div class="prop-row"><span class="prop-label">主要合金</span><span class="prop-value">' + d.alloy + '</span></div>';
      if (d.weldability) rows += '<div class="prop-row"><span class="prop-label">可焊性</span><span class="prop-value">' + d.weldability + '</span></div>';
      if (d.machinability) rows += '<div class="prop-row"><span class="prop-label">可加工性</span><span class="prop-value">' + d.machinability + '</span></div>';
      if (d.corrosionResistance) rows += '<div class="prop-row"><span class="prop-label">耐腐蚀性</span><span class="prop-value">' + d.corrosionResistance + '</span></div>';
      if (d.application) rows += '<div class="prop-row"><span class="prop-label">典型应用</span><span class="prop-value">' + d.application + '</span></div>';
      if (d.failureMode) rows += '<div class="prop-row"><span class="prop-label">常见失效模式</span><span class="prop-value">' + d.failureMode + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">🔩 材料工程数据</div><div>' + rows + '</div></div>' : null;
    },
    education: function(el) {
      if (!el.education) return null;
      var d = el.education;
      var rows = '';
      if (d.textbookChapter) rows += '<div class="prop-row"><span class="prop-label">教材章节</span><span class="prop-value">' + d.textbookChapter + '</span></div>';
      if (d.examPoint) rows += '<div class="prop-row"><span class="prop-label">高考考点</span><span class="prop-value">' + d.examPoint + '</span></div>';
      if (d.experiment) rows += '<div class="prop-row"><span class="prop-label">实验设计</span><span class="prop-value">' + d.experiment + '</span></div>';
      if (d.misconception) rows += '<div class="prop-row"><span class="prop-label">常见误区</span><span class="prop-value">' + d.misconception + '</span></div>';
      if (d.mnemonic) rows += '<div class="prop-row"><span class="prop-label">记忆口诀</span><span class="prop-value">' + d.mnemonic + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">📚 教学资源</div><div>' + rows + '</div></div>' : null;
    },
    economy: function(el) {
      if (!el.economy) return null;
      var d = el.economy;
      var rows = '';
      if (d.priceTrend) rows += '<div class="prop-row"><span class="prop-label">价格趋势</span><span class="prop-value">' + d.priceTrend + '</span></div>';
      if (d.topProducers) rows += '<div class="prop-row"><span class="prop-label">主要生产商</span><span class="prop-value">' + d.topProducers + '</span></div>';
      if (d.supplyChain) rows += '<div class="prop-row"><span class="prop-label">供应链</span><span class="prop-value">' + d.supplyChain + '</span></div>';
      if (d.substitute) rows += '<div class="prop-row"><span class="prop-label">替代品</span><span class="prop-value">' + d.substitute + '</span></div>';
      if (d.marketForecast) rows += '<div class="prop-row"><span class="prop-label">市场预测</span><span class="prop-value">' + d.marketForecast + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">📊 市场经济数据</div><div>' + rows + '</div></div>' : null;
    },
    environment: function(el) {
      if (!el.environment) return null;
      var d = el.environment;
      var rows = '';
      if (d.carbonFootprint) rows += '<div class="prop-row"><span class="prop-label">碳排放</span><span class="prop-value">' + (typeof d.carbonFootprint === 'object' ? (d.carbonFootprint.productionEmission || d.carbonFootprint.note || 'N/A') : d.carbonFootprint) + '</span></div>';
      if (d.ecotoxicity) rows += '<div class="prop-row"><span class="prop-label">生态毒性</span><span class="prop-value">' + (typeof d.ecotoxicity === 'object' ? (d.ecotoxicity.aquaticToxicity || d.ecotoxicity.note || 'N/A') : d.ecotoxicity) + '</span></div>';
      if (d.recycling) rows += '<div class="prop-row"><span class="prop-label">回收率</span><span class="prop-value">' + (typeof d.recycling === 'object' ? (d.recycling.recyclingRate || d.recycling.recyclability || 'N/A') : d.recycling) + '</span></div>';
      if (d.environmentalRegulation) rows += '<div class="prop-row"><span class="prop-label">环境法规限值</span><span class="prop-value">' + (typeof d.environmentalRegulation === 'object' ? (d.environmentalRegulation.waterDischargeLimit || d.environmentalRegulation.note || 'N/A') : d.environmentalRegulation) + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">🌱 环境生态影响</div><div>' + rows + '</div></div>' : null;
    },
    biomedical: function(el) {
      if (!el.biomedical) return null;
      var d = el.biomedical;
      var rows = '';
      if (d.essentiality) rows += '<div class="prop-row"><span class="prop-label">人体必需性</span><span class="prop-value">' + d.essentiality + '</span></div>';
      if (d.dailyIntake) rows += '<div class="prop-row"><span class="prop-label">日摄入量</span><span class="prop-value">' + (typeof d.dailyIntake === 'object' ? (d.dailyIntake.rda || 'N/A') : d.dailyIntake) + '</span></div>';
      if (d.physiologicalFunction) rows += '<div class="prop-row"><span class="prop-label">生理功能</span><span class="prop-value">' + (typeof d.physiologicalFunction === 'object' ? (d.physiologicalFunction.role || 'N/A') : d.physiologicalFunction) + '</span></div>';
      if (d.medicalApplication) rows += '<div class="prop-row"><span class="prop-label">药物应用</span><span class="prop-value">' + (typeof d.medicalApplication === 'object' ? (d.medicalApplication.drugs ? d.medicalApplication.drugs.join(', ') : d.medicalApplication.therapy || 'N/A') : d.medicalApplication) + '</span></div>';
      if (d.toxicityMechanism) rows += '<div class="prop-row"><span class="prop-label">毒性机理</span><span class="prop-value">' + (typeof d.toxicityMechanism === 'object' ? (d.toxicityMechanism.mechanism || 'N/A') : d.toxicityMechanism) + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">🧬 生物医学数据</div><div>' + rows + '</div></div>' : null;
    },
    strategy: function(el) {
      if (!el.strategy) return null;
      var d = el.strategy;
      var rows = '';
      if (d.criticality) rows += '<div class="prop-row"><span class="prop-label">关键矿产</span><span class="prop-value">' + (typeof d.criticality === 'object' ? (d.criticality.overallRating || d.criticality.usgsList || 'N/A') : d.criticality) + '</span></div>';
      if (d.geopolitics) rows += '<div class="prop-row"><span class="prop-label">地缘政治风险</span><span class="prop-value">' + (typeof d.geopolitics === 'object' ? (d.geopolitics.supplyRisk || d.geopolitics.note || 'N/A') : d.geopolitics) + '</span></div>';
      if (d.supplyChain) rows += '<div class="prop-row"><span class="prop-label">供应链</span><span class="prop-value">' + (typeof d.supplyChain === 'object' ? (d.supplyChain.bottleneck || d.supplyChain.upstream || 'N/A') : d.supplyChain) + '</span></div>';
      if (d.substitutability) rows += '<div class="prop-row"><span class="prop-label">替代可行性</span><span class="prop-value">' + (typeof d.substitutability === 'object' ? (d.substitutability.substitutionFeasibility || d.substitutability.note || 'N/A') : d.substitutability) + '</span></div>';
      if (d.strategicReserve) rows += '<div class="prop-row"><span class="prop-label">战略储备</span><span class="prop-value">' + (typeof d.strategicReserve === 'object' ? (d.strategicReserve.globalReserve || d.strategicReserve.reservePolicy || 'N/A') : d.strategicReserve) + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">🗺️ 战略资源数据</div><div>' + rows + '</div></div>' : null;
    },
    history: function(el) {
      if (!el.history) return null;
      var d = el.history;
      var rows = '';
      if (d.discoverer) rows += '<div class="prop-row"><span class="prop-label">发现者</span><span class="prop-value">' + d.discoverer + '</span></div>';
      if (d.discoveryYear) rows += '<div class="prop-row"><span class="prop-label">发现年代</span><span class="prop-value">' + d.discoveryYear + '</span></div>';
      if (d.namingOrigin) rows += '<div class="prop-row"><span class="prop-label">命名由来</span><span class="prop-value">' + d.namingOrigin + '</span></div>';
      if (d.biography) rows += '<div class="prop-row"><span class="prop-label">发现故事</span><span class="prop-value" style="font-size:12px;line-height:1.6">' + d.biography + '</span></div>';
      if (d.culturalImpact) rows += '<div class="prop-row"><span class="prop-label">文化影响</span><span class="prop-value" style="font-size:12px;line-height:1.6">' + d.culturalImpact + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">📖 历史人文</div><div>' + rows + '</div></div>' : null;
    },
    fun: function(el) {
      if (!el.fun) return null;
      var d = el.fun;
      var rows = '';
      if (d.funFact) rows += '<div class="prop-row"><span class="prop-label">💡 冷知识</span><span class="prop-value" style="font-size:12px;line-height:1.6">' + d.funFact + '</span></div>';
      if (d.elementRecord) rows += '<div class="prop-row"><span class="prop-label">🏆 元素之最</span><span class="prop-value">' + d.elementRecord + '</span></div>';
      if (d.dailyLife) rows += '<div class="prop-row"><span class="prop-label">🏠 生活关联</span><span class="prop-value" style="font-size:12px;line-height:1.6">' + d.dailyLife + '</span></div>';
      if (d.scifiReference) rows += '<div class="prop-row"><span class="prop-label">🎬 科幻引用</span><span class="prop-value" style="font-size:12px;line-height:1.6">' + d.scifiReference + '</span></div>';
      return rows ? '<div class="props-card props-inline role-extra-card"><div class="props-card-title">🎉 趣味科普</div><div>' + rows + '</div></div>' : null;
    }
  };

  // ════════════════════════════════════════════════════
  //  状态管理
  // ════════════════════════════════════════════════════

  var STORAGE_KEY = 'periodic-table-role';
  var currentRole = null;

  function getSavedRole() {
    try { return localStorage.getItem(STORAGE_KEY) || 'all'; }
    catch(e) { return 'all'; }
  }

  function saveRole(roleId) {
    try { localStorage.setItem(STORAGE_KEY, roleId); }
    catch(e) {}
  }

  function getRoleById(id) {
    for (var i = 0; i < ROLES.length; i++) {
      if (ROLES[i].id === id) return ROLES[i];
    }
    return ROLES[0];
  }

  // ════════════════════════════════════════════════════
  //  UI 构建
  // ════════════════════════════════════════════════════

  function injectStyles() {
    var css = ''
      + '.role-switcher { margin-bottom: 12px; padding: 10px; background: var(--bg-card, #fff); border: 1px solid var(--border-primary, #e2e8f0); border-radius: 10px; }'
      + '.role-switcher-title { font-size: 11px; color: var(--text-muted, #94a3b8); margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }'
      + '.role-chips { display: flex; flex-wrap: wrap; gap: 6px; }'
      + '.role-chip { display: inline-flex; align-items: center; gap: 4px; padding: 5px 10px; border-radius: 16px; border: 1.5px solid var(--border-primary, #e2e8f0); background: transparent; color: var(--text-secondary, #64748b); cursor: pointer; font-size: 12px; font-weight: 600; transition: all 0.2s; white-space: nowrap; }'
      + '.role-chip:hover { border-color: var(--accent-blue, #3b82f6); color: var(--accent-blue, #3b82f6); transform: translateY(-1px); }'
      + '.role-chip.active { background: var(--accent-blue, #3b82f6); color: #fff; border-color: var(--accent-blue, #3b82f6); box-shadow: 0 2px 8px rgba(59,130,246,0.3); }'
      + '.role-desc { font-size: 11px; color: var(--text-muted, #94a3b8); margin-top: 8px; padding: 6px 8px; background: var(--bg-input, #f8fafc); border-radius: 6px; display: none; }'
      + '.role-desc.visible { display: block; }'
      + '.role-extra-container { margin-top: 8px; }';
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildRoleSwitcher() {
    var sidebar = document.querySelector('.detail-sidebar');
    if (!sidebar) return;

    // Check if already exists
    if (document.getElementById('roleSwitcher')) return;

    var savedRole = getSavedRole();

    var container = document.createElement('div');
    container.id = 'roleSwitcher';
    container.className = 'role-switcher';

    var title = document.createElement('div');
    title.className = 'role-switcher-title';
    title.textContent = '🎭 角色视图';
    container.appendChild(title);

    var chips = document.createElement('div');
    chips.className = 'role-chips';

    ROLES.forEach(function(role) {
      var chip = document.createElement('button');
      chip.className = 'role-chip' + (role.id === savedRole ? ' active' : '');
      chip.setAttribute('data-role', role.id);
      chip.innerHTML = role.icon + ' ' + role.label;
      chip.addEventListener('click', function() {
        selectRole(role.id);
      });
      chips.appendChild(chip);
    });

    container.appendChild(chips);

    var desc = document.createElement('div');
    desc.id = 'roleDesc';
    desc.className = 'role-desc' + (savedRole !== 'all' ? ' visible' : '');
    desc.textContent = getRoleById(savedRole).desc;
    container.appendChild(desc);

    // Insert before dimension navigation
    var dimNav = sidebar.querySelector('.dimension-nav');
    if (dimNav) {
      sidebar.insertBefore(container, dimNav);
    } else {
      sidebar.appendChild(container);
    }
  }

  // ════════════════════════════════════════════════════
  //  角色切换逻辑
  // ════════════════════════════════════════════════════

  function selectRole(roleId) {
    currentRole = getRoleById(roleId);
    saveRole(roleId);

    // Update chip active states
    var chips = document.querySelectorAll('.role-chip');
    chips.forEach(function(chip) {
      chip.classList.toggle('active', chip.getAttribute('data-role') === roleId);
    });

    // Update description
    var desc = document.getElementById('roleDesc');
    if (desc) {
      desc.textContent = currentRole.desc;
      desc.classList.toggle('visible', roleId !== 'all');
    }

    applyRoleToUI();
  }

  function applyRoleToUI() {
    if (!currentRole) return;

    var role = currentRole;

    // Map old group names to new section ids
    var groupToSection = {
      'core': 'section-core',
      'safety': 'section-safety',
      'research': 'section-research',
      'isotope': 'section-isotope'
    };

    // Always visible base sections
    var visibleSections = ['section-search'];

    if (role.id === 'all') {
      visibleSections = ['section-search', 'section-core', 'section-safety', 'section-research', 'section-isotope', 'section-p6p7', 'section-detail'];
    } else {
      role.groups.forEach(function(g) {
        var sid = groupToSection[g];
        if (sid && visibleSections.indexOf(sid) === -1) visibleSections.push(sid);
      });
      // Detail/Markdown is useful for most roles except pure compliance
      if (role.id !== 'lawyer') {
        visibleSections.push('section-detail');
      }
      // P6/P7 cross-disciplinary section is rendered by extra cards
      visibleSections.push('section-p6p7');
    }

    // Show/hide main sections
    var sections = document.querySelectorAll('.dimension-section');
    sections.forEach(function(section) {
      var sid = section.id;
      if (visibleSections.indexOf(sid) !== -1) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });

    // Render extra role-specific data (P6/P7 cards)
    renderExtraData();

    // Update dimension nav visibility
    updateDimensionNav();
  }

  function updateDimensionNav() {
    var links = document.querySelectorAll('.dimension-nav-link');
    links.forEach(function(link) {
      var target = document.getElementById(link.getAttribute('data-target'));
      if (!target) return;
      link.classList.toggle('hidden-dim', target.classList.contains('hidden'));
    });
  }

  function renderExtraData() {
    var container = document.getElementById('p6p7Grid');
    if (!container) return;
    container.innerHTML = '';

    var el = getCurrentElement();
    if (!el) return;

    var keys = [];
    if (!currentRole || currentRole.id === 'all') {
      keys = ROLES[0].extra;
    } else {
      keys = currentRole.extra;
    }

    keys.forEach(function(key) {
      var renderer = EXTRA_RENDERERS[key];
      if (renderer) {
        var html = renderer(el);
        if (html) container.insertAdjacentHTML('beforeend', html);
      }
    });

    // Hide P6/P7 section if no cards rendered
    var section = document.getElementById('section-p6p7');
    if (section) {
      var hasCards = container.querySelectorAll('.props-card').length > 0;
      section.classList.toggle('hidden', !hasCards);
    }
  }

  function getCurrentElement() {
    // Try to get current element from URL parameter
    var params = new URLSearchParams(location.search);
    var z = parseInt(params.get('z') || '1', 10);
    if (typeof ELEMENTS !== 'undefined' && ELEMENTS.length > 0) {
      for (var i = 0; i < ELEMENTS.length; i++) {
        if (ELEMENTS[i].z === z) return ELEMENTS[i];
      }
    }
    return null;
  }

  // ════════════════════════════════════════════════════
  //  初始化
  // ════════════════════════════════════════════════════

  function init() {
    injectStyles();
    buildRoleSwitcher();
    var savedRole = getSavedRole();
    currentRole = getRoleById(savedRole);

    // Wait for ELEMENTS to be loaded, then apply role
    function tryApply() {
      if (typeof ELEMENTS !== 'undefined' && ELEMENTS.length > 0) {
        applyRoleToUI();
      } else {
        setTimeout(tryApply, 100);
      }
    }
    tryApply();

    // Re-apply when element changes (URL hash change or navigation)
    window.addEventListener('popstate', function() {
      setTimeout(applyRoleToUI, 50);
    });

    // Watch for URL changes (element navigation via buttons)
    var lastUrl = location.href;
    setInterval(function() {
      if (location.href !== lastUrl) {
        lastUrl = location.href;
        setTimeout(applyRoleToUI, 100);
      }
    }, 300);
  }

  // Public API
  window.RoleViewer = {
    init: init,
    selectRole: selectRole,
    getCurrentRole: function() { return currentRole; },
    refresh: function() { applyRoleToUI(); }
  };

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
