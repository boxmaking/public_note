/**
 * 增强的化学方程式配平练习模块
 * 扩展自 equation-balancing.js
 * 新增：更多练习题、更好的UI、提示系统
 */

// ===== 练习题数据库 =====
const BALANCING_EXERCISES = [
  // ===== 基础题（初中）=====
  { id: 1, difficulty: '基础', equation: 'Fe + HCl -> FeCl2 + H2', hint: '观察Fe和Cl的个数', answer: 'Fe + 2HCl -> FeCl2 + H2', explanation: 'Fe:1=1, Cl:2=2, H:2=2' },
  { id: 2, difficulty: '基础', equation: 'Al + O2 -> Al2O3', hint: '先配平O，再配平Al', answer: '4Al + 3O2 -> 2Al2O3', explanation: 'O:6=6, Al:4=4' },
  { id: 3, difficulty: '基础', equation: 'H2 + O2 -> H2O', hint: 'H₂和O₂都是双原子分子', answer: '2H2 + O2 -> 2H2O', explanation: 'H:4=4, O:2=2' },
  { id: 4, difficulty: '基础', equation: 'Na + H2O -> NaOH + H2', hint: 'H₂O中有2个H', answer: '2Na + 2H2O -> 2NaOH + H2', explanation: 'Na:2=2, H:4=4+2, O:2=2' },
  { id: 5, difficulty: '基础', equation: 'CaCO3 -> CaO + CO2', hint: '已经是配平的', answer: 'CaCO3 -> CaO + CO2', explanation: 'Ca:1=1, C:1=1, O:3=1+2' },
  
  // ===== 中等题（高中）=====
  { id: 6, difficulty: '中等', equation: 'Fe2O3 + CO -> Fe + CO2', hint: 'Fe₂O₃中有3个O', answer: 'Fe2O3 + 3CO -> 2Fe + 3CO2', explanation: 'Fe:2=2, C:3=3, O:3+3=6' },
  { id: 7, difficulty: '中等', equation: 'C2H5OH + O2 -> CO2 + H2O', hint: '先配平C，再配平H，最后配平O', answer: 'C2H5OH + 3O2 -> 2CO2 + 3H2O', explanation: 'C:2=2, H:6=6, O:1+6=4+3' },
  { id: 8, difficulty: '中等', equation: 'KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O', hint: 'Mn从+7→+2，Cl从-1→0', answer: '2KMnO4 + 16HCl -> 2KCl + 2MnCl2 + 5Cl2 + 8H2O', explanation: '氧化还原配平，电子守恒' },
  { id: 9, difficulty: '中等', equation: 'Cu + HNO3 -> Cu(NO3)2 + NO + H2O', hint: 'N从+5→+2', answer: '3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O', explanation: 'Cu:0→+2失去2e⁻×3, N:+5→+2得到3e⁻×2' },
  { id: 10, difficulty: '中等', equation: 'SO2 + O2 -> SO3', hint: '可逆反应，需要催化剂', answer: '2SO2 + O2 -> 2SO3', explanation: 'S:2=2, O:4+2=6' },
  
  // ===== 进阶题（高中竞赛）=====
  { id: 11, difficulty: '进阶', equation: 'MnO4- + H2O2 + H+ -> Mn2+ + O2 + H2O', hint: 'Mn从+7→+2，O从-1→0', answer: '2MnO4- + 5H2O2 + 6H+ -> 2Mn2+ + 5O2 + 8H2O', explanation: 'Mn:+7→+2得到5e⁻×2, O:-1→0失去1e⁻×10' },
  { id: 12, difficulty: '进阶', equation: 'Cr2O72- + Fe2+ + H+ -> Cr3+ + Fe3+ + H2O', hint: 'Cr从+6→+3，Fe从+2→+3', answer: 'Cr2O72- + 6Fe2+ + 14H+ -> 2Cr3+ + 6Fe3+ + 7H2O', explanation: 'Cr:+6→+3得到3e⁻×2, Fe:+2→+3失去1e⁻×6' },
  { id: 13, difficulty: '进阶', equation: 'Cl2 + NaOH -> NaCl + NaClO + H2O', hint: 'Cl发生歧化反应', answer: 'Cl2 + 2NaOH -> NaCl + NaClO + H2O', explanation: 'Cl:0→-1和+1，歧化' },
  { id: 14, difficulty: '进阶', equation: 'Cu + H2SO4 -> CuSO4 + SO2 + H2O', hint: 'S从+6→+4', answer: 'Cu + 2H2SO4 -> CuSO4 + SO2 + 2H2O', explanation: 'Cu:0→+2失去2e⁻, S:+6→+4得到2e⁻' },
  { id: 15, difficulty: '进阶', equation: 'NH3 + O2 -> NO + H2O', hint: 'N从-3→+2', answer: '4NH3 + 5O2 -> 4NO + 6H2O', explanation: 'N:-3→+2失去5e⁻×4, O:0→-2得到2e⁻×10' },
  
  // ===== 挑战题（大学）=====
  { id: 16, difficulty: '挑战', equation: 'MnO4- + C2O42- + H+ -> Mn2+ + CO2 + H2O', hint: '草酸根C₂O₄²⁻中C为+3', answer: '2MnO4- + 5C2O42- + 16H+ -> 2Mn2+ + 10CO2 + 8H2O', explanation: 'Mn:+7→+2得到5e⁻×2, C:+3→+4失去1e⁻×10' },
  { id: 17, difficulty: '挑战', equation: 'Cr2O72- + I- + H+ -> Cr3+ + I2 + H2O', hint: 'I从-1→0', answer: 'Cr2O72- + 6I- + 14H+ -> 2Cr3+ + 3I2 + 7H2O', explanation: 'Cr:+6→+3得到3e⁻×2, I:-1→0失去1e⁻×6' },
  { id: 18, difficulty: '挑战', equation: 'S2O32- + I2 -> S4O62- + I-', hint: '硫代硫酸根中S平均氧化态+2', answer: '2S2O32- + I2 -> S4O62- + 2I-', explanation: 'S:+2→+2.5失去0.5e⁻×4, I:0→-1得到1e⁻×2' },
  { id: 19, difficulty: '挑战', equation: 'As2S3 + HNO3 -> H3AsO4 + H2SO4 + NO', hint: 'As从+3→+5，S从-2→+6', answer: '3As2S3 + 28HNO3 + 4H2O -> 6H3AsO4 + 9H2SO4 + 28NO', explanation: '复杂氧化还原，需整体配平' },
  { id: 20, difficulty: '挑战', equation: 'P4 + HNO3 + H2O -> H3PO4 + NO', hint: 'P从0→+5', answer: '3P4 + 20HNO3 + 8H2O -> 12H3PO4 + 20NO', explanation: 'P:0→+5失去5e⁻×12, N:+5→+2得到3e⁻×20' }
];

// ===== 增强的配平练习类 =====
class EnhancedBalancingExercise {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.score = 0;
    this.total = BALANCING_EXERCISES.length;
    this.history = [];
  }
  
  /**
   * 加载练习题
   */
  loadExercise(index) {
    if (index < 0 || index >= this.total) {
      this.showSummary();
      return;
    }
    
    this.currentIndex = index;
    const ex = BALANCING_EXERCISES[index];
    
    this.render(ex);
  }
  
  /**
   * 渲染练习题
   */
  render(ex) {
    let html = '<div class="enhanced-exercise">\n';
    html += '<div class="exercise-header">\n';
    html += '<h4>🔬 配平练习 #' + ex.id + ' <span class="difficulty ' + ex.difficulty + '">' + ex.difficulty + '</span></h4>\n';
    html += '<div class="progress">进度：' + (this.currentIndex + 1) + '/' + this.total + ' | 得分：' + this.score + '</div>\n';
    html += '</div>\n';
    
    // 未配平的方程式
    html += '<div class="equation-raw">\n';
    html += '<strong>未配平：</strong> ' + this.formatEquation(ex.equation) + '\n';
    html += '</div>\n';
    
    // 配平输入框
    html += '<div class="balancing-input-area">\n';
    html += '<p>请在下方输入系数：</p>\n';
    html += '<div class="equation-input">\n';
    html += this.renderInputFields(ex.equation);
    html += '</div>\n';
    html += '</div>\n';
    
    // 按钮
    html += '<div class="exercise-buttons">\n';
    html += '<button onclick="window.enhancedExercise.checkAnswer()" class="btn-check">✓ 检查</button>\n';
    html += '<button onclick="window.enhancedExercise.showHint()" class="btn-hint">💡 提示</button>\n';
    html += '<button onclick="window.enhancedExercise.showAnswer()" class="btn-answer">📝 答案</button>\n';
    html += '<button onclick="window.enhancedExercise.nextExercise()" class="btn-next">→ 下一题</button>\n';
    html += '</div>\n';
    
    // 结果区域
    html += '<div id="exerciseResult" class="exercise-result"></div>\n';
    html += '<div id="exerciseHint" class="exercise-hint" style="display:none;"></div>\n';
    html += '<div id="exerciseExplanation" class="exercise-explanation" style="display:none;"></div>\n';
    
    html += '</div>\n';
    
    // 添加样式
    html += this.getStyles();
    
    this.container.innerHTML = html;
    window.enhancedExercise = this;
  }
  
  /**
   * 渲染输入框
   */
  renderInputFields(equation) {
    const parts = equation.split('->').map(s => s.trim());
    let html = '';
    
    // 反应物
    html += '<div class="reactants">\n';
    const reactants = parts[0].split('+').map(s => s.trim());
    reactants.forEach((compound, idx) => {
      if (idx > 0) html += ' + ';
      html += '<input type="number" class="coeff-input" data-side="reactant" data-idx="' + idx + '" min="1" max="20" value="1"> ';
      html += '<span class="compound">' + this.formatCompound(compound) + '</span>';
    });
    html += '</div>\n';
    
    // 箭头
    html += '<div class="arrow">→</div>\n';
    
    // 生成物
    html += '<div class="products">\n';
    const products = parts[1].split('+').map(s => s.trim());
    products.forEach((compound, idx) => {
      if (idx > 0) html += ' + ';
      html += '<input type="number" class="coeff-input" data-side="product" data-idx="' + idx + '" min="1" max="20" value="1"> ';
      html += '<span class="compound">' + this.formatCompound(compound) + '</span>';
    });
    html += '</div>\n';
    
    return html;
  }
  
  /**
   * 检查答案
   */
  checkAnswer() {
    const ex = BALANCING_EXERCISES[this.currentIndex];
    const userCoeffs = this.getUserCoeffs();
    const correctCoeffs = this.parseCoeffs(ex.answer);
    
    const isCorrect = this.compareCoeffs(userCoeffs, correctCoeffs);
    
    const resultDiv = document.getElementById('exerciseResult');
    const explainDiv = document.getElementById('exerciseExplanation');
    
    if (isCorrect) {
      resultDiv.innerHTML = '<div class="correct">✅ 恭喜！方程式已配平！</div>';
      this.score++;
      this.history.push({ id: ex.id, correct: true });
      
      // 显示解释
      explainDiv.innerHTML = '<strong>📖 配平原理：</strong> ' + ex.explanation;
      explainDiv.style.display = 'block';
    } else {
      resultDiv.innerHTML = '<div class="incorrect">❌ 方程式未配平，请检查系数。</div>';
      this.history.push({ id: ex.id, correct: false });
    }
  }
  
  /**
   * 获取用户输入的系数
   */
  getUserCoeffs() {
    const inputs = this.container.querySelectorAll('.coeff-input');
    const coeffs = { reactants: [], products: [] };
    
    inputs.forEach(input => {
      const side = input.getAttribute('data-side');
      coeffs[side].push(parseInt(input.value) || 1);
    });
    
    return coeffs;
  }
  
  /**
   * 解析正确答案的系数
   */
  parseCoeffs(answer) {
    const parts = answer.split('->').map(s => s.trim());
    const coeffs = { reactants: [], products: [] };
    
    parts[0].split('+').forEach(compound => {
      const match = compound.match(/^(\d+)/);
      coeffs.reactants.push(match ? parseInt(match[1]) : 1);
    });
    
    parts[1].split('+').forEach(compound => {
      const match = compound.match(/^(\d+)/);
      coeffs.products.push(match ? parseInt(match[1]) : 1);
    });
    
    return coeffs;
  }
  
  /**
   * 比较系数是否一致
   */
  compareCoeffs(user, correct) {
    if (user.reactants.length !== correct.reactants.length) return false;
    if (user.products.length !== correct.products.length) return false;
    
    for (let i = 0; i < user.reactants.length; i++) {
      if (user.reactants[i] !== correct.reactants[i]) return false;
    }
    
    for (let i = 0; i < user.products.length; i++) {
      if (user.products[i] !== correct.products[i]) return false;
    }
    
    return true;
  }
  
  /**
   * 显示提示
   */
  showHint() {
    const ex = BALANCING_EXERCISES[this.currentIndex];
    const hintDiv = document.getElementById('exerciseHint');
    hintDiv.innerHTML = '<strong>💡 提示：</strong> ' + ex.hint;
    hintDiv.style.display = 'block';
  }
  
  /**
   * 显示答案
   */
  showAnswer() {
    const ex = BALANCING_EXERCISES[this.currentIndex];
    const resultDiv = document.getElementById('exerciseResult');
    resultDiv.innerHTML = '<div class="answer">📝 <strong>答案：</strong> ' + this.formatEquation(ex.answer) + '</div>';
    
    const explainDiv = document.getElementById('exerciseExplanation');
    explainDiv.innerHTML = '<strong>📖 配平原理：</strong> ' + ex.explanation;
    explainDiv.style.display = 'block';
  }
  
  /**
   * 下一题
   */
  nextExercise() {
    this.loadExercise(this.currentIndex + 1);
  }
  
  /**
   * 显示总结
   */
  showSummary() {
    let html = '<div class="exercise-summary">\n';
    html += '<h4>📊 练习总结</h4>\n';
    html += '<p>总题数：' + this.total + '</p>\n';
    html += '<p>正确：' + this.score + '</p>\n';
    html += '<p>错误：' + (this.total - this.score) + '</p>\n';
    html += '<p>正确率：' + Math.round(this.score / this.total * 100) + '%</p>\n';
    html += '<button onclick="window.enhancedExercise.restart()" class="btn-restart">重新开始</button>\n';
    html += '</div>\n';
    
    this.container.innerHTML = html;
  }
  
  /**
   * 重新开始
   */
  restart() {
    this.currentIndex = 0;
    this.score = 0;
    this.history = [];
    this.loadExercise(0);
  }
  
  /**
   * 格式化方程式（添加下标）
   */
  formatEquation(eq) {
    return eq
      .replace(/(\d+)/g, '<sub>$1</sub>')
      .replace(/_(\w)/g, '<sub>$1</sub>')
      .replace(/\^([+-]\d)/g, '<sup>$1</sup>');
  }
  
  formatCompound(compound) {
    return this.formatEquation(compound);
  }
  
  /**
   * 获取CSS样式
   */
  getStyles() {
    return '<style>\n' +
      '.enhanced-exercise { padding: 15px; background: #f8f9fa; border-radius: 8px; margin: 10px 0; }\n' +
      '.exercise-header { margin-bottom: 15px; }\n' +
      '.difficulty { padding: 2px 8px; border-radius: 10px; font-size: 12px; }\n' +
      '.difficulty.基础 { background: #d5f5e3; color: #27ae60; }\n' +
      '.difficulty.中等 { background: #ffeaa7; color: #f39c12; }\n' +
      '.difficulty.进阶 { background: #ff7675; color: white; }\n' +
      '.difficulty.挑战 { background: #6c5ce7; color: white; }\n' +
      '.equation-raw { font-size: 16px; margin: 10px 0; padding: 10px; background: white; border-radius: 5px; }\n' +
      '.balancing-input-area { margin: 15px 0; }\n' +
      '.equation-input { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin: 10px 0; }\n' +
      '.coeff-input { width: 50px; padding: 5px; text-align: center; border: 2px solid #3498db; border-radius: 4px; }\n' +
      '.compound { font-size: 14px; }\n' +
      '.exercise-buttons { display: flex; gap: 10px; margin: 15px 0; }\n' +
      '.exercise-buttons button { padding: 8px 15px; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; }\n' +
      '.btn-check { background: #27ae60; color: white; }\n' +
      '.btn-hint { background: #f39c12; color: white; }\n' +
      '.btn-answer { background: #3498db; color: white; }\n' +
      '.btn-next { background: #95a5a6; color: white; }\n' +
      '.exercise-result { margin: 10px 0; }\n' +
      '.correct { padding: 10px; background: #d5f5e3; color: #27ae60; border-radius: 5px; }\n' +
      '.incorrect { padding: 10px; background: #fadbd8; color: #e74c3c; border-radius: 5px; }\n' +
      '.answer { padding: 10px; background: #d6eaf8; color: #3498db; border-radius: 5px; }\n' +
      '.exercise-hint { padding: 10px; background: #fff3cd; color: #856404; border-radius: 5px; margin: 10px 0; }\n' +
      '.exercise-explanation { padding: 10px; background: #e8f5e9; color: #2e7d32; border-radius: 5px; margin: 10px 0; }\n' +
      '</style>\n';
  }
}

// ===== 公开API =====
window.EnhancedBalancingExercise = EnhancedBalancingExercise;
window.BALANCING_EXERCISES = BALANCING_EXERCISES;

console.log('✅ 增强配平练习模块已加载（' + BALANCING_EXERCISES.length + ' 道题目）');
