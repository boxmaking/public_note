/**
 * 从 data/elements.js 提取 ELEMENTS 数组并输出为 JSON
 * 供 Python 补全脚本使用
 */
const fs = require('fs');
const path = require('path');

// 加载 elements.js（会定义全局 ELEMENTS）
const elementsPath = path.join(__dirname, 'data', 'elements.js');
const elementsCode = fs.readFileSync(elementsPath, 'utf-8');

// 执行 JS 代码获取 ELEMENTS
// 将 const ELEMENTS 替换为 var ELEMENTS 使其在 sandbox 中可访问
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
// 替换 const → var 以便在 sandbox 中获取
const modifiedCode = elementsCode.replace('const ELEMENTS', 'var ELEMENTS');
vm.runInContext(modifiedCode, sandbox);
const ELEMENTS = sandbox.ELEMENTS;

// 输出为 JSON
const jsonOutput = JSON.stringify(ELEMENTS, null, 2);
fs.writeFileSync(path.join(__dirname, 'elements-extracted.json'), jsonOutput, 'utf-8');

// 统计 null 字段
let totalNulls = 0;
const nullStats = {};
for (const el of ELEMENTS) {
    let nullCount = 0;
    const nullFields = [];
    for (const [key, val] of Object.entries(el)) {
        if (val === null) {
            nullCount++;
            nullFields.push(key);
        }
    }
    nullStats[el.z] = { symbol: el.symbol, nullCount, nullFields };
    totalNulls += nullCount;
}

// 输出统计报告
const stats = {
    totalElements: ELEMENTS.length,
    totalNullFields: totalNulls,
    nullStatsByElement: nullStats,
    fieldsWithNulls: (() => {
        const fieldCounts = {};
        for (const el of ELEMENTS) {
            for (const [key, val] of Object.entries(el)) {
                if (val === null) {
                    fieldCounts[key] = (fieldCounts[key] || 0) + 1;
                }
            }
        }
        return Object.entries(fieldCounts)
            .sort((a, b) => b[1] - a[1])
            .map(([field, count]) => ({ field, count }));
    })()
};

fs.writeFileSync(path.join(__dirname, 'elements-stats.json'), JSON.stringify(stats, null, 2), 'utf-8');

console.log(`提取了 ${ELEMENTS.length} 个元素`);
console.log(`总计 ${totalNulls} 个 null 字段`);
console.log('\nnull 字段最多的字段（按频率）：');
for (const item of stats.fieldsWithNulls.slice(0, 15)) {
    console.log(`  ${item.field}: ${item.count} 个元素缺失`);
}
console.log('\n缺失最多的前10个元素：');
const topMissing = Object.values(nullStats)
    .sort((a, b) => b.nullCount - a.nullCount)
    .slice(0, 10);
for (const item of topMissing) {
    console.log(`  z=${Object.keys(nullStats).find(z => nullStats[z].symbol === item.symbol)} ${item.symbol}: ${item.nullCount}个null → ${item.nullFields.join(', ')}`);
}
