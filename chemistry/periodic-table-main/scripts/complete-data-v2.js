/**
 * 补全 elements.js 中缺失的数据字段（ working version）
 * 运行: node complete-data-v2.js
 */

const fs = require('fs');
const vm = require('vm');

console.log('📖 读取 elements.js...');
const content = fs.readFileSync('data/elements.js', 'utf8');

// 方法1：使用 vm 模块执行 JS 代码
console.log('🔍 解析元素数据...');

const sandbox = {};
const context = vm.createContext(sandbox);

// 在沙箱中执行代码
vm.runInContext(content, context);

// 现在 sandbox 中应该有 ELEMENTS
const elements = sandbox.ELEMENTS;

if (!elements || !Array.isArray(elements)) {
  console.error('❌ 错误：无法解析 elements.js');
  console.error('    sandbox 内容:', Object.keys(sandbox));
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
console.log(`✅ 补全范德华半径: ${vdwCount} 个元素`);

// ============ 写回文件 ============
console.log('\n💾 写回文件...');

// 将元素数组转换回 JS 格式
function elementToJS(el) {
  const parts = [];
  for (const [key, value] of Object.entries(el)) {
    if (value === null) {
      parts.push(`${key}:null`);
    } else if (typeof value === 'string') {
      parts.push(`${key}:'${value}'`);
    } else if (Array.isArray(value)) {
      parts.push(`${key}:${JSON.stringify(value)}`);
    } else if (typeof value === 'object') {
      parts.push(`${key}:${JSON.stringify(value)}`);
    } else {
      parts.push(`${key}:${value}`);
    }
  }
  return '{' + parts.join(',') + '}';
}

const lines = elements.map((el, idx) => {
  const line = elementToJS(el);
  return (idx % 4 === 0 ? '\n' : '') + line + (idx < elements.length - 1 ? ',' : '');
});

const header = `// 元素周期表完整数据 - 118个元素 (v3.0 专业扩展版)
// 已由自动脚本补全缺失字段 (${new Date().toISOString()})

const ELEMENTS = [`;

const newContent = header + lines.join('') + '\n];\n';

fs.writeFileSync('data/elements.js', newContent, 'utf8');
console.log('✅ 已保存到 data/elements.js\n');

console.log('📊 补全统计：');
console.log(`  电子亲和能: ${eaCount} 个元素`);
console.log(`  原子半径: ${arCount} 个元素`);
console.log(`  范德华半径: ${vdwCount} 个元素`);
console.log('\n⚠️  注意：部分数据可能不准确，请对照权威数据源核查');
