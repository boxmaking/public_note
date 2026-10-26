/**
 * P7-3：战略资源数据
 * 包含：关键矿产标注、地缘政治风险、供应链分析、替代可行性、战略储备
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P7_STRATEGY = {};

// ════════════════════════════════════════════════════
//  战略资源数据（按 z 索引）
// ════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P7_STRATEGY[1] = {  // 氢
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '氢能是国家能源转型核心' },
  geopolitics: { supplyRisk: '低', countryConcentration: '全球分散', politicalStability: '稳定', riskFactors: '绿氢技术竞争', note: '氢地缘政治分析' },
  supplyChain: { upstream: '天然气/水电', midstream: '蒸汽重整/电解', downstream: '化工/燃料/冶金', bottleneck: '绿氢成本高', note: '氢供应链' },
  substitutability: { substitutes: ['电池(交通)'], substitutionCost: '中', performanceTradeoff: '能量密度折中', substitutionFeasibility: '中', note: '氢替代分析' },
  strategicReserve: { globalReserve: '无限(水)', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '氢能战略各国布局中', note: '氢储备信息' }
};

P7_STRATEGY[2] = {  // 氦
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '氦是不可再生资源，美国曾垄断' },
  geopolitics: { supplyRisk: '高', countryConcentration: '美国(40%)/卡塔尔(25%)/阿尔及利亚(15%)', politicalStability: '一般', riskFactors: '氦-3资源稀缺', note: '氦地缘政治分析' },
  supplyChain: { upstream: '天然气分离', midstream: '液化提纯', downstream: 'MRI/半导体/航天', bottleneck: '天然气氦含量低', note: '氦供应链' },
  substitutability: { substitutes: ['氢(部分应用)'], substitutionCost: '高', performanceTradeoff: '性能折中大', substitutionFeasibility: '低', note: '氦替代分析' },
  strategicReserve: { globalReserve: '约400亿m3', chinaShare: '<1%', staticLife: '约200年', reservePolicy: '美国联邦氦储备已 privatized', note: '氦储备信息' }
};


// ── 第 2 周期 ────────────────────────────────────────────
P7_STRATEGY[3] = {  // 锂
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '锂是新能源时代白色石油' },
  geopolitics: { supplyRisk: '高', countryConcentration: '澳大利亚(50%)/智利(25%)/中国(15%)', politicalStability: '一般', riskFactors: '锂三角水资源问题', note: '锂地缘政治分析' },
  supplyChain: { upstream: '锂辉石/盐湖', midstream: '碳酸锂/氢氧化锂', downstream: '电池/陶瓷/润滑', bottleneck: '高纯氢氧化锂产能', note: '锂供应链' },
  substitutability: { substitutes: ['钠离子电池'], substitutionCost: '中', performanceTradeoff: '能量密度降低', substitutionFeasibility: '中', note: '锂替代分析' },
  strategicReserve: { globalReserve: '约2200万吨(碳酸锂当量)', chinaShare: '约15%', staticLife: '约70年', reservePolicy: '中国锂资源自给率低', note: '锂储备信息' }
};

P7_STRATEGY[4] = {  // 铍
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铍是国防关键材料' },
  geopolitics: { supplyRisk: '高', countryConcentration: '美国(67%)/中国(15%)/莫桑比克(10%)', politicalStability: '一般', riskFactors: '环保限制开采', note: '铍地缘政治分析' },
  supplyChain: { upstream: '绿柱石/硅铍石', midstream: '铍铜合金冶炼', downstream: '航天合金/核反应堆', bottleneck: '铍毒性和环保限制', note: '铍供应链' },
  substitutability: { substitutes: ['钛合金(部分)'], substitutionCost: '高', performanceTradeoff: '性能降低', substitutionFeasibility: '低', note: '铍替代分析' },
  strategicReserve: { globalReserve: '约10万吨', chinaShare: '约3%', staticLife: '约50年', reservePolicy: '美国国防储备', note: '铍储备信息' }
};

P7_STRATEGY[5] = {  // 硼
  criticality: { usgsList: '非关键', euList: '关键原材料(2023新增)', chinaList: '非战略', overallRating: '中', note: '硼是欧盟2023新增关键材料' },
  geopolitics: { supplyRisk: '中', countryConcentration: '土耳其(73%)/美国(15%)/俄罗斯(5%)', politicalStability: '稳定', riskFactors: '硼酸盐产地集中', note: '硼地缘政治分析' },
  supplyChain: { upstream: '硼砂矿', midstream: '硼酸/硼砂生产', downstream: '玻璃/陶瓷/农业', bottleneck: '高品质硼酸', note: '硼供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '硼替代分析' },
  strategicReserve: { globalReserve: '约12亿吨', chinaShare: '约5%', staticLife: '约200年', reservePolicy: '中国硼资源进口依赖度高', note: '硼储备信息' }
};

P7_STRATEGY[6] = {  // 碳
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '中', note: '碳减排重塑能源格局' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国/印度/印尼(煤炭)', politicalStability: '一般', riskFactors: '碳中和政策影响', note: '碳地缘政治分析' },
  supplyChain: { upstream: '煤炭/石油/天然气', midstream: '焦炭/石墨/碳纤维', downstream: '钢铁/化工/电池', bottleneck: '高品质石墨', note: '碳供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '碳替代分析' },
  strategicReserve: { globalReserve: '煤炭约1万亿吨', chinaShare: '约13%', staticLife: '约150年', reservePolicy: '中国煤炭战略储备', note: '碳储备信息' }
};

P7_STRATEGY[7] = {  // 氮
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '氮气资源无限' },
  geopolitics: { supplyRisk: '低', countryConcentration: '空气分离', politicalStability: '稳定', riskFactors: '合成氨技术垄断', note: '氮地缘政治分析' },
  supplyChain: { upstream: '空气', midstream: '空气分离/合成氨', downstream: '化肥/化工/电子', bottleneck: '高品质电子级氮气', note: '氮供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '氮替代分析' },
  strategicReserve: { globalReserve: '无限(空气)', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '合成氨技术是国家粮食安全关键', note: '氮储备信息' }
};

P7_STRATEGY[8] = {  // 氧
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '氧资源无限' },
  geopolitics: { supplyRisk: '低', countryConcentration: '空气分离', politicalStability: '稳定', riskFactors: '无', note: '氧地缘政治分析' },
  supplyChain: { upstream: '空气', midstream: '空气分离', downstream: '医疗/冶金/化工', bottleneck: '无', note: '氧供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '氧替代分析' },
  strategicReserve: { globalReserve: '无限(空气)', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氧储备信息' }
};

P7_STRATEGY[9] = {  // 氟
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '中', note: '中国是全球最大萤石生产消费国' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(55%)/墨西哥(20%)/南非(5%)', politicalStability: '一般', riskFactors: '萤石资源集中', note: '氟地缘政治分析' },
  supplyChain: { upstream: '萤石矿', midstream: '氢氟酸/氟化铝', downstream: '制冷剂/电解铝/半导体', bottleneck: '高品质萤石', note: '氟供应链' },
  substitutability: { substitutes: ['氯(部分应用)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '氟替代分析' },
  strategicReserve: { globalReserve: '约2.4亿吨萤石', chinaShare: '约55%', staticLife: '约80年', reservePolicy: '中国萤石战略保护', note: '氟储备信息' }
};

P7_STRATEGY[10] = {  // 氖
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '中', note: '氖气是半导体供应链关键' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国/美国/俄罗斯', politicalStability: '一般', riskFactors: '半导体光刻气供应链', note: '氖地缘政治分析' },
  supplyChain: { upstream: '空气分离', midstream: '低温精馏', downstream: '半导体光刻/照明', bottleneck: '高纯氖气供应', note: '氖供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '氖替代分析' },
  strategicReserve: { globalReserve: '空气微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氖储备信息' }
};


// ── 第 3 周期 ────────────────────────────────────────────
P7_STRATEGY[11] = {  // 钠
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '钠离子电池是锂电替代方案' },
  geopolitics: { supplyRisk: '低', countryConcentration: '全球广泛', politicalStability: '稳定', riskFactors: '钠资源丰富', note: '钠地缘政治分析' },
  supplyChain: { upstream: '盐湖/海盐', midstream: '电解/化学合成', downstream: '化工/电池/照明', bottleneck: '高纯金属钠', note: '钠供应链' },
  substitutability: { substitutes: ['锂(电池)'], substitutionCost: '低', performanceTradeoff: '性能折中', substitutionFeasibility: '高', note: '钠替代分析' },
  strategicReserve: { globalReserve: '无限(盐)', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '钠储备信息' }
};

P7_STRATEGY[12] = {  // 镁
  criticality: { usgsList: '非关键', euList: '关键原材料(2023新增)', chinaList: '战略性矿产', overallRating: '中', note: '中国镁产业垄断是全球供应链风险' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/俄罗斯(7%)', politicalStability: '一般', riskFactors: '中国镁产业垄断', note: '镁地缘政治分析' },
  supplyChain: { upstream: '菱镁矿/白云石', midstream: '皮江法/电解法', downstream: '汽车/3C/耐火材料', bottleneck: '中国镁产量占比过高', note: '镁供应链' },
  substitutability: { substitutes: ['铝合金(部分)'], substitutionCost: '中', performanceTradeoff: '性能降低', substitutionFeasibility: '中', note: '镁替代分析' },
  strategicReserve: { globalReserve: '约120亿吨', chinaShare: '约85%', staticLife: '约3000年', reservePolicy: '中国镁产业占全球85%', note: '镁储备信息' }
};

P7_STRATEGY[13] = {  // 铝
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '铝是第二大金属材料' },
  geopolitics: { supplyRisk: '中', countryConcentration: '澳大利亚/几内亚/中国', politicalStability: '一般', riskFactors: '铝土矿集中', note: '铝地缘政治分析' },
  supplyChain: { upstream: '铝土矿', midstream: '氧化铝/电解铝', downstream: '建筑/交通/包装', bottleneck: '高品质铝土矿', note: '铝供应链' },
  substitutability: { substitutes: ['镁/碳纤维(部分)'], substitutionCost: '中', performanceTradeoff: '成本/性能折中', substitutionFeasibility: '中', note: '铝替代分析' },
  strategicReserve: { globalReserve: '约300亿吨', chinaShare: '约3%', staticLife: '约100年', reservePolicy: '中国铝土矿进口依赖度高', note: '铝储备信息' }
};

P7_STRATEGY[14] = {  // 硅
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '硅是半导体和光伏产业基础' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(60%)/俄罗斯(10%)/挪威(8%)', politicalStability: '一般', riskFactors: '光伏多晶硅产能集中', note: '硅地缘政治分析' },
  supplyChain: { upstream: '石英砂', midstream: '工业硅/多晶硅', downstream: '半导体/光伏/铝合金', bottleneck: '电子级多晶硅', note: '硅供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '硅替代分析' },
  strategicReserve: { globalReserve: '石英砂丰富', chinaShare: '约60%', staticLife: 'N/A', reservePolicy: '中国光伏硅料产能全球第一', note: '硅储备信息' }
};

P7_STRATEGY[15] = {  // 磷
  criticality: { usgsList: '非关键', euList: '关键原材料(2023新增)', chinaList: '战略性矿产', overallRating: '高', note: '磷肥是粮食安全关键，摩洛哥垄断' },
  geopolitics: { supplyRisk: '中', countryConcentration: '摩洛哥(70%)/中国(5%)/美国(10%)', politicalStability: '一般', riskFactors: '磷肥资源分布极不均', note: '磷地缘政治分析' },
  supplyChain: { upstream: '磷矿石', midstream: '磷肥/磷酸', downstream: '化肥/食品/阻燃剂', bottleneck: '高品质磷矿减少', note: '磷供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '磷替代分析' },
  strategicReserve: { globalReserve: '约710亿吨', chinaShare: '约5%', staticLife: '约300年', reservePolicy: '磷是不可再生资源', note: '磷储备信息' }
};

P7_STRATEGY[16] = {  // 硫
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '硫主要来自石油脱硫' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国/美国/俄罗斯/加拿大', politicalStability: '稳定', riskFactors: '石油脱硫副产品', note: '硫地缘政治分析' },
  supplyChain: { upstream: '石油/天然气/硫矿', midstream: '硫酸/硫磺', downstream: '化肥/化工', bottleneck: '无', note: '硫供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '硫替代分析' },
  strategicReserve: { globalReserve: '丰富', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '硫储备信息' }
};

P7_STRATEGY[17] = {  // 氯
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '氯碱工业是化工基础' },
  geopolitics: { supplyRisk: '低', countryConcentration: '全球广泛', politicalStability: '稳定', riskFactors: '氯碱工业', note: '氯地缘政治分析' },
  supplyChain: { upstream: '食盐', midstream: '电解氯碱', downstream: '化工/水处理/消毒', bottleneck: '无', note: '氯供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '氯替代分析' },
  strategicReserve: { globalReserve: '无限(盐)', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氯储备信息' }
};

P7_STRATEGY[18] = {  // 氩
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '氩资源无限' },
  geopolitics: { supplyRisk: '低', countryConcentration: '空气分离', politicalStability: '稳定', riskFactors: '无', note: '氩地缘政治分析' },
  supplyChain: { upstream: '空气', midstream: '低温精馏', downstream: '焊接保护/半导体', bottleneck: '无', note: '氩供应链' },
  substitutability: { substitutes: ['氮(部分应用)'], substitutionCost: '低', performanceTradeoff: 'N/A', substitutionFeasibility: '高', note: '氩替代分析' },
  strategicReserve: { globalReserve: '无限(空气)', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氩储备信息' }
};


// ── 第 4 周期 ────────────────────────────────────────────
P7_STRATEGY[19] = {  // 钾
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '钾肥是粮食安全三大肥料之一' },
  geopolitics: { supplyRisk: '中', countryConcentration: '加拿大(30%)/俄罗斯(20%)/白俄罗斯(15%)', politicalStability: '一般', riskFactors: '钾肥资源集中', note: '钾地缘政治分析' },
  supplyChain: { upstream: '钾盐矿', midstream: '氯化钾加工', downstream: '钾肥/化工', bottleneck: '高品质钾盐矿', note: '钾供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '钾替代分析' },
  strategicReserve: { globalReserve: '约80亿吨K2O', chinaShare: '约3%', staticLife: '约100年', reservePolicy: '中国钾肥进口依赖度50%+', note: '钾储备信息' }
};

P7_STRATEGY[20] = {  // 钙
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '钙资源丰富' },
  geopolitics: { supplyRisk: '低', countryConcentration: '全球广泛', politicalStability: '稳定', riskFactors: '石灰石丰富', note: '钙地缘政治分析' },
  supplyChain: { upstream: '石灰石', midstream: '石灰/水泥', downstream: '建筑/冶金/化工', bottleneck: '无', note: '钙供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '钙替代分析' },
  strategicReserve: { globalReserve: '极丰富', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '钙储备信息' }
};

P7_STRATEGY[21] = {  // 钪
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钪是稀散元素，价格极高' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(60%)/俄罗斯(15%)/乌克兰(10%)', politicalStability: '一般', riskFactors: '伴生矿提取困难', note: '钪地缘政治分析' },
  supplyChain: { upstream: '钛/稀土伴生矿', midstream: '分离提纯', downstream: '铝合金/燃料电池/照明', bottleneck: '高纯钪产能极低', note: '钪供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '钪替代分析' },
  strategicReserve: { globalReserve: '约200万吨', chinaShare: '约60%', staticLife: 'N/A', reservePolicy: '钪储备稀少', note: '钪储备信息' }
};

P7_STRATEGY[22] = {  // 钛
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '中', note: '钛是航空航天关键材料' },
  geopolitics: { supplyRisk: '中', countryConcentration: '澳大利亚(20%)/南非(15%)/加拿大(10%)/中国', politicalStability: '稳定', riskFactors: '钛白粉和海绵钛', note: '钛地缘政治分析' },
  supplyChain: { upstream: '钛铁矿/金红石', midstream: '氯化法/克罗尔法', downstream: '航空/化工/颜料', bottleneck: '高品质海绵钛', note: '钛供应链' },
  substitutability: { substitutes: ['铝合金(部分)'], substitutionCost: '中', performanceTradeoff: '性能/成本折中', substitutionFeasibility: '中', note: '钛替代分析' },
  strategicReserve: { globalReserve: '约7亿吨TiO2', chinaShare: '约10%', staticLife: '约100年', reservePolicy: '中国海绵钛产能全球第一', note: '钛储备信息' }
};

P7_STRATEGY[23] = {  // 钒
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '中', note: '钒液流电池是大规模储能方向' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(55%)/俄罗斯(25%)/南非(10%)', politicalStability: '一般', riskFactors: '钢铁副产物', note: '钒地缘政治分析' },
  supplyChain: { upstream: '钒钛磁铁矿', midstream: '钒渣提钒', downstream: '钢铁/液流电池/催化', bottleneck: '高纯钒氧化物', note: '钒供应链' },
  substitutability: { substitutes: ['铌(钢铁微合金化)'], substitutionCost: '低', performanceTradeoff: '性能相近', substitutionFeasibility: '高', note: '钒替代分析' },
  strategicReserve: { globalReserve: '约6300万吨', chinaShare: '约55%', staticLife: '约100年', reservePolicy: '中国钒产能全球第一', note: '钒储备信息' }
};

P7_STRATEGY[24] = {  // 铬
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铬是不锈钢关键元素，南非垄断' },
  geopolitics: { supplyRisk: '高', countryConcentration: '南非(40%)/哈萨克斯坦(20%)/印度(15%)', politicalStability: '一般', riskFactors: '铬铁矿集中', note: '铬地缘政治分析' },
  supplyChain: { upstream: '铬铁矿', midstream: '铬铁冶炼', downstream: '不锈钢/电镀/颜料', bottleneck: '高碳铬铁供应', note: '铬供应链' },
  substitutability: { substitutes: ['镍(不锈钢)'], substitutionCost: '高', performanceTradeoff: '成本增加', substitutionFeasibility: '低', note: '铬替代分析' },
  strategicReserve: { globalReserve: '约5.6亿吨', chinaShare: '约1%', staticLife: '约100年', reservePolicy: '中国铬矿进口依赖度95%+', note: '铬储备信息' }
};

P7_STRATEGY[25] = {  // 锰
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '锰是钢铁第四元素，电池需求增长' },
  geopolitics: { supplyRisk: '高', countryConcentration: '南非(30%)/澳大利亚(15%)/加蓬(15%)/中国(10%)', politicalStability: '一般', riskFactors: '锰矿品位下降', note: '锰地缘政治分析' },
  supplyChain: { upstream: '锰矿', midstream: '硅锰/电解锰', downstream: '钢铁/电池', bottleneck: '高品质锰矿', note: '锰供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '锰替代分析' },
  strategicReserve: { globalReserve: '约5.7亿吨', chinaShare: '约10%', staticLife: '约40年', reservePolicy: '中国锰矿进口依赖度70%+', note: '锰储备信息' }
};

P7_STRATEGY[26] = {  // 铁
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '铁矿石是中国钢铁业命脉' },
  geopolitics: { supplyRisk: '低', countryConcentration: '澳大利亚(30%)/巴西(20%)/中国(15%)', politicalStability: '稳定', riskFactors: '铁矿石定价权', note: '铁地缘政治分析' },
  supplyChain: { upstream: '铁矿', midstream: '高炉/电炉炼钢', downstream: '钢铁/基建/机械', bottleneck: '高品质铁矿石', note: '铁供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '铁替代分析' },
  strategicReserve: { globalReserve: '约1800亿吨', chinaShare: '约15%', staticLife: '约70年', reservePolicy: '铁矿石定价权博弈', note: '铁储备信息' }
};

P7_STRATEGY[27] = {  // 钴
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '钴是电池关键材料，刚果金垄断' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '刚果金(70%)/俄罗斯(5%)/澳大利亚(5%)', politicalStability: '不稳定', riskFactors: '刚果金人权和采矿条件', note: '钴地缘政治分析' },
  supplyChain: { upstream: '铜钴伴生矿', midstream: '湿法冶炼', downstream: '电池/超合金/催化剂', bottleneck: '精炼钴产能集中中国', note: '钴供应链' },
  substitutability: { substitutes: ['镍/铁(电池)'], substitutionCost: '高', performanceTradeoff: '能量密度降低', substitutionFeasibility: '中', note: '钴替代分析' },
  strategicReserve: { globalReserve: '约750万吨', chinaShare: '约1%', staticLife: '约50年', reservePolicy: '刚果金供应链风险极高', note: '钴储备信息' }
};

P7_STRATEGY[28] = {  // 镍
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '镍是不锈钢和电池双重需求' },
  geopolitics: { supplyRisk: '中', countryConcentration: '印度尼西亚(35%)/菲律宾(15%)/俄罗斯(10%)', politicalStability: '一般', riskFactors: '印尼出口禁令', note: '镍地缘政治分析' },
  supplyChain: { upstream: '硫化镍矿/红土镍矿', midstream: 'RKEF/湿法', downstream: '不锈钢/电池', bottleneck: '硫酸镍产能', note: '镍供应链' },
  substitutability: { substitutes: ['钴(部分)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '镍替代分析' },
  strategicReserve: { globalReserve: '约9400万吨', chinaShare: '约3%', staticLife: '约40年', reservePolicy: '印尼镍出口政策影响全球', note: '镍储备信息' }
};

P7_STRATEGY[29] = {  // 铜
  criticality: { usgsList: '非关键', euList: '关键原材料(2023新增)', chinaList: '战略性矿产', overallRating: '中', note: '铜矿品位下降是全球性挑战' },
  geopolitics: { supplyRisk: '中', countryConcentration: '智利(25%)/秘鲁(12%)/中国(8%)', politicalStability: '一般', riskFactors: '铜矿品位下降', note: '铜地缘政治分析' },
  supplyChain: { upstream: '铜矿', midstream: '火法/湿法冶炼', downstream: '电力/建筑/电子', bottleneck: '高品质铜精矿', note: '铜供应链' },
  substitutability: { substitutes: ['铝(电力)'], substitutionCost: '中', performanceTradeoff: '电导率降低', substitutionFeasibility: '中', note: '铜替代分析' },
  strategicReserve: { globalReserve: '约8.8亿吨', chinaShare: '约8%', staticLife: '约40年', reservePolicy: '铜是电气化核心金属', note: '铜储备信息' }
};

P7_STRATEGY[30] = {  // 锌
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '锌是第四大金属，镀锌主力' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(30%)/澳大利亚(12%)/秘鲁(10%)', politicalStability: '一般', riskFactors: '锌矿品位下降', note: '锌地缘政治分析' },
  supplyChain: { upstream: '闪锌矿', midstream: '焙烧-蒸馏', downstream: '镀锌/合金/化工', bottleneck: '高品质锌精矿', note: '锌供应链' },
  substitutability: { substitutes: ['铝/镁(镀层)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '锌替代分析' },
  strategicReserve: { globalReserve: '约2.5亿吨', chinaShare: '约30%', staticLife: '约20年', reservePolicy: '中国锌产量全球第一', note: '锌储备信息' }
};

P7_STRATEGY[31] = {  // 镓
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '镓是半导体关键材料，中国垄断' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(80%)/俄罗斯(5%)/乌克兰(5%)', politicalStability: '一般', riskFactors: '伴生矿回收', note: '镓地缘政治分析' },
  supplyChain: { upstream: '铝土矿/锌矿伴生', midstream: '电解/化学提纯', downstream: '半导体/LED/光伏', bottleneck: '高纯镓产能', note: '镓供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '镓替代分析' },
  strategicReserve: { globalReserve: '约100万吨', chinaShare: '约80%', staticLife: 'N/A', reservePolicy: '中国镓产量全球80%+', note: '镓储备信息' }
};

P7_STRATEGY[32] = {  // 锗
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '锗是红外和光纤关键材料' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/俄罗斯(10%)/美国(5%)', politicalStability: '一般', riskFactors: '伴生矿回收', note: '锗地缘政治分析' },
  supplyChain: { upstream: '闪锌矿/煤伴生', midstream: '区域熔炼', downstream: '光纤/红外/太空电池', bottleneck: '高纯锗', note: '锗供应链' },
  substitutability: { substitutes: ['硅(红外窗口)'], substitutionCost: '高', performanceTradeoff: '性能折中', substitutionFeasibility: '低', note: '锗替代分析' },
  strategicReserve: { globalReserve: '约8600吨', chinaShare: '约60%', staticLife: 'N/A', reservePolicy: '中国锗出口管制', note: '锗储备信息' }
};

P7_STRATEGY[33] = {  // 砷
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '中', note: '高纯砷是半导体材料' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(50%)/摩洛哥(15%)/俄罗斯(10%)', politicalStability: '一般', riskFactors: '环保限制', note: '砷地缘政治分析' },
  supplyChain: { upstream: '毒砂/铜金伴生', midstream: '焙烧/提纯', downstream: '半导体/防腐/农药', bottleneck: '高纯砷', note: '砷供应链' },
  substitutability: { substitutes: ['磷(半导体)'], substitutionCost: '中', performanceTradeoff: '晶格失配', substitutionFeasibility: '低', note: '砷替代分析' },
  strategicReserve: { globalReserve: '约100万吨', chinaShare: '约50%', staticLife: '约50年', reservePolicy: '砷的环保限制影响供应', note: '砷储备信息' }
};

P7_STRATEGY[34] = {  // 硒
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '中', note: '硒光伏需求增长' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(30%)/日本(15%)/比利时(10%)', politicalStability: '一般', riskFactors: '铜精炼副产', note: '硒地缘政治分析' },
  supplyChain: { upstream: '铜矿伴生', midstream: '电解精炼副产', downstream: '玻璃/光伏/电子', bottleneck: '高纯硒', note: '硒供应链' },
  substitutability: { substitutes: ['碲(部分)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '硒替代分析' },
  strategicReserve: { globalReserve: '约12万吨', chinaShare: '约30%', staticLife: '约50年', reservePolicy: '硒主要来自铜精炼副产', note: '硒储备信息' }
};

P7_STRATEGY[35] = {  // 溴
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '溴主要来自海水/卤水' },
  geopolitics: { supplyRisk: '低', countryConcentration: '美国(35%)/中国(20%)/以色列(15%)', politicalStability: '稳定', riskFactors: '海水提溴', note: '溴地缘政治分析' },
  supplyChain: { upstream: '卤水/海水', midstream: '吹出法/蒸汽蒸馏', downstream: '阻燃剂/钻井液/医药', bottleneck: '无', note: '溴供应链' },
  substitutability: { substitutes: ['氯(部分)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '溴替代分析' },
  strategicReserve: { globalReserve: '约1亿吨', chinaShare: '约20%', staticLife: 'N/A', reservePolicy: '无', note: '溴储备信息' }
};

P7_STRATEGY[36] = {  // 氪
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '氪资源来自空气分离' },
  geopolitics: { supplyRisk: '低', countryConcentration: '空气分离', politicalStability: '稳定', riskFactors: '无', note: '氪地缘政治分析' },
  supplyChain: { upstream: '空气', midstream: '低温精馏', downstream: '照明/隔热窗', bottleneck: '无', note: '氪供应链' },
  substitutability: { substitutes: ['氩(部分)'], substitutionCost: '中', performanceTradeoff: 'N/A', substitutionFeasibility: '高', note: '氪替代分析' },
  strategicReserve: { globalReserve: '空气微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氪储备信息' }
};


// ── 第 5 周期 ────────────────────────────────────────────
P7_STRATEGY[37] = {  // 铷
  criticality: { usgsList: '关键矿产', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '铷主要用于科研' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(40%)/加拿大(20%)', politicalStability: '一般', riskFactors: '伴生矿', note: '铷地缘政治分析' },
  supplyChain: { upstream: '锂云母/铯榴石', midstream: '分离提纯', downstream: '催化/特种玻璃/科研', bottleneck: '高纯铷', note: '铷供应链' },
  substitutability: { substitutes: ['铯(部分)'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '铷替代分析' },
  strategicReserve: { globalReserve: '约10万吨', chinaShare: '约40%', staticLife: 'N/A', reservePolicy: '铷资源稀少', note: '铷储备信息' }
};

P7_STRATEGY[38] = {  // 锶
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '锶主要用于铁氧体磁体' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(40%)/西班牙(20%)/墨西哥(15%)', politicalStability: '一般', riskFactors: '天青石矿', note: '锶地缘政治分析' },
  supplyChain: { upstream: '天青石/菱锶矿', midstream: '碳锶矿/硝酸锶', downstream: '磁性材料/烟花/电子', bottleneck: '高纯碳酸锶', note: '锶供应链' },
  substitutability: { substitutes: ['钡(铁氧体)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '锶替代分析' },
  strategicReserve: { globalReserve: '约680万吨', chinaShare: '约40%', staticLife: '约30年', reservePolicy: '中国锶矿资源丰富', note: '锶储备信息' }
};

P7_STRATEGY[39] = {  // 钇
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钇是重稀土代表元素' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(40%)/澳大利亚(20%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离', note: '钇地缘政治分析' },
  supplyChain: { upstream: '重稀土矿', midstream: '溶剂萃取', downstream: 'LED/激光/超导', bottleneck: '高纯氧化钇', note: '钇供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '钇替代分析' },
  strategicReserve: { globalReserve: '约54万吨', chinaShare: '约40%', staticLife: 'N/A', reservePolicy: '中国重稀土分离技术领先', note: '钇储备信息' }
};

P7_STRATEGY[40] = {  // 锆
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '中', note: '核级锆是核电关键材料' },
  geopolitics: { supplyRisk: '中', countryConcentration: '澳大利亚(40%)/南非(25%)/中国(10%)', politicalStability: '一般锆英砂', riskFactors: '核级锆分离', note: '锆地缘政治分析' },
  supplyChain: { upstream: '锆英砂', midstream: '氯化法/钠还原', downstream: '核反应堆/陶瓷/铸造', bottleneck: '核级海绵锆', note: '锆供应链' },
  substitutability: { substitutes: ['钛(部分)'], substitutionCost: '高', performanceTradeoff: '核性能要求', substitutionFeasibility: '低', note: '锆替代分析' },
  strategicReserve: { globalReserve: '约6700万吨', chinaShare: '约10%', staticLife: '约60年', reservePolicy: '核级锆技术壁垒高', note: '锆储备信息' }
};

P7_STRATEGY[41] = {  // 铌
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铌铁是钢铁微合金化关键' },
  geopolitics: { supplyRisk: '高', countryConcentration: '巴西(90%)/加拿大(8%)', politicalStability: '稳定', riskFactors: '巴西CBMM垄断', note: '铌地缘政治分析' },
  supplyChain: { upstream: '烧绿石', midstream: '铝热还原', downstream: '钢铁微合金/超导/光学', bottleneck: '高纯铌铁', note: '铌供应链' },
  substitutability: { substitutes: ['钒(钢铁微合金化)'], substitutionCost: '低', performanceTradeoff: '性能相近', substitutionFeasibility: '高', note: '铌替代分析' },
  strategicReserve: { globalReserve: '约430万吨', chinaShare: '约1%', staticLife: '约50年', reservePolicy: '巴西CBMM占全球90%', note: '铌储备信息' }
};

P7_STRATEGY[42] = {  // 钼
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '中', note: '钼主要伴生于铜矿' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(40%)/美国(20%)/智利(15%)', politicalStability: '稳定', riskFactors: '铜钼伴生', note: '钼地缘政治分析' },
  supplyChain: { upstream: '斑岩铜矿伴生', midstream: '焙烧/湿法', downstream: '合金钢/催化剂/润滑', bottleneck: '高品质钼精矿', note: '钼供应链' },
  substitutability: { substitutes: ['钨(部分合金)'], substitutionCost: '中', performanceTradeoff: '性能折中', substitutionFeasibility: '中', note: '钼替代分析' },
  strategicReserve: { globalReserve: '约1900万吨', chinaShare: '约40%', staticLife: '约50年', reservePolicy: '中国钼产量全球第一', note: '钼储备信息' }
};

P7_STRATEGY[43] = {  // 锝
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锝-99m是核医学最重要放射性核素' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锝地缘政治分析' },
  supplyChain: { upstream: '核反应堆/钼-99', midstream: '核废料回收', downstream: '核医学(99mTc)', bottleneck: '钼-99供应链', note: '锝供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锝替代分析' },
  strategicReserve: { globalReserve: 'N/A', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '钼-99/锝-99m发生器', note: '锝储备信息' }
};

P7_STRATEGY[44] = {  // 钌
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钌主要来自铂族金属精炼' },
  geopolitics: { supplyRisk: '高', countryConcentration: '南非(80%)/俄罗斯(10%)/津巴布韦(5%)', politicalStability: '一般', riskFactors: '铂族金属伴生', note: '钌地缘政治分析' },
  supplyChain: { upstream: '铂族矿', midstream: '精炼分离', downstream: '电子/催化/合金', bottleneck: '高纯钌', note: '钌供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '钌替代分析' },
  strategicReserve: { globalReserve: '约5000吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '铂族金属回收率低', note: '钌储备信息' }
};

P7_STRATEGY[45] = {  // 铑
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '铑是铂族金属中最稀缺的' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '南非(80%)/俄罗斯(10%)/津巴布韦(5%)', politicalStability: '一般', riskFactors: '铂族金属伴生/价格极高', note: '铑地缘政治分析' },
  supplyChain: { upstream: '铂族矿', midstream: '精炼分离', downstream: '汽车催化/化工', bottleneck: '高纯铑', note: '铑供应链' },
  substitutability: { substitutes: ['钯(催化)'], substitutionCost: '高', performanceTradeoff: '催化活性降低', substitutionFeasibility: '低', note: '铑替代分析' },
  strategicReserve: { globalReserve: '约3000吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '铑价格波动极大', note: '铑储备信息' }
};

P7_STRATEGY[46] = {  // 钯
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钯是汽车催化剂主力' },
  geopolitics: { supplyRisk: '高', countryConcentration: '俄罗斯(40%)/南非(35%)/加拿大(10%)', politicalStability: '一般', riskFactors: '俄南两国垄断', note: '钯地缘政治分析' },
  supplyChain: { upstream: '铂族矿', midstream: '精炼分离', downstream: '汽车催化/电子/牙科', bottleneck: '高纯钯', note: '钯供应链' },
  substitutability: { substitutes: ['铂(催化)'], substitutionCost: '中', performanceTradeoff: '催化活性折中', substitutionFeasibility: '中', note: '钯替代分析' },
  strategicReserve: { globalReserve: '约70000吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '俄罗斯钯供应是地缘风险', note: '钯储备信息' }
};

P7_STRATEGY[47] = {  // 银
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '光伏银浆需求增长快' },
  geopolitics: { supplyRisk: '低', countryConcentration: '墨西哥(23%)/秘鲁(15%)/中国(13%)', politicalStability: '稳定', riskFactors: '银矿品位下降', note: '银地缘政治分析' },
  supplyChain: { upstream: '银矿/铅锌伴生', midstream: '火法精炼', downstream: '电子/首饰/光伏', bottleneck: '高纯银', note: '银供应链' },
  substitutability: { substitutes: ['铜(电子)'], substitutionCost: '中', performanceTradeoff: '导电性降低', substitutionFeasibility: '中', note: '银替代分析' },
  strategicReserve: { globalReserve: '约53万吨', chinaShare: '约13%', staticLife: '约20年', reservePolicy: '银投资需求大', note: '银储备信息' }
};

P7_STRATEGY[48] = {  // 镉
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '镉使用逐渐被替代' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(30%)/韩国(15%/加拿大(10%)', politicalStability: '稳定', riskFactors: '锌冶炼副产', note: '镉地缘政治分析' },
  supplyChain: { upstream: '锌矿伴生', midstream: '电解/精炼', downstream: '电池/颜料/防腐', bottleneck: '无', note: '镉供应链' },
  substitutability: { substitutes: ['镍镉替代(锂电池)'], substitutionCost: '低', performanceTradeoff: '性能提升', substitutionFeasibility: '高', note: '镉替代分析' },
  strategicReserve: { globalReserve: '约64万吨', chinaShare: '约30%', staticLife: '约30年', reservePolicy: '镉使用受环保限制', note: '镉储备信息' }
};

P7_STRATEGY[49] = {  // 铟
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: 'ITO靶材是铟最大用途' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(40%)/韩国(20%)/日本(10%)', politicalStability: '一般', riskFactors: '锌冶炼副产', note: '铟地缘政治分析' },
  supplyChain: { upstream: '闪锌矿伴生', midstream: '电解精炼', downstream: 'ITO靶材/半导体', bottleneck: '高纯铟', note: '铟供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '铟替代分析' },
  strategicReserve: { globalReserve: '约1.5万吨', chinaShare: '约40%', staticLife: '约20年', reservePolicy: '铟供应依赖锌冶炼', note: '铟储备信息' }
};

P7_STRATEGY[50] = {  // 锡
  criticality: { usgsList: '非关键', euList: '关键原材料(2023新增)', chinaList: '战略性矿产', overallRating: '中', note: '锡是焊料核心材料，电子必需' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(30%)/印度尼西亚(20%)/缅甸(15%)', politicalStability: '一般', riskFactors: '锡矿品位下降', note: '锡地缘政治分析' },
  supplyChain: { upstream: '锡石', midstream: '熔炼精炼', downstream: '焊料/镀层/化工', bottleneck: '高品质焊锡', note: '锡供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '锡替代分析' },
  strategicReserve: { globalReserve: '约430万吨', chinaShare: '约30%', staticLife: '约15年', reservePolicy: '缅甸锡矿供应链风险', note: '锡储备信息' }
};

P7_STRATEGY[51] = {  // 锑
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '锑是战略物资，阻燃剂主力' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(55%)/俄罗斯(20%)/塔吉克斯坦(10%)', politicalStability: '一般', riskFactors: '中国锑出口管制', note: '锑地缘政治分析' },
  supplyChain: { upstream: '辉锑矿', midstream: '焙烧/还原', downstream: '阻燃剂/合金/半导体', bottleneck: '高纯三氧化二锑', note: '锑供应链' },
  substitutability: { substitutes: ['无直接替代'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '锑替代分析' },
  strategicReserve: { globalReserve: '约180万吨', chinaShare: '约55%', staticLife: '约20年', reservePolicy: '中国锑矿资源战略保护', note: '锑储备信息' }
};

P7_STRATEGY[52] = {  // 碲
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '碲化镉光伏是碲最大用途' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(60%)/日本(10%/瑞典(8%)', politicalStability: '一般', riskFactors: '铜精炼副产', note: '碲地缘政治分析' },
  supplyChain: { upstream: '铜矿/铅矿伴生', midstream: '电解精炼副产', downstream: '光伏(CdTe)/合金/电子', bottleneck: '高纯碲', note: '碲供应链' },
  substitutability: { substitutes: ['硒(部分)'], substitutionCost: '高', performanceTradeoff: '性能折中', substitutionFeasibility: '低', note: '碲替代分析' },
  strategicReserve: { globalReserve: '约31000吨', chinaShare: '约60%', staticLife: '约20年', reservePolicy: '碲供应依赖铜精炼', note: '碲储备信息' }
};

P7_STRATEGY[53] = {  // 碘
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '碘供应智利和日本为主' },
  geopolitics: { supplyRisk: '低', countryConcentration: '智利(40%)/日本(30%)/中国(10%)', politicalStability: '稳定', riskFactors: '硝酸盐矿伴生', note: '碘地缘政治分析' },
  supplyChain: { upstream: '硝酸钠矿/海水', midstream: '升华提纯', downstream: '医药/消毒/X光造影', bottleneck: '高纯碘', note: '碘供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '碘替代分析' },
  strategicReserve: { globalReserve: '约1300万吨', chinaShare: '约10%', staticLife: 'N/A', reservePolicy: '碘是医药关键原料', note: '碘储备信息' }
};

P7_STRATEGY[54] = {  // 氙
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '中', note: '氙气稀缺，价格高' },
  geopolitics: { supplyRisk: '中', countryConcentration: '空气分离', politicalStability: '稳定', riskFactors: '氙稀缺', note: '氙地缘政治分析' },
  supplyChain: { upstream: '空气', midstream: '低温精馏', downstream: '照明/医疗/航天', bottleneck: '高纯氙', note: '氙供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '氙替代分析' },
  strategicReserve: { globalReserve: '空气极微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氙储备信息' }
};


// ── 第 6 周期 ────────────────────────────────────────────
P7_STRATEGY[55] = {  // 铯
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铯是原子钟关键材料' },
  geopolitics: { supplyRisk: '高', countryConcentration: '加拿大(50%)/中国(20%)/津巴布韦(10%)', politicalStability: '一般', riskFactors: '铯榴石矿集中', note: '铯地缘政治分析' },
  supplyChain: { upstream: '铯榴石/锂云母', midstream: '分离提纯', downstream: '原子钟/催化/石油钻井', bottleneck: '高纯铯化合物', note: '铯供应链' },
  substitutability: { substitutes: ['铷(部分)'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '铯替代分析' },
  strategicReserve: { globalReserve: '约9万吨', chinaShare: '约20%', staticLife: 'N/A', reservePolicy: '铯榴石仅加拿大大量开采', note: '铯储备信息' }
};

P7_STRATEGY[56] = {  // 钡
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '钡主要用于石油钻井' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(40%)/印度(15%/摩洛哥(10%)', politicalStability: '稳定', riskFactors: '重晶石矿', note: '钡地缘政治分析' },
  supplyChain: { upstream: '重晶石', midstream: '碳钡/硫酸钡', downstream: '石油钻井/化工/医疗', bottleneck: '高品质重晶石', note: '钡供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '钡替代分析' },
  strategicReserve: { globalReserve: '约1.9亿吨', chinaShare: '约40%', staticLife: '约50年', reservePolicy: '重晶石是石油钻井泥浆原料', note: '钡储备信息' }
};

P7_STRATEGY[57] = {  // 镧
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '镧是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '镧地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '镧供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '镧替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '镧储备信息' }
};

P7_STRATEGY[58] = {  // 铈
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铈是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '铈地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '铈供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '铈替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '铈储备信息' }
};

P7_STRATEGY[59] = {  // 镨
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '镨是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '镨地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '镨供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '镨替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '镨储备信息' }
};

P7_STRATEGY[60] = {  // 钕
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钕是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '钕地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '钕供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '钕替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '钕储备信息' }
};

P7_STRATEGY[61] = {  // 钷
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钷是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '钷地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '钷供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '钷替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '钷储备信息' }
};

P7_STRATEGY[62] = {  // 钐
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钐是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '钐地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '钐供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '钐替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '钐储备信息' }
};

P7_STRATEGY[63] = {  // 铕
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铕是轻稀土元素，中国稀土产业主导' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(85%)/澳大利亚(8%)/美国(5%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '铕地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '铕供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '铕替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '铕储备信息' }
};

P7_STRATEGY[64] = {  // 钆
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '钆是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '钆地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '钆供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '钆替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '钆储备信息' }
};

P7_STRATEGY[65] = {  // 铽
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '铽是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '铽地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '铽供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '铽替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '铽储备信息' }
};

P7_STRATEGY[66] = {  // 镝
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '镝是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '镝地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '镝供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '镝替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '镝储备信息' }
};

P7_STRATEGY[67] = {  // 钬
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '钬是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '钬地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '钬供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '钬替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '钬储备信息' }
};

P7_STRATEGY[68] = {  // 铒
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '铒是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '铒地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '铒供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '铒替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '铒储备信息' }
};

P7_STRATEGY[69] = {  // 铥
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '铥是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '铥地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '铥供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '铥替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '铥储备信息' }
};

P7_STRATEGY[70] = {  // 镱
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '镱是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '镱地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '镱供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '镱替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '镱储备信息' }
};

P7_STRATEGY[71] = {  // 镥
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '极高', note: '镥是重稀土元素，中国重稀土产业主导' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '中国(60%)/澳大利亚(15%)/美国(10%)', politicalStability: '一般', riskFactors: '稀土分离技术壁垒', note: '镥地缘政治分析' },
  supplyChain: { upstream: '离子型稀土矿/白云鄂博', midstream: '溶剂萃取分离', downstream: '磁体/催化/抛光/发光/储氢', bottleneck: '高纯单一稀土氧化物', note: '镥供应链' },
  substitutability: { substitutes: ['无直接替代(磁体)'], substitutionCost: '高', performanceTradeoff: '磁性能降低', substitutionFeasibility: '低', note: '镥替代分析' },
  strategicReserve: { globalReserve: '约1.3亿吨REO', chinaShare: '约38%', staticLife: '约1000年', reservePolicy: '中国稀土分离技术全球领先', note: '镥储备信息' }
};

P7_STRATEGY[72] = {  // 铪
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铪来自锆铪分离，产量有限' },
  geopolitics: { supplyRisk: '高', countryConcentration: '澳大利亚(40%)/南非(25%)/中国(15%)', politicalStability: '一般', riskFactors: '锆铪分离技术', note: '铪地缘政治分析' },
  supplyChain: { upstream: '锆英砂伴生', midstream: '溶剂萃取分离', downstream: '核反应堆控制棒/超合金', bottleneck: '核级铪', note: '铪供应链' },
  substitutability: { substitutes: ['银铟镉(控制棒)'], substitutionCost: '高', performanceTradeoff: '中子吸收降低', substitutionFeasibility: '低', note: '铪替代分析' },
  strategicReserve: { globalReserve: '约50万吨', chinaShare: '约15%', staticLife: 'N/A', reservePolicy: '铪是核电安全关键材料', note: '铪储备信息' }
};

P7_STRATEGY[73] = {  // 钽
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钽是电容器关键材料，冲突矿物' },
  geopolitics: { supplyRisk: '极高', countryConcentration: '刚果金(40%)/巴西(20%)/卢旺达(10%)', politicalStability: '不稳定', riskFactors: '冲突矿物问题', note: '钽地缘政治分析' },
  supplyChain: { upstream: '钽铁矿', midstream: '碳热还原/电子束熔炼', downstream: '电容器/超合金/医疗', bottleneck: '高纯钽粉', note: '钽供应链' },
  substitutability: { substitutes: ['陶瓷电容器(部分)'], substitutionCost: '中', performanceTradeoff: '容量/体积折中', substitutionFeasibility: '中', note: '钽替代分析' },
  strategicReserve: { globalReserve: '约12万吨', chinaShare: '<1%', staticLife: '约50年', reservePolicy: '冲突矿物法规(EU/US)', note: '钽储备信息' }
};

P7_STRATEGY[74] = {  // 钨
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '钨是硬质合金核心，中国垄断' },
  geopolitics: { supplyRisk: '高', countryConcentration: '中国(84%)/越南(5%)/俄罗斯(3%)', politicalStability: '一般', riskFactors: '中国钨出口管制', note: '钨地缘政治分析' },
  supplyChain: { upstream: '黑钨矿/白钨矿', midstream: '碳化钨粉/APT', downstream: '硬质合金/工具/军工', bottleneck: '高品质碳化钨', note: '钨供应链' },
  substitutability: { substitutes: ['无直接替代(硬质合金)'], substitutionCost: '高', performanceTradeoff: '硬度/耐磨降低', substitutionFeasibility: '低', note: '钨替代分析' },
  strategicReserve: { globalReserve: '约310万吨', chinaShare: '约84%', staticLife: '约100年', reservePolicy: '中国钨产量全球84%', note: '钨储备信息' }
};

P7_STRATEGY[75] = {  // 铼
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铼是航空发动机涡轮叶片关键' },
  geopolitics: { supplyRisk: '高', countryConcentration: '智利(55%)/美国(15%)/波兰(10%)', politicalStability: '稳定', riskFactors: '铜钼伴生', note: '铼地缘政治分析' },
  supplyChain: { upstream: '铜钼矿伴生', midstream: '溶剂萃取/离子交换', downstream: '超合金(涡轮叶片)/催化', bottleneck: '高纯铼粉', note: '铼供应链' },
  substitutability: { substitutes: ['无直接替代(超合金)'], substitutionCost: '高', performanceTradeoff: '耐温降低', substitutionFeasibility: '低', note: '铼替代分析' },
  strategicReserve: { globalReserve: '约2500吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '铼是最稀散元素之一', note: '铼储备信息' }
};

P7_STRATEGY[76] = {  // 锇
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '锇是铂族金属中最稀缺的' },
  geopolitics: { supplyRisk: '高', countryConcentration: '南非(80%)/俄罗斯(10%)/加拿大(5%)', politicalStability: '一般', riskFactors: '铂族金属伴生', note: '锇地缘政治分析' },
  supplyChain: { upstream: '铂族矿', midstream: '精炼分离', downstream: '电子/催化/合金', bottleneck: '高纯锇', note: '锇供应链' },
  substitutability: { substitutes: ['铱(部分催化)'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '锇替代分析' },
  strategicReserve: { globalReserve: '约500吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '铂族金属回收', note: '锇储备信息' }
};

P7_STRATEGY[77] = {  // 铱
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铱是PEM电解水催化剂关键' },
  geopolitics: { supplyRisk: '高', countryConcentration: '南非(80%)/俄罗斯(10%)', politicalStability: '一般', riskFactors: '铂族金属伴生', note: '铱地缘政治分析' },
  supplyChain: { upstream: '铂族矿', midstream: '精炼分离', downstream: '电解水(PEM)/催化/坩埚', bottleneck: '高纯铱', note: '铱供应链' },
  substitutability: { substitutes: ['无直接替代(PEM电解)'], substitutionCost: '高', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '铱替代分析' },
  strategicReserve: { globalReserve: '约2500吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '绿氢PEM电解铼需求激增', note: '铱储备信息' }
};

P7_STRATEGY[78] = {  // 铂
  criticality: { usgsList: '关键矿产', euList: '关键原材料', chinaList: '战略性矿产', overallRating: '高', note: '铂族金属回收是城市矿产' },
  geopolitics: { supplyRisk: '高', countryConcentration: '南非(75%)/俄罗斯(10%)/津巴布韦(8%)', politicalStability: '一般', riskFactors: '南非垄断', note: '铂地缘政治分析' },
  supplyChain: { upstream: '铂族矿', midstream: '精炼分离', downstream: '汽车催化/首饰/燃料电池', bottleneck: '高纯铂', note: '铂供应链' },
  substitutability: { substitutes: ['钯(柴油催化)'], substitutionCost: '中', performanceTradeoff: '催化活性折中', substitutionFeasibility: '中', note: '铂替代分析' },
  strategicReserve: { globalReserve: '约70000吨', chinaShare: '<1%', staticLife: 'N/A', reservePolicy: '铂族金属战略储备', note: '铂储备信息' }
};

P7_STRATEGY[79] = {  // 金
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '黄金是金融安全战略储备' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(12%)/澳大利亚(10%)/俄罗斯(9%)', politicalStability: '稳定', riskFactors: '各国央行储备', note: '金地缘政治分析' },
  supplyChain: { upstream: '金矿/砂矿', midstream: '氰化/熔炼', downstream: '首饰/投资/电子/货币', bottleneck: '高纯金', note: '金供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '金替代分析' },
  strategicReserve: { globalReserve: '约53000吨', chinaShare: '约12%', staticLife: '约20年', reservePolicy: '各国央行黄金储备', note: '金储备信息' }
};

P7_STRATEGY[80] = {  // 汞
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '汞使用受水俣公约限制' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(85%)/墨西哥(5%)', politicalStability: '一般', riskFactors: '水俣公约限制', note: '汞地缘政治分析' },
  supplyChain: { upstream: '辰砂矿', midstream: '焙烧蒸馏', downstream: '化工(淘汰中)/照明', bottleneck: '无', note: '汞供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '汞替代分析' },
  strategicReserve: { globalReserve: '约60万吨', chinaShare: '约85%', staticLife: 'N/A', reservePolicy: '水俣公约要求淘汰', note: '汞储备信息' }
};

P7_STRATEGY[81] = {  // 铊
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: '低', note: '铊因剧毒使用受限' },
  geopolitics: { supplyRisk: '低', countryConcentration: '全球分散', politicalStability: '稳定', riskFactors: '铜铅锌副产', note: '铊地缘政治分析' },
  supplyChain: { upstream: '铜铅锌矿伴生', midstream: '电解精炼副产', downstream: '电子/光学(限制使用)', bottleneck: '无', note: '铊供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: '低', note: '铊替代分析' },
  strategicReserve: { globalReserve: '约65万吨', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '铊使用受毒性质限制', note: '铊储备信息' }
};

P7_STRATEGY[82] = {  // 铅
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '中', note: '铅酸电池回收率行业最高' },
  geopolitics: { supplyRisk: '低', countryConcentration: '中国(45%)/澳大利亚(15%/美国(10%)', politicalStability: '稳定', riskFactors: '铅酸电池回收率高', note: '铅地缘政治分析' },
  supplyChain: { upstream: '方铅矿', midstream: '焙烧/电解', downstream: '电池/辐射防护/化工', bottleneck: '高纯铅', note: '铅供应链' },
  substitutability: { substitutes: ['锂(电池)'], substitutionCost: '中', performanceTradeoff: '能量密度提升', substitutionFeasibility: '高', note: '铅替代分析' },
  strategicReserve: { globalReserve: '约8900万吨', chinaShare: '约45%', staticLife: '约20年', reservePolicy: '铅酸电池回收率>95%', note: '铅储备信息' }
};

P7_STRATEGY[83] = {  // 铋
  criticality: { usgsList: '关键矿产(潜在)', euList: '非关键', chinaList: '非战略', overallRating: '中', note: '铋是铅的环保替代材料' },
  geopolitics: { supplyRisk: '中', countryConcentration: '中国(80%)/越南(5%)/墨西哥(5%)', politicalStability: '一般', riskFactors: '铅锌副产', note: '铋地缘政治分析' },
  supplyChain: { upstream: '铅锌矿伴生', midstream: '电解精炼', downstream: '冶金/医药/电子', bottleneck: '高纯铋', note: '铋供应链' },
  substitutability: { substitutes: ['铅(部分)'], substitutionCost: '低', performanceTradeoff: '铋更环保', substitutionFeasibility: '高', note: '铋替代分析' },
  strategicReserve: { globalReserve: '约33万吨', chinaShare: '约80%', staticLife: 'N/A', reservePolicy: '铋被称为绿色金属替代铅', note: '铋储备信息' }
};

P7_STRATEGY[84] = {  // 钋
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '钋无战略资源意义' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '放射性元素', note: '钋地缘政治分析' },
  supplyChain: { upstream: '铀矿衰变', midstream: '核化学分离', downstream: '无工业应用', bottleneck: 'N/A', note: '钋供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '钋替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '钋储备信息' }
};

P7_STRATEGY[85] = {  // 砹
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '砹无战略资源意义' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '砹地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核医学研究', bottleneck: 'N/A', note: '砹供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '砹替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '砹储备信息' }
};

P7_STRATEGY[86] = {  // 氡
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '氡是室内放射性危害源' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '放射性气体', note: '氡地缘政治分析' },
  supplyChain: { upstream: '铀/镭衰变', midstream: '无', downstream: '无工业应用', bottleneck: 'N/A', note: '氡供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '氡替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '氡储备信息' }
};


// ── 第 7 周期 ────────────────────────────────────────────
P7_STRATEGY[87] = {  // 钫
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '钫无战略资源意义' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '钫地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '无', downstream: '无', bottleneck: 'N/A', note: '钫供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '钫替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '钫储备信息' }
};

P7_STRATEGY[88] = {  // 镭
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '镭无战略资源意义' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '放射性元素', note: '镭地缘政治分析' },
  supplyChain: { upstream: '铀矿伴生', midstream: '核化学', downstream: '医疗(已淘汰)', bottleneck: 'N/A', note: '镭供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '镭替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '镭储备信息' }
};

P7_STRATEGY[89] = {  // 锕
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锕-225是靶向α治疗前沿' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锕地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '靶向α治疗研究', bottleneck: 'N/A', note: '锕供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锕替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '锕储备信息' }
};

P7_STRATEGY[90] = {  // 钍
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '高', note: '钍基熔盐堆是第四代核电方向' },
  geopolitics: { supplyRisk: '中', countryConcentration: '印度(25%)/巴西(15%)/澳大利亚(10%)', politicalStability: '一般', riskFactors: '钍作为潜在核燃料', note: '钍地缘政治分析' },
  supplyChain: { upstream: '独居石/钍矿', midstream: '核化学分离', downstream: '核燃料(钍反应堆研究)', bottleneck: '钍分离技术', note: '钍供应链' },
  substitutability: { substitutes: ['铀(核燃料)'], substitutionCost: '高', performanceTradeoff: '技术不成熟', substitutionFeasibility: '低', note: '钍替代分析' },
  strategicReserve: { globalReserve: '约600万吨', chinaShare: '约5%', staticLife: 'N/A', reservePolicy: '钍反应堆中国研发领先', note: '钍储备信息' }
};

P7_STRATEGY[91] = {  // 镤
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '镤无战略资源意义' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '放射性元素', note: '镤地缘政治分析' },
  supplyChain: { upstream: '铀矿衰变', midstream: '核化学', downstream: '无', bottleneck: 'N/A', note: '镤供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '镤替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '无', note: '镤储备信息' }
};

P7_STRATEGY[92] = {  // 铀
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '战略性矿产', overallRating: '极高', note: '铀是核电核心燃料' },
  geopolitics: { supplyRisk: '高', countryConcentration: '哈萨克斯坦(40%)/加拿大(15%)/纳米比亚(10%)', politicalStability: '一般', riskFactors: '核电燃料需求', note: '铀地缘政治分析' },
  supplyChain: { upstream: '铀矿(沥青铀矿)', midstream: '水冶/浓缩', downstream: '核电/核武器', bottleneck: '铀浓缩技术', note: '铀供应链' },
  substitutability: { substitutes: ['钍(潜在)'], substitutionCost: '高', performanceTradeoff: '技术不成熟', substitutionFeasibility: '低', note: '铀替代分析' },
  strategicReserve: { globalReserve: '约570万吨U3O8', chinaShare: '约4%', staticLife: '约90年', reservePolicy: '各国核燃料循环战略', note: '铀储备信息' }
};

P7_STRATEGY[93] = {  // 镎
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '镎为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '镎地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '镎供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '镎替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '镎储备信息' }
};

P7_STRATEGY[94] = {  // 钚
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '钚为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '钚地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '钚供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '钚替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '钚储备信息' }
};

P7_STRATEGY[95] = {  // 镅
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '镅为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '镅地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '镅供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '镅替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '镅储备信息' }
};

P7_STRATEGY[96] = {  // 锔
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锔为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锔地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '锔供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锔替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '锔储备信息' }
};

P7_STRATEGY[97] = {  // 锫
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锫为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锫地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '锫供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锫替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '锫储备信息' }
};

P7_STRATEGY[98] = {  // 锎
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锎为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锎地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '锎供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锎替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '锎储备信息' }
};

P7_STRATEGY[99] = {  // 锿
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锿为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锿地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '锿供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锿替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '锿储备信息' }
};

P7_STRATEGY[100] = {  // 镄
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '镄为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '镄地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '镄供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '镄替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '镄储备信息' }
};

P7_STRATEGY[101] = {  // 钔
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '钔为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '钔地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '钔供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '钔替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '钔储备信息' }
};

P7_STRATEGY[102] = {  // 锘
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '锘为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '锘地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '锘供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '锘替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '锘储备信息' }
};

P7_STRATEGY[103] = {  // 铹
  criticality: { usgsList: '非关键', euList: '非关键', chinaList: '非战略', overallRating: 'N/A', note: '铹为人造超铀元素，核废料管理对象' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: 'N/A', politicalStability: 'N/A', riskFactors: '人造元素', note: '铹地缘政治分析' },
  supplyChain: { upstream: '核反应', midstream: '核化学', downstream: '核武器/核医学(部分)', bottleneck: 'N/A', note: '铹供应链' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '铹替代分析' },
  strategicReserve: { globalReserve: '微量', chinaShare: 'N/A', staticLife: 'N/A', reservePolicy: '核废料管理', note: '铹储备信息' }
};

P7_STRATEGY[104] = {  // Rf
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Rf为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[105] = {  // Db
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Db为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[106] = {  // Sg
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Sg为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[107] = {  // Bh
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Bh为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[108] = {  // Hs
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Hs为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[109] = {  // Mt
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Mt为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[110] = {  // Ds
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Ds为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[111] = {  // Rg
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Rg为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[112] = {  // Cn
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Cn为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[113] = {  // Nh
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Nh为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[114] = {  // Fl
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Fl为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[115] = {  // Mc
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Mc为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[116] = {  // Lv
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Lv为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[117] = {  // Ts
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Ts为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};

P7_STRATEGY[118] = {  // Og
  criticality: { usgsList: 'N/A', euList: 'N/A', chinaList: 'N/A', overallRating: '无实际战略价值', note: 'Og为人造超重元素，半衰期极短' },
  geopolitics: { supplyRisk: 'N/A', countryConcentration: '仅实验室合成', politicalStability: 'N/A', riskFactors: '无', note: '无实际供应链' },
  supplyChain: { upstream: '核反应合成', midstream: '粒子加速器', downstream: '纯科研', bottleneck: '合成难度极高', note: '仅存在于实验室' },
  substitutability: { substitutes: ['无'], substitutionCost: 'N/A', performanceTradeoff: 'N/A', substitutionFeasibility: 'N/A', note: '无应用无需替代' },
  strategicReserve: { globalReserve: '0', chinaShare: '0', staticLife: 'N/A', reservePolicy: '无', note: '无法储存' }
};


// ════════════════════════════════════════════════════
//  自动合并到 ELEMENTS
// ════════════════════════════════════════════════════

function mergeP7Strategy(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;
    if (P7_STRATEGY[z]) {
      el.strategy = P7_STRATEGY[z];
    }
  }
}

if (typeof ELEMENTS !== 'undefined') {
  mergeP7Strategy(ELEMENTS);
}
