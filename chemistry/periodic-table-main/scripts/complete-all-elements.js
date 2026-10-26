/**
 * 元素数据补全引擎 — 从 elements-extracted.json 读取数据，
 * 应用补全值，写回 elements.js 并生成 details/*.md
 *
 * 运行：node complete-all-elements.js [--write]
 */
const fs = require('fs');
const path = require('path');

const BASE = __dirname;
const DATA_DIR = path.join(BASE, 'data');
const DETAILS_DIR = path.join(BASE, 'details');

// ════════════════════════════════════════════════════════════════════
// 1. 补全数据库 —— 仅填充 null 字段
// 数据来源：CRC Handbook 105th ed., NIST WebBook, IUPAC CIAAW
// ════════════════════════════════════════════════════════════════════

const SUPPLEMENT = {
  // ─── 非金属 ───
  1: { shearModulus: null, bulkModulus: null, hardnessMohs: null, youngsModulus: null, electrochemicalEquivalent: null, ionicRadius: null, electricalResistivity: null },
  2: { ionicRadius: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  5: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  6: { shearModulus: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: null },
  7: { shearModulus: null, bulkModulus: null, hardnessMohs: null, youngsModulus: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: null, electricalResistivity: null },
  8: { shearModulus: null, hardnessMohs: null, youngsModulus: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: 140, electricalResistivity: null },
  9: { ionicRadius: 133, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  10: { ionicRadius: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  15: { ionicRadius: 212, shearModulus: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  16: { shearModulus: null },
  17: { ionicRadius: 181, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  18: { ionicRadius: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  34: { productionMethod: 'SeO₂还原 / 从铜电解副产物回收' },
  35: { ionicRadius: 196, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  36: { ionicRadius: null, stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  53: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: null },
  54: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: null },
  // ─── 碱金属/碱土金属 ───
  3: { ionicRadius: 76, shearModulus: 4.2 },
  4: { ionicRadius: 45, shearModulus: 14.5, stdElectrodePotential: -1.85, redoxCouple: 'Be2+/Be', electrochemicalEquivalent: 0.168 },
  11: { ionicRadius: 102 },
  12: { ionicRadius: 72, shearModulus: 17 },
  19: { ionicRadius: 138, shearModulus: 1.3 },
  20: { ionicRadius: 100, shearModulus: 7.4 },
  55: { ionicRadius: 167, shearModulus: 1.5 },
  56: { ionicRadius: 135, shearModulus: 6.3 },
  87: { ionicRadius: 180 },
  88: { ionicRadius: 148 },
  // ─── 过渡金属 ───
  23: { ionicRadius: 64, shearModulus: 47 },
  24: { ionicRadius: 64, shearModulus: 115 },
  27: { ionicRadius: 74.5, shearModulus: 75 },
  28: { ionicRadius: 69, shearModulus: 76 },
  31: { ionicRadius: 62, shearModulus: null, stdElectrodePotential: -0.55, redoxCouple: 'Ga3+/Ga', electrochemicalEquivalent: 0.229 },
  32: { ionicRadius: 73, shearModulus: null },
  39: { ionicRadius: 90 },
  40: { ionicRadius: 72 },
  43: { ionicRadius: 64.5 },
  44: { ionicRadius: 67, shearModulus: 173 },
  47: { ionicRadius: 115, shearModulus: 30.2 },
  48: { ionicRadius: 95, shearModulus: 19.2 },
  49: { shearModulus: null, bulkModulus: null },
  51: { ionicRadius: 76, shearModulus: null },
  72: { ionicRadius: 71 },
  75: { ionicRadius: 63 },
  76: { ionicRadius: 63 },
  79: { ionicRadius: 91 },
  80: { ionicRadius: 102 },
  // ─── 后过渡金属 ───
  81: {},
  83: { ionicRadius: 103 },
  // ─── 镧系 ───
  57: { ionicRadius: 103.2 },
  58: { ionicRadius: 102 },
  59: { ionicRadius: 99 },
  60: { ionicRadius: 98.3 },
  61: { ionicRadius: 97 },
  62: { ionicRadius: 95.8 },
  63: { ionicRadius: 94.7 },
  64: { ionicRadius: 93.8 },
  65: { ionicRadius: 92.3 },
  66: { ionicRadius: 91.2 },
  67: { ionicRadius: 90.1 },
  68: { ionicRadius: 89 },
  69: { ionicRadius: 88 },
  70: { ionicRadius: 86.8 },
  71: { ionicRadius: 86.1 },
  // ─── 锕系 ───
  89: { ionicRadius: 112 },
  90: { ionicRadius: 94 },
  91: { ionicRadius: 89 },
  92: { ionicRadius: 83 },
  93: { ionicRadius: 87 },
  94: { ionicRadius: 85 },
  95: { ionicRadius: 97.5 },
  96: { ionicRadius: 95 },
  // ─── 放射性/超重 ───
  84: { ionicRadius: 67 },
  85: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: null },
  86: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null, ionicRadius: null },
  87: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
  88: { stdElectrodePotential: null, redoxCouple: null, electrochemicalEquivalent: null },
};

// ════════════════════════════════════════════════════════════════════
// 2. 电子构型
// ════════════════════════════════════════════════════════════════════

const CONFIGS = {
  1:'1s¹',2:'1s²',3:'[He] 2s¹',4:'[He] 2s²',5:'[He] 2s² 2p¹',6:'[He] 2s² 2p²',7:'[He] 2s² 2p³',
  8:'[He] 2s² 2p⁴',9:'[He] 2s² 2p⁵',10:'[He] 2s² 2p⁶',11:'[Ne] 3s¹',12:'[Ne] 3s²',
  13:'[Ne] 3s² 3p¹',14:'[Ne] 3s² 3p²',15:'[Ne] 3s² 3p³',16:'[Ne] 3s² 3p⁴',17:'[Ne] 3s² 3p⁵',
  18:'[Ne] 3s² 3p⁶',19:'[Ar] 4s¹',20:'[Ar] 4s²',21:'[Ar] 3d¹ 4s²',22:'[Ar] 3d² 4s²',
  23:'[Ar] 3d³ 4s²',24:'[Ar] 3d⁵ 4s¹',25:'[Ar] 3d⁵ 4s²',26:'[Ar] 3d⁶ 4s²',27:'[Ar] 3d⁷ 4s²',
  28:'[Ar] 3d⁸ 4s²',29:'[Ar] 3d¹⁰ 4s¹',30:'[Ar] 3d¹⁰ 4s²',31:'[Ar] 3d¹⁰ 4s² 4p¹',
  32:'[Ar] 3d¹⁰ 4s² 4p²',33:'[Ar] 3d¹⁰ 4s² 4p³',34:'[Ar] 3d¹⁰ 4s² 4p⁴',35:'[Ar] 3d¹⁰ 4s² 4p⁵',
  36:'[Ar] 3d¹⁰ 4s² 4p⁶',37:'[Kr] 5s¹',38:'[Kr] 5s²',39:'[Kr] 4d¹ 5s²',40:'[Kr] 4d² 5s²',
  41:'[Kr] 4d⁴ 5s¹',42:'[Kr] 4d⁵ 5s¹',43:'[Kr] 4d⁵ 5s²',44:'[Kr] 4d⁷ 5s¹',45:'[Kr] 4d⁸ 5s¹',
  46:'[Kr] 4d¹⁰',47:'[Kr] 4d¹⁰ 5s¹',48:'[Kr] 4d¹⁰ 5s²',49:'[Kr] 4d¹⁰ 5s² 5p¹',
  50:'[Kr] 4d¹⁰ 5s² 5p²',51:'[Kr] 4d¹⁰ 5s² 5p³',52:'[Kr] 4d¹⁰ 5s² 5p⁴',53:'[Kr] 4d¹⁰ 5s² 5p⁵',
  54:'[Kr] 4d¹⁰ 5s² 5p⁶',55:'[Xe] 6s¹',56:'[Xe] 6s²',57:'[Xe] 4f⁰ 5d¹ 6s²',
  58:'[Xe] 4f¹ 5d¹ 6s²',59:'[Xe] 4f³ 6s²',60:'[Xe] 4f⁴ 6s²',61:'[Xe] 4f⁵ 6s²',
  62:'[Xe] 4f⁶ 6s²',63:'[Xe] 4f⁷ 6s²',64:'[Xe] 4f⁷ 5d¹ 6s²',65:'[Xe] 4f⁹ 6s²',
  66:'[Xe] 4f¹⁰ 6s²',67:'[Xe] 4f¹¹ 6s²',68:'[Xe] 4f¹² 6s²',69:'[Xe] 4f¹³ 6s²',
  70:'[Xe] 4f¹⁴ 6s²',71:'[Xe] 4f¹⁴ 5d¹ 6s²',72:'[Xe] 4f¹⁴ 5d² 6s²',73:'[Xe] 4f¹⁴ 5d³ 6s²',
  74:'[Xe] 4f¹⁴ 5d⁴ 6s²',75:'[Xe] 4f¹⁴ 5d⁵ 6s²',76:'[Xe] 4f¹⁴ 5d⁶ 6s²',77:'[Xe] 4f¹⁴ 5d⁷ 6s²',
  78:'[Xe] 4f¹⁴ 5d⁹ 6s¹',79:'[Xe] 4f¹⁴ 5d¹⁰ 6s¹',80:'[Xe] 4f¹⁴ 5d¹⁰ 6s²',
  81:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',82:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',83:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
  84:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',85:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',86:'[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
  87:'[Rn] 7s¹',88:'[Rn] 7s²',89:'[Rn] 6d¹ 7s²',90:'[Rn] 6d² 7s²',
  91:'[Rn] 4f² 6d¹ 7s²',92:'[Rn] 5f³ 6d¹ 7s²',93:'[Rn] 5f⁴ 6d¹ 7s²',94:'[Rn] 5f⁶ 7s²',
  95:'[Rn] 5f⁷ 7s²',96:'[Rn] 5f⁸ 7s²',97:'[Rn] 5f⁹ 7s²',98:'[Rn] 5f¹⁰ 7s²',
  99:'[Rn] 5f¹¹ 7s²',100:'[Rn] 5f¹² 7s²',101:'[Rn] 5f¹³ 7s²',102:'[Rn] 5f¹⁴ 7s²',
  103:'[Rn] 5f¹⁴ 7s² 7p¹',
  104:'[Rn] 5f¹⁴ 6d² 7s²',105:'[Rn] 5f¹⁴ 6d³ 7s²',106:'[Rn] 5f¹⁴ 6d⁴ 7s²',
  107:'[Rn] 5f¹⁴ 6d⁵ 7s²',108:'[Rn] 5f¹⁴ 6d⁶ 7s²',109:'[Rn] 5f¹⁴ 6d⁷ 7s²',
  110:'[Rn] 5f¹⁴ 6d⁸ 7s²',111:'[Rn] 5f¹⁴ 6d⁹ 7s²',112:'[Rn] 5f¹⁴ 6d¹⁰ 7s²',
  113:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',114:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
  115:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',116:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
  117:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',118:'[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
};

// ════════════════════════════════════════════════════════════════════
// 3. 分类映射
// ════════════════════════════════════════════════════════════════════

const CAT_ZH = {
  'alkali-metal':'碱金属','alkaline-earth':'碱土金属','transition':'过渡金属',
  'post-transition':'后过渡金属','metalloid':'准金属','nonmetal':'非金属',
  'halogen':'卤素','noble-gas':'稀有气体','lanthanide':'镧系元素','actinide':'锕系元素',
};
const STATE_ZH = { solid:'固态', liquid:'液态', gas:'气态', synthetic:'人造' };

// ════════════════════════════════════════════════════════════════════
// 4. Markdown 内容生成（参照碳元素19维度模式）
// ════════════════════════════════════════════════════════════════════

function generateDetailMd(el) {
  const z = el.z, sym = el.symbol, name = el.name, nameEn = el.nameEn;
  const cat = CAT_ZH[el.category] || el.category;
  const state = STATE_ZH[el.state] || el.state;
  const config = CONFIGS[z] || '待补充';
  const oxs = el.oxidationStates || [];
  const mp = el.meltingPoint, bp = el.boilingPoint, d = el.density;
  const en = el.electronegativity, ie = el.ionizationEnergy, ea = el.electronAffinity;
  const ar = el.atomicRadius, cr = el.covalentRadius, vdw = el.vdwRadius;
  const tc = el.thermalConductivity, er = el.electricalResistivity;
  const hm = el.hardnessMohs, ym = el.youngsModulus, sm = el.shearModulus, bm = el.bulkModulus;
  const cs = el.crystalStructure, ir = el.ionicRadius;
  const isotopes = el.isotopes || [];
  const radio = el.radioactive;

  const fmt = (v, unit='') => v !== null && v !== undefined ? `${v}${unit}` : '待测定';
  const pct = (v) => v !== null ? `${v}%` : '痕量/人工';

  let md = '';
  md += `# ${name}（${sym}）· ${nameEn} — 全面知识图谱\n\n`;
  md += `> ${name}，第${z}号元素，${cat}，第${el.period}周期第${el.group}族。${radio ? '放射性元素。' : ''}\n\n`;
  md += `**核心标签：** 第${z}号元素 | ${cat} | ${el.period}周期${el.group}族 | ${state}\n\n`;

  // 1. 基本属性
  md += `## 1. 基本属性\n\n`;
  md += `${name}（${nameEn}）是第${z}号元素，属于${cat}，位于第${el.period}周期第${el.group}族。`;
  md += `常温下为${state}，电子构型 **${config}**。`;
  if (en !== null) md += `电负性${en}（Pauling标度）。`;
  if (ie !== null) md += `第一电离能${ie} kJ/mol。`;
  md += `\n\n`;
  md += `### 基本参数总表\n\n`;
  md += `| 属性 | 数值 | 属性 | 数值 |\n|------|------|------|------|\n`;
  md += `| 符号 | ${sym} | 原子量 | ${fmt(el.mass)} u |\n`;
  md += `| 熔点 | ${fmt(mp,'°C')} | 沸点 | ${fmt(bp,'°C')} |\n`;
  md += `| 密度 | ${fmt(d,' g/cm³')} | 电负性 | ${fmt(en)} |\n`;
  md += `| 第一电离能 | ${fmt(ie,' kJ/mol')} | 电子亲和能 | ${fmt(ea,' kJ/mol')} |\n`;
  md += `| 原子半径 | ${fmt(ar,' pm')} | 共价半径 | ${fmt(cr,' pm')} |\n`;
  md += `| 范德华半径 | ${fmt(vdw,' pm')} | 离子半径 | ${fmt(ir,' pm')} |\n`;
  md += `| 晶体结构 | ${cs || '待补充'} | CAS号 | ${el.casNumber || '待查'} |\n`;
  md += `| 氧化态 | ${oxs.length ? oxs.join(', ') : '待补充'} | 元素类别 | ${cat} |\n`;
  md += `\n`;

  // 2. 原子结构
  md += `## 2. 原子结构\n\n`;
  md += `${name}的核外电子排布为 **${config}**。`;
  md += `原子序数${z}，核外有${z}个电子分布在各电子层上。\n\n`;
  md += `- **完整电子排布：** ${config}\n`;
  md += `- **价电子：** 由最外层s/p/d轨道电子数决定\n\n`;

  // 3. 同位素
  md += `## 3. 同位素\n\n`;
  md += `${name}有${isotopes.length}种已知同位素。`;
  if (radio) md += `所有同位素均不稳定（放射性元素）。`;
  md += `\n\n`;
  if (isotopes.length) {
    md += `| 同位素 | 质量数 | 天然丰度 | 半衰期 | 衰变方式 | 说明 |\n`;
    md += `|--------|--------|----------|--------|----------|------|\n`;
    for (const iso of isotopes) {
      md += `| ${sym}-${iso.massNumber} | ${iso.massNumber} | ${pct(iso.abundance)} | ${iso.halfLife || '—'} | ${iso.decayMode || '—'} | ${iso.note || ''} |\n`;
    }
    md += `\n`;
  }

  // 4. 物理性质
  md += `## 4. 物理性质\n\n`;
  md += `${name}在常温下为${state}。\n\n`;
  md += `### 热力学性质\n\n`;
  md += `| 性质 | 数值 | 说明 |\n|------|------|------|\n`;
  md += `| 熔点 | ${fmt(mp,'°C')} | — |\n`;
  md += `| 沸点 | ${fmt(bp,'°C')} | — |\n`;
  md += `| 密度 | ${fmt(d,' g/cm³')} | 常温 |\n`;
  md += `| 热导率 | ${fmt(tc,' W/(m·K)')} | — |\n`;
  md += `| 电阻率 | ${fmt(er,' nΩ·m')} | 20°C |\n`;
  md += `| 莫氏硬度 | ${fmt(hm)} | — |\n`;
  md += `| 杨氏模量 | ${fmt(ym,' GPa')} | — |\n`;
  md += `| 剪切模量 | ${fmt(sm,' GPa')} | — |\n`;
  md += `| 体积模量 | ${fmt(bm,' GPa')} | — |\n`;
  md += `| 标准熵 | ${fmt(el.standardEntropy,' J/(mol·K)')} | — |\n`;
  md += `| 摩尔热容 | ${fmt(el.molarHeatCapacity,' J/(mol·K)')} | — |\n`;
  md += `\n`;

  // 5. 化学性质
  md += `## 5. 化学性质\n\n`;
  md += `${name}作为${cat}，其化学性质由${config}价电子层决定。`;
  if (oxs.length) md += `常见氧化态：${oxs.join(', ')}.`;
  md += `\n\n`;
  if (el.stdElectrodePotential !== null) {
    md += `标准电极电位：E° = ${el.stdElectrodePotential} V（${el.redoxCouple || '待补充'}）。\n\n`;
  }

  // 6-19. 其他维度（统一模板）
  const dims6_19 = [
    ['6','同素异形体/相态',''],
    ['7','有机/无机化学',''],
    ['8','生物化学与生命',''],
    ['9','循环与环境',''],
    ['10','环境与气候',''],
    ['11','工业应用',''],
    ['12','纳米技术',''],
    ['13','核物理',''],
    ['14','天体物理',''],
    ['15','地质学',''],
    ['16','发现历史',''],
    ['17','量子化学',''],
    ['18','光谱学',''],
    ['19','前沿与未来',''],
  ];

  for (const [num, title, _] of dims6_19) {
    md += `## ${num}. ${title}\n\n`;

    if (num === '6') {
      if (['C','S','P','O','Sn','Se'].includes(sym)) {
        md += `${name}存在多种同素异形体/相态，详见化合物知识库。\n\n`;
      } else {
        md += `${name}的晶体结构为${cs || '待补充'}。\n\n`;
      }
    } else if (num === '8') {
      if (['H','C','N','O','P','S','Fe','Ca','K','Na','Mg','Zn','Se','I','Co','Cu','Mn','Mo','Cr','W','Ni'].includes(sym)) {
        md += `${name}在生物体系中具有重要角色。具体生物学功能见专业文献。\n\n`;
      } else if (radio) {
        md += `${name}为放射性元素，对生物体具有辐射危害。\n\n`;
      } else {
        md += `${name}在生物体系中的角色取决于元素类别，部分${cat}是生物微量元素。\n\n`;
      }
    } else if (num === '11') {
      const pm = el.productionMethod;
      if (pm) md += `${name}的工业制备方法：${pm}\n\n`;
      const ap = el.annualProduction;
      if (ap) md += `全球年产量约${ap}吨。\n\n`;
      if (el.priceReference) md += `价格参考：${el.priceReference}\n\n`;
    } else if (num === '13') {
      if (radio) {
        md += `${name}是放射性元素。`;
        for (const iso of isotopes.slice(0,3)) {
          if (iso.decayMode) md += `${sym}-${iso.massNumber}：半衰期${iso.halfLife}，衰变方式${iso.decayMode}。`;
        }
        md += `\n\n`;
      } else {
        md += `${name}的核结合能约${(7.5*z).toFixed(0)} MeV（估算）。\n\n`;
      }
    } else if (num === '14') {
      const cab = el.crustAbundance;
      md += `${name}的地壳丰度约${cab !== null ? cab : '待测定'} ppm。\n\n`;
    } else if (num === '16') {
      md += `${name}的发现历史和命名来源见基本信息。\n\n`;
    } else if (num === '17') {
      md += `${name}的量子化学性质由其电子构型${config}决定。\n\n`;
    } else {
      md += `${name}在此领域的详细信息待进一步补充。\n\n`;
    }
  }

  return md;
}


// ════════════════════════════════════════════════════════════════════
// 5. 主程序
// ════════════════════════════════════════════════════════════════════

function main() {
  console.log('='.repeat(60));
  console.log('元素数据全面补全引擎 v1.0');
  console.log('='.repeat(60));

  // 读取提取的 JSON 数据
  const elementsFile = path.join(BASE, 'elements-extracted.json');
  const statsFile = path.join(BASE, 'elements-stats.json');
  const jsPath = path.join(DATA_DIR, 'elements.js');

  if (!fs.existsSync(elementsFile)) {
    console.error('ERROR: 请先运行 extract-elements.js 生成 JSON 数据');
    process.exit(1);
  }

  const elements = JSON.parse(fs.readFileSync(elementsFile, 'utf-8'));
  const stats = JSON.parse(fs.readFileSync(statsFile, 'utf-8'));

  console.log(`\n读取到 ${elements.length} 个元素`);
  console.log(`总计 ${stats.totalNullFields} 个 null 字段`);

  // Step 1: 应用补全数据
  console.log('\n[Step 1] 应用补全数据...');
  let filledCount = 0;
  const filledDetails = [];

  for (const el of elements) {
    const z = el.z;
    const supplement = SUPPLEMENT[z] || {};
    for (const [field, value] of Object.entries(supplement)) {
      // 仅填充 null 字段
      if (el[field] === null && value !== null) {
        el[field] = value;
        filledCount++;
        filledDetails.push({ z, symbol: el.symbol, field, value });
      } else if (el[field] === null && value === null) {
        // 明确标记为"此字段确实无法测定"（不填充）
      }
    }
  }

  console.log(`  填充了 ${filledCount} 个缺失字段`);

  // 重新统计
  let remainingNulls = 0;
  const remainingByField = {};
  for (const el of elements) {
    for (const [key, val] of Object.entries(el)) {
      if (val === null) {
        remainingNulls++;
        remainingByField[key] = (remainingByField[key] || 0) + 1;
      }
    }
  }
  console.log(`  补全后剩余 ${remainingNulls} 个 null 字段（减少 ${stats.totalNullFields - remainingNulls} 个）`);

  // Step 2: 生成 details/*.md
  console.log('\n[Step 2] 生成 details/*.md...');
  let mdGenerated = 0, mdSkipped = 0;

  for (const el of elements) {
    const z = el.z, sym = el.symbol;
    const mdPath = path.join(DETAILS_DIR, `${sym}.md`);

    // 如果文件已存在且有丰富内容（>50行），跳过前54个常见元素
    if (fs.existsSync(mdPath)) {
      const existing = fs.readFileSync(mdPath, 'utf-8');
      const lineCount = existing.split('\n').length;
      if (lineCount > 50 && z <= 54) {
        console.log(`  SKIP ${sym}.md (已有${lineCount}行)`);
        mdSkipped++;
        continue;
      }
    }

    const mdContent = generateDetailMd(el);
    fs.writeFileSync(mdPath, mdContent, 'utf-8');
    mdGenerated++;
  }

  console.log(`  生成 ${mdGenerated} 个 md 文件，跳过 ${mdSkipped} 个`);

  // Step 3: 写回 elements.js 或导出补全数据
  console.log('\n[Step 3] 数据输出...');
  const shouldWrite = process.argv.includes('--write');

  // 导出补全后的 JSON
  const outputJson = path.join(BASE, 'elements-supplemented.json');
  fs.writeFileSync(outputJson, JSON.stringify(elements, null, 2), 'utf-8');
  console.log(`  补全数据已导出到 ${outputJson}`);

  if (shouldWrite) {
    // 直接修改 elements.js —— 替换对应字段值
    console.log('  正在写回 elements.js...');
    const jsContent = fs.readFileSync(jsPath, 'utf-8');

    let modified = jsContent;
    for (const detail of filledDetails) {
      const { z, symbol, field, value } = detail;
      // 在 JS 文件中找到对应位置并替换
      // 查找 {z:X,...field:null,...} 中的 field:null
      const pattern = new RegExp(`\\{z:${z},[^}]*${field}:null`);
      if (pattern.test(modified)) {
        // 精确替换该字段的 null 值
        const fieldPattern = new RegExp(`(\\{z:${z},[^}]*?)${field}:null([^}]*?\\})`);
        const replacement = value === null ? `${field}:null` :
                           typeof value === 'string' ? `${field}:'${value}'` :
                           typeof value === 'number' ? `${field}:${value}` :
                           `${field}:${JSON.stringify(value)}`;
        modified = modified.replace(fieldPattern, `$1${field}:${typeof value === 'string' ? `'${value}'` : value}$2`);
      }
    }

    fs.writeFileSync(jsPath, modified, 'utf-8');
    console.log('  ✅ elements.js 已更新');
  } else {
    console.log('  ⚠️ 未修改原文件。要写回请运行：node complete-all-elements.js --write');
  }

  // 生成补全报告
  console.log('\n[Step 4] 生成报告...');
  const reportPath = path.join(BASE, 'completion-report.md');
  let report = '# 元素数据补全报告\n\n';
  report += `生成时间：2026-06-21\n\n`;
  report += `## 概览\n\n`;
  report += `- 原始 null 字段总数：${stats.totalNullFields}\n`;
  report += `- 本次补全字段数：${filledCount}\n`;
  report += `- 补全后剩余 null：${remainingNulls}\n`;
  report += `- 生成的 md 文件数：${mdGenerated}\n`;
  report += `- 跳过的 md 文件数：${mdSkipped}\n\n`;

  report += `## 补全后仍为 null 的字段（按频率）\n\n`;
  report += `| 字段 | 缺失元素数 |\n|------|------------|\n`;
  for (const [field, count] of Object.entries(remainingByField).sort((a,b) => b[1]-a[1])) {
    report += `| ${field} | ${count} |\n`;
  }
  report += `\n## 本次补全详情\n\n`;
  report += `| 元素 | 字段 | 补全值 |\n|------|------|--------|\n`;
  for (const d of filledDetails) {
    report += `| ${d.symbol} (z=${d.z}) | ${d.field} | ${d.value} |\n`;
  }

  fs.writeFileSync(reportPath, report, 'utf-8');
  console.log(`  报告已生成：${reportPath}`);

  console.log('\n' + '='.repeat(60));
  console.log('完成！下一步建议：');
  console.log('1. 检查 elements-supplemented.json 补全数据');
  console.log('2. 确认后运行 node complete-all-elements.js --write');
  console.log('3. 检查 details/*.md 内容质量');
  console.log('4. 为重点元素手写增强19维度内容');
  console.log('='.repeat(60));
}

main();
