/**
 * 数据验证脚本 - 与权威数据库对比
 * 对比 NIST Chemistry WebBook、PubChem 数据
 * 生成数据验证报告
 */

// ===== 权威数据库数据（手动录入，来自 NIST/PubChem）=====
const AUTHORITATIVE_DATA = {
  'Fe': {  // 铁
    name: 'Iron',
    symbol: 'Fe',
    atomicNumber: 26,
    atomicWeight: 55.845,
    meltingPoint: 1538,  // °C
    boilingPoint: 2861,  // °C
    density: 7.874,     // g/cm³ (20°C)
    electronegativity: 1.83,
    ionizationEnergy: 762.5,  // kJ/mol
    source: 'NIST Chemistry WebBook'
  },
  'Cu': {  // 铜
    name: 'Copper',
    symbol: 'Cu',
    atomicNumber: 29,
    atomicWeight: 63.546,
    meltingPoint: 1084.62,  // °C
    boilingPoint: 2560,     // °C
    density: 8.96,        // g/cm³ (20°C)
    electronegativity: 1.90,
    ionizationEnergy: 745.5,   // kJ/mol
    source: 'NIST Chemistry WebBook'
  },
  'Al': {  // 铝
    name: 'Aluminum',
    symbol: 'Al',
    atomicNumber: 13,
    atomicWeight: 26.9815385,
    meltingPoint: 660.32,   // °C
    boilingPoint: 2519,     // °C
    density: 2.698,      // g/cm³ (20°C)
    electronegativity: 1.61,
    ionizationEnergy: 577.5,   // kJ/mol
    source: 'NIST Chemistry WebBook'
  },
  'C': {  // 碳（石墨）
    name: 'Carbon (graphite)',
    symbol: 'C',
    atomicNumber: 6,
    atomicWeight: 12.0107,
    meltingPoint: 3550,    // °C (升华）
    boilingPoint: 4027,    // °C
    density: 2.267,     // g/cm³ (石墨）
    electronegativity: 2.55,
    ionizationEnergy: 1086.5,  // kJ/mol
    source: 'NIST Chemistry WebBook'
  },
  'Si': {  // 硅
    name: 'Silicon',
    symbol: 'Si',
    atomicNumber: 14,
    atomicWeight: 28.0855,
    meltingPoint: 1414,     // °C
    boilingPoint: 3265,     // °C
    density: 2.3296,    // g/cm³ (20°C)
    electronegativity: 1.90,
    ionizationEnergy: 786.5,    // kJ/mol
    source: 'NIST Chemistry WebBook'
  }
};

// ===== 数据对比函数 =====
function validateElementData(symbol, authoritative) {
  if (typeof ELEMENTS === 'undefined') {
    return { error: 'ELEMENTS data not loaded' };
  }
  
  // 查找元素
  const el = ELEMENTS.find(e => e.symbol === symbol);
  if (!el) {
    return { error: 'Element ' + symbol + ' not found in local data' };
  }
  
  const differences = [];
  const warnings = [];
  
  // 对比原子量
  if (el.mass && Math.abs(el.mass - authoritative.atomicWeight) > 0.01) {
    differences.push({
      property: 'atomicWeight',
      local: el.mass,
      authoritative: authoritative.atomicWeight,
      diff: el.mass - authoritative.atomicWeight,
      unit: 'u'
    });
  }
  
  // 对比熔点
  if (el.meltingPoint !== null && authoritative.meltingPoint !== null) {
    const diff = Math.abs(el.meltingPoint - authoritative.meltingPoint);
    if (diff > 5) {  // 差异 > 5°C 警告
      differences.push({
        property: 'meltingPoint',
        local: el.meltingPoint,
        authoritative: authoritative.meltingPoint,
        diff: el.meltingPoint - authoritative.meltingPoint,
        unit: '°C'
      });
    }
  }
  
  // 对比沸点
  if (el.boilingPoint !== null && authoritative.boilingPoint !== null) {
    const diff = Math.abs(el.boilingPoint - authoritative.boilingPoint);
    if (diff > 10) {  // 差异 > 10°C 警告
      differences.push({
        property: 'boilingPoint',
        local: el.boilingPoint,
        authoritative: authoritative.boilingPoint,
        diff: el.boilingPoint - authoritative.boilingPoint,
        unit: '°C'
      });
    }
  }
  
  // 对比密度
  if (el.density !== null && authoritative.density !== null) {
    const diff = Math.abs(el.density - authoritative.density);
    const percent = (diff / authoritative.density) * 100;
    if (percent > 2) {  // 差异 > 2% 警告
      differences.push({
        property: 'density',
        local: el.density,
        authoritative: authoritative.density,
        diff: el.density - authoritative.density,
        percent: percent.toFixed(2) + '%',
        unit: 'g/cm³'
      });
    }
  }
  
  // 对比电负性
  if (el.electronegativity !== null && authoritative.electronegativity !== null) {
    const diff = Math.abs(el.electronegativity - authoritative.electronegativity);
    if (diff > 0.1) {  // 差异 > 0.1 警告
      differences.push({
        property: 'electronegativity',
        local: el.electronegativity,
        authoritative: authoritative.electronegativity,
        diff: el.electronegativity - authoritative.electronegativity,
        unit: 'Pauling scale'
      });
    }
  }
  
  return {
    symbol: symbol,
    name: el.name,
    differences: differences,
    warnings: warnings,
    authoritativeSource: authoritative.source,
    isMatch: differences.length === 0
  };
}

// ===== 生成验证报告 =====
function generateValidationReport() {
  const results = [];
  const symbols = Object.keys(AUTHORITATIVE_DATA);
  
  symbols.forEach(function(symbol) {
    const authData = AUTHORITATIVE_DATA[symbol];
    const result = validateElementData(symbol, authData);
    results.push(result);
  });
  
  // 生成报告
  let report = '# 数据验证报告\n\n';
  report += '**对比数据库**：NIST Chemistry WebBook、PubChem\n';
  report += '**验证时间**：' + new Date().toLocaleDateString('zh-CN') + '\n\n';
  report += '---\n\n';
  
  // 统计
  const total = results.length;
  const matched = results.filter(r => r.isMatch).length;
  const withDiff = results.filter(r => !r.isMatch && !r.error).length;
  const errors = results.filter(r => r.error).length;
  
  report += '## 验证统计\n\n';
  report += '- **总验证元素**：' + total + ' 个\n';
  report += '- **数据匹配**：' + matched + ' 个（' + (matched/total*100).toFixed(1) + '%）\n';
  report += '- **存在差异**：' + withDiff + ' 个\n';
  report += '- **加载错误**：' + errors + ' 个\n\n';
  report += '---\n\n';
  
  // 详细结果
  report += '## 详细验证结果\n\n';
  
  results.forEach(function(result) {
    if (result.error) {
      report += '### ' + result.symbol + ' - ❌ 错误\n\n';
      report += '> ' + result.error + '\n\n';
      return;
    }
    
    if (result.isMatch) {
      report += '### ' + result.symbol + '（' + result.name + '） - ✅ 数据匹配\n\n';
      report += '> 本地数据与 ' + result.authoritativeSource + ' 数据一致。\n\n';
    } else {
      report += '### ' + result.symbol + '（' + result.name + '） - ⚠️ 存在差异\n\n';
      report += '**差异详情**：\n\n';
      report += '| 属性 | 本地数据 | 权威数据 | 差异 | 单位 |\n';
      report += '|------|---------|---------|------|------|\n';
      
      result.differences.forEach(function(diff) {
        report += '| ' + diff.property + ' | ' + diff.local + ' | ' + diff.authoritative + ' | ' + diff.diff.toFixed(2) + ' | ' + (diff.unit || '') + ' |\n';
      });
      
      report += '\n> **建议**：根据 ' + result.authoritativeSource + ' 修正本地数据。\n\n';
    }
  });
  
  report += '---\n\n';
  report += '## 后续建议\n\n';
  report += '1. 根据 NIST Chemistry WebBook 修正存在差异的数据\n';
  report += '2. 扩大验证范围至更多元素（目前仅验证 5 个重点元素）\n';
  report += '3. 添加更多权威数据源（PubChem、WebElements、Royal Society of Chemistry）\n';
  report += '4. 建立自动化数据验证流程（定期运行）\n\n';
  
  return report;
}

// ===== 导出函数 =====
window.validateElementData = validateElementData;
window.generateValidationReport = generateValidationReport;
window.AUTHORITATIVE_DATA = AUTHORITATIVE_DATA;

console.log('✅ 数据验证脚本已加载');
console.log('   已加载 ' + Object.keys(AUTHORITATIVE_DATA).length + ' 个元素的权威数据');
