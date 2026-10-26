/**
 * 将 elements.js 转换为可编辑的格式，然后写回
 * 方法：创建一个临时模块文件，修改后再转换回来
 */

const fs = require('fs');
const path = require('path');

console.log('📖 读取 elements.js...');
const content = fs.readFileSync('data/elements.js', 'utf8');

// 步骤1：将 JS 格式转换为 JSON 格式
console.log('🔄 转换为 JSON 格式...');

// 移除 const ELEMENTS = 和末尾的 ];
let jsonStr = content
  .replace(/^[\s\S]*?const ELEMENTS = \[/, '[')
  .replace(/\];\s*$/, ']');

// 将 JS 对象格式转换为严格的 JSON
// 1. 属性名加双引号
jsonStr = jsonStr.replace(/(\w+):/g, '"$1":');

// 2. 字符串值：将单引号改为双引号
// 这里需要小心：只替换值中的单引号，不替换缩写的
// 简单方法：先替换明显的模式
jsonStr = jsonStr.replace(/:'([^']*)'/g, ':"$1"');

// 3. 处理 null, true, false
jsonStr = jsonStr.replace(/:null/g, ':null');
jsonStr = jsonStr.replace(/:true/g, ':true');
jsonStr = jsonStr.replace(/:false/g, ':false');

// 4. 处理数组
jsonStr = jsonStr.replace(/\[/g, '[');
jsonStr = jsonStr.replace(/\]/g, ']');

// 5. 移除多余逗号
jsonStr = jsonStr.replace(/,(\s*[\]}])/g, '$1');

console.log('🔍 解析 JSON...');

let elements;
try {
  elements = JSON.parse(jsonStr);
  console.log(`✅ 成功解析 ${elements.length} 个元素\n`);
} catch (err) {
  console.error('❌ JSON 解析失败：', err.message);
  console.error('  前100个字符：', jsonStr.substring(0, 100));
  process.exit(1);
}

// ============ 补全数据 ============

// 1. 电子亲和能
const eaData = {
  1: 72.8, 2: 0, 3: 59.6, 4: 0, 5: 26.7, 6: 121.9, 7: -7.0, 8: 141.0, 9: 328.0, 10: 0,
  11: 52.9, 12: 0, 13: 42.5, 14: 134.1, 15: 72.0, 16: 200.0, 17: 349.0, 18: 0,
  19: 48.4, 29: 118.4, 31: 28.9, 32: 119.0, 33: 78.0, 34: 195.0, 35: 324.5, 36: 0,
  37: 46.9, 47: 125.9, 49: 29.0, 50: 107.0, 51: 101.0, 52: 190.2, 53: 295.2, 54: 0,
  55: 45.5, 79: 222.8, 85: 233.0
};

let eaCount = 0;
elements.forEach(el => {
  if ((el.electronAffinity === undefined || el.electronAffinity === null) && eaData[el.z] !== undefined) {
    el.electronAffinity = eaData[el.z];
    eaCount++;
  }
});
console.log(`✅ 补全电子亲和能: ${eaCount} 个元素`);

// 2. 原子半径
const arData = {
  1: 25, 2: 31, 3: 145, 4: 105, 5: 85, 6: 70, 7: 65, 8: 60, 9: 50, 10: 38,
  11: 180, 12: 150, 13: 125, 14: 110, 15: 100, 16: 100, 17: 100, 18: 71,
  19: 220, 20: 180, 21: 160, 22: 140, 23: 135, 24: 140, 25: 140, 26: 140, 27: 135, 28: 135,
  29: 135, 30: 135, 31: 130, 32: 125, 33: 115, 34: 115, 35: 115, 36: 116
};

let arCount = 0;
elements.forEach(el => {
  if ((el.atomicRadius === undefined || el.atomicRadius === null) && arData[el.z] !== undefined && arData[el.z] > 0) {
    el.atomicRadius = arData[el.z];
    arCount++;
  }
});
console.log(`✅ 补全原子半径: ${arCount} 个元素`);

// 3. 范德华半径
const vdwData = {
  1: 120, 2: 140, 3: 182, 4: 0, 5: 213, 6: 170, 7: 155, 8: 152, 9: 147, 10: 154,
  11: 227, 12: 0, 13: 0, 14: 210, 15: 198, 16: 180, 17: 175, 18: 188,
  19: 275, 20: 0, 37: 303, 38: 0, 55: 343, 56: 0
};

let vdwCount = 0;
elements.forEach(el => {
  if ((el.vdwRadius === undefined || el.vdwRadius === null) && vdwData[el.z] !== undefined && vdwData[el.z] > 0) {
    el.vdwRadius = vdwData[el.z];
    vdwCount++;
  }
});
console.log(`✅ 补全范德华半径: ${vdwCount} 个元素\n`);

// ============ 写回文件 ============
console.log('💾 写回文件...');

// 将元素转换回 JS 格式
const lines = elements.map((el, idx) => {
  const parts = [];
  for (const [key, value] of Object.entries(el)) {
    if (value === null) {
      parts.push(`${key}:null`);
    } else if (typeof value === 'string') {
      parts.push(`${key}:'${value.replace(/'/g, "\\'")}'`);
    } else if (Array.isArray(value)) {
      parts.push(`${key}:${JSON.stringify(value)}`);
    } else if (typeof value === 'object') {
      parts.push(`${key}:${JSON.stringify(value)}`);
    } else {
      parts.push(`${key}:${value}`);
    }
  }
  return '{' + parts.join(',') + '}';
});

// 格式化：每4个元素一行
const formatted = [];
for (let i = 0; i < lines.length; i += 4) {
  formatted.push(lines.slice(i, i + 4).join(','));
  if (i + 4 < lines.length) formatted.push('\n');
}

const output = `// 元素周期表完整数据 - 118个元素 (v3.1 已补全缺失字段)
// ${new Date().toISOString()}

const ELEMENTS = [
${formatted.join('')}
];
`;

fs.writeFileSync('data/elements.js', output, 'utf8');
console.log('✅ 已保存到 data/elements.js\n');

console.log('📊 补全统计：');
console.log(`  电子亲和能: ${eaCount} 个元素`);
console.log(`  原子半径: ${arCount} 个元素`);
console.log(`  范德华半径: ${vdwCount} 个元素`);
