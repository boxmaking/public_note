/**
 * 直接修改 elements.js，补全缺失的数据字段
 * 运行: node complete-elements-direct.js
 */

const fs = require('fs');
const vm = require('vm');

console.log('📖 读取 elements.js...');
let content = fs.readFileSync('data/elements.js', 'utf8');

// 方法：修改代码，使其直接赋值到 sandbox
// 将 "const ELEMENTS = [" 改为 "sandbox.ELEMENTS = ["
let modifiedCode = content.replace('const ELEMENTS = [', 'sandbox.ELEMENTS = [');

// 还要移除末尾的 ";"（如果有）
modifiedCode = modifiedCode.replace(/];\s*$/, '];');

console.log('🔍 解析元素数据...');

const sandbox = {};
const context = vm.createContext(sandbox);

// 执行修改后的代码
vm.runInContext(modifiedCode, context);

// 现在 sandbox.ELEMENTS 应该有数据
const elements = sandbox.ELEMENTS;

if (!elements || !Array.isArray(elements)) {
  console.error('❌ 错误：无法解析 elements.js');
  console.error('   sandbox 内容:', Object.keys(sandbox));
  process.exit(1);
}

console.log(`✅ 已加载 ${elements.length} 个元素\n`);

// ============ 补全数据 ============

// 1. 电子亲和能 (electronAffinity)
const eaData = {
  1: 72.8, 2: 0, 3: 59.6, 4: 0, 5: 26.7, 6: 121.9, 7: -7.0, 8: 141.0, 9: 328.0, 10: 0,
  11: 52.9, 12: 0, 13: 42.5, 14: 134.1, 15: 72.0, 16: 200.0, 17: 349.0, 18: 0,
  19: 48.4, 29: 118.4, 31: 28.9, 32: 119.0, 33: 78.0, 34: 195.0, 35: 324.5, 36: 0,
  37: 46.9, 47: 125.9, 49: 29.0, 50: 107.0, 51: 101.0, 52: 190.2, 53: 295.2, 54: 0,
  55: 45.5, 79: 222.8, 85: 233.0
};

let eaCount = 0;
elements.forEach(el => {
  if (el.electronAffinity === undefined && eaData[el.z] !== undefined) {
    el.electronAffinity = eaData[el.z];
    eaCount++;
  }
});
console.log(`✅ 补全电子亲和能: ${eaCount} 个元素`);

// 2. 原子半径 (atomicRadius)
const arData = {
  1: 25, 2: 31, 3: 145, 4: 105, 5: 85, 6: 70, 7: 65, 8: 60, 9: 50, 10: 38,
  11: 180, 12: 150, 13: 125, 14: 110, 15: 100, 16: 100, 17: 100, 18: 71,
  19: 220, 20: 180, 21: 160, 22: 140, 23: 135, 24: 140, 25: 140, 26: 140, 27: 135, 28: 135,
  29: 135, 30: 135, 31: 130, 32: 125, 33: 115, 34: 115, 35: 115, 36: 116
};

let arCount = 0;
elements.forEach(el => {
  if (el.atomicRadius === undefined && arData[el.z] !== undefined && arData[el.z] > 0) {
    el.atomicRadius = arData[el.z];
    arCount++;
  }
});
console.log(`✅ 补全原子半径: ${arCount} 个元素`);

// 3. 范德华半径 (vdwRadius)
const vdwData = {
  1: 120, 2: 140, 3: 182, 4: 0, 5: 213, 6: 170, 7: 155, 8: 152, 9: 147, 10: 154,
  11: 227, 12: 0, 13: 0, 14: 210, 15: 198, 16: 180, 17: 175, 18: 188,
  19: 275, 20: 0, 37: 303, 38: 0, 55: 343, 56: 0
};

let vdwCount = 0;
elements.forEach(el => {
  if (el.vdwRadius === undefined && vdwData[el.z] !== undefined && vdwData[el.z] > 0) {
    el.vdwRadius = vdwData[el.z];
    vdwCount++;
  }
});
console.log(`✅ 补全范德华半径: ${vdwCount} 个元素\n`);

// ============ 写回文件 ============
console.log('💾 写回文件...');

// 将元素数组转换回 JS 格式
function elementToJS(el, isLast) {
  const parts = [];
  
  for (const [key, value] of Object.entries(el)) {
    if (value === null) {
      parts.push(`${key}:null`);
    } else if (typeof value === 'string') {
      // 转义单引号
      const escaped = value.replace(/'/g, "\\'");
      parts.push(`${key}:'${escaped}'`);
    } else if (Array.isArray(value)) {
      parts.push(`${key}:${JSON.stringify(value)}`);
    } else if (typeof value === 'object' && value !== null) {
      // 处理同位素等对象数组
      const objStr = JSON.stringify(value);
      parts.push(`${key}:${objStr}`);
    } else {
      parts.push(`${key}:${value}`);
    }
  }
  
  return '{' + parts.join(',') + '}';
}

// 生成新的文件内容
const lines = ['const ELEMENTS = ['];
elements.forEach((el, idx) => {
  const elStr = elementToJS(el, idx === elements.length - 1);
  // 每4个元素换一行（保持原格式）
  if (idx > 0 && idx % 4 === 0) {
    lines.push('\n');
  }
  lines.push(elStr);
  if (idx < elements.length - 1) {
    lines.push(',');
  }
});
lines.push('\n];\n');

const newContent = lines.join('');

// 保留文件头部的注释
const headerMatch = content.match(/^([\s\S]*?const ELEMENTS = \[)/);
let finalContent;
if (headerMatch) {
  finalContent = headerMatch[1] + newContent;
} else {
  finalContent = 'const ELEMENTS = ' + newContent;
}

fs.writeFileSync('data/elements.js', finalContent, 'utf8');
console.log('✅ 已保存到 data/elements.js\n');

console.log('📊 补全统计：');
console.log(`  电子亲和能: ${eaCount} 个元素`);
console.log(`  原子半径: ${arCount} 个元素`);
console.log(`  范德华半径: ${vdwCount} 个元素`);
console.log('\n⚠️  注意：部分数据可能不准确，请对照权威数据源核查');
