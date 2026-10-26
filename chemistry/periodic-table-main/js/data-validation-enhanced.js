/**
 * 数据验证增强模块
 * 与权威数据库（NIST、PubChem）对比验证
 * 由于浏览器限制，使用内置的权威数据副本进行对比
 */

// ===== 权威数据库副本（NIST Chemistry WebBook 等来源）=====
const AUTHORITATIVE_DATA = {
  'H': {
    name: 'Hydrogen',
    atomicMass: 1.00794,
    meltingPoint: -259.16,  // °C
    boilingPoint: -252.87,  // °C
    density: 0.08988,     // g/L (气体)
    electronegativity: 2.20,
    source: 'NIST Chemistry WebBook'
  },
  'He': {
    name: 'Helium',
    atomicMass: 4.002602,
    meltingPoint: -272.2,  // °C (加压)
    boilingPoint: -268.93,  // °C
    density: 0.1785,     // g/L (气体)
    electronegativity: null,  // 稀有气体
    source: 'NIST Chemistry WebBook'
  },
  'Li': {
    name: 'Lithium',
    atomicMass: 6.941,
    meltingPoint: 180.54,  // °C
    boilingPoint: 1342,     // °C
    density: 0.534,       // g/cm³
    electronegativity: 0.98,
    source: 'NIST Chemistry WebBook'
  },
  'Be': {
    name: 'Beryllium',
    atomicMass: 9.012182,
    meltingPoint: 1287,    // °C
    boilingPoint: 2470,    // °C
    density: 1.85,        // g/cm³
    electronegativity: 1.57,
    source: 'NIST Chemistry WebBook'
  },
  'B': {
    name: 'Boron',
    atomicMass: 10.811,
    meltingPoint: 2076,    // °C
    boilingPoint: 3927,    // °C
    density: 2.34,        // g/cm³
    electronegativity: 2.04,
    source: 'NIST Chemistry WebBook'
  },
  'C': {
    name: 'Carbon',
    atomicMass: 12.0107,
    meltingPoint: 3550,    // °C (金刚石，升华)
    boilingPoint: 4027,    // °C
    density: 2.267,      // g/cm³ (石墨)
    electronegativity: 2.55,
    source: 'NIST Chemistry WebBook'
  },
  'N': {
    name: 'Nitrogen',
    atomicMass: 14.0067,
    meltingPoint: -210.1,  // °C
    boilingPoint: -195.79, // °C
    density: 1.251,      // g/L (气体)
    electronegativity: 3.04,
    source: 'NIST Chemistry WebBook'
  },
  'O': {
    name: 'Oxygen',
    atomicMass: 15.9994,
    meltingPoint: -218.79, // °C
    boilingPoint: -182.96, // °C
    density: 1.429,      // g/L (气体)
    electronegativity: 3.44,
    source: 'NIST Chemistry WebBook'
  },
  'F': {
    name: 'Fluorine',
    atomicMass: 18.998403,
    meltingPoint: -219.67, // °C
    boilingPoint: -188.12, // °C
    density: 1.696,      // g/L (气体)
    electronegativity: 3.98,
    source: 'NIST Chemistry WebBook'
  },
  'Na': {
    name: 'Sodium',
    atomicMass: 22.989769,
    meltingPoint: 97.72,   // °C
    boilingPoint: 883,     // °C
    density: 0.968,      // g/cm³
    electronegativity: 0.93,
    source: 'NIST Chemistry WebBook'
  },
  'Mg': {
    name: 'Magnesium',
    atomicMass: 24.305,
    meltingPoint: 650,     // °C
    boilingPoint: 1090,    // °C
    density: 1.738,      // g/cm³
    electronegativity: 1.31,
    source: 'NIST Chemistry WebBook'
  },
  'Al': {
    name: 'Aluminum',
    atomicMass: 26.981538,
    meltingPoint: 660.32, // °C
    boilingPoint: 2519,    // °C
    density: 2.698,      // g/cm³
    electronegativity: 1.61,
    source: 'NIST Chemistry WebBook'
  },
  'Si': {
    name: 'Silicon',
    atomicMass: 28.0855,
    meltingPoint: 1414,    // °C
    boilingPoint: 3265,    // °C
    density: 2.329,      // g/cm³
    electronegativity: 1.90,
    source: 'NIST Chemistry WebBook'
  },
  'P': {
    name: 'Phosphorus',
    atomicMass: 30.973762,
    meltingPoint: 44.15,  // °C (白磷)
    boilingPoint: 280.5,  // °C
    density: 1.82,       // g/cm³ (白磷)
    electronegativity: 2.19,
    source: 'NIST Chemistry WebBook'
  },
  'S': {
    name: 'Sulfur',
    atomicMass: 32.065,
    meltingPoint: 115.21, // °C
    boilingPoint: 444.6,  // °C
    density: 2.067,      // g/cm³
    electronegativity: 2.58,
    source: 'NIST Chemistry WebBook'
  },
  'Cl': {
    name: 'Chlorine',
    atomicMass: 35.453,
    meltingPoint: -101.5, // °C
    boilingPoint: -34.04,  // °C
    density: 3.214,      // g/L (气体)
    electronegativity: 3.16,
    source: 'NIST Chemistry WebBook'
  },
  'K': {
    name: 'Potassium',
    atomicMass: 39.0983,
    meltingPoint: 63.38,   // °C
    boilingPoint: 759,     // °C
    density: 0.862,      // g/cm³
    electronegativity: 0.82,
    source: 'NIST Chemistry WebBook'
  },
  'Ca': {
    name: 'Calcium',
    atomicMass: 40.078,
    meltingPoint: 842,     // °C
    boilingPoint: 1484,    // °C
    density: 1.54,       // g/cm³
    electronegativity: 1.00,
    source: 'NIST Chemistry WebBook'
  },
  'Fe': {
    name: 'Iron',
    atomicMass: 55.845,
    meltingPoint: 1538,   // °C
    boilingPoint: 2861,   // °C
    density: 7.874,      // g/cm³
    electronegativity: 1.83,
    source: 'NIST Chemistry WebBook'
  },
  'Cu': {
    name: 'Copper',
    atomicMass: 63.546,
    meltingPoint: 1084.62, // °C
    boilingPoint: 2560,    // °C
    density: 8.96,       // g/cm³
    electronegativity: 1.90,
    source: 'NIST Chemistry WebBook'
  },
  'Zn': {
    name: 'Zinc',
    atomicMass: 65.38,
    meltingPoint: 419.53, // °C
    boilingPoint: 907,    // °C
    density: 7.134,     // g/cm³
    electronegativity: 1.65,
    source: 'NIST Chemistry WebBook'
  },
  'Ag': {
    name: 'Silver',
    atomicMass: 107.8682,
    meltingPoint: 961.78, // °C
    boilingPoint: 2162,   // °C
    density: 10.49,     // g/cm³
    electronegativity: 1.93,
    source: 'NIST Chemistry WebBook'
  },
  'Au': {
    name: 'Gold',
    atomicMass: 196.966569,
    meltingPoint: 1064.18, // °C
    boilingPoint: 2856,    // °C
    density: 19.282,    // g/cm³
    electronegativity: 2.54,
    source: 'NIST Chemistry WebBook'
  }
};

// ===== 验证函数 =====
class DataValidator {
  constructor() {
    this.results = [];
    this.discrepancies = [];
  }
  
  /**
   * 验证单个元素
   */
  validateElement(el) {
    const authoritative = AUTHORITATIVE_DATA[el.symbol];
    if (!authoritative) {
      return { status: 'no-data', element: el.symbol };
    }
    
    const discrepancies = [];
    
    // 检查相对原子质量
    if (el.atomicMass && authoritative.atomicMass) {
      const diff = Math.abs(el.atomicMass - authoritative.atomicMass);
      const tolerance = 0.01; // 允许0.01的差值
      if (diff > tolerance) {
        discrepancies.push({
          field: 'atomicMass',
          local: el.atomicMass,
          authoritative: authoritative.atomicMass,
          diff: diff,
          severity: diff > 1 ? 'high' : 'medium'
        });
      }
    }
    
    // 检查熔点
    if (el.meltingPoint !== undefined && authoritative.meltingPoint !== undefined) {
      const localMP = parseFloat(el.meltingPoint);
      const authMP = authoritative.meltingPoint;
      if (!isNaN(localMP) && !isNaN(authMP)) {
        const diff = Math.abs(localMP - authMP);
        if (diff > 5) { // 允许5°C的误差
          discrepancies.push({
            field: 'meltingPoint',
            local: localMP,
            authoritative: authMP,
            diff: diff,
            severity: diff > 100 ? 'high' : 'low'
          });
        }
      }
    }
    
    // 检查沸点
    if (el.boilingPoint !== undefined && authoritative.boilingPoint !== undefined) {
      const localBP = parseFloat(el.boilingPoint);
      const authBP = authoritative.boilingPoint;
      if (!isNaN(localBP) && !isNaN(authBP)) {
        const diff = Math.abs(localBP - authBP);
        if (diff > 5) { // 允许5°C的误差
          discrepancies.push({
            field: 'boilingPoint',
            local: localBP,
            authoritative: authBP,
            diff: diff,
            severity: diff > 100 ? 'high' : 'low'
          });
        }
      }
    }
    
    // 检查电负性
    if (el.electronegativity !== undefined && authoritative.electronegativity !== null) {
      const localEN = parseFloat(el.electronegativity);
      const authEN = authoritative.electronegativity;
      if (!isNaN(localEN) && !isNaN(authEN)) {
        const diff = Math.abs(localEN - authEN);
        if (diff > 0.1) { // 允许0.1的误差
          discrepancies.push({
            field: 'electronegativity',
            local: localEN,
            authoritative: authEN,
            diff: diff,
            severity: 'low'
          });
        }
      }
    }
    
    return {
      status: discrepancies.length > 0 ? 'discrepancies' : 'ok',
      element: el.symbol,
      name: el.name,
      discrepancies: discrepancies,
      authoritativeSource: authoritative.source
    };
  }
  
  /**
   * 验证所有元素
   */
  validateAll() {
    if (typeof ELEMENTS === 'undefined') {
      console.error('ELEMENTS 数据未加载');
      return;
    }
    
    this.results = [];
    this.discrepancies = [];
    
    ELEMENTS.forEach(el => {
      const result = this.validateElement(el);
      this.results.push(result);
      
      if (result.status === 'discrepancies') {
        this.discrepancies.push(result);
      }
    });
    
    return this.generateReport();
  }
  
  /**
   * 生成验证报告
   */
  generateReport() {
    let report = '# 数据验证报告\n\n';
    report += '**验证时间**：' + new Date().toLocaleString() + '\n\n';
    report += '**权威数据源**：NIST Chemistry WebBook\n\n';
    report += '---\n\n';
    
    // 统计
    const total = this.results.length;
    const ok = this.results.filter(r => r.status === 'ok').length;
    const discrepancies = this.discrepancies.length;
    const noData = this.results.filter(r => r.status === 'no-data').length;
    
    report += '## 统计概览\n\n';
    report += `- 总元素数：${total}\n`;
    report += `- 数据一致：${ok}（${(ok/total*100).toFixed(1)}%）\n`;
    report += `- 存在差异：${discrepancies}\n`;
    report += `- 无权威数据：${noData}\n\n`;
    
    // 差异详情
    if (this.discrepancies.length > 0) {
      report += '---\n\n';
      report += '## 差异详情\n\n';
      
      const highSeverity = this.discrepancies.filter(r => r.discrepancies.some(d => d.severity === 'high'));
      const mediumSeverity = this.discrepancies.filter(r => r.discrepancies.some(d => d.severity === 'medium'));
      const lowSeverity = this.discrepancies.filter(r => r.discrepancies.every(d => d.severity === 'low'));
      
      if (highSeverity.length > 0) {
        report += '### 严重差异（需立即修正）\n\n';
        highSeverity.forEach(r => {
          report += this.formatDiscrepancy(r);
        });
      }
      
      if (mediumSeverity.length > 0) {
        report += '### 中等差异（建议核查）\n\n';
        mediumSeverity.forEach(r => {
          report += this.formatDiscrepancy(r);
        });
      }
      
      if (lowSeverity.length > 0) {
        report += '### 轻微差异（可接受范围）\n\n';
        lowSeverity.forEach(r => {
          report += this.formatDiscrepancy(r);
        });
      }
    } else {
      report += '---\n\n';
      report += '## ✅ 验证结果\n\n';
      report += '所有已验证的数据均与权威数据库一致！\n\n';
    }
    
    // 建议
    report += '---\n\n';
    report += '## 建议\n\n';
    report += '1. 对于严重差异，请立即核实并修正本地数据\n';
    report += '2. 对于中等差异，建议核查数据来源\n';
    report += '3. 对于轻微差异，可考虑更新为权威数据\n';
    report += '4. 建议定期（每季度）运行此验证\n';
    report += '5. 可通过 https://webbook.nist.gov/chemistry/ 查询最新数据\n\n';
    
    return report;
  }
  
  /**
   * 格式化单个差异
   */
  formatDiscrepancy(r) {
    let md = `### ${r.element} (${r.name})\n\n`;
    md += `**权威来源**：${r.authoritativeSource}\n\n`;
    md += '| 字段 | 本地数据 | 权威数据 | 差值 | 严重度 |\n';
    md += '|------|----------|----------|------|--------|\n';
    
    r.discrepancies.forEach(d => {
      md += `| ${d.field} | ${d.local} | ${d.authoritative} | ${d.diff.toFixed(4)} | ${d.severity} |\n`;
    });
    
    md += '\n';
    return md;
  }
  
  /**
   * 获取验证结果（JSON格式）
   */
  getResultsJSON() {
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      source: 'NIST Chemistry WebBook',
      total: this.results.length,
      ok: this.results.filter(r => r.status === 'ok').length,
      discrepancies: this.discrepancies.length,
      noData: this.results.filter(r => r.status === 'no-data').length,
      details: this.results
    }, null, 2);
  }
}

// ===== 公开API =====
window.DataValidator = DataValidator;
window.AUTHORITATIVE_DATA = AUTHORITATIVE_DATA;

console.log('✅ 数据验证模块已加载（权威数据：' + Object.keys(AUTHORITATIVE_DATA).length + ' 个元素）');
