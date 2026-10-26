/**
 * P5-1：3D 电子轨道可视化（s/p/d/f 轨道形状）
 * 使用 Three.js 渲染电子轨道 3D 形状
 * 轻量级实现：使用球面方程绘制轨道形状
 */

/* ========== 轨道形状数学方程 ========== */
// s 轨道：球形
function sOrbitalGeometry(radius, segments) {
  radius = radius || 1.0;
  segments = segments || 32;
  return new THREE.SphereGeometry(radius, segments, segments);
}

// p 轨道：哑铃形（两个椭球）
function pOrbitalGeometry(orientation, size) {
  size = size || 1.0;
  orientation = orientation || 'x';
  var group = new THREE.Group();
  var lobeGeo = new THREE.SphereGeometry(size * 0.65, 24, 24);

  var sx = (orientation === 'x') ? 2.5 : 0.6;
  var sy = (orientation === 'y') ? 2.5 : 0.6;
  var sz = (orientation === 'z') ? 2.5 : 0.6;

  // 正极（蓝色）
  var lobe1 = new THREE.Mesh(lobeGeo, new THREE.MeshStandardMaterial({
    color: 0x58a6ff, transparent: true, opacity: 0.55,
    roughness: 0.3, metalness: 0.1
  }));
  lobe1.position[orientation] = size * 1.2;
  lobe1.scale.set(sx, sy, sz);
  group.add(lobe1);

  // 负极（红色）
  var lobeGeo2 = new THREE.SphereGeometry(size * 0.65, 24, 24);
  var lobe2 = new THREE.Mesh(lobeGeo2, new THREE.MeshStandardMaterial({
    color: 0xf85149, transparent: true, opacity: 0.55,
    roughness: 0.3, metalness: 0.1
  }));
  lobe2.position[orientation] = -size * 1.2;
  lobe2.scale.set(sx, sy, sz);
  group.add(lobe2);

  return group;
}

// d 轨道：四叶草形 / 环形
function dOrbitalGeometry(orientation, size) {
  size = size || 1.0;
  orientation = orientation || 'z2';
  var group = new THREE.Group();
  var petalGeo = new THREE.SphereGeometry(size * 0.45, 20, 20);

  if (orientation === 'z2') {
    // d_z²：沿 z 轴的两个大叶 + 赤道环
    for (var i = 0; i < 2; i++) {
      var mesh = new THREE.Mesh(petalGeo, new THREE.MeshStandardMaterial({
        color: 0x3fb950, transparent: true, opacity: 0.5,
        roughness: 0.3, metalness: 0.1
      }));
      mesh.position.z = (i === 0 ? 1 : -1) * size * 1.15;
      mesh.scale.set(1.8, 1.8, 0.55);
      group.add(mesh);
    }
    // 赤道环形
    var ringGeo = new THREE.TorusGeometry(size * 1.0, size * 0.12, 12, 32);
    var ring = new THREE.Mesh(ringGeo, new THREE.MeshStandardMaterial({
      color: 0xa371f7, transparent: true, opacity: 0.4,
      roughness: 0.4, metalness: 0.1
    }));
    group.add(ring);
  } else {
    // d_xy / d_xz / d_yz：四叶草
    var dColors = [0x3fb950, 0xf85149, 0x58a6ff];
    for (var j = 0; j < 4; j++) {
      var pMesh = new THREE.Mesh(petalGeo.clone(), new THREE.MeshStandardMaterial({
        color: dColors[j % 3], transparent: true, opacity: 0.5,
        roughness: 0.3, metalness: 0.1
      }));
      var angle = j * Math.PI / 2;
      if (orientation === 'xy') {
        pMesh.position.x = Math.cos(angle) * size * 1.15;
        pMesh.position.y = Math.sin(angle) * size * 1.15;
        pMesh.scale.set(1.8, 1.8, 0.5);
      } else if (orientation === 'xz') {
        pMesh.position.x = Math.cos(angle) * size * 1.15;
        pMesh.position.z = Math.sin(angle) * size * 1.15;
        pMesh.scale.set(1.8, 0.5, 1.8);
      } else {
        pMesh.position.y = Math.cos(angle) * size * 1.15;
        pMesh.position.z = Math.sin(angle) * size * 1.15;
        pMesh.scale.set(0.5, 1.8, 1.8);
      }
      group.add(pMesh);
    }
  }
  return group;
}

// f 轨道：六叶草/八叶草形
function fOrbitalGeometry(orientation, size) {
  size = size || 1.0;
  orientation = orientation || 'z3';
  var group = new THREE.Group();
  var petalGeo = new THREE.SphereGeometry(size * 0.35, 16, 16);

  if (orientation === 'z3') {
    // f_z³：沿 z 轴双叶 + 六叶赤道环
    for (var k = 0; k < 2; k++) {
      var zMesh = new THREE.Mesh(petalGeo, new THREE.MeshStandardMaterial({
        color: 0xf0883e, transparent: true, opacity: 0.5,
        roughness: 0.3, metalness: 0.1
      }));
      zMesh.position.z = (k === 0 ? 1 : -1) * size * 1.3;
      zMesh.scale.set(1.2, 1.2, 2.0);
      group.add(zMesh);
    }
    // 六叶赤道环
    for (var m = 0; m < 6; m++) {
      var eMesh = new THREE.Mesh(petalGeo.clone(), new THREE.MeshStandardMaterial({
        color: 0xe3b341, transparent: true, opacity: 0.45,
        roughness: 0.3, metalness: 0.1
      }));
      var eAngle = m * Math.PI / 3;
      eMesh.position.x = Math.cos(eAngle) * size * 1.25;
      eMesh.position.y = Math.sin(eAngle) * size * 1.25;
      eMesh.scale.set(1.5, 1.5, 0.4);
      group.add(eMesh);
    }
  } else if (orientation === 'xyz') {
    // f_xyz：八叶立方体方向
    var signs = [[1,1,1],[1,1,-1],[1,-1,1],[1,-1,-1],
                 [-1,1,1],[-1,1,-1],[-1,-1,1],[-1,-1,-1]];
    for (var s = 0; s < 8; s++) {
      var xyzMesh = new THREE.Mesh(petalGeo.clone(), new THREE.MeshStandardMaterial({
        color: 0xf0883e, transparent: true, opacity: 0.45,
        roughness: 0.3, metalness: 0.1
      }));
      xyzMesh.position.x = signs[s][0] * size * 1.0;
      xyzMesh.position.y = signs[s][1] * size * 1.0;
      xyzMesh.position.z = signs[s][2] * size * 1.0;
      group.add(xyzMesh);
    }
  }

  return group;
}

/* ========== 轨道可视化场景 ========== */
var orbitalScene, orbitalCamera, orbitalRenderer, orbitalAnimationId;

function initOrbitalViewer(containerId, orbitalType) {
  var container = document.getElementById(containerId);
  if (!container) { console.warn('[orbital] container not found:', containerId); return; }

  orbitalType = orbitalType || 's';

  // 清理旧场景
  if (orbitalRenderer) {
    cancelAnimationFrame(orbitalAnimationId);
    try { orbitalRenderer.dispose(); } catch(e) {}
    orbitalScene = null; orbitalCamera = null; orbitalRenderer = null;
  }

  var width = container.clientWidth || 400;
  var height = container.clientHeight || 400;

  // 场景
  orbitalScene = new THREE.Scene();
  orbitalScene.background = new THREE.Color(0x0d1117);

  // 相机
  orbitalCamera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
  orbitalCamera.position.set(3.5, 2.5, 3.5);
  orbitalCamera.lookAt(0, 0, 0);

  // 渲染器
  orbitalRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  orbitalRenderer.setSize(width, height);
  orbitalRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.innerHTML = '';
  container.appendChild(orbitalRenderer.domElement);

  // 光源
  var ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  orbitalScene.add(ambientLight);
  var dirLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight1.position.set(5, 5, 5);
  orbitalScene.add(dirLight1);
  var dirLight2 = new THREE.DirectionalLight(0x88aaff, 0.3);
  dirLight2.position.set(-3, -2, -4);
  orbitalScene.add(dirLight2);

  // 坐标轴辅助（修正拼写错误 AesHelper → AxesHelper）
  var axesHelper = new THREE.AxesHelper(1.8);
  axesHelper.name = '_axesHelper';
  orbitalScene.add(axesHelper);

  // 地面网格
  var gridHelper = new THREE.GridHelper(6, 10, 0x30363d, 0x21262d);
  gridHelper.position.y = -1.5;
  gridHelper.name = '_gridHelper';
  orbitalScene.add(gridHelper);

  // 添加轨道
  addOrbitalToScene(orbitalType);

  // 动画循环
  function animate() {
    orbitalAnimationId = requestAnimationFrame(animate);
    if (orbitalScene && orbitalCamera && orbitalRenderer) {
      orbitalScene.rotation.y += 0.004;
      orbitalRenderer.render(orbitalScene, orbitalCamera);
    }
  }
  animate();

  // 鼠标拖拽旋转（简易版）
  var isDragging = false;
  var prevX = 0, prevY = 0;
  container.addEventListener('mousedown', function(e) {
    isDragging = true;
    prevX = e.clientX; prevY = e.clientY;
  });
  window.addEventListener('mouseup', function() { isDragging = false; });
  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var dx = e.clientX - prevX;
    var dy = e.clientY - prevY;
    orbitalScene.rotation.y += dx * 0.005;
    orbitalScene.rotation.x += dy * 0.005;
    prevX = e.clientX; prevY = e.clientY;
  });

  // resize
  var _resizeTimer = null;
  window.addEventListener('resize', function() {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(function() {
      if (!container || !orbitalCamera || !orbitalRenderer) return;
      var w = container.clientWidth || 400;
      var h = container.clientHeight || 400;
      orbitalCamera.aspect = w / h;
      orbitalCamera.updateProjectionMatrix();
      orbitalRenderer.setSize(w, h);
    }, 150);
  });
}

function addOrbitalToScene(type) {
  if (!orbitalScene) { console.warn('[orbital] scene not ready'); return; }
  type = type || 's';

  // 移除旧的轨道 Mesh（保留灯光、坐标轴、网格）
  var toRemove = [];
  orbitalScene.children.forEach(function(child) {
    if (child.name !== '_axesHelper' && child.name !== '_gridHelper' &&
        child.type !== 'AmbientLight' && child.type !== 'DirectionalLight' &&
        child.type !== 'GridHelper' && child.type !== 'AxesHelper') {
      toRemove.push(child);
    }
  });
  toRemove.forEach(function(c) {
    orbitalScene.remove(c);
    if (c.geometry) c.geometry.dispose();
    if (c.material) {
      if (Array.isArray(c.material)) c.material.forEach(function(m) { m.dispose(); });
      else c.material.dispose();
    }
  });

  if (type === 's') {
    var geo = sOrbitalGeometry(1.2);
    var mat = new THREE.MeshStandardMaterial({
      color: 0x58a6ff, transparent: true, opacity: 0.3,
      side: THREE.DoubleSide, roughness: 0.2, metalness: 0.05
    });
    var mesh = new THREE.Mesh(geo, mat);
    orbitalScene.add(mesh);

    // 线框叠加
    var wireMat = new THREE.MeshBasicMaterial({ color: 0x58a6ff, wireframe: true, transparent: true, opacity: 0.35 });
    var wireMesh = new THREE.Mesh(geo, wireMat);
    orbitalScene.add(wireMesh);

  } else if (type.startsWith('p')) {
    var orientations = ['x', 'y', 'z'];
    orientations.forEach(function(o) {
      var pg = pOrbitalGeometry(o, 1.0);
      orbitalScene.add(pg);
    });

  } else if (type.startsWith('d')) {
    var dg1 = dOrbitalGeometry('z2', 1.0);
    orbitalScene.add(dg1);
    var dg2 = dOrbitalGeometry('xy', 1.0);
    orbitalScene.add(dg2);

  } else if (type.startsWith('f')) {
    var fg1 = fOrbitalGeometry('z3', 1.0);
    orbitalScene.add(fg1);
  }
}

/* ========== 创建轨道查看器面板 ========== */
function createOrbitalPanel(el) {
  // 检查 Three.js 是否加载
  if (typeof THREE === 'undefined') {
    alert('Three.js 未加载完成，请稍后再试');
    return;
  }

  var modal = document.getElementById('orbitalModal');
  if (modal) { modal.remove(); }

  modal = document.createElement('div');
  modal.id = 'orbitalModal';
  modal.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;' +
    'background:rgba(0,0,0,0.88);z-index:2000;' +
    'display:flex;align-items:center;justify-content:center;';

  // 获取元素电子排布
  var electronConfig = el.electronConfig || el.electronConfigShort || '1s¹';
  var shells = parseElectronConfig(electronConfig);

  // 元素名称（兼容中英文名）
  var displayName = el.nameZh || el.name || el.symbol;
  var symbol = el.symbol || '';

  // 判断元素有哪些轨道
  var hasP = false, hasD = false, hasF = false;
  shells.forEach(function(s) {
    if (s.l === 'p') hasP = true;
    if (s.l === 'd') hasD = true;
    if (s.l === 'f') hasF = true;
  });

  var btnHtml = '<button class="orb-btn" data-type="s">s \u868A\u9053(\u7403\u5F62)</button>';
  btnHtml += '<button class="orb-btn' + (hasP ? '' : ' orb-btn-dim') + '" data-type="p">p \u868A\u9053(\u54D1\u94C3\u5F62)</button>';
  btnHtml += '<button class="orb-btn' + (hasD ? '' : ' orb-btn-dim') + '" data-type="d">d \u868A\u9053(\u56DB\u53F6\u8349)</button>';
  if (hasF) {
    btnHtml += '<button class="orb-btn" data-type="f">f \u868A\u9053(\u590D\u6742\u5F62\u72B6)</button>';
  }

  modal.innerHTML =
    '<div class="orb-panel">' +
      '<button class="orb-close">&times;</button>' +
      '<h2 class="orb-title">\uD83C\uDF01 \u7535\u5B50\u868A\u9053\u53EF\u89C6\u5316 \u2014 ' +
        escapeHTML(displayName) + ' (' + escapeHTML(symbol) + ')' +
      '</h2>' +
      '<p class="orb-sub">\u7535\u5B50\u6392\u5E03\uFF1A' + escapeHTML(electronConfig) + '</p>' +
      '<div class="orb-btn-row">' + btnHtml + '</div>' +
      '<div id="orbitalContainer" class="orb-canvas"></div>' +
      '<div class="orb-info">' +
        '<strong>\uD83D\uDCCA \u868A\u9053\u77E5\u8BC6</strong><br>' +
        '&bull; <strong>s \u868A\u9053</strong>\uFF1A\u7403\u5F62\u5BF9\u79F0\uFF0C\u89D2\u91CF\u5B50\u6570 l=0\uFF0C\u6BCF\u4E2A s \u868A\u9053\u6700\u591A 2 \u4E2A\u7535\u5B50<br>' +
        '&bull; <strong>p \u868A\u9053</strong>\uFF1A\u54D1\u94C3\u5F62\uFF0C\u6CBF x/y/z \u8F74\uFF0Cl=1\uFF0C3 \u4E2A\u65B9\u5411\u540D\u5BB9\u7EB3 2 \u7535\u5B50(\u5171 6 \u4E2A)<br>' +
        '&bull; <strong>d \u868A\u9053</strong>\uFF1A\u56DB\u53F6\u8349/\u73AF\u5F62\uFF0Cl=2\uFF0C5 \u4E2A\u868A\u9053\u5171\u5BB9\u7EB3 10 \u4E2A\u7535\u5B50<br>' +
        '&bull; <strong>f \u868A\u9053</strong>\uFF1A\u66F4\u590D\u6742\u7684\u5F62\u72B0\uFF0Cl=3\uFF0C7 \u4E2A\u868A\u9053\u5171\u5BB9\u7EB3 14 \u4E2A\u7535\u5B50' +
      '</div>' +
    '</div>';

  // 样式注入
  if (!document.getElementById('orbitalStyleV2')) {
    var style = document.createElement('style');
    style.id = 'orbitalStyleV2';
    style.textContent =
      '.orb-panel{background:#161b22;border-radius:16px;padding:24px;max-width:720px;width:92%;max-height:92vh;overflow-y:auto;position:relative}' +
      '.orb-close{position:absolute;top:12px;right:14px;background:none;border:none;color:#8b949e;font-size:26px;cursor:pointer;line-height:1;padding:4px 8px}' +
      '.orb-close:hover{color:#f85149}' +
      '.orb-title{color:#e6edf3;margin:0 0 4px;font-size:18px}' +
      '.orb-sub{color:#8b949e;font-size:13px;margin-bottom:14px}' +
      '.orb-btn-row{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap}' +
      '.orb-btn{padding:8px 16px;border-radius:8px;border:1.5px solid #58a6ff;background:transparent;color:#58a6ff;cursor:pointer;font-size:13px;font-weight:600;transition:all .2s;white-space:nowrap}' +
      '.orb-btn:hover,.orb-btn.active{background:#58a6ff;color:#fff}' +
      '.orb-btn-dim{opacity:.45}' +
      '.orb-canvas{width:100%;height:420px;border-radius:12px;overflow:hidden;background:#0d1117;cursor:grab}' +
      '.orb-canvas:active{cursor:grabbing}' +
      '.orb-info{margin-top:14px;padding:14px;background:rgba(48,54,61,0.35);border-radius:8px;font-size:12.5px;color:#8b949e;line-height:1.9}' +
      '.orb-info strong{color:#e6edf3}';
    document.head.appendChild(style);
  }

  document.body.appendChild(modal);

  // 绑定按钮事件
  modal.querySelectorAll('.orb-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      // 切换 active 状态
      modal.querySelectorAll('.orb-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      // 只切换场景内容，不重新初始化渲染器
      addOrbitalToScene(btn.getAttribute('data-type'));
    });
  });

  // 关闭事件
  modal.querySelector('.orb-close').addEventListener('click', function() {
    modal.remove();
    cancelAnimationFrame(orbitalAnimationId);
    if (orbitalRenderer) { try { orbitalRenderer.dispose(); } catch(e) {} orbitalRenderer = null; }
  });
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.remove();
      cancelAnimationFrame(orbitalAnimationId);
      if (orbitalRenderer) { try { orbitalRenderer.dispose(); } catch(e) {} orbitalRenderer = null; }
    }
  });

  // 默认显示该元素的价电子轨道类型
  var defaultType = 's';
  if (hasF) defaultType = 'f';
  else if (hasD) defaultType = 'd';
  else if (hasP) defaultType = 'p';
  // 设置默认 active 按钮
  setTimeout(function() {
    modal.querySelectorAll('.orb-btn[data-type="' + defaultType + '"]').forEach(function(b) {
      b.classList.add('active');
    });
    initOrbitalViewer('orbitalContainer', defaultType);
  }, 80);
}

/* ========== HTML 转义 ========== */
function escapeHTML(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ========== 解析电子排布 ========== */
function parseElectronConfig(config) {
  if (!config) return [];
  var regex = /(\d+)([spdf])(\S*)/g;
  var shells = [];
  var match;
  while ((match = regex.exec(config)) !== null) {
    var n = parseInt(match[1]);
    var l = match[2];
    var countStr = match[3] || '\u00B9'; // 上标 1
    var countMap = {'\u00B9':1,'\u00B2':2,'\u00B3':3,'\u2074':4,'\u2075':5,
                    '\u2076':6,'\u2077':7,'\u2078':8,'\u2079':9,'\u2079\u2070':10};
    var count = countMap[countStr] || 1;
    shells.push({ n:n, l:l, count:count });
  }
  return shells;
}

// 导出到全局
if (typeof window !== 'undefined') {
  window.initOrbitalViewer = initOrbitalViewer;
  window.createOrbitalPanel = createOrbitalPanel;
  window.addOrbitalToScene = addOrbitalToScene;
}
