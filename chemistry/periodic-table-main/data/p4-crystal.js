/**
 * P4-2：先进晶体学数据（完整版 v3 — 全118元素）
 * 包含：空间群、晶格参数、单胞原子数、配位数、晶系
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P4_CRYSTAL = {};

// ── 第 1 周期 ────────────────────────────────────────────
P4_CRYSTAL[1] = {  // H
  spaceGroup: 'P2₁/c (H₂)',
  latticeParams: { a: 4.47, b: null, c: 4.47, alpha: 90, beta: 90, gamma: 90, note: '固态 H₂ 为分子晶体，T < 14 K' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '立方',
  note: '氢无典型金属/共价晶体；固态 H₂ 为分子晶体',
};

P4_CRYSTAL[2] = {  // He
  spaceGroup: 'P6₃/mmc (⁴He)',
  latticeParams: { a: 3.57, b: null, c: 5.83, alpha: 90, beta: 90, gamma: 120, note: '⁴He 在 < 1.7 K 为 hcp' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '⁴He 在极低温下为 hcp 结构；³He 为 bcc',
};

// ── 第 2 周期 ────────────────────────────────────────────
P4_CRYSTAL[3] = {  // Li
  spaceGroup: 'Im3m',
  latticeParams: { a: 3.509, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: 'bcc，77 K 转为 fcc' },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '碱金属典型 bcc；低温 (< 77 K) 转 fcc',
};

P4_CRYSTAL[4] = {  // Be
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.2858, b: null, c: 3.5843, alpha: 90, beta: 90, gamma: 120, note: 'hcp，ABAB 堆垛' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: 'hcp 结构，c/a = 1.567（接近理想值 1.633）',
};

P4_CRYSTAL[5] = {  // B
  spaceGroup: 'R-3m (α-B₁₂)',
  latticeParams: { a: 4.906, b: null, c: 12.574, alpha: 90, beta: 90, gamma: 120, note: 'α-硼：B₁₂ 二十面体单元' },
  Z: 12,
  coordinationNumber: 6,
  crystalSystem: '三方',
  note: 'α-硼由 B₁₂ 二十面体组成；β-硼也常见',
};

P4_CRYSTAL[6] = {  // C
  spaceGroup: 'Fd3m (金刚石) / P6₃/mmc (石墨)',
  latticeParams: { a: 3.567, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '金刚石 a=3.567 Å；石墨 a=2.461, c=6.708 Å' },
  Z: 8,
  coordinationNumber: 4,
  crystalSystem: '立方（金刚石）/ 六方（石墨）',
  note: '金刚石 sp³ 四面体；石墨 sp² 层状',
};

P4_CRYSTAL[7] = {  // N
  spaceGroup: 'Pa3 (α-N₂)',
  latticeParams: { a: 5.661, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: 'α-N₂ 立方分子晶体，T < 35.6 K' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '立方',
  note: '氮为 N₂ 分子晶体；α 相立方，β 相六方',
};

P4_CRYSTAL[8] = {  // O
  spaceGroup: 'C2/m (α-O₂)',
  latticeParams: { a: 5.403, b: 3.429, c: 5.086, alpha: 90, beta: 132.0, gamma: 90, note: 'α-O₂ 单斜，T < 23.9 K' },
  Z: 2,
  coordinationNumber: 0,
  crystalSystem: '单斜',
  note: '氧为 O₂ 分子晶体；多晶型转变复杂',
};

P4_CRYSTAL[9] = {  // F
  spaceGroup: 'C2/c (α-F₂)',
  latticeParams: { a: 5.5, b: 3.28, c: 7.28, alpha: 90, beta: 102.2, gamma: 90, note: 'α-F₂ 单斜分子晶体，T < 45.6 K' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '单斜',
  note: '氟为 F₂ 分子晶体',
};

P4_CRYSTAL[10] = {  // Ne
  spaceGroup: 'Fm3m',
  latticeParams: { a: 4.462, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: 'fcc 分子晶体' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '稀有气体典型 fcc 结构',
};

// ── 第 3 周期 ────────────────────────────────────────────
P4_CRYSTAL[11] = {  // Na
  spaceGroup: 'Im3m',
  latticeParams: { a: 4.2906, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '碱金属典型 bcc 结构，体心立方',
};

P4_CRYSTAL[12] = {  // Mg
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.2094, b: null, c: 5.2105, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: 'hcp 结构，ABAB 堆垛',
};

P4_CRYSTAL[13] = {  // Al
  spaceGroup: 'Fm3m',
  latticeParams: { a: 4.0495, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: 'fcc 结构，面心立方，ABCABC 堆垛',
};

P4_CRYSTAL[14] = {  // Si
  spaceGroup: 'Fd3m',
  latticeParams: { a: 5.4307, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 8,
  coordinationNumber: 4,
  crystalSystem: '立方',
  note: '金刚石型结构，每个 Si 与 4 个 Si 形成 sp³ 四面体',
};

P4_CRYSTAL[15] = {  // P
  spaceGroup: 'P-1 (白磷 P₄)',
  latticeParams: { a: 1.874, b: 1.874, c: 1.874, alpha: 60.0, beta: 60.0, gamma: 60.0, note: '白磷为 P₄ 四面体分子晶体' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '三斜',
  note: '白磷为 P₄ 分子晶体；黑磷为正交晶系层状结构',
};

P4_CRYSTAL[16] = {  // S
  spaceGroup: 'Fddd (α-S₈)',
  latticeParams: { a: 10.4646, b: 12.866, c: 24.486, alpha: 90, beta: 90, gamma: 90, note: '正交 α-硫：S₈ 环分子' },
  Z: 16,
  coordinationNumber: 0,
  crystalSystem: '正交',
  note: 'α-硫由 S₈ 环状分子组成；β-硫为单斜',
};

P4_CRYSTAL[17] = {  // Cl
  spaceGroup: 'C2/m (α-Cl₂)',
  latticeParams: { a: 6.24, b: 4.48, c: 8.26, alpha: 90, beta: 102.5, gamma: 90, note: 'α-Cl₂ 单斜分子晶体' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '单斜',
  note: '氯为 Cl₂ 分子晶体',
};

P4_CRYSTAL[18] = {  // Ar
  spaceGroup: 'Fm3m',
  latticeParams: { a: 5.256, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '稀有气体 fcc 结构',
};

// ── 第 4 周期 ────────────────────────────────────────────
P4_CRYSTAL[19] = {  // K
  spaceGroup: 'Im3m',
  latticeParams: { a: 5.328, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '碱金属典型 bcc 结构',
};

P4_CRYSTAL[20] = {  // Ca
  spaceGroup: 'Fm3m (fcc) / P6₃/mmc (>450°C)',
  latticeParams: { a: 5.588, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '常温 fcc；> 450°C 转 hcp' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方 / 六方',
  note: '钙有多晶型转变',
};

P4_CRYSTAL[21] = {  // Sc
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.3088, b: null, c: 5.2675, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钪为 hcp 结构（α 相）',
};

P4_CRYSTAL[22] = {  // Ti
  spaceGroup: 'P6₃/mmc (hcp) / Im3m (>882°C)',
  latticeParams: { a: 2.9506, b: null, c: 4.6788, alpha: 90, beta: 90, gamma: 120, note: '常温 α-Ti (hcp)；> 882°C β-Ti (bcc)' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方 / 立方',
  note: '钛的 α→β 相变对合金设计重要',
};

P4_CRYSTAL[23] = {  // V
  spaceGroup: 'Im3m',
  latticeParams: { a: 3.024, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '钒为 bcc 结构',
};

P4_CRYSTAL[24] = {  // Cr
  spaceGroup: 'Im3m',
  latticeParams: { a: 2.884, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '体心立方结构',
};

P4_CRYSTAL[25] = {  // Mn
  spaceGroup: 'I-43m (α-Mn)',
  latticeParams: { a: 8.914, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: 'α-Mn 为复杂体心立方（58 原子/单胞）' },
  Z: 58,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: 'α-Mn 结构极其复杂，单胞含 58 个原子',
};

P4_CRYSTAL[26] = {  // Fe
  spaceGroup: 'Im3m (α-Fe, bcc) / Fm3m (γ-Fe, 912-1394°C)',
  latticeParams: { a: 2.8664, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: 'α-Fe bcc; γ-Fe fcc 912-1394°C; δ-Fe bcc >1394°C' },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方（多晶型）',
  note: '铁有 α→γ→δ 多晶型转变，是钢热处理的基础',
};

P4_CRYSTAL[27] = {  // Co
  spaceGroup: 'P6₃/mmc (α-Co, hcp) / Fm3m (β-Co, fcc, >422°C)',
  latticeParams: { a: 2.507, b: null, c: 4.07, alpha: 90, beta: 90, gamma: 120, note: '常温 α-Co hcp；> 422°C β-Co fcc' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方 / 立方',
  note: '钴的 α→β 相变温度 422°C',
};

P4_CRYSTAL[28] = {  // Ni
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.524, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '面心立方结构，磁有序温度 Tc = 627 K',
};

P4_CRYSTAL[29] = {  // Cu
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.6147, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '面心立方结构，高导电性',
};

P4_CRYSTAL[30] = {  // Zn
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.6649, b: null, c: 4.9468, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: 'hcp 结构，但 c/a = 1.856 偏离理想值 1.633',
};

P4_CRYSTAL[31] = {  // Ga
  spaceGroup: 'Cmca (α-Ga)',
  latticeParams: { a: 4.519, b: 7.663, c: 4.526, alpha: 90, beta: 90, gamma: 90, note: '正交晶系，Ga 形成二聚体 Ga₂ 分子' },
  Z: 8,
  coordinationNumber: 7,
  crystalSystem: '正交',
  note: '镓结构特殊，含 Ga₂ 二聚体单元',
};

P4_CRYSTAL[32] = {  // Ge
  spaceGroup: 'Fd3m',
  latticeParams: { a: 5.6575, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 8,
  coordinationNumber: 4,
  crystalSystem: '立方',
  note: '金刚石型结构，半导体材料基础',
};

P4_CRYSTAL[33] = {  // As
  spaceGroup: 'R-3m (α-As)',
  latticeParams: { a: 4.131, b: null, c: 11.612, alpha: 90, beta: 90, gamma: 120, note: '三方晶系，As 层状结构' },
  Z: 6,
  coordinationNumber: 3,
  crystalSystem: '三方',
  note: '砷为层状结构，每个 As 与 3 个 As 配位',
};

P4_CRYSTAL[34] = {  // Se
  spaceGroup: 'P3₁21 (灰硒)',
  latticeParams: { a: 4.366, b: null, c: 4.954, alpha: 90, beta: 90, gamma: 120, note: '三方晶系，螺旋链状 Se₈' },
  Z: 3,
  coordinationNumber: 2,
  crystalSystem: '三方',
  note: '灰硒为螺旋链状结构；每个 Se 与 2 个 Se 配位',
};

P4_CRYSTAL[35] = {  // Br
  spaceGroup: 'C2/m (α-Br₂)',
  latticeParams: { a: 6.67, b: 4.48, c: 8.74, alpha: 90, beta: 102.6, gamma: 90, note: 'α-Br₂ 单斜分子晶体' },
  Z: 4,
  coordinationNumber: 0,
  crystalSystem: '单斜',
  note: '溴为 Br₂ 分子晶体',
};

P4_CRYSTAL[36] = {  // Kr
  spaceGroup: 'Fm3m',
  latticeParams: { a: 5.686, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '稀有气体 fcc 结构',
};

// ── 第 5 周期 ────────────────────────────────────────────
P4_CRYSTAL[37] = {  // Rb
  spaceGroup: 'Im3m',
  latticeParams: { a: 5.585, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '碱金属 bcc 结构',
};

P4_CRYSTAL[38] = {  // Sr
  spaceGroup: 'Fm3m (fcc) / Im3m (>557°C)',
  latticeParams: { a: 6.084, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '常温 fcc；> 557°C 转 bcc' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '锶常温 fcc，高温转 bcc',
};

P4_CRYSTAL[39] = {  // Y
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.6474, b: null, c: 5.7306, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钇为 hcp 结构',
};

P4_CRYSTAL[40] = {  // Zr
  spaceGroup: 'P6₃/mmc (hcp) / Im3m (>865°C)',
  latticeParams: { a: 3.2316, b: null, c: 5.1475, alpha: 90, beta: 90, gamma: 120, note: '常温 α-Zr hcp；> 865°C β-Zr bcc' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方 / 立方',
  note: '锆的 α→β 相变；核反应堆包壳材料',
};

P4_CRYSTAL[41] = {  // Nb
  spaceGroup: 'Im3m',
  latticeParams: { a: 3.3008, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '铌为 bcc 结构；超导临界温度 Tc = 9.26 K',
};

P4_CRYSTAL[42] = {  // Mo
  spaceGroup: 'Im3m',
  latticeParams: { a: 3.147, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '钼为 bcc 结构；高熔点金属（2623°C）',
};

P4_CRYSTAL[43] = {  // Tc
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.738, b: null, c: 4.393, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '锝为 hcp 结构；全部同位素均放射性',
};

P4_CRYSTAL[44] = {  // Ru
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.7058, b: null, c: 4.2816, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钌为 hcp 结构',
};

P4_CRYSTAL[45] = {  // Rh
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.803, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '铑为 fcc 结构',
};

P4_CRYSTAL[46] = {  // Pd
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.8907, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '钯为 fcc 结构；催化活性高',
};

P4_CRYSTAL[47] = {  // Ag
  spaceGroup: 'Fm3m',
  latticeParams: { a: 4.0853, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '银为 fcc 结构；导电导热性最佳',
};

P4_CRYSTAL[48] = {  // Cd
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.9788, b: null, c: 5.6167, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '镉为 hcp 结构',
};

P4_CRYSTAL[49] = {  // In
  spaceGroup: 'I4/mmm',
  latticeParams: { a: 4.588, b: null, c: 4.9467, alpha: 90, beta: 90, gamma: 90, note: '体心四方' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '四方',
  note: '铟为体心四方结构，近 fcc',
};

P4_CRYSTAL[50] = {  // Sn
  spaceGroup: 'I4₁/amd (β-Sn, 白锡) / Fd3m (α-Sn, 灰锡)',
  latticeParams: { a: 5.8315, b: null, c: 3.1814, alpha: 90, beta: 90, gamma: 90, note: '白锡体心四方；灰锡金刚石型' },
  Z: 4,
  coordinationNumber: 6,
  crystalSystem: '四方（白锡）/ 立方（灰锡）',
  note: '锡有白锡（金属）→灰锡（半导体）相变（锡瘟）',
};

P4_CRYSTAL[51] = {  // Sb
  spaceGroup: 'R-3m',
  latticeParams: { a: 4.5066, b: null, c: 11.222, alpha: 90, beta: 90, gamma: 120, note: '三方晶系，Sb 层状结构' },
  Z: 6,
  coordinationNumber: 3,
  crystalSystem: '三方',
  note: '锑为层状结构，类砷',
};

P4_CRYSTAL[52] = {  // Te
  spaceGroup: 'P3₁21',
  latticeParams: { a: 4.4566, b: null, c: 5.9149, alpha: 90, beta: 90, gamma: 120, note: '三方晶系，螺旋链状 Te' },
  Z: 3,
  coordinationNumber: 2,
  crystalSystem: '三方',
  note: '碲为螺旋链状结构，类灰硒',
};

P4_CRYSTAL[53] = {  // I
  spaceGroup: 'Cmcm (α-I₂)',
  latticeParams: { a: 4.786, b: 7.266, c: 9.782, alpha: 90, beta: 90, gamma: 90, note: '正交晶系，I₂ 分子晶体' },
  Z: 8,
  coordinationNumber: 0,
  crystalSystem: '正交',
  note: '碘为 I₂ 分子晶体',
};

P4_CRYSTAL[54] = {  // Xe
  spaceGroup: 'Fm3m',
  latticeParams: { a: 6.199, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '稀有气体 fcc 结构',
};

// ── 第 6 周期 ────────────────────────────────────────────
P4_CRYSTAL[55] = {  // Cs
  spaceGroup: 'Im3m',
  latticeParams: { a: 6.141, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '铯为 bcc 结构；室温附近即熔化（28.5°C）',
};

P4_CRYSTAL[56] = {  // Ba
  spaceGroup: 'Im3m',
  latticeParams: { a: 5.025, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '钡为 bcc 结构',
};

P4_CRYSTAL[57] = {  // La
  spaceGroup: 'P6₃/mmc (α-La, hcp) / Fm3m (β-La, fcc)',
  latticeParams: { a: 3.774, b: null, c: 12.171, alpha: 90, beta: 90, gamma: 120, note: '常温 α-La hcp（双 hcp）；β-La fcc' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方 / 立方',
  note: '镧为双 hcp（dhcp）结构',
};

P4_CRYSTAL[58] = {  // Ce
  spaceGroup: 'Fm3m (γ-Ce, fcc) / P6₃/mmc (β-Ce, hcp)',
  latticeParams: { a: 5.161, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '常温 γ-Ce fcc；β-Ce hcp' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方 / 六方',
  note: '铈有多晶型转变，γ→β 相变伴随体积变化',
};

P4_CRYSTAL[59] = {  // Pr
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.6721, b: null, c: 11.835, alpha: 90, beta: 90, gamma: 120, note: '双 hcp（dhcp）' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '镨为双 hcp 结构',
};

P4_CRYSTAL[60] = {  // Nd
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.658, b: null, c: 11.796, alpha: 90, beta: 90, gamma: 120, note: '双 hcp（dhcp）' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钕为双 hcp 结构',
};

P4_CRYSTAL[61] = {  // Pm
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.65, b: null, c: 11.65, alpha: 90, beta: 90, gamma: 120, note: '双 hcp（估算）' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钷为双 hcp 结构（全部放射性）',
};

P4_CRYSTAL[62] = {  // Sm
  spaceGroup: 'R-3m (Sm 型)',
  latticeParams: { a: 3.629, b: null, c: 26.207, alpha: 90, beta: 90, gamma: 120, note: '三方晶系，Sm 型堆垛' },
  Z: 9,
  coordinationNumber: 12,
  crystalSystem: '三方',
  note: '钐型结构是 hcp 与 fcc 的混合堆垛序列',
};

P4_CRYSTAL[63] = {  // Eu
  spaceGroup: 'Im3m',
  latticeParams: { a: 4.5827, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '铕为 bcc 结构（镧系中例外）',
};

P4_CRYSTAL[64] = {  // Gd
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.6336, b: null, c: 5.781, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钆为 hcp 结构；铁磁性居里温度 293 K',
};

P4_CRYSTAL[65] = {  // Tb
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.601, b: null, c: 5.6936, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铽为 hcp 结构',
};

P4_CRYSTAL[66] = {  // Dy
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.5915, b: null, c: 5.6501, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '镝为 hcp 结构',
};

P4_CRYSTAL[67] = {  // Ho
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.5773, b: null, c: 5.6158, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '钬为 hcp 结构',
};

P4_CRYSTAL[68] = {  // Er
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.5592, b: null, c: 5.5848, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铒为 hcp 结构',
};

P4_CRYSTAL[69] = {  // Tm
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.5375, b: null, c: 5.554, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铥为 hcp 结构',
};

P4_CRYSTAL[70] = {  // Yb
  spaceGroup: 'Fm3m',
  latticeParams: { a: 5.4862, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '镱为 fcc 结构（镧系中例外，类 Eu）',
};

P4_CRYSTAL[71] = {  // Lu
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.5052, b: null, c: 5.5494, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '镥为 hcp 结构',
};

P4_CRYSTAL[72] = {  // Hf
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.1946, b: null, c: 5.0511, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铪为 hcp 结构；核反应堆控制棒',
};

P4_CRYSTAL[73] = {  // Ta
  spaceGroup: 'Im3m',
  latticeParams: { a: 3.3013, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '钽为 bcc 结构；耐腐蚀性极佳',
};

P4_CRYSTAL[74] = {  // W
  spaceGroup: 'Im3m',
  latticeParams: { a: 3.1652, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 2,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '钨为 bcc 结构；熔点最高的金属（3422°C）',
};

P4_CRYSTAL[75] = {  // Re
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.76, b: null, c: 4.458, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铼为 hcp 结构；高熔点（3186°C）',
};

P4_CRYSTAL[76] = {  // Os
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 2.7341, b: null, c: 4.3197, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '锇为 hcp 结构；密度最大的元素（22.59 g/cm³）',
};

P4_CRYSTAL[77] = {  // Ir
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.8393, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '铱为 fcc 结构；密度第二大元素',
};

P4_CRYSTAL[78] = {  // Pt
  spaceGroup: 'Fm3m',
  latticeParams: { a: 3.9242, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '铂为 fcc 结构；催化活性高',
};

P4_CRYSTAL[79] = {  // Au
  spaceGroup: 'Fm3m',
  latticeParams: { a: 4.0782, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '金为 fcc 结构；延展性极佳',
};

P4_CRYSTAL[80] = {  // Hg
  spaceGroup: 'R-3m',
  latticeParams: { a: 3.005, b: null, c: 5.259, alpha: 90, beta: 90, gamma: 120, note: '三方晶系（汞晶体）；室温为液体' },
  Z: 6,
  coordinationNumber: 12,
  crystalSystem: '三方',
  note: '汞室温为液体；凝固点 −38.83°C 时为三方晶系',
};

P4_CRYSTAL[81] = {  // Tl
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.4566, b: null, c: 5.5248, alpha: 90, beta: 90, gamma: 120 },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铊为 hcp 结构',
};

P4_CRYSTAL[82] = {  // Pb
  spaceGroup: 'Fm3m',
  latticeParams: { a: 4.9502, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '铅为 fcc 结构',
};

P4_CRYSTAL[83] = {  // Bi
  spaceGroup: 'R-3m',
  latticeParams: { a: 4.546, b: null, c: 11.8613, alpha: 90, beta: 90, gamma: 120, note: '三方晶系，Bi 层状结构' },
  Z: 6,
  coordinationNumber: 3,
  crystalSystem: '三方',
  note: '铋为层状结构；半金属；强抗磁性',
};

P4_CRYSTAL[84] = {  // Po
  spaceGroup: 'Pm3m',
  latticeParams: { a: 3.359, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '简单立方（唯一室温简立方元素）' },
  Z: 1,
  coordinationNumber: 6,
  crystalSystem: '立方',
  note: '钋是唯一室温下为简单立方结构的元素',
};

P4_CRYSTAL[85] = {  // At
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构（数据有限）' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '砹为放射性元素，结构数据有限，预测为金属 fcc',
};

P4_CRYSTAL[86] = {  // Rn
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '氡为放射性稀有气体，预测 fcc 结构',
};

// ── 第 7 周期 ────────────────────────────────────────────
P4_CRYSTAL[87] = {  // Fr
  spaceGroup: 'Im3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 bcc 结构' },
  Z: null,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '钫为强放射性元素，结构数据有限',
};

P4_CRYSTAL[88] = {  // Ra
  spaceGroup: 'Im3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 bcc 结构' },
  Z: null,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '镭为放射性元素，预测 bcc 结构',
};

P4_CRYSTAL[89] = {  // Ac
  spaceGroup: 'Fm3m',
  latticeParams: { a: 5.311, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '锕为 fcc 结构',
};

P4_CRYSTAL[90] = {  // Th
  spaceGroup: 'Fm3m',
  latticeParams: { a: 5.084, b: null, c: null, alpha: 90, beta: 90, gamma: 90 },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '钍为 fcc 结构；核燃料候选',
};

P4_CRYSTAL[91] = {  // Pa
  spaceGroup: 'I4/mmm',
  latticeParams: { a: 3.925, b: null, c: 3.239, alpha: 90, beta: 90, gamma: 90, note: '体心四方' },
  Z: 2,
  coordinationNumber: 12,
  crystalSystem: '四方',
  note: '镤为体心四方结构',
};

P4_CRYSTAL[92] = {  // U
  spaceGroup: 'Cmcm (α-U)',
  latticeParams: { a: 2.8537, b: 5.8695, c: 4.9548, alpha: 90, beta: 90, gamma: 90, note: '正交晶系（α-U）' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '正交',
  note: 'α-铀为正交晶系；β-U 四方（>668°C）；γ-U bcc（>776°C）',
};

P4_CRYSTAL[93] = {  // Np
  spaceGroup: 'Pmcn (α-Np)',
  latticeParams: { a: 4.722, b: 4.887, c: 6.663, alpha: 90, beta: 90, gamma: 90, note: '正交晶系（α-Np）' },
  Z: 8,
  coordinationNumber: 12,
  crystalSystem: '正交',
  note: '镎为正交晶系',
};

P4_CRYSTAL[94] = {  // Pu
  spaceGroup: 'P2₁/m (α-Pu)',
  latticeParams: { a: 6.183, b: 4.822, c: 10.963, alpha: 90, beta: 101.79, gamma: 90, note: '单斜晶系（α-Pu，16 原子/单胞）' },
  Z: 16,
  coordinationNumber: 12,
  crystalSystem: '单斜',
  note: '钚有 6 个同素异形体，α-Pu 为单斜，极其复杂',
};

P4_CRYSTAL[95] = {  // Am
  spaceGroup: 'P6₃/mmc',
  latticeParams: { a: 3.4681, b: null, c: 11.244, alpha: 90, beta: 90, gamma: 120, note: '双 hcp（dhcp）' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '镅为双 hcp 结构',
};

P4_CRYSTAL[96] = {  // Cm
  spaceGroup: 'P6₃/mmc (α) / Fm3m (β)',
  latticeParams: { a: 3.502, b: null, c: 11.308, alpha: 90, beta: 90, gamma: 120, note: '常温 α-Cm hcp；高温 β-Cm fcc' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方 / 立方',
  note: '锔有 α→β 相变',
};

P4_CRYSTAL[97] = {  // Bk
  spaceGroup: 'P6₃/mmc (预测)',
  latticeParams: { a: 3.49, b: null, c: 11.1, alpha: 90, beta: 90, gamma: 120, note: '预测双 hcp 结构' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '锫为放射性元素，预测双 hcp',
};

P4_CRYSTAL[98] = {  // Cf
  spaceGroup: 'P6₃/mmc (预测)',
  latticeParams: { a: 3.48, b: null, c: 11.0, alpha: 90, beta: 90, gamma: 120, note: '预测双 hcp 结构' },
  Z: 4,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '锎为放射性元素，预测双 hcp',
};

P4_CRYSTAL[99] = {  // Es
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: 5.75, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '锿为放射性元素，预测 fcc',
};

P4_CRYSTAL[100] = {  // Fm
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '镄为放射性元素，结构数据有限',
};

P4_CRYSTAL[101] = {  // Md
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '钔为放射性元素，结构数据有限',
};

P4_CRYSTAL[102] = {  // No
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '锘为放射性元素，结构数据有限',
};

P4_CRYSTAL[103] = {  // Lr
  spaceGroup: 'P6₃/mmc (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 120, note: '预测 hcp 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '铹为放射性元素，预测 hcp',
};

P4_CRYSTAL[104] = {  // Rf
  spaceGroup: 'P6₃/mmc (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 120, note: '预测 hcp 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '𬬻为超重元素，预测 hcp 结构',
};

P4_CRYSTAL[105] = {  // Db
  spaceGroup: 'Im3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 bcc 结构' },
  Z: null,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '𬭊为超重元素，预测 bcc 结构',
};

P4_CRYSTAL[106] = {  // Sg
  spaceGroup: 'Im3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 bcc 结构' },
  Z: null,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '𬭳为超重元素，预测 bcc 结构',
};

P4_CRYSTAL[107] = {  // Bh
  spaceGroup: 'Im3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 bcc 结构' },
  Z: null,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '𬭛为超重元素，预测 bcc 结构',
};

P4_CRYSTAL[108] = {  // Hs
  spaceGroup: 'Im3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 bcc 结构' },
  Z: null,
  coordinationNumber: 8,
  crystalSystem: '立方',
  note: '𬭶为超重元素，预测 bcc 结构',
};

P4_CRYSTAL[109] = {  // Mt
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '鿏为超重元素，预测 fcc 结构',
};

P4_CRYSTAL[110] = {  // Ds
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '𫟼为超重元素，预测 fcc 结构',
};

P4_CRYSTAL[111] = {  // Rg
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '𬬭为超重元素，预测 fcc 结构',
};

P4_CRYSTAL[112] = {  // Cn
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '鎶为超重元素，预测类 Hg 结构',
};

P4_CRYSTAL[113] = {  // Nh
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '鉨为超重元素，预测类 Tl 结构',
};

P4_CRYSTAL[114] = {  // Fl
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '𫓧为超重元素，预测类 Pb 结构',
};

P4_CRYSTAL[115] = {  // Mc
  spaceGroup: 'P6₃/mmc (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 120, note: '预测 hcp 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '六方',
  note: '镆为超重元素，预测类 Bi 结构',
};

P4_CRYSTAL[116] = {  // Lv
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '𫟷为超重元素，预测类 Po 结构',
};

P4_CRYSTAL[117] = {  // Ts
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '鿬为超重元素，预测类 At 结构',
};

P4_CRYSTAL[118] = {  // Og
  spaceGroup: 'Fm3m (预测)',
  latticeParams: { a: null, b: null, c: null, alpha: 90, beta: 90, gamma: 90, note: '预测 fcc 结构' },
  Z: null,
  coordinationNumber: 12,
  crystalSystem: '立方',
  note: '鿫为超重元素，预测类 Rn 结构',
};

// ══════════════════════════════════════════════════════
//  合并 P4 晶体学数据到 ELEMENTS 数组
// ══════════════════════════════════════════════════════

function mergeP4Crystal(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;
    if (P4_CRYSTAL[z]) {
      var p4 = P4_CRYSTAL[z];
      el.spaceGroup       = p4.spaceGroup;
      el.latticeParams    = p4.latticeParams;
      el.Z               = p4.Z;
      el.coordinationNumber = p4.coordinationNumber;
      el.crystalSystem   = p4.crystalSystem;
      el.crystalNote     = p4.note;
    }
  }
}

// 自动合并
if (typeof ELEMENTS !== 'undefined') {
  mergeP4Crystal(ELEMENTS);
}
