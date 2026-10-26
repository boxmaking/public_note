/**
 * p6p7-loader.js — P6/P7 维度数据按需懒加载器
 * 首屏不再同步加载约 1.85MB 的 P6/P7 维度数据，
 * 改为页面初始化后非阻塞后台加载；加载完成后合并到 ELEMENTS 并刷新角色视图。
 */
window.P6P7Loader = (function () {
  'use strict';

  // P6/P7 数据文件（按依赖顺序加载）
  var FILES = [
    'data/p6-legal.js',
    'data/p6-engineering.js',
    'data/p6-education.js',
    'data/p6-economy.js',
    'data/p7-environment.js',
    'data/p7-biomedical.js',
    'data/p7-strategy.js',
    'data/p7-history.js',
    'data/p7-fun.js'
  ];

  // P6 数据文件只导出全局变量（window.P6_LEGAL 等），需手动合并到 ELEMENTS
  // P7 数据文件末尾自带 el.xxx = P7_XXX[z] 合并逻辑，加载即自动生效
  var P6_MAP = {
    legal: 'P6_LEGAL',
    engineering: 'P6_ENGINEERING',
    education: 'P6_EDUCATION',
    economy: 'P6_ECONOMY'
  };

  var loaded = false;
  var loading = false;

  function mergeP6() {
    if (typeof ELEMENTS === 'undefined' || !ELEMENTS.length) return;
    ELEMENTS.forEach(function (el) {
      if (!el.symbol) return;
      for (var key in P6_MAP) {
        var store = window[P6_MAP[key]];
        if (store && store[el.symbol]) {
          el[key] = store[el.symbol];
        }
      }
    });
  }

  function onAllLoaded() {
    try { mergeP6(); } catch (e) { console.warn('[P6P7] mergeP6 failed:', e); }
    try {
      if (typeof RoleViewer !== 'undefined' && RoleViewer.refresh) RoleViewer.refresh();
    } catch (e) { console.warn('[P6P7] RoleViewer.refresh failed:', e); }
    try {
      if (typeof buildDimensionNav === 'function') buildDimensionNav();
    } catch (e) { console.warn('[P6P7] buildDimensionNav failed:', e); }
    loaded = true;
    loading = false;
  }

  function loadScript(src) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false; // 保持顺序，但不阻塞 HTML 解析
      s.onload = function () { resolve(); };
      s.onerror = function () { resolve(); }; // 单个失败不阻塞整体
      document.head.appendChild(s);
    });
  }

  function load() {
    if (loaded || loading) return;
    loading = true;
    var chain = Promise.resolve();
    FILES.forEach(function (f) {
      chain = chain.then(function () { return loadScript(f); });
    });
    chain.then(onAllLoaded).catch(function (e) {
      console.warn('[P6P7] load failed:', e);
      loading = false;
    });
  }

  return { load: load, isLoaded: function () { return loaded; } };
})();
