/**
 * P5-7 元素关系图模块
 * 功能：展示当前元素与同族/同周期/属性相似元素的关联关系
 * 依赖：无（纯 Canvas 实现）
 */

(function () {
  'use strict';

  // ── 关系类型定义 ──
  const RELATION_TYPES = [
    { key: 'group',   zh: '同族',       en: 'Same Group',   color: '#58a6ff' },
    { key: 'period',  zh: '同周期',     en: 'Same Period',  color: '#39d353' },
    { key: 'electro', zh: '电负性相近', en: 'Similar EN',   color: '#f59e0b' },
    { key: 'radius',  zh: '原子半径相近', en: 'Similar Radius', color: '#ef4444' },
  ];

  // ── 判断周期 ──
  function getPeriod(z) {
    if (z <= 2) return 1;
    if (z <= 10) return 2;
    if (z <= 18) return 3;
    if (z <= 36) return 4;
    if (z <= 54) return 5;
    if (z <= 86) return 6;
    return 7;
  }

  // ── 获取关系元素列表 ──
  function getRelatedElements(el) {
    const related = [];
    const added = new Set();

    // 1. 同族元素
    if (el.group) {
      ELEMENTS.forEach(e => {
        if (e.group === el.group && e.z !== el.z && e.state !== 'unknown') {
          const key = e.z;
          if (!added.has(key)) {
            related.push({ el: e, type: 'group' });
            added.add(key);
          }
        }
      });
    }

    // 2. 同周期元素
    const period = getPeriod(el.z);
    ELEMENTS.forEach(e => {
      if (getPeriod(e.z) === period && e.z !== el.z) {
        const key = e.z;
        if (!added.has(key)) {
          related.push({ el: e, type: 'period' });
          added.add(key);
        }
      }
    });

    // 3. 电负性相近（差值 < 0.5，最多 8 个）
    if (el.electronegativity !== null && el.electronegativity !== undefined) {
      const candidates = ELEMENTS.filter(e =>
        e.z !== el.z &&
        e.electronegativity !== null &&
        e.electronegativity !== undefined &&
        !added.has(e.z)
      );
      candidates.sort((a, b) =>
        Math.abs(a.electronegativity - el.electronegativity) -
        Math.abs(b.electronegativity - el.electronegativity)
      );
      candidates.slice(0, 8).forEach(e => {
        related.push({ el: e, type: 'electro' });
        added.add(e.z);
      });
    }

    // 4. 原子半径相近（差值 < 20pm，最多 6 个）
    if (el.atomicRadius !== null && el.atomicRadius !== undefined) {
      const candidates = ELEMENTS.filter(e =>
        e.z !== el.z &&
        e.atomicRadius !== null &&
        e.atomicRadius !== undefined &&
        !added.has(e.z)
      );
      candidates.sort((a, b) =>
        Math.abs(a.atomicRadius - el.atomicRadius) -
        Math.abs(b.atomicRadius - el.atomicRadius)
      );
      candidates.slice(0, 6).forEach(e => {
        related.push({ el: e, type: 'radius' });
        added.add(e.z);
      });
    }

    return related;
  }

  // ── 当前选中的元素 ──
  let _currentEl = null;
  let _canvas = null;
  let _ctx = null;
  let _animFrame = null;
  let _hoveredNode = null;

  // ── 绘制关系图 ──
  function drawRelationsChart(el) {
    const canvas = document.getElementById('relationsChartCanvas');
    const container = document.getElementById('relationsCard');
    if (!canvas || !container) return;

    _currentEl = el;
    _canvas = canvas;

    // 设置 Canvas 尺寸
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    _ctx = canvas.getContext('2d');
    _ctx.scale(dpr, dpr);

    const related = getRelatedElements(el);
    const isEn = window.I18N && window.I18N.isEn && window.I18N.isEn();

    if (related.length === 0) {
      const body = document.getElementById('relationsBody');
      if (body) body.innerHTML = '<p style="color:var(--text-muted);font-size:13px">暂无关联元素数据</p>';
      return;
    }

    // 布局参数
    const W = rect.width;
    const H = rect.height;
    const cx = W / 2;
    const cy = H / 2;
    const centerR = 28;
    const ringRadius = Math.min(W, H) * 0.35;

    // 按类型分组，计算每个类型有多少个节点
    const typeCounts = {};
    related.forEach(r => { typeCounts[r.type] = (typeCounts[r.type] || 0) + 1; });

    // 计算每个节点的位置
    const nodes = related.map((r, i) => {
      const angle = (2 * Math.PI * i) / related.length - Math.PI / 2;
      const x = cx + ringRadius * Math.cos(angle);
      const y = cy + ringRadius * Math.sin(angle);
      const typeInfo = RELATION_TYPES.find(t => t.key === r.type) || RELATION_TYPES[0];
      return {
        el: r.el,
        type: r.type,
        color: typeInfo.color,
        x, y,
        r: 16,
        angle,
      };
    });

    // 中心点
    const centerNode = {
      el,
      x: cx, y: cy, r: centerR,
      color: null, // 使用元素类别颜色
    };

    // ── 绘制函数 ──
    function render() {
      const ctx = _ctx;
      const w = rect.width;
      const h = rect.height;
      ctx.clearRect(0, 0, w, h);

      // 绘制连线
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.moveTo(centerNode.x, centerNode.y);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = node.color + '60';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 连线端点的小圆点
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = node.color + '80';
        ctx.fill();
      });

      // 绘制中心节点
      const catColor = getCategoryColor(centerNode.el.category);
      ctx.beginPath();
      ctx.arc(centerNode.x, centerNode.y, centerNode.r, 0, 2 * Math.PI);
      const grad = ctx.createRadialGradient(
        centerNode.x - 6, centerNode.y - 6, 2,
        centerNode.x, centerNode.y, centerNode.r
      );
      grad.addColorStop(0, catColor + 'cc');
      grad.addColorStop(1, catColor);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();

      // 中心节点文字
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(centerNode.el.symbol, centerNode.x, centerNode.y - 5);
      ctx.font = '9px sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.8)';
      ctx.fillText(isEn ? (centerNode.el.nameEn || centerNode.el.name) : centerNode.el.name,
        centerNode.x, centerNode.y + 10);

      // 绘制关联节点
      nodes.forEach(node => {
        const isHovered = _hoveredNode && _hoveredNode.el.z === node.el.z;
        const radius = isHovered ? node.r + 3 : node.r;

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = node.color + (isHovered ? 'cc' : '88');
        ctx.fill();
        ctx.strokeStyle = node.color;
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // 节点符号
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${isHovered ? 12 : 11}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(node.el.symbol, node.x, node.y);
      });

      // 绘制图例
      const legendX = 10;
      let legendY = h - RELATION_TYPES.length * 18 - 8;
      RELATION_TYPES.forEach(t => {
        if (!typeCounts[t.key]) return;
        ctx.fillStyle = t.color;
        ctx.beginPath();
        ctx.arc(legendX + 6, legendY + 6, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = '#8b949e';
        ctx.font = '11px sans-serif';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        ctx.fillText(isEn ? t.en : t.zh, legendX + 14, legendY + 6);
        legendY += 18;
      });
    }

    render();

    // ── 鼠标交互 ──
    function getNodeAt(mx, my) {
      // 检查关联节点
      for (let i = nodes.length - 1; i >= 0; i--) {
        const n = nodes[i];
        if (Math.hypot(mx - n.x, my - n.y) <= n.r + 4) return n;
      }
      return null;
    }

    canvas.onmousemove = function (e) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const node = getNodeAt(mx, my);
      _hoveredNode = node;

      if (node) {
        canvas.style.cursor = 'pointer';
        // 显示 tooltip
        showTooltip(e, node.el, isEn);
      } else {
        canvas.style.cursor = 'default';
        hideTooltip();
      }

      render();
    };

    canvas.onclick = function (e) {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const node = getNodeAt(mx, my);
      if (node) {
        // 导航到该元素
        window.location.href = 'element.html?z=' + node.el.z;
      }
    };

    canvas.onmouseleave = function () {
      _hoveredNode = null;
      canvas.style.cursor = 'default';
      hideTooltip();
      render();
    };

    // 更新说明文字
    const noteEl = document.getElementById('relationsNote');
    if (noteEl) {
      noteEl.textContent = isEn
        ? `Showing ${related.length} related elements: same group, same period, or similar properties. Click a node to view that element.`
        : `显示 ${related.length} 个关联元素：同族、同周期或属性相近。点击节点可查看该元素详情。`;
    }
  }

  // ── Tooltip ──
  function showTooltip(e, el, isEn) {
    let tip = document.getElementById('relationsTooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.id = 'relationsTooltip';
      tip.style.cssText = 'position:fixed;background:rgba(22,27,34,0.95);border:1px solid #30363d;' +
        'border-radius:8px;padding:8px 12px;pointer-events:none;z-index:9999;' +
        'font-size:12px;color:#e6edf3;box-shadow:0 4px 16px rgba(0,0,0,0.5);' +
        'max-width:200px;';
      document.body.appendChild(tip);
    }
    const name = isEn ? (el.nameEn || el.name) : el.name;
    const cat = isEn ? (el.categoryEn || el.category) : el.category;
    tip.innerHTML = `<div style="font-weight:700;font-size:14px;margin-bottom:2px">${el.symbol} · ${name}</div>` +
      `<div style="color:#8b949e;font-size:11px">Z=${el.z} | ${cat}</div>`;
    tip.style.left = (e.clientX + 12) + 'px';
    tip.style.top = (e.clientY - 10) + 'px';
    tip.style.display = 'block';
  }

  function hideTooltip() {
    const tip = document.getElementById('relationsTooltip');
    if (tip) tip.style.display = 'none';
  }

  // ── 获取元素类别颜色 ──
  function getCategoryColor(cat) {
    const map = {
      'alkali-metal':    '#e74c3c',
      'alkaline-earth':  '#e67e22',
      'transition':      '#3498db',
      'post-transition': '#2ecc71',
      'metalloid':       '#1abc9c',
      'nonmetal':        '#9b59b6',
      'halogen':         '#f39c12',
      'noble-gas':       '#e91e8c',
      'lanthanide':      '#00bcd4',
      'actinide':        '#ff5722',
    };
    return map[cat] || '#666';
  }

  // ── 公开渲染接口 ──
  window.renderRelationsChart = function (el) {
    const card = document.getElementById('relationsCard');
    const body = document.getElementById('relationsBody');
    if (!card || !body) return;

    card.style.display = 'block';
    _currentEl = el;

    const related = getRelatedElements(el);
    const isEn = window.I18N && window.I18N.isEn && window.I18N.isEn();

    if (related.length === 0) {
      body.innerHTML = '<p style="color:var(--text-muted);font-size:13px;padding:20px;text-align:center">暂无关联元素数据</p>';
      return;
    }

    // 构建内部 HTML
    body.innerHTML = `
      <div style="position:relative;height:320px;max-height:50vh">
        <canvas id="relationsChartCanvas" style="width:100%;height:100%"></canvas>
      </div>
      <p id="relationsNote" style="margin-top:10px;font-size:11px;color:var(--text-muted);line-height:1.6;padding:0 4px"></p>
    `;

    // 等待 DOM 更新后绘制
    setTimeout(() => drawRelationsChart(el), 60);

    // 窗口大小变化时重绘
    window.addEventListener('resize', function () {
      if (_currentEl && document.getElementById('relationsChartCanvas')) {
        setTimeout(() => drawRelationsChart(_currentEl), 100);
      }
    });
  };

  // ── 监听语言切换 ──
  document.addEventListener('langchange', function () {
    if (_currentEl && document.getElementById('relationsChartCanvas')) {
      setTimeout(() => drawRelationsChart(_currentEl), 50);
    }
  });

})();
