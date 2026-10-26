/**
 * 测试脚本 - 增强生成器 v3.0 功能测试
 * 测试所有118个元素的详情生成功能
 */

console.log('开始测试增强生成器 v3.0...');

const tests = [];
let passed = 0;
let failed = 0;

// 测试1: 检查 v3.0 生成器是否加载
tests.push({
  name: 'v3.0 生成器加载检查',
  test: () => {
    return typeof window.generateEnhancedMarkdownV3 === 'function';
  }
});

// 测试2: 检查依赖项
tests.push({
  name: '依赖项检查 (ELEMENTS)',
  test: () => {
    return typeof ELEMENTS !== 'undefined' && ELEMENTS.length === 118;
  }
});

// 测试3: 检查 CATEGORY_CN_ENHANCED
tests.push({
  name: '类别中文映射检查',
  test: () => {
    return typeof CATEGORY_CN_ENHANCED !== 'undefined' && 
           Object.keys(CATEGORY_CN_ENHANCED).length > 0;
  }
});

// 测试4-8: 测试各生成器函数
const generators = [
  { name: 'generateDiscoveryHistoryV3', desc: '发现史生成器' },
  { name: 'generatePhysicalPropertiesV3', desc: '物理性质生成器' },
  { name: 'generateChemicalPropsDetailedV3', desc: '化学性质生成器' },
  { name: 'generateApplicationsDetailedV3', desc: '应用原理生成器' },
  { name: 'generatePrecautionsV3', desc: '注意事项生成器' }
];

generators.forEach(gen => {
  tests.push({
    name: `${gen.desc}函数检查`,
    test: () => {
      return typeof window[gen.name] === 'function';
    }
  });
});

// 测试9: 生成前10个元素的详情
tests.push({
  name: '生成前10个元素详情',
  test: () => {
    try {
      for (let i = 0; i < 10; i++) {
        const el = ELEMENTS[i];
        const md = window.generateEnhancedMarkdownV3(el);
        if (!md || md.length < 100) {
          console.error(`元素 ${el.name} 生成失败`);
          return false;
        }
      }
      return true;
    } catch(e) {
      console.error('测试9错误:', e);
      return false;
    }
  }
});

// 测试10: 生成碱金属详情（检查化学方程式）
tests.push({
  name: '碱金属化学方程式生成',
  test: () => {
    try {
      const na = ELEMENTS.find(e => e.symbol === 'Na');
      const md = window.generateEnhancedMarkdownV3(na);
      return md.includes('2Na + 2H₂O') && md.includes('$$');
    } catch(e) {
      return false;
    }
  }
});

// 测试11: 生成过渡金属详情（检查应用原理）
tests.push({
  name: '过渡金属应用原理生成',
  test: () => {
    try {
      const fe = ELEMENTS.find(e => e.symbol === 'Fe');
      const md = window.generateEnhancedMarkdownV3(fe);
      return md.includes('血红蛋白') && md.includes('哈伯法');
    } catch(e) {
      return false;
    }
  }
});

// 测试12: 生成卤素详情（检查安全注意事项）
tests.push({
  name: '卤素安全注意事项生成',
  test: () => {
    try {
      const cl = ELEMENTS.find(e => e.symbol === 'Cl');
      const md = window.generateEnhancedMarkdownV3(cl);
      return md.includes('⚠️') && md.includes('通风橱');
    } catch(e) {
      return false;
    }
  }
});

// 测试13: 检查所有118个元素都能生成详情
tests.push({
  name: '所有118个元素生成检查',
  test: () => {
    try {
      let success = 0;
      for (let i = 0; i < ELEMENTS.length; i++) {
        const el = ELEMENTS[i];
        const md = window.generateEnhancedMarkdownV3(el);
        if (md && md.length > 100) {
          success++;
        }
      }
      console.log(`成功生成 ${success}/${ELEMENTS.length} 个元素详情`);
      return success === ELEMENTS.length;
    } catch(e) {
      console.error('测试13错误:', e);
      return false;
    }
  }
});

// 测试14: 检查发现史详细程度
tests.push({
  name: '发现史详细程度检查',
  test: () => {
    try {
      const testElements = ['H', 'He', 'Li', 'C', 'Fe', 'Cu', 'Au', 'U'];
      let detailed = 0;
      testElements.forEach(sym => {
        const el = ELEMENTS.find(e => e.symbol === sym);
        const md = window.generateEnhancedMarkdownV3(el);
        const historySection = md.split('### 一、发现与发展史')[1];
        if (historySection && historySection.length > 100) {
          detailed++;
        }
      });
      return detailed === testElements.length;
    } catch(e) {
      return false;
    }
  }
});

// 测试15: 检查化学方程式格式
tests.push({
  name: '化学方程式格式检查',
  test: () => {
    try {
      const elementsWithEquations = ['Na', 'Cl', 'Fe', 'Cu', 'C'];
      let hasEquations = 0;
      elementsWithEquations.forEach(sym => {
        const el = ELEMENTS.find(e => e.symbol === sym);
        const md = window.generateEnhancedMarkdownV3(el);
        if (md.includes('$$') || md.includes('\\(')) {
          hasEquations++;
        }
      });
      return hasEquations === elementsWithEquations.length;
    } catch(e) {
      return false;
    }
  }
});

// 运行所有测试
console.log(`\n总共 ${tests.length} 个测试\n`);
console.log('='.repeat(50));

tests.forEach((t, idx) => {
  const result = t.test();
  if (result) {
    passed++;
    console.log(`✅ 测试 ${idx + 1}: ${t.name}`);
  } else {
    failed++;
    console.log(`❌ 测试 ${idx + 1}: ${t.name}`);
  }
});

console.log('='.repeat(50));
console.log(`\n测试完成: ${passed} 通过, ${failed} 失败, 总共 ${tests.length} 个测试`);
console.log(`通过率: ${(passed / tests.length * 100).toFixed(1)}%`);

if (failed === 0) {
  console.log('\n🎉 所有测试通过！增强生成器 v3.0 工作正常。');
} else {
  console.log(`\n⚠️ 有 ${failed} 个测试失败，请检查。`);
}

// 输出样例详情（前3个元素）
console.log('\n生成样例（前3个元素）：\n');
for (let i = 0; i < 3; i++) {
  const el = ELEMENTS[i];
  console.log(`--- ${el.name}（${el.symbol}）---`);
  const md = window.generateEnhancedMarkdownV3(el);
  console.log(md.substring(0, 500) + '...\n');
}
