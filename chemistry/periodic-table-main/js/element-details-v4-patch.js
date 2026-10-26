/**
 * 增强的元素详情生成器 v4.0 补丁
 * 在 v3.0 基础上增强化学方程式数据库
 * 加载顺序：v3.0 → v4.0-patch
 */

// ===== 化学方程式数据库（大幅扩展）=====
// 格式：{ eq: '化学方程式', type: '反应类型', condition: '反应条件', note: '说明' }
const CHEMICAL_EQUATIONS_DB_V4 = {
  // ===== 碱金属（第1族）=====
  'Li': [
    { eq: '2Li + 2H_2O \\rightarrow 2LiOH + H_2\\uparrow', type: '与水反应', condition: '室温', note: '反应不如钠剧烈，因为LiOH溶解度较小' },
    { eq: '4Li + O_2 \\xrightarrow{\\Delta} 2Li_2O', type: '与氧气反应', condition: '加热', note: '锂只生成普通氧化物' },
    { eq: '2Li + S \\xrightarrow{\\Delta} Li_2S', type: '与硫反应', condition: '加热', note: '用于制备硫化锂（固态电解质）' },
    { eq: '2Li + 2NH_3(l) \\rightarrow 2LiNH_2 + H_2\\uparrow', type: '与液氨反应', condition: '液氨', note: '生成氨基锂' },
    { eq: 'LiC_6 \\rightleftharpoons Li^+ + e^- + 6C', type: '电池反应', condition: '充放电', note: '锂离子电池石墨负极嵌脱锂' }
  ],
  'Na': [
    { eq: '2Na + 2H_2O \\rightarrow 2NaOH + H_2\\uparrow', type: '与水反应', condition: '室温', note: '浮、熔、游、嘶、红' },
    { eq: '2Na + O_2 \\xrightarrow{\\Delta} Na_2O_2', type: '与氧气反应', condition: '燃烧', note: '生成黄色过氧化钠' },
    { eq: '2Na + Cl_2 \\xrightarrow{\\text{点燃}} 2NaCl', type: '与卤素反应', condition: '点燃', note: '剧烈燃烧，发出黄色火焰' },
    { eq: 'Na + KCl \\xrightarrow{850^\\circ C} K\\uparrow + NaCl', type: '置换反应', condition: '850°C', note: '工业制钾（利用K沸点低）' },
    { eq: '2Na + 2C_2H_5OH \\rightarrow 2C_2H_5ONa + H_2\\uparrow', type: '与醇反应', condition: '室温', note: '生成乙醇钠' }
  ],
  'K': [
    { eq: '2K + 2H_2O \\rightarrow 2KOH + H_2\\uparrow', type: '与水反应', condition: '室温', note: '反应比钠更剧烈，可能燃烧' },
    { eq: 'K + O_2 \\rightarrow KO_2', type: '与氧气反应', condition: '燃烧', note: '生成超氧化钾（含O₂⁻）' },
    { eq: '4KO_2 + 2CO_2 \\rightarrow 2K_2CO_3 + 3O_2', type: '供氧反应', condition: '室温', note: '用于潜艇和航天器供氧' }
  ],
  'Rb': [
    { eq: '2Rb + 2H_2O \\rightarrow 2RbOH + H_2\\uparrow', type: '与水反应', condition: '室温', note: '反应极其剧烈，常引起爆炸' },
    { eq: 'Rb + O_2 \\rightarrow RbO_2', type: '与氧气反应', condition: '燃烧', note: '生成超氧化物' }
  ],
  'Cs': [
    { eq: '2Cs + 2H_2O \\rightarrow 2CsOH + H_2\\uparrow', type: '与水反应', condition: '室温', note: '爆炸性反应！CsOH碱性最强' }
  ],
  
  // ===== 碱土金属（第2族）=====
  'Be': [
    { eq: 'Be + 2HCl \\rightarrow BeCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '铍表面易形成致密氧化膜' },
    { eq: 'Be + 2NaOH + 2H_2O \\rightarrow Na_2[Be(OH)_4] + H_2\\uparrow', type: '与碱反应', condition: '加热', note: '铍是两性金属' }
  ],
  'Mg': [
    { eq: '2Mg + O_2 \\xrightarrow{\\text{点燃}} 2MgO', type: '与氧气反应', condition: '点燃', note: '发出耀眼白光' },
    { eq: 'Mg + CO_2 \\xrightarrow{\\text{点燃}} 2MgO + C', type: '与CO₂反应', condition: '点燃', note: '镁在CO₂中继续燃烧' },
    { eq: 'Mg + 2TiCl_4 \\xrightarrow{800^\\circ C} Ti + 2MgCl_2', type: 'Kroll法', condition: '800-900°C', note: '工业制钛' },
    { eq: 'Mg + S \\rightarrow MgS', type: '脱硫反应', condition: '铁水中', note: '镁脱硫效果优于钙' }
  ],
  'Ca': [
    { eq: 'Ca + 2H_2O \\rightarrow Ca(OH)_2 + H_2\\uparrow', type: '与水反应', condition: '室温', note: '反应比钠温和' },
    { eq: 'CaCO_3 \\xrightarrow{900^\\circ C} CaO + CO_2\\uparrow', type: '分解反应', condition: '900°C', note: '石灰石分解' },
    { eq: 'CaO + H_2O \\rightarrow Ca(OH)_2', type: '水合反应', condition: '室温', note: '放热反应' },
    { eq: 'CaC_2 + 2H_2O \\rightarrow Ca(OH)_2 + C_2H_2\\uparrow', type: '水解反应', condition: '室温', note: '制取乙炔' }
  ],
  'Sr': [
    { eq: 'Sr + 2H_2O \\rightarrow Sr(OH)_2 + H_2\\uparrow', type: '与水反应', condition: '冷水', note: '反应比钙更剧烈' }
  ],
  'Ba': [
    { eq: 'Ba + 2H_2O \\rightarrow Ba(OH)_2 + H_2\\uparrow', type: '与水反应', condition: '冷水', note: 'Ba(OH)₂是强碱' },
    { eq: 'BaSO_4 + 4C \\xrightarrow{1100^\\circ C} BaS + 4CO\\uparrow', type: '还原反应', condition: '1100°C', note: '重晶石碳热还原' }
  ],
  
  // ===== 卤素（第17族）=====
  'F': [
    { eq: 'F_2 + H_2 \\rightarrow 2HF', type: '与氢气反应', condition: '暗处即爆炸', note: '氟是最活泼的非金属' },
    { eq: '2F_2 + 2H_2O \\rightarrow 4HF + O_2\\uparrow', type: '与水反应', condition: '室温', note: '氟氧化水生成氧气' },
    { eq: '4HF + SiO_2 \\rightarrow SiF_4\\uparrow + 2H_2O', type: '腐蚀玻璃', condition: '室温', note: '氢氟酸能腐蚀玻璃' },
    { eq: '2F_2 + 2NaOH \\rightarrow 2NaF + OF_2\\uparrow + H_2O', type: '与碱反应', condition: '稀溶液', note: '生成二氟化氧' }
  ],
  'Cl': [
    { eq: 'Cl_2 + H_2 \\xrightarrow{\\text{光照}} 2HCl', type: '与氢气反应', condition: '光照/点燃', note: '光照下爆炸' },
    { eq: 'Cl_2 + H_2O \\rightleftharpoons HCl + HClO', type: '与水反应', condition: '室温', note: '可逆反应，HClO具有漂白性' },
    { eq: 'Cl_2 + 2NaOH \\rightarrow NaCl + NaClO + H_2O', type: '与碱反应（冷）', condition: '室温', note: '制取漂白液' },
    { eq: 'MnO_2 + 4HCl(浓) \\xrightarrow{\\Delta} MnCl_2 + Cl_2\\uparrow + 2H_2O', type: '实验室制氯气', condition: '加热', note: '二氧化锰氧化浓盐酸' },
    { eq: '2KMnO_4 + 16HCl \\rightarrow 2KCl + 2MnCl_2 + 5Cl_2\\uparrow + 8H_2O', type: '制氯气', condition: '室温', note: '高锰酸钾氧化盐酸' }
  ],
  'Br': [
    { eq: 'Br_2 + H_2 \\xrightarrow{300^\\circ C} 2HBr', type: '与氢气反应', condition: '300°C，催化', note: '反应可逆' },
    { eq: 'Br_2 + H_2O \\rightleftharpoons HBr + HBrO', type: '与水反应', condition: '室温', note: '溴水呈橙黄色' },
    { eq: '2AgBr \\xrightarrow{h\\nu} 2Ag + Br_2', type: '光解反应', condition: '光照', note: '照相底片感光原理' }
  ],
  'I': [
    { eq: 'I_2 + H_2 \\xrightarrow{\\Delta} 2HI', type: '与氢气反应', condition: '加热，催化', note: '可逆反应，转化率很低' },
    { eq: 'I_2 + 2Na_2S_2O_3 \\rightarrow 2NaI + Na_2S_4O_6', type: '碘量法', condition: '室温', note: '定量分析中标定氧化剂' },
    { eq: '3I_2 + 6NaOH \\xrightarrow{\\Delta} 5NaI + NaIO_3 + 3H_2O', type: '歧化反应', condition: '热碱液', note: '碘在热碱液中歧化' }
  ],
  
  // ===== 稀有气体（第18族）=====
  'Xe': [
    { eq: 'Xe + F_2 \\xrightarrow{h\\nu} XeF_2', type: '氟化反应', condition: '光照，200°C', note: '二氟化氙' },
    { eq: 'Xe + 2F_2 \\xrightarrow{400^\\circ C} XeF_4', type: '氟化反应', condition: '400°C，5atm', note: '四氟化氙' },
    { eq: 'Xe + 3F_2 \\xrightarrow{300^\\circ C} XeF_6', type: '氟化反应', condition: '300°C，50atm', note: '六氟化氙' },
    { eq: 'XeF_4 + 2H_2O \\rightarrow Xe + O_2 + 4HF', type: '水解反应', condition: '室温', note: '不完全水解' },
    { eq: 'XeF_6 + 3H_2O \\rightarrow XeO_3 + 6HF', type: '完全水解', condition: '室温', note: 'XeO₃是危险爆炸物' }
  ],
  'Kr': [
    { eq: 'Kr + F_2 \\xrightarrow{\\text{放电}} KrF_2', type: '氟化反应', condition: '放电', note: '二氟化氪，极不稳定' }
  ],
  
  // ===== 过渡金属（第3-12族）=====
  // 第4周期
  'Sc': [
    { eq: 'Sc_2O_3 + 6HCl \\rightarrow 2ScCl_3 + 3H_2O', type: '氧化物与酸', condition: '室温', note: '氧化钪是碱性氧化物' }
  ],
  'Ti': [
    { eq: 'TiCl_4 + O_2 \\xrightarrow{900^\\circ C} TiO_2 + 2Cl_2', type: '氯化法提钛', condition: '900°C', note: '生产钛白' },
    { eq: 'TiCl_4 + 2Mg \\xrightarrow{800^\\circ C} Ti + 2MgCl_2', type: 'Kroll法', condition: '800-900°C', note: '工业制海绵钛' },
    { eq: 'Ti + 6HF \\rightarrow [TiF_6]^{2-} + 2H^+ + 2H_2\\uparrow + 2e^-', type: '与氢氟酸反应', condition: '室温', note: '钛溶于氢氟酸' }
  ],
  'V': [
    { eq: 'V_2O_5 + H_2SO_4 \\rightarrow (VO_2)_2SO_4 + H_2O', type: '钒催化剂', condition: '接触法制硫酸', note: 'V₂O₅是SO₂氧化催化剂' }
  ],
  'Cr': [
    { eq: '4FeCr_2O_4 + 8Na_2CO_3 + 7O_2 \\xrightarrow{1100^\\circ C} 8Na_2CrO_4 + 2Fe_2O_3 + 8CO_2', type: '铬铁矿焙烧', condition: '1100°C', note: '工业制铬酸钠' },
    { eq: 'Cr_2O_7^{2-} + 14H^+ + 6e^- \\rightarrow 2Cr^{3+} + 7H_2O', type: '还原反应', condition: '酸性介质', note: '重铬酸根氧化性，E°=1.33V' },
    { eq: 'Cr^{3+} + 3OH^- \\rightarrow Cr(OH)_3\\downarrow', type: '沉淀反应', condition: 'pH=5-6', note: '氢氧化铬（灰绿色）' },
    { eq: 'Cr(OH)_3 + OH^- \\rightarrow [Cr(OH)_4]^-', type: '两性反应', condition: '过量碱', note: 'Cr(OH)₃溶于过量碱' }
  ],
  'Mn': [
    { eq: '2MnO_2 + 4KOH + O_2 \\xrightarrow{250^\\circ C} 2K_2MnO_4 + 2H_2O', type: '制备锰酸钾', condition: '250°C', note: '熔融氧化法' },
    { eq: '3MnO_4^{2-} + 4H^+ \\rightarrow 2MnO_4^- + MnO_2 + 2H_2O', type: '歧化反应', condition: '酸性', note: '锰酸根歧化' },
    { eq: '2MnO_4^- + 5C_2O_4^{2-} + 16H^+ \\xrightarrow{70^\\circ C} 2Mn^{2+} + 10CO_2\\uparrow + 8H_2O', type: '氧化还原滴定', condition: '加热70°C', note: '高锰酸钾法测定草酸盐' }
  ],
  'Fe': [
    { eq: 'Fe + 2HCl \\rightarrow FeCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '生成Fe²⁺' },
    { eq: 'Fe + 4HNO_3(稀) \\rightarrow Fe(NO_3)_3 + NO\\uparrow + 2H_2O', type: '与氧化性酸', condition: '室温', note: '生成Fe³⁺' },
    { eq: 'Fe_2O_3 + 3CO \\xrightarrow{1200^\\circ C} 2Fe + 3CO_2', type: '高炉炼铁', condition: '1200°C', note: 'CO还原氧化铁' },
    { eq: '3Fe + 4H_2O(g) \\xrightarrow{570^\\circ C} Fe_3O_4 + 4H_2\\uparrow', type: '与水蒸气反应', condition: '570°C以上', note: '铁与水蒸气反应' },
    { eq: '4Fe + 3O_2 + 6H_2O \\rightarrow 4Fe(OH)_3', type: '吸氧腐蚀', condition: '潮湿空气', note: '铁的电化学腐蚀' },
    { eq: 'Fe^{3+} + SCN^- \\rightarrow [Fe(SCN)]^{2+}', type: '配位反应', condition: '水溶液', note: '检验Fe³⁺（血红色）' },
    { eq: '2Fe^{3+} + 2I^- \\rightarrow 2Fe^{2+} + I_2', type: '氧化还原反应', condition: '酸性介质', note: 'Fe³⁺氧化I⁻' }
  ],
  'Co': [
    { eq: '[Co(H_2O)_6]^{2+} + 4Cl^- \\rightleftharpoons [CoCl_4]^{2-} + 6H_2O', type: '配位平衡', condition: '水溶液', note: '粉红⇌蓝，湿度指示' },
    { eq: '4Co^{2+} + O_2 + 4H^+ \\rightarrow 4Co^{3+} + 2H_2O', type: '氧化反应', condition: '酸性介质', note: 'Co²⁺被空气氧化（慢）' }
  ],
  'Ni': [
    { eq: 'Ni + 4CO \\xrightarrow{50-60^\\circ C} Ni(CO)_4', type: '羰基化反应', condition: '50-60°C', note: '蒙德法提纯镍' },
    { eq: 'Ni(CO)_4 \\xrightarrow{180^\\circ C} Ni + 4CO\\uparrow', type: '分解反应', condition: '180°C', note: '羰基镍分解得高纯镍' }
  ],
  'Cu': [
    { eq: 'Cu + 4HNO_3(浓) \\rightarrow Cu(NO_3)_2 + 2NO_2\\uparrow + 2H_2O', type: '与浓硝酸', condition: '室温', note: '生成NO₂' },
    { eq: '3Cu + 8HNO_3(稀) \\rightarrow 3Cu(NO_3)_2 + 2NO\\uparrow + 4H_2O', type: '与稀硝酸', condition: '室温', note: '生成NO' },
    { eq: 'Cu + 2H_2SO_4(浓) \\xrightarrow{\\Delta} CuSO_4 + SO_2\\uparrow + 2H_2O', type: '与浓硫酸', condition: '加热', note: '浓硫酸氧化铜' },
    { eq: '2Cu + O_2 + CO_2 + H_2O \\rightarrow Cu_2(OH)_2CO_3', type: '铜绿生成', condition: '潮湿空气', note: '碱式碳酸铜' },
    { eq: 'Cu^{2+} + 4NH_3 \\rightarrow [Cu(NH_3)_4]^{2+}', type: '配位反应', condition: '水溶液', note: '深蓝色铜氨配离子' },
    { eq: '2Cu^{2+} + 4I^- \\rightarrow 2CuI\\downarrow + I_2', type: '氧化还原反应', condition: '水溶液', note: 'Cu²⁺氧化I⁻' }
  ],
  'Zn': [
    { eq: 'Zn + 2HCl \\rightarrow ZnCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '锌与非氧化性酸反应迅速' },
    { eq: 'Zn + 2NaOH + 2H_2O \\rightarrow Na_2[Zn(OH)_4] + H_2\\uparrow', type: '与碱反应', condition: '加热', note: '锌是两性金属' },
    { eq: 'Zn + Cu^{2+} \\rightarrow Zn^{2+} + Cu', type: '置换反应', condition: '水溶液', note: '锌置换铜' }
  ],
  
  // 第5周期
  'Y': [
    { eq: 'Y_2O_3 + Eu^{2+} \\xrightarrow{高温} Y_2O_3:Eu^{2+}', type: '荧光材料', condition: '高温固相', note: '钇铕荧光粉' }
  ],
  'Zr': [
    { eq: 'Zr + 2Cl_2 \\rightarrow ZrCl_4', type: '氯化反应', condition: '加热', note: '四氯化锆' },
    { eq: 'Zr + H_2O(蒸汽) \\xrightarrow{高温} ZrO_2 + 2H_2\\uparrow', type: '与水反应', condition: '高温', note: '锆水反应（核反应堆）' }
  ],
  'Nb': [
    { eq: '2Nb + 5Cl_2 \\rightarrow 2NbCl_5', type: '氯化反应', condition: '加热', note: '五氯化铌' }
  ],
  'Mo': [
    { eq: 'Mo + 3O_2 \\rightarrow MoO_3', type: '氧化反应', condition: '加热', note: '三氧化钼' },
    { eq: 'MoO_3 + 3H_2 \\xrightarrow{500-700^\\circ C} Mo + 3H_2O', type: '还原反应', condition: '500-700°C', note: '氢气还原MoO₃' }
  ],
  'Tc': [
    { eq: '^{99m}Tc \\rightarrow ^{99}Tc + \\gamma', type: '核衰变', condition: '自发', note: '锝-99m医学示踪剂' }
  ],
  'Ru': [
    { eq: 'Ru + 3O_2 \\rightarrow RuO_4', type: '氧化反应', condition: '加热', note: '四氧化钌' }
  ],
  'Rh': [
    { eq: 'Rh/Al_2O_3', type: '汽车尾气催化剂', condition: '200-400°C', note: '铑催化还原NOx' }
  ],
  'Pd': [
    { eq: 'Pd + H_2 \\rightarrow Pd(H)', type: '储氢', condition: '室温', note: '钯能吸收900倍体积氢气' },
    { eq: 'PdCl_2 + CO + H_2O \\rightarrow Pd\\downarrow + CO_2 + 2HCl', type: '检测CO', condition: '室温', note: '钯盐检测一氧化碳' }
  ],
  'Ag': [
    { eq: 'Ag^+ + Cl^- \\rightarrow AgCl\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氯化银（白色，见光分解）' },
    { eq: '2AgBr \\xrightarrow{h\\nu} 2Ag + Br_2', type: '光解反应', condition: '光照', note: '照相底片感光' }
  ],
  'Cd': [
    { eq: 'Cd + S \\xrightarrow{\\Delta} CdS', type: '与硫反应', condition: '加热', note: '硫化镉，黄色颜料' }
  ],
  
  // 第6周期
  'Hf': [
    { eq: 'Hf + 2Cl_2 \\rightarrow HfCl_4', type: '氯化反应', condition: '加热', note: '四氯化铪' }
  ],
  'Ta': [
    { eq: '2Ta + 5Cl_2 \\rightarrow 2TaCl_5', type: '氯化反应', condition: '加热', note: '五氯化钽' }
  ],
  'W': [
    { eq: 'WO_3 + 3H_2 \\xrightarrow{700^\\circ C} W + 3H_2O', type: '还原反应', condition: '700°C', note: '氢气还原WO₃制钨' },
    { eq: 'W + C \\xrightarrow{1500^\\circ C} WC', type: '碳化反应', condition: '1500°C', note: '碳化钨，硬质合金' }
  ],
  'Re': [
    { eq: '2Re + 7Cl_2 \\rightarrow 2ReCl_7', type: '氯化反应', condition: '加热', note: '七氯化铼' },
    { eq: 'Re_2O_7 + H_2O \\rightarrow 2HReO_4', type: '酸性氧化物', condition: '室温', note: '高铼酸' }
  ],
  'Os': [
    { eq: 'Os + 2O_2 \\rightarrow OsO_4', type: '氧化反应', condition: '室温（缓慢）', note: '四氧化锇，剧毒' }
  ],
  'Pt': [
    { eq: '3Pt + 4HNO_3 + 18HCl \\rightarrow 3H_2[PtCl_6] + 4NO\\uparrow + 8H_2O', type: '王水溶解', condition: '加热', note: '铂溶于王水' },
    { eq: '[PtCl_4]^{2-} + 2NH_3 \\rightarrow [Pt(NH_3)_2Cl_2]', type: '配位反应', condition: '水溶液', note: '顺铂（抗癌药物）' }
  ],
  'Au': [
    { eq: 'Au + HNO_3 + 4HCl \\rightarrow H[AuCl_4] + NO\\uparrow + 2H_2O', type: '王水溶解', condition: '加热', note: '金溶于王水' },
    { eq: '2[AuCl_4]^- + 3Zn \\rightarrow 2Au\\downarrow + 8Cl^- + 3Zn^{2+}', type: '还原反应', condition: '水溶液', note: '锌还原金离子' },
    { eq: 'Au(CN)_2^- + e^- \\rightarrow Au + 2CN^-', type: '氰化法提金', condition: '碱性介质', note: '氰离子与金形成配离子' }
  ],
  'Hg': [
    { eq: 'Hg + S \\rightarrow HgS', type: '与硫反应', condition: '研磨', note: '处理汞泄漏' },
    { eq: 'Hg_2^{2+} \\rightleftharpoons Hg + Hg^{2+}', type: '歧化平衡', condition: '水溶液', note: '亚汞离子平衡' }
  ],
  
  // ===== 后过渡金属 =====
  'Al': [
    { eq: '4Al + 3O_2 \\xrightarrow{\\text{点燃}} 2Al_2O_3', type: '铝热反应', condition: '点燃', note: 'ΔH=-3352kJ/mol' },
    { eq: '2Al + Fe_2O_3 \\xrightarrow{\\text{点燃}} 2Fe + Al_2O_3', type: '铝热反应', condition: '点燃', note: '温度可达2500°C' },
    { eq: '2Al_2O_3(熔融) \\xrightarrow{960^\\circ C} 4Al + 3O_2\\uparrow', type: '电解制铝', condition: '960°C', note: 'Hall-Héroult法' },
    { eq: '2Al + 2NaOH + 6H_2O \\rightarrow 2Na[Al(OH)_4] + 3H_2\\uparrow', type: '与碱反应', condition: '加热', note: '铝是两性金属' }
  ],
  'Ga': [
    { eq: '2Ga + 3Cl_2 \\rightarrow 2GaCl_3', type: '氯化反应', condition: '加热', note: '三氯化镓' },
    { eq: 'Ga + As \\xrightarrow{高温} GaAs', type: '化合物半导体', condition: '高温', note: '砷化镓' }
  ],
  'In': [
    { eq: '2In + 3Cl_2 \\rightarrow 2InCl_3', type: '氯化反应', condition: '加热', note: '三氯化铟' }
  ],
  'Tl': [
    { eq: '2Tl + Cl_2 \\rightarrow 2TlCl', type: '与氯气反应', condition: '室温', note: '生成Tl(I)化合物' },
    { eq: 'Tl^+ + I^- \\rightarrow TlI\\downarrow', type: '沉淀反应', condition: '水溶液', note: '碘化亚铊（黄色）' }
  ],
  'Ge': [
    { eq: 'Ge + 2Cl_2 \\rightarrow GeCl_4', type: '氯化反应', condition: '加热', note: '四氯化锗' },
    { eq: 'GeO_2 + 2H_2 \\xrightarrow{600^\\circ C} Ge + 2H_2O', type: '还原反应', condition: '600°C', note: '氢气还原GeO₂' }
  ],
  'Sn': [
    { eq: 'Sn + 2Cl_2 \\rightarrow SnCl_4', type: '与氯气反应', condition: '加热', note: '四氯化锡' },
    { eq: 'Sn + Cl_2 \\rightarrow SnCl_2', type: '与氯气反应', condition: '限量氯气', note: '二氯化锡，强还原剂' },
    { eq: 'Sn + 2HCl \\rightarrow SnCl_2 + H_2\\uparrow', type: '与酸反应', condition: '浓盐酸', note: '锡溶于浓盐酸' }
  ],
  'Pb': [
    { eq: 'Pb + 2HCl \\rightarrow PbCl_2 + H_2\\uparrow', type: '与盐酸反应', condition: '浓盐酸', note: 'PbCl₂微溶' },
    { eq: 'Pb + 4HNO_3 \\rightarrow Pb(NO_3)_2 + 2NO_2\\uparrow + 2H_2O', type: '与硝酸反应', condition: '浓硝酸', note: '生成Pb(NO₃)₂' },
    { eq: 'PbO_2 + 4HCl \\rightarrow PbCl_2 + Cl_2\\uparrow + 2H_2O', type: '还原反应', condition: '加热', note: 'Pb(IV)是强氧化剂' }
  ],
  'Bi': [
    { eq: '2Bi + 3Cl_2 \\rightarrow 2BiCl_3', type: '氯化反应', condition: '加热', note: '三氯化铋' },
    { eq: 'Bi(NO_3)_3 + H_2O \\rightarrow BiONO_3\\downarrow + 2HNO_3', type: '水解反应', condition: '水溶液', note: '铋盐强烈水解' }
  ],
  
  // ===== 准金属 =====
  'B': [
    { eq: '2B + 3F_2 \\rightarrow 2BF_3', type: '氟化反应', condition: '室温', note: '三氟化硼' },
    { eq: 'B_2H_6 + 6H_2O \\rightarrow 2H_3BO_3 + 6H_2\\uparrow', type: '水解反应', condition: '室温', note: '乙硼烷水解' }
  ],
  'Si': [
    { eq: 'Si + 2Cl_2 \\xrightarrow{\\Delta} SiCl_4', type: '氯化反应', condition: '加热', note: '四氯化硅' },
    { eq: 'SiCl_4 + 2H_2 \\xrightarrow{1100^\\circ C} Si + 4HCl', type: '还原反应', condition: '1100°C', note: '西门子法提纯硅' },
    { eq: 'Si + 2NaOH + H_2O \\rightarrow Na_2SiO_3 + 2H_2\\uparrow', type: '与碱反应', condition: '加热', note: '硅溶于强碱' },
    { eq: 'SiO_2 + 2C \\xrightarrow{1700^\\circ C} Si + 2CO\\uparrow', type: '碳热还原', condition: '1700°C', note: '冶金级硅' }
  ],
  'As': [
    { eq: '4As + 3O_2 \\rightarrow 2As_2O_3', type: '氧化反应', condition: '加热', note: '三氧化二砷（砒霜）' },
    { eq: '2As + 5O_2 + 4H_2O \\rightarrow 4H_3AsO_4', type: '氧化反应', condition: '加热', note: '砷酸' },
    { eq: 'Ga + As \\xrightarrow{高温} GaAs', type: '化合物半导体', condition: '高温', note: '砷化镓' }
  ],
  'Sb': [
    { eq: '4Sb + 3O_2 \\rightarrow 2Sb_2O_3', type: '氧化反应', condition: '加热', note: '三氧化二锑' },
    { eq: '2Sb + 5Cl_2 \\rightarrow 2SbCl_5', type: '氯化反应', condition: '加热', note: '五氯化锑' }
  ],
  'Te': [
    { eq: 'Te + 2Cl_2 \\rightarrow TeCl_4', type: '氯化反应', condition: '加热', note: '四氯化碲' },
    { eq: 'Cd + Te \\xrightarrow{高温} CdTe', type: '化合物半导体', condition: '高温', note: '碲化镉' }
  ],
  
  // ===== 非金属 =====
  'C': [
    { eq: 'C + O_2 \\xrightarrow{\\text{点燃}} CO_2', type: '完全燃烧', condition: '点燃', note: 'ΔH=-393.5kJ/mol' },
    { eq: '2C + O_2 \\xrightarrow{\\text{点燃}} 2CO', type: '不完全燃烧', condition: '点燃（缺氧）', note: '煤气中毒原因' },
    { eq: 'C + H_2O \\xrightarrow{1000^\\circ C} CO + H_2', type: '水煤气反应', condition: '1000°C', note: '产生合成气' },
    { eq: 'CO_2 + C \\xrightarrow{800^\\circ C} 2CO', type: '还原反应', condition: '800°C', note: 'Boudouard反应' }
  ],
  'N': [
    { eq: 'N_2 + 3H_2 \\rightleftharpoons 2NH_3', type: '合成氨', condition: '450-500°C, 15-30MPa', note: 'Haber-Bosch法' },
    { eq: 'N_2 + O_2 \\xrightarrow{\\text{放电}} 2NO', type: 'NO生成', condition: '放电', note: '自然界的固氮' },
    { eq: '4NH_3 + 5O_2 \\xrightarrow{800^\\circ C} 4NO + 6H_2O', type: 'Ostwald法', condition: '800°C，Pt-Rh催化', note: '工业制硝酸' },
    { eq: '2NO + O_2 \\rightarrow 2NO_2', type: '氧化反应', condition: '室温', note: 'NO氧化为NO₂' }
  ],
  'O': [
    { eq: '2H_2 + O_2 \\xrightarrow{\\text{点燃}} 2H_2O', type: '氢气燃烧', condition: '点燃', note: 'ΔH=-285.8kJ/mol' },
    { eq: '3O_2 \\xrightarrow{\\text{放电}} 2O_3', type: '臭氧生成', condition: '放电', note: '臭氧层' }
  ],
  'P': [
    { eq: 'P_4 + 5O_2 \\xrightarrow{\\text{点燃}} P_4O_{10}', type: '燃烧反应', condition: '点燃', note: '白磷自燃' },
    { eq: 'P_4O_{10} + 6H_2O \\rightarrow 4H_3PO_4', type: '完全水合', condition: '室温', note: 'P₄O₁₀是强干燥剂' },
    { eq: 'Ca_3(PO_4)_2 + 3H_2SO_4 \\rightarrow 2H_3PO_4 + 3CaSO_4', type: '湿法磷酸', condition: '室温', note: '工业制磷酸' }
  ],
  'S': [
    { eq: 'S + O_2 \\xrightarrow{\\text{点燃}} SO_2', type: '燃烧反应', condition: '点燃', note: '二氧化硫' },
    { eq: '2SO_2 + O_2 \\rightleftharpoons 2SO_3', type: '接触法制硫酸', condition: '450°C，V₂O₅催化', note: '可逆反应' },
    { eq: 'SO_3 + H_2O \\rightarrow H_2SO_4', type: '吸收反应', condition: '室温', note: '剧烈放热' }
  ],
  
  // ===== 镧系元素 =====
  'La': [
    { eq: '2La + 3H_2O \\rightarrow La_2O_3 + 3H_2\\uparrow', type: '与水反应', condition: '冷水', note: '镧与水反应剧烈' },
    { eq: 'LaNi_5 + 3H_2 \\rightleftharpoons LaNi_5H_6', type: '储氢反应', condition: '室温-100°C', note: '镧镍合金储氢' }
  ],
  'Ce': [
    { eq: '2Ce(OH)_3 + O_2 + 2H_2O \\rightarrow 2Ce(OH)_4\\downarrow', type: '氧化反应', condition: '水溶液', note: 'Ce(III)氧化为Ce(IV)' },
    { eq: '2Ce^{4+} + 2I^- \\rightarrow 2Ce^{3+} + I_2', type: '氧化还原滴定', condition: '酸性介质', note: 'Ce(IV)是强氧化剂' }
  ],
  'Nd': [
    { eq: 'Nd_2O_3 + 6HCl \\rightarrow 2NdCl_3 + 3H_2O', type: '氧化物与酸', condition: '室温', note: '氧化钕溶于盐酸' }
  ],
  'Eu': [
    { eq: 'Eu^{2+} \\rightarrow Eu^{3+} + e^-', type: '氧化反应', condition: '水溶液（空气）', note: 'Eu²⁺易被氧化' }
  ],
  'Gd': [
    { eq: 'Gd^{3+} + DTPA^{5-} \\rightarrow [Gd(DTPA)(H_2O)]^{2-}', type: '配位反应', condition: '水溶液', note: '钆造影剂' }
  ],
  
  // ===== 锕系元素 =====
  'Th': [
    { eq: '^{232}_{90}Th + n \\rightarrow ^{233}_{90}Th \\xrightarrow{\\beta^-} ^{233}_{91}Pa \\xrightarrow{\\beta^-} ^{233}_{92}U', type: '核反应', condition: '核反应堆', note: '钍增殖U-233' }
  ],
  'U': [
    { eq: '^{235}_{92}U + n \\rightarrow \\text{fission products} + 2-3n + \\text{能量}', type: '核裂变', condition: '核反应堆', note: '铀-235裂变' },
    { eq: 'UF_6 + 2e^- \\rightarrow U + 6F^-', type: '电解还原', condition: '熔融盐', note: 'UF₆电解制铀' }
  ],
  'Pu': [
    { eq: '^{239}_{94}Pu + n \\rightarrow \\text{fission products} + 2-3n + \\text{能量}', type: '核裂变', condition: '核反应堆', note: '钚-239重要核燃料' }
  ]
};

// ===== 辅助函数：获取元素的化学方程式 =====
function getChemicalEquationsV4(symbol) {
  return CHEMICAL_EQUATIONS_DB_V4[symbol] || [];
}

// ===== 增强的化学性质生成器（使用v4数据库）=====
function generateChemicalPropsDetailedV4(el) {
  const equations = getChemicalEquationsV4(el.symbol);
  
  if (equations.length > 0) {
    let props = '### 化学反应方程式\n\n';
    props += `> ${el.name}的主要化学反应：\n\n`;
    
    equations.forEach(function(eqData, idx) {
      props += `#### ${idx + 1}. ${eqData.type}\n\n`;
      // 使用KaTeX格式
      props += `$$${eqData.eq}$$\n\n`;
      if (eqData.condition) {
        props += `- **反应条件**：${eqData.condition}\n`;
      }
      if (eqData.note) {
        props += `- **说明**：${eqData.note}\n`;
      }
      props += `\n`;
    });
    
    return props;
  }
  
  // 如果没有详细数据，回退到v3生成器
  if (typeof generateChemicalPropsDetailedV3 === 'function') {
    return generateChemicalPropsDetailedV3(el);
  }
  
  // 最后回退到分类模板
  return generateChemicalPropsByCategory(el);
}

// ===== 分类模板后备函数 =====
function generateChemicalPropsByCategory(el) {
  const cat = el.category;
  const symbol = el.symbol;
  
  if (cat === 'alkali-metal') {
    return `### 化学反应方程式\n\n` +
           `#### 1. 与水反应\n\n$$2${symbol} + 2H_2O \\rightarrow 2${symbol}OH + H_2\\uparrow$$\n\n` +
           `#### 2. 与氧气反应\n\n$$4${symbol} + O_2 \\rightarrow 2${symbol}_2O$$\n\n`;
  }
  
  if (cat === 'halogen') {
    return `### 化学反应方程式\n\n` +
           `#### 1. 与氢气反应\n\n$$H_2 + ${symbol}_2 \\rightarrow 2H${symbol}$$\n\n` +
           `#### 2. 与碱反应\n\n$${symbol}_2 + 2NaOH \\rightarrow Na${symbol} + Na${symbol}O + H_2O$$\n\n`;
  }
  
  return `### 化学性质\n\n${el.name}的化学性质与其在周期表中的位置相关。\n\n`;
}

// ===== 晶体结构示意图生成器 =====
function generateCrystalStructureSection(el) {
  if (typeof CrystalStructureSVGRenderer === 'undefined') {
    return '';  // 渲染器未加载
  }
  
  let section = '### 晶体结构示意图\n\n';
  
  // 生成SVG
  const svg = CrystalStructureSVGRenderer.render(el);
  if (svg && svg.includes('<svg')) {
    section += '<div style="text-align: center; margin: 15px 0;">\n' +
                svg + '\n</div>\n\n';
  }
  
  // 添加晶体学数据
  if (el.crystalStructure) {
    section += `> **晶体结构**：${el.crystalStructure}\n`;
    section += `> **空间群**：查看 P4_CRYSTAL[${el.z}] 获取详细数据\n\n`;
  }
  
  return section;
}

// ===== 覆盖原来的主生成函数，添加晶体结构部分 =====
const _origGetElementMarkdownV4 = window.getElementMarkdown;
window.getElementMarkdown = function(el) {
  // 调用v3.0生成器获取基础markdown
  let markdown = _origGetElementMarkdownV4(el);
  
  // 在物理性质部分后插入晶体结构示意图
  const insertAfter = '#### 详细物理常数\n\n| 性质 | 值 |';
  const insertIdx = markdown.indexOf(insertAfter);
  
  if (insertIdx !== -1) {
    const crystalSection = generateCrystalStructureSection(el);
    if (crystalSection) {
      const before = markdown.substring(0, insertIdx);
      const after = markdown.substring(insertIdx);
      
      // 在"详细物理常数"表格后插入
      const tableEnd = after.indexOf('|  |  |') + after.indexOf('\n\n', after.indexOf('|  |  |'));
      if (tableEnd !== -1) {
        const afterTable = after.substring(0, tableEnd + 3) + 
                             '\n\n---\n\n' + crystalSection + 
                             after.substring(tableEnd + 3);
        markdown = before + afterTable;
      }
    }
  }
  
  return markdown;
};

// ===== 覆盖原来的函数 =====
// 保存原来的v3函数
const _origGenerateChemicalPropsV3 = window.generateChemicalPropsDetailedV3;

// 用v4增强版覆盖
window.generateChemicalPropsDetailedV3 = generateChemicalPropsDetailedV4;

console.log('✅ 增强元素详情生成器 v4.0 补丁已加载');
console.log('   化学方程式数据库：' + Object.keys(CHEMICAL_EQUATIONS_DB_V4).length + ' 个元素，' + 
              Object.values(CHEMICAL_EQUATIONS_DB_V4).reduce(function(sum, arr) { return sum + arr.length; }, 0) + ' 个方程式');
