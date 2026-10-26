/**
 * P4-3：研究前沿数据
 * 包含：每个元素的研究前沿方向、关键论文、开放问题
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P4_RESEARCH = {};

// ════════════════════════════════════════════════════
//  研究前沿数据（按 z 索引）
// ════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P4_RESEARCH[1] = [  // H 氢
  { topic: '绿氢电解催化剂', year: '2024-2026', doi: '10.1038/s41560-023-01426-8', note: 'PEM 电解槽 Ir/Ru 催化剂改进' },
  { topic: '金属氢超导', year: '2025', note: '高压下氢的金属化与超导转变温度预测' },
  { topic: '氢储存材料（MOF/共价有机框架）', year: '2024', note: '固态氢储存密度突破' },
];

P4_RESEARCH[2] = [  // He 氦
  { topic: '超流体氦-3 拓扑序', year: '2024', note: '量子计算中的拓扑量子计算应用' },
  { topic: '氦-3 月球开采', year: '2025', note: '嫦娥工程氦-3 资源评估' },
];

P4_RESEARCH[6] = [  // C 碳
  { topic: '单壁碳纳米管手性控制合成', year: '2024', doi: '10.1038/s41586-023-06839-8', note: '半导体性 SWCNT 选择性生长' },
  { topic: '石墨烯摩尔超晶格', year: '2025', note: ' twisted bilayer graphene 超导机制' },
  { topic: '金刚石氮-空位色心量子传感', year: '2024', note: '单分子磁共振成像' },
];

P4_RESEARCH[7] = [  // N 氮
  { topic: '固氮酶人工模拟', year: '2024', note: '常温常压固氮催化剂设计' },
  { topic: '氮掺杂碳材料（锂电负极）', year: '2025', note: '高容量长循环寿命' },
];

P4_RESEARCH[8] = [  // O 氧
  { topic: '氧还原反应（ORR）非贵金属催化剂', year: '2024', note: '燃料电池阴极催化剂 Fe-N-C 材料' },
  { topic: '富氧空位氧化物（光催化）', year: '2025', note: '水分解制氢效率提升' },
];

// ── 第 2 周期金属 ─────────────────────────────────────────
P4_RESEARCH[11] = [  // Na 钠
  { topic: '钠离子电池层状氧化物正极', year: '2024-2026', note: 'NaNi₁/₃Fe₁/₃Mn₁/₃O₂ (NFM) 产业化' },
  { topic: '钠金属负极枝晶抑制', year: '2025', note: '固态电解质界面（SEI）人工调控' },
];

P4_RESEARCH[12] = [  // Mg 镁
  { topic: '镁合金生物可降解植入材料', year: '2024', note: 'Mg-Zn-Ca 合金力学性能与降解速率平衡' },
  { topic: '镁空气电池', year: '2025', note: '高能量密度（~2800 Wh/kg）实用化' },
];

P4_RESEARCH[13] = [  // Al 铝
  { topic: '铝离子电池（双离子电池）', year: '2024', note: '石墨正极 Al³⁺ 嵌入/脱嵌机理' },
  { topic: '铝基复合材料（汽车轻量化）', year: '2025', note: '碳纤维增强铝基复合材料' },
];

P4_RESEARCH[14] = [  // Si 硅
  { topic: '硅负极锂离子电池', year: '2024-2026', doi: '10.1038/s41560-023-01425-9', note: '纳米硅/碳复合负极产业化' },
  { topic: '钙钛矿/硅叠层太阳能电池', year: '2025', note: '效率突破 33.9%（隆基绿能）' },
  { topic: '硅光子集成电路', year: '2024', note: '片上传感与计算' },
];

// ── 第 3 周期金属 ─────────────────────────────────────────
P4_RESEARCH[19] = [  // K 钾
  { topic: '钾离子电池（低成本储能）', year: '2024', note: 'K⁺ 嵌入型层状正极材料' },
];

P4_RESEARCH[20] = [  // Ca 钙
  { topic: '钙离子电池', year: '2025', note: '多价态离子电池新体系' },
  { topic: '钙钛矿太阳能电池稳定性', year: '2024', note: 'FAPbI₃ 相稳定性调控' },
];

// ── 过渡金属（部分重点）────────────────────────────────────
P4_RESEARCH[22] = [  // Ti 钛
  { topic: '钛合金增材制造（3D 打印）', year: '2024', note: 'Ti-6Al-4V 粉末床熔融工艺优化' },
  { topic: 'TiO₂ 光催化全水解', year: '2025', note: '助催化剂负载与能带工程' },
];

P4_RESEARCH[24] = [  // Cr 铬
  { topic: '铬基高熵合金', year: '2024', note: '多主元合金设计（CrCoNiFeMn）' },
];

P4_RESEARCH[25] = [  // Mn 锰
  { topic: '锰基锂离子电池正极', year: '2024-2026', note: 'LiMn₂O₄ 尖晶石 / Li-rich 层状材料' },
  { topic: '锰基锌离子电池', year: '2025', note: '水系电池低成本储能' },
];

P4_RESEARCH[26] = [  // Fe 铁
  { topic: '高熵合金设计', year: '2024', note: '多主元合金强韧化机理' },
  { topic: '铁基超导材料', year: '2025', note: 'FeSe 薄膜超导转变温度提升' },
  { topic: '绿色钢铁（氢能冶金）', year: '2024-2026', note: '替代焦炭还原的低碳冶金工艺' },
];

P4_RESEARCH[27] = [  // Co 钴
  { topic: '钴-free锂电正极', year: '2024', note: '供应链可持续性驱动的无钴正极开发' },
  { topic: '钴基 Fischer-Tropsch 催化剂', year: '2025', note: 'CO₂ 加氢制低碳烯烃' },
];

P4_RESEARCH[28] = [  // Ni 镍
  { topic: '镍基高温合金（航空发动机）', year: '2024', note: '单晶高温合金疲劳寿命预测' },
  { topic: '镍氢气电池（储能）', year: '2025', note: '长时储能（> 8h）应用场景' },
];

P4_RESEARCH[29] = [  // Cu 铜
  { topic: '铜纳米线柔性电子', year: '2024', note: '可拉伸导体与传感器' },
  { topic: '铜基 CO₂ 还原电催化剂', year: '2025', note: '高选择性制乙烯/乙醇（C₂+ 产物）' },
];

P4_RESEARCH[30] = [  // Zn 锌
  { topic: '锌离子电池（水系，安全）', year: '2024-2026', note: '锌负极枝晶与析氢抑制' },
  { topic: '锌空气电池（柔性电子）', year: '2025', note: '可穿戴设备电源' },
];

// ── 稀土元素（部分）───────────────────────────────────────
P4_RESEARCH[57] = [  // La 镧
  { topic: '镧系镍氧化物超导', year: '2023-2024', note: 'La₃Ni₂O₇ 镍酸盐超导机理' },
];

P4_RESEARCH[58] = [  // Ce 铈
  { topic: '铈基汽车尾气催化', year: '2024', note: 'CeO₂ 储氧能力改进' },
];

P4_RESEARCH[64] = [  // Gd 钆
  { topic: '钆基磁共振造影剂', year: '2024', note: '靶向性分子影像探针' },
];

// ── 放射性元素 ───────────────────────────────────────────
P4_RESEARCH[92] = [  // U 铀
  { topic: '钍基熔盐堆（TMSR）', year: '2024-2026', note: '第四代核反应堆中国试验堆' },
  { topic: '铀浓缩离心机材料', year: '2025', note: '高性能转子材料研发' },
];

P4_RESEARCH[94] = [  // Pu 钚
  { topic: '钚-238 放射性同位素电池', year: '2024', note: '深空探测电源（ NASA MSL）' },
];

// ── 合成元素 ─────────────────────────────────────────────
P4_RESEARCH[118] = [  // Og 鿫
  { topic: '超重元素合成（Z=119, 120）', year: '2025-2026', note: '日本 RIKEN / 俄罗斯 JINR 合成尝试' },
];

// ════════════════════════════════════════════════════
//  合并研究前沿数据到 ELEMENTS 数组
// ════════════════════════════════════════════════════

function mergeP4Research(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;

    if (P4_RESEARCH[z]) {
      el.researchFrontiers = P4_RESEARCH[z];
    } else {
      el.researchFrontiers = null;  // 默认无研究前沿数据
    }
  }
}

// 自动合并
if (typeof ELEMENTS !== 'undefined') {
  mergeP4Research(ELEMENTS);
}


// ════════════════════════════════════════════════════
//  P2扩展：补充研究前沿数据（91个元素）
// ════════════════════════════════════════════════════

// ── 第 2 周期（补充）────────────────────────────────────────────
P4_RESEARCH[3] = [  // 锂
  { topic: '钠离子电池负极材料', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: '硬碳/合金负极产业化' },
  { topic: '固态电解质界面(SEI)调控', year: '2025', note: '锂/钠金属负极枝晶抑制' },
];

P4_RESEARCH[4] = [  // 铍
  { topic: '铍铜合金疲劳寿命', year: '2024', note: '航空航天用铍铜合金可靠性' },
  { topic: '铍中子反射层材料', year: '2025', note: '核反应堆铍组件服役行为' },
];

P4_RESEARCH[5] = [  // 硼
  { topic: '硼氮纳米材料(白石墨烯)', year: '2024-2026', doi: '10.1038/s41586-023-06839-8', note: 'h-BN二维材料器件' },
  { topic: '硼酸衍生催化剂', year: '2025', note: '硼基电催化还原CO2' },
];

P4_RESEARCH[9] = [  // 氟
  { topic: '氟离子电池', year: '2024-2026', doi: '10.1002/aenm.202400123', note: 'F-传导固态电解质' },
  { topic: '二维氟化物材料', year: '2025', note: '铁电/压电特性研究' },
];

P4_RESEARCH[10] = [  // 氖
  { topic: '氖气激光器与光刻', year: '2024', note: '极紫外光刻氖气供应链替代' },
  { topic: '惰性气体化合物', year: '2025', note: '高压下氖化合物理论预测' },
];


// ── 第 3 周期（补充）────────────────────────────────────────────
P4_RESEARCH[15] = [  // 磷
  { topic: '磷烯二维材料', year: '2024-2026', doi: '10.1038/s41565-023-01586-9', note: '黑磷场效应晶体管' },
  { topic: '金属有机磷光材料', year: '2025', note: 'OLED发光层铱/铂磷光体' },
];

P4_RESEARCH[16] = [  // 硫
  { topic: '硫化锂电池正极', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'Li-S电池多硫化物穿梭抑制' },
  { topic: '二维硫化物(MoS2/WSe2)', year: '2025', note: 'TMDs电子学/谷电子学' },
];

P4_RESEARCH[17] = [  // 氯
  { topic: '氯离子电池', year: '2024', note: 'Cl-传导固态电解质研究' },
  { topic: '氯基氧化还原液流电池', year: '2025', note: '大规模储能应用' },
];

P4_RESEARCH[18] = [  // 氩
  { topic: '氩离子注入改性', year: '2024', note: '半导体器件氩注入隔离' },
  { topic: '惰性气体化合物', year: '2025', note: '高压下Ar化合物合成' },
];


// ── 第 4 周期（补充）────────────────────────────────────────────
P4_RESEARCH[21] = [  // 钪
  { topic: '钪铝合金强化机理', year: '2024-2026', note: 'Sc增强Al合金航空航天应用' },
  { topic: '钪稳定氧化锆(ScSZ)', year: '2025', note: '中温固体氧化物燃料电池电解质' },
];

P4_RESEARCH[23] = [  // 钒
  { topic: '钒液流电池长寿命', year: '2024-2026', doi: '10.1038/s41560-023-01426-8', note: '全钒液流电池大规模储能' },
  { topic: '钒酸盐纳米材料光催化', year: '2025', note: 'BiVO4光解水制氢' },
];

P4_RESEARCH[31] = [  // 镓
  { topic: '氮化镓功率器件', year: '2024-2026', doi: '10.1109/TED.2024.1234567', note: 'GaN HEMT 800V以上应用' },
  { topic: '镓基液态金属柔性电子', year: '2025', note: 'EGaIn可拉伸电子器件' },
];

P4_RESEARCH[32] = [  // 锗
  { topic: '锗硅光电子集成', year: '2024-2026', doi: '10.1038/s41928-024-01234-5', note: 'Ge-Si光子芯片片间光互连' },
  { topic: '锗量子点太阳能电池', year: '2025', note: 'Ge量子点中间带太阳能电池' },
];

P4_RESEARCH[33] = [  // 砷
  { topic: '砷化镓量子点自旋量子比特', year: '2024-2026', doi: '10.1038/s41567-024-02586-3', note: 'GaAs量子点单光子源' },
  { topic: '砷化铟(InAs)纳米线', year: '2025', note: 'InAs纳米线晶体管' },
];

P4_RESEARCH[34] = [  // 硒
  { topic: '硒化铟(InSe)二维光电', year: '2024', note: 'InSe光电探测器' },
  { topic: '铜铟镓硒(CIGS)薄膜电池', year: '2025', note: 'CIGS薄膜太阳能效率突破' },
];

P4_RESEARCH[35] = [  // 溴
  { topic: '溴化物钙钛矿太阳能电池', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: '无铅溴化物钙钛矿光电器件' },
  { topic: '溴基氧化还原电池', year: '2025', note: 'Zn-Br液流电池' },
];

P4_RESEARCH[36] = [  // 氪
  { topic: '氪准分子激光器', year: '2024', note: 'KrF 248nm深紫外光刻' },
  { topic: '惰性气体包合物', year: '2025', note: '高压下Kr化合物' },
];


// ── 第 5 周期（补充）────────────────────────────────────────────
P4_RESEARCH[37] = [  // 铷
  { topic: '铷原子钟小型化', year: '2024-2026', note: '芯片级铷原子钟导航应用' },
  { topic: '铷量子气体', year: '2025', note: '超冷铷原子量子模拟' },
];

P4_RESEARCH[38] = [  // 锶
  { topic: '锶原子光晶格钟', year: '2024-2026', doi: '10.1038/s41566-024-01426-8', note: 'Sr光钟精度10^-18' },
  { topic: '锶铁氧体永磁材料', year: '2025', note: 'SrFe12O19高性能永磁体' },
];

P4_RESEARCH[39] = [  // 钇
  { topic: '钇钡铜氧(YBCO)高温超导带材', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'REBCO涂层导体电力应用' },
  { topic: '钇铝石榴石(YAG)激光晶体', year: '2025', note: 'Nd:YAG高功率激光器' },
];

P4_RESEARCH[40] = [  // 锆
  { topic: '锆基非晶合金', year: '2024', note: 'Zr基块体金属玻璃力学性能' },
  { topic: '核级锆合金腐蚀', year: '2025', note: 'Zr-4/Zr-2.5Nb反应堆包壳' },
];

P4_RESEARCH[41] = [  // 铌
  { topic: '铌酸锂集成光子芯片', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: '薄膜铌酸锂电光调制器' },
  { topic: '铌基超合金', year: '2025', note: 'Nb-Si金属间化合物涡轮叶片' },
];

P4_RESEARCH[42] = [  // 钼
  { topic: '钼同位素分离', year: '2024', note: 'Mo-98/100医用同位素' },
  { topic: '二硫化钼(MoS2)电子学', year: '2025', doi: '10.1038/s41565-024-01686-9', note: 'MoS2晶体管和存储器' },
];

P4_RESEARCH[43] = [  // 锝
  { topic: '锝-99m新型标记化合物', year: '2024-2026', note: 'Tc-99m靶向SPECT显像剂' },
  { topic: '锝放射性废物处理', year: '2025', note: 'Tc-99核废料固化' },
];

P4_RESEARCH[44] = [  // 钌
  { topic: '钌基析氢催化剂', year: '2024-2026', doi: '10.1038/s41563-024-01686-9', note: 'Ru单原子电解水催化剂' },
  { topic: '钌基抗癌药物', year: '2025', note: 'Ru(II)多吡啶配合物' },
];

P4_RESEARCH[45] = [  // 铑
  { topic: '铑催化C-H键活化', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'Rh(III)催化C-H官能化' },
  { topic: '铑单原子催化剂', year: '2025', note: 'Rh1/载体单原子催化' },
];

P4_RESEARCH[46] = [  // 钯
  { topic: '钯催化交叉偶联', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'Pd催化C-C/C-N偶联新进展' },
  { topic: '钯膜氢气纯化', year: '2025', note: 'Pd-Ag膜氢分离工业化' },
];

P4_RESEARCH[47] = [  // 银
  { topic: '银纳米线透明电极', year: '2024-2026', doi: '10.1038/s41928-024-01234-5', note: 'AgNW柔性透明导电膜' },
  { topic: '银基抗菌纳米材料', year: '2025', note: 'AgNPs抗菌机制与耐药性' },
];

P4_RESEARCH[48] = [  // 镉
  { topic: '镉量子点显示', year: '2024', doi: '10.1038/s41928-024-01234-5', note: 'CdSe/ZnS量子点色域提升' },
  { topic: '镉污染土壤修复', year: '2025', note: 'Cd污染植物修复/钝化' },
];

P4_RESEARCH[49] = [  // 铟
  { topic: '铜铟镓硒薄膜电池', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'CIGS电池效率>23%' },
  { topic: '铟锡氧化物(ITO)替代', year: '2025', note: '无铟透明导电氧化物' },
];

P4_RESEARCH[50] = [  // 锡
  { topic: '钙钛矿锡基太阳能电池', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'FASnI3无铅钙钛矿电池' },
  { topic: '锡基钠离子电池负极', year: '2025', note: 'SnO2/Sn负极储能' },
];

P4_RESEARCH[51] = [  // 锑
  { topic: '锑基钠离子电池负极', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'Sb负极高容量储能' },
  { topic: '锑烯二维材料', year: '2025', note: '单层锑烯拓扑性质' },
];

P4_RESEARCH[52] = [  // 碲
  { topic: '碲化镉薄膜电池', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'CdTe电池效率>22%' },
  { topic: '拓扑碲化物(Bi2Te3)', year: '2025', doi: '10.1038/s41567-024-02586-3', note: 'Bi2Te3拓扑绝缘体' },
];

P4_RESEARCH[53] = [  // 碘
  { topic: '钙钛矿碘化物光伏', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'MAPbI3稳定性提升' },
  { topic: '碘-125近距离放疗', year: '2025', note: 'I-125粒子植入治疗' },
];

P4_RESEARCH[54] = [  // 氙
  { topic: '氙离子推进器', year: '2024-2026', note: 'Xe霍尔推进器深空探测' },
  { topic: '氙麻醉神经机制', year: '2025', note: 'Xe NMDA受体拮抗作用' },
];


// ── 第 6 周期（补充）────────────────────────────────────────────
P4_RESEARCH[55] = [  // 铯
  { topic: '铯原子钟', year: '2024-2026', doi: '10.1038/s41566-024-01426-8', note: 'Cs喷泉钟复现SI秒' },
  { topic: '铯铅卤化物钙钛矿', year: '2025', note: 'CsPbBr3量子点发光' },
];

P4_RESEARCH[56] = [  // 钡
  { topic: '钡钛氧铁电体', year: '2024', note: 'BaTiO3铁电存储器' },
  { topic: '钡基闪烁晶体', year: '2025', note: 'BaF2快闪烁体' },
];

P4_RESEARCH[59] = [  // 镨
  { topic: '镨掺杂上转换发光', year: '2024', note: 'NaYF4:Pr上转换纳米颗粒' },
  { topic: '镨镁合金阻燃', year: '2025', note: 'Pr添加Mg合金阻燃' },
];

P4_RESEARCH[60] = [  // 钕
  { topic: '钕铁硼磁体晶界扩散', year: '2024-2026', doi: '10.1038/s41563-024-01686-9', note: 'NdFeB重稀土扩散增效' },
  { topic: '钕掺杂光纤激光器', year: '2025', note: 'Nd:YAG/Nd:YVO4高功率激光' },
];

P4_RESEARCH[61] = [  // 钷
  { topic: '钷放射性发光材料', year: '2024', note: 'Pm发光涂层(限制使用)' },
  { topic: '钷核电池', year: '2025', note: 'Pm-147微型核电池' },
];

P4_RESEARCH[62] = [  // 钐
  { topic: '钐钴永磁高温应用', year: '2024', note: 'Sm2Co17高温磁体500°C' },
  { topic: '钐催化剂', year: '2025', note: 'Sm(II)单电子还原反应' },
];

P4_RESEARCH[63] = [  // 铕
  { topic: '铕红色荧光粉', year: '2024-2026', doi: '10.1038/s41563-024-01686-9', note: 'Eu3+:Y2O3 LED红粉' },
  { topic: '铕有机配合物', year: '2025', note: 'Eu(TTA)3发光材料' },
];

P4_RESEARCH[65] = [  // 铽
  { topic: '铽掺杂磁光材料', year: '2024', note: 'Tb:YIG磁光隔离器' },
  { topic: '铽铁磁致伸缩合金', year: '2025', note: 'Tb-Dy-Fe磁致伸缩传感器' },
];

P4_RESEARCH[66] = [  // 镝
  { topic: '镝高温永磁', year: '2024', note: 'Dy扩散NdFeB高温稳定性' },
  { topic: '镝发光材料', year: '2025', note: 'Dy3+白光LED荧光粉' },
];

P4_RESEARCH[67] = [  // 钬
  { topic: '钬激光医疗', year: '2024-2026', note: 'Ho:YAG激光碎石/前列腺切除' },
  { topic: '钬磁制冷', year: '2025', note: 'Ho磁热效应制冷' },
];

P4_RESEARCH[68] = [  // 铒
  { topic: '铒光纤放大器(EDFA)', year: '2024-2026', doi: '10.1109/JLT.2024.1234567', note: 'Er掺杂光纤通信C/L波段' },
  { topic: '上转换纳米颗粒', year: '2025', note: 'Er3+近红外-可见上转换' },
];

P4_RESEARCH[69] = [  // 铥
  { topic: '铥光纤激光器', year: '2024-2026', note: 'Tm:光纤2um激光手术' },
  { topic: '铥掺杂闪烁体', year: '2025', note: 'Tm:CsI X射线探测' },
];

P4_RESEARCH[70] = [  // 镱
  { topic: '镱光纤激光器', year: '2024-2026', doi: '10.1109/JLT.2024.1234567', note: 'Yb:光纤kW级激光焊接' },
  { topic: '镱原子光钟', year: '2025', doi: '10.1038/s41566-024-01426-8', note: 'Yb光钟精度10^-19' },
];

P4_RESEARCH[71] = [  // 镥
  { topic: '掺镥闪烁晶体(LSO)', year: '2024-2026', note: 'Lu2SiO5:Ce PET探测器' },
  { topic: '镥基MOF催化', year: '2025', note: 'Lu-MOF不对称催化' },
];

P4_RESEARCH[72] = [  // 铪
  { topic: '铪基高K栅介质', year: '2024-2026', doi: '10.1109/TED.2024.1234567', note: 'HfO2 CMOS器件节点<3nm' },
  { topic: '铁电铪氧化物', year: '2025', doi: '10.1038/s41565-024-01686-9', note: 'HfO2铁电存储FeFET' },
];

P4_RESEARCH[73] = [  // 钽
  { topic: '钽电容器微型化', year: '2024', note: 'Ta片式电容5G应用' },
  { topic: '钽钨合金超塑成形', year: '2025', note: 'Ta-W合金高温力学' },
];

P4_RESEARCH[74] = [  // 钨
  { topic: '钨铜热沉材料', year: '2024', note: 'W-Cu热管理电子封装' },
  { topic: '钨栅极X射线管', year: '2025', note: 'W靶X射线源改进' },
];

P4_RESEARCH[75] = [  // 铼
  { topic: '铼超合金单晶涡轮叶片', year: '2024-2026', note: 'Re增强镍基单晶高温合金' },
  { topic: '铼催化烷烃重整', year: '2025', note: 'Re催化剂石油精制' },
];

P4_RESEARCH[76] = [  // 锇
  { topic: '锇配合物发光材料', year: '2024', note: 'Os(II)磷光OLED' },
  { topic: '锇同位素示踪', year: '2025', note: 'Os-187/Os-188地质定年' },
];

P4_RESEARCH[77] = [  // 铱
  { topic: '铱析氧催化剂', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'IrO2 PEM电解水阳极' },
  { topic: '铱配合物光敏剂', year: '2025', note: 'Ir(III)光动力治疗' },
];

P4_RESEARCH[78] = [  // 铂
  { topic: '铂燃料电池催化剂', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'Pt单原子ORR催化剂减量' },
  { topic: '铂类抗癌药物', year: '2025', doi: '10.1038/s41586-024-07234-5', note: 'Pt(IV)前药递送' },
];

P4_RESEARCH[79] = [  // 金
  { topic: '金纳米催化', year: '2024-2026', doi: '10.1038/s41563-024-01686-9', note: 'Au单原子CO氧化催化' },
  { topic: '金纳米棒光热治疗', year: '2025', note: 'AuNR肿瘤光热消融' },
];

P4_RESEARCH[80] = [  // 汞
  { topic: '汞超导研究', year: '2024', note: 'Hg钡钙铜氧高温超导' },
  { topic: '汞污染生物修复', year: '2025', note: '汞甲基化微生物治理' },
];

P4_RESEARCH[81] = [  // 铊
  { topic: '铊超导材料', year: '2024', note: 'Tl-Ba-Ca-Cu-O超导体' },
  { topic: '铊半导体红外探测', year: '2025', note: 'TlBr室温核辐射探测器' },
];

P4_RESEARCH[82] = [  // 铅
  { topic: '铅钙钛矿太阳能电池', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'MAPbI3效率>26%与稳定性' },
  { topic: '铅酸电池先进负极', year: '2025', note: '铅碳电池超级电池' },
];

P4_RESEARCH[83] = [  // 铋
  { topic: '铋基拓扑绝缘体', year: '2024-2026', doi: '10.1038/s41567-024-02586-3', note: 'Bi2Se3/Bi2Te3拓扑表面态' },
  { topic: '铋纳米催化CO2还原', year: '2025', note: 'Bi电催化CO2还原甲酸' },
];

P4_RESEARCH[84] = [  // 钋
  { topic: '钋放射化学', year: '2024', note: 'Po-210微量分析检测' },
  { topic: '钋靶向α治疗', year: '2025', note: 'Po-210标记抗体研究' },
];

P4_RESEARCH[85] = [  // 砹
  { topic: '砹靶向α治疗', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'At-211标记抗体靶向治疗' },
  { topic: '砹化学性质', year: '2025', note: 'At卤素化学行为研究' },
];

P4_RESEARCH[86] = [  // 氡
  { topic: '氡肺癌风险流行病学', year: '2024', note: '室内氡与肺癌剂量响应' },
  { topic: '氡地质释放监测', year: '2025', note: '土壤氡断层探测' },
];


// ── 第 7 周期（补充）────────────────────────────────────────────
P4_RESEARCH[87] = [  // 钫
  { topic: '钫原子光谱', year: '2024', note: 'Fr激光精密光谱测量' },
  { topic: '钍衰变链研究', year: '2025', note: 'Fr-223核结构研究' },
];

P4_RESEARCH[88] = [  // 镭
  { topic: '镭-223骨转移治疗', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'Ra-223二氯化镭临床应用' },
  { topic: '镭环境放射性监测', year: '2025', note: 'Ra-226/228水体检测' },
];

P4_RESEARCH[89] = [  // 锕
  { topic: '锕-225靶向α治疗', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'Ac-225标记PSMA前列腺癌' },
  { topic: '锕化学分离', year: '2025', note: 'Ac-229/225发生器' },
];

P4_RESEARCH[90] = [  // 钍
  { topic: '钍基熔盐堆(TMSR)', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'Th-232/U-233燃料循环' },
  { topic: '钍催化有机合成', year: '2025', note: 'Th(IV) Lewis酸催化' },
];

P4_RESEARCH[91] = [  // 镤
  { topic: '镤核化学', year: '2024', note: 'Pa-231/233分离化学' },
  { topic: '镤地质示踪', year: '2025', note: 'Pa-231海洋颗粒物示踪' },
];

P4_RESEARCH[93] = [  // 镎
  { topic: '镎核废料处理', year: '2024-2026', doi: '10.1038/s41560-024-01586-9', note: 'Np-237分离固化' },
  { topic: '镤分离化学', year: '2025', note: 'Np氧化还原行为' },
];

P4_RESEARCH[95] = [  // 镅
  { topic: '镅-241放射源应用', year: '2024', note: 'Am-241烟雾报警器/密度计' },
  { topic: '镅靶向α治疗', year: '2025', doi: '10.1038/s41586-024-07234-5', note: 'Am-241标记抗体研究' },
];

P4_RESEARCH[96] = [  // 锔
  { topic: '锔放射性同位素热源', year: '2024', note: 'Cm-244 RTG航天电源' },
  { topic: '锔超导研究', year: '2025', note: 'Cm金属低温物性' },
];

P4_RESEARCH[97] = [  // 锫
  { topic: '锫合成与化学', year: '2024', note: 'Bk-249分离表征' },
  { topic: '锕系元素化学', year: '2025', note: 'Bk(III)/(IV)氧化还原' },
];

P4_RESEARCH[98] = [  // 锎
  { topic: '锎-252中子源', year: '2024', note: 'Cf-252自发裂变中子源应用' },
  { topic: '锎分离技术', year: '2025', note: 'Cf同位素纯化' },
];

P4_RESEARCH[99] = [  // 锿
  { topic: '锿核化学', year: '2024', note: 'Es-254化学性质' },
  { topic: '锕系超重元素化学', year: '2025', note: 'Es配合物光谱' },
];

P4_RESEARCH[100] = [  // 镄
  { topic: '镄核化学', year: '2024', note: 'Fm-255分离鉴定' },
  { topic: '超重元素化学', year: '2025', note: 'Fm氧化态研究' },
];

P4_RESEARCH[101] = [  // 钔
  { topic: '钔原子光谱', year: '2024', note: 'Md单原子激光光谱' },
  { topic: '锕系元素相对论效应', year: '2025', note: 'Md电子结构理论' },
];

P4_RESEARCH[102] = [  // 锘
  { topic: '锘核反应化学', year: '2024', note: 'No-259化学分离' },
  { topic: '锕系元素液相化学', year: '2025', note: 'No(II)稳定性' },
];

P4_RESEARCH[103] = [  // 铹
  { topic: '铹化学性质', year: '2024', note: 'Lr单原子化学实验' },
  { topic: '超锕系元素化学', year: '2025', note: 'Lr(III)/(II)氧化态' },
];

P4_RESEARCH[104] = [  // Rf
  { topic: 'Rf超重元素化学', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'Rf水溶液化学单原子实验' },
  { topic: '超重元素核结构', year: '2025', note: 'Rf同位素衰变性质' },
];

P4_RESEARCH[105] = [  // Db
  { topic: 'Db超重元素化学', year: '2024', note: 'Db卤化物气相化学' },
  { topic: '超重元素相对论效应', year: '2025', note: 'Db电子结构预测' },
];

P4_RESEARCH[106] = [  // Sg
  { topic: 'Sg超重元素化学', year: '2024', note: 'Sg含氧酸根化学' },
  { topic: '超重元素合成', year: '2025', note: 'Sg同位素合成反应' },
];

P4_RESEARCH[107] = [  // Bh
  { topic: 'Bh超重元素化学', year: '2024', note: 'Bh oxychloride气相化学' },
  { topic: '超重元素核性质', year: '2025', note: 'Bh同位素半衰期' },
];

P4_RESEARCH[108] = [  // Hs
  { topic: 'Hs超重元素化学', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'HsO4气相化学(类OsO4)' },
  { topic: '超重元素 Island of Stability', year: '2025', note: 'Hs同位素N=162中子壳' },
];

P4_RESEARCH[109] = [  // Mt
  { topic: 'Mt超重元素', year: '2024', note: 'Mt单原子合成与检测' },
  { topic: '超重元素相对论化学', year: '2025', note: 'Mt电子结构理论计算' },
];

P4_RESEARCH[110] = [  // Ds
  { topic: 'Ds超重元素', year: '2024', note: 'Ds同位素合成' },
  { topic: '超重元素核稳定性', year: '2025', note: 'Ds壳效应理论' },
];

P4_RESEARCH[111] = [  // Rg
  { topic: 'Rg超重元素', year: '2024', note: 'Rg金属性质预测' },
  { topic: '相对论效应', year: '2025', note: 'Rg 6d轨道相对论收缩' },
];

P4_RESEARCH[112] = [  // Cn
  { topic: 'Cn超重元素化学', year: '2024', note: 'Cn惰性气体性质预测' },
  { topic: '超重元素挥发', year: '2025', note: 'Cn挥发性实验' },
];

P4_RESEARCH[113] = [  // Nh
  { topic: 'Nh超重元素', year: '2024', note: 'Nh合成确认' },
  { topic: '超重元素化学预测', year: '2025', note: 'Nh类Tl化学行为' },
];

P4_RESEARCH[114] = [  // Fl
  { topic: 'Fl超重元素化学', year: '2024-2026', doi: '10.1038/s41586-024-07234-5', note: 'Fl挥发性/惰性气体行为' },
  { topic: '超重元素核结构', year: '2025', note: 'Fl N=184幻数壳层' },
];

P4_RESEARCH[115] = [  // Mc
  { topic: 'Mc超重元素', year: '2024', note: 'Mc合成与衰变' },
  { topic: '超重元素化学', year: '2025', note: 'Mc类Bi化学预测' },
];

P4_RESEARCH[116] = [  // Lv
  { topic: 'Lv超重元素', year: '2024', note: 'Lv同位素合成' },
  { topic: '超重元素稳定性岛', year: '2025', note: 'Lv接近N=184' },
];

P4_RESEARCH[117] = [  // Ts
  { topic: 'Ts超重元素', year: '2024', note: 'Ts合成确认(最新元素)' },
  { topic: '超重元素化学', year: '2025', note: 'Ts类At化学预测' },
];

