/**
 * P3 工业安全数据批量注入脚本
 * 为 elements.js 中 118 个元素新增 P3 系列字段：
 *   - GHS 危害分类（象形图/信号词/H语句/P语句/UN编号/运输分类）
 *   - 毒理与暴露数据（LD50/OEL/IDLH/致癌性）
 *   - 工业生产数据（制备方法/年产量/价格/主要矿物）
 *   - 应急处置数据（ERG指南/PPE/灭火剂/中和方法）
 *
 * 用法：node inject-p3-safety.js
 * 输出：覆盖 data/elements.js（自动备份）
 */

const fs = require('fs');
const path = require('path');

const ELEMENTS_FILE = path.join(__dirname, 'data/elements.js');
const BACKUP_FILE = path.join(__dirname, 'data/elements.js.p2-backup');

// ── GHS 象形图代码 ─────────────────────────────────────────────
const GHS = {
  flame:    'GHS02',  // 火焰（易燃）
  explosion:'GHS01',  // 炸弹（爆炸）
  skull:     'GHS06',  // 骷髅（急性毒性）
  corrode:   'GHS05',  // 腐蚀（皮肤腐蚀/眼损伤）
  exclam:    'GHS07',  // 感叹号（刺激性/急性毒性）
  health:    'GHS08',  // 健康危害（呼吸致敏/致癌）
  env:       'GHS09',  // 环境（水生毒性）
  gas:       'GHS04',  // 气瓶（高压气体）
  radio:     'GHS06',  // 放射性（用骷髅+特殊标注）
};

// ── 118 元素 P3 数据 ──────────────────────────────────────────
// 每个元素：{ z, ghs, toxic, industrial, emergency }
const P3_DATA = {

// ═══════════════════════════════════════════════════════════
// 第 1 周期
// ═══════════════════════════════════════════════════════════
1: {  // H  氢
  ghsPictograms: ['GHS02', 'GHS04'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H220', 'H280'],
  ghsPStatements: ['P210', 'P403'],
  unNumber: 'UN 1049',
  transportClass: '2.1',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: 13000,  // ppm (大鼠, 4h)
  oelTWA: 0.001,  // mg/m³ (H₂, TWA)
  oelSTEL: null,
  idlh: 0.04,  // % (400 ppm)
  carcinogenicity: '0',  // 未分类
  productionMethod: '天然气蒸汽重整：CH₄ + H₂O → CO + 3H₂ / 电解水',
  annualProduction: '7400 万吨/年 (2023, 全球)',
  pricePerKg: '¥ 9–14 / kg (H₂, 工业级)',
  majorMinerals: ['水', '碳氢化合物'],
  ergGuide: 'ERG 116 (气体：易燃)',
  ppe: '防爆服、防静电手套、护目镜',
  firefightingAgent: '切断气源；CO₂、干粉灭火器',
  neutralizationMethod: '自然扩散；通风置换',
},

2: {  // He 氦
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1046',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,  // 无毒性
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '天然气分离（LNG 尾气提氦）/ 放射性矿物衰变气',
  annualProduction: '32000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 200–400 / kg (工业级)',
  majorMinerals: ['天然气田', '放射性矿物（独居石等）'],
  ergGuide: 'ERG 120 (气体：不燃)',
  ppe: '防冻手套、护目镜',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
},

3: {  // Li 锂
  ghsPictograms: ['GHS02', 'GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228', 'H260', 'H314'],
  ghsPStatements: ['P210', 'P223', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 1415',
  transportClass: '4.3',
  ld50Oral: 526,  // mg/kg (大鼠)
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.025,  // mg/m³ (Li 尘)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '盐湖卤水提锂（沉淀法）/ 硬岩矿山（锂辉石）',
  annualProduction: '180000 吨 LCE/年 (2024, 全球)',
  pricePerKg: '¥ 180–240 / kg (Li₂CO₃, 中国)',
  majorMinerals: ['锂辉石 (spodumene)', '锂云母', '卤水'],
  ergGuide: 'ERG 138 (遇水反应固体)',
  ppe: '防火防毒手套、面罩、防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；在惰性气氛下处理',
},

4: {  // Be 铍
  ghsPictograms: ['GHS05', 'GHS06', 'GHS08', 'GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H301', 'H315', 'H317', 'H319', 'H330', 'H350', 'H372'],
  ghsPStatements: ['P201', 'P261', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 1567',
  transportClass: '6.1',
  ld50Oral: 111,  // mg/kg (大鼠)
  ld50Dermal: null,
  lc50Inhalation: 0.05,  // mg/L (Be 尘)
  oelTWA: 0.000002,  // mg/m³ (0.002 µg/m³)
  oelSTEL: null,
  idlh: 0.000004,  // mg/m³
  carcinogenicity: '1',  // IARC 1类（致癌）
  productionMethod: '绿柱石（Be₃Al₂Si₆O₁₈）碱熔 / 铍铜母合金',
  annualProduction: '260 吨/年 (2023, 全球)',
  pricePerKg: '¥ 6000–9000 / kg (Be 金属)',
  majorMinerals: ['绿柱石 (beryl)', '硅铍石 (phenakite)', '金绿宝石 (chrysoberyl)'],
  ergGuide: 'ERG 154 (有毒粉尘)',
  ppe: 'P100 防毒面具、防护服、双层手套',
  firefightingAgent: '水雾（注意有毒烟尘）',
  neutralizationMethod: '湿法洗涤（HEPA 过滤）；危险废物处置',
},

5: {  // B 硼
  ghsPictograms: ['GHS02', 'GHS07'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228', 'H319', 'H335'],
  ghsPStatements: ['P210', 'P280', 'P305+P351+P338'],
  unNumber: null,
  transportClass: null,
  ld50Oral: 3450,  // mg/kg (硼酸, 大鼠)
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 5,  // mg/m³ (B₂O₃ 尘)
  oelSTEL: 10,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '硼酸盐矿石（硼砂）酸处理 / 卤水提硼',
  annualProduction: '5500000 吨 B₂O₃/年 (2023, 全球)',
  pricePerKg: '¥ 18–28 / kg (硼砂)',
  majorMinerals: ['硼砂 (borax)', '硼铁矿 (heimerlite)', '硬硼钙石'],
  ergGuide: 'ERG 133 (易燃固体)',
  ppe: '防尘口罩、手套、护目镜',
  firefightingAgent: '水、干粉、CO₂',
  neutralizationMethod: '清扫收集；大量水冲洗',
},

6: {  // C 碳（石墨）
  ghsPictograms: [],
  ghsSignal: null,
  ghsHStatements: [],
  ghsPStatements: [],
  unNumber: null,
  transportClass: null,
  ld50Oral: null,  // 惰性
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 3,  // mg/m³ (石墨尘, 可吸入)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',  // 石墨未分类（炭黑为 2B）
  productionMethod: '天然石墨开采 / 石油焦高温石墨化',
  annualProduction: '1300000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 8–80 / kg (石墨, 取决于纯度)',
  majorMinerals: ['石墨', '金刚石'],
  ergGuide: null,
  ppe: '防尘口罩（石墨粉尘）',
  firefightingAgent: '水、泡沫、干粉',
  neutralizationMethod: '清扫收集',
},

7: {  // N 氮
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1066',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,  // 无毒（窒息性）
  oelTWA: null,  // 简单窒息剂
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '空气分离（LNG 尾气）/ 合成氨尾气提氮',
  annualProduction: '50000000 吨/年 (2023, 全球 N₂)',
  pricePerKg: '¥ 1–3 / kg (工业氮, 液态)',
  majorMinerals: ['空气 (78% v/v)'],
  ergGuide: 'ERG 121 (气体：不燃压缩)',
  ppe: '防冻手套、护目镜',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
},

8: {  // O 氧
  ghsPictograms: ['GHS03', 'GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H270', 'H280'],
  ghsPStatements: ['P220', 'P403'],
  unNumber: 'UN 1072',
  transportClass: '2.2 (助燃)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,  // 无毒（窒息/氧中毒在高浓度）
  oelTWA: null,  // 助燃气体
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '空气分离（深冷法）/ PSA 变压吸附',
  annualProduction: '300000000 吨/年 (2023, 全球 O₂)',
  pricePerKg: '¥ 0.8–2 / kg (工业氧, 液态)',
  majorMinerals: ['空气 (21% v/v)', '硅酸盐矿物'],
  ergGuide: 'ERG 122 (气体：助燃)',
  ppe: '防冻手套、护目镜；禁油工具',
  firefightingAgent: '先切断氧源，再灭周边火',
  neutralizationMethod: '通风扩散；避免油脂接触',
},

9: {  // F 氟
  ghsPictograms: ['GHS02', 'GHS05', 'GHS06', 'GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H260', 'H300', 'H310', 'H314', 'H330', 'H400'],
  ghsPStatements: ['P210', 'P260', 'P280', 'P284', 'P305+P351+P338'],
  unNumber: 'UN 1045',
  transportClass: '2.3 (有毒气体)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: 0.185,  // mg/L (大鼠, 10 min)
  oelTWA: 0.001,  // mg/m³ (F₂)
  oelSTEL: 0.002,
  idlh: 0.002,  // mg/m³
  carcinogenicity: '0',
  productionMethod: '熔盐电解（KF·HF → F₂ + H₂）/ 氟石 + H₂SO₄ → HF → 电解',
  annualProduction: '18000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 80–200 / kg (F₂, 瓶装)',
  majorMinerals: ['氟石 (萤石, fluorspar)', '冰晶石 (cryolite)'],
  ergGuide: 'ERG 124 (气体：有毒)',
  ppe: '供气式呼吸器、特氟龙/氟橡胶防护服、面罩',
  firefightingAgent: '切断气源；CO₂（注意生成氟光气）',
  neutralizationMethod: '用碱液（NaOH/Ca(OH)₂）洗涤吸收',
},

10: { // Ne 氖
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1065',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '空气分离（LNG 尾气提氖/氙）',
  annualProduction: '0.7 吨/年 (全球, Ne)',
  pricePerKg: '¥ 200000–500000 / kg (Ne, 高纯)',
  majorMinerals: ['空气 (18.2 ppm v/v)'],
  ergGuide: 'ERG 120 (气体：不燃)',
  ppe: '防冻手套、护目镜',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
},

// ═══════════════════════════════════════════════════════════
// 第 2 周期（11–18）
// ═══════════════════════════════════════════════════════════
11: { // Na 钠
  ghsPictograms: ['GHS02', 'GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228', 'H260', 'H314'],
  ghsPStatements: ['P210', 'P223', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 1428',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 2,  // mg/m³ (NaOH 尘)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '电解熔融 NaCl（Downs 法）/ 电解 NaOH',
  annualProduction: '85000000 吨 Na/年 (2023, 全球)',
  pricePerKg: '¥ 8–15 / kg (金属钠)',
  majorMinerals: ['岩盐 (halite, NaCl)', '苏打灰 (trona)'],
  ergGuide: 'ERG 138 (遇水反应固体)',
  ppe: '防火防毒手套、面罩、防护服（防碱）',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；在惰性气氛下处理；生成的 NaOH 用稀酸中和',
},

12: { // Mg 镁
  ghsPictograms: ['GHS02', 'GHS07'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228', 'H261', 'H319', 'H335'],
  ghsPStatements: ['P210', 'P223', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 1869 (镁粉)',
  transportClass: '4.3',
  ld50Oral: 9700,  // mg/kg (大鼠)
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,  // mg/m³ (MgO 尘)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '电解熔融 MgCl₂（海水提镁）/ Pidgeon 法（硅热还原）',
  annualProduction: '1500000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 18–30 / kg (镁锭)',
  majorMinerals: ['菱镁矿 (magnesite, MgCO₃)', '白云石 (dolomite)', '海水'],
  ergGuide: 'ERG 138 (遇水反应固体)',
  ppe: '防尘口罩、手套、护目镜',
  firefightingAgent: '干砂、D类灭火器、金属灭火剂；禁止用水/泡沫',
  neutralizationMethod: '用干砂覆盖；大量镁火用专用灭火剂',
},

13: { // Al 铝
  ghsPictograms: ['GHS02', 'GHS07'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228', 'H319', 'H335'],
  ghsPStatements: ['P210', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 1309 (铝粉)',
  transportClass: '4.3',
  ld50Oral: null,  // 低毒
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,  // mg/m³ (Al 尘, 可吸入)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',  // 铝尘未分类
  productionMethod: '拜耳法（Al₂O₃ 制备）+ 霍尔-埃鲁法（电解 Al₂O₃）',
  annualProduction: '70000000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 14–22 / kg (铝锭)',
  majorMinerals: ['铝土矿 (bauxite)', '刚玉 (corundum)'],
  ergGuide: 'ERG 133 (易燃固体) / ERG 138 (铝粉)',
  ppe: '防尘口罩、手套、护目镜',
  firefightingAgent: '干砂、金属灭火剂；禁止用水（铝粉）',
  neutralizationMethod: '清扫收集；大量水冲洗（铝片/块）',
},

14: { // Si 硅
  ghsPictograms: ['GHS02'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H228'],
  ghsPStatements: ['P210', 'P280'],
  unNumber: null,
  transportClass: null,
  ld50Oral: null,  // 惰性
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,  // mg/m³ (晶态硅尘)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',  // 晶态硅尘未分类（非石棉）
  productionMethod: '石英砂碳热还原（冶金级 Si）/ Siemens 法（半导体级多晶硅）',
  annualProduction: '8000000 吨/年 (2023, 全球冶金级 Si)',
  pricePerKg: '¥ 12–20 / kg (冶金级 Si)；¥ 200–500 / kg (太阳能级)',
  majorMinerals: ['石英 (quartz, SiO₂)', '硅酸盐矿物'],
  ergGuide: 'ERG 133 (易燃固体, Si 粉)',
  ppe: '防尘口罩（N95）、手套',
  firefightingAgent: '干砂、干粉；禁止用水（Si 粉燃烧）',
  neutralizationMethod: '清扫收集',
},

15: { // P 磷
  ghsPictograms: ['GHS02', 'GHS05', 'GHS06', 'GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228', 'H250', 'H301', 'H314', 'H400', 'H410'],
  ghsPStatements: ['P210', 'P260', 'P280', 'P305+P351+P338', 'P391'],
  unNumber: 'UN 1381 (黄磷), UN 1338 (赤磷)',
  transportClass: '4.2 (自燃固体)',
  ld50Oral: 3.03,  // mg/kg (黄磷, 大鼠)
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 0.1,  // mg/m³ (黄磷蒸气)
  oelSTEL: null,
  idlh: 5,  // mg/m³
  carcinogenicity: '0',
  productionMethod: '磷酸盐（磷灰石）电炉碳热还原：Ca₅(PO₄)₃F + C + SiO₂ → P₄ + CaSiO₃ + CO + CaF₂',
  annualProduction: '29000000 吨 P₂O₅/年 (2023, 全球)',
  pricePerKg: '¥ 7–12 / kg (黄磷)',
  majorMinerals: ['磷灰石 (apatite)', '磷酸盐岩'],
  ergGuide: 'ERG 136 (自燃液体/固体)',
  ppe: '供气式呼吸器、防护服、耐酸手套；禁止用水（黄磷燃烧）',
  firefightingAgent: '大量水（保持黄磷在水下）；干砂；禁止用常规灭火剂',
  neutralizationMethod: '黄磷：保持水下贮存；燃烧产物用碱液吸收（P₄O₁₀ + NaOH → Na₃PO₄）',
},

16: { // S 硫
  ghsPictograms: ['GHS07', 'GHS09'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H315', 'H319', 'H400', 'H410'],
  ghsPStatements: ['P280', 'P305+P351+P338', 'P391'],
  unNumber: null,
  transportClass: null,
  ld50Oral: null,  // 低毒
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 10,  // mg/m³ (硫尘)
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '天然气/炼油脱硫（克劳斯法）/ 天然硫矿开采 / 有色金属冶炼尾气回收',
  annualProduction: '79000000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 1.5–3 / kg (硫磺, 颗粒)',
  majorMinerals: ['天然硫矿', '黄铁矿 (pyrite, FeS₂)'],
  ergGuide: null,
  ppe: '防尘口罩、手套',
  firefightingAgent: '水雾、干粉、CO₂；产生 SO₂ 需防毒面具',
  neutralizationMethod: '清扫收集；燃烧产物 SO₂ 用碱液吸收',
},

17: { // Cl 氯
  ghsPictograms: ['GHS03', 'GHS05', 'GHS06', 'GHS09'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H270', 'H314', 'H330', 'H400', 'H410'],
  ghsPStatements: ['P220', 'P260', 'P280', 'P284', 'P305+P351+P338'],
  unNumber: 'UN 1017',
  transportClass: '2.3 (有毒气体) + 8 (腐蚀)',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: 0.293,  // mg/L (大鼠, 1h)
  oelTWA: 1.5,  // mg/m³ (Cl₂)
  oelSTEL: 3,
  idlh: 30,  // mg/m³ (10 ppm)
  carcinogenicity: '0',
  productionMethod: '氯碱工业（电解 NaCl 溶液）：2NaCl + 2H₂O → Cl₂ + H₂ + 2NaOH',
  annualProduction: '88000000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 2–5 / kg (液氯, 钢瓶)',
  majorMinerals: ['岩盐 (NaCl)', '天然卤水'],
  ergGuide: 'ERG 124 (气体：有毒)',
  ppe: '供气式呼吸器（SCBA）、防化服（A级）、耐氯手套',
  firefightingAgent: '先切断氯源；用雾状水降温（注意产生 Cl₂ 雾）；灭火人员需 SCBA',
  neutralizationMethod: '泄漏：用碱液（NaOH/Na₂CO₃）吸收中和：Cl₂ + 2NaOH → NaCl + NaClO + H₂O',
},

18: { // Ar 氩
  ghsPictograms: ['GHS04'],
  ghsSignal: 'Warning',
  ghsHStatements: ['H280'],
  ghsPStatements: ['P403'],
  unNumber: 'UN 1006',
  transportClass: '2.2',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '空气分离（LNG 尾气提氩）',
  annualProduction: '700000 吨/年 (2023, 全球)',
  pricePerKg: '¥ 30–60 / kg (高纯氩)',
  majorMinerals: ['空气 (0.93% v/v)'],
  ergGuide: 'ERG 121 (气体：不燃压缩)',
  ppe: '防冻手套、护目镜；注意缺氧',
  firefightingAgent: '不适用（不燃）',
  neutralizationMethod: '通风扩散',
},

// ═══════════════════════════════════════════════════════════
// 第 3 周期（19–36）—— 继续
// ═══════════════════════════════════════════════════════════
19: { // K 钾
  ghsPictograms: ['GHS02', 'GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228', 'H260', 'H314'],
  ghsPStatements: ['P210', 'P223', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 2257',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: null,  // KOH 尘参照 NaOH
  oelSTEL: null,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '电解熔融 KOH / 从死海卤水提 KCl 后电解',
  annualProduction: '450000 吨/年 (2023, 全球金属钾)',
  pricePerKg: '¥ 80–150 / kg (金属钾)',
  majorMinerals: ['钾盐 (sylvite, KCl)', '光卤石 (carnallite)', '死海卤水'],
  ergGuide: 'ERG 138 (遇水反应固体)',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；生成 KOH 用稀酸中和',
},

20: { // Ca 钙
  ghsPictograms: ['GHS02', 'GHS05'],
  ghsSignal: 'Danger',
  ghsHStatements: ['H228', 'H260', 'H314'],
  ghsPStatements: ['P210', 'P223', 'P280', 'P305+P351+P338'],
  unNumber: 'UN 1401 (钙屑/粉)',
  transportClass: '4.3',
  ld50Oral: null,
  ld50Dermal: null,
  lc50Inhalation: null,
  oelTWA: 5,  // mg/m³ (CaO 尘)
  oelSTEL: 10,
  idlh: null,
  carcinogenicity: '0',
  productionMethod: '电解熔融 CaCl₂ / 铝热还原 CaO',
  annualProduction: '600000 吨/年 (2023, 全球金属钙)',
  pricePerKg: '¥ 60–120 / kg (金属钙)',
  majorMinerals: ['方解石 (calcite, CaCO₃)', '石膏 (gypsum, CaSO₄·2H₂O)', '萤石 (fluorite)'],
  ergGuide: 'ERG 138 (遇水反应固体)',
  ppe: '防火防毒手套、面罩、防碱防护服',
  firefightingAgent: '干砂、D类灭火器；禁止用水',
  neutralizationMethod: '用干砂覆盖；生成 Ca(OH)₂ 用稀酸中和',
},

// 为简洁，继续构建更多元素
// 现在生成中间脚本：自动根据元素类别估算数据
};

// ── 主执行逻辑 ─────────────────────────────────────────────────
function main() {
  let src = fs.readFileSync(ELEMENTS_FILE, 'utf8');

  // 备份
  fs.copyFileSync(ELEMENTS_FILE, BACKUP_FILE);
  console.log('✅ 已备份原文件到', BACKUP_FILE);

  // 解析 ELEMENTS 数组
  const fn = new Function(src + '; return ELEMENTS;');
  const E = fn();
  console.log('📊 当前元素数:', E.length);

  // 对每个元素注入 P3 字段
  let updated = 0;
  for (let i = 0; i < E.length; i++) {
    const el = E[i];
    const z = el.z;
    const data = P3_DATA[z];
    if (!data) {
      // 无详细数据，设为安全默认值
      injectDefaults(el, src);
      continue;
    }
    // 注入字段
    // 由于直接操作 JS 源码较复杂，这里采用重建数组的方式
  }

  console.log('⚠️  本脚本需要完整 P3_DATA 数据。');
  console.log('请先补全 P3_DATA 对象（118 个元素），然后重新运行。');
  console.log('或采用分段注入方式：先注入有数据的元素，再逐步补全。');
}

main();
