#!/usr/bin/env node
/**
 * 功能测试脚本 - 验证所有模块是否正常
 */

const fs = require('fs');
const path = require('path');

console.log('=== 化学元素周期表项目 - 功能测试 ===\n');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`✅ ${name}`);
    passed++;
  } catch (e) {
    console.log(`❌ ${name}: ${e.message}`);
    failed++;
  }
}

// 测试1: 检查所有必需文件是否存在
console.log('\n📁 测试1: 文件完整性检查');
const requiredFiles = [
  'index.html',
  'element.html',
  'compare.html',
  'history.html',
  'manifest.json',
  'sw.js',
  'icon-192.png',
  'icon-512.png',
  'css/main.css',
  'css/element.css',
  'css/table.css',
  'data/elements.js',
  'data/element-details.js',
  'data/p3-safety.js',
  'data/p4-spectral.js',
  'data/p4-crystal.js',
  'data/p4-research.js',
  'data/abundance-data.js',
  'data/crystal-structures.js',
  'js/table.js',
  'js/search.js',
  'js/p3-render.js',
  'js/p4-renderer.js',
  'js/p5-orbital.js',
  'js/p5-trends.js',
  'js/p5-abundance.js',
  'js/p5-compare.js',
  'js/p5-heatmap.js',
  'js/p5-quiz.js',
  'js/export.js',
  'js/i18n.js',
  'js/data-completer.js',
  'js/element-details-enhanced.js'
];

requiredFiles.forEach(file => {
  test(`文件存在: ${file}`, () => {
    if (!fs.existsSync(file)) {
      throw new Error(`文件不存在: ${file}`);
    }
  });
});

// 测试2: 检查HTML页面中的脚本引用
console.log('\n🔗 测试2: HTML脚本引用检查');
const htmlFiles = ['index.html', 'element.html', 'compare.html', 'history.html'];

htmlFiles.forEach(htmlFile => {
  test(`HTML引用检查: ${htmlFile}`, () => {
    const content = fs.readFileSync(htmlFile, 'utf8');
    
    // 检查必需脚本
    const requiredScripts = [
      'js/i18n.js',
      'js/data-completer.js'
    ];
    
    requiredScripts.forEach(script => {
      if (!content.includes(script)) {
        throw new Error(`缺少脚本引用: ${script}`);
      }
    });
    
    // 检查Manifest引用
    if (!content.includes('manifest.json')) {
      throw new Error('缺少Manifest引用');
    }
    
    // 检查Service Worker注册
    if (!content.includes('serviceWorker.register')) {
      throw new Error('缺少Service Worker注册代码');
    }
  });
});

// 测试3: 检查PWA配置
console.log('\n📱 测试3: PWA配置检查');
test('Manifest.json格式正确', () => {
  const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf8'));
  
  if (!manifest.name) throw new Error('缺少name字段');
  if (!manifest.short_name) throw new Error('缺少short_name字段');
  if (!manifest.icons || manifest.icons.length === 0) throw new Error('缺少icons字段');
  if (manifest.display !== 'standalone') throw new Error('display应为standalone');
});

test('Service Worker可访问', () => {
  const swContent = fs.readFileSync('sw.js', 'utf8');
  
  if (!swContent.includes('self.addEventListener')) {
    throw new Error('Service Worker缺少事件监听器');
  }
});

// 测试4: 检查JavaScript语法
console.log('\n🔍 测试4: JavaScript语法检查');
const jsFiles = [
  'js/i18n.js',
  'js/data-completer.js',
  'js/element-details-enhanced.js',
  'js/p3-render.js',
  'js/p4-renderer.js',
  'js/p5-orbital.js',
  'js/p5-trends.js',
  'js/p5-abundance.js',
  'js/p5-compare.js',
  'js/p5-heatmap.js',
  'js/p5-quiz.js'
];

jsFiles.forEach(jsFile => {
  test(`JS语法正确: ${jsFile}`, () => {
    try {
      require('child_process').execSync(`node --check "${jsFile}"`, {
        stdio: 'pipe'
      });
    } catch (e) {
      throw new Error(`语法错误: ${e.stderr || e.message}`);
    }
  });
});

// 测试5: 检查元素详情生成器
console.log('\n📝 测试5: 元素详情生成器检查');
test('增强生成器包含化学性质模板', () => {
  const enhancedContent = fs.readFileSync('js/element-details-enhanced.js', 'utf8');
  
  if (!enhancedContent.includes('generateChemicalProps')) {
    throw new Error('缺少generateChemicalProps函数');
  }
  
  if (!enhancedContent.includes('generateApplications')) {
    throw new Error('缺少generateApplications函数');
  }
  
  if (!enhancedContent.includes('generatePrecautions')) {
    throw new Error('缺少generatePrecautions函数');
  }
  
  if (!enhancedContent.includes('generateLeakageMeasures')) {
    throw new Error('缺少generateLeakageMeasures函数');
  }
});

// 测试6: 检查数据完整性
console.log('\n📊 测试6: 数据完整性检查');
test('elements.js包含118个元素', () => {
  const content = fs.readFileSync('data/elements.js', 'utf8');
  const matches = content.match(/z:\d+/g);
  
  if (!matches || matches.length !== 118) {
    throw new Error(`期望118个元素，实际找到${matches ? matches.length : 0}个`);
  }
});

// 汇总结果
console.log('\n=== 测试结果汇总 ===');
console.log(`✅ 通过: ${passed}`);
console.log(`❌ 失败: ${failed}`);
console.log(`📊 总计: ${passed + failed}`);

if (failed === 0) {
  console.log('\n🎉 所有测试通过！项目功能完整。');
} else {
  console.log(`\n⚠️  有${failed}个测试失败，需要修复。`);
}

process.exit(failed > 0 ? 1 : 0);
