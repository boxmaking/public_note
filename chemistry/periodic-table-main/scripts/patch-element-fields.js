/**
 * 元素数据字段补全脚本 — 直接修改 elements.js
 * 用正则替换将 null 值替换为实际数据
 * 仅修改确认可补全的字段，保留确实无法测定的 null
 *
 * 运行：node patch-element-fields.js
 */
const fs = require('fs');
const path = require('path');

const JS_FILE = path.join(__dirname, 'data', 'elements.js');
const content = fs.readFileSync(JS_FILE, 'utf-8');

// 补全数据：{ z: { field: value } }
// 仅包含有实际科学数据的字段值
const PATCHES = {
  // ─── 离子半径（常见离子，单位pm）───
  8:  { ionicRadius: 140 },     // O²⁻
  9:  { ionicRadius: 133 },     // F⁻
  15: { ionicRadius: 212 },     // P³⁻
  17: { ionicRadius: 181 },     // Cl⁻
  35: { ionicRadius: 196 },     // Br⁻
  3:  { ionicRadius: 76, shearModulus: 4.2 },   // Li⁺
  4:  { ionicRadius: 45, shearModulus: 14.5, stdElectrodePotential: -1.85, redoxCouple: 'Be2+/Be', electrochemicalEquivalent: 0.168 },
  11: { ionicRadius: 102 },     // Na⁺
  12: { ionicRadius: 72, shearModulus: 17 },    // Mg²⁺
  19: { ionicRadius: 138, shearModulus: 1.3 },  // K⁺
  20: { ionicRadius: 100, shearModulus: 7.4, annualProduction: 310000 }, // Ca²⁺
  23: { ionicRadius: 64, shearModulus: 47 },    // V
  24: { ionicRadius: 64, shearModulus: 115 },   // Cr
  27: { ionicRadius: 74.5, shearModulus: 75 },  // Co²⁺
  28: { ionicRadius: 69, shearModulus: 76 },    // Ni²⁺
  31: { ionicRadius: 62, bulkModulus: 70, stdElectrodePotential: -0.55, redoxCouple: 'Ga3+/Ga', electrochemicalEquivalent: 0.229 },
  39: { ionicRadius: 90 },
  40: { ionicRadius: 72 },
  43: { ionicRadius: 64.5 },
  44: { ionicRadius: 67, shearModulus: 173 },
  47: { ionicRadius: 115, shearModulus: 30.2 },
  48: { ionicRadius: 95, shearModulus: 19.2 },
  49: { bulkModulus: 41.5 },
  51: { ionicRadius: 76 },
  72: { ionicRadius: 71 },
  75: { ionicRadius: 63 },
  76: { ionicRadius: 63 },
  79: { ionicRadius: 91 },
  80: { ionicRadius: 102 },
  83: { ionicRadius: 103 },
  55: { ionicRadius: 167, shearModulus: 1.5 },
  56: { ionicRadius: 135, shearModulus: 6.3 },
  87: { ionicRadius: 180 },
  88: { ionicRadius: 148 },
  84: { ionicRadius: 67 },
  // ─── 镧系 ionicRadius (Ln³⁺) ───
  57: { ionicRadius: 103.2 }, 58: { ionicRadius: 102 }, 59: { ionicRadius: 99 },
  60: { ionicRadius: 98.3 }, 61: { ionicRadius: 97 }, 62: { ionicRadius: 95.8 },
  63: { ionicRadius: 94.7 }, 64: { ionicRadius: 93.8 }, 65: { ionicRadius: 92.3 },
  66: { ionicRadius: 91.2 }, 67: { ionicRadius: 90.1 }, 68: { ionicRadius: 89 },
  69: { ionicRadius: 88 }, 70: { ionicRadius: 86.8 }, 71: { ionicRadius: 86.1 },
  // ─── 锕系 ionicRadius ───
  89: { ionicRadius: 112 }, 90: { ionicRadius: 94 }, 91: { ionicRadius: 89 },
  92: { ionicRadius: 83 }, 93: { ionicRadius: 87 }, 94: { ionicRadius: 85 },
  95: { ionicRadius: 97.5 }, 96: { ionicRadius: 95 }, 97: { ionicRadius: 83 },
  98: { ionicRadius: 82 },
  // ─── 补全 annualProduction ───
  19: { annualProduction: 44000 },   // K (估计)
  34: { productionMethod: 'SeO₂还原 / 从铜电解副产物回收' },
};

let patched = 0;
let result = content;

for (const [zStr, fields] of Object.entries(PATCHES)) {
  const z = parseInt(zStr);
  for (const [field, value] of Object.entries(fields)) {
    // 在 elements.js 中找到 z:X 的元素对象
    // 搜索该对象中 field:null 的位置并替换
    // 策略：找到包含 {z:X,...field:null,...} 的行段

    // 两种可能的格式：
    // 1. 紧凑格式：{z:6,...ionicRadius:null,...}
    // 2. 字段在换行时（本项目使用紧凑格式）

    // 方法：在 z:X 的对象范围内，找到 field:null 并替换为 field:value
    // 由于每个元素是一个完整的 {...} 对象，我们可以先定位对象边界

    // 使用简单的正则：在 z:X 后面找到 field:null
    // 注意：元素对象可能跨多行，但本项目格式是紧凑单行

    // 更安全的方法：逐元素处理
    const zPattern = `{z:${z},`;
    const zIdx = result.indexOf(zPattern);
    if (zIdx === -1) continue;

    // 找到这个对象的结束 '}'
    let bracketCount = 1;
    let objEnd = zIdx + zPattern.length;
    while (bracketCount > 0 && objEnd < result.length) {
      if (result[objEnd] === '{') bracketCount++;
      else if (result[objEnd] === '}') bracketCount--;
      objEnd++;
    }

    // 提取这个元素对象的文本
    const objText = result.substring(zIdx, objEnd);

    // 在对象文本中替换 field:null → field:value
    let newObjText = objText;

    // 格式化替换值
    let valueStr;
    if (typeof value === 'string') {
      valueStr = `'${value}'`;
    } else if (typeof value === 'number') {
      valueStr = String(value);
    } else {
      valueStr = String(value);
    }

    // 替换 field:null
    const nullPattern = `${field}:null`;
    if (newObjText.includes(nullPattern)) {
      newObjText = newObjText.replace(nullPattern, `${field}:${valueStr}`);
      result = result.substring(0, zIdx) + newObjText + result.substring(objEnd);
      patched++;
      console.log(`  ✅ z=${z} ${field}:null → ${field}:${valueStr}`);
    } else {
      // field 不为 null 或不存在 — 检查是否需要添加新字段
      const fieldExists = newObjText.includes(`${field}:`);
      if (!fieldExists) {
        // 在对象末尾添加字段
        // 找到最后一个 }, 之前的位置
        newObjText = newObjText.replace(/,\}/, `,${field}:${valueStr}}`);
        if (!newObjText.includes(`${field}:${valueStr}`)) {
          // 对象可能以 } 结尾但没有逗号在前面
          newObjText = newObjText.replace(/\}$/, `,${field}:${valueStr}}`);
        }
        result = result.substring(0, zIdx) + newObjText + result.substring(objEnd);
        patched++;
        console.log(`  ✅ z=${z} 添加新字段 ${field}:${valueStr}`);
      }
    }
  }
}

// 写回文件
fs.writeFileSync(JS_FILE, result, 'utf-8');
console.log(`\n总计补全 ${patched} 个字段`);
console.log('elements.js 已更新！');
