#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成 P6 市场经济数据文件 (p6-economy.js)
包含全部118个元素的市场经济数据。
"""

import os, json

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "data")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "p6-economy.js")

# 118元素列表: (符号, 中文名, 原子序数)
ELEMENTS = [
    ("H","氢",1),("He","氦",2),("Li","锂",3),("Be","铍",4),("B","硼",5),("C","碳",6),
    ("N","氮",7),("O","氧",8),("F","氟",9),("Ne","氖",10),("Na","钠",11),("Mg","镁",12),
    ("Al","铝",13),("Si","硅",14),("P","磷",15),("S","硫",16),("Cl","氯",17),("Ar","氩",18),
    ("K","钾",19),("Ca","钙",20),("Sc","钪",21),("Ti","钛",22),("V","钒",23),("Cr","铬",24),
    ("Mn","锰",25),("Fe","铁",26),("Co","钴",27),("Ni","镍",28),("Cu","铜",29),("Zn","锌",30),
    ("Ga","镓",31),("Ge","锗",32),("As","砷",33),("Se","硒",34),("Br","溴",35),("Kr","氪",36),
    ("Rb","铷",37),("Sr","锶",38),("Y","钇",39),("Zr","锆",40),("Nb","铌",41),("Mo","钼",42),
    ("Tc","锝",43),("Ru","钌",44),("Rh","铑",45),("Pd","钯",46),("Ag","银",47),("Cd","镉",48),
    ("In","铟",49),("Sn","锡",50),("Sb","锑",51),("Te","碲",52),("I","碘",53),("Xe","氙",54),
    ("Cs","铯",55),("Ba","钡",56),("La","镧",57),("Ce","铈",58),("Pr","镨",59),("Nd","钕",60),
    ("Pm","钷",61),("Sm","钐",62),("Eu","铕",63),("Gd","钆",64),("Tb","铽",65),("Dy","镝",66),
    ("Ho","钬",67),("Er","铒",68),("Tm","铥",69),("Yb","镱",70),("Lu","镥",71),
    ("Hf","铪",72),("Ta","钽",73),("W","钨",74),("Re","铼",75),("Os","锇",76),("Ir","铱",77),
    ("Pt","铂",78),("Au","金",79),("Hg","汞",80),("Tl","铊",81),("Pb","铅",82),("Bi","铋",83),
    ("Po","钋",84),("At","砹",85),("Rn","氡",86),("Fr","钫",87),("Ra","镭",88),
    ("Ac","锕",89),("Th","钍",90),("Pa","镤",91),("U","铀",92),("Np","镎",93),("Pu","钚",94),
    ("Am","镅",95),("Cm","锔",96),("Bk","锫",97),("Cf","锎",98),("Es","锿",99),("Fm","镄",100),
    ("Md","钔",101),("No","锘",102),("Lr","铹",103),
    ("Rf","𬬻",104),("Db","𬭊",105),("Sg","𬭳",106),("Bh","𬭛",107),("Hs","𬭶",108),
    ("Mt","鿏",109),("Ds","𫟼",110),("Rg","𬬭",111),("Cn","鎶",112),("Nh","鉨",113),
    ("Fl","𫓧",114),("Mc","镆",115),("Lv","𫟷",116),("Ts","鿬",117),("Og","鿫",118),
]
ELEMENT_NAMES = {s: n for s, n, _ in ELEMENTS}

# ========== 超重元素模板 (Z>=104) ==========
def gen_superheavy(sym, z):
    name = ELEMENT_NAMES[sym]
    return f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '超重元素(Z={z})，半衰期极短，仅在实验室中通过核反应合成，无商业化应用，无市场数据'
  }},
  topProducers: [
    {{ rank: 1, company: '联合核研究所(JINR)', country: '俄罗斯', marketShare: '~40%', annualCapacity: '仅原子级合成' }},
    {{ rank: 2, company: '劳伦斯利弗莫尔国家实验室(LLNL)', country: '美国', marketShare: '~35%', annualCapacity: '仅原子级合成' }},
    {{ rank: 3, company: 'GSI亥姆霍兹重离子研究中心', country: '德国', marketShare: '~20%', annualCapacity: '仅原子级合成' }},
    {{ rank: 4, company: '理化学研究所(RIKEN)', country: '日本', marketShare: '~5%', annualCapacity: '仅原子级合成' }}
  ],
  supplyChain: {{
    upstream: '重离子加速器核反应合成(如钙-48轰击锎靶)',
    midstream: '气相热色谱分离鉴定',
    downstream: '仅基础核物理研究',
    bottleneck: '半衰期极短(毫秒~秒级)，无法积累，即产即测',
    note: '{name}(Z={z})是超重元素，无商业化应用，无市场数据'
  }},
  substitutes: [],
  forecast: {{
    shortTerm: '无商业化前景',
    longTerm: '仅基础科学研究价值(稳定岛理论验证)',
    keyDrivers: ['核物理基础研究', '超重元素稳定岛探索'],
    riskFactors: [],
    note: '无商业化应用，无市场数据'
  }},
  strategicReserves: {{
    countries: [],
    note: '无商业化应用，无市场数据'
  }}
}};"""

# ========== 极稀缺放射性元素模板 ==========
def gen_radioactive_research(sym, note_text, use_text="科学研究"):
    name = ELEMENT_NAMES[sym]
    return f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '无商业化定价',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: '无市场数据',
    tenYearTrend: '无市场数据',
    priceDrivers: ['仅用于科学研究'],
    note: '{note_text}'
  }},
  topProducers: [
    {{ rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' }},
    {{ rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' }},
    {{ rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' }},
    {{ rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' }},
    {{ rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }}
  ],
  supplyChain: {{
    upstream: '核反应堆中子辐照/核废料后处理/粒子加速器合成',
    midstream: '核化学分离纯化',
    downstream: '{use_text}',
    bottleneck: '极强放射性和极短半衰期，产量极低',
    note: '{note_text}'
  }},
  substitutes: [],
  forecast: {{
    shortTerm: '无商业化前景',
    longTerm: '仅科学研究价值',
    keyDrivers: ['核物理研究', '放射性同位素应用'],
    riskFactors: [],
    note: '放射性元素，无商业化应用，无市场数据'
  }},
  strategicReserves: {{
    countries: [],
    note: '放射性元素受IAEA核监管，无商业化市场'
  }}
}};"""

# ========== 放射性元素(有部分市场)模板 ==========
def gen_radioactive_market(sym, price, use_text, note_text, drivers=None):
    name = ELEMENT_NAMES[sym]
    drv = drivers if drivers else ['核医学需求', '航天核电池(RTG)', '科研需求']
    return f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '{price}',
    priceUnit: 'USD/克',
    exchange: '政府/研究机构直接交易，无公开交易所',
    fiveYearTrend: '供应稀缺，价格稳定偏高',
    tenYearTrend: '核医学/航天需求驱动',
    priceDrivers: {json.dumps(drv, ensure_ascii=False)},
    note: '{note_text}'
  }},
  topProducers: [
    {{ rank: 1, company: '橡树岭国家实验室(ORNL)', country: '美国', marketShare: '~40%', annualCapacity: '实验室量级' }},
    {{ rank: 2, company: '俄罗斯国家原子能公司(Rosatom)', country: '俄罗斯', marketShare: '~30%', annualCapacity: '实验室量级' }},
    {{ rank: 3, company: '法国替代能源和原子能委员会(CEA)', country: '法国', marketShare: '~10%', annualCapacity: '实验室量级' }},
    {{ rank: 4, company: '中国原子能科学研究院(CIAE)', country: '中国', marketShare: '~10%', annualCapacity: '实验室量级' }},
    {{ rank: 5, company: '欧洲核子中心(CERN)', country: '瑞士', marketShare: '~5%', annualCapacity: '实验室量级' }}
  ],
  supplyChain: {{
    upstream: '核反应堆中子辐照/核废料后处理',
    midstream: '核化学分离纯化→放射性同位素产品',
    downstream: '{use_text}',
    bottleneck: '极强放射性，需特殊设施处理，产量极低',
    note: '{note_text}'
  }},
  substitutes: [],
  forecast: {{
    shortTerm: '核医学和航天需求稳定增长',
    longTerm: '核电池和核医学应用持续扩展',
    keyDrivers: ['癌症靶向治疗', '航天核电池(RTG)', '核探测与测量'],
    riskFactors: ['核监管趋严', '替代技术发展'],
    note: '放射性元素，受国际核监管(IAEA)，无公开交易市场'
  }},
  strategicReserves: {{
    countries: [
      {{ country: '美国', policy: '能源部(DOE)同位素计划管理', note: '战略同位素储备' }},
      {{ country: '俄罗斯', policy: 'Rosatom统一管理', note: '核材料国家管控' }},
      {{ country: '中国', policy: '中核集团(CNNC)管理', note: '核材料国家管控' }}
    ],
    note: '放射性元素受国际核监管体系(IAEA)严格管控'
  }}
}};"""

# ========== 稀土元素模板 ==========
def gen_rare_earth(sym, price, trend, driver, use_text, share_text):
    name = ELEMENT_NAMES[sym]
    return f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '{price}',
    priceUnit: 'USD/吨或公斤',
    exchange: '包头稀土交易所 / 伦敦金属交易所(LME探索中)',
    fiveYearTrend: '{trend}',
    tenYearTrend: '中国稀土政策驱动，长期供应集中',
    priceDrivers: ['{driver}', '中国稀土配额管理', '全球新能源与高科技需求'],
    note: '{name}是稀土元素，{use_text.split("、")[0]}为核心用途'
  }},
  topProducers: [
    {{ rank: 1, company: '中国稀土集团', country: '中国', marketShare: '~35%', annualCapacity: '~5万吨(REO)' }},
    {{ rank: 2, company: '北方稀土', country: '中国', marketShare: '~25%', annualCapacity: '~4万吨(REO)' }},
    {{ rank: 3, company: 'Lynas(莱纳斯)', country: '澳大利亚', marketShare: '~10%', annualCapacity: '~1.5万吨(REO)' }},
    {{ rank: 4, company: 'MP Materials', country: '美国', marketShare: '~8%', annualCapacity: '~1.2万吨(REO)' }},
    {{ rank: 5, company: '盛和资源', country: '中国', marketShare: '~5%', annualCapacity: '~8,000吨(REO)' }}
  ],
  supplyChain: {{
    upstream: '稀土矿开采(中国内蒙古白云鄂博、四川凉山、江西赣州离子型矿、澳大利亚、美国)',
    midstream: '选矿→萃取分离(中国占全球85%分离产能)→金属冶炼',
    downstream: '{use_text}',
    bottleneck: '分离提纯技术高度集中在中国(占85%)，海外缺乏完整分离产能',
    note: '稀土供应链高度集中，{share_text}'
  }},
  substitutes: [
    {{ material: '替代材料因应用而异', costComparison: '多数稀土元素缺乏直接替代品', performanceComparison: '稀土独特性能难以完全替代', note: '部分应用可通过优化设计减少稀土用量' }}
  ],
  forecast: {{
    shortTerm: '需求随高科技产业增长，中国配额管理稳定供应',
    longTerm: '新能源与国防需求持续增长，海外供应链建设加速但短期难以替代中国',
    keyDrivers: ['{driver}', '国防军工需求', '新能源产业'],
    riskFactors: ['海外稀土供应链建设', '回收技术进步', '替代材料研发'],
    note: '稀土被各国列为关键战略物资，中国掌握85%分离产能定价权'
  }},
  strategicReserves: {{
    countries: [
      {{ country: '中国', policy: '稀土战略储备+出口管制', note: '稀土被列为国家战略资源' }},
      {{ country: '美国', policy: '国防储备库稀土储备', note: '稀土被列为关键矿物' }},
      {{ country: '日本', policy: 'JOGMEC稀土海外供应多元化', note: '减少对中国依赖' }},
      {{ country: '欧盟', policy: '关键原材料法案', note: '稀土被列为最关键供应链风险' }}
    ],
    note: '稀土是中美科技竞争核心领域，{name}供应链高度集中'
  }}
}};"""

# ========== 贵金属模板 ==========
def gen_precious_metal(sym, price, unit, exchange, trend5, trend10, drivers, note,
                      producers, chain_up, chain_mid, chain_down, bottleneck, note_chain,
                      substitutes, forecast_st, forecast_lt, forecast_drivers, forecast_risks,
                      forecast_note, reserves_countries, reserves_note):
    return f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '{price}',
    priceUnit: '{unit}',
    exchange: '{exchange}',
    fiveYearTrend: '{trend5}',
    tenYearTrend: '{trend10}',
    priceDrivers: {json.dumps(drivers, ensure_ascii=False)},
    note: '{note}'
  }},
  topProducers: {json.dumps(producers, ensure_ascii=False)},
  supplyChain: {{
    upstream: '{chain_up}',
    midstream: '{chain_mid}',
    downstream: '{chain_down}',
    bottleneck: '{bottleneck}',
    note: '{note_chain}'
  }},
  substitutes: {json.dumps(substitutes, ensure_ascii=False)},
  forecast: {{
    shortTerm: '{forecast_st}',
    longTerm: '{forecast_lt}',
    keyDrivers: {json.dumps(forecast_drivers, ensure_ascii=False)},
    riskFactors: {json.dumps(forecast_risks, ensure_ascii=False)},
    note: '{forecast_note}'
  }},
  strategicReserves: {{
    countries: {json.dumps(reserves_countries, ensure_ascii=False)},
    note: '{reserves_note}'
  }}
}};"""

# ========== 工业非金属/气体模板 ==========
def gen_industrial_gas(sym, price, unit, exchange, trend5, drivers, note,
                       producers, chain_up, chain_mid, chain_down, bottleneck, note_chain,
                       substitutes, forecast_st, forecast_lt, forecast_drivers, forecast_risks,
                       forecast_note, reserves_countries, reserves_note):
    return gen_precious_metal(sym, price, unit, exchange, trend5, "长期趋势因应用而异",
                              drivers, note, producers, chain_up, chain_mid, chain_down,
                              bottleneck, note_chain, substitutes, forecast_st, forecast_lt,
                              forecast_drivers, forecast_risks, forecast_note,
                              reserves_countries, reserves_note)

# ========== 通用金属/半金属模板 ==========
def gen_general_metal(sym, price, unit, exchange, trend5, trend10, drivers, note,
                      producers, chain_up, chain_mid, chain_down, bottleneck, note_chain,
                      substitutes, forecast_st, forecast_lt, forecast_drivers, forecast_risks,
                      forecast_note, reserves_countries, reserves_note):
    return gen_precious_metal(sym, price, unit, exchange, trend5, trend10,
                              drivers, note, producers, chain_up, chain_mid, chain_down,
                              bottleneck, note_chain, substitutes, forecast_st, forecast_lt,
                              forecast_drivers, forecast_risks, forecast_note,
                              reserves_countries, reserves_note)

# ========== 生成全部118个元素的JS数据 ==========

def generate_all():
    """生成全部118个元素的市场经济数据JS文本"""
    entries = {}

    # --- 超重元素 Z>=104 (15个) ---
    for sym, name, z in ELEMENTS:
        if z >= 104:
            entries[sym] = gen_superheavy(sym, z)

    # --- 极稀缺放射性元素(无市场) ---
    research_only = {
        "Es": "锿半衰期极短(最长20天)，仅实验室合成，无商业化应用，无市场数据",
        "Fm": "镄半衰期极短(最长100天)，仅实验室合成，无商业化应用，无市场数据",
        "Md": "钔半衰期极短，仅实验室合成，无商业化应用，无市场数据",
        "No": "锘半衰期极短，仅实验室合成，无商业化应用，无市场数据",
        "Lr": "铹半衰期极短，仅实验室合成，无商业化应用，无市场数据",
        "Fr": "钫是地壳中最稀有的天然元素之一，极不稳定，无商业化应用，无市场数据",
        "At": "砹是地壳中最稀有元素之一，极不稳定，无商业化应用，无市场数据",
        "Bk": "锫半衰期极短，仅实验室合成，无商业化应用，无市场数据",
    }
    for sym, note in research_only.items():
        entries[sym] = gen_radioactive_research(sym, note)

    # --- 放射性元素(有部分市场) ---
    radioactive_market = {
        "Pa": ("~$280,000/克(镤-231)", "科学研究、地质年代学", "极稀有放射性元素，无商业化应用，仅用于科研", ["地质年代学研究", "核物理研究"]),
        "Np": ("~$660/克(镎-237)", "钚-238生产(航天核电池)、核武器中子源", "核反应堆副产物，用于航天核电池(RTG)钚-238前体", ["航天核电池(RTG)", "核武器中子源"]),
        "Pu": ("~$5,500/克(钚-238)", "核武器、核电站MOX燃料、航天核电池(RTG)", "钚是核武器和航天核电池核心材料，受国际核监管(IAEA)", ["核武器", "航天核电池(RTG)", "MOX核燃料"]),
        "Am": ("~$1,500/克(镅-241)", "烟雾报警器、工业测厚仪、航天核电池", "镅-241广泛用于烟雾报警器(亿级量级)，镅-243用于科研", ["烟雾报警器", "工业测厚仪", "航天核电池"]),
        "Cm": ("~$185,000/克(锔-244)", "航天核电池(RTG)、X射线源、科学研究", "极强放射性，锔-244用于航天RTG，产量极低", ["航天核电池(RTG)", "X射线源", "科研"]),
        "Cf": ("~$27,000,000/克(锎-252)", "中子源(石油测井/核反应启动/癌症治疗)", "锎-252是极强中子源，全球年产仅克级", ["石油测井中子源", "核反应启动源", "癌症治疗"]),
        "Ac": ("~$50,000/克(锕-225)", "靶向α放射治疗(癌症)、中子源", "锕-225是癌症靶向治疗前沿同位素，供应极度稀缺", ["癌症靶向α治疗", "中子源"]),
        "Ra": ("~$20,000/克(镭-226)", "癌症放射治疗(历史)、工业放射源", "镭历史上用于发光涂料和癌症治疗，现多被替代", ["历史放射治疗", "工业放射源"]),
        "Po": ("~$3,000/克(钋-210估算)", "航天热源(RTG)、中子源、静电消除", "极强放射性，钋-210用于航天RTG，产量极低", ["航天热源(RTG)", "中子源", "静电消除"]),
        "Rn": ("无商业化定价", "癌症放射治疗(历史)、地震研究", "放射性惰性气体，主要关注室内氡危害，无商业化市场", ["地震研究", "室内氡监测"]),
        "Tc": ("~$60/克(锝-99m)", "医学SPECT显像(锝-99m)、工业示踪", "锝-99m是核医学最常用显像同位素，全球日用量数千万次", ["医学SPECT显像", "工业示踪"]),
    }
    for sym, (price, use, note, drv) in radioactive_market.items():
        entries[sym] = gen_radioactive_market(sym, price, use, note, drv)

    return entries

# 详细数据元素将在第二个函数中处理
def generate_detailed():
    """生成有详细数据的元素的JS文本"""
    entries = {}

    # ===== Fe 铁 =====
    entries["Fe"] = """P6_ECONOMY['Fe'] = {
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
};"""

    # ===== Cu 铜 =====
    entries["Cu"] = r"""P6_ECONOMY['Cu'] = {
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
};"""

    # ===== Al 铝 =====
    entries["Al"] = r"""P6_ECONOMY['Al'] = {
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
};"""

    return entries

# 更多详细元素数据在下一个函数
def generate_detailed_2():
    entries = {}

    # ===== Zn 锌 =====
    entries["Zn"] = r"""P6_ECONOMY['Zn'] = {
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
};"""

    # ===== Au 金 =====
    entries["Au"] = r"""P6_ECONOMY['Au'] = {
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
};"""

    # ===== Ag 银 =====
    entries["Ag"] = r"""P6_ECONOMY['Ag'] = {
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
};"""

    # ===== Li 锂 =====
    entries["Li"] = r"""P6_ECONOMY['Li'] = {
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
};"""

    return entries

print("详细数据函数(1-2)已定义")

# 更多详细元素数据
def generate_detailed_3():
    entries = {}

    # ===== Ni 镍 =====
    entries["Ni"] = r"""P6_ECONOMY['Ni'] = {
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
};"""

    # ===== Co 钴 =====
    entries["Co"] = r"""P6_ECONOMY['Co'] = {
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
};"""

    # ===== Sn 锡 =====
    entries["Sn"] = r"""P6_ECONOMY['Sn'] = {
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
};"""

    # ===== Pb 铅 =====
    entries["Pb"] = r"""P6_ECONOMY['Pb'] = {
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
};"""

    # ===== Cr 铬 =====
    entries["Cr"] = r"""P6_ECONOMY['Cr'] = {
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
};"""

    # ===== Mn 锰 =====
    entries["Mn"] = r"""P6_ECONOMY['Mn'] = {
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
};"""

    # ===== Ti 钛 =====
    entries["Ti"] = r"""P6_ECONOMY['Ti'] = {
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
};"""

    return entries

print("详细数据函数(3)已定义")

def generate_detailed_4():
    entries = {}

    # ===== W 钨 =====
    entries["W"] = r"""P6_ECONOMY['W'] = {
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
};"""

    # ===== Mo 钼 =====
    entries["Mo"] = r"""P6_ECONOMY['Mo'] = {
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
};"""

    # ===== V 钒 =====
    entries["V"] = r"""P6_ECONOMY['V'] = {
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
};"""

    # ===== Pt 铂 =====
    entries["Pt"] = r"""P6_ECONOMY['Pt'] = {
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
};"""

    # ===== Pd 钯 =====
    entries["Pd"] = r"""P6_ECONOMY['Pd'] = {
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
};"""

    # ===== U 铀 =====
    entries["U"] = r"""P6_ECONOMY['U'] = {
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
};"""

    return entries

print("详细数据函数(4)已定义")

def generate_detailed_5():
    entries = {}

    # ===== C 碳 =====
    entries["C"] = r"""P6_ECONOMY['C'] = {
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
};"""

    # ===== Si 硅 =====
    entries["Si"] = r"""P6_ECONOMY['Si'] = {
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
};"""

    # ===== He 氦 =====
    entries["He"] = r"""P6_ECONOMY['He'] = {
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
};"""

    # ===== Ga 镓 =====
    entries["Ga"] = r"""P6_ECONOMY['Ga'] = {
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
};"""

    # ===== Ge 锗 =====
    entries["Ge"] = r"""P6_ECONOMY['Ge'] = {
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
};"""

    # ===== Sb 锑 =====
    entries["Sb"] = r"""P6_ECONOMY['Sb'] = {
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
};"""

    return entries

print("详细数据函数(5)已定义")

# 稀土元素数据
RARE_EARTH_DATA = {
    "La": ("~$3,000/吨(氧化镧)", "相对平稳", "催化剂/抛光粉需求",
           "催化剂(石油裂化)、抛光粉(玻璃/芯片)、稀土合金、紫外吸收", "中国80%+，Lynas 10%，MP 8%"),
    "Ce": ("~$3,500/吨(氧化铈)", "相对平稳", "催化剂/抛光粉需求",
           "催化剂(石油裂化)、抛光粉(玻璃/芯片)、稀土合金、紫外吸收", "中国80%+，Lynas 10%，MP 8%"),
    "Pr": ("~$50,000/吨(氧化镨)", "高位波动", "永磁材料(PrNd合金)",
           "永磁电机(镨钕合金)、陶瓷着色、玻璃着色", "中国80%+，Lynas 10%，MP 8%"),
    "Nd": None,  # 有专门的详细数据
    "Pm": ("~$500,000/公斤(钷-147)", "极稀缺", "放射性同位素电池/荧光粉",
           "核电池(卫星)、荧光粉、放射源测量", "无天然矿，核反应堆人工制备"),
    "Sm": ("~$4,000/吨(氧化钐)", "相对平稳", "钐钴永磁/核反应堆控制",
           "钐钴永磁体(高温应用)、核反应堆控制棒、激光介质", "中国80%+，Lynas 10%"),
    "Eu": ("~$40/公斤(氧化铕)", "下降后企稳", "荧光粉/防伪",
           "红色/蓝色荧光粉(LED/显示)、防伪标记、核反应堆控制棒", "中国85%+"),
    "Gd": ("~$30/公斤(氧化钆)", "稳定上涨", "MRI造影剂/磁致冷",
           "MRI造影剂、核反应堆控制棒、磁致冷材料、铁磁材料", "中国80%+，Lynas 10%"),
    "Tb": ("~$600/公斤(氧化铽)", "高位波动", "高性能永磁(铽镝铁)",
           "高性能永磁材料(添加铽提高矫顽力)、荧光粉(绿色)、磁光存储", "中国85%+，Lynas 8%"),
    "Dy": ("~$300/公斤(氧化镝)", "高位波动", "高性能永磁(耐高温钕铁硼)",
           "高性能永磁材料(添加镝提高矫顽力)、核反应堆控制棒、金属卤化物灯", "中国85%+，Lynas 8%"),
    "Ho": ("~$50/公斤(氧化钬)", "稳定", "激光/磁致伸缩",
           "钬激光(医疗/工业)、磁致伸缩材料、核反应堆控制棒", "中国85%+"),
    "Er": ("~$40/公斤(氧化铒)", "稳定", "光纤放大器/激光",
           "光纤放大器(EDFA)、激光介质、核反应堆控制棒、玻璃着色", "中国85%+"),
    "Tm": ("~$80/公斤(氧化铥)", "稳定", "激光/便携式X射线",
           "便携式X射线源(铥-170)、激光介质、高温超导", "中国85%+"),
    "Yb": ("~$30/公斤(氧化镱)", "稳定", "激光/原子钟",
           "光纤激光器(镱激光)、原子钟、太阳电池、应力测量", "中国85%+"),
    "Lu": ("~$500/公斤(氧化镥)", "稳定偏高", "PET闪烁晶体/炼油催化",
           "PET闪烁晶体(LSO)、石油裂化催化剂、激光介质", "中国85%+"),
    "Y": ("~$8/公斤(氧化钇)", "稳定", "陶瓷/激光/超导",
           "结构陶瓷(YSZ)、激光晶体(YAG)、超导材料(YBCO)、LED荧光粉", "中国70%+，Lynas 10%，MP 8%"),
    "Sc": ("~$5,000/公斤(氧化钪)", "高位稳定", "铝合金/燃料电池",
           "钪铝合金(航空航天)、固体氧化物燃料电池(SOFC)、高效金属卤化物灯", "中国40%，俄罗斯20%，澳大利亚10%"),
}

# Nd 钕 详细数据
def gen_nd():
    return r"""P6_ECONOMY['Nd'] = {
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
};"""

# In 铟
def gen_in():
    return r"""P6_ECONOMY['In'] = {
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
};"""

# Bi 铋
def gen_bi():
    return r"""P6_ECONOMY['Bi'] = {
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
};"""

# 通用中等详细度元素数据
MEDIUM_DATA = {
    "H": {
        "price": "~$2/公斤(绿氢) / ~$1.5/公斤(灰氢)", "unit": "USD/公斤",
        "exchange": "现货/长期合同", "trend5": "绿氢成本下降中",
        "drivers": ["化工原料(氨/甲醇)", "氢燃料电池", "炼油加氢脱硫", "绿色钢铁"],
        "note": "氢是未来清洁能源载体，绿氢是脱碳关键",
        "producers": [("Air Liquide","法国","~15%"),("Linde","德国/美国","~12%"),("Air Products","美国","~10%"),("中石化","中国","~8%"),("Praxair","美国","~6%")],
        "chain_up": "天然气重整(灰氢) / 电解水(绿氢) / 工业副产氢",
        "chain_mid": "制氢→压缩/液化→储运(管道/槽车)",
        "chain_down": "合成氨(50%)、炼油(20%)、甲醇(10%)、燃料电池(5%)、冶金(5%)",
        "bottleneck": "绿氢成本高(电解槽+绿电)，储运基础设施不足",
        "substitutes": [],
        "forecast_st": "2024-2025年绿氢项目加速落地，成本下降",
        "forecast_lt": "2050年绿氢有望占氢供应50%+",
        "forecast_drivers": ["绿氢成本降至$2/kg以下", "氢燃料电池汽车", "绿色钢铁(氢直接还原铁)", "氨/甲醇合成"],
        "forecast_risks": ["绿电成本波动", "储氢技术瓶颈", "与电气化竞争"],
        "reserves": "氢被欧盟、美国列为关键清洁能源载体"
    },
    "O": {
        "price": "~$0.3/立方米(液氧)", "unit": "USD/立方米",
        "exchange": "工业气体长期合同", "trend5": "稳定",
        "drivers": ["钢铁冶炼", "医疗用氧", "化工氧化", "航天推进剂"],
        "note": "氧是最大宗工业气体之一，钢铁和医疗是主要用途",
        "producers": [("Air Liquide","法国","~15%"),("Linde","德国/美国","~12%"),("Air Products","美国","~10%"),("大阳日酸","日本","~8%"),("Praxair","美国","~6%")],
        "chain_up": "空气分离(低温精馏)",
        "chain_mid": "空分→液化→储运(管道/槽车)",
        "chain_down": "钢铁冶炼(40%)、医疗(15%)、化工(15%)、水处理(10%)、航天(5%)",
        "bottleneck": "空分装置高耗电，运输半径有限",
        "substitutes": [],
        "forecast_st": "需求稳定增长",
        "forecast_lt": "绿色钢铁和航天推动液氧需求增长",
        "forecast_drivers": ["钢铁工业", "医疗用氧", "绿色钢铁(氢直接还原需氧)", "航天(液氧甲烷发动机)"],
        "forecast_risks": [],
        "reserves": "氧为大气主要成分，无战略储备需求"
    },
    "N": {
        "price": "~$0.3/立方米(液氮)", "unit": "USD/立方米",
        "exchange": "工业气体长期合同", "trend5": "稳定",
        "drivers": ["化肥(合成氨)", "工业气体", "食品冷冻", "电子制造"],
        "note": "氮气是最大宗工业气体，合成氨是最大用途",
        "producers": [("Air Liquide","法国","~15%"),("Linde","德国/美国","~12%"),("Air Products","美国","~10%"),("大阳日酸","日本","~8%"),("Praxair","美国","~6%")],
        "chain_up": "空气分离(低温精馏)",
        "chain_mid": "空分→液化→储运(管道/槽车)",
        "chain_down": "合成氨/化肥(70%)、工业惰性气氛(15%)、食品冷冻(5%)、电子(5%)",
        "bottleneck": "空分装置高耗电，合成氨需要天然气(灰氨)或绿氢(绿氨)",
        "substitutes": [],
        "forecast_st": "合成氨需求稳定，绿氨项目增长",
        "forecast_lt": "绿氨作为氢载体和零碳燃料需求增长",
        "forecast_drivers": ["粮食安全(化肥)", "绿氨(氢载体)", "船用燃料(氨燃料)", "工业惰性气氛"],
        "forecast_risks": [],
        "reserves": "氮为大气主要成分(78%)，无战略储备需求"
    },
    "F": {
        "price": "~$2,000/吨(氟化氢)", "unit": "USD/吨",
        "exchange": "化工现货/长期合同", "trend5": "上涨",
        "drivers": ["电解铝(冰晶石)", "含氟聚合物(PTFE/PVDF)", "锂电池电解液(LiPF6)", "半导体刻蚀"],
        "note": "氟是锂电池电解液和含氟聚合物关键元素",
        "producers": [("Solvay","比利时","~15%"),("Chemours","美国","~10%"),("Daikin","日本","~8%"),("3M","美国","~5%"),("东岳集团","中国","~5%")],
        "chain_up": "萤石矿开采(中国、墨西哥、南非)",
        "chain_mid": "萤石→氢氟酸→含氟化学品",
        "chain_down": "电解铝(30%)、含氟聚合物(20%)、锂电池电解液(15%)、制冷剂(15%)、半导体(5%)",
        "bottleneck": "萤石(CaF2)资源集中在中国(占60%)，被列为战略矿产",
        "substitutes": [],
        "forecast_st": "锂电池和PVDF需求拉动氟化学品增长",
        "forecast_lt": "氟被列为关键矿物，供应集中度高",
        "forecast_drivers": ["锂电池电解液(LiPF6)", "PVDF(锂电粘结剂)", "半导体刻蚀气体", "含氟制冷剂"],
        "forecast_risks": ["萤石供应管制", "PFAS环保限制"],
        "reserves": "萤石被中国列为战略矿产，被美国/欧盟列为关键矿物"
    },
    "Cl": {
        "price": "~$300/吨(液氯)", "unit": "USD/吨",
        "exchange": "化工现货/长期合同", "trend5": "波动上行",
        "drivers": ["PVC塑料", "水处理", "化工中间体", "半导体清洗"],
        "note": "氯是第二大化工原料(仅次于硫酸)，PVC是最大用途",
        "producers": [("Olin","美国","~10%"),("Westlake","美国","~8%"),("BASF","德国","~6%"),("中泰化学","中国","~5%"),("Formosa","中国台湾","~4%")],
        "chain_up": "盐水电解(氯碱工业)",
        "chain_mid": "电解→液氯/盐酸→含氯化学品",
        "chain_down": "PVC(35%)、水处理(15%)、异氰酸酯(10%)、环氧丙烷(8%)、有机硅(5%)",
        "bottleneck": "氯碱工业高耗能，氯气运输安全要求高",
        "substitutes": [],
        "forecast_st": "PVC和半导体需求稳定",
        "forecast_lt": "绿色氯碱(低能耗电解)发展",
        "forecast_drivers": ["PVC建筑需求", "半导体清洗", "水处理", "医药中间体"],
        "forecast_risks": ["环保限制(氯气安全)", "PVC替代材料"],
        "reserves": "氯由盐水电解制取，食盐资源丰富，无战略储备需求"
    },
    "P": {
        "price": "~$1,200/吨(磷矿石)", "unit": "USD/吨",
        "exchange": "化肥现货/长期合同", "trend5": "上涨",
        "drivers": ["磷肥(占磷消费80%)", "饲料添加剂", "阻燃剂", "锂电池(磷酸铁锂)"],
        "note": "磷是不可再生资源，磷肥和锂电池正极关键材料",
        "producers": [("OCP Group","摩洛哥","~15%"),("Mosaic","美国","~10%"),("PhosAgro","俄罗斯","~8%"),("Nutrien","加拿大","~6%"),("云天化","中国","~5%")],
        "chain_up": "磷矿开采(摩洛哥占70%储量、中国、美国、俄罗斯)",
        "chain_mid": "磷矿→磷酸→磷肥/磷酸盐",
        "chain_down": "磷肥(80%)、饲料(8%)、工业磷酸盐(7%)、锂电池(LFP: 3%)",
        "bottleneck": "磷矿资源集中(摩洛哥占70%储量)，磷资源不可再生",
        "substitutes": [],
        "forecast_st": "磷肥需求稳定，LFP电池拉动磷酸铁需求",
        "forecast_lt": "磷资源战略价值上升(LFP电池+粮食安全)",
        "forecast_drivers": ["全球粮食安全(磷肥)", "LFP电池正极(磷酸铁锂)", "阻燃剂", "半导体(磷化氢)"],
        "forecast_risks": ["磷矿品位下降", "磷资源枯竭风险(50-100年)"],
        "reserves": "磷被美国、欧盟列为关键矿物，摩洛哥占70%储量"
    },
    "S": {
        "price": "~$150/吨(硫磺)", "unit": "USD/吨",
        "exchange": "化肥现货/长期合同", "trend5": "波动",
        "drivers": ["硫酸(最大宗化工品)", "磷肥生产", "橡胶硫化", "冶炼"],
        "note": "硫是硫酸原料(硫酸是最大宗化工品)，磷肥关键原料",
        "producers": [("Saudi Aramco","沙特","~15%"),("Gazprom","俄罗斯","~8%"),("Abu Dhabi","阿联酋","~7%"),("Shell","荷兰/英国","~5%"),("中石化","中国","~4%")],
        "chain_up": "石油/天然气脱硫副产硫磺 + 自然硫矿",
        "chain_mid": "硫磺→硫酸→磷肥/化工",
        "chain_down": "硫酸/磷肥(70%)、橡胶硫化(10%)、造纸(5%)、冶金(5%)",
        "bottleneck": "硫磺为油气脱硫副产，供应受油气行业影响",
        "substitutes": [],
        "forecast_st": "硫酸需求随磷肥和冶金稳定",
        "forecast_lt": "硫磺供应随能源转型(油气减产)可能趋紧",
        "forecast_drivers": ["磷肥生产", "冶金(铜/镍/锌冶炼)", "硫酸铵化肥", "橡胶硫化"],
        "forecast_risks": ["油气脱硫副产减少(能源转型)", "硫磺库存"],
        "reserves": "硫磺为油气脱硫副产，供应充足"
    },
}

def gen_medium(sym, d):
    """生成中等详细度元素数据"""
    name = ELEMENT_NAMES[sym]
    producers_js = ", ".join(
        f"{{ rank: {i+1}, company: '{p[0]}', country: '{p[1]}', marketShare: '{p[2]}', annualCapacity: 'N/A' }}"
        for i, p in enumerate(d["producers"])
    )
    subs_js = ", ".join(
        f"{{ material: '{s['material']}', costComparison: '{s['costComparison']}', performanceComparison: '{s['performanceComparison']}', note: '{s['note']}' }}"
        for s in d.get("substitutes", [])
    ) if d.get("substitutes") else ""

    return f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '{d["price"]}',
    priceUnit: '{d["unit"]}',
    exchange: '{d["exchange"]}',
    fiveYearTrend: '{d["trend5"]}',
    tenYearTrend: '因应用而异',
    priceDrivers: {json.dumps(d["drivers"], ensure_ascii=False)},
    note: '{d["note"]}'
  }},
  topProducers: [{producers_js}],
  supplyChain: {{
    upstream: '{d["chain_up"]}',
    midstream: '{d["chain_mid"]}',
    downstream: '{d["chain_down"]}',
    bottleneck: '{d["bottleneck"]}',
    note: '{name}产业链：{d["chain_down"][:50]}...'
  }},
  substitutes: [{subs_js}],
  forecast: {{
    shortTerm: '{d["forecast_st"]}',
    longTerm: '{d["forecast_lt"]}',
    keyDrivers: {json.dumps(d["forecast_drivers"], ensure_ascii=False)},
    riskFactors: {json.dumps(d["forecast_risks"], ensure_ascii=False)},
    note: '{d["reserves"]}'
  }},
  strategicReserves: {{
    countries: [
      {{ country: '中国', policy: '{name}战略储备(如适用)', note: '关键矿物供应链安全' }},
      {{ country: '美国', policy: '国防储备库(如适用)', note: '关键矿物' }},
      {{ country: '日本', policy: 'JOGMEC管理(如适用)', note: '进口依赖' }}
    ],
    note: '{d["reserves"]}'
  }}
}};"""

print("稀土和中等数据函数已定义")

# 更多中等详细度元素
MEDIUM_DATA_2 = {
    "Na": {"price":"~$200/吨(纯碱)","unit":"USD/吨","exchange":"化工现货","trend5":"波动上涨","drivers":["玻璃制造","化工(烧碱/纯碱)","造纸","肥皂"],"note":"钠是最大宗化工原料之一，纯碱和烧碱是核心产品","producers":[("Solvay","比利时","~15%"),("中盐集团","中国","~12%"),("Tata","印度","~6%"),("Ciner","土耳其/美国","~5%"),("Genesis","美国","~4%")],"chain_up":"盐矿开采/海水晒盐","chain_mid":"食盐电解(烧碱+氯气) / 纯碱生产","chain_down":"玻璃(25%)、化工(20%)、造纸(10%)、肥皂(10%)、冶金(10%)","bottleneck":"氯碱工业高耗能","substitutes":[],"forecast_st":"需求稳定","forecast_lt":"烧碱需求随铝/锂增长","forecast_drivers":["玻璃制造","化工原料","锂电(氢氧化钠)"],"forecast_risks":[],"reserves":"钠资源丰富(食盐)，无战略储备需求"},
    "K": {"price":"~$500/吨(氯化钾)","unit":"USD/吨","exchange":"化肥现货","trend5":"高位震荡","drivers":["钾肥(占钾消费90%)","化肥需求","粮食安全"],"note":"钾肥是农业三大肥料之一，不可替代","producers":[("Nutrien","加拿大","~20%"),("Mosaic","美国","~15%"),("Uralkali","俄罗斯","~12%"),("Belaruskali","白俄罗斯","~10%"),("Canpotex","加拿大","~8%")],"chain_up":"钾盐矿开采(加拿大、俄罗斯、白俄罗斯)","chain_mid":"钾盐矿→氯化钾精制→钾肥","chain_down":"钾肥(90%)、工业钾盐(8%)、特种合金(2%)","bottleneck":"钾盐资源高度集中(加拿大+俄罗斯+白俄罗斯占80%)","substitutes":[],"forecast_st":"粮食安全推动钾肥需求","forecast_lt":"全球人口增长支撑长期需求","forecast_drivers":["粮食安全","耕地面积","经济作物"],"forecast_risks":["白俄罗斯/俄罗斯制裁","钾盐品位下降"],"reserves":"钾盐被列为战略资源，中国进口依赖度>50%"},
    "Mg": {"price":"~$2,500/吨(镁锭)","unit":"USD/吨","exchange":"上海期货交易所/现货","trend5":"波动","drivers":["汽车轻量化","铝合金添加剂","钢铁脱硫","耐火材料"],"note":"镁是最轻的结构金属，汽车轻量化关键材料","producers":[("银光镁业","中国","~15%"),("南京云海","中国","~12%"),("POSCO","韩国","~5%"),("US Magnesium","美国","~4%"),("死海镁业","以色列","~3%")],"chain_up":"菱镁矿/海水/盐湖镁","chain_mid":"硅热法(Pidgeon法)炼镁 / 电解法","chain_down":"铝合金添加剂(40%)、汽车压铸件(25%)、钢铁脱硫(10%)、耐火材料(10%)","bottleneck":"中国占全球85%镁产量，Pidgeon法高能耗高排放","substitutes":[],"forecast_st":"汽车轻量化拉动镁需求","forecast_lt":"绿色炼镁技术(电解法)推广","forecast_drivers":["汽车轻量化","3C产品壳体","建筑模板","储氢材料"],"forecast_risks":["中国环保限产","铝替代镁"],"reserves":"镁被美国、欧盟列为关键矿物，中国占85%产量"},
    "Ca": {"price":"~$200/吨(氧化钙/石灰)","unit":"USD/吨","exchange":"建材现货","trend5":"稳定","drivers":["钢铁冶炼(造渣剂)","建筑材料","脱硫","化工"],"note":"钙是最大宗建筑材料和冶金辅料之一","producers":[("Lhoist","比利时","~8%"),("Carmeuse","比利时","~7%"),("Graymont","加拿大","~5%"),("Minerals Technologies","美国","~4%"),("海螺水泥","中国","~3%")],"chain_up":"石灰石矿开采","chain_mid":"石灰石煅烧→生石灰/熟石灰","chain_down":"钢铁(30%)、水泥(25%)、脱硫(15%)、化工(10%)、建筑(10%)","bottleneck":"石灰石资源丰富，但煅烧高耗能高排放","substitutes":[],"forecast_st":"钢铁和建筑需求稳定","forecast_lt":"脱碳推动绿色石灰生产","forecast_drivers":["钢铁造渣剂","水泥","烟气脱硫","化工原料"],"forecast_risks":[],"reserves":"石灰石资源丰富，无战略储备需求"},
    "Be": {"price":"~$800/公斤(铍锭)","unit":"USD/公斤","exchange":"战略材料直接交易","trend5":"稳定偏高","drivers":["航空航天(铍合金)","核反应堆(反射层)","半导体设备(X射线窗口)"],"note":"铍是极轻高强金属，航空航天和核工业战略材料","producers":[("Materion(原Brush Wellman)","美国","~60%"),("Ulba","哈萨克斯坦","~20%"),("中国铍业","中国","~10%"),("印度铍","印度","~5%"),("俄罗斯","俄罗斯","~3%")],"chain_up":"绿柱石/硅铍石开采","chain_mid":"湿法冶炼→铍铜合金/铍金属","chain_down":"铍铜合金(70%:电子连接器)、航空航天(15%)、核工业(10%)","bottleneck":"铍有剧毒，开采加工受限，Materion垄断60%供应","substitutes":[],"forecast_st":"航空航天需求增长","forecast_lt":"半导体设备(精密X射线窗口)需求增长","forecast_drivers":["航空航天(卫星/导弹)","5G/6G电子连接器","核反应堆","半导体设备"],"forecast_risks":["铍毒性环保限制","替代材料(铝铍合金)"],"reserves":"铍被美国列为国防关键战略物资"},
    "B": {"price":"~$800/吨(硼砂)","unit":"USD/吨","exchange":"化工现货","trend5":"稳定","drivers":["玻璃纤维","硼硅玻璃","陶瓷","农业(硼肥)","半导体(硼掺杂)"],"note":"硼是玻璃纤维和硼硅玻璃关键元素，也在半导体中用于掺杂","producers":[("Eti Maden","土耳其","~40%"),("Rio Tinto","美国/澳大利亚","~20%"),("Quiborax","智利","~8%"),("硼海化工","中国","~5%"),("Borax Argentina","阿根廷","~3%")],"chain_up":"硼矿开采(土耳其占60%储量、美国、中国、智利)","chain_mid":"硼矿→硼砂/硼酸→硼化合物","chain_down":"玻璃纤维(35%)、硼硅玻璃(20%)、陶瓷(15%)、农业(10%)、洗涤剂(5%)","bottleneck":"土耳其占全球硼矿储量60%，供应集中","substitutes":[],"forecast_st":"玻璃纤维和风电叶片需求拉动","forecast_lt":"半导体(硼掺杂)和新能源需求增长","forecast_drivers":["玻璃纤维(风电叶片)","硼硅玻璃(太阳能盖板)","半导体硼掺杂","磁体(NdFeB添加硼)"],"forecast_risks":["土耳其供应风险","替代材料"],"reserves":"硼被美国、欧盟列为关键矿物"},
    "Ne": {"price":"~$50/立方米(纯氖)","unit":"USD/立方米","exchange":"工业气体合同","trend5":"暴跌后企稳(2022乌克兰危机)$100k→$5k","drivers":["半导体光刻(KrF/ArF准分子激光)","照明","显示"],"note":"氖是半导体光刻准分子激光气体，乌克兰曾是最大供应国","producers":[("中国多家(空气分离)","中国","~40%"),("Linde","德国/美国","~20%"),("Air Liquide","法国","~15%"),("Cryoin","乌克兰","~10%"),("Ingas","乌克兰","~5%")],"chain_up":"空气分离(氖含量仅18ppm)","chain_mid":"空分→低温精馏→纯化(99.999%)","chain_down":"半导体光刻(60%:KrF/ArF激光)、照明(20%)、显示(10%)","bottleneck":"氖为空分副产，乌克兰曾占全球50%+供应(2022前)","substitutes":[],"forecast_st":"中国产能填补乌克兰缺口","forecast_lt":"半导体光刻需求持续增长","forecast_drivers":["半导体光刻(DUV)","激光应用","显示技术"],"forecast_risks":["半导体周期","回收氖增加"],"reserves":"氖被美国、欧盟列为半导体供应链关键材料"},
    "Ar": {"price":"~$0.2/立方米(液氩)","unit":"USD/立方米","exchange":"工业气体合同","trend5":"稳定","drivers":["焊接保护气","半导体制造","照明","3D打印"],"note":"氩是最大宗稀有气体，焊接和半导体制造保护气","producers":[("Air Liquide","法国","~15%"),("Linde","德国/美国","~12%"),("Air Products","美国","~10%"),("大阳日酸","日本","~8%"),("Praxair","美国","~6%")],"chain_up":"空气分离(氩占大气0.93%)","chain_mid":"空分→低温精馏→液氩","chain_down":"焊接保护(35%)、半导体(20%)、照明(15%)、冶金(10%)、3D打印(5%)","bottleneck":"空分副产，供应受氧气/氮气需求影响","substitutes":[],"forecast_st":"半导体和3D打印需求增长","forecast_lt":"半导体制造推动氩需求","forecast_drivers":["半导体晶圆制造","特种焊接","3D打印(钛/铝)","照明"],"forecast_risks":[],"reserves":"氩为大气成分(0.93%)，供应充足"},
    "Kr": {"price":"~$5/立方米(纯氪)","unit":"USD/立方米","exchange":"工业气体合同","trend5":"稳定","drivers":["照明(节能灯)","半导体光刻(KrF准分子激光)","窗玻璃保温","麻醉"],"note":"氪用于节能灯和半导体光刻(KrF激光)","producers":[("Air Liquide","法国","~15%"),("Linde","德国/美国","~12%"),("Air Products","美国","~10%"),("Cryoin","乌克兰","~8%"),("Ingas","乌克兰","~5%")],"chain_up":"空气分离(氪含量仅1ppm)","chain_mid":"空分→低温精馏→纯化","chain_down":"照明(40%)、半导体光刻(25%:KrF激光)、窗玻璃(15%)、麻醉(5%)","bottleneck":"氪为空分副产，供应受氧气/氮气需求影响","substitutes":[],"forecast_st":"半导体光刻需求稳定","forecast_lt":"LED替代节能灯，但半导体需求增长","forecast_drivers":["半导体光刻(KrF DUV)","窗玻璃填充","激光","麻醉"],"forecast_risks":["LED替代节能灯","半导体技术节点演进"],"reserves":"氪为大气微量成分(1ppm)，供应受空分产能制约"},
    "Xe": {"price":"~$20/立方米(纯氙)","unit":"USD/立方米","exchange":"工业气体合同","trend5":"上涨","drivers":["半导体光刻(EUV辅助)","医疗麻醉","离子推进器(航天)","照明"],"note":"氙是航天离子推进器和半导体EUV光刻关键气体","producers":[("Air Liquide","法国","~15%"),("Linde","德国/美国","~12%"),("Air Products","美国","~10%"),("Cryoin","乌克兰","~8%"),("梅塞尔","德国","~5%")],"chain_up":"空气分离(氙含量仅0.09ppm)","chain_mid":"空分→低温精馏→纯化(99.999%)","chain_down":"照明(30%)、半导体(25%:EUV/离子注入)、医疗(15%:麻醉)、航天(10%:离子推进)","bottleneck":"氙为空分极稀副产品(0.09ppm)，供应极度有限","substitutes":[],"forecast_st":"EUV光刻和航天需求增长","forecast_lt":"航天离子推进和EUV推动氙需求","forecast_drivers":["EUV光刻(半导体)","航天离子推进器","医疗麻醉","高端照明"],"forecast_risks":["替代推进工质(氪/铋)"],"reserves":"氙被美国、欧盟列为半导体和航天关键材料"},
    "Br": {"price":"~$3,000/吨(溴素)","unit":"USD/吨","exchange":"化工现货","trend5":"稳定","drivers":["阻燃剂","钻井液","水处理","医药"],"note":"溴是阻燃剂和油气钻井液关键原料","producers":[("ICL","以色列","~30%"),("Albemarle","美国","~20%"),("LANXESS","德国","~10%"),("Tata","印度","~8%"),("山东海化","中国","~5%")],"chain_up":"海水提溴/地下卤水提溴","chain_mid":"卤水→氧化吹出→精制→溴化学品","chain_down":"阻燃剂(40%)、钻井液(20%)、水处理(10%)、医药(5%)","bottleneck":"海水提溴能耗高，以色列死海溴资源丰富","substitutes":[],"forecast_st":"阻燃剂需求稳定","forecast_lt":"新能源(溴化锌液流电池)和阻燃需求增长","forecast_drivers":["阻燃剂(电子/建筑)","油气钻井液","水处理","医药"],"forecast_risks":["无卤阻燃剂替代"],"reserves":"溴被美国、欧盟列为关键矿物"},
    "I": {"price":"~$30/公斤(碘)","unit":"USD/公斤","exchange":"化工现货","trend5":"稳定偏高","drivers":["X射线造影剂","LCD偏光膜","医药","消毒剂"],"note":"碘是医疗造影剂和LCD偏光膜关键材料","producers":[("SQM","智利","~30%"),("Cosayach","智利","~15%"),("Ise Chemicals","日本","~10%"),("Godo Shigen","日本","~8%"),("智利碘业","智利","~5%")],"chain_up":"智利硝石副产碘 / 海带提碘","chain_mid":"浸出→还原→精制→碘化学品","chain_down":"X射线造影剂(35%)、LCD偏光膜(25%)、医药(15%)、消毒剂(10%)","bottleneck":"智利占全球50%+碘供应，资源集中","substitutes":[],"forecast_st":"医疗和LCD需求稳定","forecast_lt":"医疗造影剂和X射线检测需求增长","forecast_drivers":["医疗造影剂","LCD/OLED偏光膜","医药","食品添加剂"],"forecast_risks":["LCD需求下降","回收碘增加"],"reserves":"碘被美国、欧盟列为关键矿物"},
    "Se": {"price":"~$30/公斤(硒)","unit":"USD/公斤","exchange":"英国金属导报/现货","trend5":"稳定","drivers":["光伏CIGS薄膜电池","玻璃脱色","锰电解","半导体"],"note":"硒是光伏CIGS薄膜和玻璃制造关键材料","producers":[("中国多家(铜冶炼副产)","中国","~35%"),("日本(铜冶炼副产)","日本","~15%"),("Freeport-McMoRan","美国","~10%"),("Glencore","瑞士","~8%"),("BHP","澳大利亚","~5%")],"chain_up":"铜冶炼副产硒(无独立硒矿)","chain_mid":"铜阳极泥→硒回收→精制","chain_down":"光伏CIGS(25%)、玻璃(25%)、锰电解(15%)、半导体(10%)、饲料(5%)","bottleneck":"硒为铜冶炼副产，供应受铜产量制约","substitutes":[],"forecast_st":"光伏CIGS需求增长","forecast_lt":"半导体和光伏需求稳定","forecast_drivers":["光伏CIGS薄膜","玻璃制造","锰电解添加剂","半导体(硒化物)"],"forecast_risks":["CIGS被晶硅替代","回收硒增加"],"reserves":"硒被美国列为关键矿物"},
    "As": {"price":"~$1,500/吨(三氧化二砷)","unit":"USD/吨","exchange":"化工现货","trend5":"稳定","drivers":["半导体(GaAs)","木材防腐(历史)","铅酸电池合金","医药"],"note":"砷是GaAs半导体关键元素，但剧毒限制了应用","producers":[("中国多家","中国","~45%"),("Morocco","摩洛哥","~15%"),("俄罗斯","俄罗斯","~10%"),("智利","智利","~8%"),("秘鲁","秘鲁","~5%")],"chain_up":"铜/铅/金冶炼副产砷","chain_mid":"冶炼烟尘→三氧化二砷→高纯砷","chain_down":"半导体GaAs(30%)、铅酸电池合金(20%)、木材防腐(15%)、医药(10%)","bottleneck":"砷剧毒，环保限制严格，供应受限","substitutes":[],"forecast_st":"GaAs半导体需求稳定","forecast_lt":"砷在半导体和量子点领域应用增长","forecast_drivers":["GaAs半导体(5G/射频)","量子点显示","铅酸电池合金","医药"],"forecast_risks":["砷毒性环保限制","替代材料"],"reserves":"砷被欧盟列为限制使用物质，但在半导体领域不可替代"},
    "Zr": {"price":"~$3,000/吨(锆英砂)","unit":"USD/吨","exchange":"英国金属导报/现货","trend5":"上涨","drivers":["陶瓷(氧化锆)","核燃料包壳(锆合金)","耐火材料","催化剂"],"note":"锆是核燃料包壳和先进陶瓷关键材料","producers":[("Iluka Resources","澳大利亚","~25%"),("Rio Tinto","澳大利亚/南非","~15%"),("Tronox","美国","~10%"),("Eramet","法国","~8%"),("中国锆业","中国","~5%")],"chain_up":"锆英砂开采(澳大利亚、南非)","chain_mid":"锆英砂→氯化→海绵锆/氧化锆","chain_down":"陶瓷(35%)、耐火材料(25%)、核燃料包壳(15%)、催化剂(5%)","bottleneck":"锆英砂供应集中在澳大利亚和南非","substitutes":[],"forecast_st":"陶瓷和核能需求增长","forecast_lt":"核燃料包壳和先进陶瓷需求持续","forecast_drivers":["核燃料包壳(锆合金)","氧化锆陶瓷(牙齿/刀具)","耐火材料","催化"],"forecast_risks":["核能发展速度","替代材料"],"reserves":"锆被美国、欧盟列为关键矿物"},
    "Nb": {"price":"~$42/公斤(铌铁)","unit":"USD/公斤","exchange":"英国金属导报/现货","trend5":"稳定","drivers":["高强度低合金钢(微合金化)","石油管道","不锈钢","超导材料(NbTi/Nb3Sn)"],"note":"铌是高强度微合金钢关键添加剂，巴西主导供应","producers":[("CBMM(巴西冶金矿业公司)","巴西","~75%"),("Anglo American","英国","~10%"),("IAMGOLD","加拿大","~5%"),("中国铌业","中国","~3%"),("俄罗斯铌","俄罗斯","~2%")],"chain_up":"铌矿开采(巴西Araxa占80%储量)","chain_mid":"烧绿石→铌铁/铌金属/高纯铌","chain_down":"高强度钢(85%:油气管道/汽车)、不锈钢(8%)、超导(3%)","bottleneck":"CBMM占全球75%铌供应，巴西垄断","substitutes":[],"forecast_st":"钢铁需求稳定","forecast_lt":"超导材料(Nb3Sn)和微合金钢需求增长","forecast_drivers":["油气管道用钢","汽车高强钢","超导磁体(MRI/聚变)","不锈钢"],"forecast_risks":["巴西供应中断","钒替代铌"],"reserves":"铌被美国、欧盟列为关键矿物，CBMM垄断75%供应"},
    "Hf": {"price":"~$500/公斤(铪锭)","unit":"USD/公斤","exchange":"战略材料直接交易","trend5":"上涨","drivers":["半导体(高K栅极材料)","核反应堆控制棒","航空合金","催化剂"],"note":"铪是半导体先进制程(高K金属栅极)关键材料","producers":[("ATI(Allegheny)","美国","~25%"),("Western Zirconium(西屋)","美国","~15%"),("CEA","法国","~10%"),("中国核工业","中国","~10%"),("俄罗斯","俄罗斯","~5%")],"chain_up":"锆英砂分离(铪为锆矿伴生)","chain_mid":"锆铪分离(萃取)→海绵铪→铪锭","chain_down":"半导体(40%:高K栅极)、核控制棒(25%)、航空合金(15%)","bottleneck":"铪为锆矿伴生(1:50)，锆铪分离困难，产能有限","substitutes":[],"forecast_st":"半导体先进制程需求爆发","forecast_lt":"先进制程(<7nm)推动铪需求增长","forecast_drivers":["半导体高K栅极(HfO2)","核反应堆控制棒","航空合金","催化剂"],"forecast_risks":["先进制程技术变化"],"reserves":"铪被美国、欧盟列为关键矿物(半导体战略材料)"},
    "Ta": {"price":"~$200/公斤(钽粉)","unit":"USD/公斤","exchange":"英国金属导报/现货","trend5":"稳定","drivers":["电容器(钽电容)","半导体靶材","超合金","医疗植入"],"note":"钽是高端电容器和半导体靶材关键材料","producers":[("Global Advanced Metals","澳大利亚","~20%"),("AMG","德国","~10%"),("中矿资源","中国","~8%"),("Comibol","玻利维亚","~5%"),("Rwanda矿商","卢旺达","~5%")],"chain_up":"钽铁矿开采(刚果(金)、卢旺达、巴西、澳大利亚)","chain_mid":"钽铁矿→浸出→氟钽酸钾→钽粉/钽锭","chain_down":"电容器(50%:钽电容)、半导体靶材(15%)、超合金(10%)、医疗(5%)","bottleneck":"刚果(金)和卢旺达手工采矿占30%+，ESG风险高","substitutes":[],"forecast_st":"半导体和5G需求增长","forecast_lt":"钽电容和半导体靶材需求稳定增长","forecast_drivers":["钽电容器(5G/军工)","半导体靶材","航空超合金","医疗植入物"],"forecast_risks":["陶瓷电容器替代钽电容","ESG供应链风险"],"reserves":"钽被美国、欧盟列为关键矿物(冲突矿物)"},
    "Re": {"price":"~$1,200/公斤(铼粉)","unit":"USD/公斤","exchange":"英国金属导报/现货","trend5":"稳定偏高","drivers":["航空发动机高温合金(单晶叶片)","石油催化剂","半导体"],"note":"铼是航空发动机单晶叶片关键合金元素，极稀缺","producers":[("KGHM","波兰","~20%"),("Rio Tinto( Kennecott)","美国/英国","~15%"),("Codelco","智利","~10%"),("Glencore","瑞士","~8%"),("Sumitomo","日本","~5%")],"chain_up":"铜/钼冶炼副产铋(铼含量极低)","chain_mid":"铜/钼冶炼烟尘→铼回收→高纯铼粉/铼铵","chain_down":"航空高温合金(70%:单晶叶片)、石油催化剂(20%)、半导体(5%)","bottleneck":"铼为铜/钼冶炼极稀副产，全球年产仅50吨","substitutes":[],"forecast_st":"航空发动机需求增长","forecast_lt":"航空高温合金需求持续增长，铼供应紧张","forecast_drivers":["航空发动机(单晶叶片)","石油重整催化剂","半导体","核反应堆"],"forecast_risks":["铼回收技术进步","替代合金"],"reserves":"铼被美国、欧盟列为关键矿物(航空战略材料)"},
    "Os": {"price":"~$400/盎司(锇粉)","unit":"USD/盎司","exchange":"战略材料直接交易","trend5":"稳定","drivers":["催化剂","电触点","合金(锇铱)","科研"],"note":"锇是密度最大天然元素，极稀缺贵金属","producers":[("Anglo American Platinum","南非","~40%"),("Norilsk Nickel","俄罗斯","~20%"),("Impala Platinum","南非","~15%"),("Sibanye-Stillwater","南非","~10%"),("Lonmin","南非","~5%")],"chain_up":"铂矿副产(锇为铂矿伴生)","chain_mid":"铂冶炼→锇回收→锇粉/锇铱合金","chain_down":"催化剂(30%)、电触点(20%)、合金(20%)、科研(15%)、医疗(5%)","bottleneck":"锇为铂矿极稀伴生，全球年产仅~1吨","substitutes":[],"forecast_st":"催化剂和合金需求稳定","forecast_lt":"极稀缺性维持高价值","forecast_drivers":["催化剂(化工)","电触点","锇铱合金(精密仪器)","科研"],"forecast_risks":["锇化合物剧毒限制应用"],"reserves":"锇被美国列为关键矿物(铂族金属伴生)"},
    "Ir": {"price":"~$5,000/盎司(铱粉)","unit":"USD/盎司","exchange":"战略材料直接交易","trend5":"暴涨后回落(2021:$2,500→2023:$6,000→2024:$5,000)","drivers":["电解水制氢(PEM催化剂)","OLED(MBP催化剂)","半导体","坩埚"],"note":"铱是PEM电解水制氢和OLED关键催化剂","producers":[("Anglo American Platinum","南非","~35%"),("Norilsk Nickel","俄罗斯","~20%"),("Impala Platinum","南非","~15%"),("Sibanye-Stillwater","南非","~10%"),("Lonmin","南非","~5%")],"chain_up":"铂矿副产(铱为铂矿伴生)","chain_mid":"铂冶炼→铱回收→铱粉/铱化合物","chain_down":"电解水制氢(30%:PEM催化剂)、OLED(20%)、半导体(15%)、坩埚(10%)","bottleneck":"铱为铂矿极稀伴生，全球年产仅~7吨","substitutes":[],"forecast_st":"绿氢PEM电解推动铱需求","forecast_lt":"PEM电解槽和OLED需求爆发，铱供应紧张","forecast_drivers":["PEM电解水制氢(绿氢)","OLED显示","半导体(钌/铱靶材)","坩埚(蓝宝石/硅生长)"],"forecast_risks":["PEM电解减少铱用量","AEM电解替代PEM"],"reserves":"铱被美国、欧盟列为关键矿物(氢能战略材料)"},
    "Ru": {"price":"~$500/盎司(钌粉)","unit":"USD/盎司","exchange":"NYMEX/现货","trend5":"波动(2021:$1,000→2024:$500)","drivers":["半导体(钌靶材)","电解水制氢(PEM催化剂)","电子","化工催化剂"],"note":"钌是半导体先进制程和PEM电解水催化剂","producers":[("Anglo American Platinum","南非","~35%"),("Norilsk Nickel","俄罗斯","~20%"),("Impala Platinum","南非","~15%"),("Sibanye-Stillwater","南非","~10%"),("Lonmin","南非","~5%")],"chain_up":"铂矿副产(钌为铂矿伴生)","chain_mid":"铂冶炼→钌回收→钌粉/钌化合物","chain_down":"半导体(25%:钌靶材)、电解水(20%)、电子(15%)、催化剂(15%)","bottleneck":"钌为铂矿伴生，全球年产约30吨","substitutes":[],"forecast_st":"半导体和氢能需求增长","forecast_lt":"先进制程和绿氢推动钌需求","forecast_drivers":["半导体(钌替代铜互连)","PEM电解水催化剂","电子(电阻/电容)","化工催化剂"],"forecast_risks":["半导体技术路线变化"],"reserves":"钌被美国、欧盟列为关键矿物"},
    "Rh": {"price":"~$4,500/盎司(铑粉)","unit":"USD/盎司","exchange":"NYMEX/现货","trend5":"暴涨暴跌(2021:$25,000→2024:$4,500)","drivers":["汽车催化剂(汽油车)","化工(氢甲酰化)","催化","电子"],"note":"铑是最高效的汽车尾气催化剂，价格波动极大","producers":[("Anglo American Platinum","南非","~35%"),("Norilsk Nickel","俄罗斯","~20%"),("Impala Platinum","南非","~15%"),("Sibanye-Stillwater","南非","~10%"),("Lonmin","南非","~5%")],"chain_up":"铂矿副产(铑为铂矿伴生)","chain_mid":"铂冶炼→铑回收→铑粉/铑化合物","chain_down":"汽车催化剂(80%)、化工(10%)、电子(5%)、玻璃(3%)","bottleneck":"铑为铂矿极稀伴生，全球年产仅~20吨","substitutes":[],"forecast_st":"汽车催化剂需求承压(EV替代)","forecast_lt":"EV转型减少燃油车催化剂需求","forecast_drivers":["汽油车催化剂(NOx转化)","化工催化剂","玻璃熔炉电极"],"forecast_risks":["EV替代燃油车","铂/钯替代铑"],"reserves":"铑被美国、欧盟列为关键矿物"},
    "Cd": {"price":"~$3/公斤(镉锭)","unit":"USD/公斤","exchange":"LME/现货","trend5":"稳定","drivers":["镍镉电池","颜料","涂层","半导体(CdTe太阳能)"],"note":"镉有毒但 CdTe薄膜太阳能电池是重要应用","producers":[("韩国锌业(Korea Zinc)","韩国","~20%"),("Nyrstar","比利时","~15%"),("Glencore","瑞士","~10%"),("Teck","加拿大","~8%"),("Vedanta","印度","~5%")],"chain_up":"锌冶炼副产镉","chain_mid":"锌冶炼渣→浸出→电解精炼→镉锭","chain_down":"镍镉电池(40%)、颜料(20%)、涂层(15%)、CdTe太阳能(10%)","bottleneck":"镉有毒，环保限制日益严格","substitutes":[],"forecast_st":"CdTe太阳能需求增长","forecast_lt":"环保限制推动镉应用减少，但CdTe太阳能增长","forecast_drivers":["CdTe薄膜太阳能(First Solar)","镍镉电池(工业/军用)","颜料","防腐涂层"],"forecast_risks":["镉毒性环保限制","锂电池替代镍镉电池"],"reserves":"镉被欧盟列为限制使用物质(有毒)"},
    "Te": {"price":"~$60/公斤(碲)","unit":"USD/公斤","exchange":"英国金属导报/现货","trend5":"稳定偏高","drivers":["CdTe薄膜太阳能","热电材料","合金添加剂","橡胶硫化"],"note":"碲是CdTe薄膜太阳能电池和热电材料关键元素","producers":[("中国多家(铜冶炼副产)","中国","~40%"),("美国(铜冶炼副产)","美国","~15%"),("日本(铜冶炼副产)","日本","~10%"),("加拿大","加拿大","~8%"),("秘鲁","秘鲁","~5%")],"chain_up":"铜冶炼副产碲(无独立碲矿)","chain_mid":"铜阳极泥→碲回收→精制","chain_down":"CdTe太阳能(40%)、热电(20%)、合金(15%)、橡胶(10%)","bottleneck":"碲为铜冶炼极稀副产，全球年产仅~400吨","substitutes":[],"forecast_st":"CdTe太阳能需求增长","forecast_lt":"热电材料和太阳能推动碲需求","forecast_drivers":["CdTe薄膜太阳能(First Solar)","热电发电机(温差发电)","合金添加剂(钢/铜)","橡胶硫化"],"forecast_risks":["CdTe被晶硅替代","铜产量下降"],"reserves":"碲被美国、欧盟列为关键矿物"},
    "Hg": {"price":"无公开定价(受限制)","unit":"USD/瓶(76磅)","exchange":"已基本退出商业交易","trend5":"持续下降","drivers":["历史应用(温度计/电池)","氯碱(已淘汰)"," artisanal金矿开采"],"note":"汞是有毒重金属，全球《水俣公约》推动淘汰","producers":[("西班牙Almaden(已关闭)","西班牙","历史~30%"),("中国","中国","~20%"),("墨西哥","墨西哥","~10%"),("俄罗斯","俄罗斯","~5%"),("其他国家","多国","~5%")],"chain_up":"汞矿开采(已大幅减少)","chain_mid":"汞矿→焙烧→冷凝→液汞","chain_down":"小规模金矿(40%)、氯碱(已淘汰)、荧光灯(减少)、仪器仪表(减少)","bottleneck":"《水俣公约》推动全球淘汰汞，产量持续下降","substitutes":[],"forecast_st":"全球淘汰汞进程加速","forecast_lt":"2040年前基本退出商业应用","forecast_drivers":["小规模金矿开采(尚难完全替代)","医疗器械(逐渐被电子替代)"],"forecast_risks":["《水俣公约》禁令","替代技术普及"],"reserves":"汞被《水俣公约》限制生产和使用，全球淘汰中"},
    "Tl": {"price":"~$5,000/公斤(铊)","unit":"USD/公斤","exchange":"战略材料直接交易","trend5":"稳定","drivers":["电子(红外光学)","医药(历史)","超导(TlBaCuO)","合金"],"note":"铊是剧毒重金属，应用受限，红外光学有少量需求","producers":[("中国(铅锌冶炼副产)","中国","~30%"),("俄罗斯","俄罗斯","~15%"),("美国","美国","~10%"),("哈萨克斯坦","哈萨克斯坦","~8%"),("加拿大","加拿大","~5%")],"chain_up":"铅/锌冶炼副产铊","chain_mid":"铅锌冶炼烟尘→铊回收→精制","chain_down":"红外光学(30%)、电子(20%)、超导(10%)、医药(历史)(10%)","bottleneck":"铊剧毒，生产和应用受限","substitutes":[],"forecast_st":"应用受限，需求有限","forecast_lt":"逐步被替代，需求减少","forecast_drivers":["红外光学材料","高温超导(Tl系)","电子器件"],"forecast_risks":["铊剧毒环保限制","替代材料"],"reserves":"铊被严格管控(剧毒)，应用逐步减少"},
    "Th": {"price":"~$50/公斤(硝酸钍)","unit":"USD/公斤","exchange":"政府/研究机构交易","trend5":"稳定","drivers":["核燃料(钍-铀循环)","高温合金","催化剂","光学"],"note":"钍是第四代核燃料候选，钍-铀循环更安全","producers":[("印度(独居石砂矿)","印度","~30%"),("中国","中国","~20%"),("巴西","巴西","~15%"),("澳大利亚","澳大利亚","~10%"),("美国","美国","~5%")],"chain_up":"独居石砂矿(含钍稀土磷酸盐)","chain_mid":"独居石→钍分离→硝酸钍/金属钍","chain_down":"核燃料(钍-铀循环)(40%)、高温合金(20%)、催化剂(15%)、光学(10%)","bottleneck":"钍-铀循环核反应堆尚在研发阶段，未商业化","substitutes":[],"forecast_st":"钍-铀循环研发持续推进","forecast_lt":"钍核燃料可能成为第四代核能方向","forecast_drivers":["钍基熔盐堆(TMSR)","印度钍计划","核能脱碳"],"forecast_risks":["钍-铀循环技术成熟度","铀价格竞争"],"reserves":"钍被列为潜在核燃料战略物资，印度储量最大"},
    "Rb": {"price":"~$1,200/克(铷)","unit":"USD/克","exchange":"研究机构直接交易","trend5":"稳定","drivers":["原子钟(铷钟)","光伏电池","特种玻璃","医药"],"note":"铷主要用于原子钟(铷钟)和特种玻璃","producers":[("中国(锂云母副产)","中国","~40%"),("加拿大","加拿大","~20%"),("俄罗斯","俄罗斯","~15%"),("德国","德国","~10%"),("日本","日本","~5%")],"chain_up":"锂云母/铯榴石矿副产铷","chain_mid":"锂/铯冶炼→铷分离→高纯铷","chain_down":"原子钟(30%:铷钟)、光伏(20%)、特种玻璃(20%)、医药(10%)","bottleneck":"铷为锂/铯矿极稀副产，全球年产仅~5吨","substitutes":[],"forecast_st":"原子钟和GPS需求稳定","forecast_lt":"量子技术和导航推动铷需求","forecast_drivers":["铷原子钟(GPS/北斗)","光伏电池(CIGS添加)","特种玻璃","量子传感"],"forecast_risks":["铯原子钟替代铷钟"],"reserves":"铷被美国列为关键矿物"},
    "Sr": {"price":"~$200/吨(碳酸锶)","unit":"USD/吨","exchange":"化工现货","trend5":"稳定","drivers":["磁性材料(铁氧体)","玻璃(脱色)","烟花(红色)","医药"],"note":"锶主要用于铁氧体永磁材料和玻璃脱色","producers":[("中国","中国","~40%"),("西班牙","西班牙","~20%"),("墨西哥","墨西哥","~15%"),("土耳其","土耳其","~10%"),("伊朗","伊朗","~5%")],"chain_up":"天青石/菱锶矿开采","chain_mid":"矿石→碳酸锶/硝酸锶","chain_down":"铁氧体磁体(40%)、玻璃(20%)、烟火(15%)、锌精炼(10%)","bottleneck":"天青石矿资源集中在中国和西班牙","substitutes":[],"forecast_st":"铁氧体磁体需求稳定","forecast_lt":"永磁材料和电子需求增长","forecast_drivers":["铁氧体永磁(电机/传感器)","玻璃脱色","烟火","锌精炼添加剂"],"forecast_risks":["钕铁硼替代铁氧体"],"reserves":"锶被美国列为关键矿物"},
    "Cs": {"price":"~$50/克(铯)","unit":"USD/克","exchange":"研究机构直接交易","trend5":"稳定偏高","drivers":["原子钟(铯钟-时间基准)","石油钻井液","光电倍增管","催化剂"],"note":"铯是国际时间基准(铯原子钟)，极稀缺碱金属","producers":[("中国(铯榴石)","中国","~30%"),("加拿大(Tanco矿)","加拿大","~25%"),("津巴布韦","津巴布韦","~15%"),("纳米比亚","纳米比亚","~10%"),("澳大利亚","澳大利亚","~5%")],"chain_up":"铯榴石矿开采(极稀缺)","chain_mid":"铯榴石→酸浸→碳酸铯/氢氧化铯","chain_down":"原子钟(25%:铯钟-秒定义)、钻井液(25%)、光电管(15%)、催化剂(10%)","bottleneck":"铯榴石矿极稀缺，加拿大Tanco矿占重要地位","substitutes":[],"forecast_st":"原子钟和石油钻井需求稳定","forecast_lt":"量子技术和精密测量推动铯需求","forecast_drivers":["铯原子钟(国际秒定义)","石油钻井液(甲酸铯)","光电倍增管","离子推进(航天)"],"forecast_risks":["铷钟替代铯钟"],"reserves":"铯被美国、欧盟列为关键矿物"},
    "Ba": {"price":"~$200/吨(碳酸钡)","unit":"USD/吨","exchange":"化工现货","trend5":"稳定","drivers":["油气钻井液(重晶石)","电子(钛酸钡)、玻璃、医药"],"note":"钡主要用于油气钻井液(重晶石)和电子陶瓷","producers":[("中国","中国","~40%"),("印度","印度","~15%"),("摩洛哥","摩洛哥","~10%"),("美国","美国","~8%"),("伊朗","伊朗","~5%")],"chain_up":"重晶石矿开采(中国、印度、摩洛哥)","chain_mid":"重晶石→碳酸钡/硫酸钡","chain_down":"钻井液(60%:重晶石)、化工(15%)、电子(10%:钛酸钡)、玻璃(5%)","bottleneck":"重晶石资源丰富但钻井级品位要求高","substitutes":[],"forecast_st":"油气钻井需求稳定","forecast_lt":"电子陶瓷和钻井推动钡需求","forecast_drivers":["油气钻井液(重晶石)","电子陶瓷(MLCC钛酸钡)","玻璃","医药(硫酸钡造影)"],"forecast_risks":["油气行业周期"],"reserves":"钡资源丰富，重晶石被美国列为关键矿物"},
}

print("中等数据(2)已定义")

def main():
    """主函数：组合所有元素数据并生成JS文件"""
    all_entries = {}

    # 1. 超重元素 Z>=104
    for sym, name, z in ELEMENTS:
        if z >= 104:
            all_entries[sym] = gen_superheavy(sym, z)

    # 2. 极稀缺放射性元素(无市场)
    research_only = {
        "Es": "锿半衰期极短(最长20天)，仅实验室合成，无商业化应用，无市场数据",
        "Fm": "镄半衰期极短(最长100天)，仅实验室合成，无商业化应用，无市场数据",
        "Md": "钔半衰期极短，仅实验室合成，无商业化应用，无市场数据",
        "No": "锘半衰期极短，仅实验室合成，无商业化应用，无市场数据",
        "Lr": "铹半衰期极短，仅实验室合成，无商业化应用，无市场数据",
        "Fr": "钫是地壳中最稀有的天然元素之一，极不稳定，无商业化应用，无市场数据",
        "At": "砹是地壳中最稀有元素之一，极不稳定，无商业化应用，无市场数据",
        "Bk": "锫半衰期极短，仅实验室合成，无商业化应用，无市场数据",
    }
    for sym, note in research_only.items():
        all_entries[sym] = gen_radioactive_research(sym, note)

    # 3. 放射性元素(有部分市场)
    radioactive_market = {
        "Pa": ("~$280,000/克(镤-231)", "科学研究、地质年代学", "极稀有放射性元素，无商业化应用，仅用于科研", ["地质年代学研究", "核物理研究"]),
        "Np": ("~$660/克(镎-237)", "钚-238生产(航天核电池)、核武器中子源", "核反应堆副产物，用于航天核电池(RTG)钚-238前体", ["航天核电池(RTG)", "核武器中子源"]),
        "Pu": ("~$5,500/克(钚-238)", "核武器、核电站MOX燃料、航天核电池(RTG)", "钚是核武器和航天核电池核心材料，受国际核监管(IAEA)", ["核武器", "航天核电池(RTG)", "MOX核燃料"]),
        "Am": ("~$1,500/克(镅-241)", "烟雾报警器、工业测厚仪、航天核电池", "镅-241广泛用于烟雾报警器(亿级量级)，镅-243用于科研", ["烟雾报警器", "工业测厚仪", "航天核电池"]),
        "Cm": ("~$185,000/克(锔-244)", "航天核电池(RTG)、X射线源、科学研究", "极强放射性，锔-244用于航天RTG，产量极低", ["航天核电池(RTG)", "X射线源", "科研"]),
        "Cf": ("~$27,000,000/克(锎-252)", "中子源(石油测井/核反应启动/癌症治疗)", "锎-252是极强中子源，全球年产仅克级", ["石油测井中子源", "核反应启动源", "癌症治疗"]),
        "Ac": ("~$50,000/克(锕-225)", "靶向alpha放射治疗(癌症)、中子源", "锕-225是癌症靶向治疗前沿同位素，供应极度稀缺", ["癌症靶向alpha治疗", "中子源"]),
        "Ra": ("~$20,000/克(镭-226)", "癌症放射治疗(历史)、工业放射源", "镭历史上用于发光涂料和癌症治疗，现多被替代", ["历史放射治疗", "工业放射源"]),
        "Po": ("~$3,000/克(钋-210估算)", "航天热源(RTG)、中子源、静电消除", "极强放射性，钋-210用于航天RTG，产量极低", ["航天热源(RTG)", "中子源", "静电消除"]),
        "Rn": ("无商业化定价", "癌症放射治疗(历史)、地震研究", "放射性惰性气体，主要关注室内氡危害，无商业化市场", ["地震研究", "室内氡监测"]),
        "Tc": ("~$60/克(锝-99m)", "医学SPECT显像(锝-99m)、工业示踪", "锝-99m是核医学最常用显像同位素，全球日用量数千万次", ["医学SPECT显像", "工业示踪"]),
    }
    for sym, (price, use, note, drv) in radioactive_market.items():
        all_entries[sym] = gen_radioactive_market(sym, price, use, note, drv)

    # 4. 详细数据元素
    all_entries.update(generate_detailed())
    all_entries.update(generate_detailed_2())
    all_entries.update(generate_detailed_3())
    all_entries.update(generate_detailed_4())
    all_entries.update(generate_detailed_5())

    # 5. Nd 钕 (详细)
    all_entries["Nd"] = gen_nd()

    # 6. In, Bi
    all_entries["In"] = gen_in()
    all_entries["Bi"] = gen_bi()

    # 7. 稀土元素(模板生成)
    for sym, data in RARE_EARTH_DATA.items():
        if data is not None:
            all_entries[sym] = gen_rare_earth(sym, *data)

    # 8. 中等详细度元素
    for sym, data in MEDIUM_DATA.items():
        all_entries[sym] = gen_medium(sym, data)
    for sym, data in MEDIUM_DATA_2.items():
        all_entries[sym] = gen_medium(sym, data)

    # 9. 检查是否有遗漏元素
    covered = set(all_entries.keys())
    for sym, name, z in ELEMENTS:
        if sym not in covered:
            # 对剩余极少数元素使用通用模板
            print(f"  [警告] 元素 {sym}({name}, Z={z}) 缺少数据，使用默认模板")
            all_entries[sym] = gen_superheavy(sym, z) if z >= 93 else f"""P6_ECONOMY['{sym}'] = {{
  pricing: {{
    currentPrice: '数据待补充',
    priceUnit: 'N/A',
    exchange: 'N/A',
    fiveYearTrend: 'N/A',
    tenYearTrend: 'N/A',
    priceDrivers: [],
    note: '{name}(Z={z})，市场经济数据待补充'
  }},
  topProducers: [],
  supplyChain: {{
    upstream: 'N/A',
    midstream: 'N/A',
    downstream: 'N/A',
    bottleneck: 'N/A',
    note: '数据待补充'
  }},
  substitutes: [],
  forecast: {{
    shortTerm: 'N/A',
    longTerm: 'N/A',
    keyDrivers: [],
    riskFactors: [],
    note: '数据待补充'
  }},
  strategicReserves: {{
    countries: [],
    note: '数据待补充'
  }}
}};"""

    # 组装JS文件
    header = """/**
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

"""

    body = ""
    for sym, name, z in ELEMENTS:
        entry = all_entries.get(sym, "")
        if entry:
            body += entry + "\n\n"
        else:
            print(f"  [错误] 元素 {sym}({name}) 无数据!")

    footer = """if (typeof window !== 'undefined') {
  window.P6_ECONOMY = P6_ECONOMY;
}
"""

    js_content = header + body + footer

    # 确保输出目录存在
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 写入文件
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(js_content)

    # 统计
    entry_count = sum(1 for sym, _, _ in ELEMENTS if sym in all_entries)
    file_size = os.path.getsize(OUTPUT_FILE)
    print(f"\n生成完成: {OUTPUT_FILE}")
    print(f"  元素数量: {entry_count}/118")
    print(f"  文件大小: {file_size:,} 字节 ({file_size/1024:.1f} KB)")

    # 验证完整性
    missing = [sym for sym, _, _ in ELEMENTS if sym not in all_entries]
    if missing:
        print(f"  [警告] 缺失元素: {missing}")
    else:
        print(f"  [验证] 全部118个元素均已包含!")

if __name__ == "__main__":
    main()

