/**
 * P3 工业安全数据注入脚本（简化可靠版）
 * 用法：node inject-p3-v2.js
 *
 * 方案：
 *   1. eval elements.js 得到 ELEMENTS 数组
 *   2. 为每个元素计算/查找 P3 字段
 *   3. 用模板重建 elements.js（保持原有格式）
 */

const fs   = require('fs');
const path = require('path');

const ROOT       = __dirname;
const SRC_FILE   = path.join(ROOT, 'data/elements.js');
const BAK_FILE   = path.join(ROOT, 'data/elements.js.p2-backup');
const OUT_FILE   = SRC_FILE;

// ── GHS 象形图常量 ─────────────────────────────────────────────
const G = {
  flame:  'GHS02',  // 易燃
  explos: 'GHS01',  // 爆炸
  skull:  'GHS06',  // 急性毒性
  corro:  'GHS05',  // 腐蚀
  exclam:'GHS07',  // 刺激性
  health: 'GHS08',  // 健康危害
  env:    'GHS09',  // 环境
  gas:   'GHS04',  // 高压气体
};

// ── 按元素类别返回默认 P3 数据（可覆盖）────────────────────
function makeP3(z, sym, name, cat, state) {
  const d = {
    ghsPictograms:      [],
    ghsSignal:           null,
    ghsHStatements:     [],
    ghsPStatements:     [],
    unNumber:            null,
    transportClass:       null,
    ld50Oral:            null,
    ld50Dermal:          null,
    lc50Inhalation:      null,
    oelTWA:             null,
    oelSTEL:            null,
    idlh:                null,
    carcinogenicity:      '0',
    pricePerKg:          '数据整理中…',
    majorMinerals:       [],
    ergGuide:            null,
    ppe:                 '防尘口罩、手套',
    firefightingAgent:    '水、干粉、CO₂',
    neutralizationMethod:  '清扫收集',
  };

  const isAlkali     = cat && cat.includes('碱金属');
  const isAlkaline   = cat && cat.includes('碱土金属');
  const isNoble      = cat && cat.includes('稀有气体');
  const isHalogen    = cat && cat.includes('卤素');
  const isTrans      = cat && cat.includes('过渡金属');
  const isLan        = cat && cat.includes('镧系');
  const isAct        = cat && cat.includes('锕系');
  const isMetal      = isAlkali || isAlkaline || isTrans || isLan || isAct;
  const isRadioactive = !!(cat && cat.includes('放射性')) || isAct;

  // ── GHS 默认 ──────────────────────────────────────────────────
  if (isAlkali) {
    d.ghsPictograms.push(G.flame, G.corros);
    d.ghsSignal       = 'Danger';
    d.ghsHStatements  = ['H228','H260','H314'];
    d.ghsPStatements  = ['P210','P223','P280','P305+P351+P338'];
    d.transportClass   = '4.3';
    d.unNumber         = 'UN 待查';
    d.ergGuide        = 'ERG 138';
    d.firefightingAgent = '干砂、D类灭火器；禁止用水';
    d.ppe              = '防火防毒手套、面罩、防护服';
    d.neutralizationMethod = '用干砂覆盖；生成氢氧化物用稀酸中和';
  } else if (isAlkaline) {
    d.ghsPictograms.push(G.flame, G.corros);
    d.ghsSignal       = 'Danger';
    d.ghsHStatements  = ['H228','H260','H314'];
    d.ghsPStatements  = ['P210','P223','P280','P305+P351+P338'];
    d.transportClass   = '4.3';
    d.unNumber         = 'UN 待查';
    d.ergGuide        = 'ERG 138';
    d.firefightingAgent = '干砂、D类灭火器；禁止用水';
    d.ppe              = '防火防毒手套、面罩、防碱防护服';
    d.neutralizationMethod = '用干砂覆盖；生成氢氧化物用稀酸中和';
  } else if (isHalogen) {
    d.ghsPictograms.push(G.flame, G.corros, G.skull, G.env);
    d.ghsSignal       = 'Danger';
    d.ghsHStatements  = ['H260','H300','H310','H314','H330','H400'];
    d.ghsPStatements  = ['P210','P260','P280','P284','P305+P351+P338'];
    d.transportClass   = '2.3';
    d.unNumber         = 'UN 待查';
    d.ergGuide        = 'ERG 124';
    d.ppe              = '供气式呼吸器、防化服、耐酸/耐卤素手套';
    d.neutralizationMethod = '用碱液（NaOH/Na₂CO₃）洗涤吸收';
  } else if (isNoble) {
    d.ghsPictograms.push(G.gas);
    d.ghsSignal       = 'Warning';
    d.ghsHStatements  = ['H280'];
    d.ghsPStatements  = ['P403'];
    d.transportClass   = '2.2';
    d.ergGuide        = 'ERG 120/121';
    d.firefightingAgent = '不适用（不燃）';
    d.neutralizationMethod = '通风扩散';
  } else if (isMetal) {
    d.ghsPictograms.push(G.flame, G.exclam);
    d.ghsSignal       = 'Warning';
    d.ghsHStatements  = ['H228','H319','H335'];
    d.ghsPStatements  = ['P210','P280','P305+P351+P338'];
    d.transportClass   = '4.1';
    d.ergGuide        = 'ERG 133';
    d.firefightingAgent = '干砂、干粉、CO₂；活泼金属禁止用水';
    d.ppe              = '防尘口罩（N95）、手套、护目镜';
    d.neutralizationMethod = '清扫收集；大量水冲洗（惰性金属）';
  }

  if (isRadioactive) {
    d.ghsPictograms      = [G.corros, G.skull, G.health];
    d.ghsSignal          = 'Danger';
    d.ghsHStatements    = ['H301','H315','H319','H350','H372'];
    d.ghsPStatements    = ['P201','P261','P280','P305+P351+P338'];
    d.transportClass      = '7';
    d.carcinogenicity    = '1';
    d.ergGuide          = 'ERG 161';
    d.ppe                = '辐射防护服、供气式呼吸器、双层手套';
    d.firefightingAgent  = '按放射性物质专项应急预案';
    d.neutralizationMethod = '放射性废物专业处置（专用设施）';
  }

  return d;
}

// ── 重点元素精确数据（覆盖默认值）────────────────────────────
// 格式：z → 覆盖字段
const EXACT = {
  1:  { ghsPictograms:['GHS02','GHS04'], ghsSignal:'Danger', ghsHStatements:['H220','H280'], unNumber:'UN 1049', transportClass:'2.1', lc50Inhalation:13000, oelTWA:0.001, idlh:0.04, pricePerKg:'¥ 9–14 / kg (H₂)', majorMinerals:['水','碳氢化合物'], ergGuide:'ERG 116' },
  3:  { ld50Oral:526, oelTWA:0.025, pricePerKg:'¥ 180–240 / kg (Li₂CO₃)', majorMinerals:['锂辉石','锂云母','卤水'] },
  4:  { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger', ghsHStatements:['H301','H315','H317','H319','H330','H350','H372'], ld50Oral:111, lc50Inhalation:0.05, oelTWA:0.000002, idlh:0.000004, carcinogenicity:'1', pricePerKg:'¥ 6000–9000 / kg', majorMinerals:['绿柱石','硅铍石','金绿宝石'] },
  9:  { ghsPictograms:['GHS02','GHS05','GHS06','GHS09'], lc50Inhalation:0.185, oelTWA:0.001, oelSTEL:0.002, idlh:0.002, pricePerKg:'¥ 80–200 / kg (F₂)', majorMinerals:['萤石','冰晶石'], ergGuide:'ERG 124' },
  11: { ld50Oral:null, oelTWA:2, pricePerKg:'¥ 8–15 / kg', majorMinerals:['岩盐','苏打灰'], ergGuide:'ERG 138' },
  15: { ghsPictograms:['GHS02','GHS05','GHS06','GHS09'], ghsHStatements:['H228','H250','H301','H314','H400','H410'], ld50Oral:3.03, oelTWA:0.1, idlh:5, pricePerKg:'¥ 7–12 / kg (黄磷)', majorMinerals:['磷灰石','磷酸盐岩'], ergGuide:'ERG 136' },
  17: { ghsPictograms:['GHS03','GHS05','GHS06','GHS09'], lc50Inhalation:0.293, oelTWA:1.5, oelSTEL:3, idlh:30, pricePerKg:'¥ 2–5 / kg (液氯)', majorMinerals:['岩盐','天然卤水'], ergGuide:'ERG 124' },
  24: { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsHStatements:['H301','H311','H315','H317','H319','H350','H372','H410'], ld50Oral:190, oelTWA:0.5, idlh:250, carcinogenicity:'1', pricePerKg:'¥ 40–80 / kg', majorMinerals:['铬铁矿'], ergGuide:'ERG 154' },
  25: { ld50Oral:540, oelTWA:0.2, idlh:500, pricePerKg:'¥ 18–35 / kg', majorMinerals:['软锰矿','菱锰矿'] },
  27: { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsHStatements:['H301','H311','H315','H317','H319','H332','H351','H372','H410'], ld50Oral:617, oelTWA:0.02, oelSTEL:0.05, carcinogenicity:'2B', pricePerKg:'¥ 400–800 / kg', majorMinerals:['砷钴矿','辉钴矿'], ergGuide:'ERG 154' },
  28: { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsHStatements:['H301','H311','H315','H317','H319','H332','H351','H372','H410'], ld50Oral:890, oelTWA:0.1, oelSTEL:0.3, idlh:10, carcinogenicity:'1', pricePerKg:'¥ 120–250 / kg', majorMinerals:['镍黄铁矿','红砷镍矿'], ergGuide:'ERG 154' },
  29: { ghsPictograms:['GHS05','GHS06','GHS09'], ghsHStatements:['H302','H315','H319','H400','H410'], ld50Oral:472, oelTWA:1, oelSTEL:2, idlh:100, pricePerKg:'¥ 60–90 / kg', majorMinerals:['黄铜矿','孔雀石','斑铜矿'] },
  33: { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsHStatements:['H301','H311','H315','H319','H331','H350','H372','H410'], ld50Oral:15, oelTWA:0.01, idlh:5, carcinogenicity:'1', pricePerKg:'¥ 60–120 / kg', majorMinerals:['雄黄','雌黄','毒砂'], ergGuide:'ERG 154' },
  48: { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsHStatements:['H301','H311','H315','H319','H350','H372','H410'], ld50Oral:72, oelTWA:0.002, oelSTEL:0.01, idlh:9, carcinogenicity:'1', pricePerKg:'¥ 1500–3500 / kg', majorMinerals:['硫镉矿','闪锌矿（伴生）'], ergGuide:'ERG 154' },
  51: { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsHStatements:['H301','H311','H315','H319','H331','H350','H372','H410'], ld50Oral:20, oelTWA:0.5, idlh:50, carcinogenicity:'2B', pricePerKg:'¥ 60–150 / kg', majorMinerals:['辉锑矿','方锑矿'], ergGuide:'ERG 154' },
  53: { ghsPictograms:['GHS05','GHS06','GHS09'], ghsHStatements:['H300','H310','H314','H330','H400','H410'], ld50Oral:14, lc50Inhalation:0.026, oelTWA:1, idlh:10, pricePerKg:'¥ 300–800 / kg', majorMinerals:['智利硝石（伴生）','海草'], ergGuide:'ERG 156' },
};

// ── 主逻辑 ────────────────────────────────────────────────────
function main() {
  let src = fs.readFileSync(SRC_FILE, 'utf8');

  // 备份
  if (!fs.existsSync(BAK_FILE)) {
    fs.copyFileSync(SRC_FILE, BAK_FILE);
    console.log('✅ 已备份到', BAK_FILE);
  }

  // 解析 ELEMENTS 数组
  const fn = new Function(src + '; return ELEMENTS;');
  const E  = fn();
  console.log('📊 元素数:', E.length);

  // 注入 P3 字段
  for (const el of E) {
    const z = el.z;
    const d = makeP3(z, el.symbol, el.name, el.category, el.state);
    if (EXACT[z]) Object.assign(d, EXACT[z]);

    // 写入元素对象
    Object.assign(el, {
      ghsPictograms:      d.ghsPictograms,
      ghsSignal:           d.ghsSignal,
      ghsHStatements:     d.ghsHStatements,
      ghsPStatements:     d.ghsPStatements,
      unNumber:            d.unNumber,
      transportClass:       d.transportClass,
      ld50Oral:            d.ld50Oral,
      ld50Dermal:          d.ld50Dermal,
      lc50Inhalation:      d.lc50Inhalation,
      oelTWA:             d.oelTWA,
      oelSTEL:            d.oelSTEL,
      idlh:                d.idlh,
      carcinogenicity:      d.carcinogenicity,
      pricePerKg:          d.pricePerKg,
      majorMinerals:       d.majorMinerals,
      ergGuide:            d.ergGuide,
      ppe:                 d.ppe,
      firefightingAgent:    d.firefightingAgent,
      neutralizationMethod:  d.neutralizationMethod,
    });
  }

  // ── 重建 elements.js ─────────────────────────────────────────
  const lines = [
    '// 元素数据文件 — 由 inject-p3-v2.js 生成',
    '// 最后更新：' + new Date().toISOString().slice(0,10),
    '',
    'const ELEMENTS = [',
  ];

  for (const el of E) {
    const props = [];
    for (const [k, v] of Object.entries(el)) {
      if (v === undefined) continue;
      if (v === null) {
        props.push(`  ${k}:null`);
      } else if (typeof v === 'string') {
        props.push(`  ${k}:'${v.replace(/'/g, "\\'")}'`);
      } else if (Array.isArray(v)) {
        props.push(`  ${k}:${JSON.stringify(v)},`);
      } else {
        props.push(`  ${k}:${v},`);
      }
    }
    lines.push('  {');
    lines.push(props.join('\n'));
    lines.push('  },');
  }
  lines.push('];');
  lines.push('');
  lines.push('// ── 数据来源 ──────────────────────────────');
  // 保留 DATA_SOURCES
  const dsMatch = src.match(/const DATA_SOURCES[\s\S]*?^};/m);
  if (dsMatch) lines.push(dsMatch[0]);

  fs.writeFileSync(OUT_FILE, lines.join('\n'), 'utf8');
  console.log(`✅ 已写入 ${E.length} 个元素的 P3 字段`);
  console.log('⚠️  请运行  node --check data/elements.js  验证语法');
}

main();
