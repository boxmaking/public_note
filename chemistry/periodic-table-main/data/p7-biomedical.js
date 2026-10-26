/**
 * P7-2：生物医学数据
 * 包含：人体必需性、日摄入量、体内含量、生理功能、药物应用、毒性机理
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P7_BIOMEDICAL = {};

// ════════════════════════════════════════════════════
//  生物医学数据（按 z 索引）
// ════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[1] = {  // 氢
  essentiality: '必需常量元素',
  dailyIntake: { rda: '按体重计算', ul: 'N/A', note: '以水形式摄入' },
  bodyContent: { totalAmount: '约7000 g', bloodLevel: '—', boneLevel: '—', organDistribution: '全身', note: '人体约60%为水' },
  physiologicalFunction: { role: '水的主要成分，维持体液平衡，参与所有生化反应', enzymes: '质子供体/受体', deficiencySymptoms: '脱水', excessSymptoms: '水中毒(低钠血症)', note: '生命基础元素' },
  medicalApplication: { drugs: [], imaging: 'MRI ¹H成像', therapy: '无', diagnosis: '呼气试验', note: 'MRI氢原子成像是最常用医学影像' },
  toxicityMechanism: { mechanism: '无毒性', targetOrgan: '无', antidote: '无', treatmentNote: '无', note: '氢气本身无毒' }
};

P7_BIOMEDICAL[2] = {  // 氦
  essentiality: '无毒',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '氦为惰性气体' },
  physiologicalFunction: { role: '惰性气体，无生理作用', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '氦无生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '—', diagnosis: '—', note: 'MRI冷却剂/呼吸混合气' },
  toxicityMechanism: { mechanism: '无毒性', targetOrgan: '无', antidote: '无', treatmentNote: '无', note: '氦为惰性气体' }
};


// ── 第 2 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[3] = {  // 锂
  essentiality: '可能有益元素',
  dailyIntake: { rda: '1 mg/d', ul: 'N/A', note: '饮水微量锂' },
  bodyContent: { totalAmount: '0.7 mg', bloodLevel: '<5 μg/L', boneLevel: '—', organDistribution: '全身', note: '锂在体内分布' },
  physiologicalFunction: { role: '情绪稳定/神经保护', enzymes: 'GSK-3beta抑制', deficiencySymptoms: '无明确缺乏症', excessSymptoms: '锂中毒/震颤/甲状腺功能减退', note: '锂的生理功能' },
  medicalApplication: { drugs: ['碳酸锂'], imaging: '7Li MRI', therapy: '碳酸锂治疗双相情感障碍', diagnosis: '血锂测定', note: '锂的医学应用' },
  toxicityMechanism: { mechanism: '锂替代钠/影响第二信使', targetOrgan: '肾/甲状腺/神经', antidote: '透析', treatmentNote: '锂中毒处理', note: '锂治疗窗口窄，需血药浓度监测' }
};

P7_BIOMEDICAL[4] = {  // 铍
  essentiality: '有毒金属',
  dailyIntake: { rda: '0', ul: '0.2 μg/m³(空气)', note: '职业暴露' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.3 μg/L', boneLevel: '—', organDistribution: '肺/骨骼', note: '铰粉尘吸入为主' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铍肺病/肺癌', note: '铍是I类致癌物' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '糖皮质激素治疗铍肺病', diagnosis: '铍淋巴细胞增殖试验(BeLPT)', note: '铍肺病是典型职业病' },
  toxicityMechanism: { mechanism: '铍致迟发型超敏反应/肉芽肿', targetOrgan: '肺', antidote: '无特效解毒', treatmentNote: '铍肺病不可逆', note: '铍过敏终身不消退' }
};

P7_BIOMEDICAL[5] = {  // 硼
  essentiality: '可能有益元素',
  dailyIntake: { rda: '1-3 mg/d', ul: '20 mg/d', note: '食物硼' },
  bodyContent: { totalAmount: '约0.02 g', bloodLevel: '0.2 μmol/L', boneLevel: '—', organDistribution: '骨骼/牙齿', note: '硼在体内含量低' },
  physiologicalFunction: { role: '骨骼代谢/维生素D代谢/免疫功能', enzymes: '—', deficiencySymptoms: '骨量减少', excessSymptoms: '硼中毒/胃肠炎', note: '硼可能对骨健康有益' },
  medicalApplication: { drugs: ['硼酸', '硼替佐米'], imaging: '¹⁰B BNCT', therapy: '硼中子俘获治疗(BNCT)', diagnosis: '—', note: '硼替佐米是多发性骨髓瘤靶向药' },
  toxicityMechanism: { mechanism: '硼酸抑制脱氢酶', targetOrgan: '胃肠道/肾', antidote: '对症治疗', treatmentNote: '硼中毒无特效解毒剂', note: 'BNCT是硼的尖端医学应用' }
};

P7_BIOMEDICAL[6] = {  // 碳
  essentiality: '必需常量元素',
  dailyIntake: { rda: '130 g/d', ul: 'N/A', note: '以碳水化合物形式' },
  bodyContent: { totalAmount: '约16000 g', bloodLevel: '5 mmol/L 血糖', boneLevel: '—', organDistribution: '全身', note: '有机分子骨架' },
  physiologicalFunction: { role: '有机分子骨架，能量代谢', enzymes: '所有酶的蛋白质骨架', deficiencySymptoms: '低血糖', excessSymptoms: '高血糖/糖尿病', note: '碳是一切有机分子的基础' },
  medicalApplication: { drugs: [], imaging: '¹³C呼气试验(幽门螺杆菌)', therapy: '碳离子放射治疗', diagnosis: '¹³C-尿素呼气试验', note: '碳离子治疗是先进放射治疗技术' },
  toxicityMechanism: { mechanism: '一氧化碳(CO)与血红蛋白结合', targetOrgan: '血液/脑', antidote: '高压氧', treatmentNote: 'CO中毒需高压氧治疗', note: 'CO中毒是常见中毒原因' }
};

P7_BIOMEDICAL[7] = {  // 氮
  essentiality: '必需常量元素',
  dailyIntake: { rda: '0.8 g/kg体重/d', ul: '3.5 g/kg体重/d', note: '以蛋白质形式' },
  bodyContent: { totalAmount: '约1800 g', bloodLevel: '10 mmol/L 尿素', boneLevel: '—', organDistribution: '肌肉/血液', note: '蛋白质主要成分' },
  physiologicalFunction: { role: '氨基酸/蛋白质/核酸组成，氮循环', enzymes: '所有酶', deficiencySymptoms: '蛋白质缺乏症', excessSymptoms: '氮质血症/尿毒症', note: '氮是蛋白质和核酸的必需元素' },
  medicalApplication: { drugs: [], imaging: '¹⁵N PET', therapy: '氮芥类化疗药物', diagnosis: '血尿素氮(BUN)', note: '氮芥是第一种抗肿瘤药物' },
  toxicityMechanism: { mechanism: '氨中毒/亚硝酸盐高铁血红蛋白血症', targetOrgan: '肝/脑/血液', antidote: '亚甲蓝(亚硝酸盐中毒)', treatmentNote: '肝性脑病需降氨治疗', note: '氨中毒是肝衰竭严重并发症' }
};

P7_BIOMEDICAL[8] = {  // 氧
  essentiality: '必需常量元素',
  dailyIntake: { rda: '按需呼吸', ul: 'N/A', note: '通过呼吸摄入' },
  bodyContent: { totalAmount: '约43000 g', bloodLevel: '—', boneLevel: '—', organDistribution: '全身', note: '人体约65%为氧' },
  physiologicalFunction: { role: '细胞呼吸，ATP合成，所有氧化反应', enzymes: '细胞色素氧化酶', deficiencySymptoms: '缺氧', excessSymptoms: '氧中毒(肺损伤)', note: '生命基础元素' },
  medicalApplication: { drugs: [], imaging: '血氧水平依赖(BOLD) fMRI', therapy: '高压氧治疗', diagnosis: '脉搏血氧仪', note: '高压氧治疗广泛应用于一氧化碳中毒等' },
  toxicityMechanism: { mechanism: '高浓度氧产生自由基损伤', targetOrgan: '肺/视网膜', antidote: '无', treatmentNote: '早产儿视网膜病变风险', note: '氧中毒仅在高压或高浓度时发生' }
};

P7_BIOMEDICAL[9] = {  // 氟
  essentiality: '可能有益元素',
  dailyIntake: { rda: '3-4 mg/d', ul: '10 mg/d', note: '饮水氟/含氟牙膏' },
  bodyContent: { totalAmount: '约2.6 g', bloodLevel: '0.2 μmol/L', boneLevel: '0.1%(骨骼)', organDistribution: '骨骼/牙齿', note: '主要蓄积于骨骼和牙齿' },
  physiologicalFunction: { role: '牙齿釉质/骨骼矿化', enzymes: '—', deficiencySymptoms: '龋齿', excessSymptoms: '氟斑牙/氟骨症', note: '适量氟防龋齿，过量致氟骨症' },
  medicalApplication: { drugs: ['氟化钠'], imaging: '¹⁸F PET', therapy: '含氟化疗药(5-氟尿嘧啶)', diagnosis: '¹⁸F-FDG PET/CT', note: '¹⁸F-FDG是肿瘤诊断金标准' },
  toxicityMechanism: { mechanism: '过量氟干扰钙磷代谢/抑制酶', targetOrgan: '骨骼/牙齿', antidote: '钙剂/维生素C', treatmentNote: '氟骨症不可逆', note: '氟的窄窗口效应典型' }
};

P7_BIOMEDICAL[10] = {  // 氖
  essentiality: '无毒',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '氖为惰性气体' },
  physiologicalFunction: { role: '惰性气体', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '氖无生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '—', diagnosis: '—', note: '霓虹灯' },
  toxicityMechanism: { mechanism: '无毒性', targetOrgan: '无', antidote: '无', treatmentNote: '无', note: '氖为惰性气体' }
};


// ── 第 3 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[11] = {  // 钠
  essentiality: '必需常量元素',
  dailyIntake: { rda: '1500 mg/d', ul: '2300 mg/d', note: 'NaCl摄入' },
  bodyContent: { totalAmount: '约100 g', bloodLevel: '142 mmol/L', boneLevel: '—', organDistribution: '细胞外液/骨骼', note: '主要存在于细胞外液' },
  physiologicalFunction: { role: '维持体液渗透压/神经传导/肌肉收缩', enzymes: 'Na⁺/K⁺-ATP酶', deficiencySymptoms: '低钠血症/乏力', excessSymptoms: '高血压/水肿', note: '钠是细胞外液主要阳离子' },
  medicalApplication: { drugs: ['生理盐水', '碳酸氢钠'], imaging: '²³Na MRI', therapy: '高渗盐水治疗低钠血症', diagnosis: '血钠测定', note: '生理盐水是最常用的静脉输液' },
  toxicityMechanism: { mechanism: '高钠导致渗透压失衡', targetOrgan: '心血管/肾', antidote: '利尿/补水', treatmentNote: '限制钠盐是高血压管理基础', note: '过量钠摄入与心血管疾病密切相关' }
};

P7_BIOMEDICAL[12] = {  // 镁
  essentiality: '必需常量元素',
  dailyIntake: { rda: '400 mg/d', ul: '350 mg/d(补充剂)', note: '绿叶蔬菜/坚果' },
  bodyContent: { totalAmount: '约25 g', bloodLevel: '0.85 mmol/L', boneLevel: '0.5%(骨骼)', organDistribution: '骨骼/肌肉', note: '约60%存在于骨骼' },
  physiologicalFunction: { role: '骨骼组成/300+酶的辅因子/神经肌肉功能', enzymes: 'Mg依赖性激酶/ATP酶', deficiencySymptoms: '低镁血症/心律失常', excessSymptoms: '高镁血症/呼吸抑制', note: '镁参与300+酶反应' },
  medicalApplication: { drugs: ['硫酸镁'], imaging: '²⁸Mg MRI', therapy: '硫酸镁治疗子痫/心律失常', diagnosis: '血镁测定', note: '硫酸镁是子痫前期首选药物' },
  toxicityMechanism: { mechanism: '高镁抑制神经肌肉传导', targetOrgan: '神经肌肉/呼吸', antidote: '钙剂', treatmentNote: '肾功能不全者易蓄积', note: '镁是天然的钙通道阻滞剂' }
};

P7_BIOMEDICAL[13] = {  // 铝
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: '1 mg/kg体重/周', note: '食物铝' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<6 μg/L', boneLevel: '—', organDistribution: '骨/脑/肺', note: '铝在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铝中毒/骨病/神经毒性', note: '铝的生理功能' },
  medicalApplication: { drugs: ['氢氧化铝(抗酸剂)', '硫酸铝钾(明矾)'], imaging: '—', therapy: '氢氧化铝治疗胃酸过多', diagnosis: '血铝/尿铝', note: '铝的医学应用' },
  toxicityMechanism: { mechanism: '铝干扰钙磷代谢/沉积于脑', targetOrgan: '骨/脑', antidote: '去铁胺螯合', treatmentNote: '铝中毒处理', note: '铝与阿尔茨海默病关联有争议' }
};

P7_BIOMEDICAL[14] = {  // 硅
  essentiality: '可能有益元素',
  dailyIntake: { rda: '5-10 mg/d', ul: '700 mg/d', note: '食物硅' },
  bodyContent: { totalAmount: '约1 g', bloodLevel: '—', boneLevel: '—', organDistribution: '结缔组织/骨骼', note: '硅存在于结缔组织' },
  physiologicalFunction: { role: '结缔组织/骨骼发育/胶原蛋白合成', enzymes: '脯氨酰羟化酶', deficiencySymptoms: '骨骼发育不良', excessSymptoms: '矽肺', note: '硅对骨骼和结缔组织有益' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '硅凝胶疤痕治疗', diagnosis: '—', note: '硅胶假体用于整形外科' },
  toxicityMechanism: { mechanism: '游离硅尘致肺纤维化', targetOrgan: '肺', antidote: '无', treatmentNote: '矽肺不可逆', note: '矽肺是最常见职业病之一' }
};

P7_BIOMEDICAL[15] = {  // 磷
  essentiality: '必需常量元素',
  dailyIntake: { rda: '700 mg/d', ul: '4000 mg/d', note: '食物磷' },
  bodyContent: { totalAmount: '约780 g', bloodLevel: '1.2 mmol/L', boneLevel: '25%(干重)', organDistribution: '骨骼/细胞膜', note: '85%存在于骨骼' },
  physiologicalFunction: { role: '骨骼/牙齿/ATP/核酸/磷脂组成', enzymes: '蛋白激酶/ATP', deficiencySymptoms: '低磷血症/肌无力', excessSymptoms: '高磷血症/肾性骨病', note: '磷是能量代谢核心元素' },
  medicalApplication: { drugs: ['磷酸氢钙'], imaging: '³²P PET', therapy: '磷-32放疗', diagnosis: '血磷测定', note: '³²P用于治疗真性红细胞增多症' },
  toxicityMechanism: { mechanism: '高磷导致低钙/血管钙化', targetOrgan: '肾/骨/血管', antidote: '磷结合剂', treatmentNote: '慢性肾病需限制磷摄入', note: '血磷钙乘积是肾性骨病关键指标' }
};

P7_BIOMEDICAL[16] = {  // 硫
  essentiality: '必需常量元素',
  dailyIntake: { rda: 'N/A(含硫氨基酸)', ul: 'N/A', note: '蛋白质含硫氨基酸' },
  bodyContent: { totalAmount: '约140 g', bloodLevel: '—', boneLevel: '—', organDistribution: '含硫氨基酸/角蛋白', note: '以含硫氨基酸形式存在' },
  physiologicalFunction: { role: '二硫键/辅酶A/含硫氨基酸/解毒', enzymes: '含硫酶', deficiencySymptoms: '蛋白质缺乏', excessSymptoms: '罕见', note: '硫通过含硫氨基酸摄入' },
  medicalApplication: { drugs: ['硫酸葡糖胺', '二甲基亚砜(DMSO)'], imaging: '—', therapy: 'DMSO膀胱灌注', diagnosis: '—', note: '含硫药物如青霉素/头孢菌素' },
  toxicityMechanism: { mechanism: '硫化氢抑制细胞色素氧化酶', targetOrgan: '脑/肺', antidote: '亚硝酸钠+硫代硫酸钠', treatmentNote: 'H₂S中毒需高铁血红蛋白形成剂', note: '硫化氢毒性堪比氰化物' }
};

P7_BIOMEDICAL[17] = {  // 氯
  essentiality: '必需常量元素',
  dailyIntake: { rda: '2300 mg/d', ul: '3600 mg/d', note: '以NaCl形式' },
  bodyContent: { totalAmount: '约95 g', bloodLevel: '100 mmol/L', boneLevel: '—', organDistribution: '细胞外液/胃液', note: '主要存在于细胞外液' },
  physiologicalFunction: { role: '体液平衡/胃酸(HCl)/免疫', enzymes: '—', deficiencySymptoms: '低氯血症/碱中毒', excessSymptoms: '高氯血症/酸中毒', note: '氯是胃酸的主要成分' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '氯化钠注射液', diagnosis: '血氯测定', note: '生理盐水和林格液含氯' },
  toxicityMechanism: { mechanism: '氯气刺激呼吸道', targetOrgan: '肺', antidote: '对症治疗', treatmentNote: '氯气中毒需立即脱离接触', note: '氯气是WWI化学武器' }
};

P7_BIOMEDICAL[18] = {  // 氩
  essentiality: '无毒',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '氩为惰性气体' },
  physiologicalFunction: { role: '惰性气体', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '氩无生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '—', diagnosis: '—', note: '保护气' },
  toxicityMechanism: { mechanism: '无毒性', targetOrgan: '无', antidote: '无', treatmentNote: '无', note: '氩为惰性气体' }
};


// ── 第 4 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[19] = {  // 钾
  essentiality: '必需常量元素',
  dailyIntake: { rda: '3400 mg/d', ul: 'N/A', note: '食物摄入' },
  bodyContent: { totalAmount: '约140 g', bloodLevel: '4.0 mmol/L', boneLevel: '—', organDistribution: '细胞内液/肌肉', note: '主要存在于细胞内液' },
  physiologicalFunction: { role: '维持细胞内渗透压/神经传导/心肌功能', enzymes: 'Na⁺/K⁺-ATP酶', deficiencySymptoms: '低钾血症/心律失常', excessSymptoms: '高钾血症/心脏骤停', note: '钾是细胞内液主要阳离子' },
  medicalApplication: { drugs: ['氯化钾缓释片'], imaging: '—', therapy: '补钾治疗低钾血症', diagnosis: '血钾测定', note: '血钾异常是临床常见危急值' },
  toxicityMechanism: { mechanism: '高钾抑制心肌传导', targetOrgan: '心脏', antidote: '钙剂/胰岛素+葡萄糖', treatmentNote: '高钾血症是临床急症', note: '血钾>7 mmol/L可致心脏骤停' }
};

P7_BIOMEDICAL[20] = {  // 钙
  essentiality: '必需常量元素',
  dailyIntake: { rda: '1000 mg/d', ul: '2500 mg/d', note: '乳制品为主要来源' },
  bodyContent: { totalAmount: '约1200 g', bloodLevel: '2.4 mmol/L', boneLevel: '25%(干重)', organDistribution: '骨骼/牙齿', note: '99%存在于骨骼' },
  physiologicalFunction: { role: '骨骼/牙齿结构，肌肉收缩/神经传导/凝血', enzymes: '钙调蛋白/凝血酶', deficiencySymptoms: '骨质疏松/手足搐搦', excessSymptoms: '高钙血症/肾结石', note: '钙是人体最丰富金属元素' },
  medicalApplication: { drugs: ['碳酸钙', '葡萄糖酸钙'], imaging: '⁴⁵Ca PET', therapy: '补钙治疗骨质疏松', diagnosis: '血钙测定/骨密度', note: '钙剂是骨质疏松基础治疗' },
  toxicityMechanism: { mechanism: '高钙导致异位钙化', targetOrgan: '肾/血管', antidote: '降钙素/双膦酸盐', treatmentNote: '恶性肿瘤高钙血症需紧急处理', note: '维生素D调节钙吸收' }
};

P7_BIOMEDICAL[21] = {  // 钪
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 ug/L', boneLevel: '—', organDistribution: '骨/肝', note: '钪在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '钪沉积', note: '钪的生理功能' },
  medicalApplication: { drugs: [], imaging: '-', therapy: '无', diagnosis: '血钪测定', note: '钪的医学应用' },
  toxicityMechanism: { mechanism: '钪低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '钪中毒处理', note: '46Sc用于PET研究' }
};

P7_BIOMEDICAL[22] = {  // 钛
  essentiality: '无毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 ug/L', boneLevel: '—', organDistribution: '骨/肺', note: '钛在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无显著毒性', note: '钛的生理功能' },
  medicalApplication: { drugs: [], imaging: '-', therapy: '钛植入物/关节置换', diagnosis: '-', note: '钛的医学应用' },
  toxicityMechanism: { mechanism: '钛极低吸收/生物惰性', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '钛中毒处理', note: '钛是生物相容性最好的金属' }
};

P7_BIOMEDICAL[23] = {  // 钒
  essentiality: '可能有益元素',
  dailyIntake: { rda: '10-20 μg/d', ul: '1.8 mg/d', note: '食物钒' },
  bodyContent: { totalAmount: '0.1 mg', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '骨/肝/肾', note: '钒在体内分布' },
  physiologicalFunction: { role: '胰岛素增敏/糖代谢', enzymes: '钒依赖卤素过氧化物酶', deficiencySymptoms: '无明确缺乏症', excessSymptoms: '钒中毒/胃肠刺激', note: '钒的生理功能' },
  medicalApplication: { drugs: ['硫酸氧钒(研究)'], imaging: '—', therapy: '钒化合物降糖研究', diagnosis: '血钒测定', note: '钒的医学应用' },
  toxicityMechanism: { mechanism: '钒干扰ATP酶/氧化还原', targetOrgan: '肾/肝', antidote: '对症治疗', treatmentNote: '钒中毒处理', note: '钒的降糖作用仍在研究中' }
};

P7_BIOMEDICAL[24] = {  // 铬
  essentiality: '必需微量元素',
  dailyIntake: { rda: '25 μg/d', ul: '250 μg/d(补充剂)', note: '肉类/全谷物' },
  bodyContent: { totalAmount: '约6 mg', bloodLevel: '—', boneLevel: '—', organDistribution: '肝脏/脾脏/骨骼', note: '铬在体内含量极低' },
  physiologicalFunction: { role: '糖耐量因子/胰岛素增敏', enzymes: '铬调蛋白', deficiencySymptoms: '糖耐量异常', excessSymptoms: '肾损伤(六价铬)', note: '铬与胰岛素敏感性相关' },
  medicalApplication: { drugs: ['吡啶甲酸铬'], imaging: '—', therapy: '铬剂辅助降糖', diagnosis: '血铬/尿铬', note: '铬补充剂在糖尿病辅助治疗中有争议' },
  toxicityMechanism: { mechanism: '六价铬还原产生自由基/DNA损伤', targetOrgan: '肺/肾/皮肤', antidote: 'EDTA/抗坏血酸', treatmentNote: '六价铬是已知致癌物', note: '六价铬致癌(Erin Brockovich事件)' }
};

P7_BIOMEDICAL[25] = {  // 锰
  essentiality: '必需微量元素',
  dailyIntake: { rda: '2.3 mg/d', ul: '11 mg/d', note: '全谷物/坚果/茶叶' },
  bodyContent: { totalAmount: '约12 mg', bloodLevel: '10 nmol/L', boneLevel: '—', organDistribution: '骨骼/肝脏/肾脏', note: '主要储存于骨骼' },
  physiologicalFunction: { role: '锰超氧化物歧化酶(MnSOD)/糖代谢/骨骼形成', enzymes: 'MnSOD/丙酮酸羧化酶/糖基转移酶', deficiencySymptoms: '罕见/骨骼异常/生长迟缓', excessSymptoms: '锰中毒/帕金森样症状', note: 'MnSOD是重要抗氧化酶' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '锰剂肠外营养补充', diagnosis: '血锰测定', note: '锰中毒见于矿工/焊接工' },
  toxicityMechanism: { mechanism: '过量锰损伤黑质纹状体多巴胺能神经元', targetOrgan: '脑(基底节)', antidote: 'EDTA螯合', treatmentNote: '锰中毒类似帕金森病', note: '锰中毒是典型职业病' }
};

P7_BIOMEDICAL[26] = {  // 铁
  essentiality: '必需微量元素',
  dailyIntake: { rda: '男12 mg/d 女10 mg/d', ul: '40 mg/d', note: '红肉/动物肝脏' },
  bodyContent: { totalAmount: '约4 g', bloodLevel: '男11.6 mmol/L 女9.0 mmol/L', boneLevel: '—', organDistribution: '血红蛋白/肝脏/骨髓', note: '70%存在于血红蛋白' },
  physiologicalFunction: { role: '氧运输/电子传递/免疫', enzymes: '血红蛋白/细胞色素/过氧化氢酶', deficiencySymptoms: '缺铁性贫血', excessSymptoms: '血色病/铁过载', note: '铁是最重要的微量元素' },
  medicalApplication: { drugs: ['硫酸亚铁', '右旋糖酐铁'], imaging: '超顺磁性氧化铁(USPIO) MRI', therapy: '铁剂治疗贫血/铁螯合治疗血色病', diagnosis: '血清铁蛋白/血常规', note: '铁剂是最常用的贫血治疗药物' },
  toxicityMechanism: { mechanism: '游离铁催化Fenton反应产生自由基', targetOrgan: '肝/心/内分泌', antidote: '去铁胺', treatmentNote: '急性铁中毒儿童致命', note: '铁过载导致器官损伤' }
};

P7_BIOMEDICAL[27] = {  // 钴
  essentiality: '必需微量元素',
  dailyIntake: { rda: '0.4 μg/d(B12)', ul: 'N/A', note: '维生素B12含钴' },
  bodyContent: { totalAmount: '约1.5 mg', bloodLevel: '—', boneLevel: '—', organDistribution: '肝脏/肌肉', note: '以维生素B12形式存在' },
  physiologicalFunction: { role: '维生素B12辅酶/甲基转移/造血', enzymes: '甲硫氨酸合酶/甲基丙二酰CoA变位酶', deficiencySymptoms: '巨幼细胞贫血/神经损伤', excessSymptoms: '罕见', note: '钴是维生素B12的核心元素' },
  medicalApplication: { drugs: ['氰钴胺(维生素B12)', '羟钴胺'], imaging: '57Co PET', therapy: '维生素B12治疗贫血/羟钴胺治疗氰化物中毒', diagnosis: '血清B12', note: '羟钴胺是氰化物中毒解毒剂' },
  toxicityMechanism: { mechanism: '过量钴离子干扰甲状腺/心肌', targetOrgan: '甲状腺/心脏', antidote: 'EDTA', treatmentNote: '钴过量见于合金植入物', note: '钴曾用于啤酒泡沫稳定剂致心肌病' }
};

P7_BIOMEDICAL[28] = {  // 镍
  essentiality: '可能有益元素',
  dailyIntake: { rda: '25-35 ug/d', ul: '1 mg/d', note: '食物镍' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.5 ug/L', boneLevel: '—', organDistribution: '皮肤/肺', note: '镍在体内分布' },
  physiologicalFunction: { role: '可能参与尿素酶等含镍酶', enzymes: '尿素酶/氢化酶', deficiencySymptoms: '罕见', excessSymptoms: '镍过敏/接触性皮炎', note: '镍的生理功能' },
  medicalApplication: { drugs: [], imaging: '-', therapy: '无', diagnosis: '血镍/尿镍测定', note: '镍的医学应用' },
  toxicityMechanism: { mechanism: '镍致接触过敏/致癌(吸入)', targetOrgan: '皮肤/肺', antidote: '二巯基丙醇', treatmentNote: '镍中毒处理', note: '镍是最常见接触过敏原之一' }
};

P7_BIOMEDICAL[29] = {  // 铜
  essentiality: '必需微量元素',
  dailyIntake: { rda: '0.9 mg/d', ul: '10 mg/d', note: '肝脏/贝类/坚果' },
  bodyContent: { totalAmount: '约80 mg', bloodLevel: '11-22 μmol/L', boneLevel: '—', organDistribution: '肝脏/脑/肌肉', note: '主要储存于肝脏' },
  physiologicalFunction: { role: '铁代谢/电子传递/胶原蛋白合成/黑色素', enzymes: '铜蓝蛋白/细胞色素c氧化酶/赖氨酰氧化酶', deficiencySymptoms: '贫血/中性粒细胞减少/骨骼异常', excessSymptoms: '肝豆状核变性(Wilson病)', note: '铜蓝蛋白是铜转运关键蛋白' },
  medicalApplication: { drugs: ['硫酸铜'], imaging: '⁶⁴Cu PET', therapy: '铜螯合治疗Wilson病', diagnosis: '血清铜/铜蓝蛋白', note: '⁶⁴Cu用于PET显像' },
  toxicityMechanism: { mechanism: '过量铜产生自由基/肝损伤', targetOrgan: '肝/脑/角膜', antidote: '青霉胺/锌剂', treatmentNote: 'Wilson病需终身驱铜治疗', note: 'Wilson病是铜代谢遗传病' }
};

P7_BIOMEDICAL[30] = {  // 锌
  essentiality: '必需微量元素',
  dailyIntake: { rda: '男12.5 mg/d 女7.5 mg/d', ul: '40 mg/d', note: '牡蛎/红肉/坚果' },
  bodyContent: { totalAmount: '约2 g', bloodLevel: '12 μmol/L', boneLevel: '—', organDistribution: '肌肉/骨骼/前列腺', note: '锌广泛分布于全身' },
  physiologicalFunction: { role: '300+酶的辅因子/免疫/伤口愈合/味觉', enzymes: '锌指蛋白/DNA聚合酶/醇脱氢酶', deficiencySymptoms: '生长迟缓/免疫低下/味觉障碍', excessSymptoms: '铜缺乏/免疫抑制', note: '锌指蛋白是基因调控基础' },
  medicalApplication: { drugs: ['葡萄糖酸锌', '氧化锌'], imaging: '—', therapy: '锌剂治疗腹泻/感冒', diagnosis: '血清锌测定', note: 'WHO推荐锌剂治疗儿童腹泻' },
  toxicityMechanism: { mechanism: '过量锌拮抗铜吸收', targetOrgan: '胃肠/免疫', antidote: '补铜', treatmentNote: '长期大剂量补锌需监测铜', note: '锌毒性相对较低' }
};

P7_BIOMEDICAL[31] = {  // 镓
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.3 μg/L', boneLevel: '—', organDistribution: '骨/肾', note: '镓在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '镓沉积/肾损伤', note: '镓的生理功能' },
  medicalApplication: { drugs: ['硝酸镓(高钙血症)', '枸橼酸镓-67'], imaging: '⁶⁷Ga肿瘤显像', therapy: '硝酸镓治疗高钙血症', diagnosis: '血镓测定', note: '镓的医学应用' },
  toxicityMechanism: { mechanism: '镓沉积于骨/肾', targetOrgan: '肾', antidote: '对症治疗', treatmentNote: '镓中毒处理', note: '⁶⁷Ga-枸橼酸用于淋巴瘤显像' }
};

P7_BIOMEDICAL[32] = {  // 锗
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<5 μg/L', boneLevel: '—', organDistribution: '肾', note: '锗在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '锗中毒/肾损伤', note: '锗的生理功能' },
  medicalApplication: { drugs: ['锗-132(保健,已禁用)'], imaging: '—', therapy: '无', diagnosis: '血锗测定', note: '锗的医学应用' },
  toxicityMechanism: { mechanism: '锗沉积损伤肾小管', targetOrgan: '肾', antidote: '对症治疗', treatmentNote: '锗中毒处理', note: '有机锗保健品已致多例肾衰' }
};

P7_BIOMEDICAL[33] = {  // 砷
  essentiality: '有毒类金属',
  dailyIntake: { rda: '0', ul: '10 μg/L(饮水)', note: '地下水/食物' },
  bodyContent: { totalAmount: '约7 mg', bloodLevel: '<5 μg/L', boneLevel: '—', organDistribution: '皮肤/毛发/指甲/肝', note: '砷蓄积于皮肤和附件' },
  physiologicalFunction: { role: '无明确必需功能(可能有超微量元素作用)', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '皮肤癌/肝癌/心血管疾病', note: '砷是I类致癌物' },
  medicalApplication: { drugs: ['三氧化二砷(As₂O₃)'], imaging: '—', therapy: '三氧化二砷治疗APL(急性早幼粒细胞白血病)', diagnosis: '尿砷/发砷', note: '砷剂治疗白血病是中医以毒攻毒典范' },
  toxicityMechanism: { mechanism: '砷取代磷/抑制DNA修复/诱导氧化应激', targetOrgan: '皮肤/肝/膀胱/肺', antidote: '二巯基丙醇(DMPS)', treatmentNote: '慢性砷中毒皮肤病变特征性', note: '地下水砷污染影响全球亿万人' }
};

P7_BIOMEDICAL[34] = {  // 硒
  essentiality: '必需微量元素',
  dailyIntake: { rda: '60 μg/d', ul: '400 μg/d', note: '巴西坚果/海鲜/肉类' },
  bodyContent: { totalAmount: '约13 mg', bloodLevel: '1.3-2.5 μmol/L', boneLevel: '—', organDistribution: '肌肉/骨骼/甲状腺', note: '硒广泛分布' },
  physiologicalFunction: { role: '谷胱甘肽过氧化物酶/脱碘酶/抗氧化', enzymes: 'GPx/硫氧还蛋白还原酶/I型脱碘酶', deficiencySymptoms: '克山病/大骨节病', excessSymptoms: '硒中毒/脱发/指甲脱落', note: '中国克山病与缺硒相关' },
  medicalApplication: { drugs: ['亚硒酸钠', '硒酵母'], imaging: '⁷⁵Se MRI', therapy: '硒剂预防克山病', diagnosis: '血清硒测定', note: '硒补充是克山病防治关键' },
  toxicityMechanism: { mechanism: '过量硒取代硫/抑制含硫酶', targetOrgan: '毛发/指甲/神经', antidote: '对症治疗', treatmentNote: '硒中毒无特效解毒', note: '硒的窄窗口效应显著' }
};

P7_BIOMEDICAL[35] = {  // 溴
  essentiality: '低毒元素',
  dailyIntake: { rda: '0-7 mg/d', ul: 'N/A', note: '食物溴' },
  bodyContent: { totalAmount: '200 mg', bloodLevel: '3-6 mg/L', boneLevel: '—', organDistribution: '血液/肌肉', note: '溴在体内分布' },
  physiologicalFunction: { role: '可能影响神经传导', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '溴中毒/溴疹', note: '溴的生理功能' },
  medicalApplication: { drugs: ['溴化钾(镇静,已淘汰)'], imaging: '⁷⁶Br PET', therapy: '无', diagnosis: '血溴测定', note: '溴的医学应用' },
  toxicityMechanism: { mechanism: '溴替代氯/抑制中枢神经', targetOrgan: '神经/皮肤', antidote: '氯化钠促排', treatmentNote: '溴中毒处理', note: '溴化物镇静剂已淘汰' }
};

P7_BIOMEDICAL[36] = {  // 氪
  essentiality: '无毒',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '氪为惰性气体' },
  physiologicalFunction: { role: '惰性气体', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '氪无生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '—', diagnosis: '—', note: '照明' },
  toxicityMechanism: { mechanism: '无毒性', targetOrgan: '无', antidote: '无', treatmentNote: '无', note: '氪为惰性气体' }
};


// ── 第 5 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[37] = {  // 铷
  essentiality: '低毒元素',
  dailyIntake: { rda: '1-2 mg/d', ul: 'N/A', note: '食物铷' },
  bodyContent: { totalAmount: '360 mg', bloodLevel: '0.2 mmol/L', boneLevel: '—', organDistribution: '肌肉/脑', note: '铷在体内分布' },
  physiologicalFunction: { role: '模拟钾/离子通道', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铷中毒/心律失常', note: '铷的生理功能' },
  medicalApplication: { drugs: ['氯化铷(研究)'], imaging: '⁸²Rb PET', therapy: '⁸²Rb PET心肌灌注显像', diagnosis: '血铷测定', note: '铷的医学应用' },
  toxicityMechanism: { mechanism: '铷替代钾', targetOrgan: '心脏', antidote: '补钾', treatmentNote: '铷中毒处理', note: '⁸²Rb是PET心肌灌注金标准' }
};

P7_BIOMEDICAL[38] = {  // 锶
  essentiality: '可能有益元素',
  dailyIntake: { rda: '2 mg/d', ul: '4 mg/d(补充剂)', note: '食物锶' },
  bodyContent: { totalAmount: '320 mg', bloodLevel: '0.2 μmol/L', boneLevel: '—', organDistribution: '骨骼', note: '锶在体内分布' },
  physiologicalFunction: { role: '模拟钙/骨矿化', enzymes: '无', deficiencySymptoms: '骨量减少(可能)', excessSymptoms: '锶中毒/骨异常', note: '锶的生理功能' },
  medicalApplication: { drugs: ['雷奈酸锶'], imaging: '⁸⁹Sr/⁹⁰Sr', therapy: '⁸⁹Sr治疗骨转移癌疼痛', diagnosis: '血锶测定', note: '锶的医学应用' },
  toxicityMechanism: { mechanism: '锶模拟钙/沉积于骨', targetOrgan: '骨', antidote: '钙剂', treatmentNote: '锶中毒处理', note: '⁸⁹Sr用于骨转移癌镇痛' }
};

P7_BIOMEDICAL[39] = {  // 钇
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '钇在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '钇沉积', note: '钇的生理功能' },
  medicalApplication: { drugs: ['钇-90微球'], imaging: '⁹⁰Y', therapy: '⁹⁰Y微球治疗肝癌(TARE)', diagnosis: '血钇测定', note: '钇的医学应用' },
  toxicityMechanism: { mechanism: '钇沉积于肝/骨', targetOrgan: '肝', antidote: '对症治疗', treatmentNote: '钇中毒处理', note: '⁹⁰Y-树脂微球是肝癌介入治疗' }
};

P7_BIOMEDICAL[40] = {  // 锆
  essentiality: '无毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '骨', note: '锆在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无显著毒性', note: '锆的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '锆植入物', diagnosis: '—', note: '锆的医学应用' },
  toxicityMechanism: { mechanism: '锆低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '锆中毒处理', note: '锆陶瓷用于牙科植入' }
};

P7_BIOMEDICAL[41] = {  // 铌
  essentiality: '无毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '骨', note: '铌在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无显著毒性', note: '铌的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '铌植入物', diagnosis: '—', note: '铌的医学应用' },
  toxicityMechanism: { mechanism: '铌低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '铌中毒处理', note: '铌用于医用合金' }
};

P7_BIOMEDICAL[42] = {  // 钼
  essentiality: '必需微量元素',
  dailyIntake: { rda: '45 μg/d', ul: '2000 μg/d', note: '豆类/谷物' },
  bodyContent: { totalAmount: '约5 mg', bloodLevel: '—', boneLevel: '—', organDistribution: '肝脏/肾脏/骨骼', note: '钼在体内含量低' },
  physiologicalFunction: { role: '黄嘌呤氧化酶/亚硫酸盐氧化酶/醛氧化酶辅基', enzymes: '黄嘌呤氧化酶/亚硫酸盐氧化酶', deficiencySymptoms: '罕见/神经异常/代谢性脑病', excessSymptoms: '铜缺乏(高钼拮抗)', note: '钼是多种氧化酶的辅因子' },
  medicalApplication: { drugs: [], imaging: '⁹⁹ᵐTc(钼锝发生器)', therapy: '钼酸盐治疗亚硫酸盐氧化酶缺乏', diagnosis: '血钼测定/尿钼', note: '⁹⁹Mo/⁹⁹ᵐTc发生器是核医学基础' },
  toxicityMechanism: { mechanism: '高钼干扰铜代谢', targetOrgan: '肝/肾', antidote: '补铜', treatmentNote: '高钼地区动物铜缺乏症', note: '钼-99是核医学最重要的放射性核素母体' }
};

P7_BIOMEDICAL[43] = {  // 锝
  essentiality: '放射性医学元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '甲状腺/胃(显像时)', note: '锝在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射暴露', note: '锝的生理功能' },
  medicalApplication: { drugs: ['⁹⁹ᵐTc化合物'], imaging: '⁹⁹ᵐTc SPECT', therapy: '⁹⁹ᵐTc各种显像', diagnosis: '⁹⁹ᵐTc甲状腺/骨/心显像', note: '锝的医学应用' },
  toxicityMechanism: { mechanism: 'γ辐射内照射', targetOrgan: '甲状腺/骨', antidote: '无', treatmentNote: '锝中毒处理', note: '⁹⁹ᵐTc是全球最常用医学放射性核素' }
};

P7_BIOMEDICAL[44] = {  // 钌
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '肾', note: '钌在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '钌沉积', note: '钌的生理功能' },
  medicalApplication: { drugs: ['KP1339(抗癌研究)'], imaging: '—', therapy: '钌抗癌药物研究', diagnosis: '血钌测定', note: '钌的医学应用' },
  toxicityMechanism: { mechanism: '钌与蛋白质结合', targetOrgan: '肾', antidote: '对症治疗', treatmentNote: '钌中毒处理', note: '钌抗癌药物处于临床试验' }
};

P7_BIOMEDICAL[45] = {  // 铑
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '肾', note: '铑在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铑沉积', note: '铑的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血铑测定', note: '铑的医学应用' },
  toxicityMechanism: { mechanism: '铁低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '铑中毒处理', note: '铑用于催化剂和首饰' }
};

P7_BIOMEDICAL[46] = {  // 钯
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '肾', note: '钯在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '钯过敏', note: '钯的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '钯合金牙科修复', diagnosis: '血钯测定', note: '钯的医学应用' },
  toxicityMechanism: { mechanism: '钯引起接触过敏', targetOrgan: '皮肤', antidote: '对症治疗', treatmentNote: '钯中毒处理', note: '钯合金牙科材料常见过敏' }
};

P7_BIOMEDICAL[47] = {  // 银
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: '5 μg/kg体重/d', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '皮肤/肝', note: '银在体内分布' },
  physiologicalFunction: { role: '抗菌作用', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '银质沉着症/肝损伤', note: '银的生理功能' },
  medicalApplication: { drugs: ['硝酸银/磺胺嘧啶银'], imaging: '—', therapy: '硝酸银烧灼/磺胺嘧啶银烧伤外用', diagnosis: '血银测定', note: '银的医学应用' },
  toxicityMechanism: { mechanism: '银沉积于皮肤/器官', targetOrgan: '皮肤/肝', antidote: '无特效解毒', treatmentNote: '银中毒处理', note: '银纳米粒子毒性研究活跃' }
};

P7_BIOMEDICAL[48] = {  // 镉
  essentiality: '有毒重金属',
  dailyIntake: { rda: '0', ul: '5 μg/g肌酐(尿镉)', note: '食物/吸烟' },
  bodyContent: { totalAmount: '约30 mg', bloodLevel: '<1 μg/L', boneLevel: '—', organDistribution: '肾脏/肝脏', note: '主要蓄积于肾脏' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '肾小管损伤/骨质疏松/痛痛病', note: '镉是WHO优先控制污染物' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '螯合治疗(效果有限)', diagnosis: '尿β₂-微球蛋白/尿镉', note: '镉暴露监测是职业健康重点' },
  toxicityMechanism: { mechanism: '诱导金属硫蛋白/氧化应激/肾小管坏死', targetOrgan: '肾/骨', antidote: 'EDTA(效果有限)', treatmentNote: '镉中毒不可逆', note: '日本痛痛病是镉污染典型事件' }
};

P7_BIOMEDICAL[49] = {  // 铟
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肾/骨', note: '铟在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铟中毒/肺损伤', note: '铟的生理功能' },
  medicalApplication: { drugs: ['¹¹¹In-奥曲肽'], imaging: '¹¹¹In SPECT', therapy: '¹¹¹In-奥曲肽神经内分泌肿瘤显像', diagnosis: '血铟测定', note: '铟的医学应用' },
  toxicityMechanism: { mechanism: '铟损伤肺/肾', targetOrgan: '肺/肾', antidote: '对症治疗', treatmentNote: '铟中毒处理', note: '¹¹¹In-奥曲肽是NET诊断金标准' }
};

P7_BIOMEDICAL[50] = {  // 锡
  essentiality: '可能有益元素',
  dailyIntake: { rda: 'N/A', ul: 'N/A', note: '食物锡' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '骨/肝', note: '锡在体内分布' },
  physiologicalFunction: { role: '可能影响骨骼代谢', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '锡中毒/胃肠刺激', note: '锡的生理功能' },
  medicalApplication: { drugs: ['氟化亚锡'], imaging: '—', therapy: '氟化亚锡牙膏', diagnosis: '血锡测定', note: '锡的医学应用' },
  toxicityMechanism: { mechanism: '有机锡化合物剧毒', targetOrgan: '神经/皮肤', antidote: '对症治疗', treatmentNote: '锡中毒处理', note: '有机锡(三丁基锡)是环境内分泌干扰物' }
};

P7_BIOMEDICAL[51] = {  // 锑
  essentiality: '有毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<1 μg/L', boneLevel: '—', organDistribution: '肝', note: '锑在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '锑中毒/心肌损伤', note: '锑的生理功能' },
  medicalApplication: { drugs: ['酒石酸锑钾(已淘汰)', '葡萄糖酸锑钠'], imaging: '¹²⁴Sb PET', therapy: '葡萄糖酸锑钠治疗利什曼病', diagnosis: '血锑测定', note: '锑的医学应用' },
  toxicityMechanism: { mechanism: '锑干扰酶巯基/心肌毒性', targetOrgan: '心/肝', antidote: '二巯基丙醇', treatmentNote: '锑中毒处理', note: '锑剂曾用于治疗血吸虫病' }
};

P7_BIOMEDICAL[52] = {  // 碲
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肾', note: '碲在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '碲中毒/蒜味口气', note: '碲的生理功能' },
  medicalApplication: { drugs: ['⁵⁰⁵碲(研究)'], imaging: '—', therapy: '无', diagnosis: '血碲测定', note: '碲的医学应用' },
  toxicityMechanism: { mechanism: '碲代谢产生二甲基硒', targetOrgan: '肾', antidote: '对症治疗', treatmentNote: '碲中毒处理', note: '碲中毒特征性蒜味口气' }
};

P7_BIOMEDICAL[53] = {  // 碘
  essentiality: '必需微量元素',
  dailyIntake: { rda: '150 μg/d', ul: '1100 μg/d', note: '海带/碘盐/海产品' },
  bodyContent: { totalAmount: '约15 mg', bloodLevel: '3-6 μg/dL', boneLevel: '—', organDistribution: '甲状腺(70%)', note: '70%集中于甲状腺' },
  physiologicalFunction: { role: '甲状腺激素(T3/T4)合成/基础代谢/神经发育', enzymes: '甲状腺过氧化物酶', deficiencySymptoms: '甲状腺肿/克汀病/智力低下', excessSymptoms: '甲亢/碘性甲状腺肿', note: '碘缺乏是全球可预防智力损害首因' },
  medicalApplication: { drugs: ['碘化钾', '卢戈液', '胺碘酮'], imaging: '¹²³I甲状腺显像', therapy: '¹³¹I治疗甲亢/甲状腺癌', diagnosis: '甲状腺¹³¹I摄取率', note: '¹³¹I是分化型甲状腺癌靶向治疗金标准' },
  toxicityMechanism: { mechanism: '过量碘抑制甲状腺激素合成(Wolff-Chaikoff效应)', targetOrgan: '甲状腺', antidote: '对症治疗', treatmentNote: '核事故碘化钾预防性给药', note: '碘-131是核事故主要内照射核素' }
};

P7_BIOMEDICAL[54] = {  // 氙
  essentiality: '无毒',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '微量', boneLevel: '—', organDistribution: '—', note: '氙为惰性气体' },
  physiologicalFunction: { role: '惰性气体，有麻醉作用', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '氙无生理功能' },
  medicalApplication: { drugs: [], imaging: 'Xe-CT', therapy: '脑', diagnosis: '—', note: '氙气麻醉/Xe-CT脑血流成像' },
  toxicityMechanism: { mechanism: '无毒性', targetOrgan: '无', antidote: '无', treatmentNote: '无', note: '氙为惰性气体' }
};


// ── 第 6 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[55] = {  // 铯
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<1 μg/L', boneLevel: '—', organDistribution: '全身', note: '铯在体内分布' },
  physiologicalFunction: { role: '模拟钾', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铯中毒/心律失常', note: '铯的生理功能' },
  medicalApplication: { drugs: ['氯化铯(癌症替代疗法,已禁用)'], imaging: '¹³¹Cs', therapy: '¹³¹Cs前列腺近距离放疗', diagnosis: '血铯测定', note: '铯的医学应用' },
  toxicityMechanism: { mechanism: '铯模拟钾/影响心肌', targetOrgan: '心脏', antidote: '补钾', treatmentNote: '铯中毒处理', note: '¹³⁷Cs是核事故主要外照射源' }
};

P7_BIOMEDICAL[56] = {  // 钡
  essentiality: '有毒元素',
  dailyIntake: { rda: '0', ul: '0.7 mg/kg体重/d', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.3 μg/L', boneLevel: '—', organDistribution: '骨', note: '钡在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '钡中毒/低钾血症', note: '钡的生理功能' },
  medicalApplication: { drugs: ['硫酸钡(不溶性)'], imaging: '—', therapy: '硫酸钡胃肠道造影', diagnosis: '血钡测定', note: '钡的医学应用' },
  toxicityMechanism: { mechanism: '可溶性钡盐阻断钾通道/低钾', targetOrgan: '心脏/神经', antidote: '硫酸钠/钾剂', treatmentNote: '钡中毒处理', note: '硫酸钡(不溶)安全,可溶性钡盐剧毒' }
};

P7_BIOMEDICAL[57] = {  // 镧
  essentiality: '镧沉积元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '镧在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '镧的生理功能' },
  medicalApplication: { drugs: ['碳酸镧'], imaging: '—', therapy: '碳酸镧结合磷(肾病磷结合剂)', diagnosis: '血镧测定', note: '镧的医学应用' },
  toxicityMechanism: { mechanism: '镧沉积于肝/骨', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '镧中毒处理', note: '碳酸镧是肾病磷结合剂' }
};

P7_BIOMEDICAL[58] = {  // 铈
  essentiality: '铈沉积元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '铈在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '铈的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血铈测定', note: '铈的医学应用' },
  toxicityMechanism: { mechanism: '铈沉积于肝', targetOrgan: '肝', antidote: '对症治疗', treatmentNote: '铈中毒处理', note: '铈化合物用于烧伤敷料' }
};

P7_BIOMEDICAL[59] = {  // 镨
  essentiality: '镨沉积元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '镨在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '镨的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血镨测定', note: '镨的医学应用' },
  toxicityMechanism: { mechanism: '镨低毒', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '镨中毒处理', note: '稀土元素毒性相似' }
};

P7_BIOMEDICAL[60] = {  // 钕
  essentiality: '钕沉积元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '钕在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无', note: '钕的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '钕激光前列腺切除', diagnosis: '血钕测定', note: '钕的医学应用' },
  toxicityMechanism: { mechanism: '钕低毒', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '钕中毒处理', note: 'Nd:YAG激光广泛用于医学' }
};

P7_BIOMEDICAL[61] = {  // 钷
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '钷在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '钷的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '钷的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '钷中毒处理', note: '钷为稀土元素，毒性低' }
};

P7_BIOMEDICAL[62] = {  // 钐
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '钐在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '钐的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '钐的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '钐中毒处理', note: '钐为稀土元素，毒性低' }
};

P7_BIOMEDICAL[63] = {  // 铕
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '铕在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '铕的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '铕的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '铕中毒处理', note: '铕为稀土元素，毒性低' }
};

P7_BIOMEDICAL[64] = {  // 钆
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '钆在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '钆的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '钆的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '钆中毒处理', note: '钆为稀土元素，毒性低' }
};

P7_BIOMEDICAL[65] = {  // 铽
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '铽在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '铽的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '铽的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '铽中毒处理', note: '铽为稀土元素，毒性低' }
};

P7_BIOMEDICAL[66] = {  // 镝
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '镝在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '镝的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '镝的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '镝中毒处理', note: '镝为稀土元素，毒性低' }
};

P7_BIOMEDICAL[67] = {  // 钬
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '钬在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '钬的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '钬的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '钬中毒处理', note: '钬为稀土元素，毒性低' }
};

P7_BIOMEDICAL[68] = {  // 铒
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '铒在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '铒的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '铒的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '铒中毒处理', note: '铒为稀土元素，毒性低' }
};

P7_BIOMEDICAL[69] = {  // 铥
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '铥在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '铥的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '铥的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '铥中毒处理', note: '铥为稀土元素，毒性低' }
};

P7_BIOMEDICAL[70] = {  // 镱
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '镱在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '镱的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '镱的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '镱中毒处理', note: '镱为稀土元素，毒性低' }
};

P7_BIOMEDICAL[71] = {  // 镥
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肝/骨', note: '镥在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '稀土沉积', note: '镥的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血稀土测定', note: '镥的医学应用' },
  toxicityMechanism: { mechanism: '稀土元素沉积', targetOrgan: '肝/骨', antidote: '对症治疗', treatmentNote: '镥中毒处理', note: '镥为稀土元素，毒性低' }
};

P7_BIOMEDICAL[72] = {  // 铪
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '骨', note: '铪在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铪沉积', note: '铪的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血铪测定', note: '铪的医学应用' },
  toxicityMechanism: { mechanism: '铪低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '铪中毒处理', note: '铪用于核反应堆控制棒' }
};

P7_BIOMEDICAL[73] = {  // 钽
  essentiality: '无毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '骨', note: '钽在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '无显著毒性', note: '钽的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '钽植入物/多孔钽人工关节', diagnosis: '—', note: '钽的医学应用' },
  toxicityMechanism: { mechanism: '钽极低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '钽中毒处理', note: '多孔钽是骨科植入新材料' }
};

P7_BIOMEDICAL[74] = {  // 钨
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '骨', note: '钨在体内分布' },
  physiologicalFunction: { role: '可能影响钼代谢', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '钨沉积', note: '钨的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血钨测定', note: '钨的医学应用' },
  toxicityMechanism: { mechanism: '钨拮抗钼/干扰代谢', targetOrgan: '骨', antidote: '对症治疗', treatmentNote: '钨中毒处理', note: '钨替代钼是研究热点' }
};

P7_BIOMEDICAL[75] = {  // 铼
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '甲状腺', note: '铼在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铼沉积', note: '铼的生理功能' },
  medicalApplication: { drugs: ['⁸⁶Re化合物'], imaging: '⁸⁶Re SPECT', therapy: '¹⁸⁸Re放射治疗', diagnosis: '血铼测定', note: '铼的医学应用' },
  toxicityMechanism: { mechanism: '铼模拟锝', targetOrgan: '甲状腺', antidote: '对症治疗', treatmentNote: '铼中毒处理', note: '¹⁸⁸Re用于放射治疗' }
};

P7_BIOMEDICAL[76] = {  // 锇
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '肾', note: '锇在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '四氧化锇毒性', note: '锇的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '血锇测定', note: '锇的医学应用' },
  toxicityMechanism: { mechanism: '四氧化锇强氧化性', targetOrgan: '肺/眼', antidote: '对症治疗', treatmentNote: '锇中毒处理', note: '四氧化锇用于电镜固定' }
};

P7_BIOMEDICAL[77] = {  // 铱
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '肾', note: '铱在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铱沉积', note: '铱的生理功能' },
  medicalApplication: { drugs: ['¹⁹²Ir'], imaging: '¹⁹²Ir', therapy: '¹⁹²Ir近距离放疗', diagnosis: '血铱测定', note: '铱的医学应用' },
  toxicityMechanism: { mechanism: '铱低吸收', targetOrgan: '无', antidote: '对症治疗', treatmentNote: '铱中毒处理', note: '¹⁹²Ir广泛用于近距离放疗' }
};

P7_BIOMEDICAL[78] = {  // 铂
  essentiality: '有毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肾/肝', note: '铂在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铂类肾毒性和神经毒性', note: '铂的生理功能' },
  medicalApplication: { drugs: ['顺铂/卡铂/奥沙利铂'], imaging: '¹⁹⁵Pt', therapy: '顺铂等化疗', diagnosis: '血铂测定', note: '铂的医学应用' },
  toxicityMechanism: { mechanism: '铂与DNA交联/肾小管损伤', targetOrgan: '肾/神经/耳', antidote: '水化/氨磷汀', treatmentNote: '铂中毒处理', note: '顺铂是最常用化疗药之一' }
};

P7_BIOMEDICAL[79] = {  // 金
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.01 μg/L', boneLevel: '—', organDistribution: '皮肤/肾', note: '金在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '金沉积/皮炎', note: '金的生理功能' },
  medicalApplication: { drugs: ['金硫葡萄糖/金诺芬'], imaging: '¹⁹⁸Au', therapy: '¹⁹⁸Au腔内放疗/金制剂治疗类风湿', diagnosis: '血金测定', note: '金的医学应用' },
  toxicityMechanism: { mechanism: '金沉积于皮肤/粘膜', targetOrgan: '皮肤/肾', antidote: '二巯基丙醇', treatmentNote: '金中毒处理', note: '金制剂治疗类风湿关节炎已减少' }
};

P7_BIOMEDICAL[80] = {  // 汞
  essentiality: '有毒重金属',
  dailyIntake: { rda: '0', ul: '1 μg/g肌酐(尿汞)', note: '鱼类/汞蒸气' },
  bodyContent: { totalAmount: '约6 mg', bloodLevel: '<5 μg/L', boneLevel: '—', organDistribution: '脑/肾/毛发', note: '汞可通过血脑屏障' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '神经损伤/肾损伤/水俣病', note: '甲基汞是汞最毒形态' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '螯合治疗(二巯基丙醇/DMSA)', diagnosis: '血汞/尿汞/发汞', note: '汞温度计已全球淘汰' },
  toxicityMechanism: { mechanism: '甲基汞抑制蛋白质巯基/损伤神经元', targetOrgan: '脑/肾/胎儿', antidote: '二巯基丙磺酸钠(DMPS)/DMSA', treatmentNote: '胎儿对甲基汞极敏感', note: '水俣病是汞污染最严重事件' }
};

P7_BIOMEDICAL[81] = {  // 铊
  essentiality: '有毒重金属',
  dailyIntake: { rda: '0', ul: '0.1 μg/L(血铊)', note: '环境污染' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<0.1 μg/L', boneLevel: '—', organDistribution: '肾/肝/毛发', note: '铊可透过血脑屏障' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '脱发/神经损伤/多器官衰竭', note: '铊是剧毒元素' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '普鲁士蓝螯合治疗', diagnosis: '血铊/尿铊', note: '朱令案使铊中毒广为人知' },
  toxicityMechanism: { mechanism: '铊取代钾/干扰Na⁺/K⁺-ATP酶', targetOrgan: '神经/毛发/心', antidote: '普鲁士蓝', treatmentNote: '早期诊断关键', note: '铊毒性高于铅和汞' }
};

P7_BIOMEDICAL[82] = {  // 铅
  essentiality: '有毒重金属',
  dailyIntake: { rda: '0', ul: '0.5 μg/dL(血铅)', note: '无安全阈值' },
  bodyContent: { totalAmount: '约120 mg', bloodLevel: '<5 μg/dL', boneLevel: '70%骨骼', organDistribution: '骨骼(90%)', note: '90%储存于骨骼' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '贫血/神经损伤/肾损伤/儿童智力低下', note: '铅是经典有毒金属' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '螯合治疗(EDTA/二巯基丙醇)', diagnosis: '血铅测定', note: '儿童血铅筛查是公共卫生重点' },
  toxicityMechanism: { mechanism: '抑制δ-ALA脱水酶/铁络合酶/替代钙', targetOrgan: '神经/造血/肾/骨', antidote: 'EDTA/二巯基丁二酸(DMSA)', treatmentNote: '铅中毒神经损伤不可逆', note: '铅中毒是全球公共健康问题' }
};

P7_BIOMEDICAL[83] = {  // 铋
  essentiality: '低毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '微量', bloodLevel: '<1 μg/L', boneLevel: '—', organDistribution: '肾', note: '铋在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '铋脑病(罕见)', note: '铋的生理功能' },
  medicalApplication: { drugs: ['枸橼酸铋钾/次水杨酸铋'], imaging: '—', therapy: '铋剂治疗幽门螺杆菌/腹泻', diagnosis: '血铋测定', note: '铋的医学应用' },
  toxicityMechanism: { mechanism: '铋沉积于肾/脑', targetOrgan: '肾/脑', antidote: '二巯基丙醇', treatmentNote: '铋中毒处理', note: '铋剂是HP根除方案组成部分' }
};

P7_BIOMEDICAL[84] = {  // 钋
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '全身(模拟硫)', note: '钋在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征', note: '钋的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '尿钋测定', note: '钋的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '全身', antidote: '无特效', treatmentNote: '钋中毒处理', note: 'Po-210是已知最毒物质之一' }
};

P7_BIOMEDICAL[85] = {  // 砹
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '甲状腺(模拟碘)', note: '砹在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤', note: '砹的生理功能' },
  medicalApplication: { drugs: ['²¹¹At-抗体'], imaging: '²¹¹At', therapy: '²¹¹At靶向α治疗(研究)', diagnosis: '血砹测定', note: '砹的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射', targetOrgan: '甲状腺', antidote: '无', treatmentNote: '砹中毒处理', note: '²¹¹At靶向α治疗是核医学前沿' }
};

P7_BIOMEDICAL[86] = {  // 氡
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: '100 Bq/m³(室内)', note: '室内通风' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '肺', note: '氡气吸入' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '肺癌', note: '氡是肺癌第二大病因(仅次于吸烟)' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '室内氡检测', note: '地下室和矿井氡浓度高' },
  toxicityMechanism: { mechanism: 'α粒子损伤肺上皮细胞DNA', targetOrgan: '肺', antidote: '无', treatmentNote: '远离氡源/加强通风', note: 'WHO建议室内氡<100 Bq/m³' }
};


// ── 第 7 周期 ────────────────────────────────────────────
P7_BIOMEDICAL[87] = {  // 钫
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '全身(模拟铯)', note: '钫在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤', note: '钫的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '—', note: '钫的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子辐射', targetOrgan: '全身', antidote: '无', treatmentNote: '钫中毒处理', note: '钫半衰期极短，无实际意义' }
};

P7_BIOMEDICAL[88] = {  // 镭
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: '0', note: '无安全暴露水平' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '骨骼(模拟钙)', note: '非人体元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '骨癌/辐射病', note: '镭模拟钙沉积于骨骼' },
  medicalApplication: { drugs: [], imaging: '—', therapy: 'Ra-223治疗骨转移癌', diagnosis: '—', note: '镭女郎事件是放射防护历史转折点' },
  toxicityMechanism: { mechanism: 'α粒子内照射/骨肉瘤', targetOrgan: '骨', antidote: '无', treatmentNote: '镭体内无法有效促排', note: 'Ra-223是治疗前列腺癌骨转移的新药' }
};

P7_BIOMEDICAL[89] = {  // 锕
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '锕在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤', note: '锕的生理功能' },
  medicalApplication: { drugs: ['²²⁵Ac-抗体'], imaging: '²²⁵Ac', therapy: '²²⁵Ac靶向α治疗', diagnosis: '血锕测定', note: '锕的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射', targetOrgan: '骨/肝', antidote: '无', treatmentNote: '锕中毒处理', note: '²²⁵Ac是靶向α治疗前沿核素' }
};

P7_BIOMEDICAL[90] = {  // 钍
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: '0', note: '无安全暴露水平' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '骨骼/肺(暴露后)', note: '非人体元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '肺癌/骨癌', note: '钍是天然放射性元素' },
  medicalApplication: { drugs: [], imaging: '—', therapy: 'Th-227靶向α治疗(研发中)', diagnosis: '尿钍测定', note: '钍造影剂已停用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/网状内皮系统蓄积', targetOrgan: '骨/肝/肺', antidote: '无', treatmentNote: '钍造影剂使用者长期癌症风险', note: '钍-232衰变链含氡' }
};

P7_BIOMEDICAL[91] = {  // 镤
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨', note: '镤在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤', note: '镤的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '—', note: '镤的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子辐射', targetOrgan: '骨', antidote: '无', treatmentNote: '镤中毒处理', note: '镤为铀衰变中间产物' }
};

P7_BIOMEDICAL[92] = {  // 铀
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: '0', note: '无安全暴露水平' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '肾脏/骨骼(暴露后)', note: '非人体元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '肾损伤/癌症', note: '铀是天然放射性元素' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '尿铀测定', note: '贫铀弹使用引发争议' },
  toxicityMechanism: { mechanism: 'α粒子内照射+重金属化学毒性', targetOrgan: '肾/肺/骨', antidote: '碳酸氢钠促排', treatmentNote: '铀的化学毒性比放射毒性更突出', note: '铀矿工肺癌风险显著升高' }
};

P7_BIOMEDICAL[93] = {  // 镎
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '镎在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征/癌症', note: '镎的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '部分核素放射治疗研究', diagnosis: '尿超铀测定', note: '镎的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '镎中毒处理', note: '镎为人造超铀元素，极毒' }
};

P7_BIOMEDICAL[94] = {  // 钚
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: '0', note: '无安全暴露水平' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '骨骼/肝(暴露后)', note: '非人体元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '癌症/辐射病', note: '钚是极毒人造放射性元素' },
  medicalApplication: { drugs: [], imaging: '—', therapy: 'Pu-238 α治疗(研究中)', diagnosis: '尿钚/粪钚测定', note: 'Pu-238用于心脏起搏器电源' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA双链断裂', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '钚体内促排效果有限', note: '钚的放射毒性极高' }
};

P7_BIOMEDICAL[95] = {  // 镅
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '镅在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征/癌症', note: '镅的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '部分核素放射治疗研究', diagnosis: '尿超铀测定', note: '镅的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '镅中毒处理', note: '镅为人造超铀元素，极毒' }
};

P7_BIOMEDICAL[96] = {  // 锔
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '锔在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征/癌症', note: '锔的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '部分核素放射治疗研究', diagnosis: '尿超铀测定', note: '锔的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '锔中毒处理', note: '锔为人造超铀元素，极毒' }
};

P7_BIOMEDICAL[97] = {  // 锫
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '锫在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征/癌症', note: '锫的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '部分核素放射治疗研究', diagnosis: '尿超铀测定', note: '锫的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '锫中毒处理', note: '锫为人造超铀元素，极毒' }
};

P7_BIOMEDICAL[98] = {  // 锎
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '锎在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征/癌症', note: '锎的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '部分核素放射治疗研究', diagnosis: '尿超铀测定', note: '锎的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '锎中毒处理', note: '锎为人造超铀元素，极毒' }
};

P7_BIOMEDICAL[99] = {  // 锿
  essentiality: '放射性极毒元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '骨/肝', note: '锿在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '急性辐射综合征/癌症', note: '锿的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '部分核素放射治疗研究', diagnosis: '尿超铀测定', note: '锿的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子内照射/DNA损伤', targetOrgan: '骨/肝/肺', antidote: 'DTPA螯合', treatmentNote: '锿中毒处理', note: '锿为人造超铀元素，极毒' }
};

P7_BIOMEDICAL[100] = {  // 镄
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '镄在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤(理论)', note: '镄的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '—', note: '镄的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '—', antidote: '无', treatmentNote: '镄中毒处理', note: '镄半衰期极短，无实际医学意义' }
};

P7_BIOMEDICAL[101] = {  // 钔
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '钔在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤(理论)', note: '钔的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '—', note: '钔的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '—', antidote: '无', treatmentNote: '钔中毒处理', note: '钔半衰期极短，无实际医学意义' }
};

P7_BIOMEDICAL[102] = {  // 锘
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '锘在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤(理论)', note: '锘的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '—', note: '锘的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '—', antidote: '无', treatmentNote: '锘中毒处理', note: '锘半衰期极短，无实际医学意义' }
};

P7_BIOMEDICAL[103] = {  // 铹
  essentiality: '放射性危险元素',
  dailyIntake: { rda: '0', ul: 'N/A', note: '非必需' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '—', organDistribution: '—', note: '铹在体内分布' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '辐射损伤(理论)', note: '铹的生理功能' },
  medicalApplication: { drugs: [], imaging: '—', therapy: '无', diagnosis: '—', note: '铹的医学应用' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '—', antidote: '无', treatmentNote: '铹中毒处理', note: '铹半衰期极短，无实际医学意义' }
};

P7_BIOMEDICAL[104] = {  // 𬬻
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬬻为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬬻半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬬻无法在生物体内积累' }
};

P7_BIOMEDICAL[105] = {  // 𬭊
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬭊为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬭊半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬭊无法在生物体内积累' }
};

P7_BIOMEDICAL[106] = {  // 𬭳
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬭳为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬭳半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬭳无法在生物体内积累' }
};

P7_BIOMEDICAL[107] = {  // 𬭛
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬭛为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬭛半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬭛无法在生物体内积累' }
};

P7_BIOMEDICAL[108] = {  // 𬭶
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬭶为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬭶半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬭶无法在生物体内积累' }
};

P7_BIOMEDICAL[109] = {  // 鿏
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '鿏为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '鿏半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '鿏无法在生物体内积累' }
};

P7_BIOMEDICAL[110] = {  // 𬭎
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬭎为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬭎半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬭎无法在生物体内积累' }
};

P7_BIOMEDICAL[111] = {  // 𬬭
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𬬭为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𬬭半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𬬭无法在生物体内积累' }
};

P7_BIOMEDICAL[112] = {  // 鿫
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '鿫为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '鿫半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '鿫无法在生物体内积累' }
};

P7_BIOMEDICAL[113] = {  // 鿭
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '鿭为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '鿭半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '鿭无法在生物体内积累' }
};

P7_BIOMEDICAL[114] = {  // 𫓧
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𫓧为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𫓧半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𫓧无法在生物体内积累' }
};

P7_BIOMEDICAL[115] = {  // 镆
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '镆为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '镆半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '镆无法在生物体内积累' }
};

P7_BIOMEDICAL[116] = {  // 𫟷
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '𫟷为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '𫟷半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '𫟷无法在生物体内积累' }
};

P7_BIOMEDICAL[117] = {  // 鿬
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '鿬为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '鿬半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '鿬无法在生物体内积累' }
};

P7_BIOMEDICAL[118] = {  // 鿫
  essentiality: '人造元素',
  dailyIntake: { rda: '0', ul: '0', note: '非自然存在' },
  bodyContent: { totalAmount: '0', bloodLevel: '0', boneLevel: '0', organDistribution: '无', note: '鿫为超重人造元素' },
  physiologicalFunction: { role: '无生理功能', enzymes: '无', deficiencySymptoms: '无', excessSymptoms: '理论辐射损伤', note: '鿫半衰期极短' },
  medicalApplication: { drugs: [], imaging: '无', therapy: '无', diagnosis: '无', note: '仅在实验室短暂存在' },
  toxicityMechanism: { mechanism: 'α粒子辐射(理论)', targetOrgan: '全身(理论)', antidote: '无', treatmentNote: '无实际暴露场景', note: '鿫无法在生物体内积累' }
};


// ════════════════════════════════════════════════════
//  自动合并到 ELEMENTS
// ════════════════════════════════════════════════════

function mergeP7Biomedical(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;
    if (P7_BIOMEDICAL[z]) {
      el.biomedical = P7_BIOMEDICAL[z];
    }
  }
}

if (typeof ELEMENTS !== 'undefined') {
  mergeP7Biomedical(ELEMENTS);
}
