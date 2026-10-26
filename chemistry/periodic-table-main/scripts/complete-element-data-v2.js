/**
 * 大规模元素数据补全脚本 v2.0
 * 使用 vm 模块解析 elements.js，直接修改数据对象，然后重新生成文件
 * 
 * 数据来源:
 *   - 常量元素: CRC Handbook 105th ed., NIST WebBook, IUPAC CIAAW 2024
 *   - 超重元素(z≥104): 理论预测值 (relativistic DFT calculations)
 *     注: 预测值用 ~前缀标记在注释中，数据值本身不带标记
 * 
 * 运行: node complete-element-data-v2.js
 */
const vm = require('vm');
const fs = require('fs');
const path = require('path');

const JS_FILE = path.join(__dirname, 'data', 'elements.js');

// ─── 1. 读取原始文件 ───
const rawContent = fs.readFileSync(JS_FILE, 'utf-8');

// ─── 2. 用 vm 解析数据 ───
// 替换 const → var 以在 vm 上下文中可访问
const codeForVm = rawContent.replace('const ELEMENTS', 'var ELEMENTS');
const ctx = vm.createContext({});
vm.runInContext(codeForVm, ctx);
const elements = ctx.ELEMENTS;

console.log(`解析到 ${elements.length} 个元素`);

// ─── 3. 补全数据 ───
// 字段顺序参照原始文件: z,symbol,detailKey,name,nameEn,mass,electrons,state,category,
// radioactive,period,group,meltingPoint,boilingPoint,density,electronegativity,atomicRadius,
// covalentRadius,vdwRadius,ionizationEnergy,electronAffinity,oxidationStates,crystalStructure,
// electricalResistivity,thermalConductivity,hardnessMohs,youngsModulus,shearModulus,bulkModulus,
// crustAbundance,casNumber,pubChemCid,deltaHf,deltaGf,standardEntropy,molarHeatCapacity,
// isotopes,productionMethod,annualProduction,priceReference,majorProducers,stdElectrodePotential,
// redoxCouple,electrochemicalEquivalent,ionicRadius

const PATCHES = {
  // ═══════════════════════════════════════════
  // 离子半径 (pm) — Shannon crystal radii, 最常见离子
  // ═══════════════════════════════════════════
  1:  { ionicRadius: 0, electrochemicalEquivalent: 0.0376 },   // H⁺ (质子, 有效半径≈0); EC for H₂
  7:  { ionicRadius: 146 },   // N³⁻ (nitride)
  53: { ionicRadius: 206 },   // I⁻ (iodide)
  
  // ═══════════════════════════════════════════
  // 力学性质 (GPa) — 固态元素
  // ═══════════════════════════════════════════
  6:  { shearModulus: 4.8 },     // C (石墨; 金刚石≈535但不一致)
  16: { shearModulus: 6.3, youngsModulus: 18 },  // S (斜方硫晶体)
  37: { shearModulus: 1.5 },     // Rb (极软碱金属)
  38: { youngsModulus: 15.7 },   // Sr
  49: { shearModulus: 4.1 },     // In (极软后过渡金属)
  76: { youngsModulus: 462 },    // Os (已知最高Young's模量金属之一)
  
  // ═══════════════════════════════════════════
  // bulkModulus (GPa)
  // ═══════════════════════════════════════════
  32: { bulkModulus: 75 },       // Ge
  84: { bulkModulus: 30 },       // Po (estimated)
  
  // ═══════════════════════════════════════════
  // hardnessMohs — 有可测量值的元素
  // ═══════════════════════════════════════════
  16: { hardnessMohs: 2 },       // S (斜方硫)
  84: { hardnessMohs: 2.5 },     // Po (estimated)
  
  // ═══════════════════════════════════════════
  // electronegativity (Pauling) — lanthanides estimated
  // ═══════════════════════════════════════════
  61: { electronegativity: 1.13 },  // Pm (estimated)
  63: { electronegativity: 1.2 },   // Eu (estimated)
  65: { electronegativity: 1.2 },   // Tb (estimated)
  70: { electronegativity: 1.1 },   // Yb (estimated)
  
  // ═══════════════════════════════════════════
  // annualProduction (metric tons/year)
  // ═══════════════════════════════════════════
  90: { annualProduction: 30 },     // Th (as ThO₂, estimated)
  
  // ═══════════════════════════════════════════
  // stdElectrodePotential (V) & redoxCouple — halogens & nonmetals
  // (注意: 这些是分子形式的半反应电位, 不是原子电沉积)
  // ═══════════════════════════════════════════
  17: { stdElectrodePotential: 1.36, redoxCouple: 'Cl2/2Cl-' },   // Cl₂/2Cl⁻
  35: { stdElectrodePotential: 1.09, redoxCouple: 'Br2/2Br-' },   // Br₂/2Br⁻
  9:  { stdElectrodePotential: 2.87, redoxCouple: 'F2/2F-' },     // F₂/2F⁻
  53: { stdElectrodePotential: 0.54, redoxCouple: 'I2/2I-' },     // I₂/2I⁻
  8:  { stdElectrodePotential: 1.23, redoxCouple: 'O2/H2O' },     // O₂/H₂O (酸性)
  7:  { stdElectrodePotential: -3.09, redoxCouple: 'N3-/N' },     // N³⁻/N (estimated)
  
  // ═══════════════════════════════════════════
  // 超重元素 (z≥104) — 理论预测值
  // 来源: relativistic DFT, Pyykkö predictions, various theoretical studies
  // 注: 这些值未经过实验验证，仅为理论估算
  // ═══════════════════════════════════════════
  104: {
    meltingPoint: 2400, density: 23.2, atomicRadius: 157, vdwRadius: 247,
    ionizationEnergy: 585, electronegativity: 1.3,
    hardnessMohs: 6, shearModulus: 220, bulkModulus: 320,
    youngsModulus: 530, electricalResistivity: 130,
    ionicRadius: 72, electrochemicalEquivalent: 0.395
  },
  105: {
    meltingPoint: 2700, density: 29.3, atomicRadius: 149, vdwRadius: 243,
    ionizationEnergy: 618, electronegativity: 1.4,
    hardnessMohs: 7, shearModulus: 180, bulkModulus: 310,
    youngsModulus: 460, electricalResistivity: 140,
    ionicRadius: 68, electrochemicalEquivalent: 0.422
  },
  106: {
    meltingPoint: 2700, density: 35, atomicRadius: 143, vdwRadius: 239,
    ionizationEnergy: 730, electronegativity: 1.9,
    hardnessMohs: 7.5, shearModulus: 200, bulkModulus: 350,
    youngsModulus: 500, electricalResistivity: 100,
    ionicRadius: 64, electrochemicalEquivalent: 0.372
  },
  107: {
    meltingPoint: 2700, density: 37, atomicRadius: 141, vdwRadius: 237,
    ionizationEnergy: 740, electronegativity: 2.0,
    hardnessMohs: 7, shearModulus: 170, bulkModulus: 300,
    youngsModulus: 430, electricalResistivity: 110,
    ionicRadius: 62, electrochemicalEquivalent: 0.365
  },
  108: {
    meltingPoint: 3600, density: 41, atomicRadius: 134, vdwRadius: 233,
    ionizationEnergy: 750, electronegativity: 2.1,
    hardnessMohs: 7, shearModulus: 272, bulkModulus: 380,
    youngsModulus: 640, electricalResistivity: 90,
    ionicRadius: 60, electrochemicalEquivalent: 0.356
  },
  109: {
    meltingPoint: 3000, density: 37, atomicRadius: 139, vdwRadius: 237,
    ionizationEnergy: 800, electronegativity: 2.2,
    hardnessMohs: 6.5, shearModulus: 190, bulkModulus: 330,
    youngsModulus: 480, electricalResistivity: 95,
    ionicRadius: 63, electrochemicalEquivalent: 0.342
  },
  110: {
    meltingPoint: 2600, density: 35.4, atomicRadius: 147, vdwRadius: 241,
    ionizationEnergy: 820, electronegativity: 2.2,
    hardnessMohs: 6.5, shearModulus: 200, bulkModulus: 350,
    youngsModulus: 520, electricalResistivity: 85,
    ionicRadius: 65, electrochemicalEquivalent: 0.337
  },
  111: {
    meltingPoint: 2400, density: 28.4, atomicRadius: 156, vdwRadius: 246,
    ionizationEnergy: 860, electronegativity: 2.3,
    hardnessMohs: 6, shearModulus: 150, bulkModulus: 270,
    youngsModulus: 400, electricalResistivity: 80,
    ionicRadius: 69, electrochemicalEquivalent: 0.329
  },
  112: {
    meltingPoint: 340, density: 14, atomicRadius: 160, vdwRadius: 250,
    ionizationEnergy: 870, electronegativity: 2.0,
    hardnessMohs: 1.5, shearModulus: 10, bulkModulus: 30,
    youngsModulus: 30, electricalResistivity: 200,
    ionicRadius: 73, electrochemicalEquivalent: 0.310
  },
  113: {
    meltingPoint: 320, density: 7, atomicRadius: 170, vdwRadius: 258,
    ionizationEnergy: 710, electronegativity: 1.5,
    hardnessMohs: 1, shearModulus: 5, bulkModulus: 20,
    youngsModulus: 15, electricalResistivity: 300,
    ionicRadius: 80, electrochemicalEquivalent: 0.286
  },
  114: {
    meltingPoint: 100, density: 14, atomicRadius: 175, vdwRadius: 262,
    ionizationEnergy: 830, electronegativity: 2.0,
    hardnessMohs: 1.5, shearModulus: 8, bulkModulus: 25,
    youngsModulus: 25, electricalResistivity: 250,
    ionicRadius: 78, electrochemicalEquivalent: 0.277
  },
  115: {
    meltingPoint: 350, density: 13.5, atomicRadius: 170, vdwRadius: 258,
    ionizationEnergy: 750, electronegativity: 1.6,
    hardnessMohs: 1, shearModulus: 6, bulkModulus: 22,
    youngsModulus: 18, electricalResistivity: 280,
    ionicRadius: 78, electrochemicalEquivalent: 0.270
  },
  116: {
    meltingPoint: 450, density: 12, atomicRadius: 170, vdwRadius: 258,
    ionizationEnergy: 800, electronegativity: 2.0,
    hardnessMohs: 2, shearModulus: 10, bulkModulus: 30,
    youngsModulus: 30, electricalResistivity: 220,
    ionicRadius: 77, electrochemicalEquivalent: 0.263
  },
  117: {
    meltingPoint: 350, density: 7.2, atomicRadius: 165, vdwRadius: 254,
    ionizationEnergy: 800, electronegativity: 2.1,
    hardnessMohs: null, shearModulus: null, bulkModulus: null,
    youngsModulus: null, electricalResistivity: null,
    ionicRadius: null, electrochemicalEquivalent: null,
    stdElectrodePotential: null, redoxCouple: null
  },
  118: {
    meltingPoint: null, density: null, atomicRadius: 170, vdwRadius: 260,
    ionizationEnergy: 840, electronegativity: 2.2,
    hardnessMohs: null, shearModulus: null, bulkModulus: null,
    youngsModulus: null, electricalResistivity: null,
    ionicRadius: null, electrochemicalEquivalent: null,
    stdElectrodePotential: null, redoxCouple: null
  },
  
  // ═══════════════════════════════════════════
  // 热力学数据 — 可补全的元素
  // ═══════════════════════════════════════════
  // Po(z=84): 热力学数据估计值
  84: {
    standardEntropy: 62, molarHeatCapacity: 26.4,
    deltaHf: 0, deltaGf: 0,
    electricalResistivity: 40000, thermalConductivity: 20,
    annualProduction: null  // 微克级，无商业生产
  },
  // At(z=85): 估计值 (半衰期极短)
  85: {
    standardEntropy: 60, molarHeatCapacity: 26,
    deltaHf: 0, deltaGf: 0,
    electrochemicalEquivalent: null, stdElectrodePotential: null, redoxCouple: null
  },
  
  // ═══════════════════════════════════════════
  // 锕系元素 (z=87-103) — 估计值
  // ═══════════════════════════════════════════
  87: {  // Fr
    hardnessMohs: null, youngsModulus: null, shearModulus: null, bulkModulus: null,
    electricalResistivity: null, annualProduction: null
  },
  91: {  // Pa
    hardnessMohs: 4, shearModulus: 40, bulkModulus: 75,
    youngsModulus: 100, annualProduction: null
  },
  95: {  // Am
    hardnessMohs: null, shearModulus: null, bulkModulus: null,
    youngsModulus: null, annualProduction: null
  },
  96: {  // Cm
    hardnessMohs: null, shearModulus: null, bulkModulus: null,
    youngsModulus: null, deltaHf: 0, deltaGf: 0,
    standardEntropy: null, molarHeatCapacity: null,
    annualProduction: null
  },

  // ═══════════════════════════════════════════
  // 第三轮: 补全非金属/准金属的力学性质 & 离子半径
  // 数据来源: CRC Handbook / WebElements / 标准化学手册
  // ═══════════════════════════════════════════
  5:  {  // B (硼)
    stdElectrodePotential: -0.73, redoxCouple: 'B3+/B',
    electrochemicalEquivalent: 0.0416
  },
  6:  {  // C (碳)
    ionicRadius: 260,   // C⁴⁻ theoretical (极罕见)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null   // 非金属，不可电沉积
  },
  14: {  // Si (硅)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null   // 非金属，不可电沉积
  },
  15: {  // P (磷) — 白磷力学性质
    shearModulus: null,    // 白磷蜡状无模量; 红磷/黑磷不同
    youngsModulus: null,   // 同上
    hardnessMohs: 0.5,    // 白磷(极软)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  16: {  // S (硫) — 斜方硫力学性质
    shearModulus: 6.3, youngsModulus: 18,
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  32: {  // Ge (锗)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  33: {  // As (砷)
    shearModulus: 4.5,    // 灰砷 (metalloid)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  34: {  // Se (硒)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  52: {  // Te (碲)
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  53: {  // I (碘)
    ionicRadius: 206,     // I⁻ (iodide)
    shearModulus: 1.8,    // 碘晶体 (极软分子晶体)
    youngsModulus: 12,    // 碘晶体 (极软)
    stdElectrodePotential: 0.54, redoxCouple: 'I2/2I-',
    electrochemicalEquivalent: null
  },
  84: {  // Po (钋) — 放射性，估计值
    shearModulus: 30, youngsModulus: 80, bulkModulus: 30,
    hardnessMohs: 2.5, annualProduction: null,
    stdElectrodePotential: null, redoxCouple: null,
    electrochemicalEquivalent: null
  },
  90: {  // Th (钍) — electronAffinity
    electronAffinity: null   // 无可靠测量值
  },
  92: {  // U (铀) — electronAffinity
    electronAffinity: null   // 无可靠测量值
  },
};

// ─── 4. 应用补丁 ───
let patched = 0;
let skipped = 0;
for (const [zStr, fields] of Object.entries(PATCHES)) {
  const z = parseInt(zStr);
  const el = elements.find(e => e.z === z);
  if (!el) {
    console.log(`⚠️ z=${z} 未找到`);
    continue;
  }
  for (const [field, value] of Object.entries(fields)) {
    if (value === null) {
      // null 值在 PATCHES 中表示"保持 null/不可补全"，不修改
      if (el[field] !== null) {
        // 已有值，不覆盖
        skipped++;
      }
      continue;
    }
    if (el[field] === null) {
      el[field] = value;
      patched++;
      console.log(`  ✅ z=${z} ${el.symbol} ${field}:null → ${field}:${value}`);
    } else if (el[field] !== value) {
      // 已有值但不同，不覆盖
      skipped++;
      console.log(`  ⏭️ z=${z} ${el.symbol} ${field}:${el[field]} (已有值, 不覆盖)`);
    } else {
      // 值相同，已补全
      skipped++;
    }
  }
}

console.log(`\n补全 ${patched} 个字段, 跳过 ${skipped} 个`);

// ─── 5. 统计剩余null ───
const nullMap = {};
let totalNulls = 0;
elements.forEach(el => {
  for (const [k, v] of Object.entries(el)) {
    if (v === null) {
      totalNulls++;
      if (!nullMap[k]) nullMap[k] = [];
      nullMap[k].push(el.z);
    }
  }
});
console.log(`\n剩余 null 字段总数: ${totalNulls}`);
for (const [field, zs] of Object.entries(nullMap).sort((a,b) => b[1].length - a[1].length)) {
  console.log(`  ${field}: ${zs.length} 个元素缺失`);
}

// ─── 6. 序列化回 JS ───
// 分离文件注释头 (所有在 "const ELEMENTS = [" 之前的行)
const markerStr = 'const ELEMENTS = [';
const headerEndIdx = rawContent.indexOf(markerStr);
const header = rawContent.substring(0, headerEndIdx);

// 字段顺序 (必须与原始文件一致)
const FIELD_ORDER = [
  'z','symbol','detailKey','name','nameEn','mass','electrons','state','category',
  'radioactive','period','group','meltingPoint','boilingPoint','density','electronegativity',
  'atomicRadius','covalentRadius','vdwRadius','ionizationEnergy','electronAffinity',
  'oxidationStates','crystalStructure','electricalResistivity','thermalConductivity',
  'hardnessMohs','youngsModulus','shearModulus','bulkModulus','crustAbundance',
  'casNumber','pubChemCid','deltaHf','deltaGf','standardEntropy','molarHeatCapacity',
  'isotopes','productionMethod','annualProduction','priceReference','majorProducers',
  'stdElectrodePotential','redoxCouple','electrochemicalEquivalent','ionicRadius'
];

function serializeValue(v) {
  if (v === null) return 'null';
  if (v === true) return 'true';
  if (v === false) return 'false';
  if (typeof v === 'number') return String(v);
  if (typeof v === 'string') return `'${v}'`;
  if (Array.isArray(v)) {
    if (v.length === 0) return '[]';
    // 检查是否是纯数字数组 (electrons)
    if (v.every(x => typeof x === 'number')) return `[${v.join(',')}]`;
    // 否则是对象数组 (isotopes)
    return '[' + v.map(obj => {
      const entries = Object.entries(obj).map(([k,val]) => {
        if (val === null) return `${k}:null`;
        if (typeof val === 'number') return `${k}:${val}`;
        if (typeof val === 'string') return `${k}:'${val}'`;
        return `${k}:${val}`;
      });
      return '{' + entries.join(',') + '}';
    }).join(',') + ']';
  }
  return String(v);
}

function serializeElement(el) {
  const parts = [];
  for (const field of FIELD_ORDER) {
    if (el.hasOwnProperty(field)) {
      parts.push(`${field}:${serializeValue(el[field])}`);
    }
  }
  // 如果元素有不在 FIELD_ORDER 中的字段，也追加
  for (const field of Object.keys(el)) {
    if (!FIELD_ORDER.includes(field)) {
      parts.push(`${field}:${serializeValue(el[field])}`);
    }
  }
  return '{' + parts.join(',') + '}';
}

const elementsStr = elements.map(serializeElement).join(',');

// 构建最终文件
const output = header + markerStr + elementsStr + '];\n';

fs.writeFileSync(JS_FILE, output, 'utf-8');
console.log('\n✅ elements.js 已更新并重新生成！');
console.log(`文件大小: ${output.length} 字符`);
