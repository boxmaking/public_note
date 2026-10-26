/**
 * 国际化模块 (i18n)
 * 支持中/英文切换
 * v2.0 - 大幅扩充翻译词条，覆盖所有页面
 */

const I18N = {
  // 当前语言
  currentLang: 'zh',

  // 翻译数据
  translations: {},

  // 初始化
  init() {
    const savedLang = localStorage.getItem('periodic-table-lang');
    if (savedLang && ['zh', 'en'].includes(savedLang)) {
      this.currentLang = savedLang;
    } else {
      const browserLang = (navigator.language || navigator.userLanguage || 'zh').toLowerCase();
      this.currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    this.loadTranslations();
    this.applyTranslations();
    this.updateLangButton();
  },

  // 加载翻译数据
  loadTranslations() {
    this.translations = {
      'zh': {
        // 导航
        'nav.title': '化学元素周期表',
        'nav.home': '周期表',
        'nav.history': '化学发展史',
        'nav.element': '元素详情',
        'nav.compare': '元素对比',
        'nav.search': '搜索元素（名称/符号/序号）...',
        'nav.search.short': '搜索元素...',

        // 首页英雄区
        'hero.title': '探索化学的宇宙',
        'hero.subtitle': '118 种元素 · 20+ 属性字段 · 权威数据源 · 化学方程式 · 工业安全 · PDF打印',

        // 视图/操作按钮
        'btn.simpleView': '📋 经典简化视图',
        'btn.fullView': '🔬 经典完整视图',
        'btn.filter': '🔍 高级筛选',
        'btn.heatmap': '🌈 属性热力图',
        'btn.quiz': '📝 知识测验',
        'btn.compare': '⚖️ 元素对比',
        'btn.export': '📦 数据导出',

        // 筛选面板
        'filter.title': '🔍 高级筛选',
        'filter.clear': '清除全部',
        'filter.category': '元素类别',
        'filter.state': '常温状态',
        'filter.period': '周期',
        'filter.group': '族',
        'filter.radioactive': '放射性',
        'filter.sort': '排序方式',
        'filter.sort.none': '— 不排序 —',
        'filter.sort.z.asc': '原子序数 升序',
        'filter.sort.z.desc': '原子序数 降序',
        'filter.sort.mass.asc': '原子量 升序',
        'filter.sort.mass.desc': '原子量 降序',
        'filter.sort.mp.asc': '熔点 升序',
        'filter.sort.mp.desc': '熔点 降序',
        'filter.sort.bp.asc': '沸点 升序',
        'filter.sort.bp.desc': '沸点 降序',
        'filter.sort.density.asc': '密度 升序',
        'filter.sort.density.desc': '密度 降序',
        'filter.result.all': '全部 118 个元素',

        // 热力图
        'heatmap.title': '🌈 选择着色属性：',

        // 图例
        'legend.category': '元素类别：',
        'legend.state': '常温状态：',
        'legend.solid': '固态',
        'legend.liquid': '液态',
        'legend.gas': '气态',
        'legend.synthetic': '人造',
        'legend.radioactive': '放射性',
        'cat.alkali-metal': '碱金属',
        'cat.alkaline-earth': '碱土金属',
        'cat.transition': '过渡金属',
        'cat.post-transition': '后过渡金属',
        'cat.metalloid': '准金属',
        'cat.nonmetal': '非金属',
        'cat.halogen': '卤素',
        'cat.noble-gas': '稀有气体',
        'cat.lanthanide': '镧系',
        'cat.actinide': '锕系',

        // 元素详情页
        'detail.back': '← 返回周期表',
        'detail.prev': '← 上一个',
        'detail.next': '下一个 →',
        'detail.core': '📊 核心数据',
        'detail.thermo': '🌡 热力学数据',
        'detail.em': '⚡ 电磁性质',
        'detail.crystal': '💎 晶体结构',
        'detail.nuclear': '☢ 核物理',
        'detail.safety': '⚠️ 安全数据',
        'detail.production': '🏭 工业生产',
        'detail.abundance': '🌍 自然丰度',
        'detail.reactions': '🔬 化学反应',
        'detail.spectral': '🌈 光谱数据',
        'detail.research': '📚 研究前沿',
        'detail.trends': '📈 属性趋势',
        'detail.compare.go': '对比此元素',

        // 属性标签
        'prop.atomicNumber': '原子序数',
        'prop.symbol': '元素符号',
        'prop.name': '中文名',
        'prop.nameEn': '英文名',
        'prop.mass': '相对原子量',
        'prop.category': '元素类别',
        'prop.period': '周期',
        'prop.group': '族',
        'prop.state': '常温状态',
        'prop.electrons': '电子排布',
        'prop.electronegativity': '电负性',
        'prop.ionicRadius': '离子半径',
        'prop.atomicRadius': '原子半径',
        'prop.covalentRadius': '共价半径',
        'prop.density': '密度',
        'prop.meltingPoint': '熔点',
        'prop.boilingPoint': '沸点',
        'prop.thermalConductivity': '热导率',
        'prop.specificHeat': '比热容',
        'prop.ionizationEnergy': '第一电离能',
        'prop.electronAffinity': '电子亲和能',
        'prop.crystalStructure': '晶体结构',
        'prop.radioactive': '放射性',

        // 对比页面
        'compare.title': '📊 元素对比工具',
        'compare.subtitle': '选择 2–4 个元素，并排对比全部属性，差异自动高亮',
        'compare.picker.title': '选择元素',
        'compare.picker.hint': '选择 2 至 4 个元素进行对比',
        'compare.btn.add': '添加',
        'compare.btn.compare': '开始对比',
        'compare.btn.clear': '清空',
        'compare.radar.title': '📡 雷达图综合对比',
        'compare.no.data': '请先选择至少 2 个元素',

        // 历史页面
        'history.title': '化学发展史',
        'history.subtitle': '从炼金术到量子化学，探索化学科学的演变历程',
        'history.chemists': '著名化学家',
        'history.timeline': '时间线',

        // 通用
        'loading': '加载中...',
        'error': '错误',
        'unknown': '未知',
        'yes': '是',
        'no': '否',
        'na': '—',
        'footer.version': '⚛️ 化学元素周期表 · 专业版 v3.0',
        'footer.datasource': '数据来源：IUPAC CIAAW 2024 · CRC Handbook 105th ed. · NIST Chemistry WebBook · PubChem NIH · ILO/WHO ICSC',

        // PWA
        'pwa.install': '添加到主屏幕',
        'pwa.install.desc': '安装应用，离线可用',
        'pwa.install.btn': '立即安装',
        'pwa.dismiss': '暂不'
      },
      'en': {
        // Navigation
        'nav.title': 'Periodic Table',
        'nav.home': 'Periodic Table',
        'nav.history': 'History',
        'nav.element': 'Element Details',
        'nav.compare': 'Compare',
        'nav.search': 'Search elements (name/symbol/Z)...',
        'nav.search.short': 'Search elements...',

        // Hero
        'hero.title': 'Explore the Chemical Universe',
        'hero.subtitle': '118 Elements · 20+ Properties · Authoritative Data · Chemical Equations · Industrial Safety · PDF Export',

        // Buttons
        'btn.simpleView': '📋 Simple View',
        'btn.fullView': '🔬 Full View',
        'btn.filter': '🔍 Advanced Filter',
        'btn.heatmap': '🌈 Property Heatmap',
        'btn.quiz': '📝 Knowledge Quiz',
        'btn.compare': '⚖️ Compare',
        'btn.export': '📦 Export Data',

        // Filter panel
        'filter.title': '🔍 Advanced Filter',
        'filter.clear': 'Clear All',
        'filter.category': 'Category',
        'filter.state': 'State at RT',
        'filter.period': 'Period',
        'filter.group': 'Group',
        'filter.radioactive': 'Radioactivity',
        'filter.sort': 'Sort By',
        'filter.sort.none': '— No sort —',
        'filter.sort.z.asc': 'Atomic number ↑',
        'filter.sort.z.desc': 'Atomic number ↓',
        'filter.sort.mass.asc': 'Atomic mass ↑',
        'filter.sort.mass.desc': 'Atomic mass ↓',
        'filter.sort.mp.asc': 'Melting point ↑',
        'filter.sort.mp.desc': 'Melting point ↓',
        'filter.sort.bp.asc': 'Boiling point ↑',
        'filter.sort.bp.desc': 'Boiling point ↓',
        'filter.sort.density.asc': 'Density ↑',
        'filter.sort.density.desc': 'Density ↓',
        'filter.result.all': 'All 118 elements',

        // Heatmap
        'heatmap.title': '🌈 Select coloring property:',

        // Legend
        'legend.category': 'Category:',
        'legend.state': 'State at RT:',
        'legend.solid': 'Solid',
        'legend.liquid': 'Liquid',
        'legend.gas': 'Gas',
        'legend.synthetic': 'Synthetic',
        'legend.radioactive': 'Radioactive',
        'cat.alkali-metal': 'Alkali Metal',
        'cat.alkaline-earth': 'Alkaline Earth',
        'cat.transition': 'Transition Metal',
        'cat.post-transition': 'Post-Transition',
        'cat.metalloid': 'Metalloid',
        'cat.nonmetal': 'Nonmetal',
        'cat.halogen': 'Halogen',
        'cat.noble-gas': 'Noble Gas',
        'cat.lanthanide': 'Lanthanide',
        'cat.actinide': 'Actinide',

        // Element detail page
        'detail.back': '← Back to Table',
        'detail.prev': '← Previous',
        'detail.next': 'Next →',
        'detail.core': '📊 Core Data',
        'detail.thermo': '🌡 Thermodynamic Data',
        'detail.em': '⚡ Electromagnetic Properties',
        'detail.crystal': '💎 Crystal Structure',
        'detail.nuclear': '☢ Nuclear Physics',
        'detail.safety': '⚠️ Safety Data',
        'detail.production': '🏭 Industrial Production',
        'detail.abundance': '🌍 Natural Abundance',
        'detail.reactions': '🔬 Chemical Reactions',
        'detail.spectral': '🌈 Spectral Data',
        'detail.research': '📚 Research Frontiers',
        'detail.trends': '📈 Property Trends',
        'detail.compare.go': 'Compare this element',

        // Property labels
        'prop.atomicNumber': 'Atomic Number',
        'prop.symbol': 'Symbol',
        'prop.name': 'Chinese Name',
        'prop.nameEn': 'English Name',
        'prop.mass': 'Atomic Mass',
        'prop.category': 'Category',
        'prop.period': 'Period',
        'prop.group': 'Group',
        'prop.state': 'State at RT',
        'prop.electrons': 'Electron Config.',
        'prop.electronegativity': 'Electronegativity',
        'prop.ionicRadius': 'Ionic Radius',
        'prop.atomicRadius': 'Atomic Radius',
        'prop.covalentRadius': 'Covalent Radius',
        'prop.density': 'Density',
        'prop.meltingPoint': 'Melting Point',
        'prop.boilingPoint': 'Boiling Point',
        'prop.thermalConductivity': 'Thermal Conductivity',
        'prop.specificHeat': 'Specific Heat',
        'prop.ionizationEnergy': '1st Ionization Energy',
        'prop.electronAffinity': 'Electron Affinity',
        'prop.crystalStructure': 'Crystal Structure',
        'prop.radioactive': 'Radioactive',

        // Compare page
        'compare.title': '📊 Element Comparison',
        'compare.subtitle': 'Select 2–4 elements to compare all properties side by side',
        'compare.picker.title': 'Select Elements',
        'compare.picker.hint': 'Select 2 to 4 elements to compare',
        'compare.btn.add': 'Add',
        'compare.btn.compare': 'Compare',
        'compare.btn.clear': 'Clear',
        'compare.radar.title': '📡 Radar Chart Overview',
        'compare.no.data': 'Please select at least 2 elements first',

        // History page
        'history.title': 'History of Chemistry',
        'history.subtitle': 'From alchemy to quantum chemistry — explore the evolution of chemical science',
        'history.chemists': 'Notable Chemists',
        'history.timeline': 'Timeline',

        // General
        'loading': 'Loading...',
        'error': 'Error',
        'unknown': 'Unknown',
        'yes': 'Yes',
        'no': 'No',
        'na': '—',
        'footer.version': '⚛️ Periodic Table of Elements · Pro v3.0',
        'footer.datasource': 'Data: IUPAC CIAAW 2024 · CRC Handbook 105th ed. · NIST Chemistry WebBook · PubChem NIH · ILO/WHO ICSC',

        // PWA
        'pwa.install': 'Add to Home Screen',
        'pwa.install.desc': 'Install the app for offline access',
        'pwa.install.btn': 'Install',
        'pwa.dismiss': 'Not now'
      }
    };
  },

  // 应用翻译
  applyTranslations() {
    const lang = this.currentLang;
    const trans = this.translations[lang];
    if (!trans) return;

    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (trans[key] !== undefined) {
        el.textContent = trans[key];
      }
    });

    // 更新所有带 data-i18n-placeholder 属性的元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (trans[key] !== undefined) {
        el.placeholder = trans[key];
      }
    });

    // 更新 data-i18n-html（允许 innerHTML，用于含 HTML 的翻译）
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (trans[key] !== undefined) {
        el.innerHTML = trans[key];
      }
    });

    // 更新页面标题
    const titleKey = document.documentElement.getAttribute('data-i18n-title');
    if (titleKey && trans[titleKey]) {
      document.title = trans[titleKey];
    }

    // 更新 html lang 属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  },

  // 切换语言（无刷新切换，重新应用翻译）
  switchLang(lang) {
    if (!['zh', 'en'].includes(lang)) return;
    this.currentLang = lang;
    localStorage.setItem('periodic-table-lang', lang);
    this.applyTranslations();
    this.updateLangButton();
    // 触发自定义事件，让各模块可以响应语言变化
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  },

  // 更新语言切换按钮
  updateLangButton() {
    const btn = document.getElementById('langSwitchBtn');
    if (btn) {
      btn.textContent = this.currentLang === 'zh' ? '🇺🇸 EN' : '🇨🇳 中文';
      btn.title = this.currentLang === 'zh' ? 'Switch to English' : '切换到中文';
      btn.onclick = () => this.switchLang(this.currentLang === 'zh' ? 'en' : 'zh');
    }
  },

  // 获取翻译文本
  t(key, fallback) {
    const trans = this.translations[this.currentLang];
    if (trans && trans[key] !== undefined) return trans[key];
    if (fallback !== undefined) return fallback;
    return key;
  },

  // 判断当前是否为英文
  isEn() {
    return this.currentLang === 'en';
  }
};

// 自动初始化
if (typeof window !== 'undefined') {
  window.I18N = I18N;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18N.init());
  } else {
    I18N.init();
  }
}
