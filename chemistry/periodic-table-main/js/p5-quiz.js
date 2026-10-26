/**
 * P5-4：交互式学习测验模块
 * 功能：多种题型、计分、错题回顾、学习进度跟踪
 */

let quizState = {
  questions: [],
  currentIndex: 0,
  score: 0,
  wrong: [],
  answered: [],
};

/* ========== 题库（118 元素相关知识） ========== */
const QUIZ_BANK = [
  // ── 基础题（元素识别）──
  { q: '元素周期表中原子序数为 1 的元素是？', opts: ['氢','氦','锂','铍'], ans: 0, explain: '氢（H）是原子序数 1 的元素，宇宙中最丰富的元素。' },
  { q: '下列哪个是碱金属？', opts: ['钙','钠','铝','硅'], ans: 1, explain: '钠（Na）是碱金属（第 1 族），极具反应性。' },
  { q: '哪个元素符号是 "Fe"？', opts: ['铜','铁','氟','氖'], ans: 1, explain: 'Fe 来自拉丁语 Ferrum（铁），原子序数 26。' },
  { q: '常温下是液体的金属元素是？', opts: ['钠','汞','铝','铁'], ans: 1, explain: '汞（Hg）是唯一常温下呈液态的金属，熔点 -38.8°C。' },
  { q: '下列哪个是惰性气体？', opts: ['氯','氩','氧','氮'], ans: 1, explain: '氩（Ar）是惰性气体（第 18 族），化学性质极不活泼。' },

  // ── 进阶题（性质）──
  { q: '电负性最高的元素是？', opts: ['氧','氟','氯','氮'], ans: 1, explain: '氟（F）的电负性为 3.98（Pauling 标度），是所有元素中最高的。' },
  { q: '原子半径最大的元素是？', opts: ['氢','锂','铯','氦'], ans: 2, explain: '铯（Cs）是自然界中原子半径最大的元素（约 300 pm）。' },
  { q: '密度最大的元素是？', opts: ['铁','铅','锇','锇-22'], ans: 2, explain: '锇（Os）是密度最大的天然元素（约 22.6 g/cm³）。' },
  { q: '第一电离能最高的元素是？', opts: ['氦','氖','氟','氢'], ans: 0, explain: '氦（He）的第一电离能最高（2372 kJ/mol），因为 1s 电子紧密结合。' },
  { q: '地壳中含量最丰富的元素是？', opts: ['硅','铝','氧','铁'], ans: 2, explain: '氧（O）占地壳质量的约 46.6%，是地壳中最丰富的元素。' },

  // ── 化学方程式题 ──
  { q: '水的化学式是？', opts: ['HO','H₂O','HO₂','H₃O'], ans: 1, explain: '水由 2 个氢原子和 1 个氧原子组成，化学式 H₂O。' },
  { q: '下列哪个是甲烷？', opts: ['C₂H₆','CH₄','C₃H₈','CO₂'], ans: 1, explain: '甲烷（CH₄）是最简单的烃类，由一个碳原子和四个氢原子组成。' },
  { q: '氯化钠的化学式是？', opts: ['NaCL','NaCl','Na₂Cl','NaCl₂'], ans: 1, explain: '氯化钠（NaCl）由 Na⁺ 和 Cl⁻ 离子组成，1:1 比例。' },

  // ── 应用/工业题 ──
  { q: '制造半导体的主要材料是？', opts: ['铜','硅','铁','铝'], ans: 1, explain: '硅（Si）是半导体工业的基础材料，用于制造芯片。' },
  { q: '不锈钢的主要合金元素是？', opts: ['碳','铬','镍','锰'], ans: 1, explain: '铬（Cr）是不锈钢的关键合金元素，形成钝化膜防止腐蚀。' },
  { q: '下列哪个元素用于制造铅笔芯？', opts: ['铅','石墨（碳）','硅','硫'], ans: 1, explain: '铅笔芯由石墨（碳的同素异形体）制成，与铅无关。' },

  // ── 安全/毒理题 ──
  { q: '下列哪个元素有剧毒（砷）？', opts: ['银','砷','铝','氩'], ans: 1, explain: '砷（As）的化合物（如砒霜 As₂O₃）有剧毒。' },
  { q: 'GHS 中表示"火焰"的 pictogram 代表？', opts: ['腐蚀','易燃','爆炸','有毒'], ans: 1, explain: 'GHS02（火焰）表示易燃气体、液体或固体。' },
  { q: '下列哪个是放射性元素？', opts: ['碳','铀','氧','氮'], ans: 1, explain: '铀（U）是天然放射性元素，用于核反应堆和核武器。' },
];

/* ========== 初始化测验 ========== */
function initQuiz(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // 随机选题（10 道）
  const shuffled = [...QUIZ_BANK].sort(() => Math.random() - 0.5).slice(0, 10);
  quizState = {
    questions: shuffled,
    currentIndex: 0,
    score: 0,
    wrong: [],
    answered: [],
  };

  renderQuizQuestion(container);
}

/* ========== 渲染题目 ========== */
function renderQuizQuestion(container) {
  const { questions, currentIndex } = quizState;
  if (currentIndex >= questions.length) {
    renderQuizResult(container);
    return;
  }

  const q = questions[currentIndex];
  container.innerHTML = `
    <div style="background:var(--card,#161b22);border-radius:12px;padding:24px;max-width:600px;margin:0 auto">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <span style="font-size:13px;color:var(--muted)">第 ${currentIndex + 1}/${questions.length} 题</span>
        <span style="font-size:13px;color:var(--accent)">得分：${quizState.score}/${currentIndex}</span>
      </div>
      <div style="font-size:17px;font-weight:600;color:var(--text);margin-bottom:20px;line-height:1.6">${q.q}</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${q.opts.map((opt, i) => `
          <button onclick="answerQuiz(${i},this)"
            style="padding:12px 16px;border-radius:8px;border:1.5px solid var(--border);background:var(--bg-input);color:var(--text);cursor:pointer;font-size:14px;text-align:left;transition:all 0.2s;width:100%">
            ${String.fromCharCode(65+i)}. ${opt}
          </button>
        `).join('')}
      </div>
      <div id="quizFeedback" style="margin-top:16px;display:none">
        <div id="quizExplain" style="padding:12px;background:rgba(48,54,61,0.3);border-radius:8px;font-size:13px;color:var(--muted);line-height:1.6"></div>
        <button onclick="nextQuizQuestion()" style="margin-top:12px;padding:8px 20px;border-radius:8px;background:var(--accent);color:#fff;border:none;cursor:pointer;font-weight:600;font-size:14px">
          下一题 →
        </button>
      </div>
    </div>
  `;
}

/* ========== 回答题目 ========== */
function answerQuiz(chosenIdx, btnEl) {
  const { questions, currentIndex } = quizState;
  const q = questions[currentIndex];
  const isCorrect = chosenIdx === q.ans;
  const feedbackEl = document.getElementById('quizFeedback');
  const explainEl = document.getElementById('quizExplain');

  // 高亮正确/错误
  const buttons = btnEl.parentElement.querySelectorAll('button');
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === q.ans) b.style.background = 'rgba(63,185,80,0.2)'; b.style.borderColor = 'var(--green)';
    if (i === chosenIdx && !isCorrect) b.style.background = 'rgba(248,81,73,0.2)'; b.style.borderColor = 'var(--red)';
  });

  // 显示解析
  feedbackEl.style.display = 'block';
  explainEl.innerHTML = `
    <span style="font-size:16px">${isCorrect ? '✅ 回答正确！' : '❌ 回答错误。'}</span><br>
    <span style="color:var(--text)">${q.explain}</span>
  `;

  // 更新状态
  quizState.answered.push({ qIdx: currentIndex, chosen: chosenIdx, correct: isCorrect });
  if (isCorrect) {
    quizState.score++;
  } else {
    quizState.wrong.push({ ...q, chosenIdx });
  }
}

/* ========== 下一题 ========== */
function nextQuizQuestion() {
  quizState.currentIndex++;
  const container = document.getElementById('quizContainer');
  if (container) renderQuizQuestion(container);
}

/* ========== 显示结果 ========== */
function renderQuizResult(container) {
  const { questions, score, wrong } = quizState;
  const pct = Math.round(score / questions.length * 100);
  let grade = pct >= 90 ? '🏆 优秀！' : pct >= 70 ? '👍 良好！' : pct >= 50 ? '📚 需加强' : '💪 继续学习';

  container.innerHTML = `
    <div style="background:var(--card);border-radius:12px;padding:32px;max-width:600px;margin:0 auto;text-align:center">
      <div style="font-size:48px;margin-bottom:16px">${pct >= 70 ? '🎉' : '📖'}</div>
      <div style="font-size:24px;font-weight:800;color:var(--accent);margin-bottom:8px">测验完成！</div>
      <div style="font-size:16px;color:var(--text);margin-bottom:8px">${grade}</div>
      <div style="font-size:32px;font-weight:800;color:${pct>=70?'var(--green)':'var(--orange)'};margin:16px 0">
        ${score} / ${questions.length}（${pct}分）
      </div>
      ${wrong.length > 0 ? `
        <div style="margin-top:20px;text-align:left">
          <div style="font-weight:600;color:var(--red);margin-bottom:8px">错题回顾（${wrong.length} 道）</div>
          ${wrong.map((w, i) => `
            <div style="padding:10px;background:rgba(248,81,73,0.08);border-radius:8px;margin-bottom:8px;font-size:13px;line-height:1.6">
              <div style="font-weight:600;color:var(--text)">${i+1}. ${w.q}</div>
              <div style="color:var(--red)">你的答案：${w.opts[w.chosenIdx]}</div>
              <div style="color:var(--green)">正确答案：${w.opts[w.ans]}</div>
              <div style="color:var(--muted);margin-top:4px">📖 ${w.explain}</div>
            </div>
          `).join('')}
        </div>
      ` : '<div style="color:var(--green);font-weight:600;margin-top:12px">🎊 全部正确！太棒了！</div>'}
      <div style="margin-top:24px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        <button onclick="initQuiz('quizContainer')" style="padding:8px 20px;border-radius:8px;background:var(--accent);color:#fff;border:none;cursor:pointer;font-weight:600">🔄 重新测验</button>
        <button onclick="document.getElementById('quizPanel').style.display='none'" style="padding:8px 20px;border-radius:8px;background:var(--border);color:var(--text);border:none;cursor:pointer">关闭</button>
      </div>
    </div>
  `;

  // 保存进度到 localStorage
  try {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    history.push({ date: new Date().toISOString(), score, total: questions.length, pct });
    if (history.length > 20) history.shift();
    localStorage.setItem('quizHistory', JSON.stringify(history));
  } catch (e) {}
}

/* ========== 创建测验面板 ========== */
function showQuizPanel() {
  let panel = document.getElementById('quizPanel');
  if (panel) { panel.style.display = 'block'; return; }

  panel = document.createElement('div');
  panel.id = 'quizPanel';
  panel.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.85); z-index: 2000;
    overflow-y: auto; padding: 40px 20px;
  `;

  panel.innerHTML = `
    <div style="max-width:700px;margin:0 auto;position:relative">
      <button onclick="document.getElementById('quizPanel').style.display='none'"
        style="position:absolute;top:-20px;right:0;background:none;border:none;color:var(--muted);font-size:28px;cursor:pointer">✕</button>
      <h2 style="color:var(--accent);margin-bottom:20px;text-align:center">📝 化学知识测验</h2>
      <div id="quizContainer"></div>
    </div>
  `;

  document.body.appendChild(panel);
  initQuiz('quizContainer');
}

// 导出到全局
if (typeof window !== 'undefined') {
  window.showQuizPanel = showQuizPanel;
  window.initQuiz = initQuiz;
  window.answerQuiz = answerQuiz;
  window.nextQuizQuestion = nextQuizQuestion;
}
