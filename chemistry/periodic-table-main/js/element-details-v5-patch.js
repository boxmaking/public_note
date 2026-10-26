/**
 * 增强的元素详情生成器 v5.0 补丁
 * 在 v4.0 基础上大幅扩展化学方程式数据库
 * 目标：从60个元素扩展到100+个元素
 * 加载顺序：v3.0 → v4.0-patch → v5.0-patch
 */

// ===== 化学方程式数据库 V5.0（大幅扩展）=====
const CHEMICAL_EQUATIONS_DB_V5 = {
  // ===== 继承 v4.0 的所有方程式 =====
  ...CHEMICAL_EQUATIONS_DB_V4,
  
  // ===== 新增：更多碱金属详细方程式 =====
  'Li': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Li'] || []),
    { eq: 'LiH + H_2O \\rightarrow LiOH + H_2\\uparrow', type: '氢化锂水解', condition: '室温', note: '氢化锂是强还原剂' },
    { eq: '2Li + 2C_2H_5OH \\rightarrow 2C_2H_5OLi + H_2\\uparrow', type: '与乙醇反应', condition: '室温', note: '制取乙醇锂' },
    { eq: '6Li + N_2 \\xrightarrow{300^\\circ C} 2Li_3N', type: '与氮气反应', condition: '300°C', note: '锂是唯一能与氮气直接反应的碱金属' }
  ],
  'Na': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Na'] || []),
    { eq: '2Na + O_2 \\xrightarrow{150^\\circ C} Na_2O', type: '低温氧化', condition: '150°C', note: '低温下生成氧化钠' },
    { eq: 'Na_2O_2 + 2H_2O \\rightarrow 2NaOH + H_2O_2', type: '过氧化钠水解', condition: '室温', note: '生成过氧化氢' },
    { eq: 'Na_2O_2 + CO_2 \\rightarrow Na_2CO_3 + \\frac{1}{2}O_2', type: '供氧反应', condition: '室温', note: '用于呼吸面具' },
    { eq: 'Na + NH_3(l) \\rightarrow NaNH_2 + \\frac{1}{2}H_2\\uparrow', type: '与液氨反应', condition: '液氨', note: '生成氨基钠' }
  ],
  'K': [
    ...(CHEMICAL_EQUATIONS_DB_V4['K'] || []),
    { eq: '2K + 2NH_3(l) \\rightarrow 2KNH_2 + H_2\\uparrow', type: '与液氨反应', condition: '液氨', note: '生成氨基钾' },
    { eq: 'KOH + CO_2 \\rightarrow KHCO_3', type: '吸收CO₂', condition: '室温', note: '钾碱吸收二氧化碳' }
  ],
  'Rb': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Rb'] || []),
    { eq: 'Rb + NH_3(l) \\rightarrow RbNH_2 + \\frac{1}{2}H_2\\uparrow', type: '与液氨反应', condition: '液氨', note: '铷溶于液氨呈蓝色（ solvated electrons）' }
  ],
  'Cs': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Cs'] || []),
    { eq: 'Cs + O_2 + CO_2 \\rightarrow Cs_2CO_3', type: '燃烧产物', condition: '燃烧', note: '铯在空气中间燃烧生成碳酸铯' }
  ],
  
  // ===== 新增：碱土金属更多方程式 =====
  'Be': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Be'] || []),
    { eq: 'BeO + 2NaOH \\rightarrow Na_2BeO_2 + H_2O', type: '两性反应', condition: '加热', note: '氧化铍溶于强碱' },
    { eq: 'BeCl_2 + 2LiH \\xrightarrow{醚类} BeH_2 + 2LiCl', type: '氢化铍制备', condition: '醚类溶剂', note: 'BeH₂是聚合固体' }
  ],
  'Mg': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Mg'] || []),
    { eq: 'Mg + 2H_2O \\xrightarrow{\\Delta} Mg(OH)_2 + H_2\\uparrow', type: '与热水反应', condition: '加热', note: '镁与热水反应缓慢' },
    { eq: '3Mg + N_2 \\xrightarrow{\\Delta} Mg_3N_2', type: '与氮气反应', condition: '加热', note: '生成氮化镁' },
    { eq: 'Mg_3N_2 + 6H_2O \\rightarrow 3Mg(OH)_2 + 2NH_3\\uparrow', type: '氮化镁水解', condition: '室温', note: '完全水解' },
    { eq: 'Mg + 2TiCl_3 \\xrightarrow{800^\\circ C} 2TiCl_2 + MgCl_2', type: '还原反应', condition: '800°C', note: '镁还原三氯化钛' }
  ],
  'Ca': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ca'] || []),
    { eq: 'CaH_2 + 2H_2O \\rightarrow Ca(OH)_2 + 2H_2\\uparrow', type: '氢化钙水解', condition: '室温', note: 'CaH₂是生氢剂' },
    { eq: 'CaC_2 + N_2 \\xrightarrow{1000^\\circ C} CaCN_2 + C', type: '制氰氨化钙', condition: '1000°C', note: '石灰氮法固氮' },
    { eq: 'CaCN_2 + 3H_2O \\rightarrow CaCO_3 + 2NH_3\\uparrow', type: '氰氨化钙水解', condition: '室温', note: '释放氨气' }
  ],
  'Sr': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Sr'] || []),
    { eq: 'SrCO_3 \\xrightarrow{1340^\\circ C} SrO + CO_2\\uparrow', type: '分解反应', condition: '1340°C', note: '碳酸锶分解' },
    { eq: 'Sr(NO_3)_2 + Na_2CO_3 \\rightarrow SrCO_3\\downarrow + 2NaNO_3', type: '沉淀反应', condition: '水溶液', note: '锶盐焰色反应（洋红色）' }
  ],
  'Ba': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ba'] || []),
    { eq: 'BaO_2 + H_2SO_4 \\rightarrow BaSO_4\\downarrow + H_2O_2', type: '制备过氧化氢', condition: '室温', note: '过氧化钡与硫酸反应' },
    { eq: '2BaO + O_2 \\xrightarrow{400^\\circ C} 2BaO_2', type: '过氧化钡生成', condition: '400°C', note: '可逆反应' }
  ],
  'Ra': [
    { eq: 'Ra + 2H_2O \\rightarrow Ra(OH)_2 + H_2\\uparrow', type: '与水反应', condition: '室温', note: '镭与水反应剧烈，Ra(OH)₂是强碱' },
    { eq: 'RaCl_2 + H_2SO_4 \\rightarrow RaSO_4\\downarrow + 2HCl', type: '沉淀反应', condition: '水溶液', note: 'RaSO₄几乎不溶于水' }
  ],
  
  // ===== 新增：卤素更多方程式 =====
  'F': [
    ...(CHEMICAL_EQUATIONS_DB_V4['F'] || []),
    { eq: '2F_2 + Xe \\xrightarrow{200^\\circ C} XeF_4', type: '氟化氙', condition: '200°C', note: '生成四氟化氙' },
    { eq: '3F_2 + Cl_2 \\xrightarrow{250^\\circ C} 2ClF_3', type: '氟化氯', condition: '250°C', note: '三氟化氯，强氟化剂' }
  ],
  'Cl': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Cl'] || []),
    { eq: 'Cl_2 + 2NaBr \\rightarrow 2NaCl + Br_2', type: '置换反应', condition: '水溶液', note: '氯置换溴' },
    { eq: 'Cl_2 + 2NaI \\rightarrow 2NaCl + I_2', type: '置换反应', condition: '水溶液', note: '氯置换碘' },
    { eq: '3Cl_2 + 6NaOH \\xrightarrow{热} 5NaCl + NaClO_3 + 3H_2O', type: '歧化反应', condition: '热碱液', note: '氯在热碱液中歧化' },
    { eq: 'KClO_3 \\xrightarrow{MnO_2, \\Delta} 2KCl + 3O_2\\uparrow', type: '分解反应', condition: '加热（催化）', note: '氯酸钾分解制氧气' }
  ],
  'Br': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Br'] || []),
    { eq: 'Br_2 + 2NaI \\rightarrow 2NaBr + I_2', type: '置换反应', condition: '水溶液', note: '溴置换碘' },
    { eq: 'Br_2 + 2NaOH \\rightarrow NaBr + NaBrO + H_2O', type: '与冷碱反应', condition: '室温', note: '生成次溴酸钠' }
  ],
  'I': [
    ...(CHEMICAL_EQUATIONS_DB_V4['I'] || []),
    { eq: 'I_2 + 5Cl_2 + 6H_2O \\rightarrow 2HIO_3 + 10HCl', type: '氧化反应', condition: '水溶液', note: '碘被氯气氧化为碘酸' },
    { eq: 'Ca(IO_3)_2 + 6I_2 + 12HCl \\rightarrow 7CaCl_2 + 6I_2 + 6H_2O', type: '碘酸根氧化碘', condition: '酸性', note: '碘的催化氧化循环' }
  ],
  'At': [
    { eq: '2At_2 + 2NaIO_3 + 4H_2SO_4 \\rightarrow I_2 + 2Na_2SO_4 + 2At_2 + 2H_2O', type: '氧化还原', condition: '酸性', note: '砹的化学性质类似碘' }
  ],
  
  // ===== 新增：稀有气体更多数据 =====
  'He': [
    { eq: 'He + O_2 \\xrightarrow{高压} He(O_2)_n', type: '包合物', condition: '高压低温', note: '氦可形成包合物' }
  ],
  'Ne': [
    { eq: 'Ne + H_2O \\xrightarrow{低温高压} Ne\\cdot nH_2O', type: '水合物', condition: '低温高压', note: '氖水合物' }
  ],
  'Ar': [
    { eq: 'Ar + H_2O \\xrightarrow{低温} Ar\\cdot 6H_2O\\downarrow', type: '水合物', condition: '低温', note: '氩水合物（笼形化合物）' }
  ],
  'Kr': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Kr'] || []),
    { eq: 'KrF_2 + H_2O \\rightarrow Kr + O_2 + 2HF', type: '水解反应', condition: '室温', note: 'KrF₂迅速水解' }
  ],
  
  // ===== 新增：第3周期过渡金属详细方程式 =====
  'Sc': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Sc'] || []),
    { eq: '2Sc + 6HCl \\rightarrow 2ScCl_3 + 3H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钪溶于盐酸' },
    { eq: 'Sc_2O_3 + 3H_2SO_4 \\rightarrow Sc_2(SO_4)_3 + 3H_2O', type: '氧化物与酸', condition: '室温', note: '硫酸钪' }
  ],
  'Ti': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ti'] || []),
    { eq: 'Ti + 2Cl_2 \\xrightarrow{440^\\circ C} TiCl_4', type: '氯化反应', condition: '440°C', note: '四氯化钛' },
    { eq: 'TiCl_4 + O_2 \\xrightarrow{900^\\circ C} TiO_2 + 2Cl_2', type: '氯化法', condition: '900°C', note: '生产钛白' },
    { eq: 'TiO_2 + 2C + 2Cl_2 \\xrightarrow{1000^\\circ C} TiCl_4 + 2CO\\uparrow', type: '碳热氯化', condition: '1000°C', note: '工业制TiCl₄' }
  ],
  'V': [
    ...(CHEMICAL_EQUATIONS_DB_V4['V'] || []),
    { eq: '2V + 3Cl_2 \\xrightarrow{高温} 2VCl_3', type: '氯化反应', condition: '高温', note: '三氯化钒' },
    { eq: 'V_2O_5 + 6NaOH \\rightarrow 2Na_3VO_4 + 3H_2O', type: '钒酸盐', condition: '熔融', note: '钒(V)酸盐' },
    { eq: '2VO_2^+ + 3Zn + 8H^+ \\rightarrow 2V^{3+} + 3Zn^{2+} + 4H_2O', type: '还原反应', condition: '酸性', note: '钒(V)还原为钒(III)' }
  ],
  'Cr': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Cr'] || []),
    { eq: '2Cr + 3Cl_2 \\xrightarrow{高温} 2CrCl_3', type: '氯化反应', condition: '高温', note: '三氯化铬' },
    { eq: 'Cr_2O_3 + 2NaOH \\xrightarrow{熔融} 2NaCrO_2 + H_2O', type: '铬(III)酸盐', condition: '熔融', note: '亚铬酸钠' },
    { eq: '2CrO_4^{2-} + 2H^+ \\rightleftharpoons Cr_2O_7^{2-} + H_2O', type: '平衡反应', condition: '水溶液', note: '铬酸根与重铬酸根平衡' }
  ],
  'Mn': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Mn'] || []),
    { eq: 'Mn + 2HCl \\rightarrow MnCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '锰与非氧化性酸反应' },
    { eq: '2MnO_2 + 2H_2SO_4 \\rightarrow 2MnSO_4 + O_2\\uparrow + 2H_2O', type: '氧化反应', condition: '加热', note: 'MnO₂氧化硫酸' },
    { eq: 'Mn^{2+} + 2OH^- \\rightarrow Mn(OH)_2\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化锰(II)，白色' },
    { eq: '2Mn(OH)_2 + O_2 \\rightarrow 2MnO(OH)_2', type: '氧化反应', condition: '空气', note: 'Mn(II)氧化为Mn(IV)' }
  ],
  'Fe': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Fe'] || []),
    { eq: '3Fe + 8HNO_3(稀) \\rightarrow 3Fe(NO_3)_2 + 2NO\\uparrow + 4H_2O', type: '与稀硝酸', condition: '室温', note: '生成Fe(II)' },
    { eq: '2Fe^{3+} + 2I^- \\rightarrow 2Fe^{2+} + I_2', type: '氧化还原反应', condition: '水溶液', note: 'Fe³⁺氧化I⁻' },
    { eq: 'Fe^{3+} + 3OH^- \\rightarrow Fe(OH)_3\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化铁(III)' },
    { eq: '2Fe(OH)_3 \\xrightarrow{\\Delta} Fe_2O_3 + 3H_2O', type: '脱水反应', condition: '加热', note: '氢氧化铁脱水' }
  ],
  'Co': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Co'] || []),
    { eq: 'Co + 2HCl \\rightarrow CoCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钴溶于酸生成Co(II)' },
    { eq: 'Co^{2+} + 2OH^- \\rightarrow Co(OH)_2\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化钴(II)，粉红色' },
    { eq: '4Co(OH)_2 + O_2 + 2H_2O \\rightarrow 4Co(OH)_3\\downarrow', type: '氧化反应', condition: '空气', note: 'Co(II)氧化为Co(III)' }
  ],
  'Ni': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ni'] || []),
    { eq: 'Ni + 2HCl \\rightarrow NiCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镍溶于盐酸' },
    { eq: 'Ni^{2+} + 2OH^- \\rightarrow Ni(OH)_2\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化镍(II)，绿色' },
    { eq: 'Ni + 4CO \\xrightarrow{50-60^\\circ C} Ni(CO)_4', type: '羰基化', condition: '50-60°C', note: '蒙德法提纯镍' }
  ],
  'Cu': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Cu'] || []),
    { eq: '2Cu + S \\xrightarrow{\\Delta} Cu_2S', type: '与硫反应', condition: '加热', note: '生成硫化亚铜' },
    { eq: 'Cu + 2H_2SO_4(浓) \\xrightarrow{\\Delta} CuSO_4 + SO_2\\uparrow + 2H_2O', type: '与浓硫酸', condition: '加热', note: '浓硫酸氧化铜' },
    { eq: 'Cu^{2+} + 2OH^- \\rightarrow Cu(OH)_2\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化铜，蓝色' },
    { eq: 'Cu(OH)_2 \\xrightarrow{\\Delta} CuO + H_2O', type: '脱水反应', condition: '加热', note: '氢氧化铜脱水' }
  ],
  'Zn': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Zn'] || []),
    { eq: 'Zn + S \\xrightarrow{\\Delta} ZnS', type: '与硫反应', condition: '加热', note: '硫化锌，白色颜料' },
    { eq: 'Zn^{2+} + 2OH^- \\rightarrow Zn(OH)_2\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化锌，两性' },
    { eq: 'Zn(OH)_2 + 2OH^- \\rightarrow [Zn(OH)_4]^{2-}', type: '两性反应', condition: '过量碱', note: 'Zn(OH)₂溶于过量碱' },
    { eq: 'Zn + Cu^{2+} \\rightarrow Zn^{2+} + Cu', type: '置换反应', condition: '水溶液', note: '锌置换铜' }
  ],
  
  // ===== 新增：第4周期过渡金属 =====
  'Y': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Y'] || []),
    { eq: '2Y + 6HCl \\rightarrow 2YCl_3 + 3H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钇溶于盐酸' },
    { eq: 'Y_2O_3 + 3H_2SO_4 \\rightarrow Y_2(SO_4)_3 + 3H_2O', type: '氧化物与酸', condition: '室温', note: '硫酸钇' }
  ],
  'Zr': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Zr'] || []),
    { eq: 'Zr + 4HCl \\xrightarrow{浓盐酸} ZrCl_4 + 2H_2\\uparrow', type: '与盐酸反应', condition: '浓盐酸', note: '锆溶于浓盐酸' },
    { eq: 'Zr + O_2 \\xrightarrow{400^\\circ C} ZrO_2', type: '氧化反应', condition: '400°C', note: '氧化锆，陶瓷材料' }
  ],
  'Nb': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Nb'] || []),
    { eq: '2Nb + 5Cl_2 \\xrightarrow{高温} 2NbCl_5', type: '氯化反应', condition: '高温', note: '五氯化铌' },
    { eq: 'Nb_2O_5 + 10HF \\rightarrow 2H_2[NbOF_5] + 3H_2O', type: '与氢氟酸', condition: '室温', note: '氟氧铌酸' }
  ],
  'Mo': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Mo'] || []),
    { eq: 'Mo + 3F_2 \\xrightarrow{高温} MoF_6', type: '氟化反应', condition: '高温', note: '六氟化钼' },
    { eq: 'MoO_3 + 2NH_3 + H_2O \\rightarrow (NH_4)_2MoO_4', type: '钼酸铵', condition: '水溶液', note: '钼酸铵' }
  ],
  'Ru': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ru'] || []),
    { eq: 'Ru + 3O_2 \\xrightarrow{高温} RuO_3', type: '氧化反应', condition: '高温', note: '三氧化钌' },
    { eq: 'RuCl_3 + 3e^- \\rightarrow Ru + 6Cl^-', type: '还原反应', condition: '电解', note: '钌电镀' }
  ],
  'Rh': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Rh'] || []),
    { eq: '2Rh + 3Cl_2 \\xrightarrow{高温} 2RhCl_3', type: '氯化反应', condition: '高温', note: '三氯化铑' },
    { eq: '[RhCl(PPh_3)_3]', type: 'Wilkinson催化剂', condition: '有机合成', note: '铑配合物催化氢化' }
  ],
  'Pd': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Pd'] || []),
    { eq: 'Pd + Cl_2 \\xrightarrow{500^\\circ C} PdCl_2', type: '氯化反应', condition: '500°C', note: '二氯化钯' },
    { eq: 'PdCl_2 + CO + H_2O \\rightarrow Pd\\downarrow + CO_2 + 2HCl', type: '检测CO', condition: '室温', note: '钯盐检测一氧化碳' }
  ],
  'Ag': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ag'] || []),
    { eq: '3Ag + 4HNO_3 \\rightarrow 3AgNO_3 + NO\\uparrow + 2H_2O', type: '与硝酸反应', condition: '室温', note: '银溶于硝酸' },
    { eq: 'Ag^+ + NH_3 \\rightarrow [Ag(NH_3)_2]^+', type: '配位反应', condition: '水溶液', note: '银氨配离子' },
    { eq: '[Ag(NH_3)_2]^+ + RCHO + 2OH^- \\rightarrow Ag\\downarrow + RCOO^- + NH_3 + H_2O', type: '银镜反应', condition: '加热', note: '醛类鉴定' }
  ],
  'Cd': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Cd'] || []),
    { eq: 'Cd + 2HCl \\rightarrow CdCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镉溶于盐酸' },
    { eq: 'Cd^{2+} + H_2S \\rightarrow CdS\\downarrow + 2H^+', type: '沉淀反应', condition: '水溶液', note: '硫化镉，黄色' }
  ],
  
  // ===== 新增：第5周期过渡金属 =====
  'Hf': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Hf'] || []),
    { eq: 'Hf + 2O_2 \\xrightarrow{高温} HfO_2', type: '氧化反应', condition: '高温', note: '氧化铪' },
    { eq: 'HfO_2 + 4C + 2Cl_2 \\xrightarrow{1000^\\circ C} HfCl_4 + 4CO\\uparrow', type: '碳热氯化', condition: '1000°C', note: '四氯化铪' }
  ],
  'Ta': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ta'] || []),
    { eq: '2Ta + 5F_2 \\xrightarrow{高温} 2TaF_5', type: '氟化反应', condition: '高温', note: '五氟化钽' },
    { eq: 'Ta_2O_5 + 10HF \\rightarrow 2H_2[TaF_7] + 3H_2O', type: '与氢氟酸', condition: '室温', note: '氟钽酸' }
  ],
  'W': [
    ...(CHEMICAL_EQUATIONS_DB_V4['W'] || []),
    { eq: 'W + 3F_2 \\xrightarrow{高温} WF_6', type: '氟化反应', condition: '高温', note: '六氟化钨' },
    { eq: 'Na_2WO_4 + 2HCl \\rightarrow WO_3\\downarrow + 2NaCl + H_2O', type: '沉淀反应', condition: '水溶液', note: '钨酸沉淀' }
  ],
  'Re': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Re'] || []),
    { eq: '2Re + 7Cl_2 \\xrightarrow{高温} 2ReCl_7', type: '氯化反应', condition: '高温', note: '七氯化铼' },
    { eq: 'Re_2O_7 + 2NaOH \\rightarrow 2NaReO_4 + H_2O', type: '高铼酸盐', condition: '水溶液', note: '高铼酸钠' }
  ],
  'Os': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Os'] || []),
    { eq: 'Os + 2O_2 \\xrightarrow{室温} OsO_4', type: '氧化反应', condition: '室温（缓慢）', note: '四氧化锇，剧毒' },
    { eq: 'OsO_4 + 2e^- \\rightarrow [OsO_4]^{2-}', type: '还原反应', condition: '碱性', note: 'OsO₄在碱性介质中还原' }
  ],
  'Ir': [
    { eq: '2Ir + 3Cl_2 \\xrightarrow{高温} 2IrCl_3', type: '氯化反应', condition: '高温', note: '三氯化铱' },
    { eq: 'IrCl_3 + 3e^- \\rightarrow Ir + 6Cl^-', type: '还原反应', condition: '电解', note: '铱电镀' }
  ],
  'Pt': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Pt'] || []),
    { eq: 'Pt + 2Cl_2 \\xrightarrow{高温} PtCl_4', type: '氯化反应', condition: '高温', note: '四氯化铂' },
    { eq: '[PtCl_6]^{2-} + 2e^- \\rightarrow [PtCl_4]^{2-} + 2Cl^-', type: '还原反应', condition: '电解', note: '氯铂酸根还原' }
  ],
  'Au': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Au'] || []),
    { eq: '4Au + 8NaCN + O_2 + 2H_2O \\rightarrow 4Na[Au(CN)_2] + 4NaOH', type: '氰化法提金', condition: '碱性', note: '氰离子与金形成配离子' },
    { eq: '2[Au(CN)_2]^- + Zn \\rightarrow 2Au\\downarrow + Zn^{2+} + 4CN^-', type: '还原反应', condition: '水溶液', note: '锌还原金氰配离子' }
  ],
  'Hg': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Hg'] || []),
    { eq: 'Hg + S \\xrightarrow{研磨} HgS', type: '与硫反应', condition: '研磨', note: '处理汞泄漏' },
    { eq: 'Hg_2Cl_2 \\xrightarrow{光} Hg + HgCl_2', type: '光解反应', condition: '光照', note: '甘汞歧化' },
    { eq: 'Hg^{2+} + 2I^- \\rightarrow HgI_2\\downarrow', type: '沉淀反应', condition: '水溶液', note: '碘化汞，红色' }
  ],
  
  // ===== 新增：后过渡金属更多方程式 =====
  'Al': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Al'] || []),
    { eq: '2Al + 3Cl_2 \\xrightarrow{\\Delta} 2AlCl_3', type: '与氯气反应', condition: '加热', note: '三氯化铝' },
    { eq: '2Al + 3H_2SO_4 \\rightarrow Al_2(SO_4)_3 + 3H_2\\uparrow', type: '与硫酸反应', condition: '室温', note: '铝溶于稀硫酸' },
    { eq: 'Al_2O_3 + 2NaOH \\rightarrow 2NaAlO_2 + H_2O', type: '两性反应', condition: '熔融', note: '氧化铝溶于熔融碱' }
  ],
  'Ga': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ga'] || []),
    { eq: '2Ga + 6HCl \\rightarrow 2GaCl_3 + 3H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镓溶于盐酸' },
    { eq: 'GaAs + 2H_2O_2 + 4OH^- \\rightarrow Ga(OH)_4^- + AsO_4^{3-} + 2H_2O', type: '氧化反应', condition: '碱性', note: '砷化镓在碱性条件下氧化' }
  ],
  'In': [
    ...(CHEMICAL_EQUATIONS_DB_V4['In'] || []),
    { eq: '2In + 3H_2SO_4 \\rightarrow In_2(SO_4)_3 + 3H_2\\uparrow', type: '与硫酸反应', condition: '室温', note: '铟溶于硫酸' },
    { eq: 'In^{3+} + 3OH^- \\rightarrow In(OH)_3\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氢氧化铟' }
  ],
  'Tl': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Tl'] || []),
    { eq: '2Tl + H_2SO_4 \\rightarrow Tl_2SO_4 + H_2\\uparrow', type: '与硫酸反应', condition: '室温', note: '生成Tl(I)盐' },
    { eq: 'Tl^+ + Cl^- \\rightarrow TlCl\\downarrow', type: '沉淀反应', condition: '水溶液', note: '氯化亚铊，白色' }
  ],
  'Ge': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ge'] || []),
    { eq: 'Ge + 2O_2 \\xrightarrow{高温} GeO_2', type: '氧化反应', condition: '高温', note: '二氧化锗' },
    { eq: 'GeO_2 + 2H_2O \\rightarrow Ge(OH)_4', type: '水合反应', condition: '室温', note: '锗酸' }
  ],
  'Sn': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Sn'] || []),
    { eq: 'Sn + 2NaOH + 4H_2O \\rightarrow Na_2[Sn(OH)_6] + 2H_2\\uparrow', type: '与碱反应', condition: '加热', note: '锡与浓碱反应' },
    { eq: 'SnCl_2 + 2HgCl_2 \\rightarrow SnCl_4 + Hg_2Cl_2\\downarrow', type: '还原反应', condition: '水溶液', note: 'Sn(II)还原Hg(II)' }
  ],
  'Pb': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Pb'] || []),
    { eq: 'Pb + Cl_2 \\rightarrow PbCl_2', type: '与氯气反应', condition: '室温', note: '氯化铅(II)，微溶' },
    { eq: 'Pb^{2+} + CrO_4^{2-} \\rightarrow PbCrO_4\\downarrow', type: '沉淀反应', condition: '水溶液', note: '铬酸铅，黄色颜料' },
    { eq: 'PbO_2 + 4HCl(浓) \\xrightarrow{\\Delta} PbCl_2 + Cl_2\\uparrow + 2H_2O', type: '还原反应', condition: '加热', note: 'Pb(IV)是强氧化剂' }
  ],
  'Bi': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Bi'] || []),
    { eq: '2Bi + 3Cl_2 \\xrightarrow{加热} 2BiCl_3', type: '与氯气反应', condition: '加热', note: '三氯化铋' },
    { eq: 'BiCl_3 + H_2O \\rightarrow BiOCl\\downarrow + 2HCl', type: '水解反应', condition: '水溶液', note: '铋盐强烈水解' }
  ],
  
  // ===== 新增：准金属更多方程式 =====
  'B': [
    ...(CHEMICAL_EQUATIONS_DB_V4['B'] || []),
    { eq: '4B + 3O_2 \\xrightarrow{高温} 2B_2O_3', type: '氧化反应', condition: '高温', note: '三氧化二硼' },
    { eq: 'B_2O_3 + 3Mg \\xrightarrow{高温} 2B + 3MgO', type: '还原反应', condition: '高温', note: '镁还原B₂O₃' },
    { eq: '2BF_3 + 3H_2O \\rightarrow B_2O_3 + 6HF', type: '水解反应', condition: '室温', note: '三氟化硼完全水解' }
  ],
  'Si': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Si'] || []),
    { eq: 'Si + O_2 \\xrightarrow{高温} SiO_2', type: '氧化反应', condition: '高温', note: '二氧化硅' },
    { eq: 'SiO_2 + Na_2CO_3 \\xrightarrow{熔融} Na_2SiO_3 + CO_2\\uparrow', type: '硅酸盐生成', condition: '熔融', note: '工业制硅酸钠' },
    { eq: 'Si + 2Mg \\xrightarrow{高温} Mg_2Si', type: '硅化镁生成', condition: '高温', note: '硅化镁' }
  ],
  'As': [
    ...(CHEMICAL_EQUATIONS_DB_V4['As'] || []),
    { eq: '2As + 5Cl_2 \\xrightarrow{高温} 2AsCl_5', type: '氯化反应', condition: '高温', note: '五氯化砷' },
    { eq: 'As_2O_3 + 6NaOH \\rightarrow 2Na_3AsO_3 + 3H_2O', type: '亚砷酸盐', condition: '室温', note: '亚砷酸钠' }
  ],
  'Sb': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Sb'] || []),
    { eq: '2Sb + 3Cl_2 \\xrightarrow{高温} 2SbCl_3', type: '氯化反应', condition: '高温', note: '三氯化锑' },
    { eq: 'Sb_2O_3 + 2NaOH \\rightarrow 2NaSbO_2 + H_2O', type: '亚锑酸盐', condition: '熔融', note: '亚锑酸钠' }
  ],
  'Te': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Te'] || []),
    { eq: 'Te + O_2 \\xrightarrow{高温} TeO_2', type: '氧化反应', condition: '高温', note: '二氧化碲' },
    { eq: 'Te + 2Cl_2 \\xrightarrow{高温} TeCl_4', type: '氯化反应', condition: '高温', note: '四氯化碲' }
  ],
  
  // ===== 新增：非金属更多方程式 =====
  'C': [
    ...(CHEMICAL_EQUATIONS_DB_V4['C'] || []),
    { eq: 'C + 2H_2 \\xrightarrow{高温} CH_4', type: '甲烷生成', condition: '高温高压', note: '甲烷化反应' },
    { eq: 'C + CO_2 \\xrightarrow{高温} 2CO', type: 'Boudouard反应', condition: '高温', note: 'CO₂还原为CO' },
    { eq: 'CaCO_3 \\xrightarrow{900^\\circ C} CaO + CO_2\\uparrow', type: '石灰石分解', condition: '900°C', note: '工业制生石灰' }
  ],
  'N': [
    ...(CHEMICAL_EQUATIONS_DB_V4['N'] || []),
    { eq: 'N_2 + O_2 \\xrightarrow{闪电} 2NO', type: 'NO生成', condition: '闪电', note: '自然界的固氮' },
    { eq: '2NO + O_2 \\rightarrow 2NO_2', type: '氧化反应', condition: '室温', note: 'NO氧化为NO₂' },
    { eq: '3NO_2 + H_2O \\rightarrow 2HNO_3 + NO', type: '硝酸生成', condition: '水溶液', note: 'NO₂水合生成硝酸' }
  ],
  'P': [
    ...(CHEMICAL_EQUATIONS_DB_V4['P'] || []),
    { eq: '2P + 3Cl_2 \\xrightarrow{适量} 2PCl_3', type: '与氯气反应', condition: '适量氯气', note: '三氯化磷' },
    { eq: '2P + 5Cl_2 \\xrightarrow{过量} 2PCl_5', type: '与氯气反应', condition: '过量氯气', note: '五氯化磷' },
    { eq: 'PCl_3 + 3H_2O \\rightarrow H_3PO_3 + 3HCl', type: '水解反应', condition: '室温', note: '三氯化磷水解' }
  ],
  'S': [
    ...(CHEMICAL_EQUATIONS_DB_V4['S'] || []),
    { eq: 'S + O_2 \\xrightarrow{点燃} SO_2', type: '燃烧反应', condition: '点燃', note: '二氧化硫' },
    { eq: 'SO_2 + H_2O \\rightleftharpoons H_2SO_3', type: '亚硫酸生成', condition: '水溶液', note: '可逆反应' },
    { eq: '2H_2SO_4(浓) + Cu \\xrightarrow{\\Delta} CuSO_4 + SO_2\\uparrow + 2H_2O', type: '浓硫酸氧化', condition: '加热', note: '浓硫酸氧化铜' }
  ],
  'Se': [
    { eq: 'Se + O_2 \\xrightarrow{加热} SeO_2', type: '氧化反应', condition: '加热', note: '二氧化硒' },
    { eq: 'Se + Cl_2 \\xrightarrow{加热} SeCl_4', type: '氯化反应', condition: '加热', note: '四氯化硒' }
  ],
  'Br': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Br'] || []),
    { eq: 'Br_2 + 5Cl_2 + 6H_2O \\rightarrow 2HBrO_3 + 10HCl', type: '氧化反应', condition: '水溶液', note: '溴被氯气氧化为溴酸' }
  ],
  
  // ===== 新增：镧系元素详细方程式 =====
  'La': [
    ...(CHEMICAL_EQUATIONS_DB_V4['La'] || []),
    { eq: '2La + 6HCl \\rightarrow 2LaCl_3 + 3H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镧溶于盐酸' },
    { eq: 'La_2O_3 + 3H_2O \\rightarrow 2La(OH)_3\\downarrow', type: '水合反应', condition: '室温', note: '氧化镧水合' }
  ],
  'Ce': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Ce'] || []),
    { eq: 'Ce + 4HNO_3 \\rightarrow Ce(NO_3)_4 + 2NO_2\\uparrow + 2H_2O', type: '与硝酸反应', condition: '浓硝酸', note: '铈溶于浓硝酸生成Ce(IV)' },
    { eq: '2Ce^{4+} + 2H_2O \\rightarrow 2Ce^{3+} + O_2 + 4H^+', type: '水解反应', condition: '水溶液', note: 'Ce(IV)在水溶液中不稳定' }
  ],
  'Pr': [
    { eq: 'Pr + 3HCl \\rightarrow PrCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镨溶于盐酸' },
    { eq: 'Pr_2O_3 + 6HCl \\rightarrow 2PrCl_3 + 3H_2O', type: '氧化物与酸', condition: '室温', note: '氧化镨(III)溶于盐酸' }
  ],
  'Nd': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Nd'] || []),
    { eq: 'Nd + 3HCl \\rightarrow NdCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钕溶于盐酸' },
    { eq: 'Nd_2O_3 + 3H_2SO_4 \\rightarrow Nd_2(SO_4)_3 + 3H_2O', type: '氧化物与酸', condition: '室温', note: '硫酸钕' }
  ],
  'Pm': [
    { eq: 'Pm + 3HCl \\rightarrow PmCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钷溶于盐酸' }
  ],
  'Sm': [
    { eq: 'Sm + 3HCl \\rightarrow SmCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钐溶于盐酸' },
    { eq: 'Sm^{3+} + e^- \\rightarrow Sm^{2+}', type: '还原反应', condition: '电解', note: 'Sm(III)可还原为Sm(II)' }
  ],
  'Eu': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Eu'] || []),
    { eq: 'Eu^{2+} + H_2O \\rightarrow Eu^{3+} + \\frac{1}{2}H_2\\uparrow', type: '氧化反应', condition: '水溶液', note: 'Eu²⁺还原水生成氢气' }
  ],
  'Gd': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Gd'] || []),
    { eq: 'Gd + 3HCl \\rightarrow GdCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钆溶于盐酸' },
    { eq: 'Gd^{3+} + EDTA^{4-} \\rightarrow [Gd(EDTA)]^-', type: '配位反应', condition: '水溶液', note: '钆螯合物（MRI造影剂）' }
  ],
  'Tb': [
    { eq: 'Tb + 3HCl \\rightarrow TbCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '铽溶于盐酸' }
  ],
  'Dy': [
    { eq: 'Dy + 3HCl \\rightarrow DyCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镝溶于盐酸' }
  ],
  'Ho': [
    { eq: 'Ho + 3HCl \\rightarrow HoCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '钬溶于盐酸' }
  ],
  'Er': [
    { eq: 'Er + 3HCl \\rightarrow ErCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '铒溶于盐酸' }
  ],
  'Tm': [
    { eq: 'Tm + 3HCl \\rightarrow TmCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '铥溶于盐酸' }
  ],
  'Yb': [
    { eq: 'Yb + 2HCl \\rightarrow YbCl_2 + H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镱生成Yb(II)盐' }
  ],
  'Lu': [
    { eq: 'Lu + 3HCl \\rightarrow LuCl_3 + \\frac{3}{2}H_2\\uparrow', type: '与酸反应', condition: '室温', note: '镥溶于盐酸' }
  ],
  
  // ===== 新增：锕系元素详细方程式 =====
  'Th': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Th'] || []),
    { eq: 'Th + 4F_2 \\xrightarrow{高温} ThF_4', type: '氟化反应', condition: '高温', note: '四氟化钍' },
    { eq: 'ThF_4 + 4Na \\xrightarrow{高温} Th + 4NaF', type: '还原反应', condition: '高温', note: '钠还原ThF₄' }
  ],
  'Pa': [
    { eq: 'Pa_2O_5 + 10HF \\rightarrow 2H_2[PaF_7] + 3H_2O', type: '与氢氟酸', condition: '室温', note: '氟镤酸' }
  ],
  'U': [
    ...(CHEMICAL_EQUATIONS_DB_V4['U'] || []),
    { eq: 'U + 3F_2 \\xrightarrow{高温} UF_6', type: '氟化反应', condition: '高温', note: '六氟化铀，用于铀浓缩' },
    { eq: 'UF_6 + 2H_2O \\rightarrow UO_2F_2 + 4HF', type: '水解反应', condition: '室温', note: 'UF₆水解' }
  ],
  'Np': [
    { eq: 'Np + 4F_2 \\xrightarrow{高温} NpF_4', type: '氟化反应', condition: '高温', note: '四氟化镎' }
  ],
  'Pu': [
    ...(CHEMICAL_EQUATIONS_DB_V4['Pu'] || []),
    { eq: 'Pu + 3F_2 \\xrightarrow{高温} PuF_6', type: '氟化反应', condition: '高温', note: '六氟化钚' },
    { eq: 'PuO_2 + 4HF \\xrightarrow{600^\\circ C} PuF_4 + 2H_2O', type: '氟化反应', condition: '600°C', note: '四氟化钚' }
  ],
  'Am': [
    { eq: 'Am + 3F_2 \\xrightarrow{高温} AmF_3', type: '氟化反应', condition: '高温', note: '三氟化镅' }
  ],
  'Cm': [
    { eq: 'Cm + 3F_2 \\xrightarrow{高温} CmF_3', type: '氟化反应', condition: '高温', note: '三氟化锔' }
  ]
};

// ===== 统计 =====
const V5_ELEMENT_COUNT = Object.keys(CHEMICAL_EQUATIONS_DB_V5).length;
const V5_EQUATION_COUNT = Object.values(CHEMICAL_EQUATIONS_DB_V5).reduce(function(sum, arr) { return sum + arr.length; }, 0);

// ===== 覆盖原来的函数 =====
window.CHEMICAL_EQUATIONS_DB_V4 = CHEMICAL_EQUATIONS_DB_V5;

// 更新获取函数
window.getChemicalEquationsV4 = function(symbol) {
  return CHEMICAL_EQUATIONS_DB_V5[symbol] || [];
};

console.log('✅ 增强元素详情生成器 v5.0 补丁已加载');
console.log('   化学方程式数据库：' + V5_ELEMENT_COUNT + ' 个元素，' + V5_EQUATION_COUNT + ' 个方程式（+大幅扩展）');
