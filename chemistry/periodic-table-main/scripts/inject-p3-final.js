/**
 * P3 工业安全数据注入（精确行级插入版）
 * 用法：node inject-p3-final.js
 *
 * 策略：
 *   1. 备份 elements.js
 *   2. 用 Node eval 得到 ELEMENTS 数组（用于查类别/物态）
 *   3. 按 z 逐元素找到其在文件中的 { 起始行
 *   4. 在该元素的最后一个现有属性后插入 P3 字段行
 *   5. 写回文件
 */

const fs   = require('fs');
const path = require('path');

const ROOT     = __dirname;
const SRC      = path.join(ROOT, 'data/elements.js');
const BAKUP   = path.join(ROOT, 'data/elements.js.p2-backup');

// ──  helpers ───────────────────────────────────────────────────
function ghs(s) { return `GHS${s}`; }  // 返回 'GHSxx' 字符串

/** 根据元素属性生成默认 P3 数据 */
function defaultP3(z, sym, cat, state) {
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

  const isAlkali   = /碱金属/.test(cat);
  const isAlkaline = /碱土金属/.test(cat);
  const isNoble    = /稀有气体/.test(cat);
  const isHalogen  = /卤素/.test(cat);
  const isTrans    = /过渡金属/.test(cat);
  const isLan      = /镧系/.test(cat);
  const isAct      = /锕系/.test(cat);
  const isMetal    = isAlkali || isAlkaline || isTrans || isLan || isAct;
  const isRadio    = isAct || /放射性/.test(cat);

  if (isAlkali || isAlkaline) {
    d.ghsPictograms  = [ghs('02'), ghs('05')];
    d.ghsSignal      = 'Danger';
    d.ghsHStatements = ['H228','H260','H314'];
    d.ghsPStatements = ['P210','P223','P280','P305+P351+P338'];
    d.transportClass   = '4.3';
    d.unNumber        = 'UN 待查';
    d.ergGuide        = 'ERG 138';
    d.firefightingAgent = '干砂、D类灭火器；禁止用水';
    d.ppe              = '防火防毒手套、面罩、防护服';
    d.neutralizationMethod = '用干砂覆盖；生成氢氧化物用稀酸中和';
  } else if (isHalogen) {
    d.ghsPictograms  = [ghs('02'), ghs('05'), ghs('06'), ghs('09')];
    d.ghsSignal      = 'Danger';
    d.ghsHStatements = ['H260','H300','H310','H314','H330','H400'];
    d.ghsPStatements = ['P210','P260','P280','P284','P305+P351+P338'];
    d.transportClass   = '2.3';
    d.unNumber        = 'UN 待查';
    d.ergGuide        = 'ERG 124';
    d.ppe              = '供气式呼吸器、防化服、耐酸手套';
    d.neutralizationMethod = '用碱液（NaOH/Na₂CO₃）洗涤吸收';
  } else if (isNoble) {
    d.ghsPictograms  = [ghs('04')];
    d.ghsSignal      = 'Warning';
    d.ghsHStatements = ['H280'];
    d.ghsPStatements = ['P403'];
    d.transportClass   = '2.2';
    d.ergGuide        = 'ERG 120/121';
    d.firefightingAgent = '不适用（不燃）';
    d.neutralizationMethod = '通风扩散';
  } else if (isMetal) {
    d.ghsPictograms  = [ghs('02'), ghs('07')];
    d.ghsSignal      = 'Warning';
    d.ghsHStatements = ['H228','H319','H335'];
    d.ghsPStatements = ['P210','P280','P305+P351+P338'];
    d.transportClass   = '4.1';
    d.ergGuide        = 'ERG 133';
    d.firefightingAgent = '干砂、干粉、CO₂；活泼金属禁止用水';
    d.ppe              = '防尘口罩（N95）、手套、护目镜';
    d.neutralizationMethod = '清扫收集；大量水冲洗（惰性金属）';
  }

  if (isRadio) {
    d.ghsPictograms  = [ghs('05'), ghs('06'), ghs('08')];
    d.ghsSignal      = 'Danger';
    d.ghsHStatements = ['H301','H315','H319','H350','H372'];
    d.ghsPStatements = ['P201','P261','P280','P305+P351+P338'];
    d.transportClass   = '7';
    d.carcinogenicity  = '1';
    d.ergGuide        = 'ERG 161';
    d.ppe              = '辐射防护服、供气式呼吸器、双层手套';
    d.firefightingAgent = '按放射性物质专项应急预案';
    d.neutralizationMethod = '放射性废物专业处置（专用设施）';
  }

  return d;
}

// ── 重点元素精确覆盖数据 ───────────────────────────────────
const EXACT = {
  1:  { lc50Inhalation:13000, oelTWA:0.001, idlh:0.04, pricePerKg:'¥ 9–14 / kg (H₂)', majorMinerals:['水','碳氢化合物','天然气'] },
  3:  { ld50Oral:526, oelTWA:0.025, pricePerKg:'¥ 180–240 / kg (Li₂CO₃)', majorMinerals:['锂辉石','锂云母','卤水'] },
  4:  { ghsPictograms:['GHS05','GHS06','GHS08','GHS09'], ghsSignal:'Danger', ghsHStatements:['H301','H315','H317','H319','H330','H350','H372'], ld50Oral:111, lc50Inhalation:0.05, oelTWA:0.000002, idlh:0.000004, carcinogenicity:'1', pricePerKg:'¥ 6000–9000 / kg', majorMinerals:['绿柱石','硅铍石','金绿宝石'] },
  9:  { lc50Inhalation:0.185, oelTWA:0.001, oelSTEL:0.002, idlh:0.002, pricePerKg:'¥ 80–200 / kg (F₂)', majorMinerals:['萤石','冰晶石'], ergGuide:'ERG 124' },
  11: { oelTWA:2, pricePerKg:'¥ 8–15 / kg', majorMinerals:['岩盐','苏打灰'], ergGuide:'ERG 138' },
  15: { ghsPictograms:['GHS02','GHS05','GHS06','GHS09'], ghsHStatements:['H228','H250','H301','H314','H400','H410'], ld50Oral:3.03, oelTWA:0.1, idlh:5, pricePerKg:'¥ 7–12 / kg (黄磷)', majorMinerals:['磷灰石','磷酸盐岩'], ergGuide:'ERG 136' },
  17: { lc50Inhalation:0.293, oelTWA:1.5, oelSTEL:3, idlh:30, pricePerKg:'¥ 2–5 / kg (液氯)', majorMinerals:['岩盐','天然卤水'], ergGuide:'ERG 124' },
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

// ── P3 字段键列表（用于生成插入文本）─────────────────────
const P3_KEYS = [
  'ghsPictograms','ghsSignal','ghsHStatements','ghsPStatements',
  'unNumber','transportClass',
  'ld50Oral','ld50Dermal','lc50Inhalation',
  'oelTWA','oelSTEL','idlh','carcinogenicity',
  'pricePerKg','majorMinerals',
  'ergGuide','ppe','firefightingAgent','neutralizationMethod',
];

/** 将 P3 数据对象转为待插入的 JS 源码行 */
function p3ToLines(d) {
  const lines = [];
  const ind = '    ';
  for (const [k, v] of Object.entries(d)) {
    if (v === undefined) continue;
    if (v === null) {
      lines.push(`${ind}${k}:null`);
    } else if (typeof v === 'string') {
      // 转义单引号
      const escaped = v.replace(/'/g, "\\'");
      lines.push(`${ind}${k}:'${escaped}'`);
    } else if (Array.isArray(v)) {
      lines.push(`${ind}${k}:${JSON.stringify(v)},`);
    } else {
      lines.push(`${ind}${k}:${v},`);
    }
  }
  return lines;
}

// ── 主逻辑 ───────────────────────────────────────────────────
function main() {
  let src = fs.readFileSync(SRC, 'utf8');

  // 备份（仅首次）
  if (!fs.existsSync(BAKUP)) {
    fs.copyFileSync(SRC, BAKUP);
    console.log('✅ 已备份到', BAKUP);
  }

  // 用 eval 获取元素列表（用于类别/物态查询）
  const E = (new Function(src + '; return ELEMENTS;'))();
  console.log(`📊 元素总数: ${E.length}`);

  // 将文件按行分割，准备插入
  const lines = src.split('\n');
  let inserted = 0;

  // 按 z 从大到小处理（避免行号偏移），或从小到大但记录偏移
  // 这里用"从小到大 + 记录偏移"策略
  let lineOffset = 0;

  for (let i = 0; i < E.length; i++) {
    const el = E[i];
    const z  = el.z;
    const d  = Object.assign({}, defaultP3(z, el.symbol, el.category, el.state));
    if (EXACT[z]) Object.assign(d, EXACT[z]);

    // 找到该元素的 { 起始行
    // 元素对象格式：{ z:XX, symbol:'XX', name:'XX', ...
    // 查找包含 `z:${z},` 且该行含有 `symbol:` 的行
    let startLine = -1;
    for (let l = 0; l < lines.length; l++) {
      const raw = lines[l];
      // 匹配：z:XX, 后跟 symbol: 或在同一行
      if (raw.includes(`z:${z},`) && raw.includes(`symbol:`)) {
        // 确认这是对象开始行（含有 { 或上一行含有 {）
        // 简化：直接找含有 `z:${z},` 且在 { 后的行
        startLine = l;
        break;
      }
    }

    if (startLine === -1) {
      // 尝试宽松匹配
      for (let l = 0; l < lines.length; l++) {
        if (lines[l].includes(`z:${z},`) && lines[l].indexOf(`z:${z},`) < 20) {
          startLine = l;
          break;
        }
      }
    }

    if (startLine === -1) {
      console.warn(`⚠️  未找到 z=${z} (${el.symbol}) 的起始行`);
      continue;
    }

    // 找到该对象的 } 结束行
    let brace = 0;
    let endLine = -1;
    let inside = false;
    for (let l = startLine; l < lines.length; l++) {
      for (const ch of lines[l]) {
        if (ch === '{') { brace++; inside = true; }
        if (ch === '}') { brace--; }
      }
      if (inside && brace === 0) {
        endLine = l;
        break;
      }
    }

    if (endLine === -1) {
      console.warn(`⚠️  未找到 z=${z} 的结束行`);
      continue;
    }

    // 在 endLine 行（即 } 所在行）之前插入 P3 字段
    // 找到最后一个属性行（即 } 前一行非空行）
    let lastPropLine = endLine - 1;
    while (lastPropLine > startLine && lines[lastPropLine].trim() === '') {
      lastPropLine--;
    }

    // 生成插入文本
    const p3Lines = p3ToLines(d);

    // 在 lastPropLine 后插入（注意逗号：先检查 lastPropLine 行是否已有逗号）
    let insertAt = lastPropLine + 1;
    const toInsert = p3Lines.join('\n');

    // 先检查该元素是否已有 P3 字段（避免重复插入）
    const objText = lines.slice(startLine, endLine + 1).join('\n');
    if (objText.includes('ghsPictograms')) {
      console.log(`⏭  z=${z} (${el.symbol}) 已有 P3 字段，跳过`);
      continue;
    }

    lines.splice(insertAt, 0, toInsert);
    lines.splice(insertAt + p3Lines.length, 0, '');  // 空行分隔
    inserted++;
    lineOffset += p3Lines.length + 1;
  }

  // 写回
  fs.writeFileSync(SRC, lines.join('\n'), 'utf8');
  console.log(`✅ 已为 ${inserted} 个元素插入 P3 字段`);

  // 验证语法
  try {
    // 用 node 检查语法
    const { execSync } = require('child_process');
    execSync(`node --check "${SRC}"`, { stdio: 'pipe' });
    console.log('✅ JS 语法检查通过');
  } catch(e) {
    console.error('❌ JS 语法错误：', e.message);
    console.log('正在恢复备份…');
    fs.copyFileSync(BAKUP, SRC);
    console.log('已恢复备份');
  }
}

main();
