/**
 * 应用示意图 SVG 生成器
 * 为重要应用生成 SVG 原理图
 * 用法：在元素详情页中调用 renderApplicationDiagram(el, applicationType) 获取 SVG 字符串
 */

window.ApplicationDiagramRenderer = (function() {
  
  const SVG_NS = 'http://www.w3.org/2000/svg';
  
  // ===== 颜色方案 =====
  const COLORS = {
    battery: '#4CAF50',      // 电池 - 绿色
    catalyst: '#FF9800',     // 催化剂 - 橙色
    semiconductor: '#2196F3', // 半导体 - 蓝色
    medical: '#E91E63',      // 医疗 - 粉红色
    metallurgy: '#795548',    // 冶金 - 棕色
    electronic: '#9C27B0'    // 电子 - 紫色
  };
  
  // ===== 锂电池工作原理示意图 =====
  function renderLithiumBattery() {
    const w = 400, h = 250;
    let svg = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="' + SVG_NS + '">\n';
    
    // 背景
    svg += '<rect width="' + w + '" height="' + h + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + w/2 + '" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">锂电池工作原理</text>\n';
    
    // 正极（阴极）
    svg += '<rect x="30" y="50" width="80" height="150" fill="#ff6b6b" opacity="0.8" rx="4"/>\n';
    svg += '<text x="70" y="130" text-anchor="middle" font-size="12" fill="white" font-weight="bold">正极</text>\n';
    svg += '<text x="70" y="150" text-anchor="middle" font-size="10" fill="white">LiCoO₂</text>\n';
    
    // 负极（阳极）
    svg += '<rect x="290" y="50" width="80" height="150" fill="#4ecdc4" opacity="0.8" rx="4"/>\n';
    svg += '<text x="330" y="130" text-anchor="middle" font-size="12" fill="white" font-weight="bold">负极</text>\n';
    svg += '<text x="330" y="150" text-anchor="middle" font-size="10" fill="white">石墨</text>\n';
    
    // 电解液
    svg += '<rect x="110" y="90" width="180" height="70" fill="#bdc3c7" opacity="0.5" rx="4"/>\n';
    svg += '<text x="200" y="125" text-anchor="middle" font-size="11" fill="#2c3e50">电解液</text>\n';
    svg += '<text x="200" y="145" text-anchor="middle" font-size="10" fill="#2c3e50">LiPF₆ in EC/DEC</text>\n';
    
    // 隔膜
    svg += '<line x1="110" y1="70" x2="110" y2="180" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="5,5"/>\n';
    svg += '<line x1="290" y1="70" x2="290" y2="180" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="5,5"/>\n';
    svg += '<text x="200" y="190" text-anchor="middle" font-size="10" fill="#7f8c8d">隔膜（聚烯烃）</text>\n';
    
    // Li⁺ 离子路径
    svg += '<path d="M 100 110 C 150 90, 200 130, 250 110" stroke="#e74c3c" stroke-width="2" fill="none" marker-end="url(#arrowred)"/>\n';
    svg += '<text x="175" y="95" text-anchor="middle" font-size="10" fill="#e74c3c">Li⁺</text>\n';
    
    // 电子路径（外部电路）
    svg += '<path d="M 70 50 L 70 30 L 330 30 L 330 50" stroke="#2c3e50" stroke-width="2" fill="none"/>\n';
    svg += '<text x="200" y="25" text-anchor="middle" font-size="10" fill="#2c3e50">e⁻ 外部电路</text>\n';
    
    // 放电标注
    svg += '<text x="' + w/2 + '" y="220" text-anchor="middle" font-size="12" fill="#27ae60">放电过程：Li⁺ 从负极 → 正极</text>\n';
    svg += '<text x="' + w/2 + '" y="240" text-anchor="middle" font-size="11" fill="#7f8c8d">充电过程：Li⁺ 从正极 → 负极（嵌入石墨）</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 催化剂工作原理示意图 =====
  function renderCatalystMechanism() {
    const w = 400, h = 220;
    let svg = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="' + SVG_NS + '">\n';
    
    // 背景
    svg += '<rect width="' + w + '" height="' + h + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + w/2 + '" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">催化剂工作原理</text>\n';
    
    // 反应物
    svg += '<circle cx="60" cy="110" r="20" fill="#ff6b6b"/>\n';
    svg += '<text x="60" y="115" text-anchor="middle" font-size="10" fill="white">A</text>\n';
    svg += '<circle cx="100" cy="110" r="20" fill="#4ecdc4"/>\n';
    svg += '<text x="100" y="115" text-anchor="middle" font-size="10" fill="white">B</text>\n';
    svg += '<text x="80" y="150" text-anchor="middle" font-size="11" fill="#2c3e50">反应物</text>\n';
    
    // 箭头
    svg += '<line x1="130" y1="110" x2="180" y2="110" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow)"/>\n';
    
    // 催化剂表面
    svg += '<rect x="180" y="70" width="80" height="80" fill="#ff9800" opacity="0.7" rx="4"/>\n';
    svg += '<text x="220" y="105" text-anchor="middle" font-size="10" fill="white">催化剂</text>\n';
    svg += '<text x="220" y="125" text-anchor="middle" font-size="10" fill="white">活性位点</text>\n';
    
    // 吸附状态
    svg += '<circle cx="200" cy="90" r="10" fill="#ff6b6b" opacity="0.8"/>\n';
    svg += '<circle cx="240" cy="90" r="10" fill="#4ecdc4" opacity="0.8"/>\n';
    svg += '<text x="220" y="130" text-anchor="middle" font-size="9" fill="white">吸附</text>\n';
    
    // 箭头
    svg += '<line x1="260" y1="110" x2="310" y2="110" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow)"/>\n';
    
    // 产物
    svg += '<circle cx="350" cy="110" r="25" fill="#45b7d1"/>\n';
    svg += '<text x="350" y="115" text-anchor="middle" font-size="10" fill="white">AB</text>\n';
    svg += '<text x="350" y="150" text-anchor="middle" font-size="11" fill="#2c3e50">产物</text>\n';
    
    // 能量曲线
    svg += '<path d="M 50 180 Q 150 160, 220 180 Q 290 200, 370 180" stroke="#e74c3c" stroke-width="2" fill="none"/>\n';
    svg += '<text x="200" y="210" text-anchor="middle" font-size="10" fill="#e74c3c">能垒降低</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 半导体器件示意图 =====
  function renderSemiconductorDevice() {
    const w = 400, h = 250;
    let svg = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="' + SVG_NS + '">\n';
    
    // 背景
    svg += '<rect width="' + w + '" height="' + h + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + w/2 + '" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">PN结二极管</text>\n';
    
    // P型半导体
    svg += '<rect x="30" y="60" width="150" height="130" fill="#ff6b6b" opacity="0.6" rx="4"/>\n';
    svg += '<text x="105" y="125" text-anchor="middle" font-size="14" fill="white" font-weight="bold">P型</text>\n';
    svg += '<text x="105" y="150" text-anchor="middle" font-size="10" fill="white">空穴为多子</text>\n';
    // 空穴表示
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        svg += '<circle cx="' + (60 + j * 30) + '" cy="' + (80 + i * 25) + '" r="5" fill="white" opacity="0.8"/>\n';
      }
    }
    
    // N型半导体
    svg += '<rect x="220" y="60" width="150" height="130" fill="#4ecdc4" opacity="0.6" rx="4"/>\n';
    svg += '<text x="295" y="125" text-anchor="middle" font-size="14" fill="white" font-weight="bold">N型</text>\n';
    svg += '<text x="295" y="150" text-anchor="middle" font-size="10" fill="white">电子为多子</text>\n';
    // 电子表示
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        svg += '<circle cx="' + (250 + j * 30) + '" cy="' + (80 + i * 25) + '" r="5" fill="white" opacity="0.8"/>\n';
      }
    }
    
    // 耗尽层
    svg += '<rect x="175" y="60" width="55" height="130" fill="#bdc3c7" opacity="0.5"/>\n';
    svg += '<text x="202" y="125" text-anchor="middle" font-size="9" fill="#2c3e50">耗尽层</text>\n';
    
    // 正向偏压
    svg += '<line x1="30" y1="210" x2="30" y2="180" stroke="#27ae60" stroke-width="3"/>\n';
    svg += '<text x="30" y="225" text-anchor="middle" font-size="10" fill="#27ae60">+</text>\n';
    svg += '<line x1="370" y1="210" x2="370" y2="180" stroke="#e74c3c" stroke-width="3"/>\n';
    svg += '<text x="370" y="225" text-anchor="middle" font-size="10" fill="#e74c3c">−</text>\n';
    svg += '<text x="' + w/2 + '" y="240" text-anchor="middle" font-size="11" fill="#2c3e50">正向偏压：耗尽层变窄，电流导通</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 腐蚀与防护示意图 =====
  function renderCorrosionProtection() {
    const w = 400, h = 220;
    let svg = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="' + SVG_NS + '">\n';
    
    // 背景
    svg += '<rect width="' + w + '" height="' + h + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + w/2 + '" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">铁的电化学腐蚀与防护</text>\n';
    
    // 阳极（铁溶解）
    svg += '<circle cx="100" cy="100" r="30" fill="#95a5a6" stroke="#34495e" stroke-width="2"/>\n';
    svg += '<text x="100" y="105" text-anchor="middle" font-size="12" fill="white">Fe</text>\n';
    svg += '<text x="70" y="80" text-anchor="middle" font-size="9" fill="#e74c3c">阳极：Fe → Fe²⁺ + 2e⁻</text>\n';
    
    // 阴极（氧还原）
    svg += '<circle cx="250" cy="100" r="30" fill="#bdc3c7" stroke="#34495e" stroke-width="2"/>\n';
    svg += '<text x="250" y="105" text-anchor="middle" font-size="12" fill="#2c3e50">C</text>\n';
    svg += '<text x="290" y="80" text-anchor="middle" font-size="9" fill="#27ae60">阴极：O₂ + 2H₂O + 4e⁻ → 4OH⁻</text>\n';
    
    // 电子路径
    svg += '<line x1="130" y1="100" x2="220" y2="100" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow)"/>\n';
    svg += '<text x="175" y="90" text-anchor="middle" font-size="10" fill="#2c3e50">e⁻</text>\n';
    
    // 防护方法
    svg += '<text x="' + w/2 + '" y="170" text-anchor="middle" font-size="12" fill="#2c3e50">防护方法：</text>\n';
    svg += '<text x="' + w/2 + '" y="195" text-anchor="middle" font-size="11" fill="#7f8c8d">1. 涂层保护（油漆、电镀）</text>\n';
    svg += '<text x="' + w/2 + '" y="215" text-anchor="middle" font-size="11" fill="#7f8c8d">2. 阴极保护（牺牲阳极、外加电流）</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 金属冶炼流程图 =====
  function renderMetallurgyProcess() {
    const w = 500, h = 200;
    let svg = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="' + SVG_NS + '">\n';
    
    // 背景
    svg += '<rect width="' + w + '" height="' + h + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + w/2 + '" y="25" text-anchor="middle" font-size="16" font-weight="bold" fill="#2c3e50">金属冶炼流程（以铁为例）</text>\n';
    
    // 步骤框
    const steps = [
      { x: 30, label: '矿石', sub: 'Fe₂O₃' },
      { x: 150, label: '预处理', sub: '破碎、选矿' },
      { x: 270, label: '还原', sub: '高炉' },
      { x: 390, label: '精炼', sub: '炼钢' }
    ];
    
    steps.forEach(function(step, idx) {
      svg += '<rect x="' + step.x + '" y="60" width="80" height="60" fill="#795548" opacity="0.8" rx="8"/>\n';
      svg += '<text x="' + (step.x + 40) + '" y="95" text-anchor="middle" font-size="12" fill="white" font-weight="bold">' + step.label + '</text>\n';
      svg += '<text x="' + (step.x + 40) + '" y="115" text-anchor="middle" font-size="10" fill="white">' + step.sub + '</text>\n';
      
      // 箭头
      if (idx < steps.length - 1) {
        svg += '<line x1="' + (step.x + 80) + '" y1="90" x2="' + (steps[idx+1].x) + '" y2="90" stroke="#2c3e50" stroke-width="2" marker-end="url(#arrow)"/>\n';
      }
    });
    
    // 反应方程式
    svg += '<text x="' + w/2 + '" y="160" text-anchor="middle" font-size="11" fill="#2c3e50">Fe₂O₃ + 3CO → 2Fe + 3CO₂</text>\n';
    svg += '<text x="' + w/2 + '" y="185" text-anchor="middle" font-size="10" fill="#7f8c8d">高炉反应温度：1200-1500°C</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 主函数：根据应用类型渲染示意图 =====
  function render(applicationType) {
    switch(applicationType) {
      case 'lithium-battery':
      case 'battery':
        return renderLithiumBattery();
      case 'catalyst':
      case 'catalysis':
        return renderCatalystMechanism();
      case 'semiconductor':
      case 'diode':
        return renderSemiconductorDevice();
      case 'corrosion':
      case 'protection':
        return renderCorrosionProtection();
      case 'metallurgy':
      case 'smelting':
        return renderMetallurgyProcess();
      default:
        return '<p style="color: #7f8c8d; text-align: center;">该应用暂无示意图</p>';
    }
  }
  
  // ===== 根据元素获取重要应用示意图 =====
  function renderForElement(el) {
    const symbol = el.symbol;
    const cat = el.category;
    
    // 根据元素返回对应的应用示意图
    if (symbol === 'Li' || symbol === 'Co' || symbol === 'Ni') {
      return renderLithiumBattery();
    }
    
    if (cat === 'transition' && ['Pt', 'Pd', 'Rh', 'V'].includes(symbol)) {
      return renderCatalystMechanism();
    }
    
    if (symbol === 'Si' || symbol === 'Ge' || symbol === 'Ga') {
      return renderSemiconductorDevice();
    }
    
    if (symbol === 'Fe' || symbol === 'Zn') {
      return renderCorrosionProtection();
    }
    
    if (['Fe', 'Al', 'Cu', 'Ti'].includes(symbol)) {
      return renderMetallurgyProcess();
    }
    
    return '';
  }
  
  // ===== 公开API =====
  return {
    render: render,
    renderForElement: renderForElement,
    renderLithiumBattery: renderLithiumBattery,
    renderCatalystMechanism: renderCatalystMechanism,
    renderSemiconductorDevice: renderSemiconductorDevice
  };
})();

console.log('✅ 应用示意图SVG生成器已加载');
