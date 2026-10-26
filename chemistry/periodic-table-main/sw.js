// Service Worker for PWA - v6.1
// 版本号 - 每次更新时递增
const CACHE_NAME = 'periodic-table-v6.2';

// 核心文件（必须全部缓存成功，否则 install 失败）
const CORE_URLS = [
  './',
  './index.html',
  './element.html',
  './compare.html',
  './history.html',
  './manifest.json',
  './css/main.css',
  './css/element.css',
  './css/table.css',
];

// 数据文件
const DATA_URLS = [
  './data/elements.js',
  './data/element-details.js',
  './data/abundance-data.js',
  './data/crystal-structures.js',
  './data/compounds.js',
  './data/p3-safety.js',
  './data/p4-crystal.js',
  './data/p4-research.js',
  './data/p4-spectral.js',
  './data/p6-legal.js',
  './data/p6-engineering.js',
  './data/p6-education.js',
  './data/p6-economy.js',
  './data/p7-environment.js',
  './data/p7-biomedical.js',
  './data/p7-strategy.js',
  './data/p7-history.js',
  './data/p7-fun.js',
];

// JS 功能模块
const JS_URLS = [
  './js/i18n.js',
  './js/table.js',
  './js/search.js',
  './js/export.js',
  './js/data-completer.js',
  './js/data-validation.js',
  './js/data-validation-enhanced.js',
  './js/element-details-enhanced.js',
  './js/element-details-enhanced-v3.js',
  './js/element-details-v4-patch.js',
  './js/element-details-v5-patch.js',
  './js/element-details-v6-patch.js',
  './js/crystal-structure-svg.js',
  './js/3d-viewer.js',
  './js/application-diagrams.js',
  './js/equation-balancing.js',
  './js/equation-balancing-enhanced.js',
  './js/equation-balancing-50.js',
  './js/p3-render.js',
  './js/p4-renderer.js',
  './js/p5-abundance.js',
  './js/p5-compare.js',
  './js/p5-heatmap.js',
  './js/p5-orbital.js',
  './js/p5-quiz.js',
  './js/p5-relations.js',
  './js/p5-trends.js',
  './js/role-viewer.js',
];

// 图标资源
const ASSET_URLS = [
  './icon-192.png',
  './icon-512.png',
];

const ALL_URLS = [...CORE_URLS, ...DATA_URLS, ...JS_URLS, ...ASSET_URLS];

// 安装事件 - 缓存所有静态资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // 核心文件必须全部成功
      return cache.addAll(CORE_URLS).then(() => {
        // 数据和 JS 文件允许单条失败（网络请求失败不影响安装）
        const optionalFetches = [...DATA_URLS, ...JS_URLS, ...ASSET_URLS].map(url =>
          cache.add(url).catch(err => {
            console.warn('[SW] Optional cache miss:', url, err.message);
          })
        );
        return Promise.all(optionalFetches);
      });
    }).then(() => {
      console.log('[SW] Install complete, cache:', CACHE_NAME);
      return self.skipWaiting(); // 立即激活新 SW
    })
  );
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    }).then(() => self.clients.claim()) // 立即接管所有已打开的页面
  );
});

// 拦截请求 - Cache First 策略（静态资源），Network First（API）
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 只处理同源请求
  if (url.origin !== location.origin) return;

  // 忽略 POST 等非 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // 缓存命中，后台更新缓存（Stale While Revalidate）
        const fetchPromise = fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
          }
          return networkResponse;
        }).catch(() => null);
        return cachedResponse;
      }

      // 缓存未命中，网络请求并缓存结果
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
        return networkResponse;
      }).catch(() => {
        // 离线且无缓存：对 HTML 请求返回 index.html fallback
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// 消息事件 - 支持 skipWaiting 指令
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
