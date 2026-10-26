/**
 * 补全 elements.js 中的高缺失率可选字段
 * 数据来源：CRC Handbook, Wikipedia, NIST
 */

const vdwRadii = {
  // 稀有气体（van der Waals 半径最重要）
  'He': 140, 'Ne': 154, 'Ar': 188, 'Kr': 202, 'Xe': 216, 'Rn': 220,
  // 非金属
  'H': 120, 'C': 170, 'N': 155, 'O': 152, 'F': 147, 'P': 180, 'S': 180, 'Cl': 175, 'Se': 190, 'Br': 185, 'I': 198,
  // 金属（近似金属半径）
  'Li': 182, 'Be': 153, 'Na': 227, 'Mg': 173, 'Al': 184, 'Si': 210, 'K': 275, 'Ca': 231,
  'Sc': 211, 'Ti': 187, 'V': null, 'Cr': 189, 'Mn': 197, 'Fe': 194, 'Co': 192, 'Ni': 184, 'Cu': 186, 'Zn': 197,
  'Ga': 187, 'Ge': 211, 'As': 185, 'Rb': 303, 'Sr': 249, 'Zr': 209, 'Nb': 198, 'Mo': 190, 'Tc': null, 'Ru': 178, 'Rh': 173, 'Pd': 163, 'Ag': 186, 'Cd': 203,
  'In': 193, 'Sn': 217, 'Sb': 206, 'Te': 206, 'Cs': 343, 'Ba': 268,
  'Hf': 203, 'Ta': 200, 'W': 193, 'Re': 188, 'Os': 185, 'Ir': 180, 'Pt': 175, 'Au': 174, 'Hg': 189, 'Tl': 196, 'Pb': 202, 'Bi': 207, 'Po': 197,
  // 镧系
  'La': 240, 'Ce': 234, 'Pr': 239, 'Nd': 229, 'Pm': 233, 'Sm': 238, 'Eu': 231, 'Gd': 233, 'Tb': 225, 'Dy': 228, 'Ho': 226, 'Er': 226, 'Tm': 222, 'Yb': 242, 'Lu': 217,
  // 锕系（估算）
  'Ac': 228, 'Th': 232, 'Pa': 223, 'U': 223, 'Np': 221, 'Pu': 220, 'Am': 222, 'Cm': 223, 'Bk': 223, 'Cf': 225, 'Es': 226, 'Fm': 227, 'Md': 229, 'No': 230, 'Lr': 233
};

const mohsHardness = {
  // 莫氏硬度（仅固体）
  'Li': 0.6, 'Be': 5.5, 'B': 9.3, 'C': 10.0, 'Na': 0.5, 'Mg': 2.5, 'Al': 2.75, 'Si': 7.0,
  'K': 0.4, 'Ca': 1.75, 'Sc': 3.0, 'Ti': 6.0, 'V': 7.0, 'Cr': 8.5, 'Mn': null, 'Fe': 4.0, 'Co': 5.0, 'Ni': 4.0, 'Cu': 3.0, 'Zn': 2.5,
  'Ga': 1.5, 'Ge': 6.0, 'As': 3.5, 'Rb': 0.3, 'Sr': 1.5, 'Y': 2.0, 'Zr': 5.0, 'Nb': 6.0, 'Mo': 5.5, 'Ru': 6.5, 'Rh': 6.0, 'Pd': 4.75, 'Ag': 2.5, 'Cd': 2.0,
  'In': 1.0, 'Sn': 1.5, 'Sb': 3.0, 'Te': 2.25, 'Cs': 0.2, 'Ba': 1.25,
  'Hf': 5.5, 'Ta': 6.5, 'W': 7.5, 'Re': 7.0, 'Os': 7.0, 'Ir': 6.5, 'Pt': 3.5, 'Au': 2.5, 'Hg': null, 'Tl': 1.0, 'Pb': 1.5, 'Bi': 2.25, 'Th': 3.0, 'U': 6.0
};

// 读取 elements.js
const fs = require('fs');
let code = fs.readFileSync('data/elements.js', 'utf8');

// 补全 vdwRadius
Object.entries(vdwRadii).forEach(([sym, val]) => {
  if (val !== null) {
    const regex = new RegExp(`(symbol:'${sym}'[^}]*vdwRadius:)\\d+`, 'g');
    if (code.match(regex)) {
      code = code.replace(regex, `$1${val}`);
    } else {
      // 如果元素没有 vdwRadius 字段，添加它
      const elRegex = new RegExp(`(symbol:'${sym}'[^}]*)(,crystalStructure:)`, 'g');
      code = code.replace(elRegex, `$1,vdwRadius:${val}$2`);
    }
  }
});

console.log('✅ 已补全 van der Waals 半径数据');

// 写回文件
fs.writeFileSync('data/elements.js', code, 'utf8');
console.log('✅ 已更新 elements.js');
