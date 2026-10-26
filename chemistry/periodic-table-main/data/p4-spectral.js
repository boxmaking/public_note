/**
 * P4 系列：光谱数据模块
 * 包含：原子发射光谱、X射线荧光、XPS结合能、NMR性质
 * 用法：在 element.html 中加载此文件，然后调用 renderSpectral(el)
 */

// ══════════════════════════════════════════════════════
//  精确 P4 光谱数据（按 z 索引）
// ══════════════════════════════════════════════════════

var P4_SPECTRAL = {};

// ── 第 1 周期 ────────────────────────────────────────────
P4_SPECTRAL[1] = {  // H 氢
  emissionLines: [
    { wavelength: 656.28, intensity: '强', transition: '3→2 (Hα)', region: '可见/红' },
    { wavelength: 486.13, intensity: '强', transition: '4→2 (Hβ)', region: '可见/蓝绿' },
    { wavelength: 434.05, intensity: '中', transition: '5→2 (Hγ)', region: '可见/紫' },
    { wavelength: 410.17, intensity: '中', transition: '6→2 (Hδ)', region: '可见/紫' },
    { wavelength: 121.57, intensity: '极强', transition: '2→1 (Lyα)', region: '紫外' },
  ],
  xray: null,  // H 无 X 射线荧光
  xps: null,
  nmr: {
    spin: 0.5,
    naturalAbundance: 99.9885,
    magnetogyricRatio: 267.522187,
    reference: 'TMS (δ=0), H₂O (δ=4.79)',
    note: '¹H 是最灵敏的 NMR 核，广泛用于有机化学结构解析',
  },
};

P4_SPECTRAL[2] = {  // He 氦
  emissionLines: [
    { wavelength: 587.56, intensity: '强', transition: '3p→2s', region: '可见/黄' },
    { wavelength: 706.52, intensity: '中', transition: '3s→2p', region: '可见/红' },
    { wavelength: 388.86, intensity: '中', transition: '3p→2s', region: '可见/紫' },
  ],
  xray: null,
  xps: null,
  nmr: null,  // ³He 丰度极低，非常用 NMR 核
};

P4_SPECTRAL[3] = {  // Li 锂
  emissionLines: [
    { wavelength: 670.79, intensity: '强', transition: '2p→2s', region: '可见/红' },
    { wavelength: 610.36, intensity: '中', transition: '3d→2p', region: '可见/橙' },
    { wavelength: 460.30, intensity: '弱', transition: '4f→2p', region: '可见/蓝' },
  ],
  xray: { Ka: 0.054, Kb: 0.055, La: null },
  xps: { coreLevel: 'Li 1s', bindingEnergy: 54.7, note: '结合能低，易受荷电效应影响' },
  nmr: {
    spin: 1,
    naturalAbundance: 92.5,
    magnetogyricRatio: 103.962,
    reference: 'LiCl / D₂O',
    note: '⁶Li (I=1) 和 ⁷Li (I=3/2) 均有 NMR 活性',
  },
};

P4_SPECTRAL[4] = {  // Be 铍
  emissionLines: [
    { wavelength: 234.86, intensity: '强', transition: '2p→2s', region: '紫外' },
  ],
  xray: { Ka: 0.109, Kb: 0.112, La: null },
  xps: { coreLevel: 'Be 1s', bindingEnergy: 111.0 },
  nmr: {
    spin: 3,
    naturalAbundance: 100,
    magnetogyricRatio: -37.620,
    reference: 'Be(H₂O)₄²⁺ / D₂O',
    note: '⁹Be (I=3/2) 是唯一的稳定 Be 同位素',
  },
};

P4_SPECTRAL[5] = {  // B 硼
  emissionLines: [
    { wavelength: 249.68, intensity: '强', transition: '2p→2s', region: '紫外' },
    { wavelength: 208.89, intensity: '中', transition: '3s→2p', region: '紫外' },
  ],
  xray: { Ka: 0.183, Kb: 0.188, La: null },
  xps: { coreLevel: 'B 1s', bindingEnergy: 187.1 },
  nmr: {
    spin: 3,
    naturalAbundance: 80.1,
    magnetogyricRatio: 85.841,
    reference: 'BF₃·OEt₂ (δ=0)',
    note: '¹¹B (I=3/2) 是常用 NMR 核，四极矩较大',
  },
};

P4_SPECTRAL[6] = {  // C 碳
  emissionLines: [
    { wavelength: 247.86, intensity: '强', transition: '2p→2s (C I)', region: '紫外' },
    { wavelength: 193.09, intensity: '强', transition: '3p→2s (C I)', region: '紫外' },
    { wavelength: 426.73, intensity: '强', transition: '3p→2s (C₂ 斯万带)', region: '可见/蓝' },
  ],
  xray: { Ka: 0.277, Kb: 0.283, La: null },
  xps: { coreLevel: 'C 1s', bindingEnergy: 284.8, note: '有机化合物中最常用的 XPS 峰，作为结合能校准参考' },
  nmr: {
    spin: 0.5,
    naturalAbundance: 1.07,
    magnetogyricRatio: 67.2828,
    reference: 'TMS (δ=0)',
    note: '¹³C (I=1/2) 天然丰度低，需长时间累加；¹²C 无 NMR 活性',
  },
};

P4_SPECTRAL[7] = {  // N 氮
  emissionLines: [
    { wavelength: 149.26, intensity: '强', transition: '3p→2s (N I)', region: '紫外' },
    { wavelength: 174.27, intensity: '中', transition: '3d→2p (N I)', region: '紫外' },
  ],
  xray: { Ka: 0.392, Kb: 0.401, La: null },
  xps: { coreLevel: 'N 1s', bindingEnergy: 399.0, note: '胺基 (~399 eV)、硝基 (~406 eV) 有特征位移' },
  nmr: {
    spin: 1,
    naturalAbundance: 0.37,
    magnetogyricRatio: -27.116,
    reference: 'CH₃NO₂ (δ=0)',
    note: '¹⁵N (I=1/2) 天然丰度极低，需富集后测定',
  },
};

P4_SPECTRAL[8] = {  // O 氧
  emissionLines: [
    { wavelength: 130.22, intensity: '强', transition: '3p→2s (O I)', region: '紫外' },
    { wavelength: 777.19, intensity: '强', transition: '3p→3s (O I)', region: '近红外' },
  ],
  xray: { Ka: 0.525, Kb: 0.541, La: null },
  xps: { coreLevel: 'O 1s', bindingEnergy: 531.0, note: '金属氧化物 (~530 eV)、有机含氧 (~532 eV) 可区分' },
  nmr: null,  // ¹⁷O (I=5/2) 四极矩大，分辨率差
};

P4_SPECTRAL[9] = {  // F 氟
  emissionLines: [
    { wavelength: 95.48, intensity: '强', transition: '3p→2s (F I)', region: '真空紫外' },
  ],
  xray: { Ka: 0.677, Kb: 0.700, La: null },
  xps: { coreLevel: 'F 1s', bindingEnergy: 685.0 },
  nmr: {
    spin: 0.5,
    naturalAbundance: 100,
    magnetogyricRatio: 251.6232,
    reference: 'CFCl₃ (δ=0)',
    note: '¹⁹F (I=1/2) 天然丰度 100%，NMR 灵敏度高',
  },
};

P4_SPECTRAL[10] = {  // Ne 氖
  emissionLines: [
    { wavelength: 585.25, intensity: '强', transition: '3p→3s (Ne I)', region: '可见/黄' },
    { wavelength: 640.22, intensity: '强', transition: '3p→3s (Ne I)', region: '可见/红' },
    { wavelength: 703.24, intensity: '中', transition: '3p→3s (Ne I)', region: '可见/红' },
  ],
  xray: { Ka: 0.849, Kb: 0.883, La: null },
  xps: null,
  nmr: null,
};

// ── 第 2 周期金属 ─────────────────────────────────────────
P4_SPECTRAL[11] = {  // Na 钠
  emissionLines: [
    { wavelength: 589.00, intensity: '极强', transition: '3p→3s (Na D₂)', region: '可见/黄' },
    { wavelength: 589.59, intensity: '极强', transition: '3p→3s (Na D₁)', region: '可见/黄' },
    { wavelength: 330.23, intensity: '强', transition: '4s→3p (Na I)', region: '紫外' },
  ],
  xray: { Ka: 1.041, Kb: 1.082, La: null },
  xps: { coreLevel: 'Na 1s', bindingEnergy: 1071.5 },
  nmr: null,
};

P4_SPECTRAL[12] = {  // Mg 镁
  emissionLines: [
    { wavelength: 285.21, intensity: '强', transition: '3p→3s (Mg I)', region: '紫外' },
    { wavelength: 383.83, intensity: '强', transition: '4s→3p (Mg I)', region: '可见/紫' },
    { wavelength: 518.36, intensity: '中', transition: '5s→3p (Mg I)', region: '可见/绿' },
  ],
  xray: { Ka: 1.254, Kb: 1.307, La: null },
  xps: { coreLevel: 'Mg 2p', bindingEnergy: 49.8, note: 'Mg 2p 是 Mg 最常用的 XPS 峰' },
  nmr: null,
};

P4_SPECTRAL[13] = {  // Al 铝
  emissionLines: [
    { wavelength: 308.22, intensity: '强', transition: '4s→3p (Al I)', region: '紫外' },
    { wavelength: 396.15, intensity: '强', transition: '4s→3p (Al I)', region: '可见/紫' },
  ],
  xray: { Ka: 1.487, Kb: 1.553, La: null },
  xps: { coreLevel: 'Al 2p', bindingEnergy: 72.5, note: '金属 Al (~72.5 eV)、Al₂O₃ (~75.5 eV) 可区分' },
  nmr: {
    spin: 5,
    naturalAbundance: 100,
    magnetogyricRatio: 69.655,
    reference: 'Al(NO₃)₃ / D₂O (δ=0)',
    note: '²⁷Al (I=5/2) 四极矩大，谱线易展宽',
  },
};

P4_SPECTRAL[14] = {  // Si 硅
  emissionLines: [
    { wavelength: 243.52, intensity: '强', transition: '4p→4s (Si I)', region: '紫外' },
    { wavelength: 250.69, intensity: '强', transition: '4p→4s (Si I)', region: '紫外' },
    { wavelength: 288.16, intensity: '中', transition: '5s→4p (Si I)', region: '紫外' },
  ],
  xray: { Ka: 1.740, Kb: 1.829, La: null },
  xps: { coreLevel: 'Si 2p', bindingEnergy: 99.0, note: '单晶硅 (~99 eV)、SiO₂ (~103 eV) 有明显位移' },
  nmr: {
    spin: 0.5,
    naturalAbundance: 4.68,
    magnetogyricRatio: -53.190,
    reference: 'TMS (δ=0)',
    note: '²⁹Si (I=1/2) 天然丰度低，但半导体研究中重要',
  },
};

P4_SPECTRAL[15] = {  // P 磷
  emissionLines: [
    { wavelength: 177.50, intensity: '强', transition: '4p→4s (P I)', region: '紫外' },
    { wavelength: 185.46, intensity: '强', transition: '4p→4s (P I)', region: '紫外' },
    { wavelength: 213.55, intensity: '中', transition: '5s→4p (P I)', region: '紫外' },
  ],
  xray: { Ka: 2.013, Kb: 2.124, La: null },
  xps: { coreLevel: 'P 2p', bindingEnergy: 130.0 },
  nmr: {
    spin: 0.5,
    naturalAbundance: 100,
    magnetogyricRatio: 108.291,
    reference: 'H₃PO₄ (δ=0)',
    note: '³¹P (I=1/2) 天然丰度 100%，磷化学常用 NMR 核',
  },
};

P4_SPECTRAL[16] = {  // S 硫
  emissionLines: [
    { wavelength: 180.73, intensity: '强', transition: '4p→4s (S I)', region: '紫外' },
    { wavelength: 182.04, intensity: '强', transition: '4p→4s (S I)', region: '紫外' },
  ],
  xray: { Ka: 2.308, Kb: 2.445, La: null },
  xps: { coreLevel: 'S 2p', bindingEnergy: 164.0, note: '硫醚 (~164 eV)、砜 (~168 eV) 有特征位移' },
  nmr: null,  // ³³S (I=3/2) 天然丰度低且四极矩大
};

P4_SPECTRAL[17] = {  // Cl 氯
  emissionLines: [
    { wavelength: 134.72, intensity: '强', transition: '4p→4s (Cl I)', region: '紫外' },
    { wavelength: 138.97, intensity: '强', transition: '4p→4s (Cl I)', region: '紫外' },
  ],
  xray: { Ka: 2.622, Kb: 2.790, La: null },
  xps: { coreLevel: 'Cl 2p', bindingEnergy: 200.0 },
  nmr: {
    spin: 3,
    naturalAbundance: 75.78,
    magnetogyricRatio: 20.964,
    reference: 'NaCl / D₂O (δ=0)',
    note: '³⁵Cl 和 ³⁷Cl 均有 NMR 活性，四极矩较大',
  },
};

// ── 第 3 周期金属 ─────────────────────────────────────────
P4_SPECTRAL[19] = {  // K 钾
  emissionLines: [
    { wavelength: 766.49, intensity: '极强', transition: '5p→4s (K I)', region: '近红外/红' },
    { wavelength: 769.90, intensity: '极强', transition: '5p→4s (K I)', region: '近红外/红' },
  ],
  xray: { Ka: 3.313, Kb: 3.589, La: null },
  xps: { coreLevel: 'K 2p₃/₂', bindingEnergy: 293.0 },
  nmr: null,
};

P4_SPECTRAL[20] = {  // Ca 钙
  emissionLines: [
    { wavelength: 422.67, intensity: '极强', transition: '4p→4s (Ca I)', region: '可见/紫' },
    { wavelength: 643.91, intensity: '强', transition: '5p→4s (Ca I)', region: '可见/红' },
  ],
  xray: { Ka: 3.690, Kb: 4.012, La: null },
  xps: { coreLevel: 'Ca 2p₃/₂', bindingEnergy: 347.0 },
  nmr: null,
};

// ── 过渡金属（部分重点）────────────────────────────────────
P4_SPECTRAL[24] = {  // Cr 铬
  emissionLines: [
    { wavelength: 357.87, intensity: '强', transition: '4p→4s (Cr I)', region: '可见/紫' },
    { wavelength: 359.35, intensity: '强', transition: '4p→4s (Cr I)', region: '可见/紫' },
    { wavelength: 425.44, intensity: '中', transition: '3d4p→3d4s (Cr I)', region: '可见/紫' },
  ],
  xray: { Ka: 5.412, Kb: 5.946, La: 0.572 },
  xps: { coreLevel: 'Cr 2p₃/₂', bindingEnergy: 574.0, note: 'Cr(0) ~574 eV, Cr(III) ~577 eV, Cr(VI) ~580 eV' },
  nmr: null,
};

P4_SPECTRAL[25] = {  // Mn 锰
  emissionLines: [
    { wavelength: 279.48, intensity: '强', transition: '4p→4s (Mn I)', region: '紫外' },
    { wavelength: 403.08, intensity: '强', transition: '5s→4p (Mn I)', region: '可见/紫' },
  ],
  xray: { Ka: 5.895, Kb: 6.490, La: 0.637 },
  xps: { coreLevel: 'Mn 2p₃/₂', bindingEnergy: 642.0 },
  nmr: null,
};

P4_SPECTRAL[26] = {  // Fe 铁
  emissionLines: [
    { wavelength: 248.33, intensity: '强', transition: '4p→4s (Fe I)', region: '紫外' },
    { wavelength: 352.12, intensity: '强', transition: '5s→4p (Fe I)', region: '可见/紫' },
    { wavelength: 438.35, intensity: '中', transition: '5s→4p (Fe I)', region: '可见/蓝' },
  ],
  xray: { Ka: 6.400, Kb: 7.058, La: 0.705 },
  xps: { coreLevel: 'Fe 2p₃/₂', bindingEnergy: 707.0, note: 'Fe(0) ~707 eV, Fe(II) ~710 eV, Fe(III) ~711 eV' },
  nmr: null,
};

P4_SPECTRAL[27] = {  // Co 钴
  emissionLines: [
    { wavelength: 240.72, intensity: '强', transition: '4p→4s (Co I)', region: '紫外' },
    { wavelength: 345.35, intensity: '强', transition: '5s→4p (Co I)', region: '可见/紫' },
  ],
  xray: { Ka: 6.930, Kb: 7.649, La: 0.776 },
  xps: { coreLevel: 'Co 2p₃/₂', bindingEnergy: 778.0 },
  nmr: {
    spin: 7,
    naturalAbundance: 100,
    magnetogyricRatio: 63.789,
    reference: 'K₃[Co(CN)₆] (δ=0)',
    note: '⁵⁹Co (I=7/2) 天然丰度 100%，四极矩大',
  },
};

P4_SPECTRAL[28] = {  // Ni 镍
  emissionLines: [
    { wavelength: 232.00, intensity: '强', transition: '4p→4s (Ni I)', region: '紫外' },
    { wavelength: 341.48, intensity: '强', transition: '5s→4p (Ni I)', region: '可见/紫' },
  ],
  xray: { Ka: 7.478, Kb: 8.265, La: 0.851 },
  xps: { coreLevel: 'Ni 2p₃/₂', bindingEnergy: 852.6, note: '金属 Ni ~852.6 eV, NiO ~854.5 eV' },
  nmr: null,
};

P4_SPECTRAL[29] = {  // Cu 铜
  emissionLines: [
    { wavelength: 324.75, intensity: '极强', transition: '4p→4s (Cu I)', region: '紫外' },
    { wavelength: 327.40, intensity: '极强', transition: '4p→4s (Cu I)', region: '紫外' },
    { wavelength: 510.55, intensity: '强', transition: '5s→4p (Cu I)', region: '可见/绿' },
  ],
  xray: { Ka: 8.047, Kb: 8.905, La: 0.930 },
  xps: { coreLevel: 'Cu 2p₃/₂', bindingEnergy: 932.7, note: 'Cu(0) ~932.7 eV, Cu(I) ~932.5 eV, Cu(II) ~934.5 eV' },
  nmr: {
    spin: 3,
    naturalAbundance: 69.17,
    magnetogyricRatio: 71.182,
    reference: 'CuCl₂ / D₂O',
    note: '⁶³Cu 和 ⁶⁵Cu 均有 NMR 活性',
  },
};

P4_SPECTRAL[30] = {  // Zn 锌
  emissionLines: [
    { wavelength: 213.86, intensity: '强', transition: '4p→4s (Zn I)', region: '紫外' },
    { wavelength: 307.59, intensity: '强', transition: '5s→4p (Zn I)', region: '紫外' },
  ],
  xray: { Ka: 8.638, Kb: 9.572, La: 1.022 },
  xps: { coreLevel: 'Zn 2p₃/₂', bindingEnergy: 1022.0, note: 'Zn 2p 峰形对称，无震激伴峰' },
  nmr: null,
};

// ── 其余元素默认数据 ──────────────────────────────────────

function defaultP4(category, symbol) {
  var d = {
    emissionLines: null,
    xray: null,
    xps: null,
    nmr: null,
  };

  // 根据类别生成合理的默认数据
  if (category === 'nonmetal' || category === 'halogen' || category === 'noble') {
    // 非金属/卤素/稀有气体：可能有紫外发射线
    d.emissionLines = null;  // 需要具体数据
  }

  if (category === 'metal' || category === 'transition' || category === 'alkali' || category === 'alkaline') {
    // 金属：有 X 射线荧光
    // 但这里留空，等待具体数据
  }

  return d;
}

// ══════════════════════════════════════════════════════
//  合并 P4 光谱数据到 ELEMENTS 数组
// ══════════════════════════════════════════════════════

function mergeP4Spectral(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;

    if (P4_SPECTRAL[z]) {
      var p4 = P4_SPECTRAL[z];
      el.emissionLines   = p4.emissionLines;
      el.xray           = p4.xray;
      el.xps            = p4.xps;
      el.nmr            = p4.nmr;
    } else {
      var d = defaultP4(el.category, el.symbol);
      el.emissionLines   = d.emissionLines;
      el.xray           = d.xray;
      el.xps            = d.xps;
      el.nmr            = d.nmr;
    }
  }
}

// 自动合并
if (typeof ELEMENTS !== 'undefined') {
  mergeP4Spectral(ELEMENTS);
}


// ════════════════════════════════════════════════════
//  P2扩展：补充光谱数据（90个元素）
// ════════════════════════════════════════════════════

// ── 第 3 周期（补充）────────────────────────────────────────────
P4_SPECTRAL[18] = {  // 氩
  emissionLines: [
    { wavelength: 811.53, intensity: '强', transition: '4p→4s', region: '近红外' },
    { wavelength: 750.39, intensity: '中', transition: '4p→4s', region: '近红外' },
    { wavelength: 425.94, intensity: '弱', transition: '5p→4s', region: '可见/紫' },
  ],
  xray: { Ka: 2.957, Kb: 2.964, La: null },
  xps: { bindingEnergy: '241.3 eV', orbital: '2p3/2', note: 'Ar 2p结合能~241 eV' },
  nmr: null
};


// ── 第 4 周期（补充）────────────────────────────────────────────
P4_SPECTRAL[21] = {  // 钪
  emissionLines: [
    { wavelength: 361.38, intensity: '强', transition: '4d→3p', region: '可见/紫' },
    { wavelength: 390.75, intensity: '中', transition: '4p→4s', region: '可见/紫' },
    { wavelength: 402.04, intensity: '弱', transition: '4p→4s', region: '可见/紫' },
  ],
  xray: { Ka: 4.09, Kb: 4.46, La: 0.395 },
  xps: { bindingEnergy: '398.0 eV', orbital: '2p3/2', note: 'Sc 2p结合能~398 eV' },
  nmr: { spin: 3.5, naturalAbundance: 100.0, magnetogyricRatio: 65.35, reference: 'Sc(NO3)3水溶液', note: '45Sc NMR灵敏度极高' }
};

P4_SPECTRAL[22] = {  // 钛
  emissionLines: [
    { wavelength: 365.35, intensity: '强', transition: '3d→4p', region: '紫外' },
    { wavelength: 334.19, intensity: '中', transition: '3d→4p', region: '紫外' },
    { wavelength: 498.17, intensity: '弱', transition: '4p→4s', region: '可见/绿' },
  ],
  xray: { Ka: 4.508, Kb: 4.931, La: 0.452 },
  xps: { bindingEnergy: '458.0 eV', orbital: '2p3/2', note: 'Ti 2p结合能~458 eV（TiO2中）' },
  nmr: { spin: 2.5, naturalAbundance: 7.44, magnetogyricRatio: -1.511, reference: 'TiCl4', note: '47Ti和49Ti均可用于NMR' }
};

P4_SPECTRAL[23] = {  // 钒
  emissionLines: [
    { wavelength: 437.92, intensity: '强', transition: '3d→4p', region: '可见/蓝' },
    { wavelength: 438.47, intensity: '中', transition: '3d→4p', region: '可见/蓝' },
    { wavelength: 318.4, intensity: '弱', transition: '4s→4p', region: '紫外' },
  ],
  xray: { Ka: 4.952, Kb: 5.427, La: 0.511 },
  xps: { bindingEnergy: '512.0 eV', orbital: '2p3/2', note: 'V 2p结合能~512 eV' },
  nmr: { spin: 3.5, naturalAbundance: 99.75, magnetogyricRatio: 70.32, reference: 'VOCl3', note: '51V NMR用于钒催化研究' }
};

P4_SPECTRAL[31] = {  // 镓
  emissionLines: [
    { wavelength: 417.21, intensity: '强', transition: '4p→4s', region: '可见/紫' },
    { wavelength: 403.3, intensity: '中', transition: '5s→4p', region: '可见/紫' },
    { wavelength: 287.42, intensity: '弱', transition: '4d→4p', region: '紫外' },
  ],
  xray: { Ka: 9.252, Kb: 10.264, La: 1.098 },
  xps: { bindingEnergy: '1118.0 eV', orbital: '2p3/2', note: 'Ga 2p结合能~1118 eV' },
  nmr: { spin: 1.5, naturalAbundance: 39.87, magnetogyricRatio: 81.0, reference: 'Ga(NO3)3', note: '69Ga和71Ga均可用于NMR' }
};

P4_SPECTRAL[32] = {  // 锗
  emissionLines: [
    { wavelength: 303.91, intensity: '强', transition: '4p→4s', region: '紫外' },
    { wavelength: 326.95, intensity: '中', transition: '5p→4s', region: '紫外' },
    { wavelength: 275.46, intensity: '弱', transition: '4d→4p', region: '紫外' },
  ],
  xray: { Ka: 9.886, Kb: 10.982, La: 1.188 },
  xps: { bindingEnergy: '29.4 eV', orbital: '3d5/2', note: 'Ge 3d结合能~29 eV' },
  nmr: { spin: 4.5, naturalAbundance: 7.73, magnetogyricRatio: -0.936, reference: 'GeMe4', note: '73Ge NMR灵敏度低' }
};

P4_SPECTRAL[33] = {  // 砷
  emissionLines: [
    { wavelength: 228.81, intensity: '强', transition: '4p→4s', region: '紫外' },
    { wavelength: 234.98, intensity: '中', transition: '5p→4s', region: '紫外' },
    { wavelength: 278.02, intensity: '弱', transition: '4d→4p', region: '紫外' },
  ],
  xray: { Ka: 10.544, Kb: 11.725, La: 1.282 },
  xps: { bindingEnergy: '41.7 eV', orbital: '3d5/2', note: 'As 3d结合能~42 eV' },
  nmr: { spin: 1.5, naturalAbundance: 100.0, magnetogyricRatio: 45.91, reference: 'NaAsF6', note: '75As NMR用于砷化学研究' }
};

P4_SPECTRAL[34] = {  // 硒
  emissionLines: [
    { wavelength: 196.03, intensity: '强', transition: '4p→4s', region: '紫外' },
    { wavelength: 203.99, intensity: '中', transition: '5p→4s', region: '紫外' },
    { wavelength: 206.28, intensity: '弱', transition: '4d→4p', region: '紫外' },
  ],
  xray: { Ka: 11.222, Kb: 12.496, La: 1.379 },
  xps: { bindingEnergy: '54.9 eV', orbital: '3d5/2', note: 'Se 3d结合能~55 eV' },
  nmr: { spin: 4.5, naturalAbundance: 7.63, magnetogyricRatio: 51.54, reference: 'Me2Se', note: '77Se NMR用于硒蛋白研究' }
};

P4_SPECTRAL[35] = {  // 溴
  emissionLines: [
    { wavelength: 478.55, intensity: '强', transition: '5p→4s', region: '可见/蓝' },
    { wavelength: 470.48, intensity: '中', transition: '5p→4s', region: '可见/蓝' },
    { wavelength: 425.12, intensity: '弱', transition: '6p→4s', region: '可见/紫' },
  ],
  xray: { Ka: 11.924, Kb: 13.292, La: 1.481 },
  xps: { bindingEnergy: '69.0 eV', orbital: '3d5/2', note: 'Br 3d结合能~69 eV' },
  nmr: { spin: 1.5, naturalAbundance: 50.69, magnetogyricRatio: 67.83, reference: 'NaBr/CFBr3', note: '79Br和81Br均可用于NMR' }
};

P4_SPECTRAL[36] = {  // 氪
  emissionLines: [
    { wavelength: 557.03, intensity: '强', transition: '5p→4s', region: '可见/绿' },
    { wavelength: 431.96, intensity: '中', transition: '5p→4s', region: '可见/紫' },
    { wavelength: 435.14, intensity: '弱', transition: '6p→4s', region: '可见/蓝' },
  ],
  xray: { Ka: 12.651, Kb: 14.104, La: 1.587 },
  xps: { bindingEnergy: '85.3 eV', orbital: '3d5/2', note: 'Kr 3d结合能~85 eV' },
  nmr: null
};


// ── 第 5 周期（补充）────────────────────────────────────────────
P4_SPECTRAL[37] = {  // 铷
  emissionLines: [
    { wavelength: 780.03, intensity: '强', transition: '6p→5s', region: '近红外' },
    { wavelength: 794.76, intensity: '中', transition: '6p→5s', region: '近红外' },
    { wavelength: 421.55, intensity: '弱', transition: '6p→5s', region: '可见/紫' },
  ],
  xray: { Ka: 13.395, Kb: 14.923, La: 1.694 },
  xps: { bindingEnergy: '110.3 eV', orbital: '3d5/2', note: 'Rb 3d结合能~110 eV' },
  nmr: { spin: 2.5, naturalAbundance: 27.83, magnetogyricRatio: 33.96, reference: 'RbCl', note: '87Rb NMR用于铷化学研究' }
};

P4_SPECTRAL[38] = {  // 锶
  emissionLines: [
    { wavelength: 460.73, intensity: '强', transition: '6p→5s', region: '可见/蓝' },
    { wavelength: 407.77, intensity: '中', transition: '6p→5s', region: '可见/紫' },
    { wavelength: 483.21, intensity: '弱', transition: '7p→5s', region: '可见/蓝' },
  ],
  xray: { Ka: 14.165, Kb: 15.835, La: 1.806 },
  xps: { bindingEnergy: '134.7 eV', orbital: '3d5/2', note: 'Sr 3d结合能~135 eV' },
  nmr: { spin: 1.5, naturalAbundance: 82.58, magnetogyricRatio: -5.77, reference: 'SrCl2', note: '87Sr NMR用于锶化学研究' }
};

P4_SPECTRAL[39] = {  // 钇
  emissionLines: [
    { wavelength: 371.03, intensity: '强', transition: '4d→4p', region: '可见/紫' },
    { wavelength: 360.07, intensity: '中', transition: '4d→4p', region: '紫外' },
    { wavelength: 417.41, intensity: '弱', transition: '5p→4s', region: '可见/紫' },
  ],
  xray: { Ka: 14.883, Kb: 16.738, La: 1.923 },
  xps: { bindingEnergy: '157.0 eV', orbital: '3d5/2', note: 'Y 3d结合能~157 eV' },
  nmr: { spin: 0.5, naturalAbundance: 100.0, magnetogyricRatio: -1.31, reference: 'Y(NO3)3', note: '89Y NMR用于钇化学研究' }
};

P4_SPECTRAL[40] = {  // 锆
  emissionLines: [
    { wavelength: 339.2, intensity: '强', transition: '4d→4p', region: '紫外' },
    { wavelength: 343.82, intensity: '中', transition: '4d→4p', region: '紫外' },
    { wavelength: 351.96, intensity: '弱', transition: '4d→4p', region: '紫外' },
  ],
  xray: { Ka: 15.775, Kb: 17.668, La: 2.043 },
  xps: { bindingEnergy: '181.0 eV', orbital: '3d5/2', note: 'Zr 3d结合能~181 eV' },
  nmr: { spin: 2.5, naturalAbundance: 11.22, magnetogyricRatio: -7.89, reference: 'Cp2ZrCl2', note: '91Zr NMR灵敏度低' }
};

P4_SPECTRAL[41] = {  // 铌
  emissionLines: [
    { wavelength: 405.89, intensity: '强', transition: '4d→4p', region: '可见/紫' },
    { wavelength: 410.09, intensity: '中', transition: '4d→4p', region: '可见/紫' },
    { wavelength: 357.19, intensity: '弱', transition: '5p→4p', region: '紫外' },
  ],
  xray: { Ka: 16.615, Kb: 18.623, La: 2.166 },
  xps: { bindingEnergy: '202.3 eV', orbital: '3d5/2', note: 'Nb 3d结合能~202 eV' },
  nmr: { spin: 4.5, naturalAbundance: 100.0, magnetogyricRatio: 65.7, reference: 'NbCl6-', note: '93Nb NMR灵敏度极高' }
};

P4_SPECTRAL[42] = {  // 钼
  emissionLines: [
    { wavelength: 390.3, intensity: '强', transition: '4d→4p', region: '可见/紫' },
    { wavelength: 379.83, intensity: '中', transition: '5p→4p', region: '紫外' },
    { wavelength: 386.41, intensity: '弱', transition: '5p→4p', region: '紫外' },
  ],
  xray: { Ka: 17.479, Kb: 19.608, La: 2.293 },
  xps: { bindingEnergy: '232.0 eV', orbital: '3d5/2', note: 'Mo 3d结合能~232 eV' },
  nmr: { spin: 2.5, naturalAbundance: 15.92, magnetogyricRatio: -8.46, reference: 'MoO4 2-', note: '95Mo和97Mo均可用于NMR' }
};

P4_SPECTRAL[43] = {  // 锝
  emissionLines: [
    { wavelength: 429.71, intensity: '强', transition: '4d→4p', region: '可见/紫' },
    { wavelength: 403.16, intensity: '中', transition: '5p→4p', region: '可见/紫' },
    { wavelength: 423.51, intensity: '弱', transition: '5p→4p', region: '可见/紫' },
  ],
  xray: { Ka: 18.367, Kb: 20.619, La: 2.424 },
  xps: { bindingEnergy: '255.0 eV', orbital: '3d5/2', note: 'Tc 3d结合能~255 eV(放射性)' },
  nmr: { spin: 4.5, naturalAbundance: 0, magnetogyricRatio: -6.62, reference: 'TcO4 -', note: '99Tc NMR(放射性核素)' }
};

P4_SPECTRAL[44] = {  // 钌
  emissionLines: [
    { wavelength: 372.8, intensity: '强', transition: '4d→4p', region: '紫外' },
    { wavelength: 349.89, intensity: '中', transition: '5p→4p', region: '紫外' },
    { wavelength: 343.67, intensity: '弱', transition: '5p→4p', region: '紫外' },
  ],
  xray: { Ka: 19.279, Kb: 21.657, La: 2.558 },
  xps: { bindingEnergy: '280.0 eV', orbital: '3d5/2', note: 'Ru 3d结合能~280 eV' },
  nmr: { spin: 2.5, naturalAbundance: 12.76, magnetogyricRatio: -8.54, reference: 'RuO4', note: '99Ru和101Ru可用于NMR' }
};

P4_SPECTRAL[45] = {  // 铑
  emissionLines: [
    { wavelength: 369.24, intensity: '强', transition: '4d→4p', region: '紫外' },
    { wavelength: 343.49, intensity: '中', transition: '5p→4p', region: '紫外' },
    { wavelength: 339.69, intensity: '弱', transition: '5p→4p', region: '紫外' },
  ],
  xray: { Ka: 20.216, Kb: 22.724, La: 2.697 },
  xps: { bindingEnergy: '307.0 eV', orbital: '3d5/2', note: 'Rh 3d结合能~307 eV' },
  nmr: { spin: 0.5, naturalAbundance: 100.0, magnetogyricRatio: -6.69, reference: 'RhCl6 3-', note: '103Rh NMR用于铑催化机理研究' }
};

P4_SPECTRAL[46] = {  // 钯
  emissionLines: [
    { wavelength: 360.95, intensity: '强', transition: '4d→4p', region: '紫外' },
    { wavelength: 346.08, intensity: '中', transition: '5p→4p', region: '紫外' },
    { wavelength: 351.69, intensity: '弱', transition: '5p→4p', region: '紫外' },
  ],
  xray: { Ka: 21.177, Kb: 23.819, La: 2.839 },
  xps: { bindingEnergy: '335.0 eV', orbital: '3d5/2', note: 'Pd 3d结合能~335 eV' },
  nmr: { spin: 2.5, naturalAbundance: 22.23, magnetogyricRatio: -7.0, reference: 'PdCl4 2-', note: '105Pd NMR灵敏度低' }
};

P4_SPECTRAL[47] = {  // 银
  emissionLines: [
    { wavelength: 338.29, intensity: '强', transition: '4d→4p', region: '紫外' },
    { wavelength: 328.07, intensity: '中', transition: '5p→4p', region: '紫外' },
    { wavelength: 520.91, intensity: '弱', transition: '6s→4p', region: '可见/绿' },
  ],
  xray: { Ka: 22.163, Kb: 24.942, La: 2.984 },
  xps: { bindingEnergy: '368.0 eV', orbital: '3d5/2', note: 'Ag 3d结合能~368 eV' },
  nmr: { spin: 0.5, naturalAbundance: 51.82, magnetogyricRatio: -7.43, reference: 'AgNO3', note: '107Ag和109Ag均可用于NMR' }
};

P4_SPECTRAL[48] = {  // 镉
  emissionLines: [
    { wavelength: 228.8, intensity: '强', transition: '5p→5s', region: '紫外' },
    { wavelength: 361.05, intensity: '中', transition: '6p→5s', region: '紫外' },
    { wavelength: 467.82, intensity: '弱', transition: '6p→5s', region: '可见/蓝' },
  ],
  xray: { Ka: 23.174, Kb: 26.094, La: 3.134 },
  xps: { bindingEnergy: '405.0 eV', orbital: '3d5/2', note: 'Cd 3d结合能~405 eV' },
  nmr: { spin: 0.5, naturalAbundance: 12.22, magnetogyricRatio: -33.52, reference: 'CdCl2', note: '113Cd NMR用于镉蛋白研究' }
};

P4_SPECTRAL[49] = {  // 铟
  emissionLines: [
    { wavelength: 451.13, intensity: '强', transition: '5p→5s', region: '可见/蓝' },
    { wavelength: 410.18, intensity: '中', transition: '6p→5s', region: '可见/紫' },
    { wavelength: 325.61, intensity: '弱', transition: '6p→5s', region: '紫外' },
  ],
  xray: { Ka: 24.21, Kb: 27.276, La: 3.287 },
  xps: { bindingEnergy: '444.0 eV', orbital: '3d5/2', note: 'In 3d结合能~444 eV' },
  nmr: { spin: 4.5, naturalAbundance: 95.71, magnetogyricRatio: 58.57, reference: 'In(NO3)3', note: '115In NMR灵敏度极高' }
};

P4_SPECTRAL[50] = {  // 锡
  emissionLines: [
    { wavelength: 317.5, intensity: '强', transition: '5p→5s', region: '紫外' },
    { wavelength: 333.06, intensity: '中', transition: '6p→5s', region: '紫外' },
    { wavelength: 380.1, intensity: '弱', transition: '6p→5s', region: '紫外' },
  ],
  xray: { Ka: 25.272, Kb: 28.486, La: 3.444 },
  xps: { bindingEnergy: '485.0 eV', orbital: '3d5/2', note: 'Sn 3d结合能~485 eV' },
  nmr: { spin: 0.5, naturalAbundance: 8.58, magnetogyricRatio: -10.02, reference: 'SnMe4', note: '119Sn NMR广泛用于有机锡化学' }
};

P4_SPECTRAL[51] = {  // 锑
  emissionLines: [
    { wavelength: 252.85, intensity: '强', transition: '5p→5s', region: '紫外' },
    { wavelength: 259.81, intensity: '中', transition: '6p→5s', region: '紫外' },
    { wavelength: 277.99, intensity: '弱', transition: '6p→5s', region: '紫外' },
  ],
  xray: { Ka: 26.359, Kb: 29.725, La: 3.605 },
  xps: { bindingEnergy: '528.0 eV', orbital: '3d5/2', note: 'Sb 3d结合能~528 eV' },
  nmr: { spin: 2.5, naturalAbundance: 57.21, magnetogyricRatio: 47.22, reference: 'KSbF6', note: '121Sb和123Sb均可用于NMR' }
};

P4_SPECTRAL[52] = {  // 碲
  emissionLines: [
    { wavelength: 238.58, intensity: '强', transition: '5p→5s', region: '紫外' },
    { wavelength: 253.07, intensity: '中', transition: '6p→5s', region: '紫外' },
    { wavelength: 276.97, intensity: '弱', transition: '6p→5s', region: '紫外' },
  ],
  xray: { Ka: 27.472, Kb: 30.996, La: 3.769 },
  xps: { bindingEnergy: '573.0 eV', orbital: '3d5/2', note: 'Te 3d结合能~573 eV' },
  nmr: { spin: 0.5, naturalAbundance: 6.99, magnetogyricRatio: -7.91, reference: 'TeMe2', note: '125Te NMR用于碲化学研究' }
};

P4_SPECTRAL[53] = {  // 碘
  emissionLines: [
    { wavelength: 206.24, intensity: '强', transition: '5p→5s', region: '紫外' },
    { wavelength: 178.28, intensity: '中', transition: '6p→5s', region: '紫外' },
    { wavelength: 183.04, intensity: '弱', transition: '6p→5s', region: '紫外' },
  ],
  xray: { Ka: 28.612, Kb: 32.295, La: 3.938 },
  xps: { bindingEnergy: '619.0 eV', orbital: '3d5/2', note: 'I 3d结合能~619 eV' },
  nmr: { spin: 2.5, naturalAbundance: 100.0, magnetogyricRatio: 53.52, reference: 'NaI/DMSO', note: '127I NMR灵敏度极高' }
};

P4_SPECTRAL[54] = {  // 氙
  emissionLines: [
    { wavelength: 823.16, intensity: '强', transition: '6p→5s', region: '近红外' },
    { wavelength: 828.01, intensity: '中', transition: '6p→5s', region: '近红外' },
    { wavelength: 881.94, intensity: '弱', transition: '7p→5s', region: '近红外' },
  ],
  xray: { Ka: 29.802, Kb: 33.624, La: 4.111 },
  xps: { bindingEnergy: '678.0 eV', orbital: '3d5/2', note: 'Xe 3d结合能~678 eV' },
  nmr: { spin: 0.5, naturalAbundance: 26.44, magnetogyricRatio: -19.42, reference: 'Xe气体', note: '129Xe NMR用于多孔材料表征' }
};


// ── 第 6 周期（补充）────────────────────────────────────────────
P4_SPECTRAL[55] = {  // 铯
  emissionLines: [
    { wavelength: 852.11, intensity: '强', transition: '6p→6s', region: '近红外' },
    { wavelength: 894.35, intensity: '中', transition: '6p→6s', region: '近红外' },
    { wavelength: 455.53, intensity: '弱', transition: '7p→6s', region: '可见/蓝' },
  ],
  xray: { Ka: 30.97, Kb: 34.987, La: 4.287 },
  xps: { bindingEnergy: '724.0 eV', orbital: '3d5/2', note: 'Cs 3d结合能~724 eV' },
  nmr: { spin: 3.5, naturalAbundance: 100.0, magnetogyricRatio: 35.09, reference: 'CsCl', note: '133Cs NMR用于铯化学研究' }
};

P4_SPECTRAL[56] = {  // 钡
  emissionLines: [
    { wavelength: 553.55, intensity: '强', transition: '6p→6s', region: '可见/绿' },
    { wavelength: 455.4, intensity: '中', transition: '7p→6s', region: '可见/蓝' },
    { wavelength: 493.41, intensity: '弱', transition: '7p→6s', region: '可见/蓝' },
  ],
  xray: { Ka: 32.191, Kb: 36.376, La: 4.467 },
  xps: { bindingEnergy: '780.0 eV', orbital: '3d5/2', note: 'Ba 3d结合能~780 eV' },
  nmr: { spin: 1.5, naturalAbundance: 11.23, magnetogyricRatio: 17.53, reference: 'BaCl2', note: '137Ba和135Ba可用于NMR' }
};

P4_SPECTRAL[57] = {  // 镧
  emissionLines: [
    { wavelength: 624.99, intensity: '强', transition: '5d→4f', region: '可见/橙' },
    { wavelength: 593.07, intensity: '中', transition: '5d→4f', region: '可见/黄' },
    { wavelength: 545.52, intensity: '弱', transition: '6p→4f', region: '可见/绿' },
  ],
  xray: { Ka: 33.441, Kb: 37.801, La: 4.651 },
  xps: { bindingEnergy: '835.0 eV', orbital: '3d5/2', note: 'La 3d结合能~835 eV' },
  nmr: { spin: 3.5, naturalAbundance: 99.91, magnetogyricRatio: 38.04, reference: 'LaCl3', note: '139La NMR用于镧系化学研究' }
};

P4_SPECTRAL[58] = {  // 铈
  emissionLines: [
    { wavelength: 569.92, intensity: '强', transition: '5d→4f', region: '可见/黄绿' },
    { wavelength: 535.22, intensity: '中', transition: '5d→4f', region: '可见/绿' },
    { wavelength: 418.66, intensity: '弱', transition: '6p→4f', region: '可见/紫' },
  ],
  xray: { Ka: 34.72, Kb: 39.257, La: 4.84 },
  xps: { bindingEnergy: '884.0 eV', orbital: '3d5/2', note: 'Ce 3d结合能~884 eV' },
  nmr: null
};

P4_SPECTRAL[59] = {  // 镨
  emissionLines: [
    { wavelength: 417.94, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 495.15, intensity: '中', transition: '5d→4f', region: '可见/绿' },
    { wavelength: 440.88, intensity: '弱', transition: '6p→4f', region: '可见/蓝' },
  ],
  xray: { Ka: 36.027, Kb: 40.748, La: 5.033 },
  xps: { bindingEnergy: '933.0 eV', orbital: '3d5/2', note: 'Pr 3d结合能~933 eV' },
  nmr: { spin: 2.5, naturalAbundance: 100.0, magnetogyricRatio: 81.15, reference: 'Pr(NO3)3', note: '141Pr NMR(顺磁位移大)' }
};

P4_SPECTRAL[60] = {  // 钕
  emissionLines: [
    { wavelength: 463.42, intensity: '强', transition: '5d→4f', region: '可见/蓝' },
    { wavelength: 492.45, intensity: '中', transition: '5d→4f', region: '可见/绿' },
    { wavelength: 588.81, intensity: '弱', transition: '6p→4f', region: '可见/黄' },
  ],
  xray: { Ka: 37.361, Kb: 42.272, La: 5.23 },
  xps: { bindingEnergy: '980.0 eV', orbital: '3d5/2', note: 'Nd 3d结合能~980 eV' },
  nmr: { spin: 3.5, naturalAbundance: 12.2, magnetogyricRatio: -13.04, reference: 'Nd(NO3)3', note: '145Nd NMR灵敏度低' }
};

P4_SPECTRAL[61] = {  // 钷
  emissionLines: [
    { wavelength: 470.0, intensity: '强', transition: '5d→4f', region: '可见/蓝' },
    { wavelength: 495.0, intensity: '中', transition: '5d→4f', region: '可见/绿' },
    { wavelength: 550.0, intensity: '弱', transition: '6p→4f', region: '可见/绿' },
  ],
  xray: { Ka: 38.725, Kb: 43.831, La: 5.432 },
  xps: { bindingEnergy: '1025.0 eV', orbital: '3d5/2', note: 'Pm 3d结合能~1025 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[62] = {  // 钐
  emissionLines: [
    { wavelength: 442.44, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 473.0, intensity: '中', transition: '5d→4f', region: '可见/蓝' },
    { wavelength: 484.35, intensity: '弱', transition: '6p→4f', region: '可见/蓝' },
  ],
  xray: { Ka: 40.118, Kb: 45.413, La: 5.637 },
  xps: { bindingEnergy: '1072.0 eV', orbital: '3d5/2', note: 'Sm 3d结合能~1072 eV' },
  nmr: { spin: 0.5, naturalAbundance: 13.19, magnetogyricRatio: -8.24, reference: 'SmCl3', note: '147Sm和149Sm可用于NMR' }
};

P4_SPECTRAL[63] = {  // 铕
  emissionLines: [
    { wavelength: 412.97, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 466.19, intensity: '中', transition: '5d→4f', region: '可见/蓝' },
    { wavelength: 459.4, intensity: '弱', transition: '6p→4f', region: '可见/蓝' },
  ],
  xray: { Ka: 41.542, Kb: 47.028, La: 5.846 },
  xps: { bindingEnergy: '1125.0 eV', orbital: '3d5/2', note: 'Eu 3d结合能~1125 eV' },
  nmr: { spin: 2.5, naturalAbundance: 52.19, magnetogyricRatio: -28.87, reference: 'EuCl3', note: '151Eu和153Eu均可用于NMR' }
};

P4_SPECTRAL[64] = {  // 钆
  emissionLines: [
    { wavelength: 376.84, intensity: '强', transition: '5d→4f', region: '紫外' },
    { wavelength: 440.19, intensity: '中', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 358.5, intensity: '弱', transition: '6p→4f', region: '紫外' },
  ],
  xray: { Ka: 42.996, Kb: 48.696, La: 6.057 },
  xps: { bindingEnergy: '1186.0 eV', orbital: '3d5/2', note: 'Gd 3d结合能~1186 eV' },
  nmr: null
};

P4_SPECTRAL[65] = {  // 铽
  emissionLines: [
    { wavelength: 431.89, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 387.42, intensity: '中', transition: '5d→4f', region: '紫外' },
    { wavelength: 432.65, intensity: '弱', transition: '6p→4f', region: '可见/紫' },
  ],
  xray: { Ka: 44.482, Kb: 50.394, La: 6.273 },
  xps: { bindingEnergy: '1242.0 eV', orbital: '3d5/2', note: 'Tb 3d结合能~1242 eV' },
  nmr: null
};

P4_SPECTRAL[66] = {  // 镝
  emissionLines: [
    { wavelength: 404.6, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 421.17, intensity: '中', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 389.85, intensity: '弱', transition: '6p→4f', region: '紫外' },
  ],
  xray: { Ka: 45.998, Kb: 52.118, La: 6.495 },
  xps: { bindingEnergy: '1295.0 eV', orbital: '3d5/2', note: 'Dy 3d结合能~1295 eV' },
  nmr: { spin: 2.5, naturalAbundance: 24.9, magnetogyricRatio: 11.72, reference: 'DyCl3', note: '161Dy和163Dy可用于NMR' }
};

P4_SPECTRAL[67] = {  // 钬
  emissionLines: [
    { wavelength: 416.3, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 389.22, intensity: '中', transition: '5d→4f', region: '紫外' },
    { wavelength: 425.0, intensity: '弱', transition: '6p→4f', region: '可见/紫' },
  ],
  xray: { Ka: 47.547, Kb: 53.869, La: 6.72 },
  xps: { bindingEnergy: '1351.0 eV', orbital: '3d5/2', note: 'Ho 3d结合能~1351 eV' },
  nmr: { spin: 3.5, naturalAbundance: 100.0, magnetogyricRatio: 54.56, reference: 'HoCl3', note: '165Ho NMR(顺磁位移大)' }
};

P4_SPECTRAL[68] = {  // 铒
  emissionLines: [
    { wavelength: 400.8, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 415.0, intensity: '中', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 337.27, intensity: '弱', transition: '6p→4f', region: '紫外' },
  ],
  xray: { Ka: 49.128, Kb: 55.674, La: 6.949 },
  xps: { bindingEnergy: '1409.0 eV', orbital: '3d5/2', note: 'Er 3d结合能~1409 eV' },
  nmr: { spin: 3.5, naturalAbundance: 14.95, magnetogyricRatio: -3.87, reference: 'ErCl3', note: '167Er NMR灵敏度低' }
};

P4_SPECTRAL[69] = {  // 铥
  emissionLines: [
    { wavelength: 384.81, intensity: '强', transition: '5d→4f', region: '紫外' },
    { wavelength: 379.58, intensity: '中', transition: '5d→4f', region: '紫外' },
    { wavelength: 346.22, intensity: '弱', transition: '6p→4f', region: '紫外' },
  ],
  xray: { Ka: 50.742, Kb: 57.577, La: 7.181 },
  xps: { bindingEnergy: '1465.0 eV', orbital: '3d5/2', note: 'Tm 3d结合能~1465 eV' },
  nmr: { spin: 0.5, naturalAbundance: 100.0, magnetogyricRatio: -15.8, reference: 'TmCl3', note: '169Tm NMR(顺磁位移极大)' }
};

P4_SPECTRAL[70] = {  // 镱
  emissionLines: [
    { wavelength: 398.8, intensity: '强', transition: '5d→4f', region: '可见/紫' },
    { wavelength: 369.42, intensity: '中', transition: '5d→4f', region: '紫外' },
    { wavelength: 346.44, intensity: '弱', transition: '6p→4f', region: '紫外' },
  ],
  xray: { Ka: 52.389, Kb: 59.337, La: 7.416 },
  xps: { bindingEnergy: '1525.0 eV', orbital: '3d5/2', note: 'Yb 3d结合能~1525 eV' },
  nmr: { spin: 0.5, naturalAbundance: 14.28, magnetogyricRatio: -13.98, reference: 'YbCl3', note: '171Yb和173Yb可用于NMR' }
};

P4_SPECTRAL[71] = {  // 镥
  emissionLines: [
    { wavelength: 451.86, intensity: '强', transition: '5d→4f', region: '可见/蓝' },
    { wavelength: 337.65, intensity: '中', transition: '6p→4f', region: '紫外' },
    { wavelength: 437.22, intensity: '弱', transition: '5d→4f', region: '可见/紫' },
  ],
  xray: { Ka: 54.07, Kb: 61.286, La: 7.656 },
  xps: { bindingEnergy: '1587.0 eV', orbital: '3d5/2', note: 'Lu 3d结合能~1587 eV' },
  nmr: { spin: 3.5, naturalAbundance: 97.41, magnetogyricRatio: 18.28, reference: 'LuCl3', note: '175Lu NMR用于镥化学研究' }
};

P4_SPECTRAL[72] = {  // 铪
  emissionLines: [
    { wavelength: 339.98, intensity: '强', transition: '5d→4p', region: '紫外' },
    { wavelength: 313.43, intensity: '中', transition: '5d→4p', region: '紫外' },
    { wavelength: 294.16, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 55.757, Kb: 63.244, La: 7.899 },
  xps: { bindingEnergy: '14.3 eV', orbital: '4f7/2', note: 'Hf 4f结合能~14 eV' },
  nmr: { spin: 1.5, naturalAbundance: 18.6, magnetogyricRatio: 9.29, reference: 'HfCl4', note: '177Hf和179Hf可用于NMR' }
};

P4_SPECTRAL[73] = {  // 钽
  emissionLines: [
    { wavelength: 331.12, intensity: '强', transition: '5d→4p', region: '紫外' },
    { wavelength: 340.68, intensity: '中', transition: '5d→4p', region: '紫外' },
    { wavelength: 321.0, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 57.533, Kb: 65.222, La: 8.146 },
  xps: { bindingEnergy: '21.7 eV', orbital: '4f7/2', note: 'Ta 4f结合能~22 eV' },
  nmr: { spin: 3.5, naturalAbundance: 99.99, magnetogyricRatio: 32.03, reference: 'K2TaF6', note: '181Ta NMR灵敏度极高' }
};

P4_SPECTRAL[74] = {  // 钨
  emissionLines: [
    { wavelength: 429.46, intensity: '强', transition: '5d→4p', region: '可见/紫' },
    { wavelength: 400.88, intensity: '中', transition: '6p→4p', region: '可见/紫' },
    { wavelength: 255.14, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 59.318, Kb: 67.244, La: 8.398 },
  xps: { bindingEnergy: '31.4 eV', orbital: '4f7/2', note: 'W 4f结合能~31 eV' },
  nmr: { spin: 0.5, naturalAbundance: 14.31, magnetogyricRatio: 11.27, reference: 'WF6', note: '183W NMR用于钨化学研究' }
};

P4_SPECTRAL[75] = {  // 铼
  emissionLines: [
    { wavelength: 346.05, intensity: '强', transition: '5d→4p', region: '紫外' },
    { wavelength: 342.47, intensity: '中', transition: '5d→4p', region: '紫外' },
    { wavelength: 227.53, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 61.14, Kb: 69.31, La: 8.652 },
  xps: { bindingEnergy: '40.3 eV', orbital: '4f7/2', note: 'Re 4f结合能~40 eV' },
  nmr: { spin: 2.5, naturalAbundance: 37.07, magnetogyricRatio: 60.58, reference: 'KReO4', note: '185Re和187Re均可用于NMR' }
};

P4_SPECTRAL[76] = {  // 锇
  emissionLines: [
    { wavelength: 330.16, intensity: '强', transition: '5d→4p', region: '紫外' },
    { wavelength: 442.05, intensity: '中', transition: '6p→4p', region: '可见/紫' },
    { wavelength: 297.0, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 62.951, Kb: 71.413, La: 8.911 },
  xps: { bindingEnergy: '50.5 eV', orbital: '4f7/2', note: 'Os 4f结合能~50 eV' },
  nmr: { spin: 0.5, naturalAbundance: 16.15, magnetogyricRatio: 6.2, reference: 'OsO4', note: '189Os NMR灵敏度极低' }
};

P4_SPECTRAL[77] = {  // 铱
  emissionLines: [
    { wavelength: 380.01, intensity: '强', transition: '5d→4p', region: '紫外' },
    { wavelength: 351.36, intensity: '中', transition: '6p→4p', region: '紫外' },
    { wavelength: 322.08, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 64.896, Kb: 73.549, La: 9.175 },
  xps: { bindingEnergy: '60.8 eV', orbital: '4f7/2', note: 'Ir 4f结合能~61 eV' },
  nmr: { spin: 1.5, naturalAbundance: 62.7, magnetogyricRatio: 31.13, reference: 'IrCl6 2-', note: '191Ir和193Ir均可用于NMR' }
};

P4_SPECTRAL[78] = {  // 铂
  emissionLines: [
    { wavelength: 306.47, intensity: '强', transition: '5d→4p', region: '紫外' },
    { wavelength: 265.95, intensity: '中', transition: '6p→4p', region: '紫外' },
    { wavelength: 270.24, intensity: '弱', transition: '6p→4p', region: '紫外' },
  ],
  xray: { Ka: 66.832, Kb: 75.748, La: 9.442 },
  xps: { bindingEnergy: '71.2 eV', orbital: '4f7/2', note: 'Pt 4f结合能~71 eV' },
  nmr: { spin: 0.5, naturalAbundance: 33.83, magnetogyricRatio: 57.99, reference: 'PtCl6 2-', note: '195Pt NMR用于铂催化和药物研究' }
};

P4_SPECTRAL[79] = {  // 金
  emissionLines: [
    { wavelength: 267.6, intensity: '强', transition: '6p→6s', region: '紫外' },
    { wavelength: 242.8, intensity: '中', transition: '6p→6s', region: '紫外' },
    { wavelength: 312.28, intensity: '弱', transition: '7p→6s', region: '紫外' },
  ],
  xray: { Ka: 68.804, Kb: 77.982, La: 9.713 },
  xps: { bindingEnergy: '84.0 eV', orbital: '4f7/2', note: 'Au 4f结合能~84 eV' },
  nmr: { spin: 1.5, naturalAbundance: 100.0, magnetogyricRatio: 46.35, reference: 'Au(CN)2 -', note: '197Au NMR(灵敏度低)' }
};

P4_SPECTRAL[80] = {  // 汞
  emissionLines: [
    { wavelength: 253.65, intensity: '强', transition: '6p→6s', region: '紫外' },
    { wavelength: 365.02, intensity: '中', transition: '7p→6s', region: '紫外' },
    { wavelength: 404.66, intensity: '弱', transition: '7p→6s', region: '可见/紫' },
  ],
  xray: { Ka: 70.822, Kb: 80.263, La: 9.989 },
  xps: { bindingEnergy: '100.0 eV', orbital: '4f7/2', note: 'Hg 4f结合能~100 eV' },
  nmr: { spin: 0.5, naturalAbundance: 16.84, magnetogyricRatio: 17.91, reference: 'HgCl2/Me2Hg', note: '199Hg NMR用于汞化学研究' }
};

P4_SPECTRAL[81] = {  // 铊
  emissionLines: [
    { wavelength: 535.05, intensity: '强', transition: '7p→6s', region: '可见/绿' },
    { wavelength: 377.57, intensity: '中', transition: '7p→6s', region: '紫外' },
    { wavelength: 351.92, intensity: '弱', transition: '8p→6s', region: '紫外' },
  ],
  xray: { Ka: 72.872, Kb: 82.576, La: 10.268 },
  xps: { bindingEnergy: '117.0 eV', orbital: '4f7/2', note: 'Tl 4f结合能~117 eV' },
  nmr: { spin: 0.5, naturalAbundance: 70.48, magnetogyricRatio: 15.4, reference: 'TlNO3', note: '205Tl NMR灵敏度极高' }
};

P4_SPECTRAL[82] = {  // 铅
  emissionLines: [
    { wavelength: 405.78, intensity: '强', transition: '7p→6s', region: '可见/紫' },
    { wavelength: 368.35, intensity: '中', transition: '7p→6s', region: '紫外' },
    { wavelength: 363.96, intensity: '弱', transition: '8p→6s', region: '紫外' },
  ],
  xray: { Ka: 74.969, Kb: 84.922, La: 10.551 },
  xps: { bindingEnergy: '137.0 eV', orbital: '4f7/2', note: 'Pb 4f结合能~137 eV' },
  nmr: { spin: 0.5, naturalAbundance: 22.6, magnetogyricRatio: 5.58, reference: 'Pb(NO3)2/Me4Pb', note: '207Pb NMR用于铅化学研究' }
};

P4_SPECTRAL[83] = {  // 铋
  emissionLines: [
    { wavelength: 472.22, intensity: '强', transition: '7p→6s', region: '可见/蓝' },
    { wavelength: 306.77, intensity: '中', transition: '7p→6s', region: '紫外' },
    { wavelength: 289.8, intensity: '弱', transition: '8p→6s', region: '紫外' },
  ],
  xray: { Ka: 77.108, Kb: 87.343, La: 10.838 },
  xps: { bindingEnergy: '159.0 eV', orbital: '4f7/2', note: 'Bi 4f结合能~159 eV' },
  nmr: { spin: 4.5, naturalAbundance: 100.0, magnetogyricRatio: 55.6, reference: 'Bi(NO3)3', note: '209Bi NMR灵敏度极高' }
};

P4_SPECTRAL[84] = {  // 钋
  emissionLines: [
    { wavelength: 418.0, intensity: '强', transition: '7p→6s', region: '可见/紫' },
    { wavelength: 385.0, intensity: '中', transition: '7p→6s', region: '紫外' },
    { wavelength: 300.0, intensity: '弱', transition: '8p→6s', region: '紫外' },
  ],
  xray: { Ka: 79.295, Kb: 89.812, La: 11.131 },
  xps: { bindingEnergy: '185.0 eV', orbital: '4f7/2', note: 'Po 4f结合能~185 eV(放射性)' },
  nmr: { spin: 0.5, naturalAbundance: 0, magnetogyricRatio: 58.34, reference: 'Po化合物', note: '209Po NMR(放射性核素)' }
};

P4_SPECTRAL[85] = {  // 砹
  emissionLines: [
    { wavelength: 380.0, intensity: '强', transition: '7p→6s', region: '紫外' },
    { wavelength: 350.0, intensity: '中', transition: '7p→6s', region: '紫外' },
    { wavelength: 270.0, intensity: '弱', transition: '8p→6s', region: '紫外' },
  ],
  xray: { Ka: 81.531, Kb: 92.327, La: 11.427 },
  xps: { bindingEnergy: '210.0 eV', orbital: '4f7/2', note: 'At 4f结合能~210 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[86] = {  // 氡
  emissionLines: [
    { wavelength: 705.0, intensity: '强', transition: '7p→6s', region: '可见/红' },
    { wavelength: 745.0, intensity: '中', transition: '7p→6s', region: '近红外' },
    { wavelength: 560.0, intensity: '弱', transition: '8p→6s', region: '可见/绿' },
  ],
  xray: { Ka: 83.813, Kb: 94.876, La: 11.727 },
  xps: { bindingEnergy: '238.0 eV', orbital: '4f7/2', note: 'Rn 4f结合能~238 eV(放射性)' },
  nmr: null
};


// ── 第 7 周期（补充）────────────────────────────────────────────
P4_SPECTRAL[87] = {  // 钫
  emissionLines: [
    { wavelength: 718.0, intensity: '强', transition: '7p→7s', region: '可见/红' },
    { wavelength: 828.0, intensity: '中', transition: '7p→7s', region: '近红外' },
    { wavelength: 500.0, intensity: '弱', transition: '8p→7s', region: '可见/绿' },
  ],
  xray: { Ka: 86.136, Kb: 97.475, La: 12.031 },
  xps: { bindingEnergy: '265.0 eV', orbital: '4f7/2', note: 'Fr 4f结合能~265 eV(放射性)' },
  nmr: { spin: 1.5, naturalAbundance: 0, magnetogyricRatio: 58.34, reference: 'Fr化合物', note: '223Fr NMR(放射性核素)' }
};

P4_SPECTRAL[88] = {  // 镭
  emissionLines: [
    { wavelength: 482.0, intensity: '强', transition: '7p→7s', region: '可见/蓝' },
    { wavelength: 468.0, intensity: '中', transition: '7p→7s', region: '可见/紫' },
    { wavelength: 381.0, intensity: '弱', transition: '8p→7s', region: '紫外' },
  ],
  xray: { Ka: 88.505, Kb: 100.13, La: 12.338 },
  xps: { bindingEnergy: '292.0 eV', orbital: '4f7/2', note: 'Ra 4f结合能~292 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[89] = {  // 锕
  emissionLines: [
    { wavelength: 465.0, intensity: '强', transition: '6d→5f', region: '可见/紫' },
    { wavelength: 438.0, intensity: '中', transition: '6d→5f', region: '可见/紫' },
    { wavelength: 398.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 90.911, Kb: 102.838, La: 12.652 },
  xps: { bindingEnergy: '320.0 eV', orbital: '4f7/2', note: 'Ac 4f结合能~320 eV(放射性)' },
  nmr: { spin: 1.5, naturalAbundance: 0, magnetogyricRatio: 56.14, reference: 'Ac化合物', note: '227Ac NMR(放射性核素)' }
};

P4_SPECTRAL[90] = {  // 钍
  emissionLines: [
    { wavelength: 401.0, intensity: '强', transition: '6d→5f', region: '可见/紫' },
    { wavelength: 376.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 360.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 93.35, Kb: 105.592, La: 12.969 },
  xps: { bindingEnergy: '342.0 eV', orbital: '4f7/2', note: 'Th 4f结合能~342 eV' },
  nmr: null
};

P4_SPECTRAL[91] = {  // 镤
  emissionLines: [
    { wavelength: 395.0, intensity: '强', transition: '6d→5f', region: '可见/紫' },
    { wavelength: 360.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 340.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 95.868, Kb: 108.421, La: 13.291 },
  xps: { bindingEnergy: '365.0 eV', orbital: '4f7/2', note: 'Pa 4f结合能~365 eV(放射性)' },
  nmr: { spin: 1.5, naturalAbundance: 0, magnetogyricRatio: 71.16, reference: 'Pa化合物', note: '231Pa NMR(放射性核素)' }
};

P4_SPECTRAL[92] = {  // 铀
  emissionLines: [
    { wavelength: 386.0, intensity: '强', transition: '6d→5f', region: '可见/紫' },
    { wavelength: 358.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 367.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 98.439, Kb: 111.3, La: 13.615 },
  xps: { bindingEnergy: '377.0 eV', orbital: '4f7/2', note: 'U 4f结合能~377 eV' },
  nmr: null
};

P4_SPECTRAL[93] = {  // 镎
  emissionLines: [
    { wavelength: 382.0, intensity: '强', transition: '6d→5f', region: '可见/紫' },
    { wavelength: 360.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 350.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 101.005, Kb: 114.181, La: 13.945 },
  xps: { bindingEnergy: '390.0 eV', orbital: '4f7/2', note: 'Np 4f结合能~390 eV(放射性)' },
  nmr: { spin: 2.5, naturalAbundance: 0, magnetogyricRatio: 31.04, reference: 'Np化合物', note: '237Np NMR(放射性核素)' }
};

P4_SPECTRAL[94] = {  // 钚
  emissionLines: [
    { wavelength: 378.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 360.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 345.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 103.653, Kb: 117.146, La: 14.279 },
  xps: { bindingEnergy: '405.0 eV', orbital: '4f7/2', note: 'Pu 4f结合能~405 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[95] = {  // 镅
  emissionLines: [
    { wavelength: 375.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 358.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 340.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 106.387, Kb: 120.186, La: 14.618 },
  xps: { bindingEnergy: '420.0 eV', orbital: '4f7/2', note: 'Am 4f结合能~420 eV(放射性)' },
  nmr: { spin: 2.5, naturalAbundance: 0, magnetogyricRatio: 22.38, reference: 'Am化合物', note: '243Am NMR(放射性核素)' }
};

P4_SPECTRAL[96] = {  // 锔
  emissionLines: [
    { wavelength: 372.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 355.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 335.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 109.207, Kb: 123.301, La: 14.962 },
  xps: { bindingEnergy: '435.0 eV', orbital: '4f7/2', note: 'Cm 4f结合能~435 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[97] = {  // 锫
  emissionLines: [
    { wavelength: 370.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 352.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 333.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 112.118, Kb: 126.492, La: 15.311 },
  xps: { bindingEnergy: '450.0 eV', orbital: '4f7/2', note: 'Bk 4f结合能~450 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[98] = {  // 锎
  emissionLines: [
    { wavelength: 368.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 350.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 330.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 115.116, Kb: 129.76, La: 15.665 },
  xps: { bindingEnergy: '465.0 eV', orbital: '4f7/2', note: 'Cf 4f结合能~465 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[99] = {  // 锿
  emissionLines: [
    { wavelength: 366.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 348.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 328.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 118.107, Kb: 134.089, La: 16.024 },
  xps: { bindingEnergy: '480.0 eV', orbital: '4f7/2', note: 'Es 4f结合能~480 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[100] = {  // 镄
  emissionLines: [
    { wavelength: 364.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 346.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 326.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 121.09, Kb: 138.484, La: 16.386 },
  xps: { bindingEnergy: '495.0 eV', orbital: '4f7/2', note: 'Fm 4f结合能~495 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[101] = {  // 钔
  emissionLines: [
    { wavelength: 362.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 344.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 324.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 124.12, Kb: 142.925, La: 16.753 },
  xps: { bindingEnergy: '510.0 eV', orbital: '4f7/2', note: 'Md 4f结合能~510 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[102] = {  // 锘
  emissionLines: [
    { wavelength: 360.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 342.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 322.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 127.17, Kb: 147.408, La: 17.124 },
  xps: { bindingEnergy: '525.0 eV', orbital: '4f7/2', note: 'No 4f结合能~525 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[103] = {  // 铹
  emissionLines: [
    { wavelength: 358.0, intensity: '强', transition: '6d→5f', region: '紫外' },
    { wavelength: 340.0, intensity: '中', transition: '6d→5f', region: '紫外' },
    { wavelength: 320.0, intensity: '弱', transition: '7p→5f', region: '紫外' },
  ],
  xray: { Ka: 130.24, Kb: 151.936, La: 17.5 },
  xps: { bindingEnergy: '540.0 eV', orbital: '4f7/2', note: 'Lr 4f结合能~540 eV(放射性)' },
  nmr: null
};

P4_SPECTRAL[104] = {  // Rf
  emissionLines: [
    { wavelength: 350.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 134.5, Kb: 156.0, La: 18.2 },
  xps: { bindingEnergy: '555 eV', orbital: '4f7/2', note: 'Rf 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[105] = {  // Db
  emissionLines: [
    { wavelength: 348.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 138.0, Kb: 160.1, La: 18.6 },
  xps: { bindingEnergy: '570 eV', orbital: '4f7/2', note: 'Db 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[106] = {  // Sg
  emissionLines: [
    { wavelength: 346.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 141.5, Kb: 164.1, La: 19.1 },
  xps: { bindingEnergy: '585 eV', orbital: '4f7/2', note: 'Sg 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[107] = {  // Bh
  emissionLines: [
    { wavelength: 344.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 145.0, Kb: 168.2, La: 19.6 },
  xps: { bindingEnergy: '600 eV', orbital: '4f7/2', note: 'Bh 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[108] = {  // Hs
  emissionLines: [
    { wavelength: 342.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 148.5, Kb: 172.3, La: 20.0 },
  xps: { bindingEnergy: '615 eV', orbital: '4f7/2', note: 'Hs 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[109] = {  // Mt
  emissionLines: [
    { wavelength: 340.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 152.0, Kb: 176.3, La: 20.5 },
  xps: { bindingEnergy: '630 eV', orbital: '4f7/2', note: 'Mt 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[110] = {  // Ds
  emissionLines: [
    { wavelength: 338.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 155.5, Kb: 180.4, La: 21.0 },
  xps: { bindingEnergy: '645 eV', orbital: '4f7/2', note: 'Ds 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[111] = {  // Rg
  emissionLines: [
    { wavelength: 336.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 159.0, Kb: 184.4, La: 21.5 },
  xps: { bindingEnergy: '660 eV', orbital: '4f7/2', note: 'Rg 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[112] = {  // Cn
  emissionLines: [
    { wavelength: 334.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 162.5, Kb: 188.5, La: 21.9 },
  xps: { bindingEnergy: '675 eV', orbital: '4f7/2', note: 'Cn 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[113] = {  // Nh
  emissionLines: [
    { wavelength: 332.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 166.0, Kb: 192.6, La: 22.4 },
  xps: { bindingEnergy: '690 eV', orbital: '4f7/2', note: 'Nh 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[114] = {  // Fl
  emissionLines: [
    { wavelength: 330.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 169.5, Kb: 196.6, La: 22.9 },
  xps: { bindingEnergy: '705 eV', orbital: '4f7/2', note: 'Fl 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[115] = {  // Mc
  emissionLines: [
    { wavelength: 328.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 173.0, Kb: 200.7, La: 23.4 },
  xps: { bindingEnergy: '720 eV', orbital: '4f7/2', note: 'Mc 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[116] = {  // Lv
  emissionLines: [
    { wavelength: 326.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 176.5, Kb: 204.7, La: 23.8 },
  xps: { bindingEnergy: '735 eV', orbital: '4f7/2', note: 'Lv 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[117] = {  // Ts
  emissionLines: [
    { wavelength: 324.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 180.0, Kb: 208.8, La: 24.3 },
  xps: { bindingEnergy: '750 eV', orbital: '4f7/2', note: 'Ts 4f结合能(预测值)' },
  nmr: null
};

P4_SPECTRAL[118] = {  // Og
  emissionLines: [
    { wavelength: 322.0, intensity: '预测', transition: '6d→5f', region: '紫外' },
  ],
  xray: { Ka: 183.5, Kb: 212.9, La: 24.8 },
  xps: { bindingEnergy: '765 eV', orbital: '4f7/2', note: 'Og 4f结合能(预测值)' },
  nmr: null
};

