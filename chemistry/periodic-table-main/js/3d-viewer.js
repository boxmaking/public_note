/**
 * 3D示意图模块（使用 Three.js）—— 扩展版
 * 创建交互式 3D 晶体结构、分子模型
 * 扩展：元素晶体自动渲染、更多分子模型、导出 PNG、视图控制
 */

// ===== 3D 渲染器 =====
class ThreeDViewer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error('3D Viewer: 容器未找到', containerId);
      return;
    }

    this.width  = options.width  || this.container.clientWidth || 680;
    this.height = options.height || Math.max(350, this.container.clientHeight) || 400;
    this.el      = null; // 当前关联的元素

    // 场景
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    // 地面网格
    const gridHelper = new THREE.GridHelper(20, 20, 0xcccccc, 0xe0e0e0);
    gridHelper.position.y = -2;
    this.scene.add(gridHelper);

    // 相机
    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
    this.camera.position.set(8, 8, 8);
    this.camera.lookAt(0, 0, 0);

    // 渲染器
    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(window.devicePixelRatio || 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    // 控制器
    if (THREE.OrbitControls) {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.08;
      this.controls.minDistance = 2;
      this.controls.maxDistance = 50;
    }

    // 光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);
    this._ambientLight = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9);
    dirLight.position.set(10, 15, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    this.scene.add(dirLight);
    this._dirLight = dirLight;

    // 保存灯光引用以便 clear() 保留
    this._lightIds = [ambientLight.id, dirLight.id];

    // 动画循环
    this._animate();
  }

  _animate() {
    requestAnimationFrame(() => this._animate());
    if (this.controls) this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  // ── 调整尺寸 ──
  resize() {
    const w = this.container.clientWidth || this.width;
    const h = this.container.clientHeight || this.height;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  }

  // ── 清除场景（保留灯光和网格）──
  clear() {
    const keep = new Set([...this._lightIds]);
    // 也保留 GridHelper
    this.scene.children = this.scene.children.filter(c => {
      if (keep.has(c.id)) return true;
      if (c.isGridHelper) return true;
      return false;
    });
  }

  // ── 添加原子球 ──
  addAtom(x, y, z, color, radius = 0.5, label = '') {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      metalness: 0.2,
      roughness: 0.4,
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    this.scene.add(sphere);

    if (label) {
      const canvas = document.createElement('canvas');
      canvas.width = 128;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#' + new THREE.Color(color).getHexString();
      ctx.fillRect(0, 0, 128, 64);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, 64, 32);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.position.set(x, y + radius + 0.4, z);
      sprite.scale.set(1.5, 0.75, 1);
      this.scene.add(sprite);
    }

    return sphere;
  }

  // ── 添加键合棒 ──
  addBond(x1, y1, z1, x2, y2, z2, color = 0x888888, radius = 0.1) {
    const start = new THREE.Vector3(x1, y1, z1);
    const end   = new THREE.Vector3(x2, y2, z2);
    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);

    const geometry = new THREE.CylinderGeometry(radius, radius, length, 8);
    const material = new THREE.MeshStandardMaterial({ color: new THREE.Color(color) });
    const cylinder = new THREE.Mesh(geometry, material);

    cylinder.position.copy(mid);
    cylinder.lookAt(end);
    cylinder.rotateX(Math.PI / 2);

    this.scene.add(cylinder);
    return cylinder;
  }

  // ── 渲染 BCC 晶体结构 ──
  renderBCC(element) {
    this.clear();
    const color = element.color || 0x8b4513;
    const a = 2;

    for (let x = 0; x <= 1; x++) {
      for (let y = 0; y <= 1; y++) {
        for (let z = 0; z <= 1; z++) {
          this.addAtom(x * a, y * a, z * a, color, 0.4);
        }
      }
    }
    this.addAtom(0.5 * a, 0.5 * a, 0.5 * a, color, 0.4);
    console.log('3D Viewer: BCC 晶体结构已渲染', element.name);
  }

  // ── 渲染 FCC 晶体结构 ──
  renderFCC(element) {
    this.clear();
    const color = element.color || 0x8b4513;
    const a = 2;

    for (let x = 0; x <= 1; x++) {
      for (let y = 0; y <= 1; y++) {
        for (let z = 0; z <= 1; z++) {
          this.addAtom(x * a, y * a, z * a, color, 0.4);
        }
      }
    }
    this.addAtom(0.5 * a, 0.5 * a, 0, color, 0.4);
    this.addAtom(0.5 * a, 0, 0.5 * a, color, 0.4);
    this.addAtom(0, 0.5 * a, 0.5 * a, color, 0.4);
    console.log('3D Viewer: FCC 晶体结构已渲染', element.name);
  }

  // ── 渲染元素晶体结构（自动识别）──
  renderElementCrystal(el) {
    this.el = el;
    const crystal = el.crystal;
    if (!crystal) {
      // 无晶体数据，渲染单个原子示意
      this.clear();
      const color = this._getElementColor(el);
      this.addAtom(0, 0, 0, color, 1.2, el.symbol);
      this._fitCamera(2);
      console.log('3D Viewer: 无晶体数据，已渲染单个原子示意', el.name);
      return;
    }

    const system = (crystal.system || '').toLowerCase();
    if (system.includes('bcc') || system.includes('体心')) {
      this.renderBCC(el);
    } else if (system.includes('fcc') || system.includes('面心')) {
      this.renderFCC(el);
    } else if (system.includes('hcp') || system.includes('六方')) {
      this._renderHCP(el);
    } else {
      // 默认 BCC
      this.renderBCC(el);
    }
    this._fitCamera(6);
  }

  // ── 渲染 HCP 晶体结构（简化）──
  _renderHCP(el) {
    this.clear();
    const color = this._getElementColor(el);
    const a = 2, c = 2 * Math.sqrt(2 / 3) * a;

    // 底层
    for (let i = 0; i < 6; i++) {
      const angle = (2 * Math.PI * i) / 6;
      this.addAtom(a * Math.cos(angle), 0, a * Math.sin(angle), color, 0.4);
    }
    this.addAtom(0, 0, 0, color, 0.4);

    // 中层
    for (let i = 0; i < 3; i++) {
      const angle = (2 * Math.PI * (i + 0.5)) / 6;
      this.addAtom(a * Math.cos(angle), c / 2, a * Math.sin(angle), color, 0.4);
    }

    // 顶层
    for (let i = 0; i < 6; i++) {
      const angle = (2 * Math.PI * i) / 6;
      this.addAtom(a * Math.cos(angle), c, a * Math.sin(angle), color, 0.4);
    }
    this.addAtom(0, c, 0, color, 0.4);

    console.log('3D Viewer: HCP 晶体结构已渲染', el.name);
  }

  // ── 获取元素颜色 ──
  _getElementColor(el) {
    const catColors = {
      'alkali-metal':    0xe74c3c,
      'alkaline-earth':  0xe67e22,
      'transition':      0x3498db,
      'post-transition': 0x2ecc71,
      'metalloid':      0x1abc9c,
      'nonmetal':       0x9b59b6,
      'halogen':        0xf39c12,
      'noble-gas':      0xe91e8c,
      'lanthanide':     0x00bcd4,
      'actinide':       0xff5722,
    };
    return catColors[el.category] || 0x888888;
  }

  // ── 调整相机适应场景 ──
  _fitCamera(sceneSize) {
    this.camera.position.set(sceneSize * 0.8, sceneSize * 0.8, sceneSize * 0.8);
    this.camera.lookAt(0, 0, 0);
    if (this.controls) {
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }
  }

  // ── 渲染水分子 ──
  renderWaterMolecule() {
    this.clear();
    this.addAtom(0, 0, 0, 0xff0000, 0.5, 'O');
    this.addAtom(0.96, 0, 0, 0xffffff, 0.3, 'H');
    this.addAtom(-0.24, 0.93, 0, 0xffffff, 0.3, 'H');
    this.addBond(0, 0, 0, 0.96, 0, 0, 0x666666, 0.08);
    this.addBond(0, 0, 0, -0.24, 0.93, 0, 0x666666, 0.08);
    this._fitCamera(3);
    console.log('3D Viewer: 水分子已渲染');
  }

  // ── 渲染二氧化碳分子 ──
  renderCO2Molecule() {
    this.clear();
    this.addAtom(0, 0, 0, 0x333333, 0.5, 'C');
    this.addAtom(-1.16, 0, 0, 0xff0000, 0.5, 'O');
    this.addAtom(1.16, 0, 0, 0xff0000, 0.5, 'O');
    this.addBond(-1.16, 0, 0, 0, 0, 0, 0x666666, 0.06);
    this.addBond(0, 0, 0, 1.16, 0, 0, 0x666666, 0.06);
    this._fitCamera(4);
    console.log('3D Viewer: 二氧化碳分子已渲染');
  }

  // ── 渲染苯分子 ──
  renderBenzeneMolecule() {
    this.clear();
    const angleStep = (2 * Math.PI) / 6;
    const r = 1.4;

    for (let i = 0; i < 6; i++) {
      const x = r * Math.cos(i * angleStep);
      const y = r * Math.sin(i * angleStep);
      this.addAtom(x, y, 0, 0x333333, 0.5, 'C');
    }
    for (let i = 0; i < 6; i++) {
      const x1 = r * Math.cos(i * angleStep);
      const y1 = r * Math.sin(i * angleStep);
      const x2 = r * Math.cos((i + 1) % 6 * angleStep);
      const y2 = r * Math.sin((i + 1) % 6 * angleStep);
      this.addBond(x1, y1, 0, x2, y2, 0, 0x666666, 0.08);
    }
    const hr = r + 1;
    for (let i = 0; i < 6; i++) {
      const x = hr * Math.cos(i * angleStep);
      const y = hr * Math.sin(i * angleStep);
      this.addAtom(x, y, 0, 0xffffff, 0.3, 'H');
      this.addBond(x, y, 0, r * Math.cos(i * angleStep), r * Math.sin(i * angleStep), 0, 0x666666, 0.06);
    }
    this._fitCamera(5);
    console.log('3D Viewer: 苯分子已渲染');
  }

  // ── 渲染甲烷分子 ──
  renderMethaneMolecule() {
    this.clear();
    this.addAtom(0, 0, 0, 0x333333, 0.6, 'C');
    const d = 1.09;
    const positions = [
      [ d,  d,  d], [-d, -d,  d], [-d,  d, -d], [ d, -d, -d]
    ];
    const labels = ['H', 'H', 'H', 'H'];
    positions.forEach((p, i) => {
      this.addAtom(p[0], p[1], p[2], 0xffffff, 0.3, labels[i]);
      this.addBond(0, 0, 0, p[0], p[1], p[2], 0x666666, 0.07);
    });
    this._fitCamera(3);
    console.log('3D Viewer: 甲烷分子已渲染');
  }

  // ── 渲染氨分子 ──
  renderAmmoniaMolecule() {
    this.clear();
    this.addAtom(0, 0, 0, 0x333333, 0.6, 'N');
    const positions = [
      [ 1.01, 0, 0], [-0.33, 0.95, 0], [-0.33, -0.95, 0]
    ];
    positions.forEach(p => {
      this.addAtom(p[0], p[1], p[2], 0xffffff, 0.3, 'H');
      this.addBond(0, 0, 0, p[0], p[1], p[2], 0x666666, 0.07);
    });
    // 孤对电子示意（上方小球）
    this.addAtom(0, 0, 0.8, 0x6688cc, 0.25);
    this._fitCamera(3);
    console.log('3D Viewer: 氨分子已渲染');
  }

  // ── 导出 PNG ──
  exportPNG(filename) {
    this.renderer.render(this.scene, this.camera);
    const dataURL = this.renderer.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = filename || 'molecule-3d.png';
    a.click();
    console.log('3D Viewer: 已导出 PNG', a.download);
  }

  // ── 重置视图 ──
  resetView() {
    this.camera.position.set(8, 8, 8);
    this.camera.lookAt(0, 0, 0);
    if (this.controls) {
      this.controls.target.set(0, 0, 0);
      this.controls.update();
    }
  }

  // ── 切换背景色 ──
  setBackground(hexColor) {
    this.scene.background = new THREE.Color(hexColor);
  }
}

// ===== 导出 =====
window.ThreeDViewer = ThreeDViewer;

console.log('✅ 3D 示意图模块（Three.js）已加载（扩展版）');
console.log('   支持：BCC/FCC/HCP 晶体结构、常见分子模型、PNG 导出');
