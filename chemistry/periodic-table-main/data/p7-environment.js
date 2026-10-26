/**
 * P7-1：环境生态数据
 * 包含：碳排放、生态毒性、环境背景值、循环回收、环境法规限值
 * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS
 */

var P7_ENVIRONMENT = {};

// ════════════════════════════════════════════════════
//  环境生态数据（按 z 索引）
// ════════════════════════════════════════════════════

// ── 第 1 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[1] = {  // 氢
  carbonFootprint: {
    miningEmission: '0.5 kg CO₂/kg',
    smeltingEmission: '2.1 kg CO₂/kg',
    totalLifecycle: '2.6 kg CO₂/kg',
    note: '天然气蒸汽重整制氢为主要排放源，绿氢电解路线碳排放<1 kg CO₂/kg'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<1',
    logKow: '0.45',
    classification: '低毒',
    note: '氢气不溶于水，无明显水生毒性'
  },
  environmentalBackground: {
    crustAbundance: '1400 ppm',
    soilBackground: '—',
    waterBackground: '—',
    atmosphereBackground: '0.5 ppmv',
    note: '大气中以水蒸气形式存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '高',
    mainRecyclingMethod: '氢气回收压缩再利用',
    secondarySourceRatio: 'N/A',
    note: '工业副产氢气回收利用率提升中'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '氢气无直接环境排放限制'
  }
};

P7_ENVIRONMENT[2] = {  // 氦
  carbonFootprint: {
    miningEmission: '0.1 kg CO₂/kg',
    smeltingEmission: '0.3 kg CO₂/kg',
    totalLifecycle: '0.4 kg CO₂/kg',
    note: '天然气分离提取，能耗较低'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '无毒',
    note: '惰性气体，无生态毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.008 ppm',
    soilBackground: '—',
    waterBackground: '—',
    atmosphereBackground: '5.24 ppmv',
    note: '大气中含量极低且稳定'
  },
  recycling: {
    recyclingRate: '85%',
    recyclability: '高',
    mainRecyclingMethod: '低温液化分离回收',
    secondarySourceRatio: 'N/A',
    note: 'MRI和科研用氦气回收率逐年提高'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '惰性气体无环境限制'
  }
};


// ── 第 2 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[3] = {  // 锂
  carbonFootprint: {
    miningEmission: '8.5 kg CO₂/kg',
    smeltingEmission: '5.2 kg CO₂/kg',
    totalLifecycle: '13.7 kg CO₂/kg',
    note: '盐湖提锂碳足迹低于硬岩开采'
  },
  ecotoxicity: {
    aquaticLC50: '12 mg/L',
    testSpecies: '大型溞',
    bcf: '<5',
    logKow: '-0.77',
    classification: '低毒',
    note: '锂盐对水生生物有中等毒性'
  },
  environmentalBackground: {
    crustAbundance: '20 ppm',
    soilBackground: '25 mg/kg',
    waterBackground: '0.18 μg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '地壳中含量较低，锂矿区周边背景值偏高'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '中',
    mainRecyclingMethod: '湿法冶金回收锂离子电池',
    secondarySourceRatio: '5%',
    note: '锂电回收率随产业成熟度提升中'
  },
  environmentalRegulation: {
    waterDischargeLimit: '2.5 mg/L',
    airEmissionLimit: '0.05 mg/m³',
    soilScreeningValue: '100 mg/kg',
    internationalTreaty: '无',
    note: 'GB 8978 锂排放限值'
  }
};

P7_ENVIRONMENT[4] = {  // 铍
  carbonFootprint: {
    miningEmission: '15 kg CO₂/kg',
    smeltingEmission: '25 kg CO₂/kg',
    totalLifecycle: '40 kg CO₂/kg',
    note: '铍矿开采冶炼能耗高'
  },
  ecotoxicity: {
    aquaticLC50: '0.15 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '100',
    logKow: '0.98',
    classification: '高毒',
    note: '铍离子对水生生物高毒'
  },
  environmentalBackground: {
    crustAbundance: '2.8 ppm',
    soilBackground: '1.5 mg/kg',
    waterBackground: '0.01 μg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '土壤背景值低'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '铜铍合金废料回收',
    secondarySourceRatio: '15%',
    note: '铍铜合金回收较成熟'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.005 mg/L',
    airEmissionLimit: '0.01 mg/m³',
    soilScreeningValue: '20 mg/kg',
    internationalTreaty: '无',
    note: 'GB 8978 铍排放极严格限制'
  }
};

P7_ENVIRONMENT[5] = {  // 硼
  carbonFootprint: {
    miningEmission: '3.2 kg CO₂/kg',
    smeltingEmission: '8.5 kg CO₂/kg',
    totalLifecycle: '11.7 kg CO₂/kg',
    note: '硼砂矿开采和硼酸生产'
  },
  ecotoxicity: {
    aquaticLC50: '65 mg/L',
    testSpecies: '大型溞',
    bcf: '<5',
    logKow: '0.17',
    classification: '低毒',
    note: '硼酸盐对水生生物低毒'
  },
  environmentalBackground: {
    crustAbundance: '10 ppm',
    soilBackground: '30 mg/kg',
    waterBackground: '0.1 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '土壤背景值差异大'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '中',
    mainRecyclingMethod: '硼硅酸盐玻璃回收',
    secondarySourceRatio: '8%',
    note: '主要通过玻璃回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: '5 mg/L',
    airEmissionLimit: '0.5 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: 'GB 8978 硼排放限值'
  }
};

P7_ENVIRONMENT[6] = {  // 碳
  carbonFootprint: {
    miningEmission: '0.8 kg CO₂/kg',
    smeltingEmission: '3.5 kg CO₂/kg',
    totalLifecycle: '4.3 kg CO₂/kg',
    note: '煤炭开采和钢铁冶炼为最大排放源，CCUS技术减排中'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<10',
    logKow: 'N/A',
    classification: '无毒',
    note: '碳单质（石墨/金刚石）基本无毒'
  },
  environmentalBackground: {
    crustAbundance: '200 ppm',
    soilBackground: '20000 mg/kg',
    waterBackground: '10 mg/L',
    atmosphereBackground: '420 ppmv CO₂',
    note: '大气CO₂浓度持续上升，从280ppm到420ppm'
  },
  recycling: {
    recyclingRate: '60%',
    recyclability: '高',
    mainRecyclingMethod: '钢铁/铝冶炼碳电极回收',
    secondarySourceRatio: '30%',
    note: '钢铁行业碳回收利用率高'
  },
  environmentalRegulation: {
    waterDischargeLimit: '30 mg/L TOC',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '巴黎协定（CO₂减排）',
    note: '碳减排是全球气候政策核心'
  }
};

P7_ENVIRONMENT[7] = {  // 氮
  carbonFootprint: {
    miningEmission: '1.5 kg CO₂/kg',
    smeltingEmission: '4.2 kg CO₂/kg',
    totalLifecycle: '5.7 kg CO₂/kg',
    note: '合成氨Haber-Bosch法为主要排放源'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<1',
    logKow: '-0.67',
    classification: '低毒',
    note: '氮气惰性，氮氧化物有间接毒性'
  },
  environmentalBackground: {
    crustAbundance: '19 ppm',
    soilBackground: '2000 mg/kg',
    waterBackground: '0.5 mg/L',
    atmosphereBackground: '780840 ppmv',
    note: '大气主要成分'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '高',
    mainRecyclingMethod: '空气分离制氮',
    secondarySourceRatio: 'N/A',
    note: '氮气来自空气分离，资源无限'
  },
  environmentalRegulation: {
    waterDischargeLimit: '15 mg/L 总氮',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '氮氧化物(NOx)受GB 16297限制'
  }
};

P7_ENVIRONMENT[8] = {  // 氧
  carbonFootprint: {
    miningEmission: '0.2 kg CO₂/kg',
    smeltingEmission: '0.5 kg CO₂/kg',
    totalLifecycle: '0.7 kg CO₂/kg',
    note: '空气分离制氧，能耗低'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '无毒',
    note: '生命必需元素'
  },
  environmentalBackground: {
    crustAbundance: '46.6%',
    soilBackground: '—',
    waterBackground: '8 mg/L 溶解氧',
    atmosphereBackground: '209460 ppmv',
    note: '地壳中最丰富的元素'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '高',
    mainRecyclingMethod: '空气分离',
    secondarySourceRatio: 'N/A',
    note: '资源无限'
  },
  environmentalRegulation: {
    waterDischargeLimit: '≥2 mg/L DO',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '水体溶解氧是水质关键指标'
  }
};

P7_ENVIRONMENT[9] = {  // 氟
  carbonFootprint: {
    miningEmission: '5.0 kg CO₂/kg',
    smeltingEmission: '3.0 kg CO₂/kg',
    totalLifecycle: '8.0 kg CO₂/kg',
    note: '萤石矿开采和氢氟酸生产'
  },
  ecotoxicity: {
    aquaticLC50: '51 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '<5',
    logKow: '0.52',
    classification: '中毒',
    note: '氟离子对水生生物中等毒性'
  },
  environmentalBackground: {
    crustAbundance: '585 ppm',
    soilBackground: '300 mg/kg',
    waterBackground: '0.1 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '土壤背景值差异大'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '中',
    mainRecyclingMethod: '氟化氢酸废液回收',
    secondarySourceRatio: '10%',
    note: '铝工业和半导体行业氟回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: '10 mg/L',
    airEmissionLimit: '9 mg/m³',
    soilScreeningValue: '800 mg/kg',
    internationalTreaty: '无',
    note: 'GB 8978 氟化物排放限值'
  }
};

P7_ENVIRONMENT[10] = {  // 氖
  carbonFootprint: {
    miningEmission: '0.2 kg CO₂/kg',
    smeltingEmission: '0.5 kg CO₂/kg',
    totalLifecycle: '0.7 kg CO₂/kg',
    note: '空气分离提取'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '无毒',
    note: '惰性气体'
  },
  environmentalBackground: {
    crustAbundance: '0.005 ppm',
    soilBackground: '—',
    waterBackground: '—',
    atmosphereBackground: '18.18 ppmv',
    note: '大气微量成分'
  },
  recycling: {
    recyclingRate: '50%',
    recyclability: '高',
    mainRecyclingMethod: '低温液化分离回收',
    secondarySourceRatio: 'N/A',
    note: '灯管用氖气回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '惰性气体无限制'
  }
};


// ── 第 3 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[11] = {  // 钠
  carbonFootprint: {
    miningEmission: '2.0 kg CO₂/kg',
    smeltingEmission: '6.5 kg CO₂/kg',
    totalLifecycle: '8.5 kg CO₂/kg',
    note: '食盐电解和氯碱工业'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<1',
    logKow: '-0.77',
    classification: '低毒',
    note: '钠盐低毒，高浓度盐碱化影响'
  },
  environmentalBackground: {
    crustAbundance: '2.36%',
    soilBackground: '10000 mg/kg',
    waterBackground: '10 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '地壳丰富元素'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '中',
    mainRecyclingMethod: '工业盐废液回收',
    secondarySourceRatio: '20%',
    note: '氯碱工业废液回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钠盐无严格排放限制，盐碱化关注增加'
  }
};

P7_ENVIRONMENT[12] = {  // 镁
  carbonFootprint: {
    miningEmission: '5.5 kg CO₂/kg',
    smeltingEmission: '20 kg CO₂/kg',
    totalLifecycle: '25.5 kg CO₂/kg',
    note: '皮江法炼镁碳排放高，电解法较低'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '大型溞',
    bcf: '<1',
    logKow: 'N/A',
    classification: '低毒',
    note: '镁盐低毒'
  },
  environmentalBackground: {
    crustAbundance: '2.33%',
    soilBackground: '5000 mg/kg',
    waterBackground: '4 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '地壳丰富元素'
  },
  recycling: {
    recyclingRate: '25%',
    recyclability: '高',
    mainRecyclingMethod: '镁合金废料重熔',
    secondarySourceRatio: '20%',
    note: '汽车镁合金部件回收增长'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镁盐无严格限制'
  }
};

P7_ENVIRONMENT[13] = {  // 铝
  carbonFootprint: {
    miningEmission: '0.5 kg CO₂/kg',
    smeltingEmission: '12 kg CO₂/kg',
    totalLifecycle: '12.5 kg CO₂/kg',
    note: '电解铝是高耗能行业，绿电铝碳足迹低50%+'
  },
  ecotoxicity: {
    aquaticLC50: '>100 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '<10',
    logKow: 'N/A',
    classification: '低毒',
    note: '铝离子在酸性水体中有毒'
  },
  environmentalBackground: {
    crustAbundance: '8.23%',
    soilBackground: '70000 mg/kg',
    waterBackground: '0.3 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '地壳最丰富金属'
  },
  recycling: {
    recyclingRate: '75%',
    recyclability: '高',
    mainRecyclingMethod: '铝废料重熔再生',
    secondarySourceRatio: '35%',
    note: '铝回收率行业领先，再生铝能耗仅为原铝5%'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铝行业受碳排放政策影响大'
  }
};

P7_ENVIRONMENT[14] = {  // 硅
  carbonFootprint: {
    miningEmission: '1.0 kg CO₂/kg',
    smeltingEmission: '14 kg CO₂/kg',
    totalLifecycle: '15.0 kg CO₂/kg',
    note: '工业硅冶炼高耗能，光伏硅料更甚'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<10',
    logKow: 'N/A',
    classification: '无毒',
    note: '硅基本无毒'
  },
  environmentalBackground: {
    crustAbundance: '28.2%',
    soilBackground: '300000 mg/kg',
    waterBackground: '5 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '地壳第二丰富元素'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '中',
    mainRecyclingMethod: '硅片废料回收再提纯',
    secondarySourceRatio: '15%',
    note: '光伏硅片回收增长快'
  },
  environmentalRegulation: {
    waterDischargeLimit: '10 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '硅尘排放受GB 16297限制'
  }
};

P7_ENVIRONMENT[15] = {  // 磷
  carbonFootprint: {
    miningEmission: '2.0 kg CO₂/kg',
    smeltingEmission: '5.0 kg CO₂/kg',
    totalLifecycle: '7.0 kg CO₂/kg',
    note: '磷矿开采和磷肥生产'
  },
  ecotoxicity: {
    aquaticLC50: '>100 mg/L',
    testSpecies: '大型溞',
    bcf: '<5',
    logKow: 'N/A',
    classification: '低毒',
    note: '磷酸盐本身低毒，但导致富营养化'
  },
  environmentalBackground: {
    crustAbundance: '1050 ppm',
    soilBackground: '500 mg/kg',
    waterBackground: '0.02 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '磷是水体富营养化关键限制因子'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '中',
    mainRecyclingMethod: '磷肥污泥回收利用',
    secondarySourceRatio: '10%',
    note: '磷资源回收日益重要'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.5 mg/L 总磷',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '总磷是地表水环境质量标准关键指标'
  }
};

P7_ENVIRONMENT[16] = {  // 硫
  carbonFootprint: {
    miningEmission: '0.3 kg CO₂/kg',
    smeltingEmission: '2.0 kg CO₂/kg',
    totalLifecycle: '2.3 kg CO₂/kg',
    note: '硫磺回收和冶炼烟气制酸'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<1',
    logKow: 'N/A',
    classification: '低毒',
    note: '硫酸盐低毒，硫化氢高毒'
  },
  environmentalBackground: {
    crustAbundance: '350 ppm',
    soilBackground: '300 mg/kg',
    waterBackground: '20 mg/L SO₄',
    atmosphereBackground: '1 μg/m³ SO₂',
    note: 'SO₂是酸雨主要成因'
  },
  recycling: {
    recyclingRate: '40%',
    recyclability: '高',
    mainRecyclingMethod: '冶炼烟气制酸回收硫',
    secondarySourceRatio: '30%',
    note: '硫回收技术成熟'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '550 mg/m³ SO₂',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: 'SO₂排放受GB 16297严格控制'
  }
};

P7_ENVIRONMENT[17] = {  // 氯
  carbonFootprint: {
    miningEmission: '1.0 kg CO₂/kg',
    smeltingEmission: '3.5 kg CO₂/kg',
    totalLifecycle: '4.5 kg CO₂/kg',
    note: '氯碱工业电解食盐'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '中毒',
    note: '游离氯对水生生物有毒'
  },
  environmentalBackground: {
    crustAbundance: '145 ppm',
    soilBackground: '100 mg/kg',
    waterBackground: '10 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '氯离子广泛存在于环境'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '氯化氢废气回收',
    secondarySourceRatio: '15%',
    note: '副产氯化氢回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '65 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '斯德哥尔摩公约（有机氯污染物）',
    note: '有机氯持久性污染物受公约管控'
  }
};

P7_ENVIRONMENT[18] = {  // 氩
  carbonFootprint: {
    miningEmission: '0.1 kg CO₂/kg',
    smeltingEmission: '0.4 kg CO₂/kg',
    totalLifecycle: '0.5 kg CO₂/kg',
    note: '空气分离提取'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '无毒',
    note: '惰性气体'
  },
  environmentalBackground: {
    crustAbundance: '3.5 ppm',
    soilBackground: '—',
    waterBackground: '—',
    atmosphereBackground: '9340 ppmv',
    note: '大气第三大成分'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '高',
    mainRecyclingMethod: '焊接保护气气回收',
    secondarySourceRatio: 'N/A',
    note: '工业氩气回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '惰性气体无限制'
  }
};


// ── 第 4 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[19] = {  // 钾
  carbonFootprint: {
    miningEmission: '1.5 kg CO₂/kg',
    smeltingEmission: '3.0 kg CO₂/kg',
    totalLifecycle: '4.5 kg CO₂/kg',
    note: '钾盐矿开采和钾肥生产'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<1',
    logKow: 'N/A',
    classification: '低毒',
    note: '钾盐低毒'
  },
  environmentalBackground: {
    crustAbundance: '2.09%',
    soilBackground: '15000 mg/kg',
    waterBackground: '2 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '地壳丰富元素'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '钾肥废液部分回收',
    secondarySourceRatio: '5%',
    note: '钾肥难以有效回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钾盐无严格限制'
  }
};

P7_ENVIRONMENT[20] = {  // 钙
  carbonFootprint: {
    miningEmission: '0.5 kg CO₂/kg',
    smeltingEmission: '2.0 kg CO₂/kg',
    totalLifecycle: '2.5 kg CO₂/kg',
    note: '石灰石开采和石灰煅烧'
  },
  ecotoxicity: {
    aquaticLC50: '>1000 mg/L',
    testSpecies: '斑马鱼',
    bcf: '<1',
    logKow: 'N/A',
    classification: '无毒',
    note: '钙盐基本无毒'
  },
  environmentalBackground: {
    crustAbundance: '4.15%',
    soilBackground: '20000 mg/kg',
    waterBackground: '15 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '地壳丰富元素'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '建筑废料回收碳酸钙',
    secondarySourceRatio: '10%',
    note: '建筑废料回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '—',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钙盐无严格限制'
  }
};

P7_ENVIRONMENT[21] = {  // 钪
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '钪为稀散元素，环境数据有限'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '大型溞',
    bcf: '50',
    logKow: '1.2',
    classification: '中毒',
    note: '钪的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '22 ppm',
    soilBackground: '15 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钪环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '钪合金废料回收',
    secondarySourceRatio: '3%',
    note: '钪回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '50 mg/kg',
    internationalTreaty: '无',
    note: '钪环境法规限值'
  }
};

P7_ENVIRONMENT[22] = {  // 钛
  carbonFootprint: {
    miningEmission: '3 kg CO₂/kg',
    smeltingEmission: '18 kg CO₂/kg',
    totalLifecycle: '约21.0 kg CO₂/kg',
    note: '钛白粉生产是主要环境负担'
  },
  ecotoxicity: {
    aquaticLC50: '10 mg/L',
    testSpecies: '斑马鱼',
    bcf: '20',
    logKow: '0.5',
    classification: '低毒',
    note: '钛的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5650 ppm',
    soilBackground: '3000 mg/kg',
    waterBackground: '0.003 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '钛环境背景值'
  },
  recycling: {
    recyclingRate: '40%',
    recyclability: '中',
    mainRecyclingMethod: '钛合金废料真空熔炼回收',
    secondarySourceRatio: '25%',
    note: '钛回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钛环境法规限值'
  }
};

P7_ENVIRONMENT[23] = {  // 钒
  carbonFootprint: {
    miningEmission: '5 kg CO₂/kg',
    smeltingEmission: '12 kg CO₂/kg',
    totalLifecycle: '约17.0 kg CO₂/kg',
    note: '钒渣是钢铁工业副产物'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '30',
    logKow: '0.8',
    classification: '中毒',
    note: '钒的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '120 ppm',
    soilBackground: '100 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '钒环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '钒渣回收提钒',
    secondarySourceRatio: '10%',
    note: '钒回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.02 mg/m³',
    soilScreeningValue: '200 mg/kg',
    internationalTreaty: '无',
    note: '钒环境法规限值'
  }
};

P7_ENVIRONMENT[24] = {  // 铬
  carbonFootprint: {
    miningEmission: '3 kg CO₂/kg',
    smeltingEmission: '10 kg CO₂/kg',
    totalLifecycle: '约13.0 kg CO₂/kg',
    note: '六价铬高毒，严格管控'
  },
  ecotoxicity: {
    aquaticLC50: '0.1 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '0.5',
    classification: '高毒',
    note: '铬的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '102 ppm',
    soilBackground: '60 mg/kg',
    waterBackground: '0.002 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '铬环境背景值'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '中',
    mainRecyclingMethod: '不锈钢废料回收铬',
    secondarySourceRatio: '25%',
    note: '铬回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.5 mg/L (Cr⁶⁺)',
    airEmissionLimit: '0.05 mg/m³ (Cr⁶⁺)',
    soilScreeningValue: '300 mg/kg',
    internationalTreaty: '斯德哥尔摩公约',
    note: '铬环境法规限值'
  }
};

P7_ENVIRONMENT[25] = {  // 锰
  carbonFootprint: {
    miningEmission: '2 kg CO₂/kg',
    smeltingEmission: '8 kg CO₂/kg',
    totalLifecycle: '约10.0 kg CO₂/kg',
    note: '锰矿开采和电解锰污染严重'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '100',
    logKow: '0.2',
    classification: '中毒',
    note: '锰的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '950 ppm',
    soilBackground: '500 mg/kg',
    waterBackground: '0.01 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '锰环境背景值'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '锰铁合金废料回收',
    secondarySourceRatio: '15%',
    note: '锰回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '2 mg/L',
    airEmissionLimit: '0.2 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '锰环境法规限值'
  }
};

P7_ENVIRONMENT[26] = {  // 铁
  carbonFootprint: {
    miningEmission: '0.5 kg CO₂/kg',
    smeltingEmission: '1.8 kg CO₂/kg',
    totalLifecycle: '约2.3 kg CO₂/kg',
    note: '钢铁行业碳减排是全球重点'
  },
  ecotoxicity: {
    aquaticLC50: '10 mg/L',
    testSpecies: '斑马鱼',
    bcf: '100',
    logKow: '0.3',
    classification: '低毒',
    note: '铁的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5.63%',
    soilBackground: '30000 mg/kg',
    waterBackground: '0.5 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '铁环境背景值'
  },
  recycling: {
    recyclingRate: '85%',
    recyclability: '中',
    mainRecyclingMethod: '钢铁废料电炉重熔',
    secondarySourceRatio: '45%',
    note: '铁回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '2 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铁环境法规限值'
  }
};

P7_ENVIRONMENT[27] = {  // 钴
  carbonFootprint: {
    miningEmission: '6 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约21.0 kg CO₂/kg',
    note: '钴矿开采环境破坏大，刚果金问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '0.3 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.0',
    classification: '高毒',
    note: '钴的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '25 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '钴环境背景值'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '中',
    mainRecyclingMethod: '电池废料湿法回收',
    secondarySourceRatio: '20%',
    note: '钴回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '1 mg/L',
    airEmissionLimit: '0.02 mg/m³',
    soilScreeningValue: '50 mg/kg',
    internationalTreaty: '无',
    note: '钴环境法规限值'
  }
};

P7_ENVIRONMENT[28] = {  // 镍
  carbonFootprint: {
    miningEmission: '4 kg CO₂/kg',
    smeltingEmission: '14 kg CO₂/kg',
    totalLifecycle: '约18.0 kg CO₂/kg',
    note: '镍冶炼SO₂排放和红土镍矿环境问题'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.6',
    classification: '中毒',
    note: '镍的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '84 ppm',
    soilBackground: '20 mg/kg',
    waterBackground: '0.005 mg/L',
    atmosphereBackground: '<2 ng/m³',
    note: '镍环境背景值'
  },
  recycling: {
    recyclingRate: '35%',
    recyclability: '中',
    mainRecyclingMethod: '不锈钢和电池废料回收',
    secondarySourceRatio: '25%',
    note: '镍回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '1 mg/L',
    airEmissionLimit: '0.04 mg/m³',
    soilScreeningValue: '150 mg/kg',
    internationalTreaty: '无',
    note: '镍环境法规限值'
  }
};

P7_ENVIRONMENT[29] = {  // 铜
  carbonFootprint: {
    miningEmission: '2.5 kg CO₂/kg',
    smeltingEmission: '6 kg CO₂/kg',
    totalLifecycle: '约8.5 kg CO₂/kg',
    note: '铜对水生生物极高毒，是水质关键指标'
  },
  ecotoxicity: {
    aquaticLC50: '0.05 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.2',
    classification: '高毒',
    note: '铜的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '60 ppm',
    soilBackground: '25 mg/kg',
    waterBackground: '0.003 mg/L',
    atmosphereBackground: '<3 ng/m³',
    note: '铜环境背景值'
  },
  recycling: {
    recyclingRate: '50%',
    recyclability: '中',
    mainRecyclingMethod: '铜废料火法精炼回收',
    secondarySourceRatio: '35%',
    note: '铜回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.5 mg/L',
    airEmissionLimit: '0.03 mg/m³',
    soilScreeningValue: '100 mg/kg',
    internationalTreaty: '无',
    note: '铜环境法规限值'
  }
};

P7_ENVIRONMENT[30] = {  // 锌
  carbonFootprint: {
    miningEmission: '2 kg CO₂/kg',
    smeltingEmission: '5 kg CO₂/kg',
    totalLifecycle: '约7.0 kg CO₂/kg',
    note: '锌对水生生物有毒性'
  },
  ecotoxicity: {
    aquaticLC50: '0.1 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '500',
    logKow: '0.5',
    classification: '中毒',
    note: '锌的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '70 ppm',
    soilBackground: '50 mg/kg',
    waterBackground: '0.01 mg/L',
    atmosphereBackground: '<5 ng/m³',
    note: '锌环境背景值'
  },
  recycling: {
    recyclingRate: '35%',
    recyclability: '中',
    mainRecyclingMethod: '锌废料蒸馏回收',
    secondarySourceRatio: '25%',
    note: '锌回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '2 mg/L',
    airEmissionLimit: '0.1 mg/m³',
    soilScreeningValue: '200 mg/kg',
    internationalTreaty: '无',
    note: '锌环境法规限值'
  }
};

P7_ENVIRONMENT[31] = {  // 镓
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '20 kg CO₂/kg',
    totalLifecycle: '约30.0 kg CO₂/kg',
    note: '镓为伴生矿，环境数据有限'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '大型溞',
    bcf: '20',
    logKow: '0.5',
    classification: '低毒',
    note: '镓的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '19 ppm',
    soilBackground: '15 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '镓环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '半导体废料回收',
    secondarySourceRatio: '5%',
    note: '镓回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镓环境法规限值'
  }
};

P7_ENVIRONMENT[32] = {  // 锗
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '锗为稀散元素'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '斑马鱼',
    bcf: '10',
    logKow: '0.7',
    classification: '低毒',
    note: '锗的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '1.5 ppm',
    soilBackground: '1 mg/kg',
    waterBackground: '0.0005 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '锗环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '光纤废料回收锗',
    secondarySourceRatio: '10%',
    note: '锗回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '锗环境法规限值'
  }
};

P7_ENVIRONMENT[33] = {  // 砷
  carbonFootprint: {
    miningEmission: '5 kg CO₂/kg',
    smeltingEmission: '10 kg CO₂/kg',
    totalLifecycle: '约15.0 kg CO₂/kg',
    note: '砷是WHO优先控制污染物，地下水砷污染重大公共卫生问题'
  },
  ecotoxicity: {
    aquaticLC50: '0.05 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '400',
    logKow: '1.3',
    classification: '极高毒',
    note: '砷的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '1.8 ppm',
    soilBackground: '5 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '砷环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '砷废料固化填埋',
    secondarySourceRatio: '3%',
    note: '砷回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.01 mg/m³',
    soilScreeningValue: '20 mg/kg',
    internationalTreaty: '无',
    note: '砷环境法规限值'
  }
};

P7_ENVIRONMENT[34] = {  // 硒
  carbonFootprint: {
    miningEmission: '4 kg CO₂/kg',
    smeltingEmission: '8 kg CO₂/kg',
    totalLifecycle: '约12.0 kg CO₂/kg',
    note: '硒的窄窗口效应：必需但过量有毒'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '大型溞',
    bcf: '500',
    logKow: '0.8',
    classification: '中毒',
    note: '硒的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.05 ppm',
    soilBackground: '0.3 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '硒环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '硒废料回收',
    secondarySourceRatio: '5%',
    note: '硒回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.1 mg/m³',
    soilScreeningValue: '40 mg/kg',
    internationalTreaty: '无',
    note: '硒环境法规限值'
  }
};

P7_ENVIRONMENT[35] = {  // 溴
  carbonFootprint: {
    miningEmission: '3 kg CO₂/kg',
    smeltingEmission: '6 kg CO₂/kg',
    totalLifecycle: '约9.0 kg CO₂/kg',
    note: '有机溴阻燃剂和消耗臭氧物质受管控'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '10',
    logKow: '1.0',
    classification: '中毒',
    note: '溴的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '2.4 ppm',
    soilBackground: '5 mg/kg',
    waterBackground: '0.02 mg/L',
    atmosphereBackground: '<2 ng/m³',
    note: '溴环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '溴化钠废液回收',
    secondarySourceRatio: '10%',
    note: '溴回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.05 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '斯德哥尔摩公约',
    note: '溴环境法规限值'
  }
};

P7_ENVIRONMENT[36] = {  // 氪
  carbonFootprint: {
    miningEmission: '0.2 kg CO₂/kg',
    smeltingEmission: '0.5 kg CO₂/kg',
    totalLifecycle: '约0.7 kg CO₂/kg',
    note: '惰性气体'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '无毒',
    note: '氪的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.001 ppm',
    soilBackground: '—',
    waterBackground: '—',
    atmosphereBackground: '1.14 ppmv',
    note: '氪环境背景值'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '灯管用氪气回收',
    secondarySourceRatio: 'N/A',
    note: '氪回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '氪环境法规限值'
  }
};


// ── 第 5 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[37] = {  // 铷
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '铷为稀碱金属'
  },
  ecotoxicity: {
    aquaticLC50: '10 mg/L',
    testSpecies: '大型溞',
    bcf: '<5',
    logKow: '0.2',
    classification: '低毒',
    note: '铷的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '90 ppm',
    soilBackground: '50 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铷环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '科研废料回收',
    secondarySourceRatio: '2%',
    note: '铷回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铷环境法规限值'
  }
};

P7_ENVIRONMENT[38] = {  // 锶
  carbonFootprint: {
    miningEmission: '3 kg CO₂/kg',
    smeltingEmission: '7 kg CO₂/kg',
    totalLifecycle: '约10.0 kg CO₂/kg',
    note: '锶-90放射性同位素是核事故关注物'
  },
  ecotoxicity: {
    aquaticLC50: '20 mg/L',
    testSpecies: '大型溞',
    bcf: '20',
    logKow: '0.3',
    classification: '低毒',
    note: '锶的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '370 ppm',
    soilBackground: '200 mg/kg',
    waterBackground: '0.05 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '锶环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '锶废料回收',
    secondarySourceRatio: '5%',
    note: '锶回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '锶环境法规限值'
  }
};

P7_ENVIRONMENT[39] = {  // 钇
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '钇为稀土元素'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '斑马鱼',
    bcf: '50',
    logKow: '0.5',
    classification: '中毒',
    note: '钇的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '33 ppm',
    soilBackground: '20 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钇环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '荧光粉废料回收',
    secondarySourceRatio: '5%',
    note: '钇回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钇环境法规限值'
  }
};

P7_ENVIRONMENT[40] = {  // 锆
  carbonFootprint: {
    miningEmission: '5 kg CO₂/kg',
    smeltingEmission: '12 kg CO₂/kg',
    totalLifecycle: '约17.0 kg CO₂/kg',
    note: '锆矿开采含放射性伴生物'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '斑马鱼',
    bcf: '30',
    logKow: '0.6',
    classification: '低毒',
    note: '锆的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '165 ppm',
    soilBackground: '200 mg/kg',
    waterBackground: '0.003 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '锆环境背景值'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '锆合金废料回收',
    secondarySourceRatio: '15%',
    note: '锆回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '锆环境法规限值'
  }
};

P7_ENVIRONMENT[41] = {  // 铌
  carbonFootprint: {
    miningEmission: '6 kg CO₂/kg',
    smeltingEmission: '14 kg CO₂/kg',
    totalLifecycle: '约20.0 kg CO₂/kg',
    note: '铌钽伴生矿开采环境问题'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '20',
    logKow: '0.5',
    classification: '低毒',
    note: '铌的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '20 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铌环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '铌铁合金废料回收',
    secondarySourceRatio: '10%',
    note: '铌回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铌环境法规限值'
  }
};

P7_ENVIRONMENT[42] = {  // 钼
  carbonFootprint: {
    miningEmission: '5 kg CO₂/kg',
    smeltingEmission: '11 kg CO₂/kg',
    totalLifecycle: '约16.0 kg CO₂/kg',
    note: '钼是必需微量元素，过量有毒'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '50',
    logKow: '0.5',
    classification: '低毒',
    note: '钼的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '1.2 ppm',
    soilBackground: '1 mg/kg',
    waterBackground: '0.0005 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '钼环境背景值'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '钼废料回收',
    secondarySourceRatio: '15%',
    note: '钼回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.5 mg/L',
    airEmissionLimit: '0.06 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钼环境法规限值'
  }
};

P7_ENVIRONMENT[43] = {  // 锝
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锝全部为人造放射性元素，核医学管理'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '锝的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锝环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料管理',
    secondarySourceRatio: 'N/A',
    note: '锝回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锝环境法规限值'
  }
};

P7_ENVIRONMENT[44] = {  // 钌
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '20 kg CO₂/kg',
    totalLifecycle: '约30.0 kg CO₂/kg',
    note: '铂族金属回收价值高'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.8',
    classification: '中毒',
    note: '钌的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.001 ppm',
    soilBackground: '0.01 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '钌环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '催化剂废料回收',
    secondarySourceRatio: '10%',
    note: '钌回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钌环境法规限值'
  }
};

P7_ENVIRONMENT[45] = {  // 铑
  carbonFootprint: {
    miningEmission: '12 kg CO₂/kg',
    smeltingEmission: '25 kg CO₂/kg',
    totalLifecycle: '约37.0 kg CO₂/kg',
    note: '铑为铂族金属，汽车催化剂主要回收源'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.0',
    classification: '中毒',
    note: '铑的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.001 ppm',
    soilBackground: '0.01 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '铑环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '催化剂废料回收',
    secondarySourceRatio: '10%',
    note: '铑回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铑环境法规限值'
  }
};

P7_ENVIRONMENT[46] = {  // 钯
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '22 kg CO₂/kg',
    totalLifecycle: '约32.0 kg CO₂/kg',
    note: '钯回收是城市矿产重要方向'
  },
  ecotoxicity: {
    aquaticLC50: '0.1 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.0',
    classification: '中毒',
    note: '钯的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.015 ppm',
    soilBackground: '0.05 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '钯环境背景值'
  },
  recycling: {
    recyclingRate: '25%',
    recyclability: '中',
    mainRecyclingMethod: '催化剂和电子废料回收',
    secondarySourceRatio: '20%',
    note: '钯回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钯环境法规限值'
  }
};

P7_ENVIRONMENT[47] = {  // 银
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '18 kg CO₂/kg',
    totalLifecycle: '约26.0 kg CO₂/kg',
    note: '银纳米粒子环境毒性研究活跃'
  },
  ecotoxicity: {
    aquaticLC50: '0.001 mg/L',
    testSpecies: '大型溞',
    bcf: '500',
    logKow: '1.0',
    classification: '高毒',
    note: '银的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.075 ppm',
    soilBackground: '0.5 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '银环境背景值'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '中',
    mainRecyclingMethod: '电子废料和银废料回收',
    secondarySourceRatio: '25%',
    note: '银回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.04 mg/m³',
    soilScreeningValue: '100 mg/kg',
    internationalTreaty: '无',
    note: '银环境法规限值'
  }
};

P7_ENVIRONMENT[48] = {  // 镉
  carbonFootprint: {
    miningEmission: '6 kg CO₂/kg',
    smeltingEmission: '12 kg CO₂/kg',
    totalLifecycle: '约18.0 kg CO₂/kg',
    note: '镉是持久性有毒物质，稻田镉污染是中国食品安全问题'
  },
  ecotoxicity: {
    aquaticLC50: '0.001 mg/L',
    testSpecies: '大型溞',
    bcf: '2000',
    logKow: '1.5',
    classification: '极高毒',
    note: '镉的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.15 ppm',
    soilBackground: '0.3 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '镉环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '镍镉电池废料回收',
    secondarySourceRatio: '10%',
    note: '镉回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.005 mg/m³',
    soilScreeningValue: '20 mg/kg',
    internationalTreaty: '斯德哥尔摩公约',
    note: '镉环境法规限值'
  }
};

P7_ENVIRONMENT[49] = {  // 铟
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '20 kg CO₂/kg',
    totalLifecycle: '约30.0 kg CO₂/kg',
    note: '铟主要来自闪锌矿伴生'
  },
  ecotoxicity: {
    aquaticLC50: '0.1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.8',
    classification: '中毒',
    note: '铟的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.25 ppm',
    soilBackground: '0.5 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铟环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: 'ITO废料回收',
    secondarySourceRatio: '5%',
    note: '铟回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铟环境法规限值'
  }
};

P7_ENVIRONMENT[50] = {  // 锡
  carbonFootprint: {
    miningEmission: '4 kg CO₂/kg',
    smeltingEmission: '9 kg CO₂/kg',
    totalLifecycle: '约13.0 kg CO₂/kg',
    note: '有机锡化合物受斯德哥尔摩公约管控'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.6',
    classification: '低毒',
    note: '锡的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '2.3 ppm',
    soilBackground: '3 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '锡环境背景值'
  },
  recycling: {
    recyclingRate: '25%',
    recyclability: '中',
    mainRecyclingMethod: '锡焊料废料回收',
    secondarySourceRatio: '20%',
    note: '锡回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.1 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '锡环境法规限值'
  }
};

P7_ENVIRONMENT[51] = {  // 锑
  carbonFootprint: {
    miningEmission: '5 kg CO₂/kg',
    smeltingEmission: '10 kg CO₂/kg',
    totalLifecycle: '约15.0 kg CO₂/kg',
    note: '锑矿开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '大型溞',
    bcf: '300',
    logKow: '1.0',
    classification: '中毒',
    note: '锑的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.2 ppm',
    soilBackground: '0.5 mg/kg',
    waterBackground: '0.0005 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '锑环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '锑废料回收',
    secondarySourceRatio: '10%',
    note: '锑回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.5 mg/L',
    airEmissionLimit: '0.01 mg/m³',
    soilScreeningValue: '30 mg/kg',
    internationalTreaty: '无',
    note: '锑环境法规限值'
  }
};

P7_ENVIRONMENT[52] = {  // 碲
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '碲为稀散元素'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '50',
    logKow: '0.7',
    classification: '中毒',
    note: '碲的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.001 ppm',
    soilBackground: '0.01 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '碲环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '碲废料回收',
    secondarySourceRatio: '5%',
    note: '碲回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.05 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '碲环境法规限值'
  }
};

P7_ENVIRONMENT[53] = {  // 碘
  carbonFootprint: {
    miningEmission: '3 kg CO₂/kg',
    smeltingEmission: '6 kg CO₂/kg',
    totalLifecycle: '约9.0 kg CO₂/kg',
    note: '放射性碘-131是核事故关注物'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '20',
    logKow: '0.5',
    classification: '低毒',
    note: '碘的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.45 ppm',
    soilBackground: '2 mg/kg',
    waterBackground: '0.002 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '碘环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '碘废料回收',
    secondarySourceRatio: '5%',
    note: '碘回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '碘环境法规限值'
  }
};

P7_ENVIRONMENT[54] = {  // 氙
  carbonFootprint: {
    miningEmission: '0.3 kg CO₂/kg',
    smeltingEmission: '0.8 kg CO₂/kg',
    totalLifecycle: '约1.1 kg CO₂/kg',
    note: '惰性气体'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '无毒',
    note: '氙的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.00003 ppm',
    soilBackground: '—',
    waterBackground: '—',
    atmosphereBackground: '0.09 ppmv',
    note: '氙环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '灯管和离子推进器用氙回收',
    secondarySourceRatio: 'N/A',
    note: '氙回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '氙环境法规限值'
  }
};


// ── 第 6 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[55] = {  // 铯
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '铯-137是核事故主要放射性污染物'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '<10',
    logKow: '0.2',
    classification: '低毒',
    note: '铯的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '3 ppm',
    soilBackground: '3 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铯环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '科研废料回收',
    secondarySourceRatio: '2%',
    note: '铯回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铯环境法规限值'
  }
};

P7_ENVIRONMENT[56] = {  // 钡
  carbonFootprint: {
    miningEmission: '3 kg CO₂/kg',
    smeltingEmission: '7 kg CO₂/kg',
    totalLifecycle: '约10.0 kg CO₂/kg',
    note: '可溶性钡盐有毒'
  },
  ecotoxicity: {
    aquaticLC50: '10 mg/L',
    testSpecies: '大型溞',
    bcf: '50',
    logKow: '0.5',
    classification: '低毒',
    note: '钡的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '425 ppm',
    soilBackground: '400 mg/kg',
    waterBackground: '0.03 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '钡环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '钡废料回收',
    secondarySourceRatio: '5%',
    note: '钡回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '2 mg/L',
    airEmissionLimit: '0.05 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钡环境法规限值'
  }
};

P7_ENVIRONMENT[57] = {  // 镧
  carbonFootprint: {
    miningEmission: '7 kg CO₂/kg',
    smeltingEmission: '14 kg CO₂/kg',
    totalLifecycle: '约21.0 kg CO₂/kg',
    note: '稀土开采环境破坏大'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '镧的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '39 ppm',
    soilBackground: '30 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '镧环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '5%',
    note: '镧回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镧环境法规限值'
  }
};

P7_ENVIRONMENT[58] = {  // 铈
  carbonFootprint: {
    miningEmission: '7 kg CO₂/kg',
    smeltingEmission: '14 kg CO₂/kg',
    totalLifecycle: '约21.0 kg CO₂/kg',
    note: '铈是最丰富稀土元素'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '铈的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '66.5 ppm',
    soilBackground: '50 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铈环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '催化剂废料回收',
    secondarySourceRatio: '5%',
    note: '铈回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铈环境法规限值'
  }
};

P7_ENVIRONMENT[59] = {  // 镨
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '镨为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '镨的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '镨环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '镨回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镨环境法规限值'
  }
};

P7_ENVIRONMENT[60] = {  // 钕
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '钕为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '钕的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钕环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '钕回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钕环境法规限值'
  }
};

P7_ENVIRONMENT[61] = {  // 钷
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '钷为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '钷的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钷环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '钷回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钷环境法规限值'
  }
};

P7_ENVIRONMENT[62] = {  // 钐
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '钐为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '钐的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钐环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '钐回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钐环境法规限值'
  }
};

P7_ENVIRONMENT[63] = {  // 铕
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '铕为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '铕的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铕环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '铕回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铕环境法规限值'
  }
};

P7_ENVIRONMENT[64] = {  // 钆
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '钆为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '钆的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钆环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '钆回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钆环境法规限值'
  }
};

P7_ENVIRONMENT[65] = {  // 铽
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '铽为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '铽的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铽环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '铽回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铽环境法规限值'
  }
};

P7_ENVIRONMENT[66] = {  // 镝
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '镝为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '镝的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '镝环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '镝回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镝环境法规限值'
  }
};

P7_ENVIRONMENT[67] = {  // 钬
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '钬为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '钬的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钬环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '钬回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钬环境法规限值'
  }
};

P7_ENVIRONMENT[68] = {  // 铒
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '铒为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '铒的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铒环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '铒回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铒环境法规限值'
  }
};

P7_ENVIRONMENT[69] = {  // 铥
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '铥为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '铥的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铥环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '铥回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铥环境法规限值'
  }
};

P7_ENVIRONMENT[70] = {  // 镱
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '镱为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '镱的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '镱环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '镱回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镱环境法规限值'
  }
};

P7_ENVIRONMENT[71] = {  // 镥
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '15 kg CO₂/kg',
    totalLifecycle: '约23.0 kg CO₂/kg',
    note: '镥为稀土元素，开采环境问题突出'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.5',
    classification: '低毒',
    note: '镥的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '5 ppm',
    soilBackground: '10 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '镥环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '稀土废料回收',
    secondarySourceRatio: '3%',
    note: '镥回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '镥环境法规限值'
  }
};

P7_ENVIRONMENT[72] = {  // 铪
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '铪来自锆铪分离'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '斑马鱼',
    bcf: '50',
    logKow: '0.6',
    classification: '低毒',
    note: '铪的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '3 ppm',
    soilBackground: '3 mg/kg',
    waterBackground: '0.0005 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铪环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '核反应堆废料回收',
    secondarySourceRatio: '5%',
    note: '铪回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铪环境法规限值'
  }
};

P7_ENVIRONMENT[73] = {  // 钽
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '20 kg CO₂/kg',
    totalLifecycle: '约30.0 kg CO₂/kg',
    note: '钽矿开采涉及冲突矿物问题'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '20',
    logKow: '0.5',
    classification: '低毒',
    note: '钽的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '2 ppm',
    soilBackground: '1 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钽环境背景值'
  },
  recycling: {
    recyclingRate: '20%',
    recyclability: '中',
    mainRecyclingMethod: '电容器废料回收',
    secondarySourceRatio: '15%',
    note: '钽回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钽环境法规限值'
  }
};

P7_ENVIRONMENT[74] = {  // 钨
  carbonFootprint: {
    miningEmission: '6 kg CO₂/kg',
    smeltingEmission: '13 kg CO₂/kg',
    totalLifecycle: '约19.0 kg CO₂/kg',
    note: '钨为关键战略金属'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '50',
    logKow: '0.5',
    classification: '低毒',
    note: '钨的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '1.25 ppm',
    soilBackground: '1 mg/kg',
    waterBackground: '0.0002 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '钨环境背景值'
  },
  recycling: {
    recyclingRate: '25%',
    recyclability: '中',
    mainRecyclingMethod: '硬质合金废料回收',
    secondarySourceRatio: '20%',
    note: '钨回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.05 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钨环境法规限值'
  }
};

P7_ENVIRONMENT[75] = {  // 铼
  carbonFootprint: {
    miningEmission: '15 kg CO₂/kg',
    smeltingEmission: '30 kg CO₂/kg',
    totalLifecycle: '约45.0 kg CO₂/kg',
    note: '铼为最稀散元素之一'
  },
  ecotoxicity: {
    aquaticLC50: '2 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '0.8',
    classification: '中毒',
    note: '铼的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.0007 ppm',
    soilBackground: '0.001 mg/kg',
    waterBackground: '0.00001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '铼环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '催化剂废料回收',
    secondarySourceRatio: '10%',
    note: '铼回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铼环境法规限值'
  }
};

P7_ENVIRONMENT[76] = {  // 锇
  carbonFootprint: {
    miningEmission: '12 kg CO₂/kg',
    smeltingEmission: '25 kg CO₂/kg',
    totalLifecycle: '约37.0 kg CO₂/kg',
    note: '四氧化锇高毒'
  },
  ecotoxicity: {
    aquaticLC50: '1 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.0',
    classification: '中毒',
    note: '锇的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.001 ppm',
    soilBackground: '0.001 mg/kg',
    waterBackground: '0.00001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '锇环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '催化剂废料回收',
    secondarySourceRatio: '10%',
    note: '锇回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '锇环境法规限值'
  }
};

P7_ENVIRONMENT[77] = {  // 铱
  carbonFootprint: {
    miningEmission: '12 kg CO₂/kg',
    smeltingEmission: '25 kg CO₂/kg',
    totalLifecycle: '约37.0 kg CO₂/kg',
    note: '铱为铂族金属'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.0',
    classification: '中毒',
    note: '铱的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.001 ppm',
    soilBackground: '0.001 mg/kg',
    waterBackground: '0.00001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '铱环境背景值'
  },
  recycling: {
    recyclingRate: '15%',
    recyclability: '低',
    mainRecyclingMethod: '催化剂废料回收',
    secondarySourceRatio: '10%',
    note: '铱回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铱环境法规限值'
  }
};

P7_ENVIRONMENT[78] = {  // 铂
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '22 kg CO₂/kg',
    totalLifecycle: '约32.0 kg CO₂/kg',
    note: '铂族金属回收价值极高'
  },
  ecotoxicity: {
    aquaticLC50: '0.5 mg/L',
    testSpecies: '大型溞',
    bcf: '200',
    logKow: '1.0',
    classification: '中毒',
    note: '铂的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.005 ppm',
    soilBackground: '0.01 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '铂环境背景值'
  },
  recycling: {
    recyclingRate: '25%',
    recyclability: '中',
    mainRecyclingMethod: '催化剂和电子废料回收',
    secondarySourceRatio: '20%',
    note: '铂回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.002 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铂环境法规限值'
  }
};

P7_ENVIRONMENT[79] = {  // 金
  carbonFootprint: {
    miningEmission: '15 kg CO₂/kg',
    smeltingEmission: '30 kg CO₂/kg',
    totalLifecycle: '约45.0 kg CO₂/kg',
    note: '氰化提金环境问题严重'
  },
  ecotoxicity: {
    aquaticLC50: '0.1 mg/L',
    testSpecies: '大型溞',
    bcf: '100',
    logKow: '1.0',
    classification: '中毒',
    note: '金的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.004 ppm',
    soilBackground: '0.003 mg/kg',
    waterBackground: '0.00005 mg/L',
    atmosphereBackground: '<0.01 ng/m³',
    note: '金环境背景值'
  },
  recycling: {
    recyclingRate: '30%',
    recyclability: '中',
    mainRecyclingMethod: '电子废料和首饰废料回收',
    secondarySourceRatio: '25%',
    note: '金回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '金环境法规限值'
  }
};

P7_ENVIRONMENT[80] = {  // 汞
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '汞是全球优先控制污染物，水俣病历史教训'
  },
  ecotoxicity: {
    aquaticLC50: '0.01 mg/L',
    testSpecies: '大型溞',
    bcf: '5000',
    logKow: '3.0',
    classification: '极高毒',
    note: '汞的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.085 ppm',
    soilBackground: '0.05 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '2 ng/m³',
    note: '汞环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '荧光灯废料回收汞',
    secondarySourceRatio: '5%',
    note: '汞回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.05 mg/L',
    airEmissionLimit: '0.01 mg/m³',
    soilScreeningValue: '8 mg/kg',
    internationalTreaty: '水俣公约',
    note: '汞环境法规限值'
  }
};

P7_ENVIRONMENT[81] = {  // 铊
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '铊是剧毒元素'
  },
  ecotoxicity: {
    aquaticLC50: '0.01 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '1000',
    logKow: '1.5',
    classification: '极高毒',
    note: '铊的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.85 ppm',
    soilBackground: '0.5 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '铊环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '铊废料固化填埋',
    secondarySourceRatio: '3%',
    note: '铊回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.005 mg/m³',
    soilScreeningValue: '5 mg/kg',
    internationalTreaty: '无',
    note: '铊环境法规限值'
  }
};

P7_ENVIRONMENT[82] = {  // 铅
  carbonFootprint: {
    miningEmission: '4 kg CO₂/kg',
    smeltingEmission: '9 kg CO₂/kg',
    totalLifecycle: '约13.0 kg CO₂/kg',
    note: '铅中毒是全球公共健康问题，无铅化趋势'
  },
  ecotoxicity: {
    aquaticLC50: '0.01 mg/L',
    testSpecies: '虹鳟鱼',
    bcf: '3000',
    logKow: '1.9',
    classification: '极高毒',
    note: '铅的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '14 ppm',
    soilBackground: '15 mg/kg',
    waterBackground: '0.001 mg/L',
    atmosphereBackground: '<5 ng/m³',
    note: '铅环境背景值'
  },
  recycling: {
    recyclingRate: '70%',
    recyclability: '中',
    mainRecyclingMethod: '铅酸电池回收',
    secondarySourceRatio: '60%',
    note: '铅回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '1 mg/L',
    airEmissionLimit: '0.07 mg/m³',
    soilScreeningValue: '400 mg/kg',
    internationalTreaty: '无',
    note: '铅环境法规限值'
  }
};

P7_ENVIRONMENT[83] = {  // 铋
  carbonFootprint: {
    miningEmission: '6 kg CO₂/kg',
    smeltingEmission: '12 kg CO₂/kg',
    totalLifecycle: '约18.0 kg CO₂/kg',
    note: '铋被称为绿色金属，替代铅'
  },
  ecotoxicity: {
    aquaticLC50: '5 mg/L',
    testSpecies: '大型溞',
    bcf: '50',
    logKow: '0.5',
    classification: '低毒',
    note: '铋的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.048 ppm',
    soilBackground: '0.3 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<1 ng/m³',
    note: '铋环境背景值'
  },
  recycling: {
    recyclingRate: '10%',
    recyclability: '低',
    mainRecyclingMethod: '铋废料回收',
    secondarySourceRatio: '5%',
    note: '铋回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '—',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铋环境法规限值'
  }
};

P7_ENVIRONMENT[84] = {  // 钋
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '钋-210是极毒放射性核素'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '钋的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.000001 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '<0.001 ng/m³',
    note: '钋环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '放射性废物管理',
    secondarySourceRatio: 'N/A',
    note: '钋回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '钋环境法规限值'
  }
};

P7_ENVIRONMENT[85] = {  // 砹
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '砹全部同位素半衰期短'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '砹的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '微量',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '砹环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '放射性废物管理',
    secondarySourceRatio: 'N/A',
    note: '砹回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '砹环境法规限值'
  }
};

P7_ENVIRONMENT[86] = {  // 氡
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '氡-222是室内放射性气体，肺癌第二大病因'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '氡的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '微量',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0.5 Bq/m³(室内)',
    note: '氡环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '通风排除',
    secondarySourceRatio: 'N/A',
    note: '氡回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '氡环境法规限值'
  }
};


// ── 第 7 周期 ────────────────────────────────────────────
P7_ENVIRONMENT[87] = {  // 钫
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '钫半衰期极短，无环境意义'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '钫的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '微量',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '钫环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '放射性废物管理',
    secondarySourceRatio: 'N/A',
    note: '钫回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '钫环境法规限值'
  }
};

P7_ENVIRONMENT[88] = {  // 镭
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '镭-226是铀衰变产物，历史上发光涂料事故'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '镭的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0.9 ppm(U矿)',
    soilBackground: '0.001 mg/kg',
    waterBackground: '0',
    atmosphereBackground: '<0.001 ng/m³',
    note: '镭环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '放射性废物管理',
    secondarySourceRatio: 'N/A',
    note: '镭回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '镭环境法规限值'
  }
};

P7_ENVIRONMENT[89] = {  // 锕
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锕为锕系元素起始'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '锕的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '微量',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锕环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '放射性废物管理',
    secondarySourceRatio: 'N/A',
    note: '锕回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锕环境法规限值'
  }
};

P7_ENVIRONMENT[90] = {  // 钍
  carbonFootprint: {
    miningEmission: '8 kg CO₂/kg',
    smeltingEmission: '16 kg CO₂/kg',
    totalLifecycle: '约24.0 kg CO₂/kg',
    note: '钍作为潜在核燃料，稀土伴生放射性'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '钍的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '9.6 ppm',
    soilBackground: '6 mg/kg',
    waterBackground: '0.0001 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '钍环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '核燃料循环管理',
    secondarySourceRatio: '3%',
    note: '钍回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.1 mg/L',
    airEmissionLimit: '0.02 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '钍环境法规限值'
  }
};

P7_ENVIRONMENT[91] = {  // 镤
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '镤为铀衰变中间产物'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '镤的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '微量',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '镤环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '放射性废物管理',
    secondarySourceRatio: 'N/A',
    note: '镤回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '镤环境法规限值'
  }
};

P7_ENVIRONMENT[92] = {  // 铀
  carbonFootprint: {
    miningEmission: '10 kg CO₂/kg',
    smeltingEmission: '20 kg CO₂/kg',
    totalLifecycle: '约30.0 kg CO₂/kg',
    note: '铀矿开采放射性废物和尾矿环境问题严重'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '铀的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '2.7 ppm',
    soilBackground: '2 mg/kg',
    waterBackground: '0.0005 mg/L',
    atmosphereBackground: '<0.1 ng/m³',
    note: '铀环境背景值'
  },
  recycling: {
    recyclingRate: '5%',
    recyclability: '低',
    mainRecyclingMethod: '核燃料后处理回收',
    secondarySourceRatio: '3%',
    note: '铀回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: '0.05 mg/L',
    airEmissionLimit: '0.02 mg/m³',
    soilScreeningValue: '—',
    internationalTreaty: '无',
    note: '铀环境法规限值'
  }
};

P7_ENVIRONMENT[93] = {  // 镎
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '镎为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '镎的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '镎环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '镎回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '镎环境法规限值'
  }
};

P7_ENVIRONMENT[94] = {  // 钚
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '钚为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '钚的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '钚环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '钚回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '钚环境法规限值'
  }
};

P7_ENVIRONMENT[95] = {  // 镅
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '镅为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '镅的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '镅环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '镅回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '镅环境法规限值'
  }
};

P7_ENVIRONMENT[96] = {  // 锔
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锔为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '锔的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锔环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '锔回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锔环境法规限值'
  }
};

P7_ENVIRONMENT[97] = {  // 锫
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锫为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '锫的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锫环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '锫回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锫环境法规限值'
  }
};

P7_ENVIRONMENT[98] = {  // 锎
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锎为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '锎的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锎环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '锎回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锎环境法规限值'
  }
};

P7_ENVIRONMENT[99] = {  // 锿
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锿为人造超铀元素，核废料管理对象'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性极毒',
    note: '锿的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锿环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料地质处置',
    secondarySourceRatio: 'N/A',
    note: '锿回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锿环境法规限值'
  }
};

P7_ENVIRONMENT[100] = {  // 镄
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '镄为人造超重元素，半衰期极短'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '镄的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '镄环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料管理',
    secondarySourceRatio: 'N/A',
    note: '镄回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '镄环境法规限值'
  }
};

P7_ENVIRONMENT[101] = {  // 钔
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '钔为人造超重元素，半衰期极短'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '钔的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '钔环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料管理',
    secondarySourceRatio: 'N/A',
    note: '钔回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '钔环境法规限值'
  }
};

P7_ENVIRONMENT[102] = {  // 锘
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '锘为人造超重元素，半衰期极短'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '锘的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '锘环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料管理',
    secondarySourceRatio: 'N/A',
    note: '锘回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '锘环境法规限值'
  }
};

P7_ENVIRONMENT[103] = {  // 铹
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '铹为人造超重元素，半衰期极短'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '铹的环境毒性'
  },
  environmentalBackground: {
    crustAbundance: '0 ppm',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '铹环境背景值'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: '核废料管理',
    secondarySourceRatio: 'N/A',
    note: '铹回收利用'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '铹环境法规限值'
  }
};

P7_ENVIRONMENT[104] = {  // 𬬻
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬬻为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬬻半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬬻自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[105] = {  // 𬭊
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬭊为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬭊半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬭊自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[106] = {  // 𬭳
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬭳为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬭳半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬭳自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[107] = {  // 𬭛
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬭛为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬭛半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬭛自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[108] = {  // 𬭶
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬭶为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬭶半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬭶自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[109] = {  // 鿏
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '鿏为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '鿏半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '鿏自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[110] = {  // 𬭎
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬭎为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬭎半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬭎自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[111] = {  // 𬬭
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𬬭为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𬬭半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𬬭自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[112] = {  // 鿫
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '鿫为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '鿫半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '鿫自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[113] = {  // 鿭
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '鿭为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '鿭半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '鿭自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[114] = {  // 𫓧
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𫓧为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𫓧半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𫓧自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[115] = {  // 镆
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '镆为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '镆半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '镆自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[116] = {  // 𫟷
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '𫟷为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '𫟷半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '𫟷自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[117] = {  // 鿬
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '鿬为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '鿬半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '鿬自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};

P7_ENVIRONMENT[118] = {  // 鿫
  carbonFootprint: {
    miningEmission: 'N/A',
    smeltingEmission: 'N/A',
    totalLifecycle: 'N/A',
    note: '鿫为人造元素，无工业生产'
  },
  ecotoxicity: {
    aquaticLC50: 'N/A',
    testSpecies: 'N/A',
    bcf: 'N/A',
    logKow: 'N/A',
    classification: '放射性危险',
    note: '鿫半衰期极短，无环境暴露'
  },
  environmentalBackground: {
    crustAbundance: '0',
    soilBackground: '0',
    waterBackground: '0',
    atmosphereBackground: '0',
    note: '鿫自然界不存在'
  },
  recycling: {
    recyclingRate: 'N/A',
    recyclability: '不可回收',
    mainRecyclingMethod: 'N/A',
    secondarySourceRatio: 'N/A',
    note: '人造元素无法回收'
  },
  environmentalRegulation: {
    waterDischargeLimit: 'N/A',
    airEmissionLimit: 'N/A',
    soilScreeningValue: 'N/A',
    internationalTreaty: '无',
    note: '仅在实验室条件下短暂存在'
  }
};


// ════════════════════════════════════════════════════
//  自动合并到 ELEMENTS
// ════════════════════════════════════════════════════

function mergeP7Environment(ELEMENTS) {
  for (var i = 0; i < ELEMENTS.length; i++) {
    var el = ELEMENTS[i];
    var z  = el.z;
    if (P7_ENVIRONMENT[z]) {
      el.environment = P7_ENVIRONMENT[z];
    }
  }
}

if (typeof ELEMENTS !== 'undefined') {
  mergeP7Environment(ELEMENTS);
}
