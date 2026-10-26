/**
 * 元素数据字段补全脚本（运行时版本）
 * 
 * 功能：在浏览器中运行时，自动补全缺失的数据字段
 * 使用方法：在 index.html 中引入此脚本
 */

const DataCompleter = {
  // 缺失的数据
  missingData: {
    // 电子亲和能 (electronAffinity) - kJ/mol
    electronAffinity: {
      1: 72.8, 2: 0, 3: 59.6, 4: 0, 5: 26.7, 6: 121.9, 7: -7.0, 8: 141.0, 9: 328.0, 10: 0,
      11: 52.9, 12: 0, 13: 42.5, 14: 134.1, 15: 72.0, 16: 200.0, 17: 349.0, 18: 0,
      19: 48.4, 29: 118.4, 31: 28.9, 32: 119.0, 33: 78.0, 34: 195.0, 35: 324.5, 36: 0,
      37: 46.9, 47: 125.9, 49: 29.0, 50: 107.0, 51: 101.0, 52: 190.2, 53: 295.2, 54: 0,
      55: 45.5, 79: 222.8, 85: 233.0
    },
    
    // 原子半径 (atomicRadius) - pm
    atomicRadius: {
      1: 25, 2: 31, 3: 145, 4: 105, 5: 85, 6: 70, 7: 65, 8: 60, 9: 50, 10: 38,
      11: 180, 12: 150, 13: 125, 14: 110, 15: 100, 16: 100, 17: 100, 18: 71,
      19: 220, 20: 180, 21: 160, 22: 140, 23: 135, 24: 140, 25: 140, 26: 140, 27: 135, 28: 135,
      29: 135, 30: 135, 31: 130, 32: 125, 33: 115, 34: 115, 35: 115, 36: 116
    },
    
    // 范德华半径 (vdwRadius) - pm
    vdwRadius: {
      1: 120, 2: 140, 3: 182, 4: 0, 5: 213, 6: 170, 7: 155, 8: 152, 9: 147, 10: 154,
      11: 227, 12: 0, 13: 0, 14: 210, 15: 198, 16: 180, 17: 175, 18: 188,
      19: 275, 20: 0, 37: 303, 38: 0, 55: 343, 56: 0
    }
  },
  
  // 补全数据
  completeData() {
    if (!window.ELEMENTS || !Array.isArray(window.ELEMENTS)) {
      console.warn('⚠️ ELEMENTS not found, skipping data completion');
      return;
    }
    
    console.log('📊 开始补全缺失数据字段...');
    
    let counts = { electronAffinity: 0, atomicRadius: 0, vdwRadius: 0 };
    
    window.ELEMENTS.forEach(el => {
      // 补全电子亲和能
      if (el.electronAffinity === undefined && this.missingData.electronAffinity[el.z] !== undefined) {
        el.electronAffinity = this.missingData.electronAffinity[el.z];
        counts.electronAffinity++;
      }
      
      // 补全原子半径
      if (el.atomicRadius === undefined && this.missingData.atomicRadius[el.z] !== undefined && this.missingData.atomicRadius[el.z] > 0) {
        el.atomicRadius = this.missingData.atomicRadius[el.z];
        counts.atomicRadius++;
      }
      
      // 补全范德华半径
      if (el.vdwRadius === undefined && this.missingData.vdwRadius[el.z] !== undefined && this.missingData.vdwRadius[el.z] > 0) {
        el.vdwRadius = this.missingData.vdwRadius[el.z];
        counts.vdwRadius++;
      }
    });
    
    console.log(`✅ 补全完成：`);
    console.log(`  - 电子亲和能: ${counts.electronAffinity} 个元素`);
    console.log(`  - 原子半径: ${counts.atomicRadius} 个元素`);
    console.log(`  - 范德华半径: ${counts.vdwRadius} 个元素`);
  },
  
  // 初始化
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.completeData());
    } else {
      this.completeData();
    }
  }
};

// 自动执行
DataCompleter.init();

// 导出
window.DataCompleter = DataCompleter;
