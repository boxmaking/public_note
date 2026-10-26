#!/usr/bin/env python3
"""Inject industrial production & price data into elements.js"""
import re, json

DATA = {
    1:  {'method': '蒸汽重整法(天然气+水蒸气) / 水电解法', 'prod': 74000000, 'price': '~$1.5/kg (工业级)', 'producers': '中国、美国、俄罗斯、印度'},
    2:  {'method': '天然气低温分馏(从含氦天然气中分离)', 'prod': 140000000, 'price': '~$35/m\u00b3 (液氦99.999%)', 'producers': '美国、卡塔尔、阿尔及利亚、俄罗斯'},
    3:  {'method': '电解LiCl-KCl熔盐 / 锂辉石还原法', 'prod': 100000, 'price': '~$70,000/t (碳酸锂99.5%)', 'producers': '澳大利亚、智利、中国、阿根廷'},
    4:  {'method': 'Mg还原BeF\u2082 / 电解BeCl\u2082-NaCl熔盐', 'prod': 260, 'price': '~$5,000/kg (铍金属)', 'producers': '美国、中国、哈萨克斯坦'},
    5:  {'method': 'Mg还原B\u2082O\u2083 / 硼砂精炼', 'prod': 4000000, 'price': '~$3/kg (硼砂)', 'producers': '土耳其、美国、俄罗斯、中国'},
    6:  {'method': '石油焦煅烧 / 天然气裂解制炭黑', 'prod': 800000000, 'price': '~$0.50/kg (石墨)', 'producers': '中国、印度、俄罗斯、巴西'},
    7:  {'method': '空气液化分馏(Linde法)', 'prod': 150000000, 'price': '~$0.15/m\u00b3 (液氮)', 'producers': '全球分布广泛'},
    8:  {'method': '空气液化分馏 / PSA变压吸附', 'prod': 300000000, 'price': '~$0.10/m\u00b3 (液氧)', 'producers': '全球分布广泛'},
    9:  {'method': '电解KHF\u2082(无水氟化氢) / Moissan法', 'prod': 17000, 'price': '~$7/kg (氟气)', 'producers': '中国、日本、法国、美国'},
    10: {'method': '空气液化分馏(从液态空气中分馏)', 'prod': None, 'price': '~$60/m\u00b3 (氖气)', 'producers': '乌克兰、俄罗斯、中国'},
    11: {'method': '电解熔融NaCl(Downs电解池)', 'prod': 100000000, 'price': '~$2.5/kg (金属钠)', 'producers': '中国、美国、法国、俄罗斯'},
    12: {'method': '电解熔融MgCl\u2082(Pidgeon法) / 海水提镁', 'prod': 1100000, 'price': '~$3/kg (镁锭99.9%)', 'producers': '中国、俄罗斯、以色列、美国'},
    13: {'method': '电解Al\u2082O\u2083-冰晶石熔盐(Hall-H\u00e9roult法)', 'prod': 65000000, 'price': '~$2.3/kg (铝锭)', 'producers': '中国、印度、俄罗斯、加拿大'},
    14: {'method': '碳热还原SiO\u2082(电弧炉法)', 'prod': 8000000, 'price': '~$1.5/kg (冶金级)', 'producers': '中国、巴西、挪威、美国'},
    15: {'method': '电炉还原磷灰石Ca\u2083(PO\u2084)\u2082+SiO\u2082+C', 'prod': 1000000, 'price': '~$3/kg (黄磷)', 'producers': '中国、哈萨克斯坦、美国、摩洛哥'},
    16: {'method': '克劳斯法(从天然气中脱硫) / Frasch采矿', 'prod': 70000000, 'price': '~$0.10/kg (工业硫磺)', 'producers': '全球各产油国广泛分布'},
    17: {'method': '电解NaCl溶液(氯碱工业)', 'prod': 65000000, 'price': '~$0.30/kg (液氯)', 'producers': '中国、美国、西欧、日本'},
    18: {'method': '空气液化分馏(从液态空气中分馏)', 'prod': 7000000, 'price': '~$0.50/m\u00b3 (液氩)', 'producers': '全球分布'},
    19: {'method': '真空蒸馏金属热还原(KCl+Na)', 'prod': None, 'price': '~$300/kg (金属钾)', 'producers': '中国、加拿大、俄罗斯'},
    20: {'method': '电解CaCl\u2082熔盐 / 铝热还原CaO', 'prod': None, 'price': '~$50/kg (金属钙)', 'producers': '中国、俄罗斯、美国'},
    21: {'method': '离子交换法从独居石/磷钇矿中提取', 'prod': 15000, 'price': '~$30/kg (氧化钪)', 'producers': '中国、俄罗斯、乌克兰'},
    22: {'method': 'Kroll法(Mg还原TiCl\u2084) / Hunter法', 'prod': 6600000, 'price': '~$7/kg (海绵钛)', 'producers': '中国、日本、俄罗斯、哈萨克斯坦'},
    23: {'method': '铝热法还原V\u2082O\u2085 / 钙还原VCl\u2083', 'prod': 75000, 'price': '~$20/kg (钒铁)', 'producers': '中国、俄罗斯、南非、巴西'},
    24: {'method': '铝热法还原Cr\u2082O\u2083 / 电解铝热还原', 'prod': 41000000, 'price': '~$2/kg (铬铁)', 'producers': '南非、哈萨克斯坦、印度、土耳其'},
    25: {'method': '铝热法还原Mn\u2082O\u2083 / 电解MnSO\u2084', 'prod': 18000000, 'price': '~$2/kg (电解锰)', 'producers': '南非、澳大利亚、中国、加蓬'},
    26: {'method': '高炉炼铁(碳热还原Fe\u2082O\u2083+CO)', 'prod': 1800000000, 'price': '~$0.10/kg (热轧钢卷)', 'producers': '中国、印度、日本、俄罗斯'},
    27: {'method': '湿法冶锌提取钴(伴生矿) / 钴矿还原熔炼', 'prod': 170000, 'price': '~$30/kg (钴金属)', 'producers': '刚果(金)、俄罗斯、澳大利亚、古巴'},
    28: {'method': '羰基法(Mond法) / 电解精炼', 'prod': 2700000, 'price': '~$18/kg (镍板)', 'producers': '印度尼西亚、菲律宾、俄罗斯、新喀里多尼亚'},
    29: {'method': '火法熔炼-电解精炼(铜矿\u2192粗铜\u2192电解铜)', 'prod': 22000000, 'price': '~$8/kg (电解铜)', 'producers': '智利、秘鲁、中国、刚果(金)'},
    30: {'method': '焙烧ZnS\u2192浸出\u2192电解沉积(RLE法)', 'prod': 14000000, 'price': '~$2.8/kg (锌锭)', 'producers': '中国、秘鲁、澳大利亚、印度'},
    31: {'method': '区熔提纯(从锌/铝冶炼副产品中回收)', 'prod': 300, 'price': '~$200/kg (镓金属)', 'producers': '中国、德国、日本、乌克兰'},
    32: {'method': '区熔提纯(从锌/铜冶炼副产品中回收)', 'prod': 130, 'price': '~$900/kg (高纯锗)', 'producers': '中国、俄罗斯、美国、比利时'},
    33: {'method': '碳还原As\u2082O\u2083 / 砷黄铁矿焙烧', 'prod': 52000, 'price': '~$2/kg (三氧化二砷)', 'producers': '中国、智利、摩洛哥、俄罗斯'},
    34: {'method': '电解精炼铜阳极泥回收 / 硫酸厂泥渣', 'prod': 3300, 'price': '~$30/kg (硒)', 'producers': '日本、德国、比利时、中国'},
    35: {'method': '氯气氧化海水提溴', 'prod': 550000, 'price': '~$3/kg (溴)', 'producers': '以色列、约旦、中国、美国'},
    36: {'method': '空气液化分馏(从液态空气中分馏)', 'prod': None, 'price': '~$300/m\u00b3 (氪气)', 'producers': '乌克兰、俄罗斯'},
    37: {'method': '离子交换法从铯榴石/锂云母中提取', 'prod': 4, 'price': '~$10,000/kg (铷盐)', 'producers': '加拿大、津巴布韦、中国'},
    38: {'method': 'FFC Cambridge法 / 电解SrCl\u2082', 'prod': 350000, 'price': '~$5/kg (天青石精矿)', 'producers': '西班牙、中国、墨西哥、伊朗'},
    39: {'method': '溶剂萃取从独居石/磷钇矿中提取', 'prod': 10000, 'price': '~$35/kg (氧化钇)', 'producers': '中国、缅甸、美国'},
    40: {'method': 'Kroll法(Na还原ZrCl\u2084) / 碘化物热解', 'prod': 1400000, 'price': '~$25/kg (海绵锆)', 'producers': '澳大利亚、南非、中国、印度尼西亚'},
    41: {'method': '铝热还原Nb\u2082O\u2085 / 电子束熔炼', 'prod': 63000, 'price': '~$45/kg (铌铁)', 'producers': '巴西、加拿大、澳大利亚'},
    42: {'method': 'H\u2082还原MoO\u2083 / 铝热还原辉钼矿焙砂', 'prod': 290000, 'price': '~$45/kg (钼铁)', 'producers': '中国、智利、美国、秘鲁'},
    43: {'method': '核反应堆产物(\u00b2\u00b3\u2075U裂变) / 加速器生产', 'prod': None, 'price': '~$3,000,000/g (\u2079\u2079\u1d50Tc)', 'producers': '核反应堆国家'},
    44: {'method': '化学分离从铂矿/镍铜冶炼副产品中提取', 'prod': 35, 'price': '~$15,000/kg (钌粉)', 'producers': '南非、俄罗斯、津巴布韦'},
    45: {'method': '化学分离从铂族金属精矿中提取', 'prod': 35, 'price': '~$180,000/kg (铑粉)', 'producers': '南非、俄罗斯、加拿大'},
    46: {'method': '化学分离从镍铜冶炼副产品中提取', 'prod': 210, 'price': '~$60,000/kg (钯板)', 'producers': '俄罗斯、南非、加拿大、美国'},
    47: {'method': '氰化浸出-锌置换(从银矿中提取)', 'prod': 28000, 'price': '~$800/kg (银)', 'producers': '墨西哥、秘鲁、中国、澳大利亚'},
    48: {'method': '湿法冶锌副产品回收 / 闪锌矿焙烧-浸出', 'prod': 26000, 'price': '~$3/kg (镉)', 'producers': '中国、韩国、日本、加拿大'},
    49: {'method': '区熔提纯(从锌冶炼副产品中回收)', 'prod': 900, 'price': '~$300/kg (铟)', 'producers': '中国、韩国、日本、加拿大'},
    50: {'method': '碳热还原SnO\u2082(反射炉) / 电解精炼', 'prod': 370000, 'price': '~$25/kg (锡锭)', 'producers': '中国、印度尼西亚、缅甸、秘鲁'},
    51: {'method': '焙烧辉锑矿Sb\u2082S\u2083\u2192碳还原', 'prod': 110000, 'price': '~$12/kg (精锑)', 'producers': '中国、俄罗斯、塔吉克斯坦、缅甸'},
    52: {'method': '电解精炼铜阳极泥回收 / 硫化物矿焙烧', 'prod': 2700000, 'price': '~$80/kg (碲)', 'producers': '中国、俄罗斯、日本、瑞典'},
    53: {'method': 'MnO\u2082氧化I\u207b(离子交换法从卤水中提取)', 'prod': 35000, 'price': '~$60/kg (碘)', 'producers': '智利、日本、中国、美国'},
    54: {'method': '空气液化分馏(从液态空气中分馏)', 'prod': None, 'price': '~$1,200/m\u00b3 (氙气)', 'producers': '乌克兰、俄罗斯'},
    55: {'method': '碱分解铯榴石 + 离子交换分离', 'prod': 20, 'price': '~$60,000/kg (铯盐)', 'producers': '加拿大、津巴布韦'},
    56: {'method': '铝热还原BaO / 电解BaCl\u2082熔盐', 'prod': 9000000, 'price': '~$0.2/kg (重晶石)', 'producers': '中国、印度、摩洛哥、美国'},
    57: {'method': '溶剂萃取从独居石/氟碳铈矿中提取', 'prod': 50000, 'price': '~$7/kg (氧化镧)', 'producers': '中国、美国、澳大利亚'},
    58: {'method': '溶剂萃取从独居石/氟碳铈矿中提取', 'prod': 50000, 'price': '~$7/kg (氧化铈)', 'producers': '中国、美国、澳大利亚'},
    59: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 3000, 'price': '~$40/kg (氧化镨)', 'producers': '中国'},
    60: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 20000, 'price': '~$70/kg (氧化钕)', 'producers': '中国'},
    61: {'method': '加速器轰击 / 核裂变产物', 'prod': None, 'price': '~$3,000/g (\u00b9\u2074\u2077Pm)', 'producers': '核反应堆国家'},
    62: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 600, 'price': '~$8/kg (氧化钐)', 'producers': '中国'},
    63: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 500, 'price': '~$180/kg (氧化铕)', 'producers': '中国'},
    64: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 1000, 'price': '~$30/kg (氧化钆)', 'producers': '中国'},
    65: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 300, 'price': '~$800/kg (氧化铽)', 'producers': '中国'},
    66: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 1500, 'price': '~$300/kg (氧化镝)', 'producers': '中国'},
    67: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 200, 'price': '~$60/kg (氧化钬)', 'producers': '中国'},
    68: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 1000, 'price': '~$25/kg (氧化铒)', 'producers': '中国'},
    69: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 200, 'price': '~$50/kg (氧化铥)', 'producers': '中国'},
    70: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 4000, 'price': '~$10/kg (氧化镱)', 'producers': '中国'},
    71: {'method': '溶剂萃取离子交换从稀土矿中提取', 'prod': 200, 'price': '~$400/kg (氧化镥)', 'producers': '中国'},
    72: {'method': 'Kroll法(Mg还原HfCl\u2084) / 碘化物热解', 'prod': 70, 'price': '~$900/kg (海绵铪)', 'producers': '法国、美国、中国、俄罗斯'},
    73: {'method': '铝热还原K\u2082TaF\u2087 / Na还原法', 'prod': 2100, 'price': '~$200/kg (钽粉)', 'producers': '刚果(金)、卢旺达、巴西、中国'},
    74: {'method': 'H\u2082还原WO\u2083 / 粉末冶金烧结', 'prod': 84000, 'price': '~$35/kg (钨精矿)', 'producers': '中国、越南、俄罗斯、玻利维亚'},
    75: {'method': 'H\u2082还原NH\u2084ReO\u2084(从辉钼矿焙烧烟气中回收)', 'prod': 60, 'price': '~$1,500/kg (铼粉)', 'producers': '智利、美国、波兰、哈萨克斯坦'},
    76: {'method': '化学分离从铂矿/镍铜冶炼副产品中提取', 'prod': 1, 'price': '~$12,000/kg (锇粉)', 'producers': '南非、俄罗斯'},
    77: {'method': '化学分离从铂矿/镍铜冶炼副产品中提取', 'prod': 7, 'price': '~$45,000/kg (铱粉)', 'producers': '南非、俄罗斯'},
    78: {'method': '王水溶解-氯化铵沉淀(湿法精炼)', 'prod': 190, 'price': '~$55,000/kg (铂板)', 'producers': '南非、俄罗斯、津巴布韦'},
    79: {'method': '氰化浸出-锌置换(从金矿中提取) / Merrill-Crowe法', 'prod': 3600, 'price': '~$70,000/kg (金)', 'producers': '中国、澳大利亚、俄罗斯、美国'},
    80: {'method': '辰砂HgS焙烧-冷凝蒸馏', 'prod': 2500, 'price': '~$30/kg (金属汞)', 'producers': '中国、吉尔吉斯斯坦、墨西哥、俄罗斯'},
    81: {'method': '化学分离从铅锌冶炼烟尘中回收', 'prod': 10, 'price': '~$5,000/kg (铊)', 'producers': '中国、哈萨克斯坦、俄罗斯'},
    82: {'method': '鼓风炉还原PbS烧结块-电解精炼', 'prod': 12000000, 'price': '~$2/kg (铅锭)', 'producers': '中国、澳大利亚、秘鲁、美国'},
    83: {'method': '化学分离从铅/钨/铜冶炼副产品中回收', 'prod': 19000, 'price': '~$6/kg (精铋)', 'producers': '中国、越南、墨西哥、俄罗斯'},
    84: {'method': '核反应堆产物(\u00b2\u2070\u2079Bi中子俘获) / 极微量天然存在', 'prod': None, 'price': '~$50,000/g (微量)', 'producers': '核研究机构'},
    85: {'method': '加速器轰击(\u00b2\u2070\u2079Bi(\u03b1,2n)\u00b2\u00b9\u00b9At)', 'prod': None, 'price': '极稀有，无商业供应', 'producers': '核研究机构'},
    86: {'method': '铀矿衰变产物(从镭衰变中收集)', 'prod': None, 'price': '~$100,000/g (医用\u00b2\u00b2\u00b2Rn)', 'producers': '天然来源极微，无工业规模'},
    87: {'method': '铀矿加工(从锕系衰变产物中分离)', 'prod': None, 'price': '极稀有，无商业供应', 'producers': '核研究机构'},
    88: {'method': '铀矿加工(从铀尾矿中分离RaSO\u2084)', 'prod': None, 'price': '极其昂贵(历史医用)', 'producers': '历史来源'},
    89: {'method': '加速器轰击 / 铀矿中极微量天然存在', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    90: {'method': '液-液萃取(TBP-煤油体系 / Thorex法)', 'prod': None, 'price': '~$30/kg (二氧化钍)', 'producers': '印度、巴西、澳大利亚'},
    91: {'method': '铀矿加工(从超铀元素区分离)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    92: {'method': '溶剂萃取(TBP)从铀矿中提取 / ISL地浸法', 'prod': 61000, 'price': '~$100/kg (U\u2083O\u2088黄饼)', 'producers': '哈萨克斯坦、加拿大、纳米比亚、澳大利亚'},
    93: {'method': '核反应堆产物(\u00b2\u00b3\u2078U(n,\u03b3)\u2192\u00b2\u00b3\u2079Np)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    94: {'method': '核反应堆产物(\u00b2\u00b3\u2078U(n,\u03b3)\u2192\u00b2\u00b3\u2079Pu)', 'prod': None, 'price': '严格管控', 'producers': '核武器/能源国家'},
    95: {'method': '核反应堆产物(\u00b2\u00b3\u2079Pu多次中子俘获)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    96: {'method': '核反应堆产物(\u00b2\u00b3\u2079Pu\u2192\u00b2\u2074\u00b2Cm)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    97: {'method': '加速器轰击(\u00b2\u2074\u00b9Am(\u03b1,2n)\u00b2\u2074\u00b3Bk)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    98: {'method': '加速器轰击(\u00b2\u2074\u00b2Cm(\u03b1,n)\u00b2\u2074\u2075Cf)', 'prod': None, 'price': '~$60,000,000/g (\u00b2\u2075\u00b2Cf)', 'producers': '美国(ORNL)、俄罗斯(RIAR)'},
    99: {'method': '加速器轰击(\u00b2\u2075\u00b3Es(\u03b1,n)\u00b2\u2075\u2076Md)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    100:{'method': '加速器轰击(\u00b2\u2074\u2079Bk(\u2074\u2078Ca,3n)\u00b2\u2079\u2074Og)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    101:{'method': '加速器轰击(\u00b2\u2075\u2077Md(\u2074\u2078Ca,3n)\u00b2\u2079\u2075Lr)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    102:{'method': '加速器轰击(\u00b2\u2074\u2078Cm(\u2074\u2078Ca,4n)\u00b2\u2079\u00b2Lv)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    103:{'method': '加速器轰击(\u00b2\u2075\u2077Lr(\u2074\u2078Ca,3n)\u00b2\u2079\u2075Db)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    104:{'method': '加速器轰击(\u00b2\u2070\u2078Pb(\u2075\u2078Fe,n)\u00b2\u2076\u2075Hs)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    105:{'method': '加速器轰击(\u00b2\u2070\u2079Bi(\u2075\u2078Fe,n)\u00b2\u2076\u2076Mt)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    106:{'method': '加速器轰击(\u00b2\u2070\u2078Pb(\u2076\u00b2Ni,n)\u00b2\u2076\u2079Ds)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    107:{'method': '加速器轰击(\u00b2\u2070\u2079Bi(\u2075\u2074Cr,n)\u00b2\u2076\u00b2Bh)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    108:{'method': '加速器轰击(\u00b2\u2070\u2078Pb(\u2075\u2078Fe,n)\u00b2\u2076\u2075Hs)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    109:{'method': '加速器轰击(\u00b2\u2070\u2079Bi(\u2075\u2078Fe,n)\u00b2\u2076\u2076Mt)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    110:{'method': '加速器轰击(\u00b2\u2070\u2078Pb(\u2076\u00b2Ni,n)\u00b2\u2076\u2079Ds)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    111:{'method': '加速器轰击(\u00b2\u2070\u2079Bi(\u2076\u2074Ni,n)\u00b2\u2077\u00b2Rg)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    112:{'method': '加速器轰击(\u00b2\u2070\u2078Pb(\u2077\u2070Zn,n)\u00b2\u2077\u2077Cn)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    113:{'method': '加速器轰击(\u00b2\u2070\u2079Bi(\u2077\u2070Zn,n)\u00b2\u2077\u2078Nh)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    114:{'method': '加速器轰击(\u00b2\u2074\u2074Pu(\u2074\u2078Ca,4n)\u00b2\u2078\u2078Fl)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    115:{'method': '加速器轰击(\u00b2\u2074\u00b3Am(\u2074\u2078Ca,3n)\u00b2\u2078\u2078Mc)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    116:{'method': '加速器轰击(\u00b2\u2074\u2078Cm(\u2074\u2078Ca,4n)\u00b2\u2079\u00b2Lv)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    117:{'method': '加速器轰击(\u00b2\u2074\u2079Bk(\u2074\u2078Ca,4n)\u00b2\u2079\u00b3Ts)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
    118:{'method': '加速器轰击(\u00b2\u2074\u2079Cf(\u2074\u2078Ca,3n)\u00b2\u2079\u2074Og)', 'prod': None, 'price': '无商业供应', 'producers': '核研究机构'},
}

with open('data/elements.js', 'r', encoding='utf-8') as f:
    src = f.read()

# Each element starts with {z:N, and ends with isotopes:[...]},
# The last element (z=118) ends with isotopes:[...]}]
# Strategy: for z 1-117, find isotopes:[...]},{z:N+1 and insert before },
# For z 118, find isotopes:[...]}] and insert before }]

def build_injection(z):
    d = DATA[z]
    prod = 'null' if d['prod'] is None else str(d['prod'])
    return (
        f",productionMethod:'{d['method']}',"
        f"annualProduction:{prod},"
        f"priceReference:'{d['price']}',"
        f"majorProducers:'{d['producers']}'"
    )

# Process in reverse order so positions stay valid
for z in range(118, 0, -1):
    d = DATA[z]
    injection = build_injection(z)
    
    if z == 118:
        # Find the last element's isotopes array close and inject before the object close
        # Pattern: z:118,...isotopes:[...]}]  →  insert before the final }]
        # The element ends with } followed by ] (end of ELEMENTS array)
        idx = src.rfind('}]')
        if idx == -1:
            print(f"ERROR: Cannot find end of ELEMENTS array for z={z}")
            continue
        # Insert injection before the } that closes the element (before ])
        src = src[:idx] + injection + src[idx:]
    else:
        # Find: isotopes:[...]},{z:NEXT,
        next_z = z + 1
        # The pattern to find is the boundary between this element and the next
        # Find the isotopes close of element z, followed by },{z:next_z
        # More robust: find },{z:NEXT, after the isotopes line
        
        # Search for: isotopes:[...]},{z:NEXT,
        pattern = re.compile(r'(isotopes:\[[^\]]*\])},(\s*\{z:' + str(next_z) + r',)', re.DOTALL)
        match = pattern.search(src)
        if match:
            pos = match.end(1)
            src = src[:pos] + injection + src[pos:]
        else:
            # Fallback: try broader match
            pattern2 = re.compile(r'(\})},\s*(\{z:' + str(next_z) + r',)', re.DOTALL)
            # We need to find the right }},{ — but there are many in the isotopes array
            # Use a more specific approach: find the isotopes field and the next {z:
            
            # Let's find this element by z and locate its isotopes array end
            elem_pattern = re.compile(r'\{z:' + str(z) + r',.*?isotopes:\[(?:[^\]]*)\]\}', re.DOTALL)
            m2 = elem_pattern.search(src)
            if m2:
                pos = m2.end()
                src = src[:pos] + injection + src[pos:]
            else:
                print(f"WARNING: Could not find injection point for z={z}")

with open('data/elements.js', 'w', encoding='utf-8') as f:
    f.write(src)

print(f"Written {len(src)} chars")
# Quick validation
import subprocess
result = subprocess.run([
    'C:/Users/whd/.workbuddy/binaries/node/versions/22.22.2/node.exe',
    '-e',
    "const fs=require('fs');const s=fs.readFileSync('data/elements.js','utf8');try{new Function(s+';return ELEMENTS;')();console.log('Syntax OK');}catch(e){console.log('ERR:',e.message);}"
], capture_output=True, text=True, cwd='.')
print("Validation:", result.stdout.strip() or result.stderr.strip())
