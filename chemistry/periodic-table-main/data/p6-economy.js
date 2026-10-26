/**
 * P6 市场经济数据 — 独立数据文件
 * 加载方式：<script src="data/p6-economy.js"></script>
 *
 * 数据来源:
 *   USGS Minerals Commodity Summaries 2024
 *   London Metal Exchange (LME) / 上海期货交易所(SHFE)
 *   S&P Global Commodity Insights
 *   World Bank Commodity Markets
 *   Roskill / Wood Mackenzie 行业报告
 *   各公司年报与公开数据
 *
 * 注意: 价格数据为近似值(~)，市场价格随时变动。
 *       本文件重点关注供应链结构、企业格局和趋势分析。
 */

const P6_ECONOMY = {};

P6_ECONOMY['H'] = {
  pricing: {
    currentPrice: '~$2/公斤(绿氢) / ~$1.5/公斤(灰氢)',
    priceUnit: 'USD/公斤',
    exchange: '现货/长期合同',
    fiveYearTrend: '绿氢成本下降中',
    tenYearTrend: '因应用而异',
    priceDrivers: ["化工原料(氨/甲醇)", "氢燃料电池", "炼油加氢脱硫", "绿色钢铁"],
    note: '氢是未来清洁能源载体，绿氢是脱碳关键'
  },
  topProducers: [{ rank: 1, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '中石化', country: '中国', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Praxair', country: '美国', marketShare: '~6%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '天然气重整(灰氢) / 电解水(绿氢) / 工业副产氢',
    midstream: '制氢→压缩/液化→储运(管道/槽车)',
    downstream: '合成氨(50%)、炼油(20%)、甲醇(10%)、燃料电池(5%)、冶金(5%)',
    bottleneck: '绿氢成本高(电解槽+绿电)，储运基础设施不足',
    note: '氢产业链：合成氨(50%)、炼油(20%)、甲醇(10%)、燃料电池(5%)、冶金(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '2024-2025年绿氢项目加速落地，成本下降',
    longTerm: '2050年绿氢有望占氢供应50%+',
    keyDrivers: ["绿氢成本降至$2/kg以下", "氢燃料电池汽车", "绿色钢铁(氢直接还原铁)", "氨/甲醇合成"],
    riskFactors: ["绿电成本波动", "储氢技术瓶颈", "与电气化竞争"],
    note: '氢被欧盟、美国列为关键清洁能源载体'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氢战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氢被欧盟、美国列为关键清洁能源载体'
  }
};

P6_ECONOMY['He'] = {
  pricing: {
    currentPrice: '~$7/立方米(高纯氦)',
    priceUnit: 'USD/立方米',
    exchange: '美国Bureau of Land Management(BLM)氦气拍卖 / 现货市场',
    fiveYearTrend: '持续上涨(2019:$3→2022:$8→2024:$7)',
    tenYearTrend: '长期短缺推动价格上涨',
    priceDrivers: ['天然气提氦供应(氦为天然气副产)', '半导体/光纤需求', 'MRI需求', '美国联邦氦储备出售完毕'],
    note: '氦是稀缺战略资源，从含氦天然气中提取'
  },
  topProducers: [
    { rank: 1, company: 'RasGas/Qatargas', country: '卡塔尔', marketShare: '~30%', annualCapacity: '~6,000万立方米' },
    { rank: 2, company: 'ExxonMobil', country: '美国', marketShare: '~20%', annualCapacity: '~4,000万立方米' },
    { rank: 3, company: 'Linde/Praxair', country: '美国/德国', marketShare: '~15%', annualCapacity: '~3,000万立方米' },
    { rank: 4, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: '~2,000万立方米' },
    { rank: 5, company: 'Gazprom', country: '俄罗斯', marketShare: '~8%', annualCapacity: '~1,500万立方米' }
  ],
  supplyChain: {
    upstream: '含氦天然气开采(美国、卡塔尔、阿尔及利亚、俄罗斯)',
    midstream: '天然气分离→提氦→液化(-269°C)→储运',
    downstream: 'MRI(30%)、半导体制造(20%)、光纤(10%)、焊接(10%)、气球/飞艇(5%)',
    bottleneck: '氦只能从含氦天然气提取，供应极度集中，不可再生',
    note: '全球年产氦气约1.6亿立方米，美国+卡塔尔占60%+'
  },
  substitutes: [
    { material: '氢气(飞艇)', costComparison: '成本更低', performanceComparison: '有可燃风险', note: '仅在浮力气体领域可替代' },
    { material: '氩气(焊接保护)', costComparison: '成本更低', performanceComparison: '保护效果略差', note: '在部分焊接领域替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年供应偏紧，卡塔尔新产能缓解',
    longTerm: '半导体和MRI需求持续增长，长期供应紧张',
    keyDrivers: ['半导体制造需求', 'MRI设备增长', '太空探索(加压)', '量子计算'],
    riskFactors: ['新含氦气田发现', '回收技术进步', '天然气产量下降'],
    note: '氦被美国、欧盟、日本列为关键矿物，战略稀缺资源'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: 'BLM联邦氦储备(已出售)', note: '2018年完成私有化' },
      { country: '日本', policy: 'JOGMEC氦气储备', note: '进口依赖>90%' },
      { country: '中国', policy: '氦气战略储备(建设中)', note: '进口依赖度>95%' }
    ],
    note: '氦被多国列为关键战略物资，供应链高度集中'
  }
};

P6_ECONOMY['Li'] = {
  pricing: {
    currentPrice: '~$15,000/吨(碳酸锂当量)',
    priceUnit: 'USD/吨',
    exchange: '伦敦金属交易所(LME) / 广期所(碳酸锂期货)',
    fiveYearTrend: '暴涨暴跌(2019:$10,000→2022:$80,000→2024:$15,000)',
    tenYearTrend: '新能源革命驱动，波动极大',
    priceDrivers: ['电动车电池需求(占锂消费70%)', '中国盐湖/锂辉石产量', '南美锂三角产量', '电池库存周期'],
    note: '锂被称为"白色石油"，是锂电池核心材料'
  },
  topProducers: [
    { rank: 1, company: 'SQM(智利化工矿业)', country: '智利', marketShare: '~17%', annualCapacity: '~18万吨LCE' },
    { rank: 2, company: 'Albemarle(雅保)', country: '美国', marketShare: '~15%', annualCapacity: '~16万吨LCE' },
    { rank: 3, company: '天齐锂业', country: '中国', marketShare: '~12%', annualCapacity: '~13万吨LCE' },
    { rank: 4, company: '赣锋锂业', country: '中国', marketShare: '~10%', annualCapacity: '~11万吨LCE' },
    { rank: 5, company: 'Pilbara Minerals', country: '澳大利亚', marketShare: '~6%', annualCapacity: '~7万吨LCE' }
  ],
  supplyChain: {
    upstream: '锂矿开采(澳大利亚锂辉石、智利/阿根廷盐湖锂、中国锂云母)',
    midstream: '精矿→碳酸锂/氢氧化锂→正极材料',
    downstream: '动力电池(70%)、储能(15%)、陶瓷玻璃(5%)、润滑脂(3%)',
    bottleneck: '盐湖提锂周期长，锂辉石品位下降，冶炼产能集中在中国(占70%)',
    note: '全球锂资源量约8,900万吨LCE，中国掌握70%冶炼产能'
  },
  substitutes: [
    { material: '钠离子电池', costComparison: '钠盐成本远低于锂盐', performanceComparison: '能量密度略低，但低温性能好', note: '在低端EV和储能领域替代锂电池' },
    { material: '氢燃料电池', costComparison: '系统成本高', performanceComparison: '零排放，续航长', note: '在重卡领域替代锂电池' }
  ],
  forecast: {
    shortTerm: '2024-2025年供应过剩，价格筑底',
    longTerm: '电动车渗透率持续提升，2027年后可能再趋紧',
    keyDrivers: ['全球电动车渗透率突破20%', '储能市场爆发', '固态电池量产', '中国锂电产业链优势'],
    riskFactors: ['钠离子电池替代', '回收锂供应增加', '政策补贴退坡'],
    note: '锂资源争夺已成为大国博弈焦点'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '国家物资储备局储备碳酸锂', note: '战略新能源物资' },
      { country: '智利', policy: '国家锂战略', note: '将锂列为国家战略资源' },
      { country: '玻利维亚', policy: '国家控制锂开发', note: '锂资源量全球第一但开发滞后' }
    ],
    note: '锂被美国、欧盟、中国列为关键矿物，战略地位极高'
  }
};

P6_ECONOMY['Be'] = {
  pricing: {
    currentPrice: '~$800/公斤(铍锭)',
    priceUnit: 'USD/公斤',
    exchange: '战略材料直接交易',
    fiveYearTrend: '稳定偏高',
    tenYearTrend: '因应用而异',
    priceDrivers: ["航空航天(铍合金)", "核反应堆(反射层)", "半导体设备(X射线窗口)"],
    note: '铍是极轻高强金属，航空航天和核工业战略材料'
  },
  topProducers: [{ rank: 1, company: 'Materion(原Brush Wellman)', country: '美国', marketShare: '~60%', annualCapacity: 'N/A' }, { rank: 2, company: 'Ulba', country: '哈萨克斯坦', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: '中国铍业', country: '中国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '印度铍', country: '印度', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: '俄罗斯', country: '俄罗斯', marketShare: '~3%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '绿柱石/硅铍石开采',
    midstream: '湿法冶炼→铍铜合金/铍金属',
    downstream: '铍铜合金(70%:电子连接器)、航空航天(15%)、核工业(10%)',
    bottleneck: '铍有剧毒，开采加工受限，Materion垄断60%供应',
    note: '铍产业链：铍铜合金(70%:电子连接器)、航空航天(15%)、核工业(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '航空航天需求增长',
    longTerm: '半导体设备(精密X射线窗口)需求增长',
    keyDrivers: ["航空航天(卫星/导弹)", "5G/6G电子连接器", "核反应堆", "半导体设备"],
    riskFactors: ["铍毒性环保限制", "替代材料(铝铍合金)"],
    note: '铍被美国列为国防关键战略物资'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铍战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铍被美国列为国防关键战略物资'
  }
};

P6_ECONOMY['B'] = {
  pricing: {
    currentPrice: '~$800/吨(硼砂)',
    priceUnit: 'USD/吨',
    exchange: '化工现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["玻璃纤维", "硼硅玻璃", "陶瓷", "农业(硼肥)", "半导体(硼掺杂)"],
    note: '硼是玻璃纤维和硼硅玻璃关键元素，也在半导体中用于掺杂'
  },
  topProducers: [{ rank: 1, company: 'Eti Maden', country: '土耳其', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: 'Rio Tinto', country: '美国/澳大利亚', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'Quiborax', country: '智利', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 4, company: '硼海化工', country: '中国', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: 'Borax Argentina', country: '阿根廷', marketShare: '~3%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '硼矿开采(土耳其占60%储量、美国、中国、智利)',
    midstream: '硼矿→硼砂/硼酸→硼化合物',
    downstream: '玻璃纤维(35%)、硼硅玻璃(20%)、陶瓷(15%)、农业(10%)、洗涤剂(5%)',
    bottleneck: '土耳其占全球硼矿储量60%，供应集中',
    note: '硼产业链：玻璃纤维(35%)、硼硅玻璃(20%)、陶瓷(15%)、农业(10%)、洗涤剂(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '玻璃纤维和风电叶片需求拉动',
    longTerm: '半导体(硼掺杂)和新能源需求增长',
    keyDrivers: ["玻璃纤维(风电叶片)", "硼硅玻璃(太阳能盖板)", "半导体硼掺杂", "磁体(NdFeB添加硼)"],
    riskFactors: ["土耳其供应风险", "替代材料"],
    note: '硼被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '硼战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '硼被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['C'] = {
  pricing: {
    currentPrice: '~$80/吨(CO2碳排放配额) / ~$500/吨(天然石墨)',
    priceUnit: 'USD/吨',
    exchange: '欧盟ETS / 中国碳市场 / 英国金属导报(石墨)',
    fiveYearTrend: '碳价格持续上涨(2019:$25→2022:$100→2024:$80)',
    tenYearTrend: '碳定价机制加速推进，石墨需求爆发',
    priceDrivers: ['碳交易市场(ETS)', '钢铁/水泥/化工脱碳', '电池石墨负极需求', '钻石培育'],
    note: '碳市场是全球最大新兴商品市场，石墨是电池负极核心材料'
  },
  topProducers: [
    { rank: 1, company: '中国石墨集团/多家', country: '中国', marketShare: '~65%(天然石墨)', annualCapacity: '~70万吨' },
    { rank: 2, company: 'Syrah Resources', country: '澳大利亚', marketShare: '~8%', annualCapacity: '~5万吨' },
    { rank: 3, company: 'BTR New Material', country: '中国', marketShare: '~15%(人造石墨)', annualCapacity: '~20万吨' },
    { rank: 4, company: 'Imerys', country: '法国', marketShare: '~5%', annualCapacity: '~4万吨' },
    { rank: 5, company: 'Eagle Graphite', country: '加拿大', marketShare: '~2%', annualCapacity: '~1.5万吨' }
  ],
  supplyChain: {
    upstream: '石墨矿开采(中国、莫桑比克、巴西、马达加斯加) / CO2排放配额',
    midstream: '石墨精矿→球形化→包覆(电池负极) / 碳交易结算',
    downstream: '电池负极(60%:石墨)、钢铁(15%)、碳纤维(5%)、碳交易(减排)',
    bottleneck: '高纯球形石墨产能集中在中国，碳市场覆盖面扩大',
    note: '全球天然石墨年产量约130万吨，中国占65%+'
  },
  substitutes: [
    { material: '硅碳复合负极', costComparison: '成本更高', performanceComparison: '能量密度更高', note: '在高端电池中部分替代石墨' },
    { material: '硬碳', costComparison: '成本相近', performanceComparison: '适合钠离子电池', note: '钠电池负极替代石墨' }
  ],
  forecast: {
    shortTerm: '2024-2025年电池石墨需求持续增长，碳市场扩容',
    longTerm: '碳定价覆盖全球50%+排放，石墨需求倍增',
    keyDrivers: ['EV电池负极需求', '碳交易市场扩大', '碳纤维轻量化', 'CCUS碳捕集'],
    riskFactors: ['硅碳负极替代', '碳市场政策变化', '石墨回收'],
    note: '碳定价+石墨负极是碳经济两大支柱'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '石墨开采总量控制+碳市场(全国ETS)', note: '石墨被列为战略矿种' },
      { country: '美国', policy: '国防储备库石墨储备', note: '列为关键矿物' },
      { country: '欧盟', policy: '欧盟ETS碳市场+CBAM碳关税', note: '碳定价核心推动者' }
    ],
    note: '石墨被美国、欧盟列为关键矿物，碳市场是全球新兴最大商品市场'
  }
};

P6_ECONOMY['N'] = {
  pricing: {
    currentPrice: '~$0.3/立方米(液氮)',
    priceUnit: 'USD/立方米',
    exchange: '工业气体长期合同',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["化肥(合成氨)", "工业气体", "食品冷冻", "电子制造"],
    note: '氮气是最大宗工业气体，合成氨是最大用途'
  },
  topProducers: [{ rank: 1, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '大阳日酸', country: '日本', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Praxair', country: '美国', marketShare: '~6%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '空气分离(低温精馏)',
    midstream: '空分→液化→储运(管道/槽车)',
    downstream: '合成氨/化肥(70%)、工业惰性气氛(15%)、食品冷冻(5%)、电子(5%)',
    bottleneck: '空分装置高耗电，合成氨需要天然气(灰氨)或绿氢(绿氨)',
    note: '氮产业链：合成氨/化肥(70%)、工业惰性气氛(15%)、食品冷冻(5%)、电子(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '合成氨需求稳定，绿氨项目增长',
    longTerm: '绿氨作为氢载体和零碳燃料需求增长',
    keyDrivers: ["粮食安全(化肥)", "绿氨(氢载体)", "船用燃料(氨燃料)", "工业惰性气氛"],
    riskFactors: [],
    note: '氮为大气主要成分(78%)，无战略储备需求'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氮战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氮为大气主要成分(78%)，无战略储备需求'
  }
};

P6_ECONOMY['O'] = {
  pricing: {
    currentPrice: '~$0.3/立方米(液氧)',
    priceUnit: 'USD/立方米',
    exchange: '工业气体长期合同',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["钢铁冶炼", "医疗用氧", "化工氧化", "航天推进剂"],
    note: '氧是最大宗工业气体之一，钢铁和医疗是主要用途'
  },
  topProducers: [{ rank: 1, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '大阳日酸', country: '日本', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Praxair', country: '美国', marketShare: '~6%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '空气分离(低温精馏)',
    midstream: '空分→液化→储运(管道/槽车)',
    downstream: '钢铁冶炼(40%)、医疗(15%)、化工(15%)、水处理(10%)、航天(5%)',
    bottleneck: '空分装置高耗电，运输半径有限',
    note: '氧产业链：钢铁冶炼(40%)、医疗(15%)、化工(15%)、水处理(10%)、航天(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '需求稳定增长',
    longTerm: '绿色钢铁和航天推动液氧需求增长',
    keyDrivers: ["钢铁工业", "医疗用氧", "绿色钢铁(氢直接还原需氧)", "航天(液氧甲烷发动机)"],
    riskFactors: [],
    note: '氧为大气主要成分，无战略储备需求'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氧战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氧为大气主要成分，无战略储备需求'
  }
};

P6_ECONOMY['F'] = {
  pricing: {
    currentPrice: '~$2,000/吨(氟化氢)',
    priceUnit: 'USD/吨',
    exchange: '化工现货/长期合同',
    fiveYearTrend: '上涨',
    tenYearTrend: '因应用而异',
    priceDrivers: ["电解铝(冰晶石)", "含氟聚合物(PTFE/PVDF)", "锂电池电解液(LiPF6)", "半导体刻蚀"],
    note: '氟是锂电池电解液和含氟聚合物关键元素'
  },
  topProducers: [{ rank: 1, company: 'Solvay', country: '比利时', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Chemours', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 3, company: 'Daikin', country: '日本', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 4, company: '3M', country: '美国', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: '东岳集团', country: '中国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '萤石矿开采(中国、墨西哥、南非)',
    midstream: '萤石→氢氟酸→含氟化学品',
    downstream: '电解铝(30%)、含氟聚合物(20%)、锂电池电解液(15%)、制冷剂(15%)、半导体(5%)',
    bottleneck: '萤石(CaF2)资源集中在中国(占60%)，被列为战略矿产',
    note: '氟产业链：电解铝(30%)、含氟聚合物(20%)、锂电池电解液(15%)、制冷剂(15%)、半导体(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '锂电池和PVDF需求拉动氟化学品增长',
    longTerm: '氟被列为关键矿物，供应集中度高',
    keyDrivers: ["锂电池电解液(LiPF6)", "PVDF(锂电粘结剂)", "半导体刻蚀气体", "含氟制冷剂"],
    riskFactors: ["萤石供应管制", "PFAS环保限制"],
    note: '萤石被中国列为战略矿产，被美国/欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氟战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '萤石被中国列为战略矿产，被美国/欧盟列为关键矿物'
  }
};

P6_ECONOMY['Ne'] = {
  pricing: {
    currentPrice: '~$50/立方米(纯氖)',
    priceUnit: 'USD/立方米',
    exchange: '工业气体合同',
    fiveYearTrend: '暴跌后企稳(2022乌克兰危机)$100k→$5k',
    tenYearTrend: '因应用而异',
    priceDrivers: ["半导体光刻(KrF/ArF准分子激光)", "照明", "显示"],
    note: '氖是半导体光刻准分子激光气体，乌克兰曾是最大供应国'
  },
  topProducers: [{ rank: 1, company: '中国多家(空气分离)', country: '中国', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: 'Cryoin', country: '乌克兰', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: 'Ingas', country: '乌克兰', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '空气分离(氖含量仅18ppm)',
    midstream: '空分→低温精馏→纯化(99.999%)',
    downstream: '半导体光刻(60%:KrF/ArF激光)、照明(20%)、显示(10%)',
    bottleneck: '氖为空分副产，乌克兰曾占全球50%+供应(2022前)',
    note: '氖产业链：半导体光刻(60%:KrF/ArF激光)、照明(20%)、显示(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '中国产能填补乌克兰缺口',
    longTerm: '半导体光刻需求持续增长',
    keyDrivers: ["半导体光刻(DUV)", "激光应用", "显示技术"],
    riskFactors: ["半导体周期", "回收氖增加"],
    note: '氖被美国、欧盟列为半导体供应链关键材料'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氖战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氖被美国、欧盟列为半导体供应链关键材料'
  }
};

P6_ECONOMY['Na'] = {
  pricing: {
    currentPrice: '~$200/吨(纯碱)',
    priceUnit: 'USD/吨',
    exchange: '化工现货',
    fiveYearTrend: '波动上涨',
    tenYearTrend: '因应用而异',
    priceDrivers: ["玻璃制造", "化工(烧碱/纯碱)", "造纸", "肥皂"],
    note: '钠是最大宗化工原料之一，纯碱和烧碱是核心产品'
  },
  topProducers: [{ rank: 1, company: 'Solvay', country: '比利时', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: '中盐集团', country: '中国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Tata', country: '印度', marketShare: '~6%', annualCapacity: 'N/A' }, { rank: 4, company: 'Ciner', country: '土耳其/美国', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: 'Genesis', country: '美国', marketShare: '~4%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '盐矿开采/海水晒盐',
    midstream: '食盐电解(烧碱+氯气) / 纯碱生产',
    downstream: '玻璃(25%)、化工(20%)、造纸(10%)、肥皂(10%)、冶金(10%)',
    bottleneck: '氯碱工业高耗能',
    note: '钠产业链：玻璃(25%)、化工(20%)、造纸(10%)、肥皂(10%)、冶金(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '需求稳定',
    longTerm: '烧碱需求随铝/锂增长',
    keyDrivers: ["玻璃制造", "化工原料", "锂电(氢氧化钠)"],
    riskFactors: [],
    note: '钠资源丰富(食盐)，无战略储备需求'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钠战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '钠资源丰富(食盐)，无战略储备需求'
  }
};

P6_ECONOMY['Mg'] = {
  pricing: {
    currentPrice: '~$2,500/吨(镁锭)',
    priceUnit: 'USD/吨',
    exchange: '上海期货交易所/现货',
    fiveYearTrend: '波动',
    tenYearTrend: '因应用而异',
    priceDrivers: ["汽车轻量化", "铝合金添加剂", "钢铁脱硫", "耐火材料"],
    note: '镁是最轻的结构金属，汽车轻量化关键材料'
  },
  topProducers: [{ rank: 1, company: '银光镁业', country: '中国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: '南京云海', country: '中国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'POSCO', country: '韩国', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 4, company: 'US Magnesium', country: '美国', marketShare: '~4%', annualCapacity: 'N/A' }, { rank: 5, company: '死海镁业', country: '以色列', marketShare: '~3%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '菱镁矿/海水/盐湖镁',
    midstream: '硅热法(Pidgeon法)炼镁 / 电解法',
    downstream: '铝合金添加剂(40%)、汽车压铸件(25%)、钢铁脱硫(10%)、耐火材料(10%)',
    bottleneck: '中国占全球85%镁产量，Pidgeon法高能耗高排放',
    note: '镁产业链：铝合金添加剂(40%)、汽车压铸件(25%)、钢铁脱硫(10%)、耐火材料(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '汽车轻量化拉动镁需求',
    longTerm: '绿色炼镁技术(电解法)推广',
    keyDrivers: ["汽车轻量化", "3C产品壳体", "建筑模板", "储氢材料"],
    riskFactors: ["中国环保限产", "铝替代镁"],
    note: '镁被美国、欧盟列为关键矿物，中国占85%产量'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '镁战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '镁被美国、欧盟列为关键矿物，中国占85%产量'
  }
};

P6_ECONOMY['Al'] = {
  pricing: {
    currentPrice: '~$2,400/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所(SHFE)',
    fiveYearTrend: '宽幅震荡(2019:$1,800→2022:$3,800→2024:$2,400)',
    tenYearTrend: '长期中枢上移，受能源成本驱动',
    priceDrivers: ['中国电解铝产能天花板(4,500万吨)', '电力成本(电解铝为高耗能产业)', '氧化铝价格', '碳成本'],
    note: '铝是仅次于钢铁的第二大金属，轻量化核心材料'
  },
  topProducers: [
    { rank: 1, company: '中国宏桥集团', country: '中国', marketShare: '~8%', annualCapacity: '800万吨' },
    { rank: 2, company: '中国铝业(Chalco)', country: '中国', marketShare: '~6%', annualCapacity: '600万吨' },
    { rank: 3, company: 'Rusal(俄铝)', country: '俄罗斯', marketShare: '~6%', annualCapacity: '580万吨' },
    { rank: 4, company: 'Rio Tinto', country: '澳大利亚/英国', marketShare: '~4%', annualCapacity: '380万吨' },
    { rank: 5, company: 'Norsk Hydro', country: '挪威', marketShare: '~3%', annualCapacity: '320万吨' }
  ],
  supplyChain: {
    upstream: '铝土矿开采(几内亚、澳大利亚、巴西、中国)',
    midstream: '氧化铝精炼→电解铝(霍尔-埃鲁法)→铝合金加工',
    downstream: '建筑(25%)、交通(25%)、包装(15%)、电力(12%)、电子(8%)',
    bottleneck: '电解铝高耗能(每吨约13,500度电)，中国产能天花板，绿电铝稀缺',
    note: '全球原铝年产量约7,000万吨，再生铝占比约35%'
  },
  substitutes: [
    { material: '再生铝', costComparison: '再生铝能耗仅为原铝的5%', performanceComparison: '性能接近原铝，可多次循环', note: '再生铝比例持续提升' },
    { material: '镁合金', costComparison: '镁价格高于铝', performanceComparison: '比铝更轻(密度1.74 vs 2.70)', note: '在汽车轻量化领域与铝竞争' },
    { material: '碳纤维复合材料', costComparison: '远高于铝', performanceComparison: '更轻更强，但成本高', note: '高端领域替代铝' }
  ],
  forecast: {
    shortTerm: '2024-2025年中国产能接近天花板，供需趋于平衡',
    longTerm: '轻量化需求持续增长，绿电铝溢价显现',
    keyDrivers: ['新能源汽车轻量化', '光伏边框需求', '再生铝比例提升', '碳交易推高成本'],
    riskFactors: ['电力供应紧张', '贸易摩擦(铝材出口关税)', '再生铝替代加速'],
    note: '绿色低碳将重塑铝产业链，水电铝、再生铝获溢价'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '国家储备铝锭', note: '战略物资储备，平抑价格波动' },
      { country: '美国', policy: '国防储备库铝储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理铝资源', note: '铝土矿海外权益' }
    ],
    note: '铝被多国列为关键战略物资'
  }
};

P6_ECONOMY['Si'] = {
  pricing: {
    currentPrice: '~$2,000/吨(金属硅)',
    priceUnit: 'USD/吨',
    exchange: '上海期货交易所(工业硅期货) / 英国金属导报',
    fiveYearTrend: '波动上行(2019:$1,800→2022:$4,000→2024:$2,000)',
    tenYearTrend: '光伏需求驱动中枢上移',
    priceDrivers: ['光伏多晶硅需求(占硅消费40%)', '铝合金需求(占30%)', '中国工业硅产能', '电价'],
    note: '硅是光伏和半导体核心材料，中国主导工业硅生产'
  },
  topProducers: [
    { rank: 1, company: '协鑫科技(GCL)', country: '中国', marketShare: '~15%', annualCapacity: '~30万吨(多晶硅)' },
    { rank: 2, company: '通威股份', country: '中国', marketShare: '~12%', annualCapacity: '~25万吨(多晶硅)' },
    { rank: 3, company: 'Wacker Chemie(瓦克化学)', country: '德国', marketShare: '~8%', annualCapacity: '~8万吨(多晶硅)' },
    { rank: 4, company: 'OCI', country: '韩国/马来西亚', marketShare: '~6%', annualCapacity: '~6万吨(多晶硅)' },
    { rank: 5, company: 'Hemlock Semiconductor', country: '美国', marketShare: '~5%', annualCapacity: '~5万吨(多晶硅)' }
  ],
  supplyChain: {
    upstream: '石英砂开采(高纯石英砂:美国Unimin、挪威TQC)',
    midstream: '石英砂→工业硅(金属硅)→多晶硅(西门子法/流化床)→单晶硅棒/硅片',
    downstream: '光伏(50%:硅片/电池/组件)、铝合金(25%)、半导体(5%)、有机硅(15%)',
    bottleneck: '高纯石英砂(坩埚用)供应集中在美国Unimin，多晶硅产能集中在中国(占80%)',
    note: '中国光伏硅片产能占全球95%以上'
  },
  substitutes: [
    { material: '砷化镓(GaAs)', costComparison: '远高于硅', performanceComparison: '光电效率更高', note: '在高效光伏和半导体领域部分替代' },
    { material: '碳化硅', costComparison: '成本更高', performanceComparison: '功率半导体性能更优', note: '在EV功率器件替代硅IGBT' },
    { material: '钙钛矿', costComparison: '理论成本低', performanceComparison: '尚在产业化初期', note: '叠层电池中与硅互补' }
  ],
  forecast: {
    shortTerm: '2024-2025年光伏装机持续增长，工业硅供应充足',
    longTerm: '光伏需求长期增长，N型电池对多晶硅品质要求提高',
    keyDrivers: ['全球光伏装机量(TW级)', 'EV功率半导体(SiC替代)', '半导体国产化', '有机硅需求'],
    riskFactors: ['光伏产能过剩', '碳化硅替代功率硅器件', '钙钛矿替代', '贸易摩擦'],
    note: '硅是光伏和半导体产业链基石，中国掌握全球80%+产能'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '多晶硅战略产业政策', note: '光伏全产业链优势' },
      { country: '美国', policy: 'UFLPA限制中国多晶硅进口', note: '重建本土光伏供应链' },
      { country: '日本', policy: '半导体硅片供应链安全', note: '信越化学/胜高全球领先' }
    ],
    note: '硅被美国、欧盟列为关键矿物(半导体/光伏战略材料)'
  }
};

P6_ECONOMY['P'] = {
  pricing: {
    currentPrice: '~$1,200/吨(磷矿石)',
    priceUnit: 'USD/吨',
    exchange: '化肥现货/长期合同',
    fiveYearTrend: '上涨',
    tenYearTrend: '因应用而异',
    priceDrivers: ["磷肥(占磷消费80%)", "饲料添加剂", "阻燃剂", "锂电池(磷酸铁锂)"],
    note: '磷是不可再生资源，磷肥和锂电池正极关键材料'
  },
  topProducers: [{ rank: 1, company: 'OCP Group', country: '摩洛哥', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Mosaic', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 3, company: 'PhosAgro', country: '俄罗斯', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 4, company: 'Nutrien', country: '加拿大', marketShare: '~6%', annualCapacity: 'N/A' }, { rank: 5, company: '云天化', country: '中国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '磷矿开采(摩洛哥占70%储量、中国、美国、俄罗斯)',
    midstream: '磷矿→磷酸→磷肥/磷酸盐',
    downstream: '磷肥(80%)、饲料(8%)、工业磷酸盐(7%)、锂电池(LFP: 3%)',
    bottleneck: '磷矿资源集中(摩洛哥占70%储量)，磷资源不可再生',
    note: '磷产业链：磷肥(80%)、饲料(8%)、工业磷酸盐(7%)、锂电池(LFP: 3%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '磷肥需求稳定，LFP电池拉动磷酸铁需求',
    longTerm: '磷资源战略价值上升(LFP电池+粮食安全)',
    keyDrivers: ["全球粮食安全(磷肥)", "LFP电池正极(磷酸铁锂)", "阻燃剂", "半导体(磷化氢)"],
    riskFactors: ["磷矿品位下降", "磷资源枯竭风险(50-100年)"],
    note: '磷被美国、欧盟列为关键矿物，摩洛哥占70%储量'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '磷战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '磷被美国、欧盟列为关键矿物，摩洛哥占70%储量'
  }
};

P6_ECONOMY['S'] = {
  pricing: {
    currentPrice: '~$150/吨(硫磺)',
    priceUnit: 'USD/吨',
    exchange: '化肥现货/长期合同',
    fiveYearTrend: '波动',
    tenYearTrend: '因应用而异',
    priceDrivers: ["硫酸(最大宗化工品)", "磷肥生产", "橡胶硫化", "冶炼"],
    note: '硫是硫酸原料(硫酸是最大宗化工品)，磷肥关键原料'
  },
  topProducers: [{ rank: 1, company: 'Saudi Aramco', country: '沙特', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Gazprom', country: '俄罗斯', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 3, company: 'Abu Dhabi', country: '阿联酋', marketShare: '~7%', annualCapacity: 'N/A' }, { rank: 4, company: 'Shell', country: '荷兰/英国', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: '中石化', country: '中国', marketShare: '~4%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '石油/天然气脱硫副产硫磺 + 自然硫矿',
    midstream: '硫磺→硫酸→磷肥/化工',
    downstream: '硫酸/磷肥(70%)、橡胶硫化(10%)、造纸(5%)、冶金(5%)',
    bottleneck: '硫磺为油气脱硫副产，供应受油气行业影响',
    note: '硫产业链：硫酸/磷肥(70%)、橡胶硫化(10%)、造纸(5%)、冶金(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '硫酸需求随磷肥和冶金稳定',
    longTerm: '硫磺供应随能源转型(油气减产)可能趋紧',
    keyDrivers: ["磷肥生产", "冶金(铜/镍/锌冶炼)", "硫酸铵化肥", "橡胶硫化"],
    riskFactors: ["油气脱硫副产减少(能源转型)", "硫磺库存"],
    note: '硫磺为油气脱硫副产，供应充足'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '硫战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '硫磺为油气脱硫副产，供应充足'
  }
};

P6_ECONOMY['Cl'] = {
  pricing: {
    currentPrice: '~$300/吨(液氯)',
    priceUnit: 'USD/吨',
    exchange: '化工现货/长期合同',
    fiveYearTrend: '波动上行',
    tenYearTrend: '因应用而异',
    priceDrivers: ["PVC塑料", "水处理", "化工中间体", "半导体清洗"],
    note: '氯是第二大化工原料(仅次于硫酸)，PVC是最大用途'
  },
  topProducers: [{ rank: 1, company: 'Olin', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 2, company: 'Westlake', country: '美国', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 3, company: 'BASF', country: '德国', marketShare: '~6%', annualCapacity: 'N/A' }, { rank: 4, company: '中泰化学', country: '中国', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: 'Formosa', country: '中国台湾', marketShare: '~4%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '盐水电解(氯碱工业)',
    midstream: '电解→液氯/盐酸→含氯化学品',
    downstream: 'PVC(35%)、水处理(15%)、异氰酸酯(10%)、环氧丙烷(8%)、有机硅(5%)',
    bottleneck: '氯碱工业高耗能，氯气运输安全要求高',
    note: '氯产业链：PVC(35%)、水处理(15%)、异氰酸酯(10%)、环氧丙烷(8%)、有机硅(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: 'PVC和半导体需求稳定',
    longTerm: '绿色氯碱(低能耗电解)发展',
    keyDrivers: ["PVC建筑需求", "半导体清洗", "水处理", "医药中间体"],
    riskFactors: ["环保限制(氯气安全)", "PVC替代材料"],
    note: '氯由盐水电解制取，食盐资源丰富，无战略储备需求'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氯战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氯由盐水电解制取，食盐资源丰富，无战略储备需求'
  }
};

P6_ECONOMY['Ar'] = {
  pricing: {
    currentPrice: '~$0.2/立方米(液氩)',
    priceUnit: 'USD/立方米',
    exchange: '工业气体合同',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["焊接保护气", "半导体制造", "照明", "3D打印"],
    note: '氩是最大宗稀有气体，焊接和半导体制造保护气'
  },
  topProducers: [{ rank: 1, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '大阳日酸', country: '日本', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Praxair', country: '美国', marketShare: '~6%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '空气分离(氩占大气0.93%)',
    midstream: '空分→低温精馏→液氩',
    downstream: '焊接保护(35%)、半导体(20%)、照明(15%)、冶金(10%)、3D打印(5%)',
    bottleneck: '空分副产，供应受氧气/氮气需求影响',
    note: '氩产业链：焊接保护(35%)、半导体(20%)、照明(15%)、冶金(10%)、3D打印(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '半导体和3D打印需求增长',
    longTerm: '半导体制造推动氩需求',
    keyDrivers: ["半导体晶圆制造", "特种焊接", "3D打印(钛/铝)", "照明"],
    riskFactors: [],
    note: '氩为大气成分(0.93%)，供应充足'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氩战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氩为大气成分(0.93%)，供应充足'
  }
};

P6_ECONOMY['K'] = {
  pricing: {
    currentPrice: '~$500/吨(氯化钾)',
    priceUnit: 'USD/吨',
    exchange: '化肥现货',
    fiveYearTrend: '高位震荡',
    tenYearTrend: '因应用而异',
    priceDrivers: ["钾肥(占钾消费90%)", "化肥需求", "粮食安全"],
    note: '钾肥是农业三大肥料之一，不可替代'
  },
  topProducers: [{ rank: 1, company: 'Nutrien', country: '加拿大', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 2, company: 'Mosaic', country: '美国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'Uralkali', country: '俄罗斯', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 4, company: 'Belaruskali', country: '白俄罗斯', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: 'Canpotex', country: '加拿大', marketShare: '~8%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '钾盐矿开采(加拿大、俄罗斯、白俄罗斯)',
    midstream: '钾盐矿→氯化钾精制→钾肥',
    downstream: '钾肥(90%)、工业钾盐(8%)、特种合金(2%)',
    bottleneck: '钾盐资源高度集中(加拿大+俄罗斯+白俄罗斯占80%)',
    note: '钾产业链：钾肥(90%)、工业钾盐(8%)、特种合金(2%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '粮食安全推动钾肥需求',
    longTerm: '全球人口增长支撑长期需求',
    keyDrivers: ["粮食安全", "耕地面积", "经济作物"],
    riskFactors: ["白俄罗斯/俄罗斯制裁", "钾盐品位下降"],
    note: '钾盐被列为战略资源，中国进口依赖度>50%'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钾战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '钾盐被列为战略资源，中国进口依赖度>50%'
  }
};

P6_ECONOMY['Ca'] = {
  pricing: {
    currentPrice: '~$200/吨(氧化钙/石灰)',
    priceUnit: 'USD/吨',
    exchange: '建材现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["钢铁冶炼(造渣剂)", "建筑材料", "脱硫", "化工"],
    note: '钙是最大宗建筑材料和冶金辅料之一'
  },
  topProducers: [{ rank: 1, company: 'Lhoist', country: '比利时', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 2, company: 'Carmeuse', country: '比利时', marketShare: '~7%', annualCapacity: 'N/A' }, { rank: 3, company: 'Graymont', country: '加拿大', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 4, company: 'Minerals Technologies', country: '美国', marketShare: '~4%', annualCapacity: 'N/A' }, { rank: 5, company: '海螺水泥', country: '中国', marketShare: '~3%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '石灰石矿开采',
    midstream: '石灰石煅烧→生石灰/熟石灰',
    downstream: '钢铁(30%)、水泥(25%)、脱硫(15%)、化工(10%)、建筑(10%)',
    bottleneck: '石灰石资源丰富，但煅烧高耗能高排放',
    note: '钙产业链：钢铁(30%)、水泥(25%)、脱硫(15%)、化工(10%)、建筑(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '钢铁和建筑需求稳定',
    longTerm: '脱碳推动绿色石灰生产',
    keyDrivers: ["钢铁造渣剂", "水泥", "烟气脱硫", "化工原料"],
    riskFactors: [],
    note: '石灰石资源丰富，无战略储备需求'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钙战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '石灰石资源丰富，无战略储备需求'
  }
};

P6_ECONOMY['Sc'] = {
  pricing: {
    currentPrice: '~$5,000/公斤(氧化钪)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '高位稳定',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['铝合金/燃料电池', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '钪是稀土元素，钪铝合金(航空航天)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '钪铝合金(航空航天)、固体氧化物燃料电池(SOFC)、高效金属卤化物灯',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国40%，俄罗斯20%，澳大利亚10%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['铝合金/燃料电池', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，钪供应链高度集中'
  }
};

P6_ECONOMY['Ti'] = {
  pricing: {
    currentPrice: '~$6,500/吨(海绵钛)',
    priceUnit: 'USD/吨',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '波动上行(2019:$5,000→2022:$8,500→2024:$6,500)',
    tenYearTrend: '航空航天需求驱动稳步上涨',
    priceDrivers: ['航空航天需求(钛合金占飞机结构30%)', '化工耐蚀设备', '中国海绵钛产能', '四氯化钛颜料'],
    note: '钛是航空航天关键结构材料，中国海绵钛产能全球第一'
  },
  topProducers: [
    { rank: 1, company: '宝武钛业(原宝钛)', country: '中国', marketShare: '~15%', annualCapacity: '~2万吨' },
    { rank: 2, company: 'VSMPO-AVISMA', country: '俄罗斯', marketShare: '~12%', annualCapacity: '~1.6万吨' },
    { rank: 3, company: 'Timet(钛金属公司)', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨' },
    { rank: 4, company: 'Toho Titanium', country: '日本', marketShare: '~6%', annualCapacity: '~9,000吨' },
    { rank: 5, company: 'OSAKA Titanium', country: '日本', marketShare: '~5%', annualCapacity: '~7,000吨' }
  ],
  supplyChain: {
    upstream: '钛矿开采(澳大利亚、南非、印度、中国钛铁矿/金红石)',
    midstream: '钛精矿→四氯化钛→海绵钛(Kroll法)→钛锭/钛合金',
    downstream: '航空航天(40%)、化工(20%)、医疗(10%)、颜料(钛白粉TiO2占钛消费50%)',
    bottleneck: '海绵钛生产高能耗(Kroll法)，航空航天级钛合金认证周期长',
    note: '钛白粉(TiO2)是钛最大消费领域，海绵钛用于钛金属'
  },
  substitutes: [
    { material: '碳纤维复合材料', costComparison: '成本更高', performanceComparison: '更轻更强但制造复杂', note: '在航空领域与钛竞争' },
    { material: '高级铝合金', costComparison: '成本更低', performanceComparison: '耐温性不如钛', note: '在部分航空结构中替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年航空复苏拉动钛合金需求',
    longTerm: '航空航天+3D打印驱动高端钛材增长',
    keyDrivers: ['全球航空制造复苏(B737MAX/A350)', '军用飞机需求', '3D打印钛合金', '海水淡化设备'],
    riskFactors: ['海绵钛产能过剩', '碳纤维替代', '航空周期波动'],
    note: '钛市场分化：高端航空钛合金供不应求，普通海绵钛过剩'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钛矿战略储备', note: '海绵钛产能全球第一' },
      { country: '美国', policy: '国防储备库钛储备', note: '国防战略物资' },
      { country: '俄罗斯', policy: 'VSMPO国有管理', note: '全球最大钛锭生产商' }
    ],
    note: '钛被美国、欧盟列为关键矿物，航空航天战略材料'
  }
};

P6_ECONOMY['V'] = {
  pricing: {
    currentPrice: '~$6/磅(V2O5)',
    priceUnit: 'USD/磅',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '暴跌后企稳(2019:$8→2021:$18→2024:$6)',
    tenYearTrend: '储能需求驱动但产能过剩',
    priceDrivers: ['钢铁合金需求(含钒钢筋)', '全钒液流电池储能', '中国钒渣供应', '钛矿副产钒'],
    note: '钒是含钒钢筋关键添加剂，全钒液流电池是储能新方向'
  },
  topProducers: [
    { rank: 1, company: 'EVRAZ', country: '俄罗斯/英国', marketShare: '~15%', annualCapacity: '~1.5万吨' },
    { rank: 2, company: '攀钢钒钛', country: '中国', marketShare: '~12%', annualCapacity: '~1.2万吨' },
    { rank: 3, company: 'HBIS Group(河钢)', country: '中国', marketShare: '~8%', annualCapacity: '~8,000吨' },
    { rank: 4, company: 'VanadiumCorp', country: '南非', marketShare: '~5%', annualCapacity: '~5,000吨' },
    { rank: 5, company: 'Largo Resources', country: '巴西', marketShare: '~5%', annualCapacity: '~5,000吨' }
  ],
  supplyChain: {
    upstream: '钒矿开采/钒渣(中国钒钛磁铁矿、南非、俄罗斯钛矿副产)',
    midstream: '钒渣→V2O5(五氧化二钒)→钒铁/钒电解液',
    downstream: '钢铁合金(90%:含钒钢筋)、化工催化剂(5%)、全钒液流电池(3%)',
    bottleneck: '钒多为钛矿/铁矿副产，独立供应弹性低',
    note: '全球年产量约10万吨(含钒)，中国占40%以上'
  },
  substitutes: [
    { material: '铌(微合金化)', costComparison: '铌成本更高', performanceComparison: '在部分高强度低合金钢中可替代', note: '在钢筋领域铌可部分替代钒' },
    { material: '钛', costComparison: '成本不同', performanceComparison: '在部分合金中替代', note: '特定应用替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年钢铁需求偏弱，钒价筑底',
    longTerm: '全钒液流电池储能是最大增长点',
    keyDrivers: ['含钒高强度钢筋标准推广', '长时储能(全钒液流电池)', '航空航天钛合金'],
    riskFactors: ['铌替代钒', '钢铁需求下滑', '其他储能技术竞争'],
    note: '钒市场潜力在于长时储能，但短期供应过剩'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钒开采总量控制', note: '钒被列为战略矿种' },
      { country: '美国', policy: '国防储备库钒储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理', note: '钒进口依赖' }
    ],
    note: '钒被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Cr'] = {
  pricing: {
    currentPrice: '~$300/吨(铬铁)',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所',
    fiveYearTrend: '震荡上行(2019:$250→2022:$400→2024:$300)',
    tenYearTrend: '稳步上涨',
    priceDrivers: ['不锈钢需求(占铬消费80%)', '南非电力与物流', '中国铬铁产能', '铬矿品位'],
    note: '铬是不锈钢关键合金元素，南非主导供应'
  },
  topProducers: [
    { rank: 1, company: 'Glencore', country: '瑞士', marketShare: '~15%', annualCapacity: '~200万吨' },
    { rank: 2, company: 'Samancor Chrome', country: '南非', marketShare: '~12%', annualCapacity: '~160万吨' },
    { rank: 3, company: 'Eramet(埃赫曼)', country: '法国', marketShare: '~8%', annualCapacity: '~100万吨' },
    { rank: 4, company: 'Merafe Resources', country: '南非', marketShare: '~6%', annualCapacity: '~80万吨' },
    { rank: 5, company: 'ENRC', country: '哈萨克斯坦', marketShare: '~5%', annualCapacity: '~70万吨' }
  ],
  supplyChain: {
    upstream: '铬矿开采(南非占60%、哈萨克斯坦、印度、土耳其)',
    midstream: '选矿→铬铁冶炼(高碳/低碳铬铁)',
    downstream: '不锈钢(80%)、合金钢(10%)、电镀(5%)、耐火材料(3%)',
    bottleneck: '南非电力危机影响铬铁冶炼，物流瓶颈',
    note: '全球铬矿年产量约4,100万吨，南非主导'
  },
  substitutes: [],
  forecast: {
    shortTerm: '2024-2025年不锈钢需求恢复带动铬价',
    longTerm: '不锈钢需求持续增长，南非供应稳定是关键',
    keyDrivers: ['全球不锈钢产量增长', '特种合金需求', '电镀应用'],
    riskFactors: ['南非电力危机', '不锈钢替代材料', '铬污染监管'],
    note: '铬市场高度依赖南非供应'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铬矿依赖进口(>95%)', note: '战略物资，高度依赖南非' },
      { country: '美国', policy: '国防储备库铬储备', note: '列为关键矿物' },
      { country: '日本', policy: 'JOGMEC管理', note: '铬矿进口依赖' }
    ],
    note: '铬被美国、欧盟、中国列为关键矿物'
  }
};

P6_ECONOMY['Mn'] = {
  pricing: {
    currentPrice: '~$35/吨(锰矿44%)',
    priceUnit: 'USD/吨(干吨)',
    exchange: 'LME锰期货 / 天津港现货',
    fiveYearTrend: '波动下行(2019:$50→2022:$70→2024:$35)',
    tenYearTrend: '中枢下移后企稳',
    priceDrivers: ['钢铁产量(锰占钢消耗0.5-1%)', '电池级锰需求(锰酸锂/NCM)', '南非物流', '加蓬产量'],
    note: '锰是钢铁第四大合金元素，也是电池正极材料'
  },
  topProducers: [
    { rank: 1, company: 'South32', country: '澳大利亚', marketShare: '~15%', annualCapacity: '~300万吨' },
    { rank: 2, company: 'Eramet(Comilog)', country: '法国/加蓬', marketShare: '~12%', annualCapacity: '~250万吨' },
    { rank: 3, company: 'Assmang', country: '南非', marketShare: '~8%', annualCapacity: '~170万吨' },
    { rank: 4, company: 'Tshipi Borwa', country: '南非', marketShare: '~7%', annualCapacity: '~150万吨' },
    { rank: 5, company: 'Moil', country: '印度', marketShare: '~2%', annualCapacity: '~40万吨' }
  ],
  supplyChain: {
    upstream: '锰矿开采(南非占30%、加蓬、澳大利亚、中国、加纳)',
    midstream: '选矿→锰合金冶炼(硅锰/高碳锰铁)→电解锰',
    downstream: '钢铁合金(90%)、电池(5%:锰酸锂/NCM)、铝合金(2%)',
    bottleneck: '高品位锰矿集中分布于南非和加蓬，电池级硫酸锰产能不足',
    note: '全球锰矿年产量约2,000万吨，南非主导'
  },
  substitutes: [],
  forecast: {
    shortTerm: '2024-2025年钢铁需求偏弱，电池级锰需求增长',
    longTerm: '电池锰需求(富锰正极)是最大增长点',
    keyDrivers: ['钢铁需求稳定', 'EV电池锰需求(LMFP/NCM)', '电解锰产能整合'],
    riskFactors: ['钢铁需求下滑', '南非物流中断', '电池技术路线变化'],
    note: '锰从传统钢铁金属向新能源金属转型'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锰矿进口依赖度高', note: '战略物资储备' },
      { country: '美国', policy: '国防储备库锰储备', note: '列为关键矿物' },
      { country: '日本', policy: 'JOGMEC管理', note: '锰矿进口依赖' }
    ],
    note: '锰被美国、欧盟列为关键矿物，电池级锰战略价值上升'
  }
};

P6_ECONOMY['Fe'] = {
  pricing: {
    currentPrice: '~$120/吨(铁矿石62%品位)',
    priceUnit: 'USD/吨',
    exchange: 'LME / 大商所 / 新加坡SGX',
    fiveYearTrend: '波动下降(2019:$120→2021:$220→2024:$120)',
    tenYearTrend: '长期震荡上行',
    priceDrivers: ['中国房地产需求', '全球钢铁产能', '铁矿石供给集中度(澳洲+巴西占80%)'],
    note: '铁矿石是全球交易量最大的大宗商品之一'
  },
  topProducers: [
    { rank: 1, company: 'Vale(淡水河谷)', country: '巴西', marketShare: '~16%', annualCapacity: '3.5亿吨' },
    { rank: 2, company: 'Rio Tinto(力拓)', country: '澳大利亚', marketShare: '~14%', annualCapacity: '3.2亿吨' },
    { rank: 3, company: 'BHP(必和必拓)', country: '澳大利亚', marketShare: '~12%', annualCapacity: '2.8亿吨' },
    { rank: 4, company: 'Fortescue', country: '澳大利亚', marketShare: '~8%', annualCapacity: '1.8亿吨' },
    { rank: 5, company: 'Anglo American', country: '英国', marketShare: '~5%', annualCapacity: '1.1亿吨' }
  ],
  supplyChain: {
    upstream: '铁矿开采(主要分布在澳大利亚、巴西、中国、印度)',
    midstream: '选矿→烧结/球团→高炉炼铁→炼钢',
    downstream: '建筑(50%)、汽车(12%)、机械(15%)、家电(5%)、造船(3%)',
    bottleneck: '高品质铁矿石供给集中度高，定价权在三大矿商',
    note: '中国是全球最大铁矿石进口国，年进口量超10亿吨'
  },
  substitutes: [
    { material: '废钢回收', costComparison: '废钢价格约为铁水的80-90%', performanceComparison: '电炉炼钢碳足迹更低，品质可媲美高炉钢', note: '随着脱碳推进，废钢比例将持续提升' },
    { material: '直接还原铁(DRI)', costComparison: '成本高于高炉铁水', performanceComparison: 'DRI+电炉路径碳排放仅为高炉的1/3', note: '氢基DRI是未来低碳冶金方向' }
  ],
  forecast: {
    shortTerm: '2024-2025年随中国房地产调整，需求承压',
    longTerm: '全球钢铁需求预计年均增长1-2%，长期趋于平台期',
    keyDrivers: ['中国城市化进程放缓', '印度等新兴市场需求增长', '绿色低碳转型推动DRI需求', '废钢回收率提升'],
    riskFactors: ['地缘政治风险', '碳关税(CBAM)实施', '铁矿石供给垄断'],
    note: '绿色转型将重塑钢铁产业链格局'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '国家物资储备局储备铁矿石', note: '战略储备保障供应链安全' },
      { country: '美国', policy: '国防储备库存(战略材料)', note: '国防战略物资储备' },
      { country: '日本', policy: '石油天然气金属矿物资源机构(JOGMEC)管理', note: '资源外交+储备双保障' }
    ],
    note: '铁矿石是各国关键战略物资储备品种'
  }
};

P6_ECONOMY['Co'] = {
  pricing: {
    currentPrice: '~$25,000/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所(探索中)',
    fiveYearTrend: '暴涨暴跌(2019:$35,000→2022:$80,000→2024:$25,000)',
    tenYearTrend: '电池需求驱动但供应过剩',
    priceDrivers: ['动力电池三元正极需求', '刚果(金)手工钴供应', '印尼镍钴项目', 'LFP替代效应'],
    note: '钴是锂电池正极关键材料，刚果(金)主导供应'
  },
  topProducers: [
    { rank: 1, company: 'Glencore', country: '瑞士/刚果(金)', marketShare: '~15%', annualCapacity: '~3万吨' },
    { rank: 2, company: 'CMOC Group(洛钼集团)', country: '中国/刚果(金)', marketShare: '~12%', annualCapacity: '~2.5万吨' },
    { rank: 3, company: 'Vale', country: '巴西', marketShare: '~8%', annualCapacity: '~1.5万吨' },
    { rank: 4, company: 'Gecamines', country: '刚果(金)', marketShare: '~6%', annualCapacity: '~1.2万吨' },
    { rank: 5, company: 'Sumitomo Metal Mining', country: '日本', marketShare: '~4%', annualCapacity: '~8,000吨' }
  ],
  supplyChain: {
    upstream: '钴矿开采(刚果(金)占70%、印尼、俄罗斯、澳大利亚)',
    midstream: '选矿→冶炼精炼→硫酸钴/电解钴',
    downstream: '电池(75%:NCM/NCA正极)、高温合金(10%)、硬质合金(5%)、催化剂(3%)',
    bottleneck: '刚果(金)手工采矿占15-20%，ESG风险高，供应链透明度低',
    note: '全球年产量约20万吨，刚果(金)占绝对主导'
  },
  substitutes: [
    { material: 'LFP(磷酸铁锂)', costComparison: '无钴成本更低', performanceComparison: '能量密度略低但安全性好', note: '中国市场LFP已大幅替代三元' },
    { material: '高镍低钴(NCM811)', costComparison: '降低钴用量', performanceComparison: '能量密度更高', note: '钴用量从622的20%降至811的10%' }
  ],
  forecast: {
    shortTerm: '2024-2025年供应过剩，LFP替代加速',
    longTerm: '高镍低钴趋势持续，钴需求增速放缓',
    keyDrivers: ['EV电池(海外三元路线)', '航空高温合金', '印尼镍钴副产', '回收钴'],
    riskFactors: ['LFP替代加速', '无钴电池量产', '刚果(金)ESG监管', '回收钴供应增加'],
    note: '钴面临无钴化和LFP替代的双重挑战'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钴战略储备', note: '钴进口依赖度>95%' },
      { country: '美国', policy: '国防储备库钴储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC钴供应安全', note: '电池产业链安全' }
    ],
    note: '钴被美国、欧盟、中国列为关键矿物'
  }
};

P6_ECONOMY['Ni'] = {
  pricing: {
    currentPrice: '~$17,000/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所(SHFE)',
    fiveYearTrend: '剧烈波动(2019:$14,000→2022:$100,000(逼空)→2024:$17,000)',
    tenYearTrend: '电池需求驱动长期上涨',
    priceDrivers: ['不锈钢需求(占镍消费70%)', '动力电池三元正极需求', '印尼NPI产能释放', 'LME镍流动性'],
    note: '镍是不锈钢和动力电池关键材料，印尼主导供应'
  },
  topProducers: [
    { rank: 1, company: 'Tsingshan(青山控股)', country: '中国/印尼', marketShare: '~20%', annualCapacity: '~60万吨' },
    { rank: 2, company: 'Vale', country: '巴西', marketShare: '~8%', annualCapacity: '~24万吨' },
    { rank: 3, company: 'Glencore', country: '瑞士', marketShare: '~7%', annualCapacity: '~21万吨' },
    { rank: 4, company: 'Norilsk Nickel', country: '俄罗斯', marketShare: '~7%', annualCapacity: '~20万吨' },
    { rank: 5, company: 'BHP', country: '澳大利亚', marketShare: '~5%', annualCapacity: '~15万吨' }
  ],
  supplyChain: {
    upstream: '镍矿开采(印尼占50%、菲律宾、俄罗斯、新喀里多尼亚)',
    midstream: 'RKEF冶炼(NPI)→精炼镍/硫酸镍',
    downstream: '不锈钢(70%)、动力电池(15%:三元正极)、合金(8%)、电镀(3%)',
    bottleneck: '一级镍(电池级)供应不足，二级镍(NPI)产能过剩，印尼政策风险',
    note: '全球镍年产量约330万吨，印尼占比超50%'
  },
  substitutes: [
    { material: '高镍三元→磷酸铁锂', costComparison: 'LFP成本更低', performanceComparison: '能量密度略低但安全性好', note: '中国市场LFP已大幅替代三元' },
    { material: '锰酸锂', costComparison: '成本更低', performanceComparison: '能量密度低', note: '低端电池替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年NPI供应过剩，电池级镍偏紧',
    longTerm: '一级镍结构性短缺，印尼主导格局深化',
    keyDrivers: ['EV三元电池需求(海外)', '不锈钢产量增长', '印尼一体化产业链', '固态电池高镍路线'],
    riskFactors: ['LFP替代加速', '印尼政策变化', 'LME流动性风险'],
    note: '镍市场两级分化：一级镍短缺，二级镍过剩'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '镍进口依赖度>90%', note: '战略物资储备' },
      { country: '美国', policy: '国防储备库镍储备', note: '列为关键矿物' },
      { country: '日本', policy: 'JOGMEC管理', note: '镍矿进口依赖' }
    ],
    note: '镍被美国、欧盟、中国列为关键矿物'
  }
};

P6_ECONOMY['Cu'] = {
  pricing: {
    currentPrice: '~$9,500/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / COMEX / 上海期货交易所(SHFE)',
    fiveYearTrend: '震荡上行(2019:$6,000→2022:$10,000→2024:$9,500)',
    tenYearTrend: '长期上涨趋势，新能源转型推动需求',
    priceDrivers: ['全球电气化进程', '新能源汽车铜用量激增', '智利/秘鲁矿区品位下降', '库存水平'],
    note: '铜被称为"经济的晴雨表"，是绿色转型的关键金属'
  },
  topProducers: [
    { rank: 1, company: 'Codelco', country: '智利', marketShare: '~8%', annualCapacity: '150万吨' },
    { rank: 2, company: 'Freeport-McMoRan', country: '美国', marketShare: '~7%', annualCapacity: '140万吨' },
    { rank: 3, company: 'BHP', country: '澳大利亚', marketShare: '~6%', annualCapacity: '120万吨' },
    { rank: 4, company: 'Glencore(嘉能可)', country: '瑞士', marketShare: '~5%', annualCapacity: '100万吨' },
    { rank: 5, company: 'Southern Copper', country: '美国/秘鲁', marketShare: '~4%', annualCapacity: '90万吨' }
  ],
  supplyChain: {
    upstream: '铜矿开采(智利、秘鲁、中国、刚果(金)、美国)',
    midstream: '选矿→冶炼→精炼(电解铜)',
    downstream: '电力电缆(30%)、建筑(25%)、电子(15%)、交通(12%)、新能源(10%)',
    bottleneck: '新矿开发周期长(10-15年)，矿区品位持续下降，水资源约束',
    note: '全球精炼铜年产量约2,600万吨，再生铜占比约20%'
  },
  substitutes: [
    { material: '铝', costComparison: '铝价格约为铜的1/3', performanceComparison: '导电率约为铜的60%，重量仅1/3', note: '在架空输电线领域铝已大规模替代铜' },
    { material: '光纤', costComparison: '远低于铜缆', performanceComparison: '传输带宽更高，距离更远', note: '通信领域光纤已基本替代铜缆' }
  ],
  forecast: {
    shortTerm: '2024-2025年供需偏紧，新能源需求持续拉动',
    longTerm: '长期供需缺口扩大，铜价中枢有望上移至$10,000+',
    keyDrivers: ['电动车单车用铜量(83kg)为燃油车4倍', '可再生能源基础设施', '电网升级投资', 'AI数据中心铜需求激增'],
    riskFactors: ['全球经济衰退风险', '铜矿罢工与政治风险', '被替代风险(铝/超导)'],
    note: '铜是能源转型最受益的金属，长期前景看好'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '国家储备局铜储备', note: '保障制造业供应链安全' },
      { country: '美国', policy: '国防储备库铜储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC铜矿投资与储备', note: '海外权益矿+国内储备' }
    ],
    note: '铜被美国、欧盟、日本列为关键矿物'
  }
};

P6_ECONOMY['Zn'] = {
  pricing: {
    currentPrice: '~$2,800/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所(SHFE)',
    fiveYearTrend: '高位震荡(2019:$2,500→2022:$4,000→2024:$2,800)',
    tenYearTrend: '中枢缓慢上移',
    priceDrivers: ['镀锌钢需求(占锌消费50%)', '中国环保限产', '矿山品位下降', 'LME库存'],
    note: '锌主要用于镀锌防腐蚀，与钢铁行业高度相关'
  },
  topProducers: [
    { rank: 1, company: 'Nyrstar', country: '比利时/澳大利亚', marketShare: '~8%', annualCapacity: '100万吨' },
    { rank: 2, company: 'Glencore', country: '瑞士', marketShare: '~7%', annualCapacity: '90万吨' },
    { rank: 3, company: 'Vedanta', country: '印度', marketShare: '~6%', annualCapacity: '80万吨' },
    { rank: 4, company: 'Boliden', country: '瑞典', marketShare: '~4%', annualCapacity: '55万吨' },
    { rank: 5, company: 'Teck Resources', country: '加拿大', marketShare: '~4%', annualCapacity: '50万吨' }
  ],
  supplyChain: {
    upstream: '锌矿开采(中国、秘鲁、澳大利亚、印度、美国)',
    midstream: '选矿→焙烧→浸出→电解精炼',
    downstream: '镀锌(50%)、黄铜/青铜(20%)、化工(15%)、锌合金(10%)',
    bottleneck: '矿山品位下降，环保政策限制中国锌矿产量',
    note: '全球精锌年产量约1,400万吨，再生锌占比约30%'
  },
  substitutes: [
    { material: '铝锌合金', costComparison: '成本相近', performanceComparison: '耐蚀性更优', note: '在镀层领域部分替代纯锌' },
    { material: '镁合金', costComparison: '成本较高', performanceComparison: '更轻，耐蚀性好', note: '在特定领域替代锌合金' }
  ],
  forecast: {
    shortTerm: '2024-2025年供需偏紧，矿山供应增量有限',
    longTerm: '需求平稳增长，镀锌仍是主要用途',
    keyDrivers: ['基础设施建设', '汽车轻量化镀锌钢', '储能电池锌空气电池'],
    riskFactors: ['中国经济放缓', '镀锌替代技术', '矿山供应中断'],
    note: '锌市场长期维持紧平衡'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '国家储备锌', note: '战略物资储备' },
      { country: '美国', policy: '国防储备库', note: '列为关键矿物' },
      { country: '日本', policy: 'JOGMEC管理', note: '海外矿权投资' }
    ],
    note: '锌被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Ga'] = {
  pricing: {
    currentPrice: '~$300/公斤(镓锭)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '波动上涨(2019:$200→2022:$400→2024:$300)',
    tenYearTrend: '半导体需求驱动上涨',
    priceDrivers: ['GaAs/GaN半导体需求', 'LED需求', '中国出口管制(2023起)', '5G/雷达'],
    note: '镓是化合物半导体(GaAs/GaN)关键材料，中国主导供应'
  },
  topProducers: [
    { rank: 1, company: '中国铝业/多家', country: '中国', marketShare: '~80%', annualCapacity: '~500吨' },
    { rank: 2, company: 'Vital Materials', country: '中国', marketShare: '~5%', annualCapacity: '~30吨' },
    { rank: 3, company: 'Recylex', country: '德国', marketShare: '~3%', annualCapacity: '~20吨' },
    { rank: 4, company: 'Dowa Holdings', country: '日本', marketShare: '~3%', annualCapacity: '~18吨' },
    { rank: 5, company: 'Nyrstar', country: '比利时', marketShare: '~2%', annualCapacity: '~12吨' }
  ],
  supplyChain: {
    upstream: '镓为铝土矿/锌矿加工副产(无独立镓矿)',
    midstream: '拜耳液回收→电解精炼→高纯镓(7N)',
    downstream: '半导体(GaAs/GaN: 50%:射频/光电)、LED(25%)、太阳能(CIGS: 10%)、传感器(5%)',
    bottleneck: '镓完全依赖氧化铝/锌冶炼副产，中国占80%产能，2023年起出口管制',
    note: '全球年产量约600吨(原生镓)，回收镓占比增长'
  },
  substitutes: [
    { material: '硅', costComparison: '成本远低于镓', performanceComparison: '在高频/高功率领域性能不足', note: '在低频领域硅仍主导' },
    { material: '碳化硅', costComparison: '成本更高', performanceComparison: '高功率器件替代GaN', note: '在功率半导体中与GaN竞争' }
  ],
  forecast: {
    shortTerm: '2024-2025年中国出口管制影响供应，价格维持高位',
    longTerm: '5G/AI/雷达驱动GaN需求爆发',
    keyDrivers: ['5G射频器件(GaAs/GaN)', 'AI数据中心功率器件(GaN)', 'micro-LED显示', 'CIGS薄膜太阳能'],
    riskFactors: ['中国出口管制升级', '回收镓供应增加', '硅基替代'],
    note: '镓是中美科技博弈核心材料，中国掌握80%供应'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '镓出口许可管制(2023.8起)', note: '镓被列为出口管制物项' },
      { country: '美国', policy: '国防储备库镓储备', note: '国防关键材料' },
      { country: '日本', policy: 'JOGMEC回收与多元化', note: '镓进口依赖>90%' }
    ],
    note: '镓被美国、欧盟、日本列为关键矿物，供应链高度集中'
  }
};

P6_ECONOMY['Ge'] = {
  pricing: {
    currentPrice: '~$1,800/公斤(锗锭)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '持续上涨(2019:$1,000→2022:$1,500→2024:$1,800)',
    tenYearTrend: '红外/光纤需求驱动上涨',
    priceDrivers: ['红外光学需求(军用/民用)', '光纤需求', '中国出口管制(2023起)', '卫星太阳能电池'],
    note: '锗是红外光学和光纤关键材料，中国主导供应'
  },
  topProducers: [
    { rank: 1, company: '云南锗业/多家', country: '中国', marketShare: '~60%', annualCapacity: '~100吨' },
    { rank: 2, company: 'Teck Resources', country: '加拿大', marketShare: '~10%', annualCapacity: '~20吨' },
    { rank: 3, company: 'Umicore', country: '比利时', marketShare: '~5%', annualCapacity: '~10吨' },
    { rank: 4, company: 'Recylex', country: '德国', marketShare: '~3%', annualCapacity: '~6吨' },
    { rank: 5, company: '俄罗斯锗厂', country: '俄罗斯', marketShare: '~3%', annualCapacity: '~5吨' }
  ],
  supplyChain: {
    upstream: '锗矿/含锗煤(中国、俄罗斯、加拿大)',
    midstream: '含锗煤/锌矿副产→氯化精馏→还原→区熔精炼',
    downstream: '红外光学(40%:热成像/夜视)、光纤(30%)、卫星太阳能电池(GaAs衬底: 15%)、PET催化剂(10%)',
    bottleneck: '锗为锌矿/煤矿副产，中国占60%产能，2023年起出口管制',
    note: '全球年产量约160吨，中国主导'
  },
  substitutes: [
    { material: '硅锗', costComparison: '成本更低', performanceComparison: '在部分电子领域替代', note: '高频电子领域' },
    { material: '砷化镓', costComparison: '成本不同', performanceComparison: '在太阳能电池中替代', note: '卫星太阳能电池领域' }
  ],
  forecast: {
    shortTerm: '2024-2025年中国出口管制推高价格',
    longTerm: '红外/光纤/太空需求稳定增长',
    keyDrivers: ['军用红外热成像', '光纤通信', '低轨卫星太阳能电池', 'PET催化剂'],
    riskFactors: ['中国出口管制', '回收锗增加', '硅基红外替代'],
    note: '锗是国防和光纤战略材料，中美博弈焦点'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锗出口许可管制(2023.8起)', note: '锗被列为出口管制物项' },
      { country: '美国', policy: '国防储备库锗储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理', note: '锗进口依赖' }
    ],
    note: '锗被美国、欧盟、日本列为关键矿物'
  }
};

P6_ECONOMY['As'] = {
  pricing: {
    currentPrice: '~$1,500/吨(三氧化二砷)',
    priceUnit: 'USD/吨',
    exchange: '化工现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["半导体(GaAs)", "木材防腐(历史)", "铅酸电池合金", "医药"],
    note: '砷是GaAs半导体关键元素，但剧毒限制了应用'
  },
  topProducers: [{ rank: 1, company: '中国多家', country: '中国', marketShare: '~45%', annualCapacity: 'N/A' }, { rank: 2, company: 'Morocco', country: '摩洛哥', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: '俄罗斯', country: '俄罗斯', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '智利', country: '智利', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '秘鲁', country: '秘鲁', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铜/铅/金冶炼副产砷',
    midstream: '冶炼烟尘→三氧化二砷→高纯砷',
    downstream: '半导体GaAs(30%)、铅酸电池合金(20%)、木材防腐(15%)、医药(10%)',
    bottleneck: '砷剧毒，环保限制严格，供应受限',
    note: '砷产业链：半导体GaAs(30%)、铅酸电池合金(20%)、木材防腐(15%)、医药(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: 'GaAs半导体需求稳定',
    longTerm: '砷在半导体和量子点领域应用增长',
    keyDrivers: ["GaAs半导体(5G/射频)", "量子点显示", "铅酸电池合金", "医药"],
    riskFactors: ["砷毒性环保限制", "替代材料"],
    note: '砷被欧盟列为限制使用物质，但在半导体领域不可替代'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '砷战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '砷被欧盟列为限制使用物质，但在半导体领域不可替代'
  }
};

P6_ECONOMY['Se'] = {
  pricing: {
    currentPrice: '~$30/公斤(硒)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报/现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["光伏CIGS薄膜电池", "玻璃脱色", "锰电解", "半导体"],
    note: '硒是光伏CIGS薄膜和玻璃制造关键材料'
  },
  topProducers: [{ rank: 1, company: '中国多家(铜冶炼副产)', country: '中国', marketShare: '~35%', annualCapacity: 'N/A' }, { rank: 2, company: '日本(铜冶炼副产)', country: '日本', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'Freeport-McMoRan', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Glencore', country: '瑞士', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'BHP', country: '澳大利亚', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铜冶炼副产硒(无独立硒矿)',
    midstream: '铜阳极泥→硒回收→精制',
    downstream: '光伏CIGS(25%)、玻璃(25%)、锰电解(15%)、半导体(10%)、饲料(5%)',
    bottleneck: '硒为铜冶炼副产，供应受铜产量制约',
    note: '硒产业链：光伏CIGS(25%)、玻璃(25%)、锰电解(15%)、半导体(10%)、饲料(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '光伏CIGS需求增长',
    longTerm: '半导体和光伏需求稳定',
    keyDrivers: ["光伏CIGS薄膜", "玻璃制造", "锰电解添加剂", "半导体(硒化物)"],
    riskFactors: ["CIGS被晶硅替代", "回收硒增加"],
    note: '硒被美国列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '硒战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '硒被美国列为关键矿物'
  }
};

P6_ECONOMY['Br'] = {
  pricing: {
    currentPrice: '~$3,000/吨(溴素)',
    priceUnit: 'USD/吨',
    exchange: '化工现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["阻燃剂", "钻井液", "水处理", "医药"],
    note: '溴是阻燃剂和油气钻井液关键原料'
  },
  topProducers: [{ rank: 1, company: 'ICL', country: '以色列', marketShare: '~30%', annualCapacity: 'N/A' }, { rank: 2, company: 'Albemarle', country: '美国', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'LANXESS', country: '德国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Tata', country: '印度', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '山东海化', country: '中国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '海水提溴/地下卤水提溴',
    midstream: '卤水→氧化吹出→精制→溴化学品',
    downstream: '阻燃剂(40%)、钻井液(20%)、水处理(10%)、医药(5%)',
    bottleneck: '海水提溴能耗高，以色列死海溴资源丰富',
    note: '溴产业链：阻燃剂(40%)、钻井液(20%)、水处理(10%)、医药(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '阻燃剂需求稳定',
    longTerm: '新能源(溴化锌液流电池)和阻燃需求增长',
    keyDrivers: ["阻燃剂(电子/建筑)", "油气钻井液", "水处理", "医药"],
    riskFactors: ["无卤阻燃剂替代"],
    note: '溴被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '溴战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '溴被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Kr'] = {
  pricing: {
    currentPrice: '~$5/立方米(纯氪)',
    priceUnit: 'USD/立方米',
    exchange: '工业气体合同',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["照明(节能灯)", "半导体光刻(KrF准分子激光)", "窗玻璃保温", "麻醉"],
    note: '氪用于节能灯和半导体光刻(KrF激光)'
  },
  topProducers: [{ rank: 1, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Cryoin', country: '乌克兰', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Ingas', country: '乌克兰', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '空气分离(氪含量仅1ppm)',
    midstream: '空分→低温精馏→纯化',
    downstream: '照明(40%)、半导体光刻(25%:KrF激光)、窗玻璃(15%)、麻醉(5%)',
    bottleneck: '氪为空分副产，供应受氧气/氮气需求影响',
    note: '氪产业链：照明(40%)、半导体光刻(25%:KrF激光)、窗玻璃(15%)、麻醉(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '半导体光刻需求稳定',
    longTerm: 'LED替代节能灯，但半导体需求增长',
    keyDrivers: ["半导体光刻(KrF DUV)", "窗玻璃填充", "激光", "麻醉"],
    riskFactors: ["LED替代节能灯", "半导体技术节点演进"],
    note: '氪为大气微量成分(1ppm)，供应受空分产能制约'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氪战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氪为大气微量成分(1ppm)，供应受空分产能制约'
  }
};

P6_ECONOMY['Rb'] = {
  pricing: {
    currentPrice: '~$1,200/克(铷)',
    priceUnit: 'USD/克',
    exchange: '研究机构直接交易',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["原子钟(铷钟)", "光伏电池", "特种玻璃", "医药"],
    note: '铷主要用于原子钟(铷钟)和特种玻璃'
  },
  topProducers: [{ rank: 1, company: '中国(锂云母副产)', country: '中国', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: '加拿大', country: '加拿大', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: '俄罗斯', country: '俄罗斯', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: '德国', country: '德国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: '日本', country: '日本', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '锂云母/铯榴石矿副产铷',
    midstream: '锂/铯冶炼→铷分离→高纯铷',
    downstream: '原子钟(30%:铷钟)、光伏(20%)、特种玻璃(20%)、医药(10%)',
    bottleneck: '铷为锂/铯矿极稀副产，全球年产仅~5吨',
    note: '铷产业链：原子钟(30%:铷钟)、光伏(20%)、特种玻璃(20%)、医药(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '原子钟和GPS需求稳定',
    longTerm: '量子技术和导航推动铷需求',
    keyDrivers: ["铷原子钟(GPS/北斗)", "光伏电池(CIGS添加)", "特种玻璃", "量子传感"],
    riskFactors: ["铯原子钟替代铷钟"],
    note: '铷被美国列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铷战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铷被美国列为关键矿物'
  }
};

P6_ECONOMY['Sr'] = {
  pricing: {
    currentPrice: '~$200/吨(碳酸锶)',
    priceUnit: 'USD/吨',
    exchange: '化工现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["磁性材料(铁氧体)", "玻璃(脱色)", "烟花(红色)", "医药"],
    note: '锶主要用于铁氧体永磁材料和玻璃脱色'
  },
  topProducers: [{ rank: 1, company: '中国', country: '中国', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: '西班牙', country: '西班牙', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: '墨西哥', country: '墨西哥', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: '土耳其', country: '土耳其', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: '伊朗', country: '伊朗', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '天青石/菱锶矿开采',
    midstream: '矿石→碳酸锶/硝酸锶',
    downstream: '铁氧体磁体(40%)、玻璃(20%)、烟火(15%)、锌精炼(10%)',
    bottleneck: '天青石矿资源集中在中国和西班牙',
    note: '锶产业链：铁氧体磁体(40%)、玻璃(20%)、烟火(15%)、锌精炼(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '铁氧体磁体需求稳定',
    longTerm: '永磁材料和电子需求增长',
    keyDrivers: ["铁氧体永磁(电机/传感器)", "玻璃脱色", "烟火", "锌精炼添加剂"],
    riskFactors: ["钕铁硼替代铁氧体"],
    note: '锶被美国列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锶战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '锶被美国列为关键矿物'
  }
};

P6_ECONOMY['Y'] = {
  pricing: {
    currentPrice: '~$8/公斤(氧化钇)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['陶瓷/激光/超导', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '钇是稀土元素，结构陶瓷(YSZ)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '结构陶瓷(YSZ)、激光晶体(YAG)、超导材料(YBCO)、LED荧光粉',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国70%+，Lynas 10%，MP 8%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['陶瓷/激光/超导', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，钇供应链高度集中'
  }
};

P6_ECONOMY['Zr'] = {
  pricing: {
    currentPrice: '~$3,000/吨(锆英砂)',
    priceUnit: 'USD/吨',
    exchange: '英国金属导报/现货',
    fiveYearTrend: '上涨',
    tenYearTrend: '因应用而异',
    priceDrivers: ["陶瓷(氧化锆)", "核燃料包壳(锆合金)", "耐火材料", "催化剂"],
    note: '锆是核燃料包壳和先进陶瓷关键材料'
  },
  topProducers: [{ rank: 1, company: 'Iluka Resources', country: '澳大利亚', marketShare: '~25%', annualCapacity: 'N/A' }, { rank: 2, company: 'Rio Tinto', country: '澳大利亚/南非', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'Tronox', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Eramet', country: '法国', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '中国锆业', country: '中国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '锆英砂开采(澳大利亚、南非)',
    midstream: '锆英砂→氯化→海绵锆/氧化锆',
    downstream: '陶瓷(35%)、耐火材料(25%)、核燃料包壳(15%)、催化剂(5%)',
    bottleneck: '锆英砂供应集中在澳大利亚和南非',
    note: '锆产业链：陶瓷(35%)、耐火材料(25%)、核燃料包壳(15%)、催化剂(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '陶瓷和核能需求增长',
    longTerm: '核燃料包壳和先进陶瓷需求持续',
    keyDrivers: ["核燃料包壳(锆合金)", "氧化锆陶瓷(牙齿/刀具)", "耐火材料", "催化"],
    riskFactors: ["核能发展速度", "替代材料"],
    note: '锆被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锆战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '锆被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Nb'] = {
  pricing: {
    currentPrice: '~$42/公斤(铌铁)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报/现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["高强度低合金钢(微合金化)", "石油管道", "不锈钢", "超导材料(NbTi/Nb3Sn)"],
    note: '铌是高强度微合金钢关键添加剂，巴西主导供应'
  },
  topProducers: [{ rank: 1, company: 'CBMM(巴西冶金矿业公司)', country: '巴西', marketShare: '~75%', annualCapacity: 'N/A' }, { rank: 2, company: 'Anglo American', country: '英国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 3, company: 'IAMGOLD', country: '加拿大', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 4, company: '中国铌业', country: '中国', marketShare: '~3%', annualCapacity: 'N/A' }, { rank: 5, company: '俄罗斯铌', country: '俄罗斯', marketShare: '~2%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铌矿开采(巴西Araxa占80%储量)',
    midstream: '烧绿石→铌铁/铌金属/高纯铌',
    downstream: '高强度钢(85%:油气管道/汽车)、不锈钢(8%)、超导(3%)',
    bottleneck: 'CBMM占全球75%铌供应，巴西垄断',
    note: '铌产业链：高强度钢(85%:油气管道/汽车)、不锈钢(8%)、超导(3%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '钢铁需求稳定',
    longTerm: '超导材料(Nb3Sn)和微合金钢需求增长',
    keyDrivers: ["油气管道用钢", "汽车高强钢", "超导磁体(MRI/聚变)", "不锈钢"],
    riskFactors: ["巴西供应中断", "钒替代铌"],
    note: '铌被美国、欧盟列为关键矿物，CBMM垄断75%供应'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铌战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铌被美国、欧盟列为关键矿物，CBMM垄断75%供应'
  }
};

P6_ECONOMY['Mo'] = {
  pricing: {
    currentPrice: '~$22/磅(氧化钼)',
    priceUnit: 'USD/磅',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '高位震荡(2019:$12→2022:$35→2024:$22)',
    tenYearTrend: '合金钢需求驱动震荡上行',
    priceDrivers: ['合金钢需求(占钼消费80%)', '中国钼产量', '智利/美国铜矿副产', '催化剂需求'],
    note: '钼是合金钢关键添加剂，提高强度和耐蚀性'
  },
  topProducers: [
    { rank: 1, company: 'CMOC Group(洛钼集团)', country: '中国', marketShare: '~15%', annualCapacity: '~3万吨' },
    { rank: 2, company: 'Codelco', country: '智利', marketShare: '~12%', annualCapacity: '~2.5万吨' },
    { rank: 3, company: 'Freeport-McMoRan', country: '美国', marketShare: '~10%', annualCapacity: '~2万吨' },
    { rank: 4, company: 'Grupo Mexico', country: '墨西哥', marketShare: '~8%', annualCapacity: '~1.5万吨' },
    { rank: 5, company: 'Anglo American', country: '英国', marketShare: '~5%', annualCapacity: '~1万吨' }
  ],
  supplyChain: {
    upstream: '钼矿开采(中国、智利、美国、秘鲁、墨西哥，多为铜矿副产)',
    midstream: '选矿→焙烧(氧化钼)→钼铁/钼酸铵',
    downstream: '合金钢(75%)、不锈钢(10%)、催化剂(5%)、润滑剂(MoS2)(3%)',
    bottleneck: '钼多为铜矿副产，独立供应弹性低',
    note: '全球年产量约26万吨，中国和智利主导'
  },
  substitutes: [
    { material: '钨/钒', costComparison: '成本相近', performanceComparison: '在部分合金钢中可替代', note: '特定合金领域替代' },
    { material: '铬/镍', costComparison: '成本不同', performanceComparison: '不同性能方向', note: '在不锈钢中部分调整配比' }
  ],
  forecast: {
    shortTerm: '2024-2025年合金钢需求恢复',
    longTerm: '特种合金钢和催化剂需求稳定增长',
    keyDrivers: ['油气管道用钢', '不锈钢需求', '汽车用高强度钢', '化工催化剂'],
    riskFactors: ['钢铁需求放缓', '铜矿产量波动影响副产钼', '替代合金'],
    note: '钼市场与铜矿和钢铁行业高度联动'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钼开采总量控制', note: '钼被列为战略保护矿种' },
      { country: '美国', policy: '国防储备库钼储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理', note: '钼进口依赖' }
    ],
    note: '钼被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Tc'] = {
  pricing: {
    currentPrice: '~$60/克(锝-99m)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["医学SPECT显像", "工业示踪"],
    note: '锝-99m是核医学最常用显像同位素，全球日用量数千万次'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '医学SPECT显像(锝-99m)、工业示踪',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '锝-99m是核医学最常用显像同位素，全球日用量数千万次'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Ru'] = {
  pricing: {
    currentPrice: '~$500/盎司(钌粉)',
    priceUnit: 'USD/盎司',
    exchange: 'NYMEX/现货',
    fiveYearTrend: '波动(2021:$1,000→2024:$500)',
    tenYearTrend: '因应用而异',
    priceDrivers: ["半导体(钌靶材)", "电解水制氢(PEM催化剂)", "电子", "化工催化剂"],
    note: '钌是半导体先进制程和PEM电解水催化剂'
  },
  topProducers: [{ rank: 1, company: 'Anglo American Platinum', country: '南非', marketShare: '~35%', annualCapacity: 'N/A' }, { rank: 2, company: 'Norilsk Nickel', country: '俄罗斯', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'Impala Platinum', country: '南非', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: 'Sibanye-Stillwater', country: '南非', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: 'Lonmin', country: '南非', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铂矿副产(钌为铂矿伴生)',
    midstream: '铂冶炼→钌回收→钌粉/钌化合物',
    downstream: '半导体(25%:钌靶材)、电解水(20%)、电子(15%)、催化剂(15%)',
    bottleneck: '钌为铂矿伴生，全球年产约30吨',
    note: '钌产业链：半导体(25%:钌靶材)、电解水(20%)、电子(15%)、催化剂(15%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '半导体和氢能需求增长',
    longTerm: '先进制程和绿氢推动钌需求',
    keyDrivers: ["半导体(钌替代铜互连)", "PEM电解水催化剂", "电子(电阻/电容)", "化工催化剂"],
    riskFactors: ["半导体技术路线变化"],
    note: '钌被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钌战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '钌被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Rh'] = {
  pricing: {
    currentPrice: '~$4,500/盎司(铑粉)',
    priceUnit: 'USD/盎司',
    exchange: 'NYMEX/现货',
    fiveYearTrend: '暴涨暴跌(2021:$25,000→2024:$4,500)',
    tenYearTrend: '因应用而异',
    priceDrivers: ["汽车催化剂(汽油车)", "化工(氢甲酰化)", "催化", "电子"],
    note: '铑是最高效的汽车尾气催化剂，价格波动极大'
  },
  topProducers: [{ rank: 1, company: 'Anglo American Platinum', country: '南非', marketShare: '~35%', annualCapacity: 'N/A' }, { rank: 2, company: 'Norilsk Nickel', country: '俄罗斯', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'Impala Platinum', country: '南非', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: 'Sibanye-Stillwater', country: '南非', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: 'Lonmin', country: '南非', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铂矿副产(铑为铂矿伴生)',
    midstream: '铂冶炼→铑回收→铑粉/铑化合物',
    downstream: '汽车催化剂(80%)、化工(10%)、电子(5%)、玻璃(3%)',
    bottleneck: '铑为铂矿极稀伴生，全球年产仅~20吨',
    note: '铑产业链：汽车催化剂(80%)、化工(10%)、电子(5%)、玻璃(3%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '汽车催化剂需求承压(EV替代)',
    longTerm: 'EV转型减少燃油车催化剂需求',
    keyDrivers: ["汽油车催化剂(NOx转化)", "化工催化剂", "玻璃熔炉电极"],
    riskFactors: ["EV替代燃油车", "铂/钯替代铑"],
    note: '铑被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铑战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铑被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Pd'] = {
  pricing: {
    currentPrice: '~$1,000/盎司',
    priceUnit: 'USD/盎司',
    exchange: 'NYMEX / LBMA',
    fiveYearTrend: '暴跌后企稳(2019:$1,800→2021:$2,800→2024:$1,000)',
    tenYearTrend: '经历超级周期后大幅回落',
    priceDrivers: ['汽油车催化剂需求', '电动汽车替代效应', '俄罗斯供应(诺里尔斯克)', '铂钯替代'],
    note: '钯主要用于汽油车催化剂，电动车转型是最大长期风险'
  },
  topProducers: [
    { rank: 1, company: 'Norilsk Nickel(诺里尔斯克)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '~100吨/年' },
    { rank: 2, company: 'Anglo American Platinum', country: '南非', marketShare: '~15%', annualCapacity: '~40吨/年' },
    { rank: 3, company: 'Sibanye-Stillwater', country: '南非', marketShare: '~12%', annualCapacity: '~30吨/年' },
    { rank: 4, company: 'Impala Platinum', country: '南非', marketShare: '~10%', annualCapacity: '~25吨/年' },
    { rank: 5, company: 'Vale', country: '巴西', marketShare: '~5%', annualCapacity: '~12吨/年' }
  ],
  supplyChain: {
    upstream: '钯矿开采(俄罗斯诺里尔斯克、南非布什维尔德、加拿大萨德伯里)',
    midstream: '选矿→冶炼精炼→钯锭/钯粉',
    downstream: '汽车催化剂(85%)、电子(8%)、牙科(3%)、化工(2%)',
    bottleneck: '俄罗斯供应占比高，地缘政治风险大',
    note: '全球年产量约210吨，俄罗斯占40%'
  },
  substitutes: [
    { material: '铂', costComparison: '铂通常比钯便宜', performanceComparison: '在汽油车催化中可部分替代钯', note: '铂钯替代正在加速' },
    { material: '非贵金属催化剂', costComparison: '成本低', performanceComparison: '性能不足', note: '研发中' }
  ],
  forecast: {
    shortTerm: '2024-2025年EV替代加速，需求承压',
    longTerm: '电动车渗透率提升将结构性减少钯需求',
    keyDrivers: ['汽油车催化剂存量市场', '铂钯替代', '混合动力车增长'],
    riskFactors: ['电动车加速替代燃油车', '铂替代钯', '俄罗斯供应中断'],
    note: '钯面临电动车转型的长期结构性挑战'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '国防储备库钯族金属', note: '国防战略物资' },
      { country: '俄罗斯', policy: '诺里尔斯克国有控股', note: '全球最大钯生产国' },
      { country: '日本', policy: 'JOGMEC管理', note: '汽车催化剂供应链' }
    ],
    note: '钯被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Ag'] = {
  pricing: {
    currentPrice: '~$30/盎司',
    priceUnit: 'USD/盎司',
    exchange: 'COMEX / LBMA / 上海黄金交易所',
    fiveYearTrend: '震荡上行(2019:$18→2021:$30→2024:$30)',
    tenYearTrend: '长期底部抬升，光伏需求驱动',
    priceDrivers: ['光伏银浆需求(占工业用银30%)', '金银比价', '投资避险需求', '矿山供应(多为铜铅锌副产)'],
    note: '白银兼具贵金属和工业金属双重属性，光伏银浆是最大增长点'
  },
  topProducers: [
    { rank: 1, company: 'Mexican(弗雷斯尼洛)', country: '墨西哥', marketShare: '~6%', annualCapacity: '~1,800吨/年' },
    { rank: 2, company: 'Glencore', country: '瑞士', marketShare: '~5%', annualCapacity: '~1,500吨/年' },
    { rank: 3, company: 'KGHM', country: '波兰', marketShare: '~5%', annualCapacity: '~1,400吨/年' },
    { rank: 4, company: 'Newmont', country: '美国', marketShare: '~4%', annualCapacity: '~1,200吨/年' },
    { rank: 5, company: 'Southern Copper', country: '秘鲁/墨西哥', marketShare: '~3%', annualCapacity: '~900吨/年' }
  ],
  supplyChain: {
    upstream: '银矿开采(多为铜、铅、锌矿副产，墨西哥、秘鲁、中国、波兰)',
    midstream: '选矿→冶炼精炼→银锭/银粉',
    downstream: '工业(55%:光伏银浆、电子焊料)、珠宝(20%)、投资银币(15%)、银器(5%)',
    bottleneck: '银多为副产，独立银矿少，供应弹性低',
    note: '全球年产量约2.5万吨，地上存量约55万吨'
  },
  substitutes: [
    { material: '铜', costComparison: '远低于银', performanceComparison: '导电率略低，但性价比高', note: '在部分电子领域替代银' },
    { material: '铝', costComparison: '远低于银', performanceComparison: '导电率为银的60%', note: '在导电领域部分替代' },
    { material: '银包铜粉', costComparison: '降低30-50%银用量', performanceComparison: '兼顾导电与成本', note: '光伏正面电极替代纯银' }
  ],
  forecast: {
    shortTerm: '2024-2025年光伏需求持续旺盛，供应缺口扩大',
    longTerm: '光伏+电子需求驱动白银进入结构性短缺',
    keyDrivers: ['光伏装机量持续增长', '5G/AI电子需求', 'EV充电基础设施', '投资需求回暖'],
    riskFactors: ['光伏银浆减银技术(电镀铜)', '全球经济放缓', '金银比回归'],
    note: '白银可能成为光伏时代最紧缺的金属之一'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '国防储备库(已大幅减持)', note: '冷战时期大量储备，现存量有限' },
      { country: '印度', policy: '民间储备巨大', note: '全球最大白银消费国之一' },
      { country: '中国', policy: '民间银饰银器传统', note: '工业用银为主，投资需求增长' }
    ],
    note: '白银的金融储备属性弱于黄金，工业属性更强'
  }
};

P6_ECONOMY['Cd'] = {
  pricing: {
    currentPrice: '~$3/公斤(镉锭)',
    priceUnit: 'USD/公斤',
    exchange: 'LME/现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["镍镉电池", "颜料", "涂层", "半导体(CdTe太阳能)"],
    note: '镉有毒但 CdTe薄膜太阳能电池是重要应用'
  },
  topProducers: [{ rank: 1, company: '韩国锌业(Korea Zinc)', country: '韩国', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 2, company: 'Nyrstar', country: '比利时', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'Glencore', country: '瑞士', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Teck', country: '加拿大', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Vedanta', country: '印度', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '锌冶炼副产镉',
    midstream: '锌冶炼渣→浸出→电解精炼→镉锭',
    downstream: '镍镉电池(40%)、颜料(20%)、涂层(15%)、CdTe太阳能(10%)',
    bottleneck: '镉有毒，环保限制日益严格',
    note: '镉产业链：镍镉电池(40%)、颜料(20%)、涂层(15%)、CdTe太阳能(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: 'CdTe太阳能需求增长',
    longTerm: '环保限制推动镉应用减少，但CdTe太阳能增长',
    keyDrivers: ["CdTe薄膜太阳能(First Solar)", "镍镉电池(工业/军用)", "颜料", "防腐涂层"],
    riskFactors: ["镉毒性环保限制", "锂电池替代镍镉电池"],
    note: '镉被欧盟列为限制使用物质(有毒)'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '镉战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '镉被欧盟列为限制使用物质(有毒)'
  }
};

P6_ECONOMY['In'] = {
  pricing: {
    currentPrice: '~$250/公斤(铟锭)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '区间震荡(2019:$150→2022:$300→2024:$250)',
    tenYearTrend: '显示面板需求驱动',
    priceDrivers: ['ITO靶材需求(LCD/OLED)', '半导体需求', '中国锌矿副产铟', '回收铟供应'],
    note: '铟是ITO透明导电膜核心材料，显示面板关键元素'
  },
  topProducers: [
    { rank: 1, company: '中国多家(锌冶炼副产)', country: '中国', marketShare: '~45%', annualCapacity: '~400吨' },
    { rank: 2, company: '韩国锌业(Korea Zinc)', country: '韩国', marketShare: '~15%', annualCapacity: '~150吨' },
    { rank: 3, company: 'Teck Resources', country: '加拿大', marketShare: '~8%', annualCapacity: '~80吨' },
    { rank: 4, company: 'Nyrstar', country: '比利时', marketShare: '~5%', annualCapacity: '~50吨' },
    { rank: 5, company: 'Dowa Holdings', country: '日本', marketShare: '~5%', annualCapacity: '~50吨' }
  ],
  supplyChain: {
    upstream: '铟为锌矿/铅锌矿加工副产(无独立铟矿)',
    midstream: '锌冶炼渣→浸出→电解精炼→高纯铟(5N-7N)',
    downstream: 'ITO靶材(70%:LCD/OLED触摸屏)、半导体(10%)、焊料(5%)、合金(5%)',
    bottleneck: '铟完全依赖锌冶炼副产，供应受锌产量制约',
    note: '全球年产量约900吨(含回收)，中国占45%+'
  },
  substitutes: [
    { material: '碳纳米管薄膜', costComparison: '成本更高', performanceComparison: '柔性更好但导电性低', note: '在柔性显示领域替代ITO' },
    { material: '银纳米线', costComparison: '成本相近', performanceComparison: '柔性好，导电性接近ITO', note: '在触摸屏领域替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年OLED需求增长，铟价稳定',
    longTerm: '显示面板需求稳定，新型显示技术可能减少铟用量',
    keyDrivers: ['OLED面板扩产', '光伏CIGS薄膜电池', '半导体先进封装', '低温焊料'],
    riskFactors: ['柔性显示替代ITO', '回收铟增加', '锌产量下降'],
    note: '铟市场与显示面板行业高度相关'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铟战略储备', note: '铟被列为战略保护矿种' },
      { country: '美国', policy: '国防储备库铟储备', note: '国防关键材料' },
      { country: '日本', policy: 'JOGMEC管理', note: '铟进口依赖' }
    ],
    note: '铟被美国、欧盟、日本列为关键矿物'
  }
};

P6_ECONOMY['Sn'] = {
  pricing: {
    currentPrice: '~$32,000/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所(SHFE)',
    fiveYearTrend: '高位回落(2019:$18,000→2022:$50,000→2024:$32,000)',
    tenYearTrend: '电子焊接需求驱动震荡上行',
    priceDrivers: ['电子焊料需求(占锡消费50%)', '缅甸佤邦锡矿禁采', '印尼天气影响', '半导体周期'],
    note: '锡是电子焊接核心材料，被称为"电子工业的味精"'
  },
  topProducers: [
    { rank: 1, company: '云南锡业集团', country: '中国', marketShare: '~12%', annualCapacity: '~4万吨' },
    { rank: 2, company: 'PT Timah', country: '印尼', marketShare: '~8%', annualCapacity: '~3万吨' },
    { rank: 3, company: 'Minsur', country: '秘鲁', marketShare: '~6%', annualCapacity: '~2万吨' },
    { rank: 4, company: '马来西亚冶炼公司(MSC)', country: '马来西亚', marketShare: '~4%', annualCapacity: '~1.5万吨' },
    { rank: 5, company: 'V tail', country: '越南', marketShare: '~3%', annualCapacity: '~1万吨' }
  ],
  supplyChain: {
    upstream: '锡矿开采(中国、印尼、缅甸、秘鲁、玻利维亚)',
    midstream: '选矿→冶炼精炼→精锡锭',
    downstream: '电子焊料(50%)、化工(15%)、镀锡板(15%)、青铜合金(10%)',
    bottleneck: '缅甸佤邦锡矿禁采，印尼出口配额限制，供应集中度高',
    note: '全球年产量约30万吨，中国和印尼占50%以上'
  },
  substitutes: [
    { material: '无铅焊料(银/铜/铋)', costComparison: '成本更高', performanceComparison: '满足RoHS要求但熔点更高', note: '环保法规推动无铅化' },
    { material: '导电胶', costComparison: '成本高', performanceComparison: '低温连接但导电性差', note: '特定领域替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年半导体复苏拉动锡需求',
    longTerm: '电子化+光伏焊带驱动锡需求增长',
    keyDrivers: ['AI服务器/数据中心', '光伏焊带需求', '电动车电子化', '5G/IoT设备'],
    riskFactors: ['缅甸供应恢复', '无铅焊料替代加速', '半导体周期波动'],
    note: '锡是供应最脆弱的基本金属之一'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锡开采总量控制', note: '锡被列为战略保护矿种' },
      { country: '美国', policy: '国防储备库锡储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理', note: '锡进口依赖' }
    ],
    note: '锡被美国、欧盟、中国列为关键矿物'
  }
};

P6_ECONOMY['Sb'] = {
  pricing: {
    currentPrice: '~$15,000/吨(锑锭)',
    priceUnit: 'USD/吨',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '暴涨(2019:$8,000→2022:$16,000→2024:$15,000)',
    tenYearTrend: '中国出口管制推动上涨',
    priceDrivers: ['阻燃剂需求(占锑消费50%)', '铅酸电池(锑铅合金)', '中国锑矿产量', '光伏玻璃澄清剂'],
    note: '锑是阻燃剂和铅酸电池关键材料，中国主导供应'
  },
  topProducers: [
    { rank: 1, company: '湖南黄金/多家', country: '中国', marketShare: '~48%', annualCapacity: '~6万吨' },
    { rank: 2, company: 'United Company Rusal', country: '俄罗斯', marketShare: '~10%', annualCapacity: '~1.3万吨' },
    { rank: 3, company: 'Comibol', country: '玻利维亚', marketShare: '~5%', annualCapacity: '~6,000吨' },
    { rank: 4, company: 'Mandalay Resources', country: '澳大利亚', marketShare: '~3%', annualCapacity: '~4,000吨' },
    { rank: 5, company: 'Beja Minerals', country: '葡萄牙', marketShare: '~2%', annualCapacity: '~2,500吨' }
  ],
  supplyChain: {
    upstream: '锑矿开采(中国占48%、俄罗斯、玻利维亚、塔吉克斯坦)',
    midstream: '选矿→冶炼精炼→锑锭/三氧化二锑',
    downstream: '阻燃剂(50%:ATP)、铅酸电池(20%)、光伏玻璃(15%)、陶瓷/玻璃(5%)',
    bottleneck: '中国占全球48%锑矿产量和70%冶炼产能，供应高度集中',
    note: '全球年产量约8.3万吨，中国绝对主导'
  },
  substitutes: [
    { material: '铝/镁氢氧化物', costComparison: '成本更低', performanceComparison: '阻燃效果差，添加量大', note: '在部分阻燃领域替代' },
    { material: '磷系阻燃剂', costComparison: '成本相近', performanceComparison: '环保阻燃效果好', note: '在部分塑料中替代锑阻燃剂' }
  ],
  forecast: {
    shortTerm: '2024-2025年光伏玻璃需求拉动，供应偏紧',
    longTerm: '中国锑矿品位下降，长期供应紧张',
    keyDrivers: ['阻燃剂(电子/建筑)', '光伏玻璃澄清剂', '军用(穿甲弹/红外)', '储能铅碳电池'],
    riskFactors: ['无卤阻燃剂替代', '回收锑增加', '中国出口管制'],
    note: '锑被美国、欧盟列为最关键供应链风险矿物之一'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锑开采总量控制+出口管制', note: '锑被列为中国优势战略矿产' },
      { country: '美国', policy: '国防储备库锑储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理', note: '锑进口依赖' }
    ],
    note: '锑被美国、欧盟、日本列为关键矿物，中国掌握战略定价权'
  }
};

P6_ECONOMY['Te'] = {
  pricing: {
    currentPrice: '~$60/公斤(碲)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报/现货',
    fiveYearTrend: '稳定偏高',
    tenYearTrend: '因应用而异',
    priceDrivers: ["CdTe薄膜太阳能", "热电材料", "合金添加剂", "橡胶硫化"],
    note: '碲是CdTe薄膜太阳能电池和热电材料关键元素'
  },
  topProducers: [{ rank: 1, company: '中国多家(铜冶炼副产)', country: '中国', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: '美国(铜冶炼副产)', country: '美国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: '日本(铜冶炼副产)', country: '日本', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '加拿大', country: '加拿大', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '秘鲁', country: '秘鲁', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铜冶炼副产碲(无独立碲矿)',
    midstream: '铜阳极泥→碲回收→精制',
    downstream: 'CdTe太阳能(40%)、热电(20%)、合金(15%)、橡胶(10%)',
    bottleneck: '碲为铜冶炼极稀副产，全球年产仅~400吨',
    note: '碲产业链：CdTe太阳能(40%)、热电(20%)、合金(15%)、橡胶(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: 'CdTe太阳能需求增长',
    longTerm: '热电材料和太阳能推动碲需求',
    keyDrivers: ["CdTe薄膜太阳能(First Solar)", "热电发电机(温差发电)", "合金添加剂(钢/铜)", "橡胶硫化"],
    riskFactors: ["CdTe被晶硅替代", "铜产量下降"],
    note: '碲被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '碲战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '碲被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['I'] = {
  pricing: {
    currentPrice: '~$30/公斤(碘)',
    priceUnit: 'USD/公斤',
    exchange: '化工现货',
    fiveYearTrend: '稳定偏高',
    tenYearTrend: '因应用而异',
    priceDrivers: ["X射线造影剂", "LCD偏光膜", "医药", "消毒剂"],
    note: '碘是医疗造影剂和LCD偏光膜关键材料'
  },
  topProducers: [{ rank: 1, company: 'SQM', country: '智利', marketShare: '~30%', annualCapacity: 'N/A' }, { rank: 2, company: 'Cosayach', country: '智利', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'Ise Chemicals', country: '日本', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Godo Shigen', country: '日本', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '智利碘业', country: '智利', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '智利硝石副产碘 / 海带提碘',
    midstream: '浸出→还原→精制→碘化学品',
    downstream: 'X射线造影剂(35%)、LCD偏光膜(25%)、医药(15%)、消毒剂(10%)',
    bottleneck: '智利占全球50%+碘供应，资源集中',
    note: '碘产业链：X射线造影剂(35%)、LCD偏光膜(25%)、医药(15%)、消毒剂(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '医疗和LCD需求稳定',
    longTerm: '医疗造影剂和X射线检测需求增长',
    keyDrivers: ["医疗造影剂", "LCD/OLED偏光膜", "医药", "食品添加剂"],
    riskFactors: ["LCD需求下降", "回收碘增加"],
    note: '碘被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '碘战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '碘被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Xe'] = {
  pricing: {
    currentPrice: '~$20/立方米(纯氙)',
    priceUnit: 'USD/立方米',
    exchange: '工业气体合同',
    fiveYearTrend: '上涨',
    tenYearTrend: '因应用而异',
    priceDrivers: ["半导体光刻(EUV辅助)", "医疗麻醉", "离子推进器(航天)", "照明"],
    note: '氙是航天离子推进器和半导体EUV光刻关键气体'
  },
  topProducers: [{ rank: 1, company: 'Air Liquide', country: '法国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 2, company: 'Linde', country: '德国/美国', marketShare: '~12%', annualCapacity: 'N/A' }, { rank: 3, company: 'Air Products', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Cryoin', country: '乌克兰', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '梅塞尔', country: '德国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '空气分离(氙含量仅0.09ppm)',
    midstream: '空分→低温精馏→纯化(99.999%)',
    downstream: '照明(30%)、半导体(25%:EUV/离子注入)、医疗(15%:麻醉)、航天(10%:离子推进)',
    bottleneck: '氙为空分极稀副产品(0.09ppm)，供应极度有限',
    note: '氙产业链：照明(30%)、半导体(25%:EUV/离子注入)、医疗(15%:麻醉)、航天(10%:离子推进)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: 'EUV光刻和航天需求增长',
    longTerm: '航天离子推进和EUV推动氙需求',
    keyDrivers: ["EUV光刻(半导体)", "航天离子推进器", "医疗麻醉", "高端照明"],
    riskFactors: ["替代推进工质(氪/铋)"],
    note: '氙被美国、欧盟列为半导体和航天关键材料'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '氙战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '氙被美国、欧盟列为半导体和航天关键材料'
  }
};

P6_ECONOMY['Cs'] = {
  pricing: {
    currentPrice: '~$50/克(铯)',
    priceUnit: 'USD/克',
    exchange: '研究机构直接交易',
    fiveYearTrend: '稳定偏高',
    tenYearTrend: '因应用而异',
    priceDrivers: ["原子钟(铯钟-时间基准)", "石油钻井液", "光电倍增管", "催化剂"],
    note: '铯是国际时间基准(铯原子钟)，极稀缺碱金属'
  },
  topProducers: [{ rank: 1, company: '中国(铯榴石)', country: '中国', marketShare: '~30%', annualCapacity: 'N/A' }, { rank: 2, company: '加拿大(Tanco矿)', country: '加拿大', marketShare: '~25%', annualCapacity: 'N/A' }, { rank: 3, company: '津巴布韦', country: '津巴布韦', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: '纳米比亚', country: '纳米比亚', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: '澳大利亚', country: '澳大利亚', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铯榴石矿开采(极稀缺)',
    midstream: '铯榴石→酸浸→碳酸铯/氢氧化铯',
    downstream: '原子钟(25%:铯钟-秒定义)、钻井液(25%)、光电管(15%)、催化剂(10%)',
    bottleneck: '铯榴石矿极稀缺，加拿大Tanco矿占重要地位',
    note: '铯产业链：原子钟(25%:铯钟-秒定义)、钻井液(25%)、光电管(15%)、催化剂(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '原子钟和石油钻井需求稳定',
    longTerm: '量子技术和精密测量推动铯需求',
    keyDrivers: ["铯原子钟(国际秒定义)", "石油钻井液(甲酸铯)", "光电倍增管", "离子推进(航天)"],
    riskFactors: ["铷钟替代铯钟"],
    note: '铯被美国、欧盟列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铯战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铯被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Ba'] = {
  pricing: {
    currentPrice: '~$200/吨(碳酸钡)',
    priceUnit: 'USD/吨',
    exchange: '化工现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["油气钻井液(重晶石)", "电子(钛酸钡)、玻璃、医药"],
    note: '钡主要用于油气钻井液(重晶石)和电子陶瓷'
  },
  topProducers: [{ rank: 1, company: '中国', country: '中国', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: '印度', country: '印度', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: '摩洛哥', country: '摩洛哥', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '美国', country: '美国', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '伊朗', country: '伊朗', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '重晶石矿开采(中国、印度、摩洛哥)',
    midstream: '重晶石→碳酸钡/硫酸钡',
    downstream: '钻井液(60%:重晶石)、化工(15%)、电子(10%:钛酸钡)、玻璃(5%)',
    bottleneck: '重晶石资源丰富但钻井级品位要求高',
    note: '钡产业链：钻井液(60%:重晶石)、化工(15%)、电子(10%:钛酸钡)、玻璃(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '油气钻井需求稳定',
    longTerm: '电子陶瓷和钻井推动钡需求',
    keyDrivers: ["油气钻井液(重晶石)", "电子陶瓷(MLCC钛酸钡)", "玻璃", "医药(硫酸钡造影)"],
    riskFactors: ["油气行业周期"],
    note: '钡资源丰富，重晶石被美国列为关键矿物'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钡战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '钡资源丰富，重晶石被美国列为关键矿物'
  }
};

P6_ECONOMY['La'] = {
  pricing: {
    currentPrice: '~$3,000/吨(氧化镧)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '相对平稳',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['催化剂/抛光粉需求', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '镧是稀土元素，催化剂(石油裂化)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '催化剂(石油裂化)、抛光粉(玻璃/芯片)、稀土合金、紫外吸收',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国80%+，Lynas 10%，MP 8%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['催化剂/抛光粉需求', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，镧供应链高度集中'
  }
};

P6_ECONOMY['Ce'] = {
  pricing: {
    currentPrice: '~$3,500/吨(氧化铈)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '相对平稳',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['催化剂/抛光粉需求', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '铈是稀土元素，催化剂(石油裂化)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '催化剂(石油裂化)、抛光粉(玻璃/芯片)、稀土合金、紫外吸收',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国80%+，Lynas 10%，MP 8%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['催化剂/抛光粉需求', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，铈供应链高度集中'
  }
};

P6_ECONOMY['Pr'] = {
  pricing: {
    currentPrice: '~$50,000/吨(氧化镨)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '高位波动',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['永磁材料(PrNd合金)', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '镨是稀土元素，永磁电机(镨钕合金)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '永磁电机(镨钕合金)、陶瓷着色、玻璃着色',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国80%+，Lynas 10%，MP 8%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['永磁材料(PrNd合金)', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，镨供应链高度集中'
  }
};

P6_ECONOMY['Nd'] = {
  pricing: {
    currentPrice: '~$70,000/吨(氧化钕)',
    priceUnit: 'USD/吨',
    exchange: '包头稀土交易所 / LME(规划中)',
    fiveYearTrend: '高位波动(2019:$45,000→2022:$150,000→2024:$70,000)',
    tenYearTrend: '长期上涨，钕铁硼永磁需求驱动',
    priceDrivers: ['新能源汽车电机需求', '风电永磁电机', '中国稀土配额', '机器人/无人机电机'],
    note: '钕是钕铁硼永磁材料核心元素，新能源与机器人关键材料'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '萃取分离→金属钕→钕铁硼磁体制造',
    downstream: '永磁电机(60%:EV电机、风电、工业电机)、消费电子(15%)、MRI(10%)',
    bottleneck: '分离提纯和磁体制造产能高度集中在中国(磁体占90%)',
    note: '钕铁硼磁体是最高性能永磁材料，不可替代'
  },
  substitutes: [
    { material: '铁氧体磁体', costComparison: '成本仅1/10', performanceComparison: '磁能积仅为钕铁硼的1/6-1/4', note: '低端应用可替代' },
    { material: '钐钴磁体', costComparison: '成本更高', performanceComparison: '耐高温耐腐蚀，但磁能积较低', note: '高温领域部分替代' },
    { material: '铁氮永磁', costComparison: '理论成本低', performanceComparison: '尚在研发阶段', note: '潜在替代品但未量产' }
  ],
  forecast: {
    shortTerm: '2024-2025年EV和风电需求拉动，价格中枢稳定',
    longTerm: '机器人/AI时代电机需求爆发，长期供给偏紧',
    keyDrivers: ['全球EV渗透率持续提升', '风电装机增长', '人形机器人产业化', '工业电机永磁化'],
    riskFactors: ['无钕磁体技术突破', '回收技术进步', '海外产能建设'],
    note: '钕是能源转型和自动化的战略金属，中国掌握定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为中国战略资源，限制加工技术出口' },
      { country: '美国', policy: '国防储备库+ReElement计划', note: '钕被列为国防关键材料' },
      { country: '日本', policy: 'JOGMEC海外供应链多元化', note: '与澳大利亚Lynas合作减少对华依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土永磁是中美科技竞争的核心领域之一'
  }
};

P6_ECONOMY['Pm'] = {
  pricing: {
    currentPrice: '~$500,000/公斤(钷-147)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '极稀缺',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['放射性同位素电池/荧光粉', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '钷是稀土元素，核电池(卫星)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '核电池(卫星)、荧光粉、放射源测量',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，无天然矿，核反应堆人工制备'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['放射性同位素电池/荧光粉', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，钷供应链高度集中'
  }
};

P6_ECONOMY['Sm'] = {
  pricing: {
    currentPrice: '~$4,000/吨(氧化钐)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '相对平稳',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['钐钴永磁/核反应堆控制', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '钐是稀土元素，钐钴永磁体(高温应用)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '钐钴永磁体(高温应用)、核反应堆控制棒、激光介质',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国80%+，Lynas 10%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['钐钴永磁/核反应堆控制', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，钐供应链高度集中'
  }
};

P6_ECONOMY['Eu'] = {
  pricing: {
    currentPrice: '~$40/公斤(氧化铕)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '下降后企稳',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['荧光粉/防伪', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '铕是稀土元素，红色/蓝色荧光粉(LED/显示)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '红色/蓝色荧光粉(LED/显示)、防伪标记、核反应堆控制棒',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['荧光粉/防伪', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，铕供应链高度集中'
  }
};

P6_ECONOMY['Gd'] = {
  pricing: {
    currentPrice: '~$30/公斤(氧化钆)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定上涨',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['MRI造影剂/磁致冷', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '钆是稀土元素，MRI造影剂为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: 'MRI造影剂、核反应堆控制棒、磁致冷材料、铁磁材料',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国80%+，Lynas 10%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['MRI造影剂/磁致冷', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，钆供应链高度集中'
  }
};

P6_ECONOMY['Tb'] = {
  pricing: {
    currentPrice: '~$600/公斤(氧化铽)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '高位波动',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['高性能永磁(铽镝铁)', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '铽是稀土元素，高性能永磁材料(添加铽提高矫顽力)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '高性能永磁材料(添加铽提高矫顽力)、荧光粉(绿色)、磁光存储',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+，Lynas 8%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['高性能永磁(铽镝铁)', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，铽供应链高度集中'
  }
};

P6_ECONOMY['Dy'] = {
  pricing: {
    currentPrice: '~$300/公斤(氧化镝)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '高位波动',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['高性能永磁(耐高温钕铁硼)', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '镝是稀土元素，高性能永磁材料(添加镝提高矫顽力)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '高性能永磁材料(添加镝提高矫顽力)、核反应堆控制棒、金属卤化物灯',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+，Lynas 8%'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['高性能永磁(耐高温钕铁硼)', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，镝供应链高度集中'
  }
};

P6_ECONOMY['Ho'] = {
  pricing: {
    currentPrice: '~$50/公斤(氧化钬)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['激光/磁致伸缩', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '钬是稀土元素，钬激光(医疗/工业)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '钬激光(医疗/工业)、磁致伸缩材料、核反应堆控制棒',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['激光/磁致伸缩', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，钬供应链高度集中'
  }
};

P6_ECONOMY['Er'] = {
  pricing: {
    currentPrice: '~$40/公斤(氧化铒)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['光纤放大器/激光', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '铒是稀土元素，光纤放大器(EDFA)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '光纤放大器(EDFA)、激光介质、核反应堆控制棒、玻璃着色',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['光纤放大器/激光', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，铒供应链高度集中'
  }
};

P6_ECONOMY['Tm'] = {
  pricing: {
    currentPrice: '~$80/公斤(氧化铥)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['激光/便携式X射线', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '铥是稀土元素，便携式X射线源(铥-170)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '便携式X射线源(铥-170)、激光介质、高温超导',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['激光/便携式X射线', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，铥供应链高度集中'
  }
};

P6_ECONOMY['Yb'] = {
  pricing: {
    currentPrice: '~$30/公斤(氧化镱)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['激光/原子钟', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '镱是稀土元素，光纤激光器(镱激光)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '光纤激光器(镱激光)、原子钟、太阳电池、应力测量',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['激光/原子钟', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，镱供应链高度集中'
  }
};

P6_ECONOMY['Lu'] = {
  pricing: {
    currentPrice: '~$500/公斤(氧化镥)',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '稳定偏高',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['PET闪烁晶体/炼油催化', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '镥是稀土元素，PET闪烁晶体(LSO)为核心用途'
  },
  topProducers: [
    { rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' },
    { rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' },
    { rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' },
    { rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' },
    { rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }
  ],
  supplyChain: {
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: 'PET闪烁晶体(LSO)、石油裂化催化剂、激光介质',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，中国85%+'
  },
  substitutes: [
    { material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }
  ],
  forecast: {
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['PET闪烁晶体/炼油催化', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' },
      { country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' },
      { country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' },
      { country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }
    ],
    note: '稀土是中美科技竞争核心领域，镥供应链高度集中'
  }
};

P6_ECONOMY['Hf'] = {
  pricing: {
    currentPrice: '~$500/公斤(铪锭)',
    priceUnit: 'USD/公斤',
    exchange: '战略材料直接交易',
    fiveYearTrend: '上涨',
    tenYearTrend: '因应用而异',
    priceDrivers: ["半导体(高K栅极材料)", "核反应堆控制棒", "航空合金", "催化剂"],
    note: '铪是半导体先进制程(高K金属栅极)关键材料'
  },
  topProducers: [{ rank: 1, company: 'ATI(Allegheny)', country: '美国', marketShare: '~25%', annualCapacity: 'N/A' }, { rank: 2, company: 'Western Zirconium(西屋)', country: '美国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'CEA', country: '法国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '中国核工业', country: '中国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: '俄罗斯', country: '俄罗斯', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '锆英砂分离(铪为锆矿伴生)',
    midstream: '锆铪分离(萃取)→海绵铪→铪锭',
    downstream: '半导体(40%:高K栅极)、核控制棒(25%)、航空合金(15%)',
    bottleneck: '铪为锆矿伴生(1:50)，锆铪分离困难，产能有限',
    note: '铪产业链：半导体(40%:高K栅极)、核控制棒(25%)、航空合金(15%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '半导体先进制程需求爆发',
    longTerm: '先进制程(<7nm)推动铪需求增长',
    keyDrivers: ["半导体高K栅极(HfO2)", "核反应堆控制棒", "航空合金", "催化剂"],
    riskFactors: ["先进制程技术变化"],
    note: '铪被美国、欧盟列为关键矿物(半导体战略材料)'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铪战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铪被美国、欧盟列为关键矿物(半导体战略材料)'
  }
};

P6_ECONOMY['Ta'] = {
  pricing: {
    currentPrice: '~$200/公斤(钽粉)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报/现货',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["电容器(钽电容)", "半导体靶材", "超合金", "医疗植入"],
    note: '钽是高端电容器和半导体靶材关键材料'
  },
  topProducers: [{ rank: 1, company: 'Global Advanced Metals', country: '澳大利亚', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 2, company: 'AMG', country: '德国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 3, company: '中矿资源', country: '中国', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 4, company: 'Comibol', country: '玻利维亚', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: 'Rwanda矿商', country: '卢旺达', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '钽铁矿开采(刚果(金)、卢旺达、巴西、澳大利亚)',
    midstream: '钽铁矿→浸出→氟钽酸钾→钽粉/钽锭',
    downstream: '电容器(50%:钽电容)、半导体靶材(15%)、超合金(10%)、医疗(5%)',
    bottleneck: '刚果(金)和卢旺达手工采矿占30%+，ESG风险高',
    note: '钽产业链：电容器(50%:钽电容)、半导体靶材(15%)、超合金(10%)、医疗(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '半导体和5G需求增长',
    longTerm: '钽电容和半导体靶材需求稳定增长',
    keyDrivers: ["钽电容器(5G/军工)", "半导体靶材", "航空超合金", "医疗植入物"],
    riskFactors: ["陶瓷电容器替代钽电容", "ESG供应链风险"],
    note: '钽被美国、欧盟列为关键矿物(冲突矿物)'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钽战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '钽被美国、欧盟列为关键矿物(冲突矿物)'
  }
};

P6_ECONOMY['W'] = {
  pricing: {
    currentPrice: '~$310/吨度(黑钨精矿)',
    priceUnit: 'USD/吨度',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '高位震荡(2019:$250→2022:$350→2024:$310)',
    tenYearTrend: '中国配额管理推动价格中枢上移',
    priceDrivers: ['硬质合金需求(切削刀具)', '中国出口配额', '国防军工需求', '钨矿品位下降'],
    note: '钨是熔点最高的金属，硬质合金关键材料，中国主导供应'
  },
  topProducers: [
    { rank: 1, company: '中国钨业(厦门钨业/章源钨业等)', country: '中国', marketShare: '~40%', annualCapacity: '~3.5万吨' },
    { rank: 2, company: 'Vietnam tungsten', country: '越南', marketShare: '~10%', annualCapacity: '~1万吨' },
    { rank: 3, company: 'Almonty Industries', country: '韩国/西班牙', marketShare: '~5%', annualCapacity: '~5,000吨' },
    { rank: 4, company: 'Wolf Minerals', country: '英国/澳大利亚', marketShare: '~3%', annualCapacity: '~3,000吨' },
    { rank: 5, company: 'Bolivia state mining', country: '玻利维亚', marketShare: '~2%', annualCapacity: '~2,000吨' }
  ],
  supplyChain: {
    upstream: '钨矿开采(中国占80%、越南、俄罗斯、玻利维亚)',
    midstream: '选矿→钨精矿→APT(仲钨酸铵)→钨粉/碳化钨',
    downstream: '硬质合金(60%:切削刀具、矿用钻头)、高速钢(20%)、军工(10%)',
    bottleneck: '中国控制80%钨矿供应和85%APT产能，出口管制',
    note: '全球年产量约8万吨(含钨)，中国绝对主导'
  },
  substitutes: [
    { material: '碳化硅/氮化硼陶瓷', costComparison: '成本更高', performanceComparison: '硬度接近但韧性差', note: '在部分切削领域替代' },
    { material: '钼', costComparison: '成本较低', performanceComparison: '熔点和硬度低于钨', note: '部分高温应用替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年制造业复苏带动硬质合金需求',
    longTerm: '中国出口管制趋严，钨价中枢上移',
    keyDrivers: ['高端制造与数控刀具', '国防军工(穿甲弹)', '半导体离子注入', '光伏硅片切割线'],
    riskFactors: ['回收钨替代', '海外新矿开发', '制造业周期波动'],
    note: '钨被美国、欧盟列为最关键供应链风险矿物之一'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钨开采总量控制+出口许可', note: '钨被列为中国优势战略矿产' },
      { country: '美国', policy: '国防储备库钨储备', note: '国防战略物资' },
      { country: '日本', policy: 'JOGMEC管理钨供应', note: '硬质合金产业链安全' }
    ],
    note: '钨被美国、欧盟、日本列为关键矿物，中国掌握战略定价权'
  }
};

P6_ECONOMY['Re'] = {
  pricing: {
    currentPrice: '~$1,200/公斤(铼粉)',
    priceUnit: 'USD/公斤',
    exchange: '英国金属导报/现货',
    fiveYearTrend: '稳定偏高',
    tenYearTrend: '因应用而异',
    priceDrivers: ["航空发动机高温合金(单晶叶片)", "石油催化剂", "半导体"],
    note: '铼是航空发动机单晶叶片关键合金元素，极稀缺'
  },
  topProducers: [{ rank: 1, company: 'KGHM', country: '波兰', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 2, company: 'Rio Tinto( Kennecott)', country: '美国/英国', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: 'Codelco', country: '智利', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: 'Glencore', country: '瑞士', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: 'Sumitomo', country: '日本', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铜/钼冶炼副产铋(铼含量极低)',
    midstream: '铜/钼冶炼烟尘→铼回收→高纯铼粉/铼铵',
    downstream: '航空高温合金(70%:单晶叶片)、石油催化剂(20%)、半导体(5%)',
    bottleneck: '铼为铜/钼冶炼极稀副产，全球年产仅50吨',
    note: '铼产业链：航空高温合金(70%:单晶叶片)、石油催化剂(20%)、半导体(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '航空发动机需求增长',
    longTerm: '航空高温合金需求持续增长，铼供应紧张',
    keyDrivers: ["航空发动机(单晶叶片)", "石油重整催化剂", "半导体", "核反应堆"],
    riskFactors: ["铼回收技术进步", "替代合金"],
    note: '铼被美国、欧盟列为关键矿物(航空战略材料)'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铼战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铼被美国、欧盟列为关键矿物(航空战略材料)'
  }
};

P6_ECONOMY['Os'] = {
  pricing: {
    currentPrice: '~$400/盎司(锇粉)',
    priceUnit: 'USD/盎司',
    exchange: '战略材料直接交易',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["催化剂", "电触点", "合金(锇铱)", "科研"],
    note: '锇是密度最大天然元素，极稀缺贵金属'
  },
  topProducers: [{ rank: 1, company: 'Anglo American Platinum', country: '南非', marketShare: '~40%', annualCapacity: 'N/A' }, { rank: 2, company: 'Norilsk Nickel', country: '俄罗斯', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'Impala Platinum', country: '南非', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: 'Sibanye-Stillwater', country: '南非', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: 'Lonmin', country: '南非', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铂矿副产(锇为铂矿伴生)',
    midstream: '铂冶炼→锇回收→锇粉/锇铱合金',
    downstream: '催化剂(30%)、电触点(20%)、合金(20%)、科研(15%)、医疗(5%)',
    bottleneck: '锇为铂矿极稀伴生，全球年产仅~1吨',
    note: '锇产业链：催化剂(30%)、电触点(20%)、合金(20%)、科研(15%)、医疗(5%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '催化剂和合金需求稳定',
    longTerm: '极稀缺性维持高价值',
    keyDrivers: ["催化剂(化工)", "电触点", "锇铱合金(精密仪器)", "科研"],
    riskFactors: ["锇化合物剧毒限制应用"],
    note: '锇被美国列为关键矿物(铂族金属伴生)'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '锇战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '锇被美国列为关键矿物(铂族金属伴生)'
  }
};

P6_ECONOMY['Ir'] = {
  pricing: {
    currentPrice: '~$5,000/盎司(铱粉)',
    priceUnit: 'USD/盎司',
    exchange: '战略材料直接交易',
    fiveYearTrend: '暴涨后回落(2021:$2,500→2023:$6,000→2024:$5,000)',
    tenYearTrend: '因应用而异',
    priceDrivers: ["电解水制氢(PEM催化剂)", "OLED(MBP催化剂)", "半导体", "坩埚"],
    note: '铱是PEM电解水制氢和OLED关键催化剂'
  },
  topProducers: [{ rank: 1, company: 'Anglo American Platinum', country: '南非', marketShare: '~35%', annualCapacity: 'N/A' }, { rank: 2, company: 'Norilsk Nickel', country: '俄罗斯', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: 'Impala Platinum', country: '南非', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: 'Sibanye-Stillwater', country: '南非', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: 'Lonmin', country: '南非', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铂矿副产(铱为铂矿伴生)',
    midstream: '铂冶炼→铱回收→铱粉/铱化合物',
    downstream: '电解水制氢(30%:PEM催化剂)、OLED(20%)、半导体(15%)、坩埚(10%)',
    bottleneck: '铱为铂矿极稀伴生，全球年产仅~7吨',
    note: '铱产业链：电解水制氢(30%:PEM催化剂)、OLED(20%)、半导体(15%)、坩埚(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '绿氢PEM电解推动铱需求',
    longTerm: 'PEM电解槽和OLED需求爆发，铱供应紧张',
    keyDrivers: ["PEM电解水制氢(绿氢)", "OLED显示", "半导体(钌/铱靶材)", "坩埚(蓝宝石/硅生长)"],
    riskFactors: ["PEM电解减少铱用量", "AEM电解替代PEM"],
    note: '铱被美国、欧盟列为关键矿物(氢能战略材料)'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铱战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铱被美国、欧盟列为关键矿物(氢能战略材料)'
  }
};

P6_ECONOMY['Pt'] = {
  pricing: {
    currentPrice: '~$1,000/盎司',
    priceUnit: 'USD/盎司',
    exchange: 'NYMEX / LBMA / 上海黄金交易所',
    fiveYearTrend: '区间震荡(2019:$900→2021:$1,300→2024:$1,000)',
    tenYearTrend: '从2015年高点回落，供需趋于平衡',
    priceDrivers: ['汽车催化剂需求(柴油车)', '氢能产业(铂为电解水制氢催化剂)', '南非矿区供应', '投资需求'],
    note: '铂兼具工业催化剂和贵金属投资双重属性，氢能关键材料'
  },
  topProducers: [
    { rank: 1, company: 'Anglo American Platinum', country: '南非', marketShare: '~30%', annualCapacity: '~120吨/年' },
    { rank: 2, company: 'Sibanye-Stillwater', country: '南非', marketShare: '~18%', annualCapacity: '~70吨/年' },
    { rank: 3, company: 'Impala Platinum(Implats)', country: '南非', marketShare: '~17%', annualCapacity: '~65吨/年' },
    { rank: 4, company: 'Norilsk Nickel', country: '俄罗斯', marketShare: '~10%', annualCapacity: '~40吨/年' },
    { rank: 5, company: 'Northam Platinum', country: '南非', marketShare: '~5%', annualCapacity: '~20吨/年' }
  ],
  supplyChain: {
    upstream: '铂矿开采(南非占70%、俄罗斯、津巴布韦、加拿大)',
    midstream: '选矿→冶炼精炼→铂锭/铂粉/催化剂',
    downstream: '汽车催化剂(40%)、珠宝(25%)、工业催化(15%)、投资(10%)、氢能(5%)',
    bottleneck: '南非矿区品位下降，电力危机影响开采，氢能需求增长潜力巨大',
    note: '全球年产量约180吨，南非占绝对主导'
  },
  substitutes: [
    { material: '钯', costComparison: '钯价格波动大', performanceComparison: '在汽油车催化中可互替', note: '铂钯在汽车催化剂中存在替代关系' },
    { material: '非贵金属催化剂', costComparison: '成本极低', performanceComparison: '活性和稳定性远不及铂', note: '研发中但难以完全替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年柴油车需求下降，但氢能需求开始增长',
    longTerm: '氢能经济是铂需求最大增长点，长期供需趋紧',
    keyDrivers: ['绿氢电解槽(PEM电解)', '燃料电池汽车', '柴油车催化剂存量替换', '投资需求'],
    riskFactors: ['氢能发展不及预期', '电动汽车减少催化剂需求', '南非供应恢复'],
    note: '铂是氢能经济的关键金属，长期前景取决于氢能发展速度'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '国防储备库铂族金属', note: '国防战略物资' },
      { country: '南非', policy: '矿产主权管理', note: '全球最大铂生产国' },
      { country: '日本', policy: 'JOGMEC铂族金属储备', note: '汽车催化剂供应链安全' }
    ],
    note: '铂族金属被美国、欧盟、日本列为关键矿物'
  }
};

P6_ECONOMY['Au'] = {
  pricing: {
    currentPrice: '~$2,400/盎司',
    priceUnit: 'USD/盎司',
    exchange: 'COMEX / 伦敦金市(LBMA) / 上海黄金交易所(SGE)',
    fiveYearTrend: '强劲上涨(2019:$1,500→2022:$2,000→2024:$2,400)',
    tenYearTrend: '长期牛市，央行购金与避险需求推动',
    priceDrivers: ['全球央行购金潮', '实际利率水平', '美元走势', '地缘政治避险', '通胀预期'],
    note: '黄金是终极避险资产和央行储备核心资产'
  },
  topProducers: [
    { rank: 1, company: 'Newmont(纽蒙特)', country: '美国', marketShare: '~6%', annualCapacity: '~180吨/年' },
    { rank: 2, company: 'Barrick Gold(巴里克黄金)', country: '加拿大', marketShare: '~4%', annualCapacity: '~120吨/年' },
    { rank: 3, company: 'Agnico Eagle', country: '加拿大', marketShare: '~3%', annualCapacity: '~100吨/年' },
    { rank: 4, company: 'Gold Fields', country: '南非', marketShare: '~2%', annualCapacity: '~70吨/年' },
    { rank: 5, company: 'Polyus(极地黄金)', country: '俄罗斯', marketShare: '~2%', annualCapacity: '~70吨/年' }
  ],
  supplyChain: {
    upstream: '金矿开采(中国、俄罗斯、澳大利亚、美国、加拿大、加纳)',
    midstream: '选矿→氰化浸出→熔炼精炼(99.99%)',
    downstream: '珠宝(50%)、投资金条/金币(30%)、央行储备(15%)、电子(5%)',
    bottleneck: '金矿品位下降，新矿发现减少，开采成本上升',
    note: '全球年产黄金约3,600吨，地上存量约21万吨'
  },
  substitutes: [
    { material: '白银', costComparison: '银价格约为金的1/80', performanceComparison: '金融属性类似但波动更大', note: '在投资和珠宝领域部分替代' },
    { material: '铂/钯', costComparison: '价格低于金', performanceComparison: '工业属性更强', note: '投资属性弱于金' },
    { material: '比特币', costComparison: '波动极大', performanceComparison: '"数字黄金"叙事，但无实物支撑', note: '部分投资者视为黄金替代品' }
  ],
  forecast: {
    shortTerm: '2024-2025年央行持续购金，降息预期支撑金价',
    longTerm: '去美元化趋势下央行购金持续，金价中枢上移',
    keyDrivers: ['全球央行购金(年购入量超1,000吨)', '美联储降息周期', '地缘政治不确定性', '人民币国际化与金本位回归'],
    riskFactors: ['美元走强', '实际利率大幅上升', '央行购金放缓'],
    note: '黄金正经历货币属性回归的历史性重估'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '美联储金库(诺克斯堡)', note: '全球最大黄金储备~8,133吨' },
      { country: '德国', policy: '德意志联邦银行', note: '储备~3,352吨' },
      { country: '中国', policy: '中国人民银行', note: '储备~2,264吨且持续增持' },
      { country: '俄罗斯', policy: '俄罗斯央行', note: '储备~2,332吨，去美元化核心' }
    ],
    note: '黄金是全球央行外汇储备的核心资产，去美元化推动购金潮'
  }
};

P6_ECONOMY['Hg'] = {
  pricing: {
    currentPrice: '无公开定价(受限制)',
    priceUnit: 'USD/瓶(76磅)',
    exchange: '已基本退出商业交易',
    fiveYearTrend: '持续下降',
    tenYearTrend: '因应用而异',
    priceDrivers: ["历史应用(温度计/电池)", "氯碱(已淘汰)", " artisanal金矿开采"],
    note: '汞是有毒重金属，全球《水俣公约》推动淘汰'
  },
  topProducers: [{ rank: 1, company: '西班牙Almaden(已关闭)', country: '西班牙', marketShare: '历史~30%', annualCapacity: 'N/A' }, { rank: 2, company: '中国', country: '中国', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: '墨西哥', country: '墨西哥', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '俄罗斯', country: '俄罗斯', marketShare: '~5%', annualCapacity: 'N/A' }, { rank: 5, company: '其他国家', country: '多国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '汞矿开采(已大幅减少)',
    midstream: '汞矿→焙烧→冷凝→液汞',
    downstream: '小规模金矿(40%)、氯碱(已淘汰)、荧光灯(减少)、仪器仪表(减少)',
    bottleneck: '《水俣公约》推动全球淘汰汞，产量持续下降',
    note: '汞产业链：小规模金矿(40%)、氯碱(已淘汰)、荧光灯(减少)、仪器仪表(减少)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '全球淘汰汞进程加速',
    longTerm: '2040年前基本退出商业应用',
    keyDrivers: ["小规模金矿开采(尚难完全替代)", "医疗器械(逐渐被电子替代)"],
    riskFactors: ["《水俣公约》禁令", "替代技术普及"],
    note: '汞被《水俣公约》限制生产和使用，全球淘汰中'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '汞战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '汞被《水俣公约》限制生产和使用，全球淘汰中'
  }
};

P6_ECONOMY['Tl'] = {
  pricing: {
    currentPrice: '~$5,000/公斤(铊)',
    priceUnit: 'USD/公斤',
    exchange: '战略材料直接交易',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["电子(红外光学)", "医药(历史)", "超导(TlBaCuO)", "合金"],
    note: '铊是剧毒重金属，应用受限，红外光学有少量需求'
  },
  topProducers: [{ rank: 1, company: '中国(铅锌冶炼副产)', country: '中国', marketShare: '~30%', annualCapacity: 'N/A' }, { rank: 2, company: '俄罗斯', country: '俄罗斯', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 3, company: '美国', country: '美国', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 4, company: '哈萨克斯坦', country: '哈萨克斯坦', marketShare: '~8%', annualCapacity: 'N/A' }, { rank: 5, company: '加拿大', country: '加拿大', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '铅/锌冶炼副产铊',
    midstream: '铅锌冶炼烟尘→铊回收→精制',
    downstream: '红外光学(30%)、电子(20%)、超导(10%)、医药(历史)(10%)',
    bottleneck: '铊剧毒，生产和应用受限',
    note: '铊产业链：红外光学(30%)、电子(20%)、超导(10%)、医药(历史)(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '应用受限，需求有限',
    longTerm: '逐步被替代，需求减少',
    keyDrivers: ["红外光学材料", "高温超导(Tl系)", "电子器件"],
    riskFactors: ["铊剧毒环保限制", "替代材料"],
    note: '铊被严格管控(剧毒)，应用逐步减少'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铊战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '铊被严格管控(剧毒)，应用逐步减少'
  }
};

P6_ECONOMY['Pb'] = {
  pricing: {
    currentPrice: '~$2,200/吨',
    priceUnit: 'USD/吨',
    exchange: 'LME / 上海期货交易所(SHFE)',
    fiveYearTrend: '区间震荡(2019:$2,000→2022:$2,500→2024:$2,200)',
    tenYearTrend: '需求平稳，再生铅占比提升',
    priceDrivers: ['铅酸蓄电池需求(占铅消费80%)', '再生铅供应(占供应50%)', '中国铅矿产量', 'LME库存'],
    note: '铅酸蓄电池是铅最大用途，再生铅占比超50%'
  },
  topProducers: [
    { rank: 1, company: 'Glencore', country: '瑞士', marketShare: '~8%', annualCapacity: '~45万吨' },
    { rank: 2, company: 'BHP', country: '澳大利亚', marketShare: '~5%', annualCapacity: '~30万吨' },
    { rank: 3, company: 'Vedanta', country: '印度', marketShare: '~4%', annualCapacity: '~25万吨' },
    { rank: 4, company: 'Ecobat(再生铅)', country: '美国', marketShare: '~4%', annualCapacity: '~24万吨' },
    { rank: 5, company: '豫光金铅', country: '中国', marketShare: '~3%', annualCapacity: '~20万吨' }
  ],
  supplyChain: {
    upstream: '铅矿开采(中国、澳大利亚、美国、秘鲁)',
    midstream: '选矿→冶炼精炼→精铅锭/再生铅',
    downstream: '铅酸蓄电池(80%)、电缆护套(5%)、弹药(3%)、辐射屏蔽(3%)',
    bottleneck: '原生铅矿品位下降，再生铅回收体系是关键',
    note: '全球年产量约1,300万吨(含再生铅)，再生铅占比超50%'
  },
  substitutes: [
    { material: '锂电池', costComparison: '初始成本更高', performanceComparison: '能量密度更高、寿命更长', note: '在启停电池和储能领域逐步替代铅酸' },
    { material: '钠离子电池', costComparison: '成本有潜力更低', performanceComparison: '低温性能好', note: '在储能领域可能替代铅酸' }
  ],
  forecast: {
    shortTerm: '2024-2025年铅酸电池需求稳定，LFP替代加速',
    longTerm: '铅酸电池在启动和备用电源领域仍不可完全替代',
    keyDrivers: ['汽车启动电池存量市场', 'UPS备用电源', '电动车低速车电池', '储能(铅碳电池)'],
    riskFactors: ['锂电池替代加速', '铅毒性环保限制', '再生铅回收率提升减少原生需求'],
    note: '铅市场受再生铅调节，价格波动相对较小'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铅战略储备', note: '铅矿进口依赖' },
      { country: '美国', policy: '国防储备库铅储备', note: '国防战略物资(弹药)' },
      { country: '日本', policy: 'JOGMEC管理', note: '铅矿进口依赖' }
    ],
    note: '铅被美国列为关键矿物(弹药用途)'
  }
};

P6_ECONOMY['Bi'] = {
  pricing: {
    currentPrice: '~$6/磅(铋锭)',
    priceUnit: 'USD/磅',
    exchange: '英国金属导报(MB) / 亚洲金属网',
    fiveYearTrend: '波动上涨(2019:$3→2022:$7→2024:$6)',
    tenYearTrend: '替代铅和半导体需求驱动',
    priceDrivers: ['冶金添加剂(替代铅)', '医药需求', '中国铅矿副产铋', '电子器件(铋酸盐)'],
    note: '铋是最环保的重金属(无毒)，替代铅的理想材料'
  },
  topProducers: [
    { rank: 1, company: '中国多家(铅冶炼副产)', country: '中国', marketShare: '~60%', annualCapacity: '~1万吨' },
    { rank: 2, company: 'Nyrstar', country: '比利时', marketShare: '~10%', annualCapacity: '~1,800吨' },
    { rank: 3, company: 'Recylex', country: '德国', marketShare: '~5%', annualCapacity: '~900吨' },
    { rank: 4, company: 'Teck Resources', country: '加拿大', marketShare: '~4%', annualCapacity: '~700吨' },
    { rank: 5, company: 'Korea Zinc', country: '韩国', marketShare: '~3%', annualCapacity: '~500吨' }
  ],
  supplyChain: {
    upstream: '铋为铅矿/钨矿/锌矿加工副产',
    midstream: '铅冶炼渣→浸出→电解精炼→铋锭',
    downstream: '冶金(40%:替代铅)、医药(25%)、化工(15%)、电子(10%)、化妆品(5%)',
    bottleneck: '铋完全依赖铅冶炼副产，供应受铅产量制约',
    note: '全球年产量约1.7万吨，中国占60%+'
  },
  substitutes: [
    { material: '铅', costComparison: '成本更低', performanceComparison: '有毒但密度更高', note: '在辐射屏蔽等领域铅仍占主导' },
    { material: '锡/锌', costComparison: '成本相近', performanceComparison: '在冶金添加剂中可替代', note: '在无铅焊料中部分替代' }
  ],
  forecast: {
    shortTerm: '2024-2025年需求稳定增长',
    longTerm: '替代铅应用持续扩大，半导体需求增长',
    keyDrivers: ['无铅化(铋替代铅)', '医药(胃药)', '半导体(铋烯)', '核电池(铋-210)'],
    riskFactors: ['铅产量下降(铋为副产)', '回收铋增加', '其他无铅材料竞争'],
    note: '铋是无铅化转型的关键替代材料'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '铋战略保护矿种', note: '中国主导铋供应' },
      { country: '美国', policy: '国防储备库铋储备', note: '列为关键矿物' },
      { country: '日本', policy: 'JOGMEC管理', note: '铋进口依赖' }
    ],
    note: '铋被美国、欧盟列为关键矿物'
  }
};

P6_ECONOMY['Po'] = {
  pricing: {
    currentPrice: '~$3,000/克(钋-210估算)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["航天热源(RTG)", "中子源", "静电消除"],
    note: '极强放射性，钋-210用于航天RTG，产量极低'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '航天热源(RTG)、中子源、静电消除',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '极强放射性，钋-210用于航天RTG，产量极低'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['At'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '砹是地壳中最稀有元素之一，极不稳定，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '砹是地壳中最稀有元素之一，极不稳定，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Rn'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["地震研究", "室内氡监测"],
    note: '放射性惰性气体，主要关注室内氡危害，无商业化市场'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '癌症放射治疗(历史)、地震研究',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '放射性惰性气体，主要关注室内氡危害，无商业化市场'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Fr'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '钫是地壳中最稀有的天然元素之一，极不稳定，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '钫是地壳中最稀有的天然元素之一，极不稳定，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Ra'] = {
  pricing: {
    currentPrice: '~$20,000/克(镭-226)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["历史放射治疗", "工业放射源"],
    note: '镭历史上用于发光涂料和癌症治疗，现多被替代'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '癌症放射治疗(历史)、工业放射源',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '镭历史上用于发光涂料和癌症治疗，现多被替代'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Ac'] = {
  pricing: {
    currentPrice: '~$50,000/克(锕-225)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["癌症靶向alpha治疗", "中子源"],
    note: '锕-225是癌症靶向治疗前沿同位素，供应极度稀缺'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '靶向alpha放射治疗(癌症)、中子源',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '锕-225是癌症靶向治疗前沿同位素，供应极度稀缺'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Th'] = {
  pricing: {
    currentPrice: '~$50/公斤(硝酸钍)',
    priceUnit: 'USD/公斤',
    exchange: '政府/研究机构交易',
    fiveYearTrend: '稳定',
    tenYearTrend: '因应用而异',
    priceDrivers: ["核燃料(钍-铀循环)", "高温合金", "催化剂", "光学"],
    note: '钍是第四代核燃料候选，钍-铀循环更安全'
  },
  topProducers: [{ rank: 1, company: '印度(独居石砂矿)', country: '印度', marketShare: '~30%', annualCapacity: 'N/A' }, { rank: 2, company: '中国', country: '中国', marketShare: '~20%', annualCapacity: 'N/A' }, { rank: 3, company: '巴西', country: '巴西', marketShare: '~15%', annualCapacity: 'N/A' }, { rank: 4, company: '澳大利亚', country: '澳大利亚', marketShare: '~10%', annualCapacity: 'N/A' }, { rank: 5, company: '美国', country: '美国', marketShare: '~5%', annualCapacity: 'N/A' }],
  supplyChain: {
    upstream: '独居石砂矿(含钍稀土磷酸盐)',
    midstream: '独居石→钍分离→硝酸钍/金属钍',
    downstream: '核燃料(钍-铀循环)(40%)、高温合金(20%)、催化剂(15%)、光学(10%)',
    bottleneck: '钍-铀循环核反应堆尚在研发阶段，未商业化',
    note: '钍产业链：核燃料(钍-铀循环)(40%)、高温合金(20%)、催化剂(15%)、光学(10%)...'
  },
  substitutes: [],
  forecast: {
    shortTerm: '钍-铀循环研发持续推进',
    longTerm: '钍核燃料可能成为第四代核能方向',
    keyDrivers: ["钍基熔盐堆(TMSR)", "印度钍计划", "核能脱碳"],
    riskFactors: ["钍-铀循环技术成熟度", "铀价格竞争"],
    note: '钍被列为潜在核燃料战略物资，印度储量最大'
  },
  strategicReserves: {
    countries: [
      { country: '中国', policy: '钍战略储备(如适用)', note: '关键矿物供应链安全' },
      { country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' },
      { country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }
    ],
    note: '钍被列为潜在核燃料战略物资，印度储量最大'
  }
};

P6_ECONOMY['Pa'] = {
  pricing: {
    currentPrice: '~$280,000/克(镤-231)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["地质年代学研究", "核物理研究"],
    note: '极稀有放射性元素，无商业化应用，仅用于科研'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '科学研究、地质年代学',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '极稀有放射性元素，无商业化应用，仅用于科研'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['U'] = {
  pricing: {
    currentPrice: '~$85/磅(U3O8)',
    priceUnit: 'USD/磅',
    exchange: 'NYMEX铀期货 / TradeTech / UxC',
    fiveYearTrend: '强劲上涨(2019:$25→2021:$45→2024:$85)',
    tenYearTrend: '从福岛后低谷反弹，核电复兴驱动',
    priceDrivers: ['全球核电复兴(SMR+大型核电站)', 'SPUT等金融机构实体采购', '哈萨斯克斯坦产量', '俄罗斯浓缩铀供应'],
    note: '铀是核电唯一燃料，全球核电复兴推动结构性短缺'
  },
  topProducers: [
    { rank: 1, company: 'Kazatomprom(哈原工)', country: '哈萨克斯坦', marketShare: '~22%', annualCapacity: '~1.3万吨U' },
    { rank: 2, company: 'Cameco(卡梅科)', country: '加拿大', marketShare: '~10%', annualCapacity: '~6,000吨U' },
    { rank: 3, company: 'Orano(欧安诺)', country: '法国', marketShare: '~9%', annualCapacity: '~5,500吨U' },
    { rank: 4, company: 'ARMZ/Uranium One', country: '俄罗斯', marketShare: '~8%', annualCapacity: '~5,000吨U' },
    { rank: 5, company: 'Energy Fuels', country: '美国', marketShare: '~3%', annualCapacity: '~1,800吨U' }
  ],
  supplyChain: {
    upstream: '铀矿开采(哈萨克斯坦ISL、加拿大地下矿、纳米比亚、澳大利亚)',
    midstream: '采矿→水冶(Yellowcake U3O8)→转化(UF6)→浓缩(离心)→燃料芯块制造',
    downstream: '核电站发电(95%)、科研/医用同位素(3%)、军用(2%)',
    bottleneck: '浓缩产能高度集中在俄罗斯(ROSATOM占35%全球浓缩产能)',
    note: '全球年产量约5.5万吨U，消费量约6.5万吨U，缺口来自二次供应'
  },
  substitutes: [],
  forecast: {
    shortTerm: '2024-2025年供应缺口扩大，价格维持高位',
    longTerm: '全球核电装机持续增长，铀价中枢上移',
    keyDrivers: ['全球核电复兴(中国/印度/中东)', 'SMR小型堆商业化', 'AI数据中心电力需求', '核能被重新纳入绿色能源'],
    riskFactors: ['核安全事故风险', '二次供应(稀释高浓缩铀)', '哈萨克斯坦产量波动', '俄罗斯浓缩铀制裁'],
    note: '铀市场进入结构性短缺周期，AI时代电力需求加速核电复兴'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '铀储备计划(美国能源部)', note: '2024年启动国内铀储备建设' },
      { country: '中国', policy: '中核集团国家铀储备', note: '核燃料循环战略储备' },
      { country: '日本', policy: '原子力机构(JAEA)铀储备', note: '核燃料循环储备' },
      { country: '欧盟', policy: '欧洲原子能共同体(Euratom)供应局', note: '核燃料供应安全' }
    ],
    note: '铀是核燃料循环核心，各国均建立战略储备体系'
  }
};

P6_ECONOMY['Np'] = {
  pricing: {
    currentPrice: '~$660/克(镎-237)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["航天核电池(RTG)", "核武器中子源"],
    note: '核反应堆副产物，用于航天核电池(RTG)钚-238前体'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '钚-238生产(航天核电池)、核武器中子源',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '核反应堆副产物，用于航天核电池(RTG)钚-238前体'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Pu'] = {
  pricing: {
    currentPrice: '~$5,500/克(钚-238)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["核武器", "航天核电池(RTG)", "MOX核燃料"],
    note: '钚是核武器和航天核电池核心材料，受国际核监管(IAEA)'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '核武器、核电站MOX燃料、航天核电池(RTG)',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '钚是核武器和航天核电池核心材料，受国际核监管(IAEA)'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Am'] = {
  pricing: {
    currentPrice: '~$1,500/克(镅-241)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["烟雾报警器", "工业测厚仪", "航天核电池"],
    note: '镅-241广泛用于烟雾报警器(亿级量级)，镅-243用于科研'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '烟雾报警器、工业测厚仪、航天核电池',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '镅-241广泛用于烟雾报警器(亿级量级)，镅-243用于科研'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Cm'] = {
  pricing: {
    currentPrice: '~$185,000/克(锔-244)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["航天核电池(RTG)", "X射线源", "科研"],
    note: '极强放射性，锔-244用于航天RTG，产量极低'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '航天核电池(RTG)、X射线源、科学研究',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '极强放射性，锔-244用于航天RTG，产量极低'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Bk'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '锫半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '锫半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Cf'] = {
  pricing: {
    currentPrice: '~$27,000,000/克(锎-252)',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: ["石油测井中子源", "核反应启动源", "癌症治疗"],
    note: '锎-252是极强中子源，全球年产仅克级'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '中子源(石油测井/核反应启动/癌症治疗)',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '锎-252是极强中子源，全球年产仅克级'
  },
  substitutes: [],
  forecast: {
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  },
  strategicReserves: {
    countries: [
      { country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' },
      { country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' },
      { country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }
};

P6_ECONOMY['Es'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '锿半衰期极短(最长20天)，仅实验室合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '锿半衰期极短(最长20天)，仅实验室合成，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Fm'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '镄半衰期极短(最长100天)，仅实验室合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '镄半衰期极短(最长100天)，仅实验室合成，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Md'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '钔半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '钔半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['No'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '锘半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '锘半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Lr'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '铹半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' },
    { rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' },
    { rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' },
    { rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }
  ],
  supplyChain: {
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '科学研究',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '铹半衰期极短，仅实验室合成，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }
};

P6_ECONOMY['Rf'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=104)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𬬻(Z=104)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Db'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=105)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𬭊(Z=105)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Sg'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=106)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𬭳(Z=106)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Bh'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=107)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𬭛(Z=107)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Hs'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=108)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𬭶(Z=108)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Mt'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=109)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '鿏(Z=109)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Ds'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=110)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𫟼(Z=110)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Rg'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=111)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𬬭(Z=111)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Cn'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=112)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '鎶(Z=112)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Nh'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=113)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '鉨(Z=113)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Fl'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=114)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𫓧(Z=114)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Mc'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=115)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '镆(Z=115)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Lv'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=116)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '𫟷(Z=116)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Ts'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=117)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '鿬(Z=117)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

P6_ECONOMY['Og'] = {
  pricing: {
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z=118)，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  },
  topProducers: [
    { rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' },
    { rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' },
    { rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' },
    { rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }
  ],
  supplyChain: {
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '鿫(Z=118)是超重元素，无商业化应用，无市场数据'
  },
  substitutes: [],
  forecast: {
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  },
  strategicReserves: {
    countries: [],
    note: '无商业化应用，无市场数据'
  }
};

if (typeof window !== 'undefined') {
  window.P6_ECONOMY = P6_ECONOMY;
}
