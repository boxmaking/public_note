/**
 * 晶体结构 SVG 可视化工具
 * 使用 P4_CRYSTAL 数据生成 2D 晶体结构示意图
 * 用法：在元素详情页中调用 renderCrystalStructureSVG(el) 获取 SVG 字符串
 */

// ===== 晶体结构 SVG 生成器 =====
window.CrystalStructureSVGRenderer = (function() {
  
  // 颜色方案
  const COLORS = {
    alkali: '#FF6B6B',      // 碱金属 - 红色
    alkaline: '#4ECDC4',     // 碱土金属 - 青色
    transition: '#45B7D1',   // 过渡金属 - 蓝色
    post: '#F7DC6',         // 后过渡金属 - 黄色
    metalloid: '#A8E6CF',   // 准金属 - 绿色
    nonmetal: '#FFD3B6',     // 非金属 - 橙色
    halogen: '#FF8A80',      // 卤素 - 粉红
    noble: '#B388FF',        // 稀有气体 - 紫色
    lanthanide: '#F48FB1', // 镧系 - 粉红
    actinide: '#FF8A65'      // 锕系 - 橙色
  };
  
  // 获取元素类别颜色
  function getElementColor(el) {
    const catColors = {
      'alkali-metal': COLORS.alkali,
      'alkaline-earth': COLORS.alkaline,
      'transition': COLORS.transition,
      'post-transition': COLORS.post,
      'metalloid': COLORS.metalloid,
      'nonmetal': COLORS.nonmetal,
      'halogen': COLORS.halogen,
      'noble-gas': COLORS.noble,
      'lanthanide': COLORS.lanthanide,
      'actinide': COLORS.actinide
    };
    return catColors[el.category] || '#95a5a6';
  }
  
  // ===== BCC（体心立方）结构 =====
  function renderBCC(el) {
    const color = getElementColor(el);
    const size = 200;
    const cx = size / 2;
    const cy = size / 2;
    const r = 20;  // 原子半径（视觉）
    
    let svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg">\n';
    
    // 背景
    svg += '<rect width="' + size + '" height="' + size + '" fill="#f8f9fa" rx="8"/>\n';
    
    // 标题
    svg += '<text x="' + cx + '" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#2c3e50">BCC（体心立方）</text>\n';
    
    // 立方体框（透视）
    const offset = 40;
    const w = size - 2 * offset;
    // 后面
    svg += '<rect x="' + (offset + 10) + '" y="' + (offset + 10) + '" width="' + w + '" height="' + w + '" fill="none" stroke="#bdc3c7" stroke-width="1" opacity="0.5"/>\n';
    // 前面
    svg += '<rect x="' + offset + '" y="' + offset + '" width="' + w + '" height="' + w + '" fill="none" stroke="#34495e" stroke-width="2"/>\n';
    // 连接线（透视）
    svg += '<line x1="' + (offset + 10) + '" y1="' + (offset + 10) + '" x2="' + offset + '" y2="' + offset + '" stroke="#bdc3c7" stroke-width="1" opacity="0.5"/>\n';
    svg += '<line x1="' + (offset + 10 + w) + '" y1="' + (offset + 10) + '" x2="' + (offset + w) + '" y2="' + offset + '" stroke="#bdc3c7" stroke-width="1" opacity="0.5"/>\n';
    svg += '<line x1="' + (offset + 10) + '" y1="' + (offset + 10 + w) + '" x2="' + offset + '" y2="' + (offset + w) + '" stroke="#bdc3c7" stroke-width="1" opacity="0.5"/>\n';
    svg += '<line x1="' + (offset + 10 + w) + '" y1="' + (offset + 10 + w) + '" x2="' + (offset + w) + '" y2="' + (offset + w) + '" stroke="#bdc3c7" stroke-width="1" opacity="0.5"/>\n';
    
    // 角原子（8个）
    const corners = [
      [offset, offset], [offset + w, offset],
      [offset, offset + w], [offset + w, offset + w],
      [offset + 10, offset + 10], [offset + 10 + w, offset + 10],
      [offset + 10, offset + 10 + w], [offset + 10 + w, offset + 10 + w]
    ];
    
    corners.forEach(function(pos) {
      svg += '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="' + r + '" fill="' + color + '" opacity="0.8"/>\n';
    });
    
    // 体心原子
    svg += '<circle cx="' + (offset + w/2 + 5) + '" cy="' + (offset + w/2 + 5) + '" r="' + r + '" fill="' + color + '" opacity="0.9"/>\n';
    svg += '<text x="' + (offset + w/2 + 5) + '" y="' + (offset + w/2 + 5 + 5) + '" text-anchor="middle" font-size="10" fill="white" font-weight="bold">' + el.symbol + '</text>\n';
    
    // 配位数标注
    svg += '<text x="' + cx + '" y="' + (size - 15) + '" text-anchor="middle" font-size="12" fill="#7f8c8d">配位数：8</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== FCC（面心立方）结构 =====
  function renderFCC(el) {
    const color = getElementColor(el);
    const size = 200;
    const cx = size / 2;
    const cy = size / 2;
    const r = 18;
    const offset = 40;
    const w = size - 2 * offset;
    
    let svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg">\n';
    svg += '<rect width="' + size + '" height="' + size + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + cx + '" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#2c3e50">FCC（面心立方）</text>\n';
    
    // 立方体框
    svg += '<rect x="' + offset + '" y="' + offset + '" width="' + w + '" height="' + w + '" fill="none" stroke="#34495e" stroke-width="2"/>\n';
    
    // 角原子（4个可见）
    const corners = [[offset, offset], [offset + w, offset], [offset, offset + w], [offset + w, offset + w]];
    corners.forEach(function(pos) {
      svg += '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="' + r + '" fill="' + color + '" opacity="0.8"/>\n';
    });
    
    // 面心原子（前面3个）
    svg += '<circle cx="' + (offset + w/2) + '" cy="' + offset + '" r="' + r + '" fill="' + color + '" opacity="0.9"/>\n';
    svg += '<circle cx="' + (offset + w) + '" cy="' + (offset + w/2) + '" r="' + r + '" fill="' + color + '" opacity="0.9"/>\n';
    svg += '<circle cx="' + (offset + w/2) + '" cy="' + (offset + w/2) + '" r="' + r + '" fill="' + color + '" opacity="1"/>\n';
    svg += '<text x="' + (offset + w/2) + '" y="' + (offset + w/2 + 5) + '" text-anchor="middle" font-size="10" fill="white" font-weight="bold">' + el.symbol + '</text>\n';
    
    // 配位数标注
    svg += '<text x="' + cx + '" y="' + (size - 15) + '" text-anchor="middle" font-size="12" fill="#7f8c8d">配位数：12</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== HCP（六方密堆积）结构 =====
  function renderHCP(el) {
    const color = getElementColor(el);
    const size = 200;
    const cx = size / 2;
    const r = 16;
    
    let svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg">\n';
    svg += '<rect width="' + size + '" height="' + size + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + cx + '" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#2c3e50">HCP（六方密堆积）</text>\n';
    
    // 底层原子（6个 + 中心1个）
    const bottomY = 70;
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + (60 * Math.cos(angle));
      const y = bottomY + (30 * Math.sin(angle));
      svg += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r + '" fill="' + color + '" opacity="0.7"/>\n';
    }
    svg += '<circle cx="' + cx + '" cy="' + bottomY + '" r="' + r + '" fill="' + color + '" opacity="0.8"/>\n';
    
    // 中层原子（3个）
    const midY = bottomY - 35;
    for (let i = 0; i < 3; i++) {
      const x = cx - 20 + i * 20;
      svg += '<circle cx="' + x + '" cy="' + midY + '" r="' + r + '" fill="' + color + '" opacity="0.9"/>\n';
    }
    
    // 顶层原子（6个 + 中心1个）
    const topY = midY - 35;
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = cx + (60 * Math.cos(angle));
      const y = topY + (30 * Math.sin(angle));
      svg += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="' + r + '" fill="' + color + '" opacity="0.7"/>\n';
    }
    svg += '<circle cx="' + cx + '" cy="' + topY + '" r="' + r + '" fill="' + color + '" opacity="1"/>\n';
    svg += '<text x="' + cx + '" y="' + (topY + 5) + '" text-anchor="middle" font-size="10" fill="white" font-weight="bold">' + el.symbol + '</text>\n';
    
    // 配位数标注
    svg += '<text x="' + cx + '" y="' + (size - 15) + '" text-anchor="middle" font-size="12" fill="#7f8c8d">配位数：12 | c/a ≈ 1.633</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 金刚石结构 =====
  function renderDiamond(el) {
    const color = getElementColor(el);
    const size = 200;
    const cx = size / 2;
    const r = 14;
    const offset = 50;
    const w = size - 2 * offset;
    
    let svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg">\n';
    svg += '<rect width="' + size + '" height="' + size + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + cx + '" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#2c3e50">金刚石型（sp³）</text>\n';
    
    // 立方体框
    svg += '<rect x="' + offset + '" y="' + offset + '" width="' + w + '" height="' + w + '" fill="none" stroke="#34495e" stroke-width="1.5"/>\n';
    
    // 角原子
    const corners = [[offset, offset], [offset + w, offset], [offset, offset + w], [offset + w, offset + w]];
    corners.forEach(function(pos) {
      svg += '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="' + r + '" fill="' + color + '" opacity="0.8"/>\n';
    });
    
    // 内部四面体原子（4个）
    const inner = [
      [offset + w/2, offset + w/2, offset + w/4],
      [offset + w/2, offset + w/4, offset + w/2],
      [offset + w/4, offset + w/2, offset + w/2],
      [offset + 3*w/4, offset + 3*w/4, offset + 3*w/4]
    ];
    // 简化为2D投影
    const projected = [
      [offset + w/2, offset + w/2],
      [offset + w/2, offset + w/4],
      [offset + w/4, offset + w/2],
      [offset + 3*w/4, offset + 3*w/4]
    ];
    projected.forEach(function(pos, idx) {
      svg += '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="' + r + '" fill="' + color + '" opacity="0.9"/>\n';
      if (idx === 0) {
        svg += '<text x="' + pos[0] + '" y="' + (pos[1] + 5) + '" text-anchor="middle" font-size="10" fill="white" font-weight="bold">' + el.symbol + '</text>\n';
      }
    });
    
    // 连接线（共价键）
    svg += '<line x1="' + (offset + w/2) + '" y1="' + (offset + w/2) + '" x2="' + offset + '" y2="' + offset + '" stroke="' + color + '" stroke-width="1" opacity="0.5"/>\n';
    svg += '<line x1="' + (offset + w/2) + '" y1="' + (offset + w/2) + '" x2="' + (offset + w) + '" y2="' + offset + '" stroke="' + color + '" stroke-width="1" opacity="0.5"/>\n';
    svg += '<line x1="' + (offset + w/2) + '" y1="' + (offset + w/2) + '" x2="' + offset + '" y2="' + (offset + w) + '" stroke="' + color + '" stroke-width="1" opacity="0.5"/>\n';
    svg += '<line x1="' + (offset + w/2) + '" y1="' + (offset + w/2) + '" x2="' + (offset + w) + '" y2="' + (offset + w) + '" stroke="' + color + '" stroke-width="1" opacity="0.5"/>\n';
    
    // 配位数标注
    svg += '<text x="' + cx + '" y="' + (size - 15) + '" text-anchor="middle" font-size="12" fill="#7f8c8d">配位数：4（sp³ 杂化）</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 简单立方 =====
  function renderSimpleCubic(el) {
    const color = getElementColor(el);
    const size = 200;
    const cx = size / 2;
    const r = 20;
    const offset = 60;
    const w = size - 2 * offset;
    
    let svg = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + ' ' + size + '" xmlns="http://www.w3.org/2000/svg">\n';
    svg += '<rect width="' + size + '" height="' + size + '" fill="#f8f9fa" rx="8"/>\n';
    svg += '<text x="' + cx + '" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#2c3e50">简单立方</text>\n';
    
    // 立方体框
    svg += '<rect x="' + offset + '" y="' + offset + '" width="' + w + '" height="' + w + '" fill="none" stroke="#34495e" stroke-width="2"/>\n';
    
    // 角原子（8个）
    const corners = [
      [offset, offset], [offset + w, offset],
      [offset, offset + w], [offset + w, offset + w]
    ];
    corners.forEach(function(pos) {
      svg += '<circle cx="' + pos[0] + '" cy="' + pos[1] + '" r="' + r + '" fill="' + color + '" opacity="0.8"/>\n';
    });
    
    // 配位数标注
    svg += '<text x="' + cx + '" y="' + (size - 15) + '" text-anchor="middle" font-size="12" fill="#7f8c8d">配位数：6</text>\n';
    
    svg += '</svg>';
    return svg;
  }
  
  // ===== 主函数：根据元素渲染晶体结构 SVG =====
  function renderCrystalStructureSVG(el) {
    if (!el || !el.crystalStructure) {
      return '<p style="color: #7f8c8d; text-align: center;">该元素无晶体结构数据</p>';
    }
    
    const structure = el.crystalStructure.toLowerCase();
    
    if (structure.includes('bcc') || structure.includes('体心')) {
      return renderBCC(el);
    } else if (structure.includes('fcc') || structure.includes('面心')) {
      return renderFCC(el);
    } else if (structure.includes('hcp') || structure.includes('六方')) {
      return renderHCP(el);
    } else if (structure.includes('diamond') || structure.includes('金刚石')) {
      return renderDiamond(el);
    } else if (structure.includes('simple cubic') || structure.includes('简单立方')) {
      return renderSimpleCubic(el);
    } else {
      // 通用：显示晶体结构名称
      return '<div style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">' +
             '<div style="font-size: 48px; margin-bottom: 10px;">🔬</div>' +
             '<div style="font-weight: bold; color: #2c3e50;">' + el.crystalStructure + '</div>' +
             '<div style="font-size: 13px; color: #7f8c8d; margin-top: 5px;">点击"3D视图"查看交互式晶体结构</div>' +
             '</div>';
    }
  }
  
  // ===== 公开API =====
  return {
    render: renderCrystalStructureSVG,
    renderBCC: renderBCC,
    renderFCC: renderFCC,
    renderHCP: renderHCP,
    renderDiamond: renderDiamond
  };
})();

console.log('✅ 晶体结构SVG渲染器已加载');
