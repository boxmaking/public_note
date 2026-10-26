/**
 * P3 工业安全数据注入脚本（完整版）
 * 用法：node inject-p3.js
 * 输出：覆盖 data/elements.js（自动备份到 elements.js.p2-backup）
 *
 * 注入字段：
 *   ghsPictograms, ghsSignal, ghsHStatements, ghsPStatements,
 *   unNumber, transportClass,
 *   ld50Oral, ld50Dermal, lc50Inhalation,
 *   oelTWA, oelSTEL, idlh, carcinogenicity,
 *   pricePerKg, majorMinerals,
 *   ergGuide, ppe, firefightingAgent, neutralizationMethod
 */

const fs = require('fs');
const path = require('path');

const ELEMENTS_FILE = path.join(__dirname, 'data/elements.js');
const BACKUP_FILE  = path.join(__dirname, 'data/elements.js.p2-backup');

// ══════════════════════════════════════════════════════════
//  P3 数据主表（按 z 索引）
// ══════════════════════════════════════════════════════════
const P3 = {
  // ── 第 1 周期 ────────────────────────────────────────────
  1: {  // H 氢
    ghsPictograms: ['GHS02','GHS04'],
    ghsSignal:'Danger', ghsHStatements:['H220','H280'], ghsPStatements:['P210','P403'],
    unNumber:'UN 1049', transportClass:'2.1',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:13000,
    oelTWA:0.001, oelSTEL:null, idlh:0.04, carcinogenicity:'0',
    pricePerKg:'¥ 9–14 / kg (H₂, 工业级)',
    majorMinerals:['水','碳氢化合物','天然气'],
    ergGuide:'ERG 116', ppe:'防爆服、防静电手套、护目镜',
    firefightingAgent:'切断气源；CO₂、干粉', neutralizationMethod:'自然扩散；通风置换'
  },
  2: {  // He 氦
    ghsPictograms:['GHS04'], ghsSignal:'Warning', ghsHStatements:['H280'], ghsPStatements:['P403'],
    unNumber:'UN 1046', transportClass:'2.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 200–400 / kg (工业级)',
    majorMinerals:['天然气田','放射性矿物'],
    ergGuide:'ERG 120', ppe:'防冻手套、护目镜',
    firefightingAgent:'不适用（不燃）', neutralizationMethod:'通风扩散'
  },
  3: {  // Li 锂
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 1415', transportClass:'4.3',
    ld50Oral:526, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.025, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 180–240 / kg (Li₂CO₃, 中国)',
    majorMinerals:['锂辉石 (spodumene)','锂云母','卤水'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水', neutralizationMethod:'用干砂覆盖；惰性气氛下处理'
  },
  4: {  // Be 铍
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H315','H317','H319','H330','H350','H372'],
    ghsPStatements:['P201','P261','P280','P305+P351+P338'],
    unNumber:'UN 1567', transportClass:'6.1',
    ld50Oral:111, ld50Dermal:null, lc50Inhalation:0.05,
    oelTWA:0.000002, oelSTEL:null, idlh:0.000004, carcinogenicity:'1',
    pricePerKg:'¥ 6000–9000 / kg (Be 金属)',
    majorMinerals:['绿柱石 (beryl)','硅铍石 (phenakite)','金绿宝石 (chrysoberyl)'],
    ergGuide:'ERG 154', ppe:'P100 防毒面具、防护服、双层手套',
    firefightingAgent:'水雾（注意有毒烟尘）', neutralizationMethod:'湿法洗涤（HEPA过滤）；危险废物处置'
  },
  5: {  // B 硼
    ghsPictograms:['GHS02','GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H228','H319','H335'], ghsPStatements:['P210','P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:3450, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:10, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 18–28 / kg (硼砂)',
    majorMinerals:['硼砂 (borax)','硼铁矿','硬硼钙石'],
    ergGuide:'ERG 133', ppe:'防尘口罩、手套、护目镜',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集；大量水冲洗'
  },
  6: {  // C 碳（石墨）
    ghsPictograms:[], ghsSignal:null, ghsHStatements:[], ghsPStatements:[],
    unNumber:null, transportClass:null,
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:3, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 8–80 / kg (石墨, 取决于纯度)',
    majorMinerals:['石墨','金刚石'],
    ergGuide:null, ppe:'防尘口罩（石墨粉尘）',
    firefightingAgent:'水、泡沫、干粉', neutralizationMethod:'清扫收集'
  },
  7: {  // N 氮
    ghsPictograms:['GHS04'], ghsSignal:'Warning', ghsHStatements:['H280'], ghsPStatements:['P403'],
    unNumber:'UN 1066', transportClass:'2.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 1–3 / kg (工业氮, 液态)',
    majorMinerals:['空气 (78% v/v)'],
    ergGuide:'ERG 121', ppe:'防冻手套、护目镜',
    firefightingAgent:'不适用（不燃）', neutralizationMethod:'通风扩散'
  },
  8: {  // O 氧
    ghsPictograms:['GHS03','GHS04'], ghsSignal:'Warning',
    ghsHStatements:['H270','H280'], ghsPStatements:['P220','P403'],
    unNumber:'UN 1072', transportClass:'2.2 (助燃)',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 0.8–2 / kg (工业氧, 液态)',
    majorMinerals:['空气 (21% v/v)','硅酸盐矿物'],
    ergGuide:'ERG 122', ppe:'防冻手套、护目镜；禁油工具',
    firefightingAgent:'先切断氧源，再灭周边火', neutralizationMethod:'通风扩散；避免油脂接触'
  },
  9: {  // F 氟
    ghsPictograms:['GHS02','GHS05','GHS06','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H260','H300','H310','H314','H330','H400'],
    ghsPStatements:['P210','P260','P280','P284','P305+P351+P338'],
    unNumber:'UN 1045', transportClass:'2.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:0.185,
    oelTWA:0.001, oelSTEL:0.002, idlh:0.002, carcinogenicity:'0',
    pricePerKg:'¥ 80–200 / kg (F₂, 瓶装)',
    majorMinerals:['萤石 (fluorite)','冰晶石 (cryolite)'],
    ergGuide:'ERG 124', ppe:'供气式呼吸器、特氟龙/氟橡胶防护服、面罩',
    firefightingAgent:'切断气源；CO₂（注意生成氟光气）',
    neutralizationMethod:'用碱液（NaOH/Ca(OH)₂）洗涤吸收'
  },
  10: { // Ne 氖
    ghsPictograms:['GHS04'], ghsSignal:'Warning', ghsHStatements:['H280'], ghsPStatements:['P403'],
    unNumber:'UN 1065', transportClass:'2.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 200000–500000 / kg (Ne, 高纯)',
    majorMinerals:['空气 (18.2 ppm v/v)'],
    ergGuide:'ERG 120', ppe:'防冻手套、护目镜',
    firefightingAgent:'不适用（不燃）', neutralizationMethod:'通风扩散'
  },

  // ── 第 2 周期 ────────────────────────────────────────────
  11: { // Na 钠
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 1428', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:2, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 8–15 / kg (金属钠)',
    majorMinerals:['岩盐 (halite, NaCl)','苏打灰 (trona)'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防碱防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水',
    neutralizationMethod:'用干砂覆盖；生成的 NaOH 用稀酸中和'
  },
  12: { // Mg 镁
    ghsPictograms:['GHS02','GHS07'], ghsSignal:'Danger',
    ghsHStatements:['H228','H261','H319','H335'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 1869', transportClass:'4.3',
    ld50Oral:9700, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:10, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 18–30 / kg (镁锭)',
    majorMinerals:['菱镁矿 (magnesite)','白云石 (dolomite)','海水'],
    ergGuide:'ERG 138', ppe:'防尘口罩、手套、护目镜',
    firefightingAgent:'干砂、D类灭火器、金属灭火剂；禁止用水/泡沫',
    neutralizationMethod:'用干砂覆盖；大量镁火用专用灭火剂'
  },
  13: { // Al 铝
    ghsPictograms:['GHS02','GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H228','H319','H335'], ghsPStatements:['P210','P280','P305+P351+P338'],
    unNumber:'UN 1309', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:10, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 14–22 / kg (铝锭)',
    majorMinerals:['铝土矿 (bauxite)','刚玉 (corundum)'],
    ergGuide:'ERG 133 / ERG 138 (铝粉)', ppe:'防尘口罩、手套、护目镜',
    firefightingAgent:'干砂、金属灭火剂；禁止用水（铝粉）',
    neutralizationMethod:'清扫收集；大量水冲洗（铝片/块）'
  },
  14: { // Si 硅
    ghsPictograms:['GHS02'], ghsSignal:'Warning', ghsHStatements:['H228'], ghsPStatements:['P210','P280'],
    unNumber:null, transportClass:null,
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:10, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 12–20 / kg (冶金级 Si)；¥ 200–500 / kg (太阳能级)',
    majorMinerals:['石英 (quartz)','硅酸盐矿物'],
    ergGuide:'ERG 133 (Si 粉)', ppe:'防尘口罩（N95）、手套',
    firefightingAgent:'干砂、干粉；禁止用水（Si 粉燃烧）',
    neutralizationMethod:'清扫收集'
  },
  15: { // P 磷（黄磷）
    ghsPictograms:['GHS02','GHS05','GHS06','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H228','H250','H301','H314','H400','H410'],
    ghsPStatements:['P210','P260','P280','P305+P351+P338','P391'],
    unNumber:'UN 1381 (黄磷), UN 1338 (赤磷)', transportClass:'4.2',
    ld50Oral:3.03, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.1, oelSTEL:null, idlh:5, carcinogenicity:'0',
    pricePerKg:'¥ 7–12 / kg (黄磷)',
    majorMinerals:['磷灰石 (apatite)','磷酸盐岩'],
    ergGuide:'ERG 136', ppe:'供气式呼吸器、防护服、耐酸手套',
    firefightingAgent:'大量水（保持黄磷在水下）；禁止用常规灭火剂',
    neutralizationMethod:'黄磷：保持水下贮存；燃烧产物用碱液吸收（P₄O₁₀ + NaOH → Na₃PO₄）'
  },
  16: { // S 硫
    ghsPictograms:['GHS07','GHS09'], ghsSignal:'Warning',
    ghsHStatements:['H315','H319','H400','H410'], ghsPStatements:['P280','P305+P351+P338','P391'],
    unNumber:null, transportClass:null,
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:10, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 1.5–3 / kg (硫磺, 颗粒)',
    majorMinerals:['天然硫矿','黄铁矿 (pyrite)'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水雾、干粉、CO₂；产生 SO₂ 需防毒面具',
    neutralizationMethod:'清扫收集；燃烧产物 SO₂ 用碱液吸收'
  },
  17: { // Cl 氯
    ghsPictograms:['GHS03','GHS05','GHS06','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H270','H314','H330','H400','H410'],
    ghsPStatements:['P220','P260','P280','P284','P305+P351+P338'],
    unNumber:'UN 1017', transportClass:'2.3+8',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:0.293,
    oelTWA:1.5, oelSTEL:3, idlh:30, carcinogenicity:'0',
    pricePerKg:'¥ 2–5 / kg (液氯, 钢瓶)',
    majorMinerals:['岩盐 (NaCl)','天然卤水'],
    ergGuide:'ERG 124', ppe:'供气式呼吸器（SCBA）、防化服（A级）、耐氯手套',
    firefightingAgent:'先切断氯源；用雾状水降温；灭火人员需 SCBA',
    neutralizationMethod:'泄漏：用碱液（NaOH/Na₂CO₃）吸收中和：Cl₂ + 2NaOH → NaCl + NaClO + H₂O'
  },
  18: { // Ar 氩
    ghsPictograms:['GHS04'], ghsSignal:'Warning', ghsHStatements:['H280'], ghsPStatements:['P403'],
    unNumber:'UN 1006', transportClass:'2.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 30–60 / kg (高纯氩)',
    majorMinerals:['空气 (0.93% v/v)'],
    ergGuide:'ERG 121', ppe:'防冻手套、护目镜；注意缺氧',
    firefightingAgent:'不适用（不燃）', neutralizationMethod:'通风扩散'
  },

  // ── 第 3 周期 ────────────────────────────────────────────
  19: { // K 钾
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 2257', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 80–150 / kg (金属钾)',
    majorMinerals:['钾盐 (sylvite)','光卤石 (carnallite)','死海卤水'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防碱防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水',
    neutralizationMethod:'用干砂覆盖；生成 KOH 用稀酸中和'
  },
  20: { // Ca 钙
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 1401', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:10, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 60–120 / kg (金属钙)',
    majorMinerals:['方解石 (calcite)','石膏 (gypsum)','萤石 (fluorite)'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防碱防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水',
    neutralizationMethod:'用干砂覆盖；生成 Ca(OH)₂ 用稀酸中和'
  },
  21: { // Sc 钪
    ghsPictograms:['GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H315','H319','H335'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 15000–30000 / kg (Sc 金属, 高纯)',
    majorMinerals:['钪钇石 (thortveitite)','黑钨矿（伴生）'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  22: { // Ti 钛
    ghsPictograms:['GHS02','GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H228','H319','H335'], ghsPStatements:['P210','P280','P305+P351+P338'],
    unNumber:'UN 2546 (钛粉)', transportClass:'4.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:10, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 60–120 / kg (钛锭)',
    majorMinerals:['钛铁矿 (ilmenite)','金红石 (rutile)','钙钛矿'],
    ergGuide:'ERG 133 (钛粉)', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂；钛粉火用干砂',
    neutralizationMethod:'清扫收集'
  },
  23: { // V 钒
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H319','H331','H370','H372'],
    ghsPStatements:['P201','P261','P280','P305+P351+P338'],
    unNumber:'UN 3285 (钒化合物)', transportClass:'6.1',
    ld50Oral:82, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.05, oelSTEL:null, idlh:null, carcinogenicity:'2B',  // IARC 2B
    pricePerKg:'¥ 800–1500 / kg (钒铁)',
    majorMinerals:['钒钛磁铁矿','钾钒铀矿 (carnotite)'],
    ergGuide:'ERG 154', ppe:'防毒面具、防护服、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；危险废物处置'
  },
  24: { // Cr 铬
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H317','H319','H350','H372','H410'],
    ghsPStatements:['P201','P261','P272','P280','P305+P351+P338'],
    unNumber:'UN 1755 (铬酸)', transportClass:'8',
    ld50Oral:190, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.5, oelSTEL:null, idlh:250, carcinogenicity:'1',  // Cr(VI) IARC 1
    pricePerKg:'¥ 40–80 / kg (金属铬)',
    majorMinerals:['铬铁矿 (chromite)'],
    ergGuide:'ERG 154', ppe:'供气式呼吸器、防化服、耐酸手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'还原 Cr(VI) 为 Cr(III) 后沉淀处置'
  },
  25: { // Mn 锰
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Danger',
    ghsHStatements:['H302','H315','H319','H332','H370','H372'],
    ghsPStatements:['P201','P260','P280','P305+P351+P338'],
    unNumber:'UN 3089 (锰粉)', transportClass:'9',
    ld50Oral:540, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.2, oelSTEL:null, idlh:500, carcinogenicity:'0',
    pricePerKg:'¥ 18–35 / kg (电解锰)',
    majorMinerals:['软锰矿 (pyrolusite)','菱锰矿 (rhodochrosite)'],
    ergGuide:'ERG 154', ppe:'防尘口罩（P100）、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含锰废液化学沉淀'
  },
  26: { // Fe 铁
    ghsPictograms:['GHS02','GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H228','H319','H335'], ghsPStatements:['P210','P280','P305+P351+P338'],
    unNumber:'UN 3089 (铁粉)', transportClass:'4.1',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:10, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 4–8 / kg (铁锭)',
    majorMinerals:['赤铁矿 (hematite)','磁铁矿 (magnetite)','菱铁矿 (siderite)'],
    ergGuide:'ERG 133 (铁粉)', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  27: { // Co 钴
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H317','H319','H332','H351','H372','H410'],
    ghsPStatements:['P201','P261','P272','P280','P305+P351+P338'],
    unNumber:'UN 3089 (钴粉)', transportClass:'6.1',
    ld50Oral:617, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.02, oelSTEL:0.05, idlh:null, carcinogenicity:'2B',  // IARC 2B
    pricePerKg:'¥ 400–800 / kg (金属钴)',
    majorMinerals:['砷钴矿 (skutterudite)','辉钴矿 (cobaltite)'],
    ergGuide:'ERG 154', ppe:'P100 防毒面具、防护服、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含钴废液沉淀处置'
  },
  28: { // Ni 镍
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H317','H319','H332','H351','H372','H410'],
    ghsPStatements:['P201','P261','P272','P280','P305+P351+P338'],
    unNumber:'UN 3089 (镍粉)', transportClass:'4.1 / 6.1',
    ld50Oral:890, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.1, oelSTEL:0.3, idlh:10, carcinogenicity:'1',  // Ni 化合物 IARC 1
    pricePerKg:'¥ 120–250 / kg (电解镍)',
    majorMinerals:['镍黄铁矿 (pentlandite)','红砷镍矿 (niccolite)'],
    ergGuide:'ERG 154', ppe:'P100 防毒面具、防护服、手套',
    firefightingAgent:'水、干粉、CO₂；镍粉火用干砂',
    neutralizationMethod:'湿法除尘；含镍废液沉淀回收'
  },
  29: { // Cu 铜
    ghsPictograms:['GHS05','GHS06','GHS09'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H400','H410'], ghsPStatements:['P280','P305+P351+P338','P391'],
    unNumber:'UN 3089 (铜粉)', transportClass:'9',
    ld50Oral:472, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:1, oelSTEL:2, idlh:100, carcinogenicity:'0',
    pricePerKg:'¥ 60–90 / kg (阴极铜)',
    majorMinerals:['黄铜矿 (chalcopyrite)','孔雀石 (malachite)','斑铜矿'],
    ergGuide:'ERG 133 (铜粉)', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集；含铜废液沉淀回收'
  },
  30: { // Zn 锌
    ghsPictograms:['GHS05','GHS06','GHS09'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H400','H410'], ghsPStatements:['P280','P305+P351+P338','P391'],
    unNumber:'UN 1433 (氧化锌)', transportClass:'9',
    ld50Oral:240, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:10, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 18–30 / kg (锌锭)',
    majorMinerals:['闪锌矿 (sphalerite)','菱锌矿 (smithsonite)'],
    ergGuide:'ERG 154', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集；含锌废液沉淀回收'
  },
  31: { // Ga 镓
    ghsPictograms:[], ghsSignal:null, ghsHStatements:[], ghsPStatements:[],
    unNumber:null, transportClass:null,
    ld50Oral:49, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 1800–3500 / kg (金属镓)',
    majorMinerals:['铝土矿（伴生）','闪锌矿（伴生）'],
    ergGuide:null, ppe:'手套、护目镜',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  32: { // Ge 锗
    ghsPictograms:['GHS06','GHS08'], ghsSignal:'Warning',
    ghsHStatements:['H301','H315','H319','H335'], ghsPStatements:['P261','P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:2680, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 8000–15000 / kg (金属锗)',
    majorMinerals:['硫银锗矿 (argyrodite)','锗石 (germanite)'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'危险废物处置'
  },
  33: { // As 砷
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H319','H331','H350','H372','H410'],
    ghsPStatements:['P201','P261','P280','P284','P305+P351+P338'],
    unNumber:'UN 1558', transportClass:'6.1',
    ld50Oral:15, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.01, oelSTEL:null, idlh:5, carcinogenicity:'1',  // IARC 1
    pricePerKg:'¥ 60–120 / kg (砷金属)',
    majorMinerals:['雄黄 (realgar)','雌黄 (orpiment)','毒砂 (arsenopyrite)'],
    ergGuide:'ERG 154', ppe:'供气式呼吸器、防化服、双层手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'还原为 As(0) 或沉淀为 FeAsO₄；危险废物处置'
  },
  34: { // Se 硒
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H315','H319','H331','H372','H410'],
    ghsPStatements:['P261','P280','P284','P305+P351+P338'],
    unNumber:'UN 3283', transportClass:'6.1',
    ld50Oral:7, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.1, oelSTEL:null, idlh:1, carcinogenicity:'3',  // IARC 3（未分类）
    pricePerKg:'¥ 800–2000 / kg (硒粉)',
    majorMinerals:['硒铜矿 (berzelianite)','伴生于硫化物矿'],
    ergGuide:'ERG 154', ppe:'防尘口罩（P100）、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含硒废液还原沉淀'
  },
  35: { // Br 溴
    ghsPictograms:['GHS05','GHS06','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H300','H310','H314','H330','H400','H410'],
    ghsPStatements:['P260','P280','P284','P305+P351+P338'],
    unNumber:'UN 1744', transportClass:'8',
    ld50Oral:14, ld50Dermal:null, lc50Inhalation:0.043,
    oelTWA:0.7, oelSTEL:null, idlh:4, carcinogenicity:'0',
    pricePerKg:'¥ 25–60 / kg (溴液)',
    majorMinerals:['天然卤水（伴生）','海水'],
    ergGuide:'ERG 156', ppe:'供气式呼吸器、防化服、耐溴手套',
    firefightingAgent:'切断溴源；用雾状水降温；灭火剂需防爆',
    neutralizationMethod:'用 Na₂S₂O₃ 或 FeSO₄ 还原为 Br⁻ 后中和'
  },
  36: { // Kr 氪
    ghsPictograms:['GHS04'], ghsSignal:'Warning', ghsHStatements:['H280'], ghsPStatements:['P403'],
    unNumber:'UN 1056', transportClass:'2.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 10000–30000 / kg (Kr, 高纯)',
    majorMinerals:['空气 (1.14 ppm v/v)'],
    ergGuide:'ERG 120', ppe:'防冻手套、护目镜',
    firefightingAgent:'不适用（不燃）', neutralizationMethod:'通风扩散'
  },

  // ══════════════════════════════════════════════════════════
  //  第 4 周期（37–54）—— 精选
  // ══════════════════════════════════════════════════════════
  37: { // Rb 铷
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 3023', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 2000–5000 / kg (金属铷)',
    majorMinerals:['锂云母（伴生）','铯榴石（伴生）'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防碱防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水',
    neutralizationMethod:'用干砂覆盖；生成 RbOH 用稀酸中和'
  },
  38: { // Sr 锶
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 1408', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 600–1500 / kg (碳酸锶)',
    majorMinerals:['天青石 (celestine)','菱锶矿 (strontianite)'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防碱防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水',
    neutralizationMethod:'用干砂覆盖；生成 Sr(OH)₂ 用稀酸中和'
  },
  39: { // Y 钇
    ghsPictograms:['GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H315','H319','H335'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:540, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:1, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 300–800 / kg (氧化钇)',
    majorMinerals:['独居石 (monazite)','氟碳铈矿 (bastnasite)'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  40: { // Zr 锆
    ghsPictograms:['GHS02','GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H228','H319','H335'], ghsPStatements:['P210','P280','P305+P351+P338'],
    unNumber:'UN 2008 (锆粉)', transportClass:'4.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 200–500 / kg (海绵锆)',
    majorMinerals:['锆石 (zircon)','斜锆石 (baddeleyite)'],
    ergGuide:'ERG 136 (锆粉)', ppe:'防尘口罩、手套',
    firefightingAgent:'干砂、金属灭火剂；禁止用水（锆粉）',
    neutralizationMethod:'清扫收集'
  },
  41: { // Nb 铌
    ghsPictograms:['GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H315','H319','H335'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 400–1000 / kg (铌铁)',
    majorMinerals:['铌铁矿 (columbite)','烧绿石 (pyrochlore)'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  42: { // Mo 钼
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H372'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:'UN 3089 (钼粉)', transportClass:'9',
    ld50Oral:1800, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:5, oelSTEL:10, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 300–700 / kg (钼铁)',
    majorMinerals:['辉钼矿 (molybdenite)','彩钼铅矿'],
    ergGuide:'ERG 154', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集；含钼废液沉淀处置'
  },
  43: { // Tc 锝（人工元素，放射性）
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Danger',
    ghsHStatements:['H301','H315','H319','H350','H372'], ghsPStatements:['P201','P280','P305+P351+P338'],
    unNumber:null, transportClass:'7 (放射性)',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.000001, oelSTEL:null, idlh:0.000003, carcinogenicity:'1',  // 放射性致癌
    pricePerKg:'¥ 10000000+ / kg (Tc-99, 估算)',
    majorMinerals:[],
    ergGuide:'ERG 161 (放射性)', ppe:'辐射防护服、呼吸器、手套',
    firefightingAgent:'按放射性物质应急预案', neutralizationMethod:'放射性废物处置（专用设施）'
  },
  44: { // Ru 钌
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H372'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:'UN 3089 (钌粉)', transportClass:'9',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:1, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 50000–120000 / kg (钌金属)',
    majorMinerals:['镍黄铁矿（伴生）','铜镍硫化物矿'],
    ergGuide:'ERG 154', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'危险废物处置'
  },
  45: { // Rh 铑
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H372'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:'UN 3089 (铑粉)', transportClass:'9',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:1, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 400000–800000 / kg (铑金属)',
    majorMinerals:['镍黄铁矿（伴生）','铂族矿物'],
    ergGuide:'ERG 154', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'危险废物处置'
  },
  46: { // Pd 钯
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H372'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:'UN 3089 (钯粉)', transportClass:'9',
    ld50Oral:200, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:1, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 60000–150000 / kg (钯金属)',
    majorMinerals:['镍黄铁矿（伴生）','铂族矿物'],
    ergGuide:'ERG 154', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'危险废物处置'
  },
  47: { // Ag 银
    ghsPictograms:['GHS05','GHS06','GHS09'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H400','H410'], ghsPStatements:['P280','P305+P351+P338','P391'],
    unNumber:null, transportClass:null,
    ld50Oral:5000, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.1, oelSTEL:null, idlh:10, carcinogenicity:'0',
    pricePerKg:'¥ 6000–12000 / kg (银条)',
    majorMinerals:['自然银','辉银矿 (argentite)','角银矿 (cerargyrite)'],
    ergGuide:null, ppe:'手套、护目镜',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集；含银废液沉淀回收'
  },
  48: { // Cd 镉
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H319','H350','H372','H410'],
    ghsPStatements:['P201','P261','P280','P305+P351+P338'],
    unNumber:'UN 2570', transportClass:'6.1',
    ld50Oral:72, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.002, oelSTEL:0.01, idlh:9, carcinogenicity:'1',  // IARC 1
    pricePerKg:'¥ 1500–3500 / kg (镉金属)',
    majorMinerals:['硫镉矿 (greenockite)','闪锌矿（伴生）'],
    ergGuide:'ERG 154', ppe:'P100 防毒面具、防护服、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含镉废液沉淀为 CdS/Cd(OH)₂ 处置'
  },
  49: { // In 铟
    ghsPictograms:['GHS05','GHS06'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:1560, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 1500–3000 / kg (铟锭)',
    majorMinerals:['闪锌矿（伴生）'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集；含铟废液回收'
  },
  50: { // Sn 锡
    ghsPictograms:['GHS05','GHS06','GHS09'], ghsSignal:'Warning',
    ghsHStatements:['H302','H315','H319','H400','H410'], ghsPStatements:['P280','P305+P351+P338','P391'],
    unNumber:null, transportClass:null,
    ld50Oral:1400, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:2, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 180–350 / kg (锡锭)',
    majorMinerals:['锡石 (cassiterite)'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  51: { // Sb 锑
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H319','H331','H350','H372','H410'],
    ghsPStatements:['P201','P261','P280','P284','P305+P351+P338'],
    unNumber:'UN 2871', transportClass:'6.1',
    ld50Oral:20, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.5, oelSTEL:null, idlh:50, carcinogenicity:'2B',  // IARC 2B
    pricePerKg:'¥ 60–150 / kg (锑锭)',
    majorMinerals:['辉锑矿 (stibnite)','方锑矿 (senarmontite)'],
    ergGuide:'ERG 154', ppe:'P100 防毒面具、防护服、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含锑废液沉淀处置'
  },
  52: { // Te 碲
    ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H301','H311','H315','H319','H331','H372','H410'],
    ghsPStatements:['P261','P280','P284','P305+P351+P338'],
    unNumber:'UN 3288', transportClass:'6.1',
    ld50Oral:20, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.1, oelSTEL:null, idlh:25, carcinogenicity:'3',
    pricePerKg:'¥ 1200–3000 / kg (碲金属)',
    majorMinerals:['碲金矿 (calaverite)','伴生于硫化物矿'],
    ergGuide:'ERG 154', ppe:'防尘口罩（P100）、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含碲废液沉淀处置'
  },
  53: { // I 碘
    ghsPictograms:['GHS05','GHS06','GHS09'], ghsSignal:'Danger',
    ghsHStatements:['H300','H310','H314','H330','H400','H410'],
    ghsPStatements:['P260','P280','P284','P305+P351+P338'],
    unNumber:'UN 1759', transportClass:'8',
    ld50Oral:14, ld50Dermal:null, lc50Inhalation:0.026,
    oelTWA:1, oelSTEL:null, idlh:10, carcinogenicity:'0',
    pricePerKg:'¥ 300–800 / kg (碘片)',
    majorMinerals:['智利硝石（伴生）','海草（富集）'],
    ergGuide:'ERG 156', ppe:'防毒面具、耐碘手套、护目镜',
    firefightingAgent:'切断碘源；用雾状水降温',
    neutralizationMethod:'用 Na₂S₂O₃ 还原为 I⁻ 后中和；大量碘用淀粉检测'
  },
  54: { // Xe 氙
    ghsPictograms:['GHS04'], ghsSignal:'Warning', ghsHStatements:['H280'], ghsPStatements:['P403'],
    unNumber:'UN 2036', transportClass:'2.2',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 8000–20000 / kg (Xe, 高纯)',
    majorMinerals:['空气 (0.086 ppm v/v)'],
    ergGuide:'ERG 120', ppe:'防冻手套、护目镜',
    firefightingAgent:'不适用（不燃）', neutralizationMethod:'通风扩散'
  },

  // ══════════════════════════════════════════════════════════
  //  第 5 周期（55–86）—— 精选重点
  // ══════════════════════════════════════════════════════════
  55: { // Cs 铯
    ghsPictograms:['GHS02','GHS05'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H314'], ghsPStatements:['P210','P223','P280','P305+P351+P338'],
    unNumber:'UN 1407', transportClass:'4.3',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 30000–80000 / kg (金属铯)',
    majorMinerals:['铯榴石 (pollucite)','锂云母（伴生）'],
    ergGuide:'ERG 138', ppe:'防火防毒手套、面罩、防碱防护服',
    firefightingAgent:'干砂、D类灭火器；禁止用水',
    neutralizationMethod:'用干砂覆盖；生成 CsOH 用稀酸中和'
  },
  56: { // Ba 钡
    ghsPictograms:['GHS02','GHS05','GHS06'], ghsSignal:'Danger',
    ghsHStatements:['H228','H260','H301','H314','H372'], ghsPStatements:['P210','P223','P260','P280','P305+P351+P338'],
    unNumber:'UN 1564 (钡化合物)', transportClass:'6.1',
    ld50Oral:118, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.5, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 8–20 / kg (碳酸钡)',
    majorMinerals:['重晶石 (barite, BaSO₄)','毒重石 (witherite)'],
    ergGuide:'ERG 154', ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'湿法除尘；含钡废液沉淀为 BaSO₄ 处置'
  },
  57: { // La 镧
    ghsPictograms:['GHS07'], ghsSignal:'Warning',
    ghsHStatements:['H315','H319','H335'], ghsPStatements:['P280','P305+P351+P338'],
    unNumber:null, transportClass:null,
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'0',
    pricePerKg:'¥ 200–600 / kg (镧金属)',
    majorMinerals:['独居石 (monazite)','氟碳铈矿 (bastnasite)'],
    ergGuide:null, ppe:'防尘口罩、手套',
    firefightingAgent:'水、干粉、CO₂', neutralizationMethod:'清扫收集'
  },
  // 镧系（58–71）采用类似模板...
  // 为控制脚本长度，以下采用"函数生成"方式

  // ══════════════════════════════════════════════════════════
  //  第 6 周期（87–118）—— 放射性元素
  // ══════════════════════════════════════════════════════════
  87: { // Fr 钫（放射性，极微量）
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Danger',
    ghsHStatements:['H301','H315','H319','H350','H372'], ghsPStatements:['P201','P280','P305+P351+P338'],
    unNumber:null, transportClass:'7',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:null, oelSTEL:null, idlh:null, carcinogenicity:'1',
    pricePerKg:'不可商业化生产',
    majorMinerals:[],
    ergGuide:'ERG 161', ppe:'辐射防护服、呼吸器、手套',
    firefightingAgent:'按放射性物质应急预案', neutralizationMethod:'放射性废物处置（专用设施）'
  },
  88: { // Ra 镭（强放射性）
    ghsPictograms:['GHS05','GHS06','GHS08'], ghsSignal:'Danger',
    ghsHStatements:['H301','H315','H319','H350','H372'], ghsPStatements:['P201','P280','P305+P351+P338'],
    unNumber:'UN 2986', transportClass:'7',
    ld50Oral:null, ld50Dermal:null, lc50Inhalation:null,
    oelTWA:0.0000001, oelSTEL:null, idlh:0.0000003, carcinogenicity:'1',
    pricePerKg:'不可商业化生产',
    majorMinerals:['沥青铀矿（伴生）','伴生于铀矿'],
    ergGuide:'ERG 161', ppe:'辐射防护服、呼吸器、手套',
    firefightingAgent:'按放射性物质应急预案', neutralizationMethod:'放射性废物处置（专用设施）'
  },
  // 锕系（89–103）和 104–118 采用类似模板
};

// ══════════════════════════════════════════════════════════
//  为未显式列出的元素生成默认 P3 数据
// ══════════════════════════════════════════════════════════
function defaultP3(z, category, state) {
  const isMetal = /metal|alkali|alkaline|transition|lanthanide|actinide/i.test(category || '');
  const isRadioactive = /radioactive|actinide|transactinide/i.test(category || '');
  const isGas = state === 'gas';
  const isNoble = /noble/.test(category || '');

  let ghs = [];
  let signal = null;
  let h = [];
  let transport = null;

  if (isRadioactive) {
    ghs = ['GHS05','GHS06','GHS08'];
    signal = 'Danger';
    h = ['H301','H315','H319','H350','H372'];
    transport = '7';
  } else if (isMetal && !isNoble) {
    ghs = ['GHS02','GHS07'];
    signal = 'Warning';
    h = ['H228','H319','H335'];
    transport = '4.1';
  } else if (isNoble || isGas) {
    ghs = ['GHS04'];
    signal = 'Warning';
    h = ['H280'];
    transport = '2.2';
  }

  return {
    ghsPictograms: ghs,
    ghsSignal: signal,
    ghsHStatements: h,
    ghsPStatements: signal ? ['P210','P280'] : [],
    unNumber: transport ? 'UN 待查' : null,
    transportClass: transport,
    ld50Oral: null,
    ld50Dermal: null,
    lc50Inhalation: null,
    oelTWA: null,
    oelSTEL: null,
    idlh: null,
    carcinogenicity: isRadioactive ? '1' : '0',
    pricePerKg: '数据整理中…',
    majorMinerals: [],
    ergGuide: isRadioactive ? 'ERG 161' : (transport === '4.3' ? 'ERG 138' : null),
    ppe: isRadioactive ? '辐射防护服、呼吸器、手套' : '防尘口罩、手套',
    firefightingAgent: isMetal ? '干砂、D类灭火器；禁止用水（活泼金属）' : '水、干粉、CO₂',
    neutralizationMethod: isRadioactive ? '放射性废物处置（专用设施）' : '清扫收集'
  };
}

// ══════════════════════════════════════════════════════════
//  主执行逻辑
// ══════════════════════════════════════════════════════════
function main() {
  let src = fs.readFileSync(ELEMENTS_FILE, 'utf8');

  // 备份
  if (!fs.existsSync(BACKUP_FILE)) {
    fs.copyFileSync(ELEMENTS_FILE, BACKUP_FILE);
    console.log('✅ 已备份到', BACKUP_FILE);
  }

  // 解析 ELEMENTS
  const fn = new Function(src + '; return ELEMENTS;');
  const E = fn();
  console.log('📊 当前元素数:', E.length);

  // 读取 elements.js 为行数组，准备精确插入
  const lines = src.split('\n');
  let inserted = 0;

  for (let i = 0; i < E.length; i++) {
    const el = E[i];
    const z = el.z;
    const data = P3[z] || defaultP3(z, el.category, el.state);

    // 在 z:XX, 所在行后插入 P3 字段
    // 找到该行并在其对象内插入
    const zLinePattern = new RegExp(`z:${z},`);
    let zLineIdx = -1;
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].includes(`z:${z},`) && lines[j].includes(`symbol:'${el.symbol}'`)) {
        zLineIdx = j;
        break;
      }
    }

    if (zLineIdx === -1) {
      // 尝试其他匹配方式
      for (let j = 0; j < lines.length; j++) {
        if (lines[j].includes(`z:${z},`) && lines[j].indexOf(`z:${z},`) < 20) {
          zLineIdx = j;
          break;
        }
      }
    }

    if (zLineIdx === -1) {
      console.warn(`⚠️  未找到 z=${z} (${el.symbol}) 的行`);
      continue;
    }

    // 找到该对象的结束位置（下一个 }, 或文件结束）
    let objEnd = -1;
    let braceCount = 0;
    let started = false;
    for (let j = zLineIdx; j < lines.length; j++) {
      for (const ch of lines[j]) {
        if (ch === '{') { braceCount++; started = true; }
        if (ch === '}') { braceCount--; }
      }
      if (started && braceCount === 0) {
        objEnd = j;
        break;
      }
    }

    if (objEnd === -1) {
      console.warn(`⚠️  未找到 z=${z} 对象的结束位置`);
      continue;
    }

    // 在对象结束前插入 P3 字段
    const indent = '    ';
    const p3Lines = [
      ...(data.ghsPictograms.length ? [`${indent}ghsPictograms:${JSON.stringify(data.ghsPictograms)},`] : []),
      ...(data.ghsSignal ? [`${indent}ghsSignal:'${data.ghsSignal}',`] : []),
      ...(data.ghsHStatements.length ? [`${indent}ghsHStatements:${JSON.stringify(data.ghsHStatements)},`] : []),
      ...(data.ghsPStatements.length ? [`${indent}ghsPStatements:${JSON.stringify(data.ghsPStatements)},`] : []),
      ...(data.unNumber ? [`${indent}unNumber:'${data.unNumber}',`] : []),
      ...(data.transportClass ? [`${indent}transportClass:'${data.transportClass}',`] : []),
      ...(data.ld50Oral !== null ? [`${indent}ld50Oral:${data.ld50Oral},`] : []),
      ...(data.ld50Dermal !== null ? [`${indent}ld50Dermal:${data.ld50Dermal},`] : []),
      ...(data.lc50Inhalation !== null ? [`${indent}lc50Inhalation:${data.lc50Inhalation},`] : []),
      ...(data.oelTWA !== null ? [`${indent}oelTWA:${data.oelTWA},`] : []),
      ...(data.oelSTEL !== null ? [`${indent}oelSTEL:${data.oelSTEL},`] : []),
      ...(data.idlh !== null ? [`${indent}idlh:${data.idlh},`] : []),
      ...(data.carcinogenicity ? [`${indent}carcinogenicity:'${data.carcinogenicity}',`] : []),
      ...(data.pricePerKg ? [`${indent}pricePerKg:'${data.pricePerKg}',`] : []),
      ...(data.majorMinerals.length ? [`${indent}majorMinerals:${JSON.stringify(data.majorMinerals)},`] : []),
      ...(data.ergGuide ? [`${indent}ergGuide:'${data.ergGuide}',`] : []),
      ...(data.ppe ? [`${indent}ppe:'${(data.ppe || '').replace(/'/g, "\\'")}',`] : []),
      ...(data.firefightingAgent ? [`${indent}firefightingAgent:'${(data.firefightingAgent || '').replace(/'/g, "\\'")}',`] : []),
      ...(data.neutralizationMethod ? [`${indent}neutralizationMethod:'${(data.neutralizationMethod || '').replace(/'/g, "\\'")}',`] : []),
    ];

    if (p3Lines.length > 0) {
      // 在 objEnd 行（即 } 所在行）前插入
      // 找到最后一个属性的行，在其后插入
      let lastPropLine = objEnd;
      for (let j = objEnd - 1; j >= zLineIdx; j--) {
        if (lines[j].includes(':') && /^\s*\w+:/.test(lines[j])) {
          lastPropLine = j;
          break;
        }
      }

      const toInsert = p3Lines.map(l => l.replace(/'/g, "'")).join('\n');
      lines.splice(lastPropLine + 1, 0, toInsert);
      inserted++;
    }
  }

  // 写回文件
  fs.writeFileSync(ELEMENTS_FILE, lines.join('\n'), 'utf8');
  console.log(`✅ 已为 ${inserted} 个元素注入 P3 字段`);
  console.log('⚠️  请运行 node --check data/elements.js 验证语法');
}

main();
