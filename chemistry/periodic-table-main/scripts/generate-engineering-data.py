#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Generate p6-engineering.js — 材料工程数据 (全部118元素)

运行: python generate-engineering-data.py
输出: ../data/p6-engineering.js
验证: node --check ../data/p6-engineering.js
"""

import os

OUTPUT_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'data')
OUTPUT_FILE = os.path.join(OUTPUT_DIR, 'p6-engineering.js')

# ── JS 序列化辅助 ──────────────────────────────────────────

def js_str(s):
    """转义 Python 字符串为 JS 单引号字符串"""
    if s is None:
        return 'null'
    escaped = s.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n')
    return f"'{escaped}'"

def js_val(val, indent=0):
    pad = '  ' * indent
    inner_pad = '  ' * (indent + 1)
    if isinstance(val, dict):
        parts = []
        for k, v in val.items():
            parts.append(f'{inner_pad}{k}: {js_val(v, indent + 1)}')
        return '{\n' + ',\n'.join(parts) + f'\n{pad}}}'
    elif isinstance(val, list):
        if not val:
            return '[]'
        if all(isinstance(x, str) for x in val):
            items = ', '.join(js_str(x) for x in val)
            return f'[{items}]'
        items = [f'{inner_pad}{js_val(x, indent + 1)}' for x in val]
        return '[\n' + ',\n'.join(items) + f'\n{pad}]'
    elif isinstance(val, str):
        return js_str(val)
    elif isinstance(val, bool):
        return 'true' if val else 'false'
    elif val is None:
        return 'null'
    else:
        return str(val)

# ── 超重元素/无工程应用元素模板 ────────────────────────────

def no_eng_app(reason='半衰期过短，无工程应用'):
    return {
        'materialGrades': [],
        'alloyRoles': [],
        'processing': {
            'weldability': 'N/A — ' + reason,
            'machinability': 'N/A',
            'formability': 'N/A',
            'heatTreatment': {
                'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A',
                'note': reason
            },
            'note': reason
        },
        'corrosionResistance': {
            'acidResistance': 'N/A', 'alkaliResistance': 'N/A',
            'saltwaterResistance': 'N/A', 'corrosionRate': 'N/A',
            'protectionMethods': [], 'note': reason
        },
        'applications': [
            {'name': '无工程应用', 'desc': reason}
        ],
        'failureAnalysis': []
    }

# ── 118 元素材料工程数据 ──────────────────────────────────

ENG = {}

# ═══ 第 1 周期 ═══════════════════════════════════════════

ENG['H'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯氢 99.999%', 'equivalent': 'GB/T 3634.2 纯氢'}
    ],
    'alloyRoles': [
        {'alloyType': '钛合金', 'content': '微量 (<0.015%)', 'role': '有害杂质 — 氢脆'},
        {'alloyType': '钢', 'content': '<2 ppm', 'role': '有害杂质 — 氢致开裂'}
    ],
    'processing': {
        'weldability': 'N/A（气体元素）；作为焊接保护/还原气使用',
        'machinability': 'N/A',
        'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '用作还原气氛（氢气退火炉）'},
        'note': '氢气用于退火保护气氛、燃料电池、氢冶金'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '氢本身不腐蚀材料，但氢原子渗入金属晶格可引起氢脆'
    },
    'applications': [
        {'name': '燃料电池', 'desc': '氢氧燃料电池效率>50%，用于新能源汽车与航天器'},
        {'name': '退火保护气', 'desc': '氢气气氛（N₂+H₂混合）用于不锈钢与硅钢退火'},
        {'name': '氢冶金', 'desc': '氢基直接还原铁（DRI）替代焦炭还原，减碳90%'},
        {'name': '航天推进剂', 'desc': '液氢-液氧推进剂比冲~450s'}
    ],
    'failureAnalysis': [
        {'mode': '氢脆', 'cause': '氢原子渗入晶格，在高应力下聚集导致开裂', 'prevention': '控制材料氢含量，避免腐蚀析氢，烘烤除氢'},
        {'mode': '氢致开裂 (HIC)', 'cause': '硫化氢环境中氢侵入钢材', 'prevention': '选用抗HIC钢（如低S控夹杂物钢）'},
        {'mode': '氢气爆炸', 'cause': '氢气泄漏后与空气混合达到爆炸极限(4-75%)', 'prevention': '严格密封，通风，氢气检测报警'}
    ]
}

ENG['He'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯氦 99.999%', 'equivalent': 'GB/T 4844 纯氦'}
    ],
    'alloyRoles': [
        {'alloyType': '钛合金焊接', 'content': '保护气 (He/Ar混合)', 'role': '焊接保护气'}
    ],
    'processing': {
        'weldability': 'N/A（气体元素）；用于TIG/MIG焊接保护气',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '用于超导磁体冷却(液氦4.2K)'},
        'note': '氦气用于焊接保护、检漏、超导冷却、深潜呼吸气'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A（惰性气体）', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '惰性气体，不参与腐蚀反应'
    },
    'applications': [
        {'name': '焊接保护气', 'desc': 'TIG焊钛/铝合金时使用He或He/Ar混合气，热输入高、熔深大'},
        {'name': 'MRI超导冷却', 'desc': '液氦冷却超导磁体至4.2K，医用MRI核心介质'},
        {'name': '检漏', 'desc': '氦质谱检漏仪灵敏度达10⁻¹² Pa·m³/s，用于密封性检测'},
        {'name': '深潜呼吸气', 'desc': '氦氧混合气(HeO₂)避免氮麻醉，用于深海潜水'}
    ],
    'failureAnalysis': [
        {'mode': '资源短缺', 'cause': '氦气为不可再生资源，全球供应受限', 'prevention': '回收循环利用，开发替代保护气'}
    ]
}

# ═══ 第 2 周期 ═══════════════════════════════════════════

ENG['Li'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B-923 (电池级)', 'equivalent': 'GB/T 26036 电池级锂'},
        {'standard': 'ASTM', 'grade': 'B-922 (合金级)', 'equivalent': 'GB/T 26035 工业级锂'}
    ],
    'alloyRoles': [
        {'alloyType': '铝锂合金 (Al-Li 2099)', 'content': '1.6-2.6% Li', 'role': '降低密度、提高弹性模量'},
        {'alloyType': '锂基电池电解质', 'content': 'LiPF₆/LiBF₄', 'role': '锂离子载体'},
        {'alloyType': '镁锂合金 (LA141)', 'content': '14% Li', 'role': '超轻合金基体元素'}
    ],
    'processing': {
        'weldability': '差（活泼性高，需特殊焊接工艺）',
        'machinability': '中等（软金属，易粘刀）',
        'formability': '良好（常温可挤压成形）',
        'heatTreatment': {'annealing': '300-400°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '锂极易氧化，所有热处理需惰性气氛'},
        'note': '锂极活泼，与水/空气剧烈反应，必须在干燥惰性气氛中加工'
    },
    'corrosionResistance': {
        'acidResistance': '极差（与酸剧烈反应）', 'alkaliResistance': '差', 'saltwaterResistance': '极差（与水反应）',
        'corrosionRate': 'N/A', 'protectionMethods': ['惰性气氛保护', '矿物油封存', '干燥储存'],
        'note': '锂在空气中迅速氧化变黑，与水反应生成氢气'
    },
    'applications': [
        {'name': '锂离子电池', 'desc': 'LiCoO₂/LiFePO₄正极+石墨负极，能量密度150-300 Wh/kg'},
        {'name': '铝锂合金', 'desc': 'Al-Li 2099用于航天器与飞机结构件，密度降低5-7%，刚度提高10%'},
        {'name': '锂基润滑脂', 'desc': '锂基脂（Li-12-羟基硬脂酸）耐温-20~130°C，广泛用于汽车轴承'},
        {'name': '核聚变', 'desc': '氚增殖材料（Li₄SiO₄/陶瓷），聚变堆包层中子增殖剂'}
    ],
    'failureAnalysis': [
        {'mode': '电池热失控', 'cause': '锂枝晶穿透隔膜引起内部短路', 'prevention': '固态电解质，智能BMS热管理'},
        {'mode': '锂腐蚀', 'cause': '锂与杂质气体反应', 'prevention': '纯化处理，惰性气氛'},
        {'mode': '焊接气孔', 'cause': '铝锂合金焊接时锂蒸发', 'prevention': '电子束焊/搅拌摩擦焊'}
    ]
}

ENG['Be'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B-776 (结构级)', 'equivalent': 'GB/T 19190 铍材'}
    ],
    'alloyRoles': [
        {'alloyType': '铍铜合金 (C17200)', 'content': '1.8-2.0% Be', 'role': '沉淀强化元素'},
        {'alloyType': '铝铍合金 (AlBeMet)', 'content': '62% Be', 'role': '轻量化复合材料'},
        {'alloyType': '铍镍合金', 'content': '~2% Be', 'role': '弹性元件材料'}
    ],
    'processing': {
        'weldability': '差（铍粉末有毒，焊接产生有害烟尘）',
        'machinability': '良好但有毒（需密封通风，湿式加工）',
        'formability': '中等（粉末冶金成形为主）',
        'heatTreatment': {'annealing': '700-800°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '铍铜合金可时效硬化：315°C保温2-3h'},
        'note': '铍粉尘有毒（铍肺病），所有加工需严格防护'
    },
    'corrosionResistance': {
        'acidResistance': '耐非氧化性酸', 'alkaliResistance': '耐碱性良好', 'saltwaterResistance': '中等',
        'corrosionRate': '~0.001 mm/年（大气环境）', 'protectionMethods': ['阳极氧化', '表面涂层'],
        'note': '铍表面形成致密BeO膜，耐腐蚀性优于铝'
    },
    'applications': [
        {'name': '航空航天结构', 'desc': '铍材用于卫星支架、导弹导引头，比刚度是钢的6倍'},
        {'name': '铍铜合金弹簧', 'desc': 'C17200用于无火花工具、精密弹簧，强度>1400 MPa'},
        {'name': 'X射线窗口', 'desc': '铍对X射线透射率高，用于X射线管窗口'},
        {'name': '核反应堆反射层', 'desc': '铍作中子反射层，减少临界质量'}
    ],
    'failureAnalysis': [
        {'mode': '铍肺病', 'cause': '吸入铍粉尘引起慢性肺部疾病', 'prevention': '严格密闭加工，职业暴露限值0.0002 mg/m³'},
        {'mode': '脆性断裂', 'cause': '铍为脆性金属，缺口敏感性高', 'prevention': '避免应力集中，粉末冶金提高纯度'}
    ]
}

ENG['B'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '硼纤维 (W芯)', 'equivalent': 'GB/T 26742 硼纤维'},
        {'standard': 'ASTM', 'grade': 'Boron Nitride (h-BN)', 'equivalent': '六方氮化硼陶瓷'}
    ],
    'alloyRoles': [
        {'alloyType': '硼钢 (B1500HS)', 'content': '0.002-0.005% B', 'role': '淬透性增强元素'},
        {'alloyType': '钕铁硼磁体 (NdFeB)', 'content': '~1% B', 'role': '形成Nd₂Fe₁₄B硬磁相'},
        {'alloyType': '硼酸盐玻璃', 'content': 'B₂O₃ 5-15%', 'role': '网络形成体'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）；硼钢可焊性随B含量增加降低',
        'machinability': 'N/A（元素形态）', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '硼钢中B提高淬透性，热处理敏感性高'},
        'note': '硼纤维用于复合材料增强体，B₄C用于防弹装甲'
    },
    'corrosionResistance': {
        'acidResistance': '常温耐盐酸/氢氟酸', 'alkaliResistance': '耐碱', 'saltwaterResistance': '良好',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '硼及其化合物化学稳定性高'
    },
    'applications': [
        {'name': '硼纤维复合材料', 'desc': '硼纤维拉伸强度>3500 MPa，用于航天器结构件'},
        {'name': '热处理硼钢', 'desc': '20MnB钢用于汽车安全件（防撞梁），冷成形+淬火后强度1500 MPa'},
        {'name': '碳化硼装甲', 'desc': 'B₄C硬度仅次于金刚石，用于防弹背心陶瓷板'},
        {'name': '硼硅玻璃', 'desc': 'Pyrex耐热硼硅玻璃，热膨胀系数低，用于实验室器皿'},
        {'name': '核控制材料', 'desc': 'B-10热中子吸收截面3837靶恩，用于核反应堆控制棒'}
    ],
    'failureAnalysis': [
        {'mode': '硼钢回火脆性', 'cause': 'B在晶界偏聚导致回火脆化', 'prevention': '控制B含量，添加Mo抑制回火脆性'}
    ]
}

ENG['C'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'AISI 1045 (碳钢)', 'equivalent': 'GB/T 699 45钢'},
        {'standard': '工业级', 'grade': 'T300 碳纤维', 'equivalent': 'GB/T 3362 碳纤维'}
    ],
    'alloyRoles': [
        {'alloyType': '碳钢 (45钢)', 'content': '0.42-0.50% C', 'role': '基体强化元素'},
        {'alloyType': '铸铁 (HT250)', 'content': '2.7-3.5% C', 'role': '基体元素 (石墨形态)'},
        {'alloyType': '碳纤维复合材料 (CFRP)', 'content': '~95% C', 'role': '增强纤维'}
    ],
    'processing': {
        'weldability': '碳含量直接影响焊接性：<0.25%焊接性良好；>0.35%需预热',
        'machinability': '碳钢可加工性随碳含量变化：低碳钢~60%，中碳钢~55%，高碳钢~45%',
        'formability': '低碳钢(<0.2%C)成形性优良；高碳钢成形性差',
        'heatTreatment': {
            'annealing': '完全退火 800-900°C炉冷', 'quenching': '820-860°C水/油淬',
            'tempering': '150-650°C空冷', 'note': '碳含量决定淬硬性，共析钢(0.77%C)淬硬性最高'
        },
        'note': '碳是钢铁材料最核心的合金元素，碳纤维是先进复合材料的基础'
    },
    'corrosionResistance': {
        'acidResistance': '石墨耐大多数酸；碳钢不耐酸', 'alkaliResistance': '石墨耐碱；碳钢耐碱性良好',
        'saltwaterResistance': '碳钢不耐海水腐蚀', 'corrosionRate': '碳钢 ~0.05-0.5 mm/年（大气环境）',
        'protectionMethods': ['涂漆', '镀锌', '合金化'],
        'note': '碳纤维耐腐蚀性极好；碳钢需防腐处理'
    },
    'applications': [
        {'name': '碳素结构钢', 'desc': 'Q235B用于建筑钢筋与型钢，产量占钢材60%以上'},
        {'name': '碳纤维复合材料', 'desc': 'T700/T800碳纤维用于飞机机身、风力叶片，拉伸强度4900 MPa'},
        {'name': '石墨电极', 'desc': '超高功率石墨电极用于电弧炉炼钢'},
        {'name': '金刚石工具', 'desc': 'PCD聚晶金刚石用于硬质合金刀具、钻头'},
        {'name': '铸铁件', 'desc': '灰铸铁HT250用于发动机缸体，球墨铸铁QT500用于曲轴'}
    ],
    'failureAnalysis': [
        {'mode': '淬火开裂', 'cause': '高碳钢淬火时体积变化产生高内应力', 'prevention': '控制冷却速度，及时回火'},
        {'mode': '回火脆性', 'cause': '杂质元素在晶界偏聚（第二类回火脆性）', 'prevention': '添加Mo 0.25-0.5%，快冷'},
        {'mode': '石墨化脆化', 'cause': '铸铁中碳化铁分解为石墨导致强度下降', 'prevention': '控制Si含量与热处理参数'}
    ]
}

ENG['N'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯氮 99.999%', 'equivalent': 'GB/T 8979 纯氮'}
    ],
    'alloyRoles': [
        {'alloyType': '高氮不锈钢', 'content': '0.3-0.6% N', 'role': '奥氏体稳定化元素'},
        {'alloyType': '渗氮钢 (38CrMoAl)', 'content': '表面渗N层0.3-0.5mm', 'role': '表面硬化元素'},
        {'alloyType': '氮化硅陶瓷 (Si₃N₄)', 'content': '~39% N', 'role': '陶瓷组分元素'}
    ],
    'processing': {
        'weldability': 'N/A（气体元素）；氮气用于焊接保护与退火气氛',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '气体氮化：500-580°C，氨气分解渗氮'},
        'note': '氮气用于保护气氛热处理、深冷处理、气体氮化'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '氮气惰性，用作保护气氛；氮离子可引起不锈钢点蚀'
    },
    'applications': [
        {'name': '气体氮化', 'desc': '38CrMoAl渗氮后表面硬度>950HV，用于精密机床主轴'},
        {'name': '保护气氛退火', 'desc': 'N₂+H₂气氛用于硅钢与不锈钢退火'},
        {'name': '深冷处理', 'desc': '液氮(-196°C)用于残余奥氏体稳定化处理'},
        {'name': '氮化硅陶瓷', 'desc': 'Si₃N₄陶瓷轴承耐高温1200°C，用于混合陶瓷轴承'},
        {'name': '高氮钢', 'desc': '含N 0.3-0.6%的高氮不锈钢屈服强度>1000 MPa，无磁'}
    ],
    'failureAnalysis': [
        {'mode': '氮致时效脆化', 'cause': '钢中游离氮在室温时效析出', 'prevention': '添加Al/Ti固定氮，控制氮含量'},
        {'mode': '渗氮层剥落', 'cause': '渗氮层与基体结合不良', 'prevention': '控制渗氮温度与时间，预处理调质'}
    ]
}

ENG['O'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '工业氧 99.5%', 'equivalent': 'GB/T 3863 工业用氧'}
    ],
    'alloyRoles': [
        {'alloyType': '钢脱氧', 'content': '微量 (残留<0.005%)', 'role': '有害杂质 — 需脱氧处理'},
        {'alloyType': '氧化铝陶瓷 (Al₂O₃)', 'content': '~47% O', 'role': '陶瓷组分元素'},
        {'alloyType': '二氧化锆 (ZrO₂)', 'content': '~26% O', 'role': '结构陶瓷组分'}
    ],
    'processing': {
        'weldability': 'N/A（气体元素）；氧气用于助燃（氧-乙炔焊/切割）',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '氧化退火用于去除表面碳与油污'},
        'note': '氧气用于炼钢吹氧、火焰切割、等离子切割'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '氧是金属氧化的元凶；控制含氧量是炼钢关键指标'
    },
    'applications': [
        {'name': '炼钢吹氧', 'desc': 'BOF转炉吹氧脱碳，每吨钢消耗~50m³氧气'},
        {'name': '火焰切割', 'desc': '氧-乙炔切割用于碳钢厚板下料，切割温度~3000°C'},
        {'name': '氧化铝陶瓷', 'desc': 'Al₂O₃陶瓷耐磨件、绝缘件、切削刀具'},
        {'name': '医用制氧', 'desc': 'PSA分子筛制氧用于医院集中供氧'}
    ],
    'failureAnalysis': [
        {'mode': '高温氧化', 'cause': '高温下金属与O₂反应生成氧化物', 'prevention': '抗氧化涂层，添加Cr/Al形成保护性氧化膜'},
        {'mode': '钢中氧化物夹杂', 'cause': '脱氧不完全，残留FeO/MnO', 'prevention': '充分脱氧（Al/Si），精炼控制'}
    ]
}

ENG['F'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': 'PTFE (聚四氟乙烯)', 'equivalent': 'GB/T 1190 PTFE树脂'}
    ],
    'alloyRoles': [
        {'alloyType': 'PTFE工程塑料', 'content': '76% F', 'role': '氟聚合物组分元素'},
        {'alloyType': '六氟化硫 (SF₆)', 'content': '100% SF₆', 'role': '电气绝缘气体'},
        {'alloyType': '氟化镁 (MgF₂)', 'content': '~61% F', 'role': '光学镀膜组分'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'PTFE加工需冷压烧结(370°C)'},
        'note': '氟主要用于含氟工程塑料与氟化处理'
    },
    'corrosionResistance': {
        'acidResistance': 'PTFE耐所有强酸（含王水）', 'alkaliResistance': 'PTFE耐所有强碱',
        'saltwaterResistance': 'PTFE极好', 'corrosionRate': 'PTFE ~0 mm/年',
        'protectionMethods': ['PTFE衬里', '氟碳涂层'],
        'note': 'PTFE是耐腐蚀性最好的工程材料之一'
    },
    'applications': [
        {'name': 'PTFE密封件', 'desc': '聚四氟乙烯用于耐腐蚀密封件、垫片，耐温-200~260°C'},
        {'name': 'PTFE轴承', 'desc': '填充PTFE用于无油润滑轴承，摩擦系数0.04'},
        {'name': '电气绝缘', 'desc': 'SF₆气体用于高压开关绝缘，介电强度为空气2.5倍'},
        {'name': '氟碳涂层', 'desc': 'PVDF涂层用于建筑铝板，耐候性>20年'}
    ],
    'failureAnalysis': [
        {'mode': 'PTFE冷流', 'cause': 'PTFE在持续载荷下发生冷流变形', 'prevention': '填充改性（玻璃纤维/碳纤维/青铜粉）'},
        {'mode': 'SF₆温室效应', 'cause': 'SF₆温室效应潜势为CO₂的23500倍', 'prevention': '开发环保替代绝缘气体'}
    ]
}

ENG['Ne'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯氖 99.99%', 'equivalent': 'GB/T 17862 纯氖'}
    ],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A（惰性气体）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '惰性气体'},
        'note': '氖气用于指示灯、激光器、低温制冷'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A（惰性气体）', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '惰性气体，不参与腐蚀反应'
    },
    'applications': [
        {'name': '氖灯指示灯', 'desc': '氖气充入玻璃管通电发光（橙红色），用于高压指示灯'},
        {'name': 'He-Ne激光器', 'desc': '氦氖激光器输出632.8nm红光，用于准直与干涉测量'},
        {'name': '低温制冷', 'desc': '液氖(27K)用于红外探测器冷却'}
    ],
    'failureAnalysis': []
}

# ═══ 第 3 周期 ═══════════════════════════════════════════

ENG['Na'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '工业钠 99.5%', 'equivalent': 'GB/T 22387 工业金属钠'}
    ],
    'alloyRoles': [
        {'alloyType': '钠铅合金', 'content': 'Pb-Na', 'role': '四乙基铅生产中间合金'},
        {'alloyType': '钠钾合金 (NaK)', 'content': '22-77% Na', 'role': '核反应堆冷却剂'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': '软金属，易切削', 'formability': '常温可挤压',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '钠在常温为液态/软固态'},
        'note': '钠极活泼，与水剧烈反应，必须隔绝空气与水'
    },
    'corrosionResistance': {
        'acidResistance': '极差（与酸剧烈反应）', 'alkaliResistance': 'N/A', 'saltwaterResistance': '极差',
        'corrosionRate': 'N/A', 'protectionMethods': ['惰性气氛', '矿物油封存'],
        'note': '钠在空气中迅速氧化'
    },
    'applications': [
        {'name': '快堆冷却剂', 'desc': '液钠用于钠冷快中子增殖反应堆(SFR)冷却剂，工作温度500-550°C'},
        {'name': '钠灯', 'desc': '高压钠灯发光效率~150 lm/W，用于道路照明'},
        {'name': 'NaK合金', 'desc': '钠钾合金常温液态，用于核反应堆冷却剂与热传导介质'},
        {'name': '化学还原', 'desc': '金属钠用于钛/锆冶炼（Kroll/Hunter法还原）'}
    ],
    'failureAnalysis': [
        {'mode': '钠火灾', 'cause': '钠泄漏接触空气/水燃烧', 'prevention': 'D类灭火器，惰性气氛覆盖'},
        {'mode': '钠腐蚀', 'cause': '液钠对结构材料产生质量迁移与腐蚀', 'prevention': '控制氧含量<10ppm，选用316不锈钢'}
    ]
}

ENG['Mg'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'AZ91D', 'equivalent': 'GB/T 19078 AZ91D压铸镁合金'},
        {'standard': 'ASTM', 'grade': 'AM60B', 'equivalent': 'GB/T 19078 AM60B镁合金'}
    ],
    'alloyRoles': [
        {'alloyType': '球墨铸铁', 'content': '0.03-0.06% Mg', 'role': '球化剂 — 石墨球化'},
        {'alloyType': '铝合金 (5083)', 'content': '4.0-4.9% Mg', 'role': '固溶强化元素'},
        {'alloyType': '镁合金 (AZ91D)', 'content': '9% Al, 1% Zn', 'role': '基体元素'}
    ],
    'processing': {
        'weldability': '中等（需惰性气体保护，TIG焊常用）',
        'machinability': '优良（切削能耗为钢的55%，易切削）',
        'formability': '中等（HCP结构，冷成形性差，热成形性好>200°C）',
        'heatTreatment': {
            'annealing': '300-350°C空冷', 'quenching': '410°C水淬（固溶）',
            'tempering': '170°C人工时效', 'note': 'AZ91D可T6热处理：410°C固溶+170°C时效'
        },
        'note': '镁合金密度1.8 g/cm³，是最轻的结构金属'
    },
    'corrosionResistance': {
        'acidResistance': '差（不耐大多数酸）', 'alkaliResistance': '良好（耐碱）',
        'saltwaterResistance': '差（氯离子加速腐蚀）', 'corrosionRate': '~0.1-1.0 mm/年（大气环境）',
        'protectionMethods': ['阳极氧化', '化学转化膜', '微弧氧化', '表面涂层'],
        'note': '镁合金耐腐蚀性较差，需表面处理'
    },
    'applications': [
        {'name': '汽车轻量化', 'desc': 'AZ91D用于方向盘骨架、仪表盘支架，减重30-50%'},
        {'name': '航空铸件', 'desc': 'WE43镁合金用于直升机齿轮箱，减重25%'},
        {'name': '3C产品外壳', 'desc': 'AZ91D用于笔记本电脑/手机外壳（散热好、轻量）'},
        {'name': '球墨铸铁球化剂', 'desc': 'Mg添加使石墨球化，QT500-7用于曲轴'},
        {'name': '牺牲阳极', 'desc': '镁牺牲阳极用于地下管道阴极保护'}
    ],
    'failureAnalysis': [
        {'mode': '电偶腐蚀', 'cause': '镁电位低，与钢/铜接触时加速腐蚀', 'prevention': '绝缘隔离，避免异种金属接触'},
        {'mode': '应力腐蚀开裂', 'cause': '拉应力+腐蚀介质（含氯离子）', 'prevention': '消除残余应力，表面处理'},
        {'mode': '镁燃烧', 'cause': '镁粉/屑接触火源燃烧（3000°C）', 'prevention': '禁水灭火，用D类灭火器或干砂覆盖'}
    ]
}

ENG['Al'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': '6061-T6', 'equivalent': 'GB/T 3190 6061-T6'},
        {'standard': 'ASTM', 'grade': '7075-T6', 'equivalent': 'GB/T 3190 7075-T6'},
        {'standard': 'ASTM', 'grade': '5083-H32', 'equivalent': 'GB/T 3190 5083-H32'}
    ],
    'alloyRoles': [
        {'alloyType': '铝硅合金 (A356)', 'content': '6.5-7.5% Si', 'role': '铸造合金基体元素'},
        {'alloyType': '铝锂合金 (2099)', 'content': '93-95% Al', 'role': '航空合金基体元素'},
        {'alloyType': '锌铝合金 (ZA27)', 'content': '27% Al', 'role': '基体元素'}
    ],
    'processing': {
        'weldability': '良好（TIG/MIG焊，6061可焊性优良；7075可焊性较差）',
        'machinability': '良好（2024/7075可加工性优于6061）',
        'formability': '优良（O态可深冲；T6态成形性降低）',
        'heatTreatment': {
            'annealing': '415°C炉冷', 'quenching': '530°C水淬（固溶处理）',
            'tempering': '175°C人工时效（T6）', 'note': '铝合金热处理：固溶+时效是核心工艺，T6态强度最高'
        },
        'note': '铝合金密度2.7 g/cm³，强度/密度比优于钢'
    },
    'corrosionResistance': {
        'acidResistance': '差（不耐盐酸等强酸）', 'alkaliResistance': '差（碱溶解氧化膜）',
        'saltwaterResistance': '中等（5083耐海水；2024不耐海水）',
        'corrosionRate': '~0.001-0.02 mm/年（大气环境）',
        'protectionMethods': ['阳极氧化', '电泳涂装', '聚酯涂层', '包铝'],
        'note': '铝表面天然氧化膜提供良好耐腐蚀性，阳极氧化可增强'
    },
    'applications': [
        {'name': '航空结构', 'desc': '7075-T6用于飞机蒙皮、翼梁，σb>500 MPa，密度仅2.81'},
        {'name': '汽车车身', 'desc': '6016-T4用于汽车外板，冲压成形后烤漆硬化'},
        {'name': '船舶结构', 'desc': '5083-H32用于船体与上层建筑，耐海水腐蚀'},
        {'name': '建筑型材', 'desc': '6063-T5用于门窗/幕墙型材，阳极氧化后耐候性>30年'},
        {'name': '高压导线', 'desc': '钢芯铝绞线(LGJ)用于远距离输电'}
    ],
    'failureAnalysis': [
        {'mode': '疲劳断裂', 'cause': '交变载荷下疲劳裂纹萌生（无明确疲劳极限）', 'prevention': '喷丸强化，避免应力集中'},
        {'mode': '应力腐蚀开裂', 'cause': '拉应力+腐蚀介质（7075-T6在海边易SCC）', 'prevention': 'T73过时效处理，降低SCC敏感性'},
        {'mode': '剥落腐蚀', 'cause': '沿晶腐蚀导致层状剥落', 'prevention': '控制晶粒形状，均匀化退火'}
    ]
}

ENG['Si'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '多晶硅 99.9999%', 'equivalent': 'GB/T 12963 高纯硅'},
        {'standard': 'ASTM', 'grade': '硅钢 (无取向)', 'equivalent': 'GB/T 2521 无取向硅钢'}
    ],
    'alloyRoles': [
        {'alloyType': '硅钢 (50W470)', 'content': '1.5-3.0% Si', 'role': '磁性能改善元素'},
        {'alloyType': '铸铝合金 (A356)', 'content': '6.5-7.5% Si', 'role': '共晶组织改善元素'},
        {'alloyType': '硅青铜 (C65500)', 'content': '3% Si', 'role': '固溶强化元素'},
        {'alloyType': '碳化硅 (SiC)', 'content': '~70% Si', 'role': '结构陶瓷组分'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）；硅钢可焊性随Si含量增加而降低',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '硅钢需退火（800-850°C）改善磁性能'},
        'note': '硅是半导体与硅钢的核心元素'
    },
    'corrosionResistance': {
        'acidResistance': '耐大多数酸（不耐氢氟酸）', 'alkaliResistance': '不耐强碱',
        'saltwaterResistance': '良好', 'corrosionRate': 'N/A',
        'protectionMethods': [],
        'note': '硅化学稳定性高'
    },
    'applications': [
        {'name': '半导体芯片', 'desc': '99.9999%多晶硅制造单晶硅片，全球年产能>500万吨'},
        {'name': '取向硅钢', 'desc': '30Q120用于变压器铁芯，铁损<1.20 W/kg'},
        {'name': '铸造铝合金', 'desc': 'A356-Si共晶合金用于汽车轮毂，流动性好'},
        {'name': '碳化硅陶瓷', 'desc': 'SiC用于耐磨件、半导体功率器件'},
        {'name': '太阳能电池', 'desc': '多晶硅/单晶硅太阳能电池效率15-26%'}
    ],
    'failureAnalysis': [
        {'mode': '硅钢磁时效', 'cause': '杂质碳氮在时效中析出导致磁性能下降', 'prevention': '控制C<0.003%，N<0.003%，高温退火'},
        {'mode': '硅片翘曲', 'cause': '热处理中应力释放导致晶圆翘曲', 'prevention': '控制温度梯度，退火工艺优化'}
    ]
}

ENG['P'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '赤磷 99%', 'equivalent': 'GB/T 4947 赤磷'}
    ],
    'alloyRoles': [
        {'alloyType': '磷脱氧铜 (TP2)', 'content': '0.015-0.04% P', 'role': '脱氧剂'},
        {'alloyType': '磷青铜 (QSn6.5-0.1)', 'content': '0.1-0.25% P', 'role': '脱氧+固溶强化'},
        {'alloyType': '易切削钢', 'content': '0.04-0.09% P', 'role': '固溶强化+改善切削性'},
        {'alloyType': '磷酸盐转化膜', 'content': '表面磷化层', 'role': '表面处理'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）；P含量高时降低钢焊接性',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '磷化处理：40-80°C，磷酸盐化学转化'},
        'note': '磷用于钢脱氧、磷化表面处理、阻燃剂'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '磷化膜提供底层防锈，磷酸盐转化膜为涂装基底'
    },
    'applications': [
        {'name': '磷化处理', 'desc': '钢铁表面磷化（锌系/锰系）用于涂装前处理与防锈'},
        {'name': '磷青铜弹簧', 'desc': 'QSn6.5-0.1弹性极限高，用于精密弹簧与接插件'},
        {'name': '阻燃剂', 'desc': '聚磷酸铵(APP)用于膨胀型阻燃涂料'},
        {'name': '磷脱氧铜管', 'desc': 'TP2铜管用于空调与水暖管路'}
    ],
    'failureAnalysis': [
        {'mode': '磷冷脆', 'cause': '钢中P含量偏高使韧脆转变温度升高', 'prevention': '控制P<0.025%（优质钢<0.015%）'}
    ]
}

ENG['S'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '硫磺 99.5%', 'equivalent': 'GB/T 2449 工业硫磺'}
    ],
    'alloyRoles': [
        {'alloyType': '易切削钢 (Y15)', 'content': '0.20-0.33% S', 'role': '改善切削性（MnS夹杂）'},
        {'alloyType': '易切削黄铜', 'content': '0.5-3.0% Pb+S', 'role': '改善切削性'},
        {'alloyType': '硫化橡胶', 'content': 'S 1-5%', 'role': '交联剂（硫化）'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）；S含量高时严重降低钢焊接性',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '橡胶硫化：140-180°C，S交联'},
        'note': '硫在钢中为有害元素（易切削钢除外），在橡胶中为硫化剂'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'S在钢中形成MnS夹杂引起点蚀；H₂S引起应力腐蚀'
    },
    'applications': [
        {'name': '易切削钢', 'desc': 'Y15硫磷易切削钢用于自动车床零件，可加工性提高40%'},
        {'name': '橡胶硫化', 'desc': '硫磺是橡胶硫化的核心交联剂，使天然橡胶强度提高10倍'},
        {'name': '硫酸', 'desc': '硫酸是最大宗工业化学品，年产>2.5亿吨'},
        {'name': '硫磺混凝土', 'desc': '硫磺混凝土耐酸耐盐，用于化工厂地坪'}
    ],
    'failureAnalysis': [
        {'mode': '热脆性', 'cause': '钢中FeS在晶界形成低熔点共晶(988°C)', 'prevention': '添加Mn形成MnS（高熔点1610°C），控制S<0.03%'},
        {'mode': '硫化氢应力腐蚀 (SSC)', 'cause': 'H₂S环境中高强度钢发生SCC', 'prevention': '选用抗 SSC 材料，硬度<22HRC'}
    ]
}

ENG['Cl'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '液氯 99.5%', 'equivalent': 'GB/T 5138 工业液氯'}
    ],
    'alloyRoles': [
        {'alloyType': 'PVC (聚氯乙烯)', 'content': '~57% Cl', 'role': '聚合物组分元素'},
        {'alloyType': '氯化聚乙烯 (CPE)', 'content': '25-42% Cl', 'role': '橡胶改性剂'},
        {'alloyType': '氯丁橡胶 (CR)', 'content': '~40% Cl', 'role': '合成橡胶组分'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'PVC加工温度160-200°C'},
        'note': '氯是PVC等含氯工程塑料的核心组分'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '氯离子引起不锈钢点蚀与应力腐蚀开裂'
    },
    'applications': [
        {'name': 'PVC管材', 'desc': '聚氯乙烯管用于给排水，年产量>2000万吨'},
        {'name': '水处理', 'desc': '氯气用于自来水消毒与工业废水处理'},
        {'name': '氯化钛', 'desc': 'TiCl₄是Kroll法生产海绵钛的中间产物'},
        {'name': '氯丁橡胶', 'desc': 'CR耐油耐老化，用于密封件与电缆护套'}
    ],
    'failureAnalysis': [
        {'mode': '不锈钢点蚀', 'cause': 'Cl⁻破坏不锈钢钝化膜引起局部腐蚀', 'prevention': '选用高Cr/Mo/Mo不锈钢（如316L/904L），控制Cl⁻浓度'},
        {'mode': 'PVC热降解', 'cause': 'PVC加热>200°C释放HCl气体', 'prevention': '添加热稳定剂（铅盐/有机锡/钙锌）'}
    ]
}

ENG['Ar'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯氩 99.999%', 'equivalent': 'GB/T 4842 纯氩'}
    ],
    'alloyRoles': [
        {'alloyType': '不锈钢焊接', 'content': '保护气 (纯Ar或Ar+2%O₂)', 'role': '焊接保护气'},
        {'alloyType': '钛合金冶炼', 'content': 'Ar保护气氛', 'role': '惰性保护气'}
    ],
    'processing': {
        'weldability': 'N/A（气体元素）；Ar是TIG/MIG焊接最常用保护气',
        'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'Ar用于真空热处理回填气与保护气氛'},
        'note': '氩气是最常用的焊接保护气与热处理保护气'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A（惰性气体）', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '惰性气体，不参与腐蚀反应'
    },
    'applications': [
        {'name': 'TIG焊接', 'desc': 'Ar保护TIG焊用于不锈钢/钛/铝合金焊接，焊缝质量优良'},
        {'name': '氩氧脱碳 (AOD)', 'desc': 'AOD精炼法生产不锈钢，Ar+O₂混合吹炼'},
        {'name': '热处理保护', 'desc': 'Ar用于钛合金/高温合金退火保护气氛'},
        {'name': '氩气刀', 'desc': '氩气用于钢板镀锌后气刀吹除多余锌液'}
    ],
    'failureAnalysis': [
        {'mode': '保护不良', 'cause': 'Ar流量不足或保护范围不够导致焊缝氧化', 'prevention': '优化气体流量与喷嘴设计'}
    ]
}

# ═══ 第 4 周期 ═══════════════════════════════════════════

ENG['K'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '金属钾 98%', 'equivalent': 'GB/T 22388 工业金属钾'}
    ],
    'alloyRoles': [
        {'alloyType': 'NaK合金', 'content': '40-90% K', 'role': '核反应堆冷却剂'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': '软金属', 'formability': '常温可变形',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '钾极活泼'},
        'note': '钾极活泼，与水剧烈反应'
    },
    'corrosionResistance': {
        'acidResistance': '极差', 'alkaliResistance': 'N/A', 'saltwaterResistance': '极差',
        'corrosionRate': 'N/A', 'protectionMethods': ['惰性气氛', '矿物油封存'],
        'note': '钾在空气中迅速氧化'
    },
    'applications': [
        {'name': 'NaK冷却剂', 'desc': 'NaK合金用于快中子反应堆冷却剂'},
        {'name': '钾盐肥料', 'desc': 'KCl用于钾肥，全球年产量>3000万吨'},
        {'name': '钾玻璃', 'desc': 'K₂O用于光学玻璃（钾玻璃），折射率高'},
        {'name': '钾原子钟', 'desc': '铷钾原子钟用于精密时间测量'}
    ],
    'failureAnalysis': [
        {'mode': '钾火灾', 'cause': '钾泄漏接触空气/水燃烧', 'prevention': 'D类灭火器，惰性气氛覆盖'}
    ]
}

ENG['Ca'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '金属钙 98.5%', 'equivalent': 'GB/T 4864 工业钙'}
    ],
    'alloyRoles': [
        {'alloyType': '钙处理钢', 'content': '0.002-0.006% Ca', 'role': '夹杂物变质处理'},
        {'alloyType': '铅钙合金', 'content': '0.04-0.08% Ca', 'role': '蓄电池板栅合金'},
        {'alloyType': '镁钙合金', 'content': '0.5-2% Ca', 'role': '改善耐热性'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '钙作为脱氧/脱硫剂'},
        'note': '钙主要用于钢铁脱氧脱硫与夹杂物控制'
    },
    'corrosionResistance': {
        'acidResistance': '极差', 'alkaliResistance': 'N/A', 'saltwaterResistance': '极差',
        'corrosionRate': 'N/A', 'protectionMethods': ['惰性气氛'],
        'note': '钙在空气中缓慢氧化'
    },
    'applications': [
        {'name': '钙处理钢', 'desc': 'Ca处理使MnS夹杂物变为球形，改善各向异性与焊接性'},
        {'name': '铅酸蓄电池', 'desc': 'Pb-Ca合金板栅免维护蓄电池，自放电低'},
        {'name': '脱氧脱硫', 'desc': 'CaSi线喂入钢液脱氧脱硫，S<10ppm'},
        {'name': '钙基润滑脂', 'desc': '钙基脂耐水性好，用于汽车底盘润滑'}
    ],
    'failureAnalysis': [
        {'mode': '钙蒸发', 'cause': 'Ca沸点1484°C接近钢液温度', 'prevention': '采用喂线法深部加入'}
    ]
}

ENG['Sc'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'Sc-Al合金', 'equivalent': 'GB/T 参照铝钪合金标准'}
    ],
    'alloyRoles': [
        {'alloyType': '铝钪合金 (Sc-AL)', 'content': '0.1-0.5% Sc', 'role': '晶粒细化+沉淀强化'},
        {'alloyType': '钪镁合金', 'content': '~0.3% Sc', 'role': '提高再结晶温度'}
    ],
    'processing': {
        'weldability': '铝钪合金焊接性优良', 'machinability': '良好（以铝合金形式加工）',
        'formability': '优良',
        'heatTreatment': {'annealing': '300-350°C', 'quenching': '530°C水淬', 'tempering': '180°C时效', 'note': 'Al₃Sc沉淀相强化'},
        'note': '钪以Al₃Sc纳米沉淀相提高铝合金强度与焊接性'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '中等', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': ['阳极氧化'],
        'note': '钪合金耐腐蚀性与铝合金相当'
    },
    'applications': [
        {'name': '航天铝合金', 'desc': 'Al-Mg-Sc合金用于航天器焊接结构，强度>500 MPa'},
        {'name': '3D打印', 'desc': 'Scalmalloy® (Al-Mg-Sc)用于增材制造，抗拉强度520 MPa'},
        {'name': '金属卤化物灯', 'desc': 'ScI₃用于金属卤化物灯，显色指数Ra>90'},
        {'name': '固体氧化物燃料电池', 'desc': 'Sc稳定ZrO₂电解质(SZrO₂)用于SOFC'}
    ],
    'failureAnalysis': [
        {'mode': '成本限制', 'cause': '钪价格极高(~¥5000/g)，限制大规模应用', 'prevention': '开发回收工艺，减少添加量'}
    ]
}

ENG['Ti'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'Grade 2 (CP Ti)', 'equivalent': 'GB/T 3620 TA2'},
        {'standard': 'ASTM', 'grade': 'Grade 5 (Ti-6Al-4V)', 'equivalent': 'GB/T 3620 TC4'},
        {'standard': 'ASTM', 'grade': 'Grade 9 (Ti-3Al-2.5V)', 'equivalent': 'GB/T 3620 TA18'}
    ],
    'alloyRoles': [
        {'alloyType': '钛合金 (TC4)', 'content': '6% Al, 4% V', 'role': '基体元素'},
        {'alloyType': '微合金钢', 'content': '0.02-0.06% Ti', 'role': '细化晶粒+析出强化'},
        {'alloyType': '镍钛记忆合金', 'content': '~50% Ti', 'role': '基体元素 — 形状记忆'}
    ],
    'processing': {
        'weldability': '良好（需Ar保护，TIG焊/电子束焊）',
        'machinability': '差（导热性低、化学活性高，刀具磨损快）',
        'formability': '中等（室温成形性有限，热成形性好>600°C）',
        'heatTreatment': {
            'annealing': '700-800°C空冷', 'quenching': '980-1030°C水淬',
            'tempering': '480-600°C时效', 'note': 'α+β钛合金通过固溶时效显著强化'
        },
        'note': '钛密度4.5 g/cm³，比强度高于钢和铝；高温易吸氢吸氧'
    },
    'corrosionResistance': {
        'acidResistance': '优良（耐氧化性酸；不耐还原性酸如HCl/HF）',
        'alkaliResistance': '良好', 'saltwaterResistance': '极好（耐海水腐蚀优于所有结构金属）',
        'corrosionRate': '~0.001 mm/年（海水环境）',
        'protectionMethods': ['阳极氧化', '微弧氧化', 'PVD涂层'],
        'note': '钛表面致密TiO₂钝化膜提供极好耐腐蚀性'
    },
    'applications': [
        {'name': '航空航天', 'desc': 'TC4用于飞机发动机压气机叶片，占发动机重量的1/3'},
        {'name': '化工设备', 'desc': 'TA2用于换热器、反应釜，耐蚀寿命>20年'},
        {'name': '医用植入物', 'desc': 'TA2/TC4用于人工关节、骨板，生物相容性好'},
        {'name': '海洋工程', 'desc': '钛合金用于深潜器耐压壳体、海水管路'},
        {'name': '体育用品', 'desc': '钛合金用于高尔夫球头、自行车架'}
    ],
    'failureAnalysis': [
        {'mode': '氢脆', 'cause': '氢渗入钛晶格导致脆化', 'prevention': '控制加工环境湿度，避免酸洗析氢'},
        {'mode': '疲劳断裂', 'cause': '交变载荷下裂纹萌生', 'prevention': '喷丸强化，表面滚压'},
        {'mode': '高温氧化', 'cause': '>600°C时氧化加速', 'prevention': '表面涂层（Al₂O₃/贵金属）'}
    ]
}

ENG['V'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'V-4Cr-4Ti', 'equivalent': '核级钒合金'},
        {'standard': '工业级', 'grade': 'V₂O₅ 99%', 'equivalent': 'GB/T 3253 五氧化二钒'}
    ],
    'alloyRoles': [
        {'alloyType': '钒微合金钢 (V-N钢)', 'content': '0.04-0.12% V', 'role': '析出强化(V(C,N))'},
        {'alloyType': '工具钢 (Cr12MoV)', 'content': '0.15-0.30% V', 'role': '耐磨碳化物形成元素'},
        {'alloyType': '钛合金 (Ti-6Al-4V)', 'content': '4% V', 'role': 'β相稳定化元素'}
    ],
    'processing': {
        'weldability': '钒合金焊接性中等', 'machinability': '中等',
        'formability': '中等',
        'heatTreatment': {'annealing': '800-900°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '钒钢中V(C,N)析出强化'},
        'note': '钒主要作为微合金化元素提高钢强度'
    },
    'corrosionResistance': {
        'acidResistance': '耐非氧化性酸', 'alkaliResistance': '良好', 'saltwaterResistance': '良好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': [],
        'note': '钒耐腐蚀性良好'
    },
    'applications': [
        {'name': '钒微合金钢', 'desc': 'HRB400E钒氮钢筋用于建筑抗震结构，屈服强度>400 MPa'},
        {'name': '工具钢', 'desc': 'Cr12MoV用于冷作模具，HRC60，耐磨性好'},
        {'name': '全钒液流电池', 'desc': 'V²⁺/V³⁺与V⁴⁺/V⁵⁺氧化还原对用于大规模储能'},
        {'name': '钛合金', 'desc': 'Ti-6Al-4V中V稳定β相改善热处理响应'}
    ],
    'failureAnalysis': [
        {'mode': '钒致回火脆', 'cause': '钒碳化物粗化导致强度下降', 'prevention': '控制回火温度与时间'},
        {'mode': 'V₂O₅中毒', 'cause': 'V₂O₅粉尘有毒，吸入损害呼吸系统', 'prevention': '通风防护，控制排放'}
    ]
}

ENG['Cr'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'AISI 304 (S30400)', 'equivalent': 'GB/T 20878 06Cr19Ni10'},
        {'standard': 'ASTM', 'grade': 'AISI 316L (S31603)', 'equivalent': 'GB/T 20878 022Cr17Ni12Mo2'},
        {'standard': 'ASTM', 'grade': 'AISI 410 (S41000)', 'equivalent': 'GB/T 20878 12Cr13'}
    ],
    'alloyRoles': [
        {'alloyType': '不锈钢 (304)', 'content': '18-20% Cr', 'role': '钝化膜形成元素'},
        {'alloyType': '工具钢 (D2)', 'content': '11-13% Cr', 'role': '耐磨碳化物形成元素'},
        {'alloyType': '镍基合金 (Inconel 718)', 'content': '17-21% Cr', 'role': '抗氧化+固溶强化'},
        {'alloyType': '镀铬层', 'content': '表面Cr镀层', 'role': '硬铬镀层耐磨'}
    ],
    'processing': {
        'weldability': '304/316L焊接性优良；410焊接性中等（需预热）',
        'machinability': '304可加工性~45%（加工硬化严重）；303(含S)~65%',
        'formability': '304成形性优良（深冲性能好）；410成形性中等',
        'heatTreatment': {
            'annealing': '1010-1150°C快冷（固溶退火）', 'quenching': '410钢980°C油淬',
            'tempering': '410钢150-650°C回火', 'note': '奥氏体不锈钢需固溶处理；马氏体不锈钢需淬火回火'
        },
        'note': 'Cr是决定不锈钢耐腐蚀性的核心元素，含量>10.5%即形成钝化膜'
    },
    'corrosionResistance': {
        'acidResistance': '耐氧化性酸（硝酸）；不耐还原性酸（盐酸）',
        'alkaliResistance': '良好', 'saltwaterResistance': '316L优良（含Mo耐点蚀）',
        'corrosionRate': '~0.001 mm/年（大气环境）',
        'protectionMethods': ['钝化处理', '固溶退火', '合金化(Mo/Ni)'],
        'note': 'Cr含量≥10.5%即可自钝化，是不锈钢的基础'
    },
    'applications': [
        {'name': '不锈钢', 'desc': '304/316L用于化工设备、食品机械、建筑装饰，全球年产>5000万吨'},
        {'name': '镀铬', 'desc': '硬铬镀层硬度HV900-1100，用于液压缸内壁、活塞环'},
        {'name': '工具钢', 'desc': 'D2/Cr12MoV用于冷作模具，HRC60-62'},
        {'name': '镍基高温合金', 'desc': 'Inconel 718用于航空发动机涡轮盘'},
        {'name': '不锈钢钢筋', 'desc': '双相不锈钢2205用于海洋桥梁钢筋'}
    ],
    'failureAnalysis': [
        {'mode': '晶间腐蚀', 'cause': 'Cr₂₃C₆在450-850°C析出导致晶界贫Cr', 'prevention': '低碳(L型)、加Ti/Nb稳定化、固溶处理'},
        {'mode': '点蚀', 'cause': 'Cl⁻破坏钝化膜', 'prevention': '添加Mo（316含2-3% Mo），提高Cr/Ni含量'},
        {'mode': '应力腐蚀开裂', 'cause': 'Cl⁻+拉应力+温度>60°C', 'prevention': '降低残余应力，选用双相不锈钢或高Ni合金'}
    ]
}

ENG['Mn'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'Hadfield钢', 'equivalent': 'GB/T 5680 ZGMn13'}
    ],
    'alloyRoles': [
        {'alloyType': '高锰钢 (ZGMn13)', 'content': '11-14% Mn', 'role': '基体元素 — 加工硬化'},
        {'alloyType': '低合金钢 (Q345)', 'content': '1.0-1.6% Mn', 'role': '固溶强化元素'},
        {'alloyType': '不锈钢 (200系)', 'content': '5.5-10% Mn', 'role': 'Ni替代元素'},
        {'alloyType': '黄铜 (HMn58-2)', 'content': '2% Mn', 'role': '固溶强化+耐蚀性改善'}
    ],
    'processing': {
        'weldability': '低合金钢焊接性良好；高锰钢焊接需特殊工艺',
        'machinability': '高锰钢可加工性极差（加工硬化）；低合金钢可加工性~60%',
        'formability': '低合金钢成形性良好；高锰钢热成形性好',
        'heatTreatment': {
            'annealing': '高锰钢1050-1100°C水韧处理', 'quenching': 'N/A',
            'tempering': '高锰钢不可回火（析出脆化）', 'note': '高锰钢水韧处理获得单一奥氏体，使用中加工硬化'
        },
        'note': 'Mn是钢铁中最常用的合金元素，兼具脱氧脱硫功能'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '良好', 'saltwaterResistance': '中等',
        'corrosionRate': '~0.05-0.2 mm/年', 'protectionMethods': ['涂漆', '镀层'],
        'note': 'Mn本身不形成钝化膜，耐腐蚀性取决于合金体系'
    },
    'applications': [
        {'name': '高锰钢耐磨件', 'desc': 'ZGMn13用于破碎机颚板、铁路道岔，冲击硬化后HRC>50'},
        {'name': '低合金结构钢', 'desc': 'Q345B用于桥梁与建筑结构，屈服强度345 MPa'},
        {'name': '200系不锈钢', 'desc': '201(含Mn 5.5-7.5%)用于装饰、厨房用具，Ni含量低成本低'},
        {'name': '电池正极', 'desc': '锰酸锂(LiMn₂O₄)用于动力电池正极材料'},
        {'name': '铝锰合金', 'desc': '3003铝锰合金用于热交换器翅片'}
    ],
    'failureAnalysis': [
        {'mode': '高锰钢开裂', 'cause': '水韧处理冷却不足导致碳化物析出脆化', 'prevention': '加快水冷速度，薄壁件设计'},
        {'mode': '锰毒', 'cause': '锰粉/烟尘吸入引起锰中毒（帕金森样症状）', 'prevention': '通风除尘，职业暴露限值0.02 mg/m³'}
    ]
}

ENG['Fe'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'A36', 'equivalent': 'GB/T 700 Q235'},
        {'standard': 'ASTM', 'grade': 'AISI 1018', 'equivalent': 'GB/T 699 20钢'},
        {'standard': 'ASTM', 'grade': 'AISI 1045', 'equivalent': 'GB/T 699 45钢'},
        {'standard': 'ASTM', 'grade': 'AISI 4140', 'equivalent': 'GB/T 3077 42CrMo'},
        {'standard': 'EN', 'grade': 'S355J2', 'equivalent': 'GB/T 1591 Q355'}
    ],
    'alloyRoles': [
        {'alloyType': '碳钢 (Q235)', 'content': '>98% Fe', 'role': '基体元素'},
        {'alloyType': '不锈钢 (304)', 'content': '~70% Fe', 'role': '基体元素'},
        {'alloyType': '铸铁 (HT250)', 'content': '~94% Fe', 'role': '基体元素'},
        {'alloyType': '电工纯铁 (DT4)', 'content': '>99.5% Fe', 'role': '基体元素 — 软磁'}
    ],
    'processing': {
        'weldability': '优良（低碳钢可焊性好；高碳钢需预热）',
        'machinability': '良好（B1112为基准，碳钢约60-70%）',
        'formability': '优良（可冷热加工成形）',
        'heatTreatment': {
            'annealing': '850-900°C炉冷', 'quenching': '840-870°C水淬',
            'tempering': '150-650°C空冷', 'note': '淬透性随碳含量增加而提高'
        },
        'note': '加工参数随合金成分变化较大'
    },
    'corrosionResistance': {
        'acidResistance': '在非氧化性酸中腐蚀严重；在氧化性酸中可钝化',
        'alkaliResistance': '耐碱性良好', 'saltwaterResistance': '易发生电化学腐蚀，需涂覆或阴极保护',
        'corrosionRate': '~0.05-0.5 mm/年（大气环境）',
        'protectionMethods': ['涂漆', '镀锌', '阴极保护', '合金化(添加Cr/Ni)'],
        'note': '耐腐蚀性可通过合金化和表面处理大幅提升'
    },
    'applications': [
        {'name': '建筑结构钢', 'desc': 'Q235B用于建筑钢筋、型钢，占钢材产量60%以上'},
        {'name': '汽车车身', 'desc': 'DC04冷轧钢板用于汽车外板，要求良好冲压成形性'},
        {'name': '桥梁结构', 'desc': 'Q345qE用于桥梁主体结构，要求低温韧性'},
        {'name': '压力容器', 'desc': 'Q345R用于锅炉和压力容器，需满足GB 150标准'},
        {'name': '轴承钢', 'desc': 'GCr15用于滚动轴承，HRC62，疲劳寿命>10⁶次'}
    ],
    'failureAnalysis': [
        {'mode': '疲劳断裂', 'cause': '交变载荷下裂纹萌生与扩展', 'prevention': '避免应力集中，表面强化处理'},
        {'mode': '应力腐蚀开裂', 'cause': '拉应力+特定介质(如Cl⁻)', 'prevention': '消除残余应力，选用耐SCC材料'},
        {'mode': '腐蚀减薄', 'cause': '电化学腐蚀导致壁厚减薄', 'prevention': '定期检测壁厚，防腐涂覆'}
    ]
}

ENG['Co'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'F75 (Co-Cr-Mo)', 'equivalent': 'GB/T 17168 钴铬钼合金'},
        {'standard': 'ASTM', 'grade': 'Stellite 6B', 'equivalent': 'GB/T 参照司太立合金标准'}
    ],
    'alloyRoles': [
        {'alloyType': '硬质合金 (YG8)', 'content': '8% Co', 'role': '粘结相'},
        {'alloyType': '高温合金 (Rene 88)', 'content': '12-14% Co', 'role': '固溶强化元素'},
        {'alloyType': '钴铬合金 (F75)', 'content': '~64% Co', 'role': '基体元素'},
        {'alloyType': '钐钴磁体 (SmCo₅)', 'content': '~66% Co', 'role': '基体元素 — 硬磁'}
    ],
    'processing': {
        'weldability': '中等（F75焊接需特殊工艺）', 'machinability': '差（加工硬化严重）',
        'formability': '中等（热加工为主）',
        'heatTreatment': {
            'annealing': '1050-1150°C固溶', 'quenching': 'N/A', 'tempering': 'N/A',
            'note': 'F75铸态使用或固溶处理；司太立合金堆焊'
        },
        'note': '钴合金高温强度优异，耐磨性极好'
    },
    'corrosionResistance': {
        'acidResistance': '良好（耐磷酸、盐酸）', 'alkaliResistance': '良好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': [],
        'note': '钴铬合金耐腐蚀性极好，适用于人体植入'
    },
    'applications': [
        {'name': '硬质合金', 'desc': 'YG8/YT15用于切削刀具与矿用钻头，WC-Co硬质合金HRA91-93'},
        {'name': '航空高温合金', 'desc': 'Rene 88DT用于涡轮盘，使用温度650-750°C'},
        {'name': '医用植入物', 'desc': 'F75钴铬钼合金用于人工髋关节，耐磨性优于钛'},
        {'name': '磁性材料', 'desc': 'SmCo₅/Sm₂Co₁₇永磁体使用温度>350°C'},
        {'name': '司太立合金', 'desc': 'Stellite 6B用于阀门密封面堆焊，耐高温磨损'}
    ],
    'failureAnalysis': [
        {'mode': '钴毒性', 'cause': '钴粉尘吸入引起钴肺病', 'prevention': '通风除尘，职业暴露限值0.02 mg/m³'},
        {'mode': 'WC-Co脱钴', 'cause': '硬质合金在腐蚀介质中Co粘结相溶出', 'prevention': '表面涂层(TiN/Al₂O₃)'}
    ]
}

ENG['Ni'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'N06625 (Inconel 625)', 'equivalent': 'GB/T 15007 NS3306'},
        {'standard': 'ASTM', 'grade': 'N07718 (Inconel 718)', 'equivalent': 'GB/T 15007 GH4169'},
        {'standard': 'ASTM', 'grade': 'N04400 (Monel 400)', 'equivalent': 'GB/T 15007 MCu-28-1.5-1.8'}
    ],
    'alloyRoles': [
        {'alloyType': '不锈钢 (304)', 'content': '8-12% Ni', 'role': '奥氏体稳定化元素'},
        {'alloyType': '镍基合金 (Inconel 718)', 'content': '50-55% Ni', 'role': '基体元素'},
        {'alloyType': ' Monel 400', 'content': '~67% Ni', 'role': '基体元素'},
        {'alloyType': '镍钛记忆合金', 'content': '~50% Ni', 'role': '基体元素'}
    ],
    'processing': {
        'weldability': 'Inconel 625焊接性优良；718焊接性中等（易开裂）',
        'machinability': '差（加工硬化严重，刀具磨损快）',
        'formability': '中等（热加工为主，冷成形困难）',
        'heatTreatment': {
            'annealing': '980°C固溶', 'quenching': '718: 980°C水淬',
            'tempering': '718: 720°C+620°C双时效', 'note': 'Inconel 718通过γ′/γ″沉淀相强化'
        },
        'note': '镍基合金是航空发动机热端部件的核心材料'
    },
    'corrosionResistance': {
        'acidResistance': '优良（耐盐酸、磷酸、氢氟酸）', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': [],
        'note': '镍基合金耐腐蚀性极好，尤其耐氯离子腐蚀'
    },
    'applications': [
        {'name': '航空发动机', 'desc': 'Inconel 718占现代航空发动机重量的50%以上，用于涡轮盘与叶片'},
        {'name': '化工设备', 'desc': 'Hastelloy C-276用于化工反应器，耐各种酸碱'},
        {'name': '镍氢电池', 'desc': 'Ni-MH电池用于混合动力汽车（丰田普锐斯）'},
        {'name': '镍钛形状记忆合金', 'desc': 'Nitinol用于医用支架、牙齿矫正丝'},
        {'name': '电镀', 'desc': '镀镍层用于装饰性电镀与功能镀层'}
    ],
    'failureAnalysis': [
        {'mode': '镍过敏', 'cause': 'Ni离子引起皮肤接触过敏', 'prevention': '控制Ni释放量，使用无Ni替代材料'},
        {'mode': '718焊接开裂', 'cause': '铌偏析导致液化裂纹', 'prevention': '优化成分控制，特种焊接工艺'}
    ]
}

ENG['Cu'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'C11000 (ETP Copper)', 'equivalent': 'GB/T 5231 T2紫铜'},
        {'standard': 'ASTM', 'grade': 'C26000 (Cartridge Brass)', 'equivalent': 'GB/T 5231 H62黄铜'},
        {'standard': 'ASTM', 'grade': 'C51000 (Phosphor Bronze)', 'equivalent': 'GB/T 5231 QSn4-0.3'},
        {'standard': 'ASTM', 'grade': 'C17200 (Beryllium Copper)', 'equivalent': 'GB/T 5231 QBe2'}
    ],
    'alloyRoles': [
        {'alloyType': '黄铜 (H62)', 'content': '38% Zn, 62% Cu', 'role': '基体元素'},
        {'alloyType': '青铜 (QSn6.5-0.1)', 'content': '~94% Cu', 'role': '基体元素'},
        {'alloyType': '白铜 (B10)', 'content': '~90% Cu, 10% Ni', 'role': '基体元素'},
        {'alloyType': '铜铝合金 (QA19-4)', 'content': '9% Al, 4% Fe', 'role': '基体元素'}
    ],
    'processing': {
        'weldability': '紫铜焊接性良好（TIG焊）；黄铜焊接性中等（Zn蒸发）',
        'machinability': '黄铜优良（~100-150%）；紫铜较差（粘刀）',
        'formability': '紫铜/黄铜成形性优良（可深冲）',
        'heatTreatment': {
            'annealing': '500-700°C空冷', 'quenching': 'N/A', 'tempering': 'N/A',
            'note': '铍铜合金可时效硬化：780°C固溶+320°C时效，HV>380'
        },
        'note': '铜合金以优异导电导热性与耐腐蚀性著称'
    },
    'corrosionResistance': {
        'acidResistance': '不耐氧化性酸；耐非氧化性酸（盐酸稀溶液）',
        'alkaliResistance': '良好', 'saltwaterResistance': '白铜优良；黄铜脱锌',
        'corrosionRate': '~0.005-0.02 mm/年（大气环境）',
        'protectionMethods': ['钝化', '镀层', '合金化(Ni/Al)'],
        'note': '铜合金在海洋环境中白铜最优'
    },
    'applications': [
        {'name': '电气导体', 'desc': 'T2紫铜导电率100% IACS，用于电缆、母排、电机绕组'},
        {'name': '散热器', 'desc': '铜/黄铜散热管用于汽车散热器与空调换热器'},
        {'name': '铜管', 'desc': 'TP2磷脱氧铜管用于空调管路、建筑给水管'},
        {'name': '轴承', 'desc': 'ZCuSn10P1锡青铜用于滑动轴承，耐磨性好'},
        {'name': '海洋工程', 'desc': 'B10白铜用于海水管路、船用螺旋桨'},
        {'name': '铍铜', 'desc': 'QBe2用于无火花工具、精密弹簧，强度>1200 MPa'}
    ],
    'failureAnalysis': [
        {'mode': '黄铜脱锌', 'cause': '黄铜在含Cl⁻介质中Zn选择性溶出', 'prevention': '添加As/Sb/Sn抑制脱锌，选用B10白铜'},
        {'mode': '应力腐蚀开裂', 'cause': '氨+拉应力引起黄铜SCC（季节性开裂）', 'prevention': '低温退火消除应力，避免接触氨'},
        {'mode': '冲刷腐蚀', 'desc': '高速流体冲刷破坏保护膜', 'cause': '流速过高', 'prevention': '控制流速，管壁设计优化'}
    ]
}

ENG['Zn'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B86 AG40A (Zamak 3)', 'equivalent': 'GB/T 13818 ZZnAl4Cu1'},
        {'standard': 'ASTM', 'grade': 'A123 (热浸镀锌)', 'equivalent': 'GB/T 13912 热浸镀锌层'}
    ],
    'alloyRoles': [
        {'alloyType': '镀锌钢板', 'content': '表面Zn层 50-275 g/m²', 'role': '牺牲阳极保护层'},
        {'alloyType': '黄铜 (H62)', 'content': '38% Zn', 'role': '固溶强化元素'},
        {'alloyType': '锌铝合金 (ZA27)', 'content': '27% Al', 'role': '基体元素'},
        {'alloyType': '牺牲阳极', 'content': '纯Zn或Zn-Al-Cd', 'role': '阴极保护材料'}
    ],
    'processing': {
        'weldability': '锌合金焊接性差（Zn蒸发）；镀锌钢需去除Zn后焊接',
        'machinability': '优良（锌合金可加工性好）',
        'formability': '锌合金压铸性好（可压铸复杂薄壁件）',
        'heatTreatment': {
            'annealing': '锌合金不进行热处理强化', 'quenching': 'N/A', 'tempering': 'N/A',
            'note': 'ZA锌铝合金可时效硬化'
        },
        'note': '锌主要用于镀锌防腐与压铸合金'
    },
    'corrosionResistance': {
        'acidResistance': '差（不耐酸）', 'alkaliResistance': '良好', 'saltwaterResistance': '中等',
        'corrosionRate': '~0.01-0.1 mm/年（大气环境）',
        'protectionMethods': ['铬酸盐钝化', '磷酸盐处理', '热浸镀锌'],
        'note': '锌的大气腐蚀速率远低于钢，是钢的有效牺牲阳极'
    },
    'applications': [
        {'name': '热浸镀锌', 'desc': '钢板/钢结构件热浸镀锌层寿命>30年（大气环境）'},
        {'name': '压铸件', 'desc': 'Zamak 3用于汽车门把手、电子外壳，压铸效率高'},
        {'name': '牺牲阳极', 'desc': '锌阳极用于船舶/管道阴极保护，保护寿命5-20年'},
        {'name': '氧化锌', 'desc': 'ZnO用于橡胶硫化活性剂、涂料防锈颜料'},
        {'name': '电池', 'desc': '锌锰干电池负极材料'}
    ],
    'failureAnalysis': [
        {'mode': '锌花晶间腐蚀', 'cause': '镀锌层中Pb/Bi在晶界偏聚', 'prevention': '控制杂质含量，无铅镀锌'},
        {'mode': '镀锌层老化', 'cause': '大气腐蚀导致Zn层消耗', 'prevention': '定期检查，必要时重新镀锌'}
    ]
}

ENG['Ga'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯镓 99.9999%', 'equivalent': 'GB/T 10116 高纯镓'}
    ],
    'alloyRoles': [
        {'alloyType': 'GaAs (砷化镓)', 'content': '48% Ga', 'role': '半导体化合物组分'},
        {'alloyType': 'GaN (氮化镓)', 'content': '~82% Ga', 'role': '宽禁带半导体组分'},
        {'alloyType': '镓铟锡合金 (Galinstan)', 'content': '~68% Ga', 'role': '汞替代液态金属'}
    ],
    'processing': {
        'weldability': 'N/A（低熔点金属）', 'machinability': 'N/A', 'formability': '液态（29.8°C熔化）',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'GaAs/GaN单晶生长'},
        'note': '镓主要用于化合物半导体，Ga/GaAs单晶生长'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '中等（两性金属）', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '镓两性，可溶于酸和碱'
    },
    'applications': [
        {'name': 'GaN功率器件', 'desc': 'GaN HEMT用于5G基站与快充电源，效率>95%'},
        {'name': 'GaAs芯片', 'desc': 'GaAs用于射频芯片、LED、太阳能电池（卫星用）'},
        {'name': '液态金属', 'desc': 'Galinstan替代汞用于温度计'},
        {'name': '半导体照明', 'desc': 'GaN基蓝光LED（2014诺贝尔奖）'}
    ],
    'failureAnalysis': [
        {'mode': '镓腐蚀铝', 'cause': '液态镓溶解铝结构（液态金属脆化）', 'prevention': '镓远离铝容器'}
    ]
}

ENG['Ge'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯锗 99.9999%', 'equivalent': 'GB/T 11071 高纯锗'}
    ],
    'alloyRoles': [
        {'alloyType': '硅锗合金 (SiGe)', 'content': '10-30% Ge', 'role': '异质结半导体组分'},
        {'alloyType': '锗酸盐光纤', 'content': 'GeO₂掺杂', 'role': '光纤折射率调节组分'},
        {'alloyType': 'PET催化剂', 'content': '微量 Ge', 'role': '聚酯聚合催化剂'}
    ],
    'processing': {
        'weldability': 'N/A（半导体元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '区熔法生长锗单晶'},
        'note': '锗主要用于红外光学与半导体器件'
    },
    'corrosionResistance': {
        'acidResistance': '耐大多数酸', 'alkaliResistance': '不耐强碱', 'saltwaterResistance': '良好',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '锗化学稳定性较高'
    },
    'applications': [
        {'name': '红外透镜', 'desc': '锗透镜用于热成像仪，红外透过率>50%（8-14μm）'},
        {'name': '光纤掺杂', 'desc': 'GeO₂掺杂石英光纤，调节折射率'},
        {'name': '卫星太阳能电池', 'desc': 'GaInP/GaAs/Ge三结电池效率>30%'},
        {'name': 'PET催化剂', 'desc': 'GeO₂用于PET瓶生产催化'}
    ],
    'failureAnalysis': []
}

ENG['As'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '砷 99%', 'equivalent': 'GB/T 3494 砷'}
    ],
    'alloyRoles': [
        {'alloyType': 'GaAs半导体', 'content': '~52% As', 'role': '半导体化合物组分'},
        {'alloyType': '铅合金', 'content': '0.1-0.5% As', 'role': '提高强度/硬度'},
        {'alloyType': '铜合金', 'content': '0.1-0.5% As', 'role': '提高耐蚀性（脱锌抑制）'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'GaAs单晶生长'},
        'note': '砷主要用于GaAs半导体与铜合金添加剂'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '砷在铜合金中提高耐蚀性'
    },
    'applications': [
        {'name': 'GaAs半导体', 'desc': 'GaAs用于射频芯片、LED、太阳能电池'},
        {'name': '铅蓄电池', 'desc': 'Pb-As合金用于铅酸蓄电池板栅，提高强度'},
        {'name': '铜合金添加剂', 'desc': '砷铜用于冷凝器管，抑制黄铜脱锌'}
    ],
    'failureAnalysis': [
        {'mode': '砷中毒', 'cause': '砷及其化合物有毒（三氧化二砷LD50=14.6 mg/kg）', 'prevention': '严格管控，职业暴露限值0.01 mg/m³'}
    ]
}

ENG['Se'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯硒 99.99%', 'equivalent': 'GB/T 5059 高纯硒'}
    ],
    'alloyRoles': [
        {'alloyType': '硒不锈钢', 'content': '0.15-0.35% Se', 'role': '改善切削性（303Se）'},
        {'alloyType': '铜合金', 'content': '微量 Se', 'role': '脱氧剂'},
        {'alloyType': 'CIGS太阳能电池', 'content': '~35% Se', 'role': '光电半导体组分'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '硒主要用于半导体光电材料与合金添加剂'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': 'CIGS太阳能电池', 'desc': 'CuInGaSe₂薄膜电池效率>23%，用于柔性光伏'},
        {'name': '易切削不锈钢', 'desc': '303Se用于精密自动车床零件'},
        {'name': '静电复印', 'desc': '非晶硒鼓用于复印机感光元件'},
        {'name': '玻璃添加剂', 'desc': 'Se用于脱色玻璃与红色玻璃着色'}
    ],
    'failureAnalysis': [
        {'mode': '硒中毒', 'cause': '过量硒摄入引起硒中毒（大蒜味呼吸）', 'prevention': '控制摄入与职业暴露'}
    ]
}

ENG['Br'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '液溴 99.5%', 'equivalent': 'GB/T 3449 工业溴'}
    ],
    'alloyRoles': [
        {'alloyType': '溴系阻燃剂', 'content': '各种溴化合物', 'role': '阻燃剂组分'},
        {'alloyType': '溴化银', 'content': 'AgBr', 'role': '感光材料组分'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '溴主要用于阻燃剂与钻井液'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '溴对金属有强腐蚀性'
    },
    'applications': [
        {'name': '阻燃剂', 'desc': '十溴二苯醚用于电子塑料阻燃，限制逐步加严'},
        {'name': '钻井液', 'desc': 'CaBr₂/ZnBr₂用于高温高压深井完井液'},
        {'name': '水处理', 'desc': '溴用于游泳池与冷却水杀菌'},
        {'name': '感光材料', 'desc': 'AgBr用于传统胶片（已大幅减少）'}
    ],
    'failureAnalysis': [
        {'mode': '溴腐蚀', 'cause': '液溴对大多数金属强腐蚀', 'prevention': '选用镍/蒙乃尔合金容器'}
    ]
}

ENG['Kr'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯氪 99.99%', 'equivalent': 'GB/T 17862 纯氪'}
    ],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A（惰性气体）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '惰性气体'},
        'note': '氪气用于窗户隔热、激光器、照明'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A（惰性气体）', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '惰性气体，不参与腐蚀反应'
    },
    'applications': [
        {'name': '节能窗', 'desc': '双层玻璃中充氪气隔热，导热系数比空气低1/3'},
        {'name': '氪氟激光', 'desc': 'KrF准分子激光(248nm)用于半导体光刻'},
        {'name': '照明', 'desc': '氪气灯用于机场跑道灯，穿透雾能力强'}
    ],
    'failureAnalysis': []
}

# ═══ 第 5 周期 ═══════════════════════════════════════════

ENG['Rb'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '铷 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': '光电倍增管', 'content': 'Rb-Cs-Sb阴极', 'role': '光电阴极材料'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '铷极活泼'},
        'note': '铷主要用于光电管与原子钟'
    },
    'corrosionResistance': {
        'acidResistance': '极差', 'alkaliResistance': 'N/A', 'saltwaterResistance': '极差',
        'corrosionRate': 'N/A', 'protectionMethods': ['惰性气氛'],
        'note': '铷在空气中自燃'
    },
    'applications': [
        {'name': '原子钟', 'desc': '铷原子钟精度10⁻¹¹，用于GPS与通信同步'},
        {'name': '光电管', 'desc': 'Rb-Cs-Sb光电阴极用于光电倍增管'},
        {'name': '特种玻璃', 'desc': 'Rb₂O用于特种光学玻璃'}
    ],
    'failureAnalysis': []
}

ENG['Sr'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '金属锶 99%', 'equivalent': 'GB/T 参照标准'},
        {'standard': '工业级', 'grade': 'SrCO₃ 99%', 'equivalent': 'GB/T 10666 碳酸锶'}
    ],
    'alloyRoles': [
        {'alloyType': '铝硅合金变质剂', 'content': '0.02-0.06% Sr', 'role': '共晶硅变质处理'},
        {'alloyType': '磁性材料 (SrFe₁₂O₁₉)', 'content': '~30% Sr', 'role': '铁氧体磁体组分'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'Sr用于铝合金变质处理'},
        'note': '锶主要用于铝合金变质剂与磁性材料'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': 'N/A', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '锶在空气中氧化'
    },
    'applications': [
        {'name': '铝合金变质', 'desc': 'Sr添加使Al-Si合金共晶硅由片状变为纤维状，强度提高20-30%'},
        {'name': '铁氧体磁体', 'desc': 'SrFe₁₂O₁₉用于汽车雨刷电机、扬声器磁体'},
        {'name': '阴极射线管', 'desc': 'SrO用于CRT显示器玻屏（已淘汰）'},
        {'name': '烟火', 'desc': 'Sr盐用于红色焰火'}
    ],
    'failureAnalysis': []
}

ENG['Y'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'YAG (Y₃Al₅O₁₂)', 'equivalent': 'GB/T 参照标准'}
    ],
    'alloyRoles': [
        {'alloyType': 'YAG激光晶体', 'content': 'Y₃Al₅O₁₂:Nd', 'role': '激光基质晶体'},
        {'alloyType': '钇稳定氧化锆 (YSZ)', 'content': '3-8% Y₂O₃', 'role': '稳定剂 — 结构陶瓷'},
        {'alloyType': '镁钇合金', 'content': '0.5-5% Y', 'role': '耐热改善元素'},
        {'alloyType': '高温合金', 'content': '0.01-0.1% Y', 'role': '抗氧化改善元素'}
    ],
    'processing': {
        'weldability': '中等（合金形式加工）', 'machinability': '良好（合金形式）', 'formability': '中等',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'YAG晶体提拉法生长'},
        'note': '钇主要用于激光晶体与结构陶瓷稳定剂'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '中等', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'Y₂O₃化学稳定性高'
    },
    'applications': [
        {'name': 'YAG激光器', 'desc': 'Nd:YAG激光器(1064nm)用于激光切割、焊接、医疗'},
        {'name': '热障涂层', 'desc': 'YSZ用于航空发动机涡轮叶片热障涂层，耐温1200°C'},
        {'name': '超导材料', 'desc': 'YBa₂Cu₃O₇高温超导体(90K)'},
        {'name': 'LED荧光粉', 'desc': 'YAG:Ce³⁺用于白色LED荧光粉'}
    ],
    'failureAnalysis': []
}

ENG['Zr'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'R60702 (Zr 702)', 'equivalent': 'GB/T 26283 R60702'},
        {'standard': 'ASTM', 'grade': 'R60804 (Zr-4)', 'equivalent': 'GB/T 26283 R60804'}
    ],
    'alloyRoles': [
        {'alloyType': '锆锡合金 (Zr-4)', 'content': '1.5% Sn, 0.2% Fe+Cr', 'role': '核燃料包壳材料'},
        {'alloyType': 'ZrO₂陶瓷', 'content': '~74% Zr', 'role': '结构陶瓷组分'},
        {'alloyType': '微合金钢', 'content': '0.02-0.05% Zr', 'role': '脱氧+细化晶粒'}
    ],
    'processing': {
        'weldability': '良好（需Ar保护，TIG焊）', 'machinability': '中等',
        'formability': '良好（可冷热加工）',
        'heatTreatment': {
            'annealing': '600-700°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A',
            'note': '核级锆合金需严格控制Hf含量<100ppm'
        },
        'note': '锆的热中子吸收截面极小(0.18靶恩)，是核燃料包壳的首选'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐盐酸、硫酸、硝酸）', 'alkaliResistance': '良好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': ['阳极氧化', '预生膜'],
        'note': '锆耐腐蚀性优于钛，仅次于钽'
    },
    'applications': [
        {'name': '核燃料包壳', 'desc': 'Zr-4合金用于压水堆燃料棒包壳，使用温度350°C'},
        {'name': '化工设备', 'desc': 'Zr 702用于盐酸换热器、反应釜，耐蚀寿命>20年'},
        {'name': '陶瓷', 'desc': 'ZrO₂增韧陶瓷用于切削刀具与发动机部件'},
        {'name': '牙科修复', 'desc': 'Y-ZrO₂用于牙冠/牙桥，美观且强度高'},
        {'name': '催化载体', 'desc': 'ZrO₂用于汽车尾气三元催化载体'}
    ],
    'failureAnalysis': [
        {'mode': '吸氢致脆', 'cause': '锆在反应堆中吸氢形成氢化物脆化', 'prevention': '控制水化学，优化合金成分'},
        {'mode': '碘致应力腐蚀', 'cause': '核反应堆中碘引起SCC', 'prevention': '降低燃料功率，优化包壳设计'}
    ]
}

ENG['Nb'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B392 (Nb-1Zr)', 'equivalent': 'GB/T 参照标准'},
        {'standard': 'ASTM', 'grade': 'Nb-Ti超导', 'equivalent': 'GB/T 参照标准'}
    ],
    'alloyRoles': [
        {'alloyType': '铌微合金钢', 'content': '0.02-0.06% Nb', 'role': '析出强化(Nb(C,N))'},
        {'alloyType': 'Nb-Ti超导体', 'content': '47% Nb, 53% Ti', 'role': '超导材料'},
        {'alloyType': 'C103合金', 'content': '10% Hf, 1% Ti', 'role': '航天高温合金'},
        {'alloyType': '不锈钢', 'content': '0.5-1.0% Nb', 'role': '稳定化元素(防止晶间腐蚀)'}
    ],
    'processing': {
        'weldability': '良好（需真空或Ar保护）', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {
            'annealing': '800-1000°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A',
            'note': 'Nb-Ti超导体需多次冷加工+时效处理'
        },
        'note': '铌微合金化钢与超导材料是两大核心应用'
    },
    'corrosionResistance': {
        'acidResistance': '良好（耐大多数酸）', 'alkaliResistance': '中等', 'saltwaterResistance': '良好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': ['阳极氧化'],
        'note': '铌耐腐蚀性良好，与钽相似'
    },
    'applications': [
        {'name': '铌微合金钢', 'desc': 'X80管线钢含Nb 0.05%，用于油气管道，屈服强度>550 MPa'},
        {'name': '超导磁体', 'desc': 'Nb-Ti超导线用于MRI(4.2K)与粒子加速器(LHC)'},
        {'name': '航天推进', 'desc': 'C103铌合金用于火箭喷管，使用温度>1300°C'},
        {'name': '硬质合金', 'desc': 'NbC作为WC硬质合金添加剂'},
        {'name': '光学玻璃', 'desc': 'Nb₂O₅用于高折射率光学玻璃'}
    ],
    'failureAnalysis': [
        {'mode': '高温氧化', 'cause': 'Nb在>500°C空气中严重氧化', 'prevention': '表面涂层（硅化物）保护'}
    ]
}

ENG['Mo'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B386 (TZM)', 'equivalent': 'GB/T 4188 TZM钼合金'},
        {'standard': 'ASTM', 'grade': 'AISI 4140', 'equivalent': 'GB/T 3077 42CrMo'},
        {'standard': 'ASTM', 'grade': 'AISI H13', 'equivalent': 'GB/T 1299 4Cr5MoSiV1'}
    ],
    'alloyRoles': [
        {'alloyType': '合金钢 (42CrMo)', 'content': '0.15-0.25% Mo', 'role': '淬透性改善+回火抗力'},
        {'alloyType': '不锈钢 (316L)', 'content': '2.0-3.0% Mo', 'role': '耐点蚀元素'},
        {'alloyType': '高温合金 (Inconel 625)', 'content': '8-10% Mo', 'role': '固溶强化元素'},
        {'alloyType': 'TZM钼合金', 'content': '0.5% Ti, 0.08% Zr', 'role': '高温结构合金基体'}
    ],
    'processing': {
        'weldability': '合金钢焊接性良好；纯钼焊接需真空/Ar保护', 'machinability': '中等',
        'formability': '中等（热加工为主）',
        'heatTreatment': {
            'annealing': '合金钢850-900°C炉冷', 'quenching': '42CrMo 850°C油淬',
            'tempering': '42CrMo 580°C回火', 'note': 'Mo提高回火抗力，防止回火脆化'
        },
        'note': 'Mo是钢与高温合金的关键合金元素'
    },
    'corrosionResistance': {
        'acidResistance': '耐非氧化性酸（盐酸、磷酸）', 'alkaliResistance': '良好', 'saltwaterResistance': '良好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': [],
        'note': '钼耐腐蚀性良好'
    },
    'applications': [
        {'name': '合金结构钢', 'desc': '42CrMo用于高强度螺栓、齿轮，淬透性优于碳钢'},
        {'name': '不锈钢', 'desc': '316L含Mo 2-3%，用于化工设备与海洋工程'},
        {'name': '高温合金', 'desc': 'Inconel 625/718含Mo 8-10%，耐高温腐蚀'},
        {'name': '玻璃熔炉电极', 'desc': '钼电极用于玻璃纤维熔炉，耐高温>1600°C'},
        {'name': '二硫化钼', 'desc': 'MoS₂用于固体润滑剂，耐高温350°C'},
        {'name': '热等静压炉', 'desc': 'TZM用于HIP加热体，使用温度>1500°C'}
    ],
    'failureAnalysis': [
        {'mode': '高温氧化', 'cause': 'Mo在>500°C空气中氧化升华', 'prevention': '真空或还原气氛使用'},
        {'mode': 'Mo脆化', 'cause': '焊接中Mo偏析引起热影响区脆化', 'prevention': '控制热输入，预热处理'}
    ]
}

ENG['Tc'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '人造放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A（放射性元素）', 'machinability': 'N/A（放射性，需遥控加工）', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，需防护'},
        'note': '锝是人工合成的放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '医学显像', 'desc': 'Tc-99m用于SPECT单光子发射断层扫描，全球每天使用>30000次'},
        {'name': '防腐蚀', 'desc': 'Tc镀层耐腐蚀性极好（因放射性未大规模应用）'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Tc-99放射性危害', 'prevention': '严格控制，专业处理'}
    ]
}

ENG['Ru'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Ru 99.9%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Ru-Pd催化剂', 'content': '~5% Ru', 'role': '催化活性组分'},
        {'alloyType': 'Pt-Ru合金', 'content': '50% Ru', 'role': '电催化剂'},
        {'alloyType': '钌钛阳极', 'content': 'RuO₂/Ti', 'role': '尺寸稳定阳极(DSA)涂层'}
    ],
    'processing': {
        'weldability': 'N/A（贵金属）', 'machinability': '差（硬度高、脆性）', 'formability': '差',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '钌主要用于催化剂与电子元件'
    },
    'corrosionResistance': {
        'acidResistance': '极好', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '贵金属，耐腐蚀性极好'
    },
    'applications': [
        {'name': '电催化剂', 'desc': 'Pt-Ru催化剂用于DMFC甲醇燃料电池，降低CO中毒'},
        {'name': '氯碱工业', 'desc': 'RuO₂/Ti阳极用于氯碱电解，电流效率>95%'},
        {'name': '硬盘磁记录', 'desc': 'Ru用于硬盘磁记录层间的耦合层'},
        {'name': '电子电阻', 'desc': 'RuO₂厚膜电阻用于电子电路'},
        {'name': '氨合成催化剂', 'desc': 'Ru催化剂用于低温低压合成氨（与Fe基互补）'}
    ],
    'failureAnalysis': []
}

ENG['Rh'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Rh 99.9%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Pt-Rh合金', 'content': '10% Rh', 'role': '热电偶材料'},
        {'alloyType': 'Pt-Rh催化网', 'content': '10% Rh', 'role': '硝酸生产催化网'},
        {'alloyType': '镀铑层', 'content': '表面Rh层', 'role': '耐磨/反射镀层'}
    ],
    'processing': {
        'weldability': 'N/A（贵金属）', 'machinability': '差（硬度高）', 'formability': '中等（热加工）',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铑主要用于催化剂与精密镀层'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐王水）', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '铑是最耐腐蚀的金属之一'
    },
    'applications': [
        {'name': '汽车催化转化器', 'desc': 'Pt-Pd-Rh三元催化剂用于汽油车尾气处理'},
        {'name': '硝酸催化网', 'desc': 'Pt-Rh(10%)催化网用于氨氧化制硝酸'},
        {'name': '镀铑', 'desc': '电镀铑层用于首饰、电子触点、反射镜'},
        {'name': '热电偶', 'desc': 'Pt-Rh10/Pt热电偶用于高温测量（1600°C）'}
    ],
    'failureAnalysis': []
}

ENG['Pd'] = {
    'materialGrades': [{'standard': 'ASTM', 'grade': 'Pd 99.95%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Pd-Ag合金', 'content': '23% Ag', 'role': '氢气纯化膜'},
        {'alloyType': 'Pd催化剂', 'content': '0.5-5% Pd/Al₂O₃', 'role': '加氢/脱氢催化剂'},
        {'alloyType': '电子焊料', 'content': 'Pd-Ag-Cu', 'role': '电子互连焊料组分'}
    ],
    'processing': {
        'weldability': '良好（贵金属，不易氧化）', 'machinability': '良好', 'formability': '优良',
        'heatTreatment': {'annealing': '800-900°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '钯具有独特的氢气渗透选择性'
    },
    'corrosionResistance': {
        'acidResistance': '良好（不耐硝酸）', 'alkaliResistance': '良好', 'saltwaterResistance': '良好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '钯耐腐蚀性较好'
    },
    'applications': [
        {'name': '氢气纯化', 'desc': 'Pd-Ag膜纯化氢气至99.99999%，用于半导体工艺'},
        {'name': '汽车催化剂', 'desc': 'Pd用于汽油车三元催化剂，占总需求>80%'},
        {'name': '电子互连', 'desc': 'Pd-Ni镀层用于电子连接器接触面'},
        {'name': '加氢催化剂', 'desc': 'Pd/C催化剂用于精细化工加氢反应'},
        {'name': '氢存储', 'desc': 'PdH₀.₆储氢，理论容量0.6%wt'}
    ],
    'failureAnalysis': []
}

ENG['Ag'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'F15 (Ag-Cu)', 'equivalent': 'GB/T 10046 BAu-1'},
        {'standard': '工业级', 'grade': 'Ag 99.9%', 'equivalent': 'GB/T 4135 纯银'}
    ],
    'alloyRoles': [
        {'alloyType': '银焊料 (BAg)', 'content': '40-72% Ag', 'role': '钎焊焊料基体'},
        {'alloyType': '银铜合金', 'content': '10-28% Cu', 'role': '硬化强化'},
        {'alloyType': '银锡氧化物 (AgSnO₂)', 'content': '88% Ag, 12% SnO₂', 'role': '电触头材料'},
        {'alloyType': '导电银浆', 'content': '70-85% Ag', 'role': '导电填充物'}
    ],
    'processing': {
        'weldability': '银焊料用于钎焊钢/铜/不锈钢', 'machinability': '优良（软金属）',
        'formability': '优良（可深冲/拉丝至极细）',
        'heatTreatment': {'annealing': '300-500°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '银合金可时效硬化'},
        'note': '银是导电率最高的金属（106% IACS）'
    },
    'corrosionResistance': {
        'acidResistance': '不耐硝酸/盐酸（不耐硫化物）', 'alkaliResistance': '良好', 'saltwaterResistance': '中等（硫离子腐蚀）',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': ['镀层', '合金化'],
        'note': '银硫化变黑（Ag₂S），影响接触电阻'
    },
    'applications': [
        {'name': '电子导电', 'desc': '银浆用于太阳能电池正面电极、印刷电路板导电层'},
        {'name': '电触头', 'desc': 'AgSnO₂/AgCdO用于低压断路器/接触器触头'},
        {'name': '银焊料', 'desc': 'BAg45CuZn用于铜/钢/不锈钢钎焊，接头强度高'},
        {'name': '银锌电池', 'desc': 'Ag-Zn电池用于航天/鱼雷，能量密度高'},
        {'name': '抗菌', 'desc': '纳米银用于抗菌材料/纺织品/水处理'}
    ],
    'failureAnalysis': [
        {'mode': '银迁移', 'cause': '银离子在电场/湿度下迁移引起短路', 'prevention': '表面钝化，使用Ag-Pd合金'},
        {'mode': '硫化', 'cause': '银在含硫环境变黑', 'prevention': '镀铑/镀钯保护'}
    ]
}

ENG['Cd'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B8621 (Ag-CdO)', 'equivalent': 'GB/T 参照标准'}
    ],
    'alloyRoles': [
        {'alloyType': '银氧化镉 (AgCdO)', 'content': '85% Ag, 15% CdO', 'role': '电触头材料'},
        {'alloyType': '低熔点合金', 'content': 'Cd-Bi-Pb-Sn', 'role': '保险丝/消防喷头'},
        {'alloyType': '镉镍电池', 'content': 'Cd负极', 'role': '电池负极材料'},
        {'alloyType': '镀镉', 'content': '表面Cd层', 'role': '防腐镀层'}
    ],
    'processing': {
        'weldability': 'N/A（以合金/镀层使用）', 'machinability': '良好', 'formability': '良好',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '镉有毒，使用逐步被限制（RoHS）'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '良好', 'saltwaterResistance': '良好',
        'corrosionRate': '~0.005 mm/年', 'protectionMethods': [],
        'note': '镉镀层在海水中防腐效果优于锌'
    },
    'applications': [
        {'name': '镉镍电池', 'desc': 'Ni-Cd电池用于航天/铁路备用电源，循环寿命>1000次'},
        {'name': '电触头', 'desc': 'AgCdO用于低压开关触头（逐渐被AgSnO₂替代）'},
        {'name': '镀镉', 'desc': '镉镀层用于航空航天紧固件防腐'},
        {'name': '核控制棒', 'desc': 'Ag-In-Cd控制棒用于压水堆中子吸收'},
        {'name': '颜料', 'desc': 'CdS/CdSe红色/黄色颜料（逐步限制）'}
    ],
    'failureAnalysis': [
        {'mode': '镉中毒', 'cause': '镉粉尘/烟尘吸入引起肾脏损害（痛痛病）', 'prevention': '限制使用，职业暴露限值0.01 mg/m³'},
        {'mode': 'RoHS限制', 'cause': '镉为RoHS/REACH限制物质', 'prevention': '开发无镉替代材料'}
    ]
}

ENG['In'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '高纯铟 99.995%', 'equivalent': 'GB/T 6607 高纯铟'}
    ],
    'alloyRoles': [
        {'alloyType': 'ITO靶材', 'content': 'In₂O₃:Sn 90:10', 'role': '透明导电氧化物组分'},
        {'alloyType': '低温焊料', 'content': 'In-Sn-Bi', 'role': '低熔点焊料'},
        {'alloyType': '无铅焊料', 'content': 'Sn-Ag-Cu-In', 'role': '降低熔点改善润湿性'},
        {'alloyType': 'InP半导体', 'content': '~79% In', 'role': '化合物半导体组分'}
    ],
    'processing': {
        'weldability': '铟焊料熔点低(156°C)，用于低温钎焊', 'machinability': '极软金属', 'formability': '极好',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铟主要用于ITO透明电极与半导体'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '差', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '铟在空气中稳定'
    },
    'applications': [
        {'name': 'ITO透明电极', 'desc': 'In₂O₃:Sn₂O₃用于LCD/OLED/触摸屏透明电极'},
        {'name': '低温焊料', 'desc': 'In-Sn(52/48)焊料熔点118°C，用于热敏元件焊接'},
        {'name': 'InP芯片', 'desc': 'InP用于高速光通信激光器与探测器'},
        {'name': 'CIGS太阳能电池', 'desc': 'CuInGaSe₂薄膜电池效率>23%'},
        {'name': '轴承镀层', 'desc': '铟镀层用于发动机轴承改善磨合性'}
    ],
    'failureAnalysis': []
}

ENG['Sn'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B33 (Sn-Pb焊料)', 'equivalent': 'GB/T 3131 Sn-Pb焊料'},
        {'standard': 'JIS', 'grade': 'SAC305 (Sn-Ag-Cu)', 'equivalent': 'GB/T 20422 SAC305'}
    ],
    'alloyRoles': [
        {'alloyType': '无铅焊料 (SAC305)', 'content': '96.5% Sn, 3% Ag, 0.5% Cu', 'role': '焊料基体'},
        {'alloyType': '锡铅焊料 (Sn63Pb37)', 'content': '63% Sn, 37% Pb', 'role': '焊料基体（含铅，限制使用）'},
        {'alloyType': '青铜 (QSn6.5-0.1)', 'content': '~93% Cu, 6.5% Sn', 'role': '固溶强化元素'},
        {'alloyType': '巴氏合金 (ZChSnSb)', 'content': '~80% Sn', 'role': '轴承合金基体'},
        {'alloyType': '马口铁', 'content': '表面Sn层', 'role': '镀锡层（食品包装）'}
    ],
    'processing': {
        'weldability': '锡是钎焊的核心金属；SAC305焊接性优良', 'machinability': '良好',
        'formability': '优良（可轧成极薄箔）',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '锡在-13°C以下变为灰锡（锡瘟）'},
        'note': '锡主要用于电子焊接与轴承合金'
    },
    'corrosionResistance': {
        'acidResistance': '中等（不耐强酸）', 'alkaliResistance': '差（碱溶解锡）', 'saltwaterResistance': '中等',
        'corrosionRate': '~0.005 mm/年', 'protectionMethods': ['镀层'],
        'note': '锡镀层无毒，用于食品包装马口铁'
    },
    'applications': [
        {'name': '电子焊接', 'desc': 'SAC305无铅焊料用于PCB电路板波峰焊/回流焊'},
        {'name': '马口铁', 'desc': '镀锡钢板用于食品罐头包装，年产量>1500万吨'},
        {'name': '轴承合金', 'desc': 'ZChSnSb11-6巴氏合金用于汽轮机/压缩机滑动轴承'},
        {'name': '锡青铜', 'desc': 'QSn6.5-0.1用于弹性元件、阀门'},
        {'name': '浮法玻璃', 'desc': '熔融锡用于浮法玻璃成型（玻璃表面平整光滑）'}
    ],
    'failureAnalysis': [
        {'mode': '锡瘟', 'cause': '低温（<-13°C）下白锡变为灰锡（粉化）', 'prevention': '添加Bi/Sb稳定，避免低温长期暴露'},
        {'mode': '锡须', 'cause': '纯锡镀层自发长出锡须引起短路', 'prevention': '合金化（添加~2% Pb或Bi），退火处理'}
    ]
}

ENG['Sb'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': '锑锭 99.9%', 'equivalent': 'GB/T 1599 锑锭'}
    ],
    'alloyRoles': [
        {'alloyType': '铅锑合金', 'content': '2-6% Sb', 'role': '硬化元素（蓄电池板栅）'},
        {'alloyType': '巴氏合金', 'content': '7-15% Sb', 'role': '轴承合金组分'},
        {'alloyType': '锡锑铜', 'content': '7% Sb, 3% Cu', 'role': '巴氏合金基体元素'},
        {'alloyType': '阻燃剂 (Sb₂O₃)', 'content': '~84% Sb', 'role': '阻燃协效剂'}
    ],
    'processing': {
        'weldability': 'N/A（以合金形式使用）', 'machinability': '中等', 'formability': '差（脆性金属）',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '锑主要用于阻燃剂与铅蓄电池'
    },
    'corrosionResistance': {
        'acidResistance': '中等（耐盐酸）', 'alkaliResistance': '差', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '铅蓄电池', 'desc': 'Pb-Sb(2-6%)板栅合金用于汽车蓄电池，提高强度与铸造性'},
        {'name': '阻燃剂', 'desc': 'Sb₂O₃与卤素协效用于塑料/纺织品阻燃'},
        {'name': '轴承合金', 'desc': 'ZChSnSb11-6用于大型滑动轴承'},
        {'name': '半导体', 'desc': 'InSb/GaSb用于红外探测器和热电材料'}
    ],
    'failureAnalysis': [
        {'mode': '锑中毒', 'cause': '锑粉尘吸入引起中毒', 'prevention': '通风防护，控制排放'}
    ]
}

ENG['Te'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '碲 99%', 'equivalent': 'GB/T 5120 碲'}],
    'alloyRoles': [
        {'alloyType': '碲铜合金', 'content': '0.4-0.7% Te', 'role': '改善切削性'},
        {'alloyType': 'Bi₂Te₃热电', 'content': '~52% Te', 'role': '热电材料组分'},
        {'alloyType': '碲化镉 (CdTe)', 'content': '~53% Te', 'role': '薄膜太阳能电池组分'},
        {'alloyType': '低碳钢添加剂', 'content': '0.02-0.1% Te', 'role': '改善切削性'}
    ],
    'processing': {
        'weldability': 'N/A（以合金形式使用）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '碲主要用于热电材料与合金添加剂'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '热电制冷', 'desc': 'Bi₂Te₃用于半导体制冷片（CPU散热/便携冰箱），效率~10%'},
        {'name': 'CdTe太阳能电池', 'desc': 'CdTe薄膜电池效率>22%，成本低'},
        {'name': '易切削铜', 'desc': 'Te-Cu合金可加工性提高至~85%（优于纯铜40%）'},
        {'name': '橡胶硫化', 'desc': 'Te用于橡胶硫化促进剂'},
        {'name': '合金添加剂', 'desc': '微量Te改善钢与铜的切削性能'}
    ],
    'failureAnalysis': [
        {'mode': '碲中毒', 'cause': '碲粉尘吸入引起蒜臭味呼吸与中毒', 'prevention': '通风防护'}
    ]
}

ENG['I'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '碘 99.8%', 'equivalent': 'GB/T 675 碘'}],
    'alloyRoles': [
        {'alloyType': '碘钨灯', 'content': 'I₂/W', 'role': '钨丝再生循环介质'},
        {'alloyType': '卤素灯', 'content': 'I₂/Br₂', 'role': '卤素循环介质'},
        {'alloyType': '碘化物钙钛矿', 'content': 'CH₃NH₃PbI₃', 'role': '钙钛矿太阳能电池组分'}
    ],
    'processing': {
        'weldability': 'N/A（非金属元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '碘主要用于卤素灯与钛精炼'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '碘对大多数金属有腐蚀性'
    },
    'applications': [
        {'name': '碘钨灯', 'desc': '碘循环使蒸发钨重新沉积在灯丝上，寿命延长2倍'},
        {'name': '钛精炼', 'desc': 'Van Arkel-de Boer法用TiI₄热分解制高纯钛'},
        {'name': '钙钛矿太阳能电池', 'desc': 'CH₃NH₃PbI₃钙钛矿电池效率>25%'},
        {'name': 'X射线造影剂', 'desc': '碘化合物用于医学X射线造影'},
        {'name': '消毒', 'desc': '碘伏用于医疗消毒'}
    ],
    'failureAnalysis': []
}

# -*- coding: utf-8 -*-
"""Part 2: Xe through Og (elements 54-118) + JS generation code"""

ENG['Xe'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '高纯氙 99.999%', 'equivalent': 'GB/T 17863 纯氙'}],
    'alloyRoles': [
        {'alloyType': '氙灯', 'content': 'Xe气体', 'role': '发光介质'},
        {'alloyType': '离子推进', 'content': 'Xe离子', 'role': '推进工质'}
    ],
    'processing': {
        'weldability': 'N/A（惰性气体）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '惰性气体'},
        'note': '氙气用于照明、离子推进、麻醉'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A（惰性气体）', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '惰性气体，不参与腐蚀反应'
    },
    'applications': [
        {'name': '氙灯', 'desc': '高压氙灯用于汽车HID大灯、电影放映，色温6000K'},
        {'name': '离子推进', 'desc': '氙离子推进器用于卫星与深空探测器，比冲>3000s'},
        {'name': '准分子激光', 'desc': 'XeCl/XeF准分子激光(308/351nm)用于医疗与半导体'},
        {'name': 'CT检测', 'desc': '氙气电离室用于CT探测器'},
        {'name': '麻醉', 'desc': '氙气麻醉剂无副作用，但价格昂贵'}
    ],
    'failureAnalysis': []
}

# ═══ 第 6 周期 ═══════════════════════════════════════════

ENG['Cs'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '铯 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Cs-Bi-Sb光电阴极', 'content': 'Cs-Sb', 'role': '光电阴极材料'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '铯极活泼'},
        'note': '铯用于原子钟、光电管、钻井液'
    },
    'corrosionResistance': {
        'acidResistance': '极差', 'alkaliResistance': 'N/A', 'saltwaterResistance': '极差',
        'corrosionRate': 'N/A', 'protectionMethods': ['惰性气氛'],
        'note': '铯在空气中自燃'
    },
    'applications': [
        {'name': '铯原子钟', 'desc': 'Cs-133原子钟精度10⁻¹⁵，为国际时间标准'},
        {'name': '光电倍增管', 'desc': 'Cs-Sb光电阴极用于光电倍增管与夜视仪'},
        {'name': '钻井液', 'desc': 'CsHCO₃甲酸铯用于高温高压深井完井液'},
        {'name': '离子推进', 'desc': 'Cs离子推进器用于深空探测'}
    ],
    'failureAnalysis': []
}

ENG['Ba'] = {
    'materialGrades': [
        {'standard': '工业级', 'grade': 'BaCO₃ 99%', 'equivalent': 'GB/T 654 碳酸钡'},
        {'standard': '工业级', 'grade': 'BaSO₄ 98%', 'equivalent': 'GB/T 2899 硫酸钡'}
    ],
    'alloyRoles': [
        {'alloyType': '消气剂 (Ba-Al-Ni)', 'content': '~30% Ba', 'role': '真空管吸气剂'},
        {'alloyType': '铅钡合金', 'content': '微量 Ba', 'role': '轴承合金组分'},
        {'alloyType': '钡铁氧体 (BaFe₁₂O₁₉)', 'content': '~21% Ba', 'role': '永磁铁氧体组分'}
    ],
    'processing': {
        'weldability': 'N/A（活泼金属）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '钡主要用于真空消气剂与钡铁氧体磁体'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': 'N/A', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'BaSO₄不溶于水（耐腐蚀）；可溶性钡盐有毒'
    },
    'applications': [
        {'name': '消气剂', 'desc': 'Ba-Al-Ni消气剂用于显像管与真空管，维持高真空'},
        {'name': '钡铁氧体', 'desc': 'BaFe₁₂O₁₉永磁铁氧体用于扬声器、电机磁瓦'},
        {'name': 'X射线造影', 'desc': 'BaSO₄硫酸钡用于胃肠道X射线造影（不透X射线）'},
        {'name': '钻井液', 'desc': 'BaSO₄加重剂用于油气钻井液（密度4.5）'},
        {'name': 'PTC热敏电阻', 'desc': 'BaTiO₃钛酸钡用于PTC热敏电阻与压电元件'}
    ],
    'failureAnalysis': [
        {'mode': '钡中毒', 'cause': '可溶性钡盐（BaCl₂）剧毒，LD50~1g', 'prevention': '严格管控可溶性钡化合物'}
    ]
}

# ── 镧系 (57-71) ──

ENG['La'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'La 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': '储氢合金 (LaNi₅)', 'content': '~32% La', 'role': '储氢基体元素'},
        {'alloyType': '镧镁合金', 'content': '1-2% La', 'role': '改善蠕变抗力'},
        {'alloyType': '催化裂化', 'content': 'La-Zeolite', 'role': 'FCC催化剂组分'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '镧主要用于储氢合金、催化剂与光学玻璃'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '镧在空气中逐渐氧化'
    },
    'applications': [
        {'name': '储氢合金', 'desc': 'LaNi₅储氢1.4wt%，用于镍氢电池负极'},
        {'name': '催化裂化', 'desc': 'La改性沸石催化剂用于石油FCC催化裂化'},
        {'name': '光学玻璃', 'desc': 'La₂O₃用于高折射率低色散光学镜头'},
        {'name': '电池电极', 'desc': 'LaNi₅合金用于镍氢电池负极材料'}
    ],
    'failureAnalysis': []
}

ENG['Ce'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Ce 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': '铈铁合金 (打火石)', 'content': '~70% Ce', 'role': '发火合金'},
        {'alloyType': '铸铁变质剂', 'content': '0.01-0.05% Ce', 'role': '球化/变质处理'},
        {'alloyType': '铝合金', 'content': '微量 Ce', 'role': '晶粒细化'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铈主要用于抛光粉、催化转化器、打火石'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '铈在空气中氧化'
    },
    'applications': [
        {'name': '抛光粉', 'desc': 'CeO₂抛光粉用于精密光学镜片与半导体晶圆抛光'},
        {'name': '汽车催化', 'desc': 'CeO₂储氧组分用于汽车三元催化转化器'},
        {'name': '打火石', 'desc': 'Ce-Fe合金用于打火石，着火点~150°C'},
        {'name': '紫外线吸收', 'desc': 'CeO₂用于紫外线吸收涂层与防晒霜'}
    ],
    'failureAnalysis': []
}

ENG['Pr'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Pr 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Pr-Fe-B磁体', 'content': '~1% Pr', 'role': '改善磁性能'},
        {'alloyType': '镨镁合金', 'content': '微量 Pr', 'role': '改善高温性能'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '镨主要用于磁性材料与着色剂'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '永磁材料', 'desc': 'Pr-Fe-B磁体用于高性能电机'},
        {'name': '玻璃着色', 'desc': 'Pr₂O₃用于玻璃着绿色（镨黄/镨绿）'},
        {'name': '陶瓷颜料', 'desc': 'Pr黄用于陶瓷釉料'},
        {'name': '眼科透镜', 'desc': 'Pr掺杂用于滤光透镜'}
    ],
    'failureAnalysis': []
}

ENG['Nd'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Nd 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'NdFeB磁体', 'content': '~33% Nd', 'role': '基体元素 — 硬磁'},
        {'alloyType': 'Nd-Mg合金', 'content': '1-2% Nd', 'role': '改善高温强度'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'NdFeB烧结温度1080°C'},
        'note': '钕是NdFeB永磁体核心元素'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': ['Ni镀层', '环氧涂层'],
        'note': 'NdFeB磁体极易腐蚀，必须表面处理'
    },
    'applications': [
        {'name': 'NdFeB永磁体', 'desc': 'N52级磁体最大磁能积52 MGOe，用于电动汽车电机'},
        {'name': '风力发电机', 'desc': '直驱永磁风力发电机每MW需~200kg NdFeB'},
        {'name': '硬盘驱动器', 'desc': '音圈电机使用NdFeB磁体'},
        {'name': '激光晶体', 'desc': 'Nd:YAG激光器用于焊接与切割'},
        {'name': '玻璃着色', 'desc': 'Nd₂O₃用于玻璃着紫色/红色'}
    ],
    'failureAnalysis': [
        {'mode': '磁体腐蚀', 'cause': 'NdFeB在湿热环境迅速腐蚀粉化', 'prevention': 'Ni/Cu/Ni三层镀层或环氧涂层'},
        {'mode': '高温退磁', 'cause': '>150°C时矫顽力下降', 'prevention': '添加Dy/Tb提高矫顽力'}
    ]
}

ENG['Pm'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性人造元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A（放射性元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，半衰期17.7年'},
        'note': '钷是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '放射源', 'desc': 'Pm-147用于微型核电池与荧光涂层'},
        {'name': 'β源测量', 'desc': 'Pm-147β源用于厚度测量仪'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Pm-147放射性危害', 'prevention': '严格管控，专业处理'}
    ]
}

ENG['Sm'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Sm 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'SmCo₅磁体', 'content': '~34% Sm', 'role': '基体元素 — 硬磁'},
        {'alloyType': 'SmCo磁体 (Sm₂Co₁₇)', 'content': '~23% Sm', 'role': '高温磁体基体'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'SmCo烧结1150-1200°C'},
        'note': '钐主要用于SmCo永磁体'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'SmCo磁体耐腐蚀性优于NdFeB'
    },
    'applications': [
        {'name': 'SmCo永磁体', 'desc': 'SmCo₅使用温度>250°C，用于航空航天电机'},
        {'name': 'Sm₂Co₁₇', 'desc': '使用温度>350°C，用于导弹/航天器'},
        {'name': '核反应堆', 'desc': 'Sm-149热中子吸收截面5800靶恩，可作控制材料'},
        {'name': '医用磁体', 'desc': 'SmCo磁体用于医疗器械（耐腐蚀优于NdFeB）'}
    ],
    'failureAnalysis': []
}

ENG['Eu'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Eu₂O₃ 99.9%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': '荧光粉', 'content': 'Eu²⁺/Eu³⁺', 'role': '荧光激活剂'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铕主要用于荧光粉与防伪标记'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '荧光粉', 'desc': 'Eu³⁺红色荧光粉用于CRT/LED显示'},
        {'name': '荧光灯', 'desc': 'Eu²⁺蓝粉+Eu³⁺红粉用于三基色荧光灯'},
        {'name': '防伪标记', 'desc': 'Eu荧光化合物用于钞票防伪'},
        {'name': '核控制', 'desc': 'Eu-151/153热中子吸收截面大，可用于核控制棒'}
    ],
    'failureAnalysis': []
}

ENG['Gd'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Gd 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Gd-Ga-石榴石', 'content': '~45% Gd', 'role': '磁光存储组分'},
        {'alloyType': 'GdBCO超导体', 'content': '~50% Gd', 'role': '高温超导组分'},
        {'alloyType': '核控制棒', 'content': 'Gd₂O₃', 'role': '中子吸收材料'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '钆具有最高的热中子吸收截面(49000靶恩)'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '核控制棒', 'desc': 'Gd₂O₃用于核反应堆可燃毒物控制棒'},
        {'name': '磁制冷', 'desc': 'Gd₅Si₂Ge₂用于室温磁制冷材料'},
        {'name': 'MRI造影剂', 'desc': 'Gd-DTPA用于核磁共振造影剂'},
        {'name': '磁光存储', 'desc': 'Gd-Fe-Co薄膜用于磁光盘'},
        {'name': '石榴石', 'desc': 'GGG(Gd₃Ga₅O₁₂)用于激光基质与微波器件'}
    ],
    'failureAnalysis': []
}

ENG['Tb'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Tb 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Tb-Dy-Fe磁致伸缩', 'content': '~1% Tb', 'role': '磁致伸缩组分'},
        {'alloyType': '荧光粉', 'content': 'Tb³⁺', 'role': '绿色荧光激活剂'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铽用于磁致伸缩材料与荧光粉'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '磁致伸缩材料', 'desc': 'Tb-Dy-Fe(Terfenol-D)磁致伸缩系数~2000ppm，用于声纳换能器'},
        {'name': '荧光粉', 'desc': 'Tb³⁺绿色荧光粉用于三基色荧光灯与LED'},
        {'name': '磁光存储', 'desc': 'Tb-Fe-Co用于磁光盘介质'}
    ],
    'failureAnalysis': []
}

ENG['Dy'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Dy 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'NdFeB添加剂', 'content': '0.5-5% Dy', 'role': '提高矫顽力'},
        {'alloyType': 'Tb-Dy-Fe磁致伸缩', 'content': '~30% Dy', 'role': '磁致伸缩组分'},
        {'alloyType': 'DyBCO超导', 'content': '~50% Dy', 'role': '高温超导组分'}
    ],
    'processing': {
        'weldability': '中等', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': '600-700°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '镝主要用于改善NdFeB磁体高温性能'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': 'NdFeB磁体', 'desc': '添加Dy提高矫顽力至>30 kOe，用于电动汽车电机'},
        {'name': '磁致伸缩', 'desc': 'Terfenol-D(TbDyFe)用于声纳与精密致动器'},
        {'name': '核反应堆', 'desc': 'Dy金属可作中子吸收材料'},
        {'name': '红外激光', 'desc': 'Dy³⁺掺杂激光器用于中红外激光'}
    ],
    'failureAnalysis': []
}

ENG['Ho'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Ho 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Ho-YAG激光', 'content': 'Ho:YAG', 'role': '激光介质'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '钬主要用于医疗激光'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '医疗激光', 'desc': 'Ho:YAG激光器(2.1μm)用于泌尿外科碎石与前列腺切除'},
        {'name': '磁性材料', 'desc': 'Ho具有最大磁矩，用于磁制冷研究'},
        {'name': '核控制', 'desc': 'Ho-165中子吸收截面64靶恩'}
    ],
    'failureAnalysis': []
}

ENG['Er'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Er 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Er光纤掺杂', 'content': 'Er³⁺', 'role': '光纤放大器掺杂'},
        {'alloyType': 'Er-YAG激光', 'content': 'Er:YAG', 'role': '激光介质'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铒主要用于光纤通信与激光'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '光纤放大器', 'desc': 'EDFA掺铒光纤放大器用于长途光纤通信(1550nm)'},
        {'name': '医疗激光', 'desc': 'Er:YAG激光器(2.94μm)用于牙科与皮肤治疗'},
        {'name': '核控制', 'desc': 'Er-167中子吸收截面650靶恩'},
        {'name': '玻璃着色', 'desc': 'Er₂O₃用于玻璃着粉红色'}
    ],
    'failureAnalysis': []
}

ENG['Tm'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Tm 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Tm激光', 'content': 'Tm:YAG', 'role': '激光介质'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铥主要用于便携式X射线源与激光'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '便携式X射线源', 'desc': 'Tm-170放射源用于便携式X射线探伤仪'},
        {'name': '激光', 'desc': 'Tm:YAG激光器(2.0μm)用于医疗与激光雷达'},
        {'name': '高温超导', 'desc': 'TlBaCaCuO高温超导体研究'}
    ],
    'failureAnalysis': []
}

ENG['Yb'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Yb 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Yb光纤激光', 'content': 'Yb³⁺', 'role': '激光介质'},
        {'alloyType': '不锈钢', 'content': '微量 Yb', 'role': '研究性微量合金化'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '镱主要用于光纤激光与应力测量'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '光纤激光器', 'desc': 'Yb光纤激光器(1.07μm)用于工业焊接与切割，功率>10kW'},
        {'name': '应变计', 'desc': 'Yb原子用于原子钟与精密测量'},
        {'name': 'γ射线源', 'desc': 'Yb-169用于工业γ射线探伤'},
        {'name': '太阳能电池', 'desc': 'Yb掺杂用于太阳能电池光谱转换'}
    ],
    'failureAnalysis': []
}

ENG['Lu'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Lu 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'LSO闪烁晶体', 'content': 'Lu₂SiO₅:Ce', 'role': 'PET探测器组分'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '镥用于PET闪烁晶体与催化剂'
    },
    'corrosionResistance': {
        'acidResistance': '差', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': 'PET探测器', 'desc': 'LSO(Lu₂SiO₅:Ce)闪烁晶体用于PET/CT'},
        {'name': '石油裂化', 'desc': 'Lu改性沸石催化剂用于石油裂化'},
        {'name': '辐射屏蔽', 'desc': 'Lu的高密度可用于辐射屏蔽研究'}
    ],
    'failureAnalysis': []
}

ENG['Hf'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B799 (Hf核级)', 'equivalent': 'GB/T 参照标准'}
    ],
    'alloyRoles': [
        {'alloyType': 'C103合金', 'content': '10% Hf, 1% Ti', 'role': '火箭喷管高温合金'},
        {'alloyType': 'Ni基高温合金', 'content': '0.5-1.5% Hf', 'role': '改善晶界强度'},
        {'alloyType': '核控制棒', 'content': 'Hf金属', 'role': '中子吸收材料'}
    ],
    'processing': {
        'weldability': '良好（需Ar保护）', 'machinability': '中等', 'formability': '中等',
        'heatTreatment': {'annealing': '700-800°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '核级Hf需分离Zr'},
        'note': '铪的热中子吸收截面大(105靶恩)，用于核控制棒'
    },
    'corrosionResistance': {
        'acidResistance': '良好', 'alkaliResistance': '良好', 'saltwaterResistance': '良好',
        'corrosionRate': '~0.001 mm/年', 'protectionMethods': [],
        'note': '铪耐腐蚀性与锆相似'
    },
    'applications': [
        {'name': '核控制棒', 'desc': 'Hf用于核潜艇压水堆控制棒，中子吸收截面大'},
        {'name': '高温合金', 'desc': 'Ni基高温合金添加0.5-1.5% Hf改善晶界强度'},
        {'name': '火箭喷管', 'desc': 'C103铌合金含10% Hf用于火箭喷管'},
        {'name': '光刻胶', 'desc': 'HfO₂用于先进光刻（7nm以下）高K栅介质'}
    ],
    'failureAnalysis': [
        {'mode': 'Hf/Zr分离', 'cause': 'Hf与Zr化学性质极相似，分离困难', 'prevention': '溶剂萃取法分离，核级Zr需Hf<100ppm'}
    ]
}

ENG['Ta'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B521 (Ta管)', 'equivalent': 'GB/T 3629 钽及钽合金'},
        {'standard': 'ASTM', 'grade': 'B365 (Ta线)', 'equivalent': 'GB/T 3629 钽及钽合金'}
    ],
    'alloyRoles': [
        {'alloyType': 'Ta-10W合金', 'content': '10% W', 'role': '高温结构合金'},
        {'alloyType': 'Ta电容器', 'content': 'Ta₂O₅介质', 'role': '电容器介质'},
        {'alloyType': 'TaC硬质合金', 'content': 'TaC', 'role': '耐磨涂层组分'}
    ],
    'processing': {
        'weldability': '良好（需Ar保护/真空）', 'machinability': '中等（软金属，易粘刀）',
        'formability': '良好（可冷加工）',
        'heatTreatment': {'annealing': '1200-1400°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '钽需高真空热处理'},
        'note': '钽是耐腐蚀性最好的金属之一'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐王水、盐酸、硝酸；不耐氢氟酸）', 'alkaliResistance': '中等',
        'saltwaterResistance': '极好', 'corrosionRate': '~0 mm/年',
        'protectionMethods': ['阳极氧化'],
        'note': '钽耐腐蚀性仅次于铂族金属'
    },
    'applications': [
        {'name': '钽电容器', 'desc': '钽电解电容器容量密度高，用于手机/电子设备'},
        {'name': '化工设备', 'desc': 'Ta钢复合板用于盐酸反应釜、换热器'},
        {'name': '医用植入', 'desc': '多孔钽用于人工关节与骨修复'},
        {'name': '高温合金', 'desc': 'Ta-10W用于火箭喷管与高温炉部件'},
        {'name': '硬质合金', 'desc': 'TaC作为WC硬质合金添加剂提高硬度'},
        {'name': '溅射靶材', 'desc': 'Ta用于半导体阻挡层溅射靶材'}
    ],
    'failureAnalysis': [
        {'mode': '氢脆', 'cause': '钽在高温下吸氢导致脆化', 'prevention': '真空热处理除氢'},
        {'mode': '不耐HF', 'cause': '氢氟酸溶解钽', 'prevention': '避免接触HF'}
    ]
}

ENG['W'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B777 (W-Ni-Fe)', 'equivalent': 'GB/T 10497 钨合金'},
        {'standard': '工业级', 'grade': 'WC硬质合金', 'equivalent': 'GB/T 18376 硬质合金'}
    ],
    'alloyRoles': [
        {'alloyType': 'WC-Co硬质合金', 'content': '80-97% WC', 'role': '硬质相'},
        {'alloyType': '高比重合金 (W-Ni-Fe)', 'content': '90-97% W', 'role': '基体元素'},
        {'alloyType': '工具钢 (H13)', 'content': '1.0-2.0% W', 'role': '耐磨碳化物形成元素'},
        {'alloyType': '高温合金', 'content': '3-6% W', 'role': '固溶强化元素'}
    ],
    'processing': {
        'weldability': '差（熔点高3422°C，需特殊焊接）', 'machinability': '差（硬度高）',
        'formability': '差（常温脆性，热加工>1500°C）',
        'heatTreatment': {
            'annealing': '1000-1200°C真空退火', 'quenching': 'N/A', 'tempering': 'N/A',
            'note': 'WC-Co硬质合金烧结温度1400-1500°C'
        },
        'note': '钨是熔点最高的金属(3422°C)'
    },
    'corrosionResistance': {
        'acidResistance': '良好（耐大多数酸；不耐王水/HF）', 'alkaliResistance': '中等',
        'saltwaterResistance': '良好', 'corrosionRate': '~0 mm/年',
        'protectionMethods': [],
        'note': '钨化学稳定性高'
    },
    'applications': [
        {'name': '硬质合金', 'desc': 'YG6/YT15等WC-Co刀具用于切削加工，HRA92-93'},
        {'name': '灯丝', 'desc': '钨丝用于白炽灯丝（熔点3422°C，已大量减少）'},
        {'name': '高比重合金', 'desc': 'W-Ni-Fe用于穿甲弹芯、陀螺仪转子，密度18-19 g/cm³'},
        {'name': '高温炉部件', 'desc': 'W加热丝/Mo屏蔽屏用于高温真空炉（2400°C）'},
        {'name': '焊接电极', 'desc': 'W-ThO₂电极用于TIG焊（钍钨极）'},
        {'name': 'X射线靶', 'desc': '钨靶用于X射线管阳极'}
    ],
    'failureAnalysis': [
        {'mode': '高温氧化', 'cause': 'W在>500°C空气中氧化升华', 'prevention': '真空/还原气氛使用'},
        {'mode': '低温脆性', 'cause': 'W在室温下为脆性（DBTT~250°C）', 'prevention': '热加工使用，避免室温冲击'}
    ]
}

ENG['Re'] = {
    'materialGrades': [{'standard': 'ASTM', 'grade': 'F74 (Re)', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Ni-Re高温合金', 'content': '3-6% Re', 'role': '固溶强化元素'},
        {'alloyType': 'Re-Pt催化剂', 'content': '0.3-0.5% Re/Pt', 'role': '石油重整催化剂'},
        {'alloyType': 'W-Re热电偶', 'content': '5-26% Re', 'role': '高温热电偶材料'}
    ],
    'processing': {
        'weldability': '良好', 'machinability': '中等', 'formability': '中等',
        'heatTreatment': {'annealing': '1200-1400°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铼是最稀缺金属之一，年产仅~50吨'
    },
    'corrosionResistance': {
        'acidResistance': '极好', 'alkaliResistance': '良好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '铼耐腐蚀性极好'
    },
    'applications': [
        {'name': '航空发动机', 'desc': 'Ni基单晶高温合金含3-6% Re，用于涡轮叶片（1100°C）'},
        {'name': '石油重整', 'desc': 'Pt-Re/Al₂O₃催化剂用于石油催化重整制高辛烷值汽油'},
        {'name': '热电偶', 'desc': 'W-Re5/W-Re26热电偶测量至2300°C'},
        {'name': 'X射线靶', 'desc': 'W-Re合金靶用于旋转阳极X射线管'}
    ],
    'failureAnalysis': []
}

ENG['Os'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Os 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Os-Ir合金', 'content': '30-70% Os', 'role': '笔尖/电触头材料'},
        {'alloyType': 'Os催化剂', 'content': '微量 Os', 'role': '催化活性组分'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': '差（硬度高、脆性大）', 'formability': '差',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '锇是密度最大的元素(22.59 g/cm³)'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐王水）', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': 'OsO₄有毒且挥发，需注意防护'
    },
    'applications': [
        {'name': '电触头', 'desc': 'Os-Ir合金用于精密继电器/开关触头'},
        {'name': '笔尖', 'desc': 'Os-Ir合金用于高档钢笔笔尖'},
        {'name': '催化剂', 'desc': 'OsO₄用于有机合成不对称双羟化反应'},
        {'name': '电子显微镜', 'desc': 'OsO₄用于生物样品电子显微镜染色'}
    ],
    'failureAnalysis': [
        {'mode': 'OsO₄中毒', 'cause': 'OsO₄蒸汽对眼睛/呼吸道有强刺激性', 'prevention': '通风橱操作，密闭容器'}
    ]
}

ENG['Ir'] = {
    'materialGrades': [{'standard': 'ASTM', 'grade': 'Ir 99.9%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Ir-Pt合金', 'content': '10-30% Ir', 'role': '火花塞/坩埚材料'},
        {'alloyType': 'Pt-Ir热电偶', 'content': '10-40% Ir', 'role': '高温热电偶'}
    ],
    'processing': {
        'weldability': '差（硬度高、熔点高）', 'machinability': '差', 'formability': '差',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铱是最耐腐蚀的金属之一'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐王水）', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '铱耐腐蚀性极好'
    },
    'applications': [
        {'name': '火花塞', 'desc': 'Ir-Pt火花塞用于汽车发动机，寿命>100,000km'},
        {'name': '坩埚', 'desc': 'Ir坩埚用于生长蓝宝石/钛酸钡单晶'},
        {'name': '催化', 'desc': 'Ir催化剂用于电解水制氢（PEM电解槽阳极）'},
        {'name': '放射性源', 'desc': 'Ir-192用于工业γ射线探伤'},
        {'name': '笔尖', 'desc': 'Ir-Os合金用于钢笔笔尖'}
    ],
    'failureAnalysis': []
}

ENG['Pt'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'Pt 99.95%', 'equivalent': 'GB/T 1419 纯铂'},
        {'standard': 'ASTM', 'grade': 'Pt-Rh 10%', 'equivalent': 'GB/T 1419 Pt-Rh合金'}
    ],
    'alloyRoles': [
        {'alloyType': 'Pt-Rh催化网', 'content': '90% Pt, 10% Rh', 'role': '硝酸生产催化剂'},
        {'alloyType': 'Pt-Ir合金', 'content': '90% Pt, 10% Ir', 'role': '电器触头/坩埚'},
        {'alloyType': 'Pt-Ni合金', 'content': 'Pt-Ni', 'role': '磁性材料'},
        {'alloyType': 'Pt催化剂', 'content': 'Pt/Al₂O₃', 'role': '催化活性组分'}
    ],
    'processing': {
        'weldability': '良好（贵金属，不易氧化）', 'machinability': '良好', 'formability': '优良',
        'heatTreatment': {'annealing': '800-1000°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铂是催化转化器的核心元素'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐大多数酸；缓慢溶于王水）', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '铂是最耐腐蚀的金属之一'
    },
    'applications': [
        {'name': '汽车催化剂', 'desc': 'Pt-Pd-Rh三元催化剂用于汽油车尾气处理'},
        {'name': '硝酸生产', 'desc': 'Pt-Rh催化网用于氨氧化制硝酸'},
        {'name': '燃料电池', 'desc': 'Pt催化剂用于PEMFC质子交换膜燃料电池'},
        {'name': '珠宝', 'desc': 'Pt950(95% Pt)用于高端首饰'},
        {'name': '电化学电极', 'desc': 'Pt电极用于标准氢电极与电化学分析'},
        {'name': '热电偶', 'desc': 'Pt-Rh/Pt热电偶(S型)用于精密温度测量(1600°C)'}
    ],
    'failureAnalysis': [
        {'mode': '铂中毒', 'cause': 'Pt催化剂被Pb/S/As等中毒失活', 'prevention': '使用无铅汽油，控制燃料硫含量'},
        {'mode': '高温晶粒长大', 'cause': 'Pt-Rh催化网在850°C长期使用晶粒粗化', 'prevention': '添加Ce/Zr稳定化'}
    ]
}

ENG['Au'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'Au 99.99%', 'equivalent': 'GB/T 4134 纯金'},
        {'standard': '工业级', 'grade': 'Au-1%Si焊料', 'equivalent': '共晶焊料'}
    ],
    'alloyRoles': [
        {'alloyType': '金焊料 (Au80Sn20)', 'content': '80% Au, 20% Sn', 'role': '高可靠性焊料'},
        {'alloyType': '金镍合金', 'content': '5-10% Ni', 'role': '电接触材料'},
        {'alloyType': '金铜合金', 'content': 'Au-Cu', 'role': '珠宝/牙科合金'},
        {'alloyType': '导电金浆', 'content': '70-85% Au', 'role': '导电填充物'}
    ],
    'processing': {
        'weldability': '金焊料用于高可靠性钎焊；金丝键合用于芯片封装',
        'machinability': '优良（极软金属）', 'formability': '优良（可拉至极细丝/极薄箔）',
        'heatTreatment': {'annealing': '300-500°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'Au-1%Si共晶焊料363°C'},
        'note': '金具有优异导电性、耐腐蚀性与可键合性'
    },
    'corrosionResistance': {
        'acidResistance': '极好（耐所有单一酸；溶于王水）', 'alkaliResistance': '极好', 'saltwaterResistance': '极好',
        'corrosionRate': '~0 mm/年', 'protectionMethods': [],
        'note': '金是最耐腐蚀的金属'
    },
    'applications': [
        {'name': '电子互连', 'desc': '金丝键合用于IC芯片封装；镀金用于PCB金手指'},
        {'name': '航空航天焊料', 'desc': 'Au80Sn20焊料(280°C)用于航天器气密封装'},
        {'name': '导电浆料', 'desc': '金浆用于厚膜电路与太阳能电池电极'},
        {'name': '珠宝', 'desc': 'Au999(24K)用于高端首饰'},
        {'name': '牙科', 'desc': 'Au-Ag-Cu合金用于牙科修复'},
        {'name': '催化剂', 'desc': 'Au/TiO₂催化剂用于CO低温氧化'}
    ],
    'failureAnalysis': [
        {'mode': '金脆', 'cause': '金与焊料(Sn)形成AuSn₄脆性化合物', 'prevention': '控制金层厚度<0.5μm，避免过量金溶入焊点'}
    ]
}

ENG['Hg'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '汞 99.99%', 'equivalent': 'GB/T 913 汞'}],
    'alloyRoles': [
        {'alloyType': '汞齐 (Ag-Sn-Hg)', 'content': '~50% Hg', 'role': '牙科银汞合金'},
        {'alloyType': '汞电池', 'content': 'HgO/Zn', 'role': '电池组分'},
        {'alloyType': '锌汞合金', 'content': '微量 Hg', 'role': '锌电池缓蚀剂'}
    ],
    'processing': {
        'weldability': 'N/A（液态金属）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '汞有毒，逐步限制使用'},
        'note': '汞因毒性与环保原因逐步被淘汰'
    },
    'corrosionResistance': {
        'acidResistance': '良好（耐大多数酸）', 'alkaliResistance': '良好', 'saltwaterResistance': '良好',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '汞本身耐腐蚀，但汞蒸气有毒'
    },
    'applications': [
        {'name': '节能灯', 'desc': '荧光灯/节能灯含汞（逐步被LED替代，限制逐步加严）'},
        {'name': '温度计', 'desc': '水银温度计（逐步被电子温度计替代，已限制生产）'},
        {'name': '牙科银汞', 'desc': 'Ag-Sn-Hg银汞合金用于牙科补牙（逐步被树脂替代）'},
        {'name': '化工催化剂', 'desc': 'HgCl₂催化剂用于PVC生产（逐步被无汞工艺替代）'},
        {'name': '电气开关', 'desc': '汞开关用于恒温器（逐步淘汰）'}
    ],
    'failureAnalysis': [
        {'mode': '汞中毒', 'cause': '汞蒸气吸入引起中枢神经损伤', 'prevention': '严格管控，职业暴露限值0.025 mg/m³'},
        {'mode': '汞腐蚀', 'cause': '液态汞溶解多种金属（汞齐化）', 'prevention': '避免汞接触铝/锌等结构金属'}
    ]
}

ENG['Tl'] = {
    'materialGrades': [{'standard': '工业级', 'grade': 'Tl 99%', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Tl-Hg-Pb合金', 'content': '8-10% Tl', 'role': '低温合金'},
        {'alloyType': 'TlBr-TlI', 'content': 'TlBr/TlI', 'role': '红外光学材料'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': '中等', 'formability': '良好',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铊剧毒，使用极度受限'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '红外光学', 'desc': 'TlBr-TlI(KRS-5)红外透镜用于FTIR红外光谱仪(0.6-40μm)'},
        {'name': '半导体', 'desc': 'Tl掺杂PbSe用于红外探测器'},
        {'name': 'γ射线探测', 'desc': 'Tl掺杂NaI(Tl)闪烁晶体用于γ射线探测'},
        {'name': '高温超导', 'desc': 'Tl-Ba-Ca-Cu-O超导体(Tl-1223, Tc=133K)'}
    ],
    'failureAnalysis': [
        {'mode': '铊中毒', 'cause': '铊剧毒（LD50~1g），可经皮肤吸收', 'prevention': '严格管控，禁用作为杀鼠剂'}
    ]
}

ENG['Pb'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'B29 (Pb)', 'equivalent': 'GB/T 469 铅锭'},
        {'standard': 'ASTM', 'grade': 'Pb-Sb合金', 'equivalent': 'GB/T 470 铅锑合金'},
        {'standard': '工业级', 'grade': 'Sn63Pb37焊料', 'equivalent': 'GB/T 3131 Sn63Pb37'}
    ],
    'alloyRoles': [
        {'alloyType': '铅蓄电池板栅', 'content': 'Pb-Sb 2-6%', 'role': '蓄电池结构材料'},
        {'alloyType': '锡铅焊料', 'content': '37% Pb, 63% Sn', 'role': '焊料（限制使用）'},
        {'alloyType': '铅黄铜 (HPb59-1)', 'content': '1-3% Pb', 'role': '改善切削性'},
        {'alloyType': '辐射屏蔽', 'content': '纯Pb或Pb-Sb', 'role': '辐射防护材料'}
    ],
    'processing': {
        'weldability': '铅焊接性良好（钎焊/气焊）', 'machinability': '优良（极软金属）',
        'formability': '优良（可碾压/挤压）',
        'heatTreatment': {'annealing': '室温自退火', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'Pb-Sb合金可时效硬化'},
        'note': '铅因毒性逐步被替代，但蓄电池与辐射屏蔽仍为主要用途'
    },
    'corrosionResistance': {
        'acidResistance': '耐硫酸（硫酸铅钝化）；不耐盐酸/硝酸',
        'alkaliResistance': '差（不耐强碱）', 'saltwaterResistance': '中等',
        'corrosionRate': '~0.01 mm/年（大气环境）',
        'protectionMethods': [],
        'note': '铅在硫酸中形成PbSO₄保护膜，是铅蓄电池基础'
    },
    'applications': [
        {'name': '铅蓄电池', 'desc': 'Pb/PbO₂蓄电池用于汽车启动与UPS，全球年产>5亿只'},
        {'name': '辐射屏蔽', 'desc': '铅板用于X射线/γ射线防护（医院/核工业）'},
        {'name': '锡铅焊料', 'desc': 'Sn63Pb37共晶焊料逐步被无铅焊料替代（RoHS）'},
        {'name': '铅黄铜', 'desc': 'HPb59-1易切削黄铜用于阀门/管件（逐步无铅化）'},
        {'name': '铅玻璃', 'desc': 'PbO 30-60%用于辐射防护玻璃与光学玻璃'},
        {'name': '电缆护套', 'desc': '铅护套用于海底/地下高压电缆（逐步替代）'}
    ],
    'failureAnalysis': [
        {'mode': '铅中毒', 'cause': '铅粉尘/烟尘吸入引起慢性中毒', 'prevention': '职业暴露限值0.05 mg/m³，逐步无铅化'},
        {'mode': '蠕变失效', 'cause': '铅在常温下蠕变变形', 'prevention': '添加Sb提高蠕变抗力'},
        {'mode': 'RoHS限制', 'cause': '铅为RoHS限制物质', 'prevention': '使用无铅焊料与无铅铜合金'}
    ]
}

ENG['Bi'] = {
    'materialGrades': [{'standard': '工业级', 'grade': '铋锭 99.99%', 'equivalent': 'GB/T 596 铋'}],
    'alloyRoles': [
        {'alloyType': '无铅焊料 (Sn-Bi)', 'content': '57% Bi, 43% Sn', 'role': '低熔点焊料'},
        {'alloyType': '伍德合金 (Bi-Pb-Sn-Cd)', 'content': '50% Bi', 'role': '低熔点保险丝'},
        {'alloyType': '易切削钢', 'content': '0.05-0.15% Bi', 'role': '改善切削性'},
        {'alloyType': '铅铋合金', 'content': '0.5-2% Bi', 'role': '改善可加工性'}
    ],
    'processing': {
        'weldability': '低熔点焊料用于低温焊接', 'machinability': 'N/A（以合金形式使用）', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'N/A'},
        'note': '铋是最低毒性的重金属元素，是铅的环保替代'
    },
    'corrosionResistance': {
        'acidResistance': '中等（耐盐酸/硫酸；溶于硝酸）', 'alkaliResistance': '差', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无铅焊料', 'desc': 'Sn42Bi58焊料熔点138°C，用于低温电子焊接'},
        {'name': '低熔点合金', 'desc': '伍德合金(Bi-Pb-Sn-Cd)熔点70°C，用于消防喷头/保险丝'},
        {'name': '易切削钢', 'desc': 'Bi改善钢切削性（替代铅，更环保）'},
        {'name': '医用', 'desc': 'Bi化合物用于胃药（次水杨酸铋）'},
        {'name': '冶金添加剂', 'desc': 'Bi添加改善钢/铜切削性，替代Pb'}
    ],
    'failureAnalysis': []
}

ENG['Po'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A（放射性元素）', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，半衰期138天'},
        'note': '钋是放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '静电消除', 'desc': 'Po-210放射源用于工业静电消除器'},
        {'name': '热源', 'desc': 'Po-210用作放射性同位素热源（航天器）'},
        {'name': '中子源', 'desc': 'Po-Be中子源用于反应堆启动'}
    ],
    'failureAnalysis': [
        {'mode': '辐射危害', 'cause': 'Po-210α放射性极强，摄入致死量~1μg', 'prevention': '严格管控，专业人员操作'}
    ]
}

ENG['At'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '半衰期极短(8.1h)'},
        'note': '砹是极稀有的放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '医学研究', 'desc': 'At-211用于α靶向放射治疗研究'}
    ],
    'failureAnalysis': []
}

ENG['Rn'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性气体', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性气体，半衰期3.8天'},
        'note': '氡是放射性稀有气体'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '放射治疗', 'desc': 'Rn-222密封源用于放射治疗（历史使用，已淘汰）'},
        {'name': '地质研究', 'desc': '氡气异常用于地震前兆监测与铀矿勘探'}
    ],
    'failureAnalysis': [
        {'mode': '氡危害', 'cause': '氡气是第二大肺癌诱因', 'prevention': '通风，地下室密封防氡'}
    ]
}

# ═══ 第 7 周期 ═══════════════════════════════════════════

ENG['Fr'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '半衰期22分钟'},
        'note': '钫是最不稳定的天然元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无工程应用', 'desc': '半衰期过短，无工程应用'}
    ],
    'failureAnalysis': []
}

ENG['Ra'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [
        {'alloyType': 'Ra-Be中子源', 'content': 'Ra-Be', 'role': '中子源材料'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，半衰期1600年'},
        'note': '镭是放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '发光涂料', 'desc': 'Ra发光涂料用于表盘（历史使用，已淘汰，因放射危害）'},
        {'name': '放射治疗', 'desc': 'Ra-226用于早期放射治疗（已用Co-60等替代）'},
        {'name': '中子源', 'desc': 'Ra-Be中子源用于反应堆启动'}
    ],
    'failureAnalysis': [
        {'mode': '辐射危害', 'cause': 'Ra-226α放射性极强，衰变产生Rn-222', 'prevention': '严格管控，密封处理'}
    ]
}

# ── 锕系 (89-103) ──

ENG['Ac'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素'},
        'note': '锕是放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '中子源', 'desc': 'Ac-227/Be中子源用于实验室中子源'},
        {'name': '放射治疗', 'desc': 'Ac-225用于α靶向放射治疗研究'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Ac放射性危害', 'prevention': '严格管控'}
    ]
}

ENG['Th'] = {
    'materialGrades': [{'standard': 'ASTM', 'grade': 'ThO₂ (核级)', 'equivalent': 'GB/T 参照标准'}],
    'alloyRoles': [
        {'alloyType': 'Th-Mg合金', 'content': '3% Th', 'role': '高温镁合金（历史）'},
        {'alloyType': 'Th-W合金', 'content': '1-2% Th', 'role': 'TIG焊电极材料'},
        {'alloyType': 'ThO₂陶瓷', 'content': 'ThO₂', 'role': '核燃料/高温陶瓷'}
    ],
    'processing': {
        'weldability': 'N/A（放射性）', 'machinability': '中等', 'formability': '中等',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，需防护'},
        'note': '钍是增殖性核燃料（Th-232 → U-233）'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '中等', 'saltwaterResistance': '中等',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '钍在空气中缓慢氧化'
    },
    'applications': [
        {'name': '钍基核燃料', 'desc': 'ThO₂作为增殖燃料用于钍基熔盐堆(TMSR)'},
        {'name': 'TIG焊电极', 'desc': 'W-ThO₂电极用于TIG焊接（逐步被W-La₂O₃替代）'},
        {'name': '光学', 'desc': 'ThO₂-La₂O₃用于高折射率光学玻璃'},
        {'name': '高温陶瓷', 'desc': 'ThO₂耐火材料耐温>3000°C'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Th-232α放射性', 'prevention': '严格管控，专业处理'}
    ]
}

ENG['Pa'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，半衰期32760年'},
        'note': '镤是放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无工程应用', 'desc': '极稀有的放射性元素，仅限科研'}
    ],
    'failureAnalysis': []
}

ENG['U'] = {
    'materialGrades': [
        {'standard': 'ASTM', 'grade': 'C75120 (DU)', 'equivalent': '贫铀'},
        {'standard': 'ASTM', 'grade': 'UO₂ (核燃料)', 'equivalent': 'GB/T 13246 二氧化铀'}
    ],
    'alloyRoles': [
        {'alloyType': 'UO₂核燃料', 'content': '~88% U', 'role': '核燃料基体'},
        {'alloyType': 'U-Zr合金', 'content': '~90% U, 10% Zr', 'role': '金属核燃料'},
        {'alloyType': 'U-Ti合金', 'content': '~99% U', 'role': '贫铀穿甲弹材料'}
    ],
    'processing': {
        'weldability': 'N/A（放射性，需特殊工艺）', 'machinability': '中等（需遥控/防护）', 'formability': '中等',
        'heatTreatment': {'annealing': '600-700°C', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，需防护'},
        'note': '铀是核燃料核心元素'
    },
    'corrosionResistance': {
        'acidResistance': '中等（耐盐酸；溶于硝酸）', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '铀在空气中氧化，UO₂在反应堆中抗腐蚀'
    },
    'applications': [
        {'name': '核燃料', 'desc': 'UO₂芯块(3-5% U-235)用于压水堆燃料棒'},
        {'name': '贫铀装甲', 'desc': 'DU装甲板用于主战坦克装甲，密度19.1 g/cm³'},
        {'name': '贫铀穿甲弹', 'desc': 'U-Ti贫铀弹用于反装甲穿甲'},
        {'name': '辐射屏蔽', 'desc': '贫铀用于γ射线与中子辐射屏蔽'},
        {'name': '色彩玻璃', 'desc': '铀盐用于玻璃/陶瓷着色（历史）'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'U-235裂变产物与U-238α放射性', 'prevention': '严格管控，辐射防护'},
        {'mode': '铀毒', 'cause': '铀粉尘化学毒性（肾脏）', 'prevention': '职业暴露限值0.2 mg/m³'},
        {'mode': '氢脆', 'cause': '铀吸氢形成UH₃粉化', 'prevention': '控制环境湿度'}
    ]
}

ENG['Np'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [
        {'alloyType': 'Np-Be中子源', 'content': 'Np-Be', 'role': '中子源材料'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素'},
        'note': '镎是超铀放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '核工程', 'desc': 'Np-237可转化为Pu-238用于RTG航天器电源'},
        {'name': '中子源', 'desc': 'Np-Be中子源用于实验室'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Np-237α放射性', 'prevention': '严格管控'}
    ]
}

ENG['Pu'] = {
    'materialGrades': [
        {'standard': 'DOE', 'grade': 'Pu-239 (核级)', 'equivalent': '武器级/反应堆级钚'},
        {'standard': 'DOE', 'grade': 'Pu-238 (RTG)', 'equivalent': '航天同位素热源'}
    ],
    'alloyRoles': [
        {'alloyType': 'Pu-Ga合金', 'content': '0.8-1.0% Ga', 'role': '稳定δ相'},
        {'alloyType': 'MOX燃料', 'content': 'PuO₂+UO₂', 'role': '混合氧化物核燃料'},
        {'alloyType': 'Pu-Be中子源', 'content': 'Pu-Be', 'role': '中子源材料'}
    ],
    'processing': {
        'weldability': 'N/A（放射性，需遥控/密封）', 'machinability': '需遥控操作', 'formability': '中等（δ-Pu可加工）',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': 'Pu有6个同素异形体，需特殊处理'},
        'note': '钚是核武器与快堆核心材料'
    },
    'corrosionResistance': {
        'acidResistance': '中等', 'alkaliResistance': '中等', 'saltwaterResistance': '差',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': '钚在空气中氧化自燃'
    },
    'applications': [
        {'name': '核武器', 'desc': 'Pu-239用于核武器裂变芯'},
        {'name': '快堆燃料', 'desc': 'PuO₂-UO₂ MOX燃料用于快中子增殖反应堆'},
        {'name': '航天电源', 'desc': 'Pu-238 RTG为航天器提供热源与电源，寿命>50年'},
        {'name': '中子源', 'desc': 'Pu-Be中子源用于反应堆启动/中子活化分析'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Pu-239α放射性极强，吸入致癌', 'prevention': '密封手套箱操作，严格管控'},
        {'mode': '临界安全', 'cause': 'Pu-239超过临界质量引起核临界事故', 'prevention': '严格控制操作量与几何形状'},
        {'mode': '自燃', 'cause': '钚粉末在空气中自燃', 'prevention': '惰性气氛操作，控制粉尘'}
    ]
}

ENG['Am'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [
        {'alloyType': 'Am-Be中子源', 'content': 'Am-Be', 'role': '中子源材料'},
        {'alloyType': 'AmO₂核燃料', 'content': 'AmO₂', 'role': '嬗变靶件'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素'},
        'note': '镅是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '烟雾报警器', 'desc': 'Am-241α源用于离子型烟雾报警器，全球年产>千万只'},
        {'name': '中子源', 'desc': 'Am-Be中子源用于石油测井与中子活化分析'},
        {'name': '航天电源', 'desc': 'Am-241可用于航天RTG（研究阶段）'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Am-241α/γ放射性', 'prevention': '密封源，严格管控'}
    ]
}

ENG['Cm'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [
        {'alloyType': 'Cm-Be中子源', 'content': 'Cm-Be', 'role': '中子源材料'}
    ],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素'},
        'note': '锔是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '航天电源', 'desc': 'Cm-244用于航天RTG电源'},
        {'name': '中子源', 'desc': 'Cm-Be中子源用于中子活化分析'},
        {'name': '火星探测', 'desc': 'Cm-244α源用于火星车X射线荧光分析'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Cm-244强α放射性', 'prevention': '严格管控'}
    ]
}

ENG['Bk'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，半衰期330天'},
        'note': '锫是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '科研', 'desc': 'Bk-249用于合成超重元素靶材'}
    ],
    'failureAnalysis': []
}

ENG['Cf'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素'},
        'note': '锎是强中子发射体'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '中子源', 'desc': 'Cf-252中子源用于石油测井、中子活化分析与核反应堆启动'},
        {'name': '医疗', 'desc': 'Cf-252中子源用于宫颈癌放射治疗'},
        {'name': '材料检测', 'desc': 'Cf-252中子源用于航空部件中子照相'}
    ],
    'failureAnalysis': [
        {'mode': '辐射防护', 'cause': 'Cf-252强中子辐射', 'prevention': '严格管控，屏蔽防护'}
    ]
}

ENG['Es'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '放射性元素，半衰期20天'},
        'note': '锿是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '科研', 'desc': 'Es-252用于合成超重元素靶材'}
    ],
    'failureAnalysis': []
}

ENG['Fm'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '半衰期100天'},
        'note': '镄是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无工程应用', 'desc': '半衰期短，仅限科学研究'}
    ],
    'failureAnalysis': []
}

ENG['Md'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '半衰期51天'},
        'note': '钔是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无工程应用', 'desc': '半衰期短，仅限科学研究'}
    ],
    'failureAnalysis': []
}

ENG['No'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '半衰期58分钟'},
        'note': '锘是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无工程应用', 'desc': '半衰期过短，无工程应用'}
    ],
    'failureAnalysis': []
}

ENG['Lr'] = {
    'materialGrades': [{'standard': 'N/A', 'grade': '放射性元素', 'equivalent': '无标准牌号'}],
    'alloyRoles': [],
    'processing': {
        'weldability': 'N/A', 'machinability': 'N/A', 'formability': 'N/A',
        'heatTreatment': {'annealing': 'N/A', 'quenching': 'N/A', 'tempering': 'N/A', 'note': '半衰期11小时'},
        'note': '铹是人造放射性元素'
    },
    'corrosionResistance': {
        'acidResistance': 'N/A', 'alkaliResistance': 'N/A', 'saltwaterResistance': 'N/A',
        'corrosionRate': 'N/A', 'protectionMethods': [],
        'note': 'N/A'
    },
    'applications': [
        {'name': '无工程应用', 'desc': '半衰期过短，无工程应用'}
    ],
    'failureAnalysis': []
}

# ═══ 超重元素 (104-118) ═══════════════════════════════════

_superheavy = ['Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn', 'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og']
_superheavy_names = {
    'Rf': '𬬻', 'Db': '𬭊', 'Sg': '𬭳', 'Bh': '𬭛', 'Hs': '𬭶',
    'Mt': '鿏', 'Ds': '𫟼', 'Rg': '𬬭', 'Cn': '鎶', 'Nh': '鉨',
    'Fl': '𫓧', 'Mc': '镆', 'Lv': '𫟷', 'Ts': '鿬', 'Og': '鿫'
}

for sym in _superheavy:
    d = no_eng_app()
    d['applications'] = [{'name': '无工程应用', 'desc': f'{_superheavy_names.get(sym, sym)}半衰期过短，无工程应用，仅限实验室原子数级别研究'}]
    ENG[sym] = d

# ═══ JS 文件生成 ═══════════════════════════════════════════

HEADER = """/**
 * P6 材料工程数据 — 独立数据文件
 * 加载方式：<script src="data/p6-engineering.js"></script>
 *
 * 数据来源:
 *   ASTM International / GB国家标准
 *   ASM Handbook Vol.1-20
 *   MMPDS (金属材料性能数据手册)
 *   CRC Handbook of Materials Science
 *   USGS Minerals Commodity Summaries 2024
 */

const P6_ENGINEERING = {};

"""

FOOTER = """
if (typeof window !== 'undefined') {
  window.P6_ENGINEERING = P6_ENGINEERING;
}
"""

# 118 元素顺序表
ELEMENT_ORDER = [
    'H','He','Li','Be','B','C','N','O','F','Ne',
    'Na','Mg','Al','Si','P','S','Cl','Ar',
    'K','Ca','Sc','Ti','V','Cr','Mn','Fe','Co','Ni','Cu','Zn','Ga','Ge','As','Se','Br','Kr',
    'Rb','Sr','Y','Zr','Nb','Mo','Tc','Ru','Rh','Pd','Ag','Cd','In','Sn','Sb','Te','I','Xe',
    'Cs','Ba','La','Ce','Pr','Nd','Pm','Sm','Eu','Gd','Tb','Dy','Ho','Er','Tm','Yb','Lu',
    'Hf','Ta','W','Re','Os','Ir','Pt','Au','Hg','Tl','Pb','Bi','Po','At','Rn',
    'Fr','Ra','Ac','Th','Pa','U','Np','Pu','Am','Cm','Bk','Cf','Es','Fm','Md','No','Lr',
    'Rf','Db','Sg','Bh','Hs','Mt','Ds','Rg','Cn','Nh','Fl','Mc','Lv','Ts','Og'
]

def generate():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    lines = [HEADER]
    for sym in ELEMENT_ORDER:
        if sym not in ENG:
            print(f'WARNING: {sym} not found in ENG dict!')
            continue
        lines.append(f"P6_ENGINEERING['{sym}'] = {js_val(ENG[sym])};\n")
    lines.append(FOOTER)
    content = ''.join(lines)
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    count = len(ELEMENT_ORDER)
    print(f'Generated {OUTPUT_FILE}')
    print(f'Elements: {count}')
    print(f'File size: {os.path.getsize(OUTPUT_FILE)} bytes')

if __name__ == '__main__':
    generate()
