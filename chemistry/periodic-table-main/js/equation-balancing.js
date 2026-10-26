/**
 * 化学方程式交互式配平练习模块
 * 功能：
 * 1. 显示化学方程式，系数位置显示输入框
 * 2. 实时验证方程是否配平
 * 3. 提供提示和解答
 * 4. 支持常见化学方程式配平练习
 */

// ===== 元素相对原子质量表 =====
const ATOMIC_MASS_MAP = {
  'H': 1, 'He': 4, 'Li': 7, 'Be': 9, 'B': 11, 'C': 12, 'N': 14, 'O': 16, 'F': 19, 'Ne': 20,
  'Na': 23, 'Mg': 24, 'Al': 27, 'Si': 28, 'P': 31, 'S': 32, 'Cl': 35.5, 'Ar': 40,
  'K': 39, 'Ca': 40, 'Sc': 45, 'Ti': 48, 'V': 51, 'Cr': 52, 'Mn': 55, 'Fe': 56, 'Co': 59, 'Ni': 59, 'Cu': 64, 'Zn': 65,
  'Ga': 70, 'Ge': 73, 'As': 75, 'Se': 79, 'Br': 80,
  'Rb': 85, 'Sr': 88, 'Y': 89, 'Zr': 91, 'Nb': 93, 'Mo': 96, 'Tc': 98, 'Ru': 101, 'Rh': 103, 'Pd': 106, 'Ag': 108, 'Cd': 112,
  'In': 115, 'Sn': 119, 'Sb': 122, 'Te': 128, 'I': 127, 'Xe': 131,
  'Cs': 133, 'Ba': 137, 'La': 139, 'Ce': 140, 'Pr': 141, 'Nd': 144, 'Pm': 145, 'Sm': 150, 'Eu': 152, 'Gd': 157, 'Tb': 159, 'Dy': 163, 'Ho': 165, 'Er': 167, 'Tm': 169, 'Yb': 173, 'Lu': 175,
  'Hf': 178, 'Ta': 181, 'W': 184, 'Re': 186, 'Os': 190, 'Ir': 192, 'Pt': 195, 'Au': 197, 'Hg': 201, 'Tl': 204, 'Pb': 207, 'Bi': 209, 'Po': 209, 'At': 210, 'Rn': 222,
  'Fr': 223, 'Ra': 226, 'Ac': 227, 'Th': 232, 'Pa': 231, 'U': 238, 'Np': 237, 'Pu': 244
};

// ===== 化学方程式解析器 =====
class EquationParser {
  /**
   * 解析化学方程式
   * @param {string} equationStr - 化学方程式字符串（如 "Fe + 2HCl → FeCl₂ + H₂"）
   * @returns {Object} - { reactants: Array, products: Array, isBalanced: boolean }
   */
  static parse(equationStr) {
    // 处理上下标（₂ → 2, ₃ → 3等）
    const normalized = equationStr
      .replace(/(\d+)/g, function(match) { return match; })
      .replace(/→/g, '->')
      .replace(/\\rightarrow/g, '->')
      .replace(/\\xrightarrow\{[^}]*\}/g, '->');
    
    const sides = normalized.split('->').map(s => s.trim());
    if (sides.length !== 2) {
      return null; // 无法解析
    }
    
    const reactants = this.parseSide(sides[0]);
    const products = this.parseSide(sides[1]);
    
    return {
      reactants: reactants,
      products: products,
      isBalanced: this.checkBalanced(reactants, products)
    };
  }
  
  /**
   * 解析方程一侧（反应物或生成物）
   */
  static parseSide(sideStr) {
    const compounds = sideStr.split('+').map(s => s.trim());
    return compounds.map(compound => {
      // 提取系数
      const coeffMatch = compound.match(/^(\d+)/);
      const coeff = coeffMatch ? parseInt(coeffMatch[1]) : 1;
      const formula = coeffMatch ? compound.substring(coeffMatch[1].length).trim() : compound;
      
      // 解析化学式
      const elements = this.parseFormula(formula);
      
      return {
        original: compound,
        formula: formula,
        coeff: coeff,
        elements: elements
      };
    });
  }
  
  /**
   * 解析化学式，提取元素及其个数
   * 示例：H₂SO₄ → { H: 2, S: 1, O: 4 }
   */
  static parseFormula(formula) {
    const elements = {};
    
    // 处理上下标（Unicode下标 → 普通数字）
    let normalized = formula
      .replace(/₂/g, '2').replace(/₃/g, '3').replace(/₄/g, '4')
      .replace(/₅/g, '5').replace(/₆/g, '6').replace(/₇/g, '7')
      .replace(/₈/g, '8').replace(/₉/g, '9').replace(/₀/g, '0');
    
    // 简单解析：匹配元素符号（大写+小写）和后面的数字
    const regex = /([A-Z][a-z]?)(\d*)/g;
    let match;
    
    while ((match = regex.exec(normalized)) !== null) {
      const element = match[1];
      const count = match[2] ? parseInt(match[2]) : 1;
      elements[element] = (elements[element] || 0) + count;
    }
    
    return elements;
  }
  
  /**
   * 检查方程式是否配平
   */
  static checkBalanced(reactants, products) {
    const reactantElements = this.countElements(reactants);
    const productElements = this.countElements(products);
    
    // 检查两边元素种类是否相同
    const allElements = new Set([...Object.keys(reactantElements), ...Object.keys(productElements)]);
    for (const el of allElements) {
      if ((reactantElements[el] || 0) !== (productElements[el] || 0)) {
        return false;
      }
    }
    
    return true;
  }
  
  /**
   * 计算一侧的总元素个数（考虑系数）
   */
  static countElements(compounds) {
    const totals = {};
    compounds.forEach(compound => {
      for (const [element, count] of Object.entries(compound.elements)) {
        totals[element] = (totals[element] || 0) + count * compound.coeff;
      }
    });
    return totals;
  }
}

// ===== 交互式配平练习生成器 =====
class EquationBalancingExercise {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentExercise = null;
    this.userCoeffs = [];
  }
  
  /**
   * 加载练习题
   * @param {string} equationStr - 未配平的方程式（如 "Fe + HCl → FeCl2 + H2"）
   */
  loadExercise(equationStr, hint, answer) {
    this.currentExercise = {
      equation: equationStr,
      hint: hint || '',
      answer: answer || equationStr
    };
    
    this.render();
  }
  
  /**
   * 渲染练习题
   */
  render() {
    if (!this.currentExercise) return;
    
    const eq = this.currentExercise.equation;
    const parts = eq.split('->').map(s => s.trim());
    
    let html = '<div class="balancing-exercise">\n';
    html += '<h4>🔬 配平练习</h4>\n';
    html += '<p>请在下方输入框中填入适当的系数，使化学方程式配平：</p>\n';
    
    // 方程式显示（带输入框）
    html += '<div class="equation-display">\n';
    html += '<div class="reactants">\n';
    html += this.renderSideWithInputs(parts[0], 'reactant');
    html += '</div>\n';
    html += '<div class="arrow">→</div>\n';
    html += '<div class="products">\n';
    html += this.renderSideWithInputs(parts[1], 'product');
    html += '</div>\n';
    html += '</div>\n';
    
    // 按钮
    html += '<div class="exercise-btns">\n';
    html += '<button onclick="window.currentExercise.checkAnswer()" class="btn-check">检查答案</button>\n';
    html += '<button onclick="window.currentExercise.showHint()" class="btn-hint">提示</button>\n';
    html += '<button onclick="window.currentExercise.showAnswer()" class="btn-answer">显示答案</button>\n';
    html += '</div>\n';
    
    // 结果区域
    html += '<div id="exerciseResult" class="exercise-result"></div>\n';
    
    // 提示区域
    if (this.currentExercise.hint) {
      html += '<div id="exerciseHint" class="exercise-hint" style="display: none;">\n';
      html += '<strong>💡 提示：</strong> ' + this.currentExercise.hint + '\n';
      html += '</div>\n';
    }
    
    html += '</div>\n';
    
    this.container.innerHTML = html;
    window.currentExercise = this;
  }
  
  /**
   * 渲染一侧（带输入框）
   */
  renderSideWithInputs(sideStr, type) {
    const compounds = sideStr.split('+').map(s => s.trim());
    let html = '';
    
    compounds.forEach((compound, idx) => {
      if (idx > 0) html += ' + ';
      html += '<input type="number" class="coeff-input" data-type="' + type + '" data-idx="' + idx + '" min="1" max="20" value="1" style="width: 40px; text-align: center;"> ';
      html += '<span class="compound">' + this.formatCompound(compound) + '</span>';
    });
    
    return html;
  }
  
  /**
   * 格式化化学式（将数字转为下标）
   */
  formatCompound(compound) {
    return compound
      .replace(/(\d+)/g, '<sub>$1</sub>')
      .replace(/_(\w)/g, '<sub>$1</sub>');
  }
  
  /**
   * 检查答案
   */
  checkAnswer() {
    // 获取用户输入的系数
    const inputs = this.container.querySelectorAll('.coeff-input');
    const userCoeffs = {};
    inputs.forEach(input => {
      const type = input.getAttribute('data-type');
      const idx = input.getAttribute('data-idx');
      const key = type + '_' + idx;
      userCoeffs[key] = parseInt(input.value) || 1;
    });
    
    // 构建用户配平的方程式
    const eqParts = this.currentExercise.equation.split('->').map(s => s.trim());
    const reactantCoeffs = [];
    const productCoeffs = [];
    
    let rIdx = 0;
    eqParts[0].split('+').forEach((c, i) => {
      reactantCoeffs.push(userCoeffs['reactant_' + i] || 1);
    });
    
    let pIdx = 0;
    eqParts[1].split('+').forEach((c, i) => {
      productCoeffs.push(userCoeffs['product_' + i] || 1);
    });
    
    // 计算两边元素个数
    const reactantElements = this.countSideElements(eqParts[0], reactantCoeffs);
    const productElements = this.countSideElements(eqParts[1], productCoeffs);
    
    // 比较
    const isCorrect = this.compareElements(reactantElements, productElements);
    
    // 显示结果
    const resultDiv = document.getElementById('exerciseResult');
    if (isCorrect) {
      resultDiv.innerHTML = '<div style="color: #27ae60; padding: 10px; background: #d5f5e3; border-radius: 5px;">✅ 恭喜！方程式已配平！</div>';
    } else {
      resultDiv.innerHTML = '<div style="color: #e74c3c; padding: 10px; background: #fadbd8; border-radius: 5px;">❌ 方程式未配平，请检查系数。</div>';
    }
  }
  
  /**
   * 计算一侧的元素个数
   */
  countSideElements(sideStr, coeffs) {
    const compounds = sideStr.split('+').map(s => s.trim());
    const totals = {};
    
    compounds.forEach((compound, idx) => {
      const coeff = coeffs[idx] || 1;
      const elements = EquationParser.parseFormula(compound);
      for (const [el, count] of Object.entries(elements)) {
        totals[el] = (totals[el] || 0) + count * coeff;
      }
    });
    
    return totals;
  }
  
  /**
   * 比较两遍元素个数是否相同
   */
  compareElements(el1, el2) {
    const allEl = new Set([...Object.keys(el1), ...Object.keys(el2)]);
    for (const el of allEl) {
      if ((el1[el] || 0) !== (el2[el] || 0)) {
        return false;
      }
    }
    return true;
  }
  
  /**
   * 显示提示
   */
  showHint() {
    const hintDiv = document.getElementById('exerciseHint');
    if (hintDiv) {
      hintDiv.style.display = 'block';
    }
  }
  
  /**
   * 显示答案
   */
  showAnswer() {
    const resultDiv = document.getElementById('exerciseResult');
    resultDiv.innerHTML = '<div style="color: #3498db; padding: 10px; background: #d6eaf8; border-radius: 5px;">📝 <strong>答案：</strong> ' + this.currentExercise.answer + '</div>';
  }
}

// ===== 公开API =====
window.EquationBalancingExercise = EquationBalancingExercise;
window.EquationParser = EquationParser;

console.log('✅ 化学方程式交互式配平练习模块已加载');
