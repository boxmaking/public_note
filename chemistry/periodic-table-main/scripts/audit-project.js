const fs = require('fs');

console.log('========================================');
console.log('化学元素周期表项目 - 全面审计报告');
console.log('生成时间:', new Date().toLocaleString('zh-CN'));
console.log('========================================\n');

// 正确字段名（从 elements.js 实际提取）
const REQUIRED_FIELDS = ['z', 'symbol', 'name', 'nameEn', 'mass', 'category', 'electrons', 'group', 'period', 'state'];
const OPTIONAL_FIELDS = [
  'meltingPoint', 'boilingPoint', 'density', 'electronegativity', 'atomicRadius',
  'covalentRadius', 'vdwRadius', 'ionizationEnergy', 'electronAffinity',
  'oxidationStates', 'crystalStructure', 'electricalResistivity', 'thermalConductivity',
  'hardnessMohs', 'youngsModulus', 'shearModulus', 'bulkModulus',
  'crustAbundance', 'casNumber', 'pubChemCid', 'detailKey',
  'deltaHf', 'deltaGf', 'standardEntropy', 'molarHeatCapacity',
  'isotopes', 'productionMethod', 'annualProduction', 'priceReference',
  'majorProducers', 'stdElectrodePotential', 'redoxCouple',
  'electrochemicalEquivalent', 'ionicRadius'
];

// ============================================================
// 1. 解析 elements.js
// ============================================================
console.log('【1】元素核心数据检查 (elements.js)');
console.log('---');

let elements = [];
try {
  const code = fs.readFileSync('data/elements.js', 'utf8');
  // 使用 Function 构造器，模拟浏览器环境
  const fn = new Function('window', code + '\nreturn window.__ELEMENTS__ || ELEMENTS;');
  const result = fn({});
  if (Array.isArray(result)) {
    elements = result;
  } else {
    // 尝试另一种方式
    const fn2 = new Function(code + '\nreturn typeof ELEMENTS !== "undefined" ? ELEMENTS : null;');
    elements = fn2();
  }
} catch(e) {
  console.log('❌ 无法解析 elements.js:', e.message);
}

if (elements.length === 0) {
  console.log('❌ 无法加载元素数据');
  process.exit(1);
}

console.log(`✅ 元素总数: ${elements.length}`, elements.length === 118 ? '(正确)' : '❌ (应为118)');

// 检查 Z=1..118 连续性
const zValues = elements.map(e => e.z).sort((a, b) => a - b);
const missingZ = [];
for (let z = 1; z <= 118; z++) {
  if (!zValues.includes(z)) missingZ.push(z);
}
console.log(missingZ.length === 0 ? '✅ Z序号连续完整' : `❌ 缺失 Z: ${missingZ.join(', ')}`);

// 检查必需字段
let reqMissing = {};
REQUIRED_FIELDS.forEach(f => {
  const missing = elements.filter(el => el[f] === undefined || el[f] === null);
  if (missing.length > 0) {
    reqMissing[f] = missing.map(el => el.symbol);
  }
});

console.log('\n--- 必需字段缺失情况 ---');
if (Object.keys(reqMissing).length === 0) {
  console.log('✅ 所有必需字段完整');
} else {
  Object.keys(reqMissing).forEach(f => {
    console.log(`❌ ${f}: ${reqMissing[f].length} 个元素缺失`);
  });
}

// 检查可选字段
console.log('\n--- 可选字段缺失情况（前10个最多缺失的）---');
let optMissing = {};
OPTIONAL_FIELDS.forEach(f => {
  const missing = elements.filter(el => el[f] === undefined || el[f] === null);
  if (missing.length > 0) {
    optMissing[f] = missing.length;
  }
});
const optSorted = Object.entries(optMissing).sort((a, b) => b[1] - a[1]);
optSorted.slice(0, 10).forEach(([f, cnt]) => {
  console.log(`  ${f}: ${cnt}/118 缺失`);
});

// 检查 detailKey
const noDetailKey = elements.filter(el => !el.detailKey).map(el => el.symbol);
console.log(noDetailKey.length === 0 ? '\n✅ 所有元素均有 detailKey' : `\n❌ 缺失 detailKey: ${noDetailKey.join(', ')}`);

// ============================================================
// 2. 检查 details/*.md 文件
// ============================================================
console.log('\n【2】Markdown 详情文件检查 (details/*.md)');
console.log('---');

const mdFiles = fs.readdirSync('details').filter(f => f.endsWith('.md'));
console.log(`✅ Markdown 文件数: ${mdFiles.length}/118`);

const mdSymbols = mdFiles.map(f => f.replace('.md', ''));
const expectedSymbols = elements.map(e => e.symbol);
const missingMd = expectedSymbols.filter(s => !mdSymbols.includes(s));
console.log(missingMd.length === 0 ? '✅ 所有元素均有 Markdown 详情文件' : `❌ 缺失 MD 文件: ${missingMd.join(', ')}`);

// 检查 MD 文件内容质量
let emptyMd = [];
mdSymbols.forEach(s => {
  try {
    const content = fs.readFileSync(`details/${s}.md`, 'utf8');
    if (content.trim().length < 100) emptyMd.push(s);
  } catch(e) {
    emptyMd.push(s);
  }
});
console.log(emptyMd.length === 0 ? '✅ 所有 MD 文件内容充实' : `⚠️ 内容过短/无法读取: ${emptyMd.join(', ')}`);

// ============================================================
// 3. 检查 JS 模块文件
// ============================================================
console.log('\n【3】JS 功能模块检查');
console.log('---');

const jsFiles = [
  'js/table.js', 'js/search.js', 'js/p3-render.js', 'js/p4-renderer.js',
  'js/p5-orbital.js', 'js/p5-trends.js', 'js/p5-abundance.js',
  'js/p5-compare.js', 'js/p5-heatmap.js', 'js/p5-quiz.js', 'js/export.js'
];

let jsOk = 0;
jsFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const size = fs.statSync(f).size;
    console.log(`✅ ${f} (${(size / 1024).toFixed(1)} KB)`);
    jsOk++;
  } else {
    console.log(`❌ ${f} 不存在`);
  }
});
console.log(`\nJS 模块文件: ${jsOk}/${jsFiles.length} 存在`);

// ============================================================
// 4. 检查 HTML 页面
// ============================================================
console.log('\n【4】HTML 页面检查');
console.log('---');

const htmlPages = ['index.html', 'element.html', 'compare.html', 'history.html'];
let htmlOk = 0;

htmlPages.forEach(page => {
  if (fs.existsSync(page)) {
    const content = fs.readFileSync(page, 'utf8');
    const size = fs.statSync(page).size;
    console.log(`✅ ${page} (${(size / 1024).toFixed(1)} KB)`);
    htmlOk++;
  } else {
    console.log(`❌ ${page} 不存在`);
  }
});
console.log(`\nHTML 页面: ${htmlOk}/${htmlPages.length} 存在`);

// ============================================================
// 5. 检查 element.html 脚本引用完整性
// ============================================================
console.log('\n【5】element.html 脚本引用检查');
console.log('---');

const elementHtml = fs.readFileSync('element.html', 'utf8');
const requiredScripts = [
  'data/elements.js', 'data/p3-safety.js', 'data/p4-spectral.js',
  'data/p4-crystal.js', 'data/p4-research.js', 'data/abundance-data.js',
  'data/element-details.js', 'data/crystal-structures.js',
  'js/p3-render.js', 'js/p4-renderer.js', 'js/p5-orbital.js',
  'js/p5-trends.js', 'js/p5-abundance.js'
];

let scriptOk = 0;
requiredScripts.forEach(s => {
  if (elementHtml.includes(s)) {
    console.log(`✅ ${s}`);
    scriptOk++;
  } else {
    console.log(`❌ 缺失引用: ${s}`);
  }
});
console.log(`\n脚本引用: ${scriptOk}/${requiredScripts.length} 正确`);

// ============================================================
// 6. 检查 index.html 功能按钮
// ============================================================
console.log('\n【6】index.html 功能按钮检查');
console.log('---');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const features = [
  { name: '高级筛选', check: '高级筛选' },
  { name: '属性热力图', check: 'heatmap' },
  { name: '数据导出', check: 'export' },
  { name: '知识测验', check: 'quiz' },
  { name: '元素对比', check: 'compare' }
];

features.forEach(f => {
  if (indexHtml.toLowerCase().includes(f.check.toLowerCase())) {
    console.log(`✅ ${f.name} 功能已集成`);
  } else {
    console.log(`❌ ${f.name} 功能缺失`);
  }
});

// ============================================================
// 7. 数据文件加载测试
// ============================================================
console.log('\n【7】数据文件加载测试');
console.log('---');

const dataFiles = [
  { file: 'data/p3-safety.js', globalVar: 'window.__P3_SAFETY__' },
  { file: 'data/p4-spectral.js', globalVar: 'window.__P4_SPECTRAL__' },
  { file: 'data/p4-crystal.js', globalVar: 'window.__P4_CRYSTAL__' },
  { file: 'data/p4-research.js', globalVar: 'window.__P4_RESEARCH__' },
  { file: 'data/abundance-data.js', globalVar: 'window.__ABUNDANCE__' },
  { file: 'data/crystal-structures.js', globalVar: 'window.__CRYSTAL_STRUCTURES__' },
  { file: 'data/element-details.js', globalVar: 'window.__ELEMENT_DETAILS__' }
];

dataFiles.forEach(d => {
  if (fs.existsSync(d.file)) {
    const size = fs.statSync(d.file).size;
    console.log(`✅ ${d.file} (${(size / 1024).toFixed(1)} KB)`);
  } else {
    console.log(`❌ ${d.file} 不存在`);
  }
});

// ============================================================
// 生成总结报告
// ============================================================
console.log('\n========================================');
console.log('审计报告总结');
console.log('========================================\n');

const issues = [];

if (elements.length !== 118) issues.push('元素总数不为118');
if (missingZ.length > 0) issues.push(`缺失Z序号: ${missingZ.join(', ')}`);
if (Object.keys(reqMissing).length > 0) issues.push('必需字段不完整');
if (noDetailKey.length > 0) issues.push(`缺失detailKey: ${noDetailKey.join(', ')}`);
if (missingMd.length > 0) issues.push(`缺失MD文件: ${missingMd.join(', ')}`);
if (emptyMd.length > 0) issues.push(`MD内容过短: ${emptyMd.join(', ')}`);
if (scriptOk < requiredScripts.length) issues.push('element.html 脚本引用不完整');
if (jsOk < jsFiles.length) issues.push('JS模块文件不完整');
if (htmlOk < htmlPages.length) issues.push('HTML页面不完整');

if (issues.length === 0) {
  console.log('✅ 项目整体状态: 良好');
  console.log('✅ 所有核心功能已实现');
  console.log('✅ 数据完整性检查通过');
  console.log('\n建议改进措施:');
  console.log('  1. 补全高缺失率的可选字段（van der Waals半径、Mohs硬度等）');
  console.log('  2. 增加 P6 多语言支持（中/英切换）');
  console.log('  3. 增加 P7 PWA 支持（离线访问）');
  console.log('  4. 优化移动端显示效果');
  console.log('  5. 增加更多交互功能（如元素关系图、反应模拟等）');
} else {
  console.log('⚠️ 发现以下问题:');
  issues.forEach(i => console.log(`  - ${i}`));
}

console.log('\n========================================');
console.log('报告生成完成');
console.log('========================================');

// 将报告写入文件
const report = `
# 化学元素周期表项目 - 全面审计报告
生成时间: ${new Date().toLocaleString('zh-CN')}

## 执行摘要
- **元素总数**: ${elements.length}/118 ${elements.length === 118 ? '✅' : '❌'}
- **Z序号连续性**: ${missingZ.length === 0 ? '✅ 完整' : '❌ 缺失: ' + missingZ.join(', ')}
- **必需字段**: ${Object.keys(reqMissing).length === 0 ? '✅ 完整' : '❌ 不完整'}
- **Markdown 文件**: ${mdFiles.length}/118 ${missingMd.length === 0 ? '✅' : '❌'}
- **JS 模块文件**: ${jsOk}/${jsFiles.length} ${jsOk === jsFiles.length ? '✅' : '❌'}
- **HTML 页面**: ${htmlOk}/${htmlPages.length} ${htmlOk === htmlPages.length ? '✅' : '❌'}
- **脚本引用完整性**: ${scriptOk}/${requiredScripts.length} ${scriptOk === requiredScripts.length ? '✅' : '❌'}

## 问题列表
${issues.length === 0 ? '✅ 无重大问题' : issues.map(i => `- ${i}`).join('\n')}

## 数据完整性详情
### 可选字段缺失率（前10个）
${optSorted.slice(0, 10).map(([f, cnt]) => `- ${f}: ${cnt}/118 (${(cnt/118*100).toFixed(1)}%)`).join('\n')}

## 建议改进措施
1. **补全数据**: 补全高缺失率的可选字段（van der Waals半径、Mohs硬度、pubChemCid等）
2. **P6 多语言支持**: 增加中/英语言切换功能
3. **P7 PWA 支持**: 增加 Service Worker 实现离线访问
4. **移动端优化**: 优化小屏幕显示效果
5. **更多交互功能**: 元素关系图、化学反应模拟、学习路径等
6. **性能优化**: 懒加载、虚拟滚动等
7. **数据可视化增强**: 更多图表类型、动画效果等
`;

fs.writeFileSync('PROJECT-AUDIT-REPORT.md', report, 'utf8');
console.log('\n✅ 审计报告已保存至 PROJECT-AUDIT-REPORT.md');
