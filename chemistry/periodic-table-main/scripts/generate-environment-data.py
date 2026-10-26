#!/usr/bin/env python3
"""生成 p7-environment.js — 118元素环境生态数据"""
import json

# 元素名称映射
NAMES = {
    1:'氢',2:'氦',3:'锂',4:'铍',5:'硼',6:'碳',7:'氮',8:'氧',9:'氟',10:'氖',
    11:'钠',12:'镁',13:'铝',14:'硅',15:'磷',16:'硫',17:'氯',18:'氩',19:'钾',20:'钙',
    21:'钪',22:'钛',23:'钒',24:'铬',25:'锰',26:'铁',27:'钴',28:'镍',29:'铜',30:'锌',
    31:'镓',32:'锗',33:'砷',34:'硒',35:'溴',36:'氪',37:'铷',38:'锶',39:'钇',40:'锆',
    41:'铌',42:'钼',43:'锝',44:'钌',45:'铑',46:'钯',47:'银',48:'镉',49:'铟',50:'锡',
    51:'锑',52:'碲',53:'碘',54:'氙',55:'铯',56:'钡',57:'镧',58:'铈',59:'镨',60:'钕',
    61:'钷',62:'钐',63:'铕',64:'钆',65:'铽',66:'镝',67:'钬',68:'铒',69:'铥',70:'镱',
    71:'镥',72:'铪',73:'钽',74:'钨',75:'铼',76:'锇',77:'铱',78:'铂',79:'金',80:'汞',
    81:'铊',82:'铅',83:'铋',84:'钋',85:'砹',86:'氡',87:'钫',88:'镭',89:'锕',90:'钍',
    91:'镤',92:'铀',93:'镎',94:'钚',95:'镅',96:'锔',97:'锫',98:'锎',99:'锿',100:'镄',
    101:'钔',102:'锘',103:'铹',104:'𬬻',105:'𬭊',106:'𬭳',107:'𬭛',108:'𬭶',109:'鿏',110:'𬭎',
    111:'𬬭',112:'鿫',113:'鿭',114:'𫓧',115:'镆',116:'𫟷',117:'鿬',118:'鿫'
}

# 周期分组
PERIODS = {
    1: list(range(1,3)),
    2: list(range(3,11)),
    3: list(range(11,19)),
    4: list(range(19,37)),
    5: list(range(37,55)),
    6: list(range(55,87)),
    7: list(range(87,119)),
}

# 环境数据字典
DATA = {}

# ── 第1周期 ──
DATA[1] = {  # H
    "carbonFootprint": {"miningEmission": "0.5 kg CO₂/kg", "smeltingEmission": "2.1 kg CO₂/kg", "totalLifecycle": "2.6 kg CO₂/kg", "note": "天然气蒸汽重整制氢为主要排放源，绿氢电解路线碳排放<1 kg CO₂/kg"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<1", "logKow": "0.45", "classification": "低毒", "note": "氢气不溶于水，无明显水生毒性"},
    "environmentalBackground": {"crustAbundance": "1400 ppm", "soilBackground": "—", "waterBackground": "—", "atmosphereBackground": "0.5 ppmv", "note": "大气中以水蒸气形式存在"},
    "recycling": {"recyclingRate": "N/A", "recyclability": "高", "mainRecyclingMethod": "氢气回收压缩再利用", "secondarySourceRatio": "N/A", "note": "工业副产氢气回收利用率提升中"},
    "environmentalRegulation": {"waterDischargeLimit": "N/A", "airEmissionLimit": "N/A", "soilScreeningValue": "N/A", "internationalTreaty": "无", "note": "氢气无直接环境排放限制"}
}
DATA[2] = {  # He
    "carbonFootprint": {"miningEmission": "0.1 kg CO₂/kg", "smeltingEmission": "0.3 kg CO₂/kg", "totalLifecycle": "0.4 kg CO₂/kg", "note": "天然气分离提取，能耗较低"},
    "ecotoxicity": {"aquaticLC50": "N/A", "testSpecies": "N/A", "bcf": "N/A", "logKow": "N/A", "classification": "无毒", "note": "惰性气体，无生态毒性"},
    "environmentalBackground": {"crustAbundance": "0.008 ppm", "soilBackground": "—", "waterBackground": "—", "atmosphereBackground": "5.24 ppmv", "note": "大气中含量极低且稳定"},
    "recycling": {"recyclingRate": "85%", "recyclability": "高", "mainRecyclingMethod": "低温液化分离回收", "secondarySourceRatio": "N/A", "note": "MRI和科研用氦气回收率逐年提高"},
    "environmentalRegulation": {"waterDischargeLimit": "N/A", "airEmissionLimit": "N/A", "soilScreeningValue": "N/A", "internationalTreaty": "无", "note": "惰性气体无环境限制"}
}

# ── 第2周期 ──
DATA[3] = {  # Li
    "carbonFootprint": {"miningEmission": "8.5 kg CO₂/kg", "smeltingEmission": "5.2 kg CO₂/kg", "totalLifecycle": "13.7 kg CO₂/kg", "note": "盐湖提锂碳足迹低于硬岩开采"},
    "ecotoxicity": {"aquaticLC50": "12 mg/L", "testSpecies": "大型溞", "bcf": "<5", "logKow": "-0.77", "classification": "低毒", "note": "锂盐对水生生物有中等毒性"},
    "environmentalBackground": {"crustAbundance": "20 ppm", "soilBackground": "25 mg/kg", "waterBackground": "0.18 μg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "地壳中含量较低，锂矿区周边背景值偏高"},
    "recycling": {"recyclingRate": "5%", "recyclability": "中", "mainRecyclingMethod": "湿法冶金回收锂离子电池", "secondarySourceRatio": "5%", "note": "锂电回收率随产业成熟度提升中"},
    "environmentalRegulation": {"waterDischargeLimit": "2.5 mg/L", "airEmissionLimit": "0.05 mg/m³", "soilScreeningValue": "100 mg/kg", "internationalTreaty": "无", "note": "GB 8978 锂排放限值"}
}
DATA[4] = {  # Be
    "carbonFootprint": {"miningEmission": "15 kg CO₂/kg", "smeltingEmission": "25 kg CO₂/kg", "totalLifecycle": "40 kg CO₂/kg", "note": "铍矿开采冶炼能耗高"},
    "ecotoxicity": {"aquaticLC50": "0.15 mg/L", "testSpecies": "虹鳟鱼", "bcf": "100", "logKow": "0.98", "classification": "高毒", "note": "铍离子对水生生物高毒"},
    "environmentalBackground": {"crustAbundance": "2.8 ppm", "soilBackground": "1.5 mg/kg", "waterBackground": "0.01 μg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "土壤背景值低"},
    "recycling": {"recyclingRate": "20%", "recyclability": "中", "mainRecyclingMethod": "铜铍合金废料回收", "secondarySourceRatio": "15%", "note": "铍铜合金回收较成熟"},
    "environmentalRegulation": {"waterDischargeLimit": "0.005 mg/L", "airEmissionLimit": "0.01 mg/m³", "soilScreeningValue": "20 mg/kg", "internationalTreaty": "无", "note": "GB 8978 铍排放极严格限制"}
}
DATA[5] = {  # B
    "carbonFootprint": {"miningEmission": "3.2 kg CO₂/kg", "smeltingEmission": "8.5 kg CO₂/kg", "totalLifecycle": "11.7 kg CO₂/kg", "note": "硼砂矿开采和硼酸生产"},
    "ecotoxicity": {"aquaticLC50": "65 mg/L", "testSpecies": "大型溞", "bcf": "<5", "logKow": "0.17", "classification": "低毒", "note": "硼酸盐对水生生物低毒"},
    "environmentalBackground": {"crustAbundance": "10 ppm", "soilBackground": "30 mg/kg", "waterBackground": "0.1 mg/L", "atmosphereBackground": "<1 ng/m³", "note": "土壤背景值差异大"},
    "recycling": {"recyclingRate": "10%", "recyclability": "中", "mainRecyclingMethod": "硼硅酸盐玻璃回收", "secondarySourceRatio": "8%", "note": "主要通过玻璃回收"},
    "environmentalRegulation": {"waterDischargeLimit": "5 mg/L", "airEmissionLimit": "0.5 mg/m³", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "GB 8978 硼排放限值"}
}
DATA[6] = {  # C
    "carbonFootprint": {"miningEmission": "0.8 kg CO₂/kg", "smeltingEmission": "3.5 kg CO₂/kg", "totalLifecycle": "4.3 kg CO₂/kg", "note": "煤炭开采和钢铁冶炼为最大排放源，CCUS技术减排中"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<10", "logKow": "N/A", "classification": "无毒", "note": "碳单质（石墨/金刚石）基本无毒"},
    "environmentalBackground": {"crustAbundance": "200 ppm", "soilBackground": "20000 mg/kg", "waterBackground": "10 mg/L", "atmosphereBackground": "420 ppmv CO₂", "note": "大气CO₂浓度持续上升，从280ppm到420ppm"},
    "recycling": {"recyclingRate": "60%", "recyclability": "高", "mainRecyclingMethod": "钢铁/铝冶炼碳电极回收", "secondarySourceRatio": "30%", "note": "钢铁行业碳回收利用率高"},
    "environmentalRegulation": {"waterDischargeLimit": "30 mg/L TOC", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "巴黎协定（CO₂减排）", "note": "碳减排是全球气候政策核心"}
}
DATA[7] = {  # N
    "carbonFootprint": {"miningEmission": "1.5 kg CO₂/kg", "smeltingEmission": "4.2 kg CO₂/kg", "totalLifecycle": "5.7 kg CO₂/kg", "note": "合成氨Haber-Bosch法为主要排放源"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<1", "logKow": "-0.67", "classification": "低毒", "note": "氮气惰性，氮氧化物有间接毒性"},
    "environmentalBackground": {"crustAbundance": "19 ppm", "soilBackground": "2000 mg/kg", "waterBackground": "0.5 mg/L", "atmosphereBackground": "780840 ppmv", "note": "大气主要成分"},
    "recycling": {"recyclingRate": "N/A", "recyclability": "高", "mainRecyclingMethod": "空气分离制氮", "secondarySourceRatio": "N/A", "note": "氮气来自空气分离，资源无限"},
    "environmentalRegulation": {"waterDischargeLimit": "15 mg/L 总氮", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "氮氧化物(NOx)受GB 16297限制"}
}
DATA[8] = {  # O
    "carbonFootprint": {"miningEmission": "0.2 kg CO₂/kg", "smeltingEmission": "0.5 kg CO₂/kg", "totalLifecycle": "0.7 kg CO₂/kg", "note": "空气分离制氧，能耗低"},
    "ecotoxicity": {"aquaticLC50": "N/A", "testSpecies": "N/A", "bcf": "N/A", "logKow": "N/A", "classification": "无毒", "note": "生命必需元素"},
    "environmentalBackground": {"crustAbundance": "46.6%", "soilBackground": "—", "waterBackground": "8 mg/L 溶解氧", "atmosphereBackground": "209460 ppmv", "note": "地壳中最丰富的元素"},
    "recycling": {"recyclingRate": "N/A", "recyclability": "高", "mainRecyclingMethod": "空气分离", "secondarySourceRatio": "N/A", "note": "资源无限"},
    "environmentalRegulation": {"waterDischargeLimit": "≥2 mg/L DO", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "水体溶解氧是水质关键指标"}
}
DATA[9] = {  # F
    "carbonFootprint": {"miningEmission": "5.0 kg CO₂/kg", "smeltingEmission": "3.0 kg CO₂/kg", "totalLifecycle": "8.0 kg CO₂/kg", "note": "萤石矿开采和氢氟酸生产"},
    "ecotoxicity": {"aquaticLC50": "51 mg/L", "testSpecies": "虹鳟鱼", "bcf": "<5", "logKow": "0.52", "classification": "中毒", "note": "氟离子对水生生物中等毒性"},
    "environmentalBackground": {"crustAbundance": "585 ppm", "soilBackground": "300 mg/kg", "waterBackground": "0.1 mg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "土壤背景值差异大"},
    "recycling": {"recyclingRate": "15%", "recyclability": "中", "mainRecyclingMethod": "氟化氢酸废液回收", "secondarySourceRatio": "10%", "note": "铝工业和半导体行业氟回收"},
    "environmentalRegulation": {"waterDischargeLimit": "10 mg/L", "airEmissionLimit": "9 mg/m³", "soilScreeningValue": "800 mg/kg", "internationalTreaty": "无", "note": "GB 8978 氟化物排放限值"}
}
DATA[10] = {  # Ne
    "carbonFootprint": {"miningEmission": "0.2 kg CO₂/kg", "smeltingEmission": "0.5 kg CO₂/kg", "totalLifecycle": "0.7 kg CO₂/kg", "note": "空气分离提取"},
    "ecotoxicity": {"aquaticLC50": "N/A", "testSpecies": "N/A", "bcf": "N/A", "logKow": "N/A", "classification": "无毒", "note": "惰性气体"},
    "environmentalBackground": {"crustAbundance": "0.005 ppm", "soilBackground": "—", "waterBackground": "—", "atmosphereBackground": "18.18 ppmv", "note": "大气微量成分"},
    "recycling": {"recyclingRate": "50%", "recyclability": "高", "mainRecyclingMethod": "低温液化分离回收", "secondarySourceRatio": "N/A", "note": "灯管用氖气回收"},
    "environmentalRegulation": {"waterDischargeLimit": "N/A", "airEmissionLimit": "N/A", "soilScreeningValue": "N/A", "internationalTreaty": "无", "note": "惰性气体无限制"}
}

# ── 第3周期 ──
DATA[11] = {  # Na
    "carbonFootprint": {"miningEmission": "2.0 kg CO₂/kg", "smeltingEmission": "6.5 kg CO₂/kg", "totalLifecycle": "8.5 kg CO₂/kg", "note": "食盐电解和氯碱工业"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<1", "logKow": "-0.77", "classification": "低毒", "note": "钠盐低毒，高浓度盐碱化影响"},
    "environmentalBackground": {"crustAbundance": "2.36%", "soilBackground": "10000 mg/kg", "waterBackground": "10 mg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "地壳丰富元素"},
    "recycling": {"recyclingRate": "30%", "recyclability": "中", "mainRecyclingMethod": "工业盐废液回收", "secondarySourceRatio": "20%", "note": "氯碱工业废液回收"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "钠盐无严格排放限制，盐碱化关注增加"}
}
DATA[12] = {  # Mg
    "carbonFootprint": {"miningEmission": "5.5 kg CO₂/kg", "smeltingEmission": "20 kg CO₂/kg", "totalLifecycle": "25.5 kg CO₂/kg", "note": "皮江法炼镁碳排放高，电解法较低"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "大型溞", "bcf": "<1", "logKow": "N/A", "classification": "低毒", "note": "镁盐低毒"},
    "environmentalBackground": {"crustAbundance": "2.33%", "soilBackground": "5000 mg/kg", "waterBackground": "4 mg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "地壳丰富元素"},
    "recycling": {"recyclingRate": "25%", "recyclability": "高", "mainRecyclingMethod": "镁合金废料重熔", "secondarySourceRatio": "20%", "note": "汽车镁合金部件回收增长"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "镁盐无严格限制"}
}
DATA[13] = {  # Al
    "carbonFootprint": {"miningEmission": "0.5 kg CO₂/kg", "smeltingEmission": "12 kg CO₂/kg", "totalLifecycle": "12.5 kg CO₂/kg", "note": "电解铝是高耗能行业，绿电铝碳足迹低50%+"},
    "ecotoxicity": {"aquaticLC50": ">100 mg/L", "testSpecies": "虹鳟鱼", "bcf": "<10", "logKow": "N/A", "classification": "低毒", "note": "铝离子在酸性水体中有毒"},
    "environmentalBackground": {"crustAbundance": "8.23%", "soilBackground": "70000 mg/kg", "waterBackground": "0.3 mg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "地壳最丰富金属"},
    "recycling": {"recyclingRate": "75%", "recyclability": "高", "mainRecyclingMethod": "铝废料重熔再生", "secondarySourceRatio": "35%", "note": "铝回收率行业领先，再生铝能耗仅为原铝5%"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "铝行业受碳排放政策影响大"}
}
DATA[14] = {  # Si
    "carbonFootprint": {"miningEmission": "1.0 kg CO₂/kg", "smeltingEmission": "14 kg CO₂/kg", "totalLifecycle": "15.0 kg CO₂/kg", "note": "工业硅冶炼高耗能，光伏硅料更甚"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<10", "logKow": "N/A", "classification": "无毒", "note": "硅基本无毒"},
    "environmentalBackground": {"crustAbundance": "28.2%", "soilBackground": "300000 mg/kg", "waterBackground": "5 mg/L", "atmosphereBackground": "<1 ng/m³", "note": "地壳第二丰富元素"},
    "recycling": {"recyclingRate": "30%", "recyclability": "中", "mainRecyclingMethod": "硅片废料回收再提纯", "secondarySourceRatio": "15%", "note": "光伏硅片回收增长快"},
    "environmentalRegulation": {"waterDischargeLimit": "10 mg/L", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "硅尘排放受GB 16297限制"}
}
DATA[15] = {  # P
    "carbonFootprint": {"miningEmission": "2.0 kg CO₂/kg", "smeltingEmission": "5.0 kg CO₂/kg", "totalLifecycle": "7.0 kg CO₂/kg", "note": "磷矿开采和磷肥生产"},
    "ecotoxicity": {"aquaticLC50": ">100 mg/L", "testSpecies": "大型溞", "bcf": "<5", "logKow": "N/A", "classification": "低毒", "note": "磷酸盐本身低毒，但导致富营养化"},
    "environmentalBackground": {"crustAbundance": "1050 ppm", "soilBackground": "500 mg/kg", "waterBackground": "0.02 mg/L", "atmosphereBackground": "<1 ng/m³", "note": "磷是水体富营养化关键限制因子"},
    "recycling": {"recyclingRate": "15%", "recyclability": "中", "mainRecyclingMethod": "磷肥污泥回收利用", "secondarySourceRatio": "10%", "note": "磷资源回收日益重要"},
    "environmentalRegulation": {"waterDischargeLimit": "0.5 mg/L 总磷", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "总磷是地表水环境质量标准关键指标"}
}
DATA[16] = {  # S
    "carbonFootprint": {"miningEmission": "0.3 kg CO₂/kg", "smeltingEmission": "2.0 kg CO₂/kg", "totalLifecycle": "2.3 kg CO₂/kg", "note": "硫磺回收和冶炼烟气制酸"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<1", "logKow": "N/A", "classification": "低毒", "note": "硫酸盐低毒，硫化氢高毒"},
    "environmentalBackground": {"crustAbundance": "350 ppm", "soilBackground": "300 mg/kg", "waterBackground": "20 mg/L SO₄", "atmosphereBackground": "1 μg/m³ SO₂", "note": "SO₂是酸雨主要成因"},
    "recycling": {"recyclingRate": "40%", "recyclability": "高", "mainRecyclingMethod": "冶炼烟气制酸回收硫", "secondarySourceRatio": "30%", "note": "硫回收技术成熟"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "550 mg/m³ SO₂", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "SO₂排放受GB 16297严格控制"}
}
DATA[17] = {  # Cl
    "carbonFootprint": {"miningEmission": "1.0 kg CO₂/kg", "smeltingEmission": "3.5 kg CO₂/kg", "totalLifecycle": "4.5 kg CO₂/kg", "note": "氯碱工业电解食盐"},
    "ecotoxicity": {"aquaticLC50": "0.5 mg/L", "testSpecies": "虹鳟鱼", "bcf": "N/A", "logKow": "N/A", "classification": "中毒", "note": "游离氯对水生生物有毒"},
    "environmentalBackground": {"crustAbundance": "145 ppm", "soilBackground": "100 mg/kg", "waterBackground": "10 mg/L", "atmosphereBackground": "<1 ng/m³", "note": "氯离子广泛存在于环境"},
    "recycling": {"recyclingRate": "20%", "recyclability": "中", "mainRecyclingMethod": "氯化氢废气回收", "secondarySourceRatio": "15%", "note": "副产氯化氢回收利用"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "65 mg/m³", "soilScreeningValue": "—", "internationalTreaty": "斯德哥尔摩公约（有机氯污染物）", "note": "有机氯持久性污染物受公约管控"}
}
DATA[18] = {  # Ar
    "carbonFootprint": {"miningEmission": "0.1 kg CO₂/kg", "smeltingEmission": "0.4 kg CO₂/kg", "totalLifecycle": "0.5 kg CO₂/kg", "note": "空气分离提取"},
    "ecotoxicity": {"aquaticLC50": "N/A", "testSpecies": "N/A", "bcf": "N/A", "logKow": "N/A", "classification": "无毒", "note": "惰性气体"},
    "environmentalBackground": {"crustAbundance": "3.5 ppm", "soilBackground": "—", "waterBackground": "—", "atmosphereBackground": "9340 ppmv", "note": "大气第三大成分"},
    "recycling": {"recyclingRate": "30%", "recyclability": "高", "mainRecyclingMethod": "焊接保护气气回收", "secondarySourceRatio": "N/A", "note": "工业氩气回收利用"},
    "environmentalRegulation": {"waterDischargeLimit": "N/A", "airEmissionLimit": "N/A", "soilScreeningValue": "N/A", "internationalTreaty": "无", "note": "惰性气体无限制"}
}

# ── 第4周期 (Z=19-36) ──
DATA[19] = {  # K
    "carbonFootprint": {"miningEmission": "1.5 kg CO₂/kg", "smeltingEmission": "3.0 kg CO₂/kg", "totalLifecycle": "4.5 kg CO₂/kg", "note": "钾盐矿开采和钾肥生产"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<1", "logKow": "N/A", "classification": "低毒", "note": "钾盐低毒"},
    "environmentalBackground": {"crustAbundance": "2.09%", "soilBackground": "15000 mg/kg", "waterBackground": "2 mg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "地壳丰富元素"},
    "recycling": {"recyclingRate": "10%", "recyclability": "低", "mainRecyclingMethod": "钾肥废液部分回收", "secondarySourceRatio": "5%", "note": "钾肥难以有效回收"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "钾盐无严格限制"}
}
DATA[20] = {  # Ca
    "carbonFootprint": {"miningEmission": "0.5 kg CO₂/kg", "smeltingEmission": "2.0 kg CO₂/kg", "totalLifecycle": "2.5 kg CO₂/kg", "note": "石灰石开采和石灰煅烧"},
    "ecotoxicity": {"aquaticLC50": ">1000 mg/L", "testSpecies": "斑马鱼", "bcf": "<1", "logKow": "N/A", "classification": "无毒", "note": "钙盐基本无毒"},
    "environmentalBackground": {"crustAbundance": "4.15%", "soilBackground": "20000 mg/kg", "waterBackground": "15 mg/L", "atmosphereBackground": "<0.1 ng/m³", "note": "地壳丰富元素"},
    "recycling": {"recyclingRate": "20%", "recyclability": "中", "mainRecyclingMethod": "建筑废料回收碳酸钙", "secondarySourceRatio": "10%", "note": "建筑废料回收利用"},
    "environmentalRegulation": {"waterDischargeLimit": "—", "airEmissionLimit": "—", "soilScreeningValue": "—", "internationalTreaty": "无", "note": "钙盐无严格限制"}
}

# 通用模板函数 - 用于填充剩余元素
def gen_env(z, name, mining, smelting, lc50, lc50_sp, bcf, kow, tox_class,
            crust, soil, water, air, recycle_rate, recycle_method, secondary,
            water_limit, air_limit, soil_limit, treaty, note_extra=''):
    try:
        total = "约"+str(round(float(mining.split()[0])+float(smelting.split()[0]),1))+" kg CO₂/kg"
    except:
        total = "N/A"
    try:
        rec_lev = "中" if float(recycle_rate.rstrip('%'))>=20 else "低"
    except:
        rec_lev = "不可回收"
    return {
        "carbonFootprint": {"miningEmission": mining, "smeltingEmission": smelting, "totalLifecycle": total, "note": note_extra or f"{name}的开采和冶炼碳排放"},
        "ecotoxicity": {"aquaticLC50": lc50, "testSpecies": lc50_sp, "bcf": bcf, "logKow": kow, "classification": tox_class, "note": f"{name}的环境毒性"},
        "environmentalBackground": {"crustAbundance": crust, "soilBackground": soil, "waterBackground": water, "atmosphereBackground": air, "note": f"{name}环境背景值"},
        "recycling": {"recyclingRate": recycle_rate, "recyclability": rec_lev, "mainRecyclingMethod": recycle_method, "secondarySourceRatio": secondary, "note": f"{name}回收利用"},
        "environmentalRegulation": {"waterDischargeLimit": water_limit, "airEmissionLimit": air_limit, "soilScreeningValue": soil_limit, "internationalTreaty": treaty, "note": f"{name}环境法规限值"}
    }

# Sc~Zn 过渡金属
DATA[21] = gen_env(21, "钪", "8 kg CO₂/kg", "15 kg CO₂/kg", "0.5 mg/L", "大型溞", "50", "1.2", "中毒", "22 ppm", "15 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "5%", "钪合金废料回收", "3%", "0.1 mg/L", "—", "50 mg/kg", "无", "钪为稀散元素，环境数据有限")
DATA[22] = gen_env(22, "钛", "3 kg CO₂/kg", "18 kg CO₂/kg", "10 mg/L", "斑马鱼", "20", "0.5", "低毒", "5650 ppm", "3000 mg/kg", "0.003 mg/L", "<1 ng/m³", "40%", "钛合金废料真空熔炼回收", "25%", "0.1 mg/L", "—", "—", "无", "钛白粉生产是主要环境负担")
DATA[23] = gen_env(23, "钒", "5 kg CO₂/kg", "12 kg CO₂/kg", "2 mg/L", "虹鳟鱼", "30", "0.8", "中毒", "120 ppm", "100 mg/kg", "0.001 mg/L", "<1 ng/m³", "15%", "钒渣回收提钒", "10%", "0.1 mg/L", "0.02 mg/m³", "200 mg/kg", "无", "钒渣是钢铁工业副产物")
DATA[24] = gen_env(24, "铬", "3 kg CO₂/kg", "10 kg CO₂/kg", "0.1 mg/L", "大型溞", "200", "0.5", "高毒", "102 ppm", "60 mg/kg", "0.002 mg/L", "<1 ng/m³", "30%", "不锈钢废料回收铬", "25%", "0.5 mg/L (Cr⁶⁺)", "0.05 mg/m³ (Cr⁶⁺)", "300 mg/kg", "斯德哥尔摩公约", "六价铬高毒，严格管控")
DATA[25] = gen_env(25, "锰", "2 kg CO₂/kg", "8 kg CO₂/kg", "5 mg/L", "虹鳟鱼", "100", "0.2", "中毒", "950 ppm", "500 mg/kg", "0.01 mg/L", "<1 ng/m³", "20%", "锰铁合金废料回收", "15%", "2 mg/L", "0.2 mg/m³", "—", "无", "锰矿开采和电解锰污染严重")
DATA[26] = gen_env(26, "铁", "0.5 kg CO₂/kg", "1.8 kg CO₂/kg", "10 mg/L", "斑马鱼", "100", "0.3", "低毒", "5.63%", "30000 mg/kg", "0.5 mg/L", "<1 ng/m³", "85%", "钢铁废料电炉重熔", "45%", "2 mg/L", "—", "—", "无", "钢铁行业碳减排是全球重点")
DATA[27] = gen_env(27, "钴", "6 kg CO₂/kg", "15 kg CO₂/kg", "0.3 mg/L", "大型溞", "200", "1.0", "高毒", "25 ppm", "10 mg/kg", "0.001 mg/L", "<1 ng/m³", "30%", "电池废料湿法回收", "20%", "1 mg/L", "0.02 mg/m³", "50 mg/kg", "无", "钴矿开采环境破坏大，刚果金问题突出")
DATA[28] = gen_env(28, "镍", "4 kg CO₂/kg", "14 kg CO₂/kg", "1 mg/L", "大型溞", "100", "0.6", "中毒", "84 ppm", "20 mg/kg", "0.005 mg/L", "<2 ng/m³", "35%", "不锈钢和电池废料回收", "25%", "1 mg/L", "0.04 mg/m³", "150 mg/kg", "无", "镍冶炼SO₂排放和红土镍矿环境问题")
DATA[29] = gen_env(29, "铜", "2.5 kg CO₂/kg", "6 kg CO₂/kg", "0.05 mg/L", "大型溞", "200", "1.2", "高毒", "60 ppm", "25 mg/kg", "0.003 mg/L", "<3 ng/m³", "50%", "铜废料火法精炼回收", "35%", "0.5 mg/L", "0.03 mg/m³", "100 mg/kg", "无", "铜对水生生物极高毒，是水质关键指标")
DATA[30] = gen_env(30, "锌", "2 kg CO₂/kg", "5 kg CO₂/kg", "0.1 mg/L", "虹鳟鱼", "500", "0.5", "中毒", "70 ppm", "50 mg/kg", "0.01 mg/L", "<5 ng/m³", "35%", "锌废料蒸馏回收", "25%", "2 mg/L", "0.1 mg/m³", "200 mg/kg", "无", "锌对水生生物有毒性")

# Ga~Kr
DATA[31] = gen_env(31, "镓", "10 kg CO₂/kg", "20 kg CO₂/kg", "2 mg/L", "大型溞", "20", "0.5", "低毒", "19 ppm", "15 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "10%", "半导体废料回收", "5%", "0.1 mg/L", "—", "—", "无", "镓为伴生矿，环境数据有限")
DATA[32] = gen_env(32, "锗", "8 kg CO₂/kg", "15 kg CO₂/kg", "5 mg/L", "斑马鱼", "10", "0.7", "低毒", "1.5 ppm", "1 mg/kg", "0.0005 mg/L", "<0.1 ng/m³", "15%", "光纤废料回收锗", "10%", "0.1 mg/L", "—", "—", "无", "锗为稀散元素")
DATA[33] = gen_env(33, "砷", "5 kg CO₂/kg", "10 kg CO₂/kg", "0.05 mg/L", "虹鳟鱼", "400", "1.3", "极高毒", "1.8 ppm", "5 mg/kg", "0.001 mg/L", "<1 ng/m³", "5%", "砷废料固化填埋", "3%", "0.1 mg/L", "0.01 mg/m³", "20 mg/kg", "无", "砷是WHO优先控制污染物，地下水砷污染重大公共卫生问题")
DATA[34] = gen_env(34, "硒", "4 kg CO₂/kg", "8 kg CO₂/kg", "0.5 mg/L", "大型溞", "500", "0.8", "中毒", "0.05 ppm", "0.3 mg/kg", "0.001 mg/L", "<1 ng/m³", "10%", "硒废料回收", "5%", "0.1 mg/L", "0.1 mg/m³", "40 mg/kg", "无", "硒的窄窗口效应：必需但过量有毒")
DATA[35] = gen_env(35, "溴", "3 kg CO₂/kg", "6 kg CO₂/kg", "5 mg/L", "大型溞", "10", "1.0", "中毒", "2.4 ppm", "5 mg/kg", "0.02 mg/L", "<2 ng/m³", "15%", "溴化钠废液回收", "10%", "0.1 mg/L", "0.05 mg/m³", "—", "斯德哥尔摩公约", "有机溴阻燃剂和消耗臭氧物质受管控")
DATA[36] = gen_env(36, "氪", "0.2 kg CO₂/kg", "0.5 kg CO₂/kg", "N/A", "N/A", "N/A", "N/A", "无毒", "0.001 ppm", "—", "—", "1.14 ppmv", "20%", "灯管用氪气回收", "N/A", "N/A", "N/A", "N/A", "无", "惰性气体")

# ── 第5周期 (Z=37-54) ──
DATA[37] = gen_env(37, "铷", "8 kg CO₂/kg", "15 kg CO₂/kg", "10 mg/L", "大型溞", "<5", "0.2", "低毒", "90 ppm", "50 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "5%", "科研废料回收", "2%", "0.1 mg/L", "—", "—", "无", "铷为稀碱金属")
DATA[38] = gen_env(38, "锶", "3 kg CO₂/kg", "7 kg CO₂/kg", "20 mg/L", "大型溞", "20", "0.3", "低毒", "370 ppm", "200 mg/kg", "0.05 mg/L", "<1 ng/m³", "10%", "锶废料回收", "5%", "0.1 mg/L", "—", "—", "无", "锶-90放射性同位素是核事故关注物")
DATA[39] = gen_env(39, "钇", "8 kg CO₂/kg", "16 kg CO₂/kg", "0.5 mg/L", "斑马鱼", "50", "0.5", "中毒", "33 ppm", "20 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "10%", "荧光粉废料回收", "5%", "0.1 mg/L", "—", "—", "无", "钇为稀土元素")
DATA[40] = gen_env(40, "锆", "5 kg CO₂/kg", "12 kg CO₂/kg", "5 mg/L", "斑马鱼", "30", "0.6", "低毒", "165 ppm", "200 mg/kg", "0.003 mg/L", "<1 ng/m³", "20%", "锆合金废料回收", "15%", "0.1 mg/L", "—", "—", "无", "锆矿开采含放射性伴生物")
DATA[41] = gen_env(41, "铌", "6 kg CO₂/kg", "14 kg CO₂/kg", "5 mg/L", "大型溞", "20", "0.5", "低毒", "20 ppm", "10 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "15%", "铌铁合金废料回收", "10%", "0.1 mg/L", "—", "—", "无", "铌钽伴生矿开采环境问题")
DATA[42] = gen_env(42, "钼", "5 kg CO₂/kg", "11 kg CO₂/kg", "2 mg/L", "虹鳟鱼", "50", "0.5", "低毒", "1.2 ppm", "1 mg/kg", "0.0005 mg/L", "<1 ng/m³", "20%", "钼废料回收", "15%", "0.5 mg/L", "0.06 mg/m³", "—", "无", "钼是必需微量元素，过量有毒")
DATA[43] = gen_env(43, "锝", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "0 ppm", "0", "0", "0", "N/A", "核废料管理", "N/A", "N/A", "N/A", "N/A", "无", "锝全部为人造放射性元素，核医学管理")
DATA[44] = gen_env(44, "钌", "10 kg CO₂/kg", "20 kg CO₂/kg", "1 mg/L", "大型溞", "100", "0.8", "中毒", "0.001 ppm", "0.01 mg/kg", "0.0001 mg/L", "<0.01 ng/m³", "15%", "催化剂废料回收", "10%", "0.1 mg/L", "—", "—", "无", "铂族金属回收价值高")
DATA[45] = gen_env(45, "铑", "12 kg CO₂/kg", "25 kg CO₂/kg", "0.5 mg/L", "大型溞", "200", "1.0", "中毒", "0.001 ppm", "0.01 mg/kg", "0.0001 mg/L", "<0.01 ng/m³", "15%", "催化剂废料回收", "10%", "0.1 mg/L", "—", "—", "无", "铑为铂族金属，汽车催化剂主要回收源")
DATA[46] = gen_env(46, "钯", "10 kg CO₂/kg", "22 kg CO₂/kg", "0.1 mg/L", "大型溞", "200", "1.0", "中毒", "0.015 ppm", "0.05 mg/kg", "0.0001 mg/L", "<0.01 ng/m³", "25%", "催化剂和电子废料回收", "20%", "0.1 mg/L", "—", "—", "无", "钯回收是城市矿产重要方向")
DATA[47] = gen_env(47, "银", "8 kg CO₂/kg", "18 kg CO₂/kg", "0.001 mg/L", "大型溞", "500", "1.0", "高毒", "0.075 ppm", "0.5 mg/kg", "0.0001 mg/L", "<1 ng/m³", "30%", "电子废料和银废料回收", "25%", "0.1 mg/L", "0.04 mg/m³", "100 mg/kg", "无", "银纳米粒子环境毒性研究活跃")
DATA[48] = gen_env(48, "镉", "6 kg CO₂/kg", "12 kg CO₂/kg", "0.001 mg/L", "大型溞", "2000", "1.5", "极高毒", "0.15 ppm", "0.3 mg/kg", "0.0001 mg/L", "<1 ng/m³", "15%", "镍镉电池废料回收", "10%", "0.1 mg/L", "0.005 mg/m³", "20 mg/kg", "斯德哥尔摩公约", "镉是持久性有毒物质，稻田镉污染是中国食品安全问题")
DATA[49] = gen_env(49, "铟", "10 kg CO₂/kg", "20 kg CO₂/kg", "0.1 mg/L", "大型溞", "100", "0.8", "中毒", "0.25 ppm", "0.5 mg/kg", "0.0001 mg/L", "<0.1 ng/m³", "10%", "ITO废料回收", "5%", "0.1 mg/L", "—", "—", "无", "铟主要来自闪锌矿伴生")
DATA[50] = gen_env(50, "锡", "4 kg CO₂/kg", "9 kg CO₂/kg", "5 mg/L", "大型溞", "100", "0.6", "低毒", "2.3 ppm", "3 mg/kg", "0.001 mg/L", "<1 ng/m³", "25%", "锡焊料废料回收", "20%", "0.1 mg/L", "0.1 mg/m³", "—", "无", "有机锡化合物受斯德哥尔摩公约管控")
DATA[51] = gen_env(51, "锑", "5 kg CO₂/kg", "10 kg CO₂/kg", "0.5 mg/L", "大型溞", "300", "1.0", "中毒", "0.2 ppm", "0.5 mg/kg", "0.0005 mg/L", "<1 ng/m³", "15%", "锑废料回收", "10%", "0.5 mg/L", "0.01 mg/m³", "30 mg/kg", "无", "锑矿开采环境问题突出")
DATA[52] = gen_env(52, "碲", "8 kg CO₂/kg", "16 kg CO₂/kg", "1 mg/L", "大型溞", "50", "0.7", "中毒", "0.001 ppm", "0.01 mg/kg", "0.0001 mg/L", "<0.1 ng/m³", "10%", "碲废料回收", "5%", "0.05 mg/L", "—", "—", "无", "碲为稀散元素")
DATA[53] = gen_env(53, "碘", "3 kg CO₂/kg", "6 kg CO₂/kg", "1 mg/L", "大型溞", "20", "0.5", "低毒", "0.45 ppm", "2 mg/kg", "0.002 mg/L", "<1 ng/m³", "10%", "碘废料回收", "5%", "0.1 mg/L", "—", "—", "无", "放射性碘-131是核事故关注物")
DATA[54] = gen_env(54, "氙", "0.3 kg CO₂/kg", "0.8 kg CO₂/kg", "N/A", "N/A", "N/A", "N/A", "无毒", "0.00003 ppm", "—", "—", "0.09 ppmv", "15%", "灯管和离子推进器用氙回收", "N/A", "N/A", "N/A", "N/A", "无", "惰性气体")

# ── 第6周期 (Z=55-86) ──
DATA[55] = gen_env(55, "铯", "8 kg CO₂/kg", "16 kg CO₂/kg", "5 mg/L", "大型溞", "<10", "0.2", "低毒", "3 ppm", "3 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "5%", "科研废料回收", "2%", "0.1 mg/L", "—", "—", "无", "铯-137是核事故主要放射性污染物")
DATA[56] = gen_env(56, "钡", "3 kg CO₂/kg", "7 kg CO₂/kg", "10 mg/L", "大型溞", "50", "0.5", "低毒", "425 ppm", "400 mg/kg", "0.03 mg/L", "<1 ng/m³", "10%", "钡废料回收", "5%", "2 mg/L", "0.05 mg/m³", "—", "无", "可溶性钡盐有毒")
DATA[57] = gen_env(57, "镧", "7 kg CO₂/kg", "14 kg CO₂/kg", "2 mg/L", "大型溞", "100", "0.5", "低毒", "39 ppm", "30 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "10%", "稀土废料回收", "5%", "0.1 mg/L", "—", "—", "无", "稀土开采环境破坏大")
DATA[58] = gen_env(58, "铈", "7 kg CO₂/kg", "14 kg CO₂/kg", "2 mg/L", "大型溞", "100", "0.5", "低毒", "66.5 ppm", "50 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "10%", "催化剂废料回收", "5%", "0.1 mg/L", "—", "—", "无", "铈是最丰富稀土元素")
for z in range(59, 72):
    name = NAMES[z]
    DATA[z] = gen_env(z, name, "8 kg CO₂/kg", "15 kg CO₂/kg", "1 mg/L", "大型溞", "100", "0.5", "低毒", "5 ppm", "10 mg/kg", "0.001 mg/L", "<0.1 ng/m³", "5%", "稀土废料回收", "3%", "0.1 mg/L", "—", "—", "无", f"{name}为稀土元素，开采环境问题突出")
DATA[72] = gen_env(72, "铪", "8 kg CO₂/kg", "16 kg CO₂/kg", "2 mg/L", "斑马鱼", "50", "0.6", "低毒", "3 ppm", "3 mg/kg", "0.0005 mg/L", "<0.1 ng/m³", "10%", "核反应堆废料回收", "5%", "0.1 mg/L", "—", "—", "无", "铪来自锆铪分离")
DATA[73] = gen_env(73, "钽", "10 kg CO₂/kg", "20 kg CO₂/kg", "5 mg/L", "大型溞", "20", "0.5", "低毒", "2 ppm", "1 mg/kg", "0.0001 mg/L", "<0.1 ng/m³", "20%", "电容器废料回收", "15%", "0.1 mg/L", "—", "—", "无", "钽矿开采涉及冲突矿物问题")
DATA[74] = gen_env(74, "钨", "6 kg CO₂/kg", "13 kg CO₂/kg", "5 mg/L", "大型溞", "50", "0.5", "低毒", "1.25 ppm", "1 mg/kg", "0.0002 mg/L", "<1 ng/m³", "25%", "硬质合金废料回收", "20%", "0.1 mg/L", "0.05 mg/m³", "—", "无", "钨为关键战略金属")
DATA[75] = gen_env(75, "铼", "15 kg CO₂/kg", "30 kg CO₂/kg", "2 mg/L", "大型溞", "100", "0.8", "中毒", "0.0007 ppm", "0.001 mg/kg", "0.00001 mg/L", "<0.01 ng/m³", "15%", "催化剂废料回收", "10%", "0.1 mg/L", "—", "—", "无", "铼为最稀散元素之一")
DATA[76] = gen_env(76, "锇", "12 kg CO₂/kg", "25 kg CO₂/kg", "1 mg/L", "大型溞", "200", "1.0", "中毒", "0.001 ppm", "0.001 mg/kg", "0.00001 mg/L", "<0.01 ng/m³", "15%", "催化剂废料回收", "10%", "0.1 mg/L", "—", "—", "无", "四氧化锇高毒")
DATA[77] = gen_env(77, "铱", "12 kg CO₂/kg", "25 kg CO₂/kg", "0.5 mg/L", "大型溞", "200", "1.0", "中毒", "0.001 ppm", "0.001 mg/kg", "0.00001 mg/L", "<0.01 ng/m³", "15%", "催化剂废料回收", "10%", "0.1 mg/L", "—", "—", "无", "铱为铂族金属")
DATA[78] = gen_env(78, "铂", "10 kg CO₂/kg", "22 kg CO₂/kg", "0.5 mg/L", "大型溞", "200", "1.0", "中毒", "0.005 ppm", "0.01 mg/kg", "0.0001 mg/L", "<0.01 ng/m³", "25%", "催化剂和电子废料回收", "20%", "0.1 mg/L", "0.002 mg/m³", "—", "无", "铂族金属回收价值极高")
DATA[79] = gen_env(79, "金", "15 kg CO₂/kg", "30 kg CO₂/kg", "0.1 mg/L", "大型溞", "100", "1.0", "中毒", "0.004 ppm", "0.003 mg/kg", "0.00005 mg/L", "<0.01 ng/m³", "30%", "电子废料和首饰废料回收", "25%", "0.1 mg/L", "—", "—", "无", "氰化提金环境问题严重")
DATA[80] = gen_env(80, "汞", "8 kg CO₂/kg", "16 kg CO₂/kg", "0.01 mg/L", "大型溞", "5000", "3.0", "极高毒", "0.085 ppm", "0.05 mg/kg", "0.0001 mg/L", "2 ng/m³", "10%", "荧光灯废料回收汞", "5%", "0.05 mg/L", "0.01 mg/m³", "8 mg/kg", "水俣公约", "汞是全球优先控制污染物，水俣病历史教训")
DATA[81] = gen_env(81, "铊", "8 kg CO₂/kg", "16 kg CO₂/kg", "0.01 mg/L", "虹鳟鱼", "1000", "1.5", "极高毒", "0.85 ppm", "0.5 mg/kg", "0.0001 mg/L", "<1 ng/m³", "5%", "铊废料固化填埋", "3%", "0.1 mg/L", "0.005 mg/m³", "5 mg/kg", "无", "铊是剧毒元素")
DATA[82] = gen_env(82, "铅", "4 kg CO₂/kg", "9 kg CO₂/kg", "0.01 mg/L", "虹鳟鱼", "3000", "1.9", "极高毒", "14 ppm", "15 mg/kg", "0.001 mg/L", "<5 ng/m³", "70%", "铅酸电池回收", "60%", "1 mg/L", "0.07 mg/m³", "400 mg/kg", "无", "铅中毒是全球公共健康问题，无铅化趋势")
DATA[83] = gen_env(83, "铋", "6 kg CO₂/kg", "12 kg CO₂/kg", "5 mg/L", "大型溞", "50", "0.5", "低毒", "0.048 ppm", "0.3 mg/kg", "0.0001 mg/L", "<1 ng/m³", "10%", "铋废料回收", "5%", "0.1 mg/L", "—", "—", "无", "铋被称为绿色金属，替代铅")
DATA[84] = gen_env(84, "钋", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性极毒", "0.000001 ppm", "0", "0", "<0.001 ng/m³", "N/A", "放射性废物管理", "N/A", "N/A", "N/A", "N/A", "无", "钋-210是极毒放射性核素")
DATA[85] = gen_env(85, "砹", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "微量", "0", "0", "0", "N/A", "放射性废物管理", "N/A", "N/A", "N/A", "N/A", "无", "砹全部同位素半衰期短")
DATA[86] = gen_env(86, "氡", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "微量", "0", "0", "0.5 Bq/m³(室内)", "N/A", "通风排除", "N/A", "N/A", "N/A", "N/A", "无", "氡-222是室内放射性气体，肺癌第二大病因")

# ── 第7周期 (Z=87-118) ──
DATA[87] = gen_env(87, "钫", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "微量", "0", "0", "0", "N/A", "放射性废物管理", "N/A", "N/A", "N/A", "N/A", "无", "钫半衰期极短，无环境意义")
DATA[88] = gen_env(88, "镭", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性极毒", "0.9 ppm(U矿)", "0.001 mg/kg", "0", "<0.001 ng/m³", "N/A", "放射性废物管理", "N/A", "N/A", "N/A", "N/A", "无", "镭-226是铀衰变产物，历史上发光涂料事故")
DATA[89] = gen_env(89, "锕", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "微量", "0", "0", "0", "N/A", "放射性废物管理", "N/A", "N/A", "N/A", "N/A", "无", "锕为锕系元素起始")
DATA[90] = gen_env(90, "钍", "8 kg CO₂/kg", "16 kg CO₂/kg", "N/A", "N/A", "N/A", "N/A", "放射性危险", "9.6 ppm", "6 mg/kg", "0.0001 mg/L", "<0.1 ng/m³", "5%", "核燃料循环管理", "3%", "0.1 mg/L", "0.02 mg/m³", "—", "无", "钍作为潜在核燃料，稀土伴生放射性")
DATA[91] = gen_env(91, "镤", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "微量", "0", "0", "0", "N/A", "放射性废物管理", "N/A", "N/A", "N/A", "N/A", "无", "镤为铀衰变中间产物")
DATA[92] = gen_env(92, "铀", "10 kg CO₂/kg", "20 kg CO₂/kg", "N/A", "N/A", "N/A", "N/A", "放射性危险", "2.7 ppm", "2 mg/kg", "0.0005 mg/L", "<0.1 ng/m³", "5%", "核燃料后处理回收", "3%", "0.05 mg/L", "0.02 mg/m³", "—", "无", "铀矿开采放射性废物和尾矿环境问题严重")
for z in range(93, 100):
    name = NAMES[z]
    DATA[z] = gen_env(z, name, "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性极毒", "0 ppm", "0", "0", "0", "N/A", "核废料地质处置", "N/A", "N/A", "N/A", "N/A", "无", f"{name}为人造超铀元素，核废料管理对象")
for z in range(100, 104):
    name = NAMES[z]
    DATA[z] = gen_env(z, name, "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "放射性危险", "0 ppm", "0", "0", "0", "N/A", "核废料管理", "N/A", "N/A", "N/A", "N/A", "无", f"{name}为人造超重元素，半衰期极短")
# 超重元素 104-118
for z in range(104, 119):
    name = NAMES[z]
    DATA[z] = {
        "carbonFootprint": {"miningEmission": "N/A", "smeltingEmission": "N/A", "totalLifecycle": "N/A", "note": f"{name}为人造元素，无工业生产"},
        "ecotoxicity": {"aquaticLC50": "N/A", "testSpecies": "N/A", "bcf": "N/A", "logKow": "N/A", "classification": "放射性危险", "note": f"{name}半衰期极短，无环境暴露"},
        "environmentalBackground": {"crustAbundance": "0", "soilBackground": "0", "waterBackground": "0", "atmosphereBackground": "0", "note": f"{name}自然界不存在"},
        "recycling": {"recyclingRate": "N/A", "recyclability": "不可回收", "mainRecyclingMethod": "N/A", "secondarySourceRatio": "N/A", "note": "人造元素无法回收"},
        "environmentalRegulation": {"waterDischargeLimit": "N/A", "airEmissionLimit": "N/A", "soilScreeningValue": "N/A", "internationalTreaty": "无", "note": "仅在实验室条件下短暂存在"}
    }

# ── 生成JS文件 ──
lines = []
lines.append('/**')
lines.append(' * P7-1：环境生态数据')
lines.append(' * 包含：碳排放、生态毒性、环境背景值、循环回收、环境法规限值')
lines.append(' * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS')
lines.append(' */')
lines.append('')
lines.append('var P7_ENVIRONMENT = {};')
lines.append('')
lines.append('// ════════════════════════════════════════════════════')
lines.append('//  环境生态数据（按 z 索引）')
lines.append('// ════════════════════════════════════════════════════')
lines.append('')

period_names = {1:'第 1 周期', 2:'第 2 周期', 3:'第 3 周期', 4:'第 4 周期', 5:'第 5 周期', 6:'第 6 周期', 7:'第 7 周期'}

for p in range(1, 8):
    elements = PERIODS[p]
    lines.append(f'// ── {period_names[p]} ────────────────────────────────────────────')
    for z in elements:
        d = DATA[z]
        name = NAMES[z]
        lines.append(f'P7_ENVIRONMENT[{z}] = {{  // {name}')
        
        cf = d["carbonFootprint"]
        lines.append(f'  carbonFootprint: {{')
        lines.append(f'    miningEmission: \'{cf["miningEmission"]}\',')
        lines.append(f'    smeltingEmission: \'{cf["smeltingEmission"]}\',')
        lines.append(f'    totalLifecycle: \'{cf["totalLifecycle"]}\',')
        lines.append(f'    note: \'{cf["note"]}\'')
        lines.append(f'  }},')
        
        et = d["ecotoxicity"]
        lines.append(f'  ecotoxicity: {{')
        lines.append(f'    aquaticLC50: \'{et["aquaticLC50"]}\',')
        lines.append(f'    testSpecies: \'{et["testSpecies"]}\',')
        lines.append(f'    bcf: \'{et["bcf"]}\',')
        lines.append(f'    logKow: \'{et["logKow"]}\',')
        lines.append(f'    classification: \'{et["classification"]}\',')
        lines.append(f'    note: \'{et["note"]}\'')
        lines.append(f'  }},')
        
        eb = d["environmentalBackground"]
        lines.append(f'  environmentalBackground: {{')
        lines.append(f'    crustAbundance: \'{eb["crustAbundance"]}\',')
        lines.append(f'    soilBackground: \'{eb["soilBackground"]}\',')
        lines.append(f'    waterBackground: \'{eb["waterBackground"]}\',')
        lines.append(f'    atmosphereBackground: \'{eb["atmosphereBackground"]}\',')
        lines.append(f'    note: \'{eb["note"]}\'')
        lines.append(f'  }},')
        
        rc = d["recycling"]
        lines.append(f'  recycling: {{')
        lines.append(f'    recyclingRate: \'{rc["recyclingRate"]}\',')
        lines.append(f'    recyclability: \'{rc["recyclability"]}\',')
        lines.append(f'    mainRecyclingMethod: \'{rc["mainRecyclingMethod"]}\',')
        lines.append(f'    secondarySourceRatio: \'{rc["secondarySourceRatio"]}\',')
        lines.append(f'    note: \'{rc["note"]}\'')
        lines.append(f'  }},')
        
        er = d["environmentalRegulation"]
        lines.append(f'  environmentalRegulation: {{')
        lines.append(f'    waterDischargeLimit: \'{er["waterDischargeLimit"]}\',')
        lines.append(f'    airEmissionLimit: \'{er["airEmissionLimit"]}\',')
        lines.append(f'    soilScreeningValue: \'{er["soilScreeningValue"]}\',')
        lines.append(f'    internationalTreaty: \'{er["internationalTreaty"]}\',')
        lines.append(f'    note: \'{er["note"]}\'')
        lines.append(f'  }}')
        lines.append(f'}};')
        lines.append('')
    lines.append('')

with open('E:/Desktop/periodic-table/data/p7-environment.js', 'w', encoding='utf-8') as f:
    f.write('\n'.join(lines))

print(f'生成完成: p7-environment.js')
print(f'总行数: {len(lines)}')
print(f'元素数: {len(DATA)}')
