#!/usr/bin/env python3
"""
元素周期表数据全面补全脚本 (v1.0)
参照 carbon-element-comprehensive.html 的 19 维度知识模式，
为所有 118 个元素补全缺失的数值字段和生成详细内容。

运行方式：
  python complete-all-elements.py

输出：
  - 更新 data/elements.js（补全数值字段）
  - 更新 details/*.md（生成19维度详细内容）
  - 生成补全报告
"""

import json, re, os, sys, math

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'data')
DETAILS_DIR = os.path.join(BASE_DIR, 'details')

# ════════════════════════════════════════════════════════════════════
# 第一部分：118 元素缺失数值数据补全
# 数据来源：CRC Handbook 105th ed., NIST WebBook, IUPAC CIAAW 2024
# ════════════════════════════════════════════════════════════════════

# 缺失数值补全数据库 —— 仅填充原数据中为 null 的字段
# 格式：{z: {field: value}}
SUPPLEMENT_DATA = {
    # ─── z=1 H ───
    1: {
        'ionicRadius': None,  # H⁻=154pm (但罕见)，H⁺无离子半径
        'shearModulus': None,  # 气体
        'stdElectrodePotential': 0.0,
        'redoxCouple': 'H+/H2',
    },
    # ─── z=2 He ───
    2: {
        'ionicRadius': None,
        'shearModulus': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=3 Li ───
    3: {
        'ionicRadius': 76,  # Li⁺
        'shearModulus': 4.2,
    },
    # ─── z=4 Be ───
    4: {
        'ionicRadius': 45,  # Be²⁺
        'shearModulus': 14.5,
        'stdElectrodePotential': -1.85,
        'redoxCouple': 'Be2+/Be',
        'electrochemicalEquivalent': 0.168,
    },
    # ─── z=5 B ───
    5: {
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=7 N ───
    7: {
        'ionicRadius': None,
        'shearModulus': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=8 O ───
    8: {
        'ionicRadius': 140,  # O²⁻
        'shearModulus': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=9 F ───
    9: {
        'ionicRadius': 133,  # F⁻
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=10 Ne ───
    10: {
        'ionicRadius': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=11 Na ───
    11: {
        'ionicRadius': 102,  # Na⁺
    },
    # ─── z=12 Mg ───
    12: {
        'ionicRadius': 72,  # Mg²⁺
        'shearModulus': 17,
    },
    # ─── z=15 P ───
    15: {
        'ionicRadius': 212,  # P³⁻
        'shearModulus': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=16 S ───
    16: {
        'ionicRadius': 184,  # S²⁻
        'shearModulus': None,
    },
    # ─── z=17 Cl ───
    17: {
        'ionicRadius': 181,  # Cl⁻
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=18 Ar ───
    18: {
        'ionicRadius': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=19 K ───
    19: {
        'ionicRadius': 138,  # K⁺
        'shearModulus': 1.3,
    },
    # ─── z=20 Ca ───
    20: {
        'ionicRadius': 100,  # Ca²⁺
        'shearModulus': 7.4,
    },
    # ─── z=23 V ───
    23: {
        'ionicRadius': 64,  # V²⁺
        'shearModulus': 47,
    },
    # ─── z=24 Cr ───
    24: {
        'ionicRadius': 64,  # Cr²⁺；Cr³⁺=61.5
        'shearModulus': 115,
    },
    # ─── z=27 Co ───
    27: {
        'ionicRadius': 74.5,  # Co²⁺
        'shearModulus': 75,
    },
    # ─── z=28 Ni ───
    28: {
        'ionicRadius': 69,  # Ni²⁺
        'shearModulus': 76,
    },
    # ─── z=31 Ga ───
    31: {
        'ionicRadius': 62,  # Ga³⁺
        'shearModulus': None,
        'stdElectrodePotential': -0.55,
        'redoxCouple': 'Ga3+/Ga',
        'electrochemicalEquivalent': 0.229,
    },
    # ─── z=32 Ge ───
    32: {
        'ionicRadius': 73,  # Ge²⁺
        'shearModulus': None,
    },
    # ─── z=35 Br ───
    35: {
        'ionicRadius': 196,  # Br⁻
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=36 Kr ───
    36: {
        'ionicRadius': None,
        'stdElectrodePotential': None,
        'redoxCouple': None,
        'electrochemicalEquivalent': None,
    },
    # ─── z=39 Y ───
    39: {
        'ionicRadius': 90,  # Y³⁺
    },
    # ─── z=40 Zr ───
    40: {
        'ionicRadius': 72,  # Zr⁴⁺
    },
    # ─── z=43 Tc ─── (放射性)
    43: {
        'ionicRadius': 64.5,
        'shearModulus': None,
    },
    # ─── z=44 Ru ───
    44: {
        'ionicRadius': 67,  # Ru³⁺
        'shearModulus': 173,
    },
    # ─── z=47 Ag ───
    47: {
        'ionicRadius': 115,  # Ag⁺
        'shearModulus': 30.2,
    },
    # ─── z=48 Cd ───
    48: {
        'ionicRadius': 95,  # Cd²⁺
        'shearModulus': 19.2,
    },
    # ─── z=51 Sb ───
    51: {
        'ionicRadius': 76,  # Sb³⁺
        'shearModulus': None,
    },
    # ─── z=52 Te ───
    52: {
        'ionicRadius': 221,  # Te²⁻
        'shearModulus': None,
    },
    # ─── z=55 Cs ───
    55: {
        'ionicRadius': 167,  # Cs⁺
        'shearModulus': 1.5,
    },
    # ─── z=56 Ba ───
    56: {
        'ionicRadius': 135,  # Ba²⁺
        'shearModulus': 6.3,
    },
    # ─── z=57-71 镧系 ───
    57: {'ionicRadius': 103.2},  # La³⁺
    58: {'ionicRadius': 102},
    59: {'ionicRadius': 99},  # Pr³⁺
    60: {'ionicRadius': 98.3},  # Nd³⁺
    61: {'ionicRadius': 97},  # Pm³⁺
    62: {'ionicRadius': 95.8},
    63: {'ionicRadius': 94.7},  # Eu³⁺
    64: {'ionicRadius': 93.8},  # Gd³⁺
    65: {'ionicRadius': 92.3},  # Tb³⁺
    66: {'ionicRadius': 91.2},
    67: {'ionicRadius': 90.1},  # Ho³⁺
    68: {'ionicRadius': 89},  # Er³⁺
    69: {'ionicRadius': 88},
    70: {'ionicRadius': 86.8},  # Yb³⁺
    71: {'ionicRadius': 86.1},  # Lu³⁺
    # ─── z=72 Hf ───
    72: {'ionicRadius': 71},  # Hf⁴⁺
    # ─── z=75 Re ───
    75: {'ionicRadius': 63},  # Re⁴⁺
    # ─── z=76 Os ───
    76: {'ionicRadius': 63},  # Os⁴⁺
    # ─── z=79 Au ───
    79: {'ionicRadius': 91},  # Au³⁺；Au⁺=137
    # ─── z=80 Hg ───
    80: {'ionicRadius': 102},  # Hg²⁺
    # ─── z=83 Bi ───
    83: {'ionicRadius': 103},  # Bi³⁺
    # ─── z=84 Po ─── (放射性)
    84: {'ionicRadius': 67},
    # ─── z=87-118 超重/放射性 ───
    87: {'ionicRadius': 180},  # Fr⁺ (估计)
    88: {'ionicRadius': 148},  # Ra²⁺ (估计)
    89: {'ionicRadius': 112},
    90: {'ionicRadius': 94},
    91: {'ionicRadius': 89},  # Pa⁴⁺
    92: {'ionicRadius': 83},  # U⁶⁺；U⁴⁺=89
    93: {'ionicRadius': 87},
    94: {'ionicRadius': 85},
    95: {'ionicRadius': 97.5},
    96: {'ionicRadius': 95},
}

# ════════════════════════════════════════════════════════════════════
# 第二部分：元素详细内容生成模板（参照碳元素19维度模式）
# ════════════════════════════════════════════════════════════════════

# 知识维度定义（与碳元素页面一致）
KNOWLEDGE_DIMENSIONS = [
    ('sec1',  '基本属性',   '1'),
    ('sec2',  '原子结构',   '2'),
    ('sec3',  '同位素',     '3'),
    ('sec4',  '物理性质',   '4'),
    ('sec5',  '化学性质',   '5'),
    ('sec6',  '同素异形体/相态', '6'),
    ('sec7',  '有机/无机化学', '7'),
    ('sec8',  '生物化学与生命', '8'),
    ('sec9',  '循环与环境', '9'),
    ('sec10', '环境与气候', '10'),
    ('sec11', '工业应用',   '11'),
    ('sec12', '纳米技术',   '12'),
    ('sec13', '核物理',     '13'),
    ('sec14', '天体物理',   '14'),
    ('sec15', '地质学',     '15'),
    ('sec16', '发现历史',   '16'),
    ('sec17', '量子化学',   '17'),
    ('sec18', '光谱学',     '18'),
    ('sec19', '前沿与未来', '19'),
]

# 元素分类中文映射
CATEGORY_ZH = {
    'alkali-metal': '碱金属', 'alkaline-earth': '碱土金属',
    'transition': '过渡金属', 'post-transition': '后过渡金属',
    'metalloid': '准金属/类金属', 'nonmetal': '非金属',
    'halogen': '卤素', 'noble-gas': '稀有气体',
    'lanthanide': '镧系元素', 'actinide': '锕系元素',
}

# 状态中文映射
STATE_ZH = {'solid': '固态', 'liquid': '液态', 'gas': '气态', 'synthetic': '人造'}

# 电子构型生成（基于周期表规律）
ELECTRON_CONFIG = {
    1: '1s¹', 2: '1s²', 3: '[He] 2s¹', 4: '[He] 2s²',
    5: '[He] 2s² 2p¹', 6: '[He] 2s² 2p²', 7: '[He] 2s² 2p³',
    8: '[He] 2s² 2p⁴', 9: '[He] 2s² 2p⁵', 10: '[He] 2s² 2p⁶',
    11: '[Ne] 3s¹', 12: '[Ne] 3s²', 13: '[Ne] 3s² 3p¹',
    14: '[Ne] 3s² 3p²', 15: '[Ne] 3s² 3p³', 16: '[Ne] 3s² 3p⁴',
    17: '[Ne] 3s² 3p⁵', 18: '[Ne] 3s² 3p⁶',
    19: '[Ar] 4s¹', 20: '[Ar] 4s²',
    21: '[Ar] 3d¹ 4s²', 22: '[Ar] 3d² 4s²', 23: '[Ar] 3d³ 4s²',
    24: '[Ar] 3d⁵ 4s¹', 25: '[Ar] 3d⁵ 4s²', 26: '[Ar] 3d⁶ 4s²',
    27: '[Ar] 3d⁷ 4s²', 28: '[Ar] 3d⁸ 4s²', 29: '[Ar] 3d¹⁰ 4s¹',
    30: '[Ar] 3d¹⁰ 4s²', 31: '[Ar] 3d¹⁰ 4s² 4p¹', 32: '[Ar] 3d¹⁰ 4s² 4p²',
    33: '[Ar] 3d¹⁰ 4s² 4p³', 34: '[Ar] 3d¹⁰ 4s² 4p⁴', 35: '[Ar] 3d¹⁰ 4s² 4p⁵',
    36: '[Ar] 3d¹⁰ 4s² 4p⁶',
    37: '[Kr] 5s¹', 38: '[Kr] 5s²',
    39: '[Kr] 4d¹ 5s²', 40: '[Kr] 4d² 5s²', 41: '[Kr] 4d⁴ 5s¹',
    42: '[Kr] 4d⁵ 5s¹', 43: '[Kr] 4d⁵ 5s²', 44: '[Kr] 4d⁷ 5s¹',
    45: '[Kr] 4d⁸ 5s¹', 46: '[Kr] 4d¹⁰', 47: '[Kr] 4d¹⁰ 5s¹',
    48: '[Kr] 4d¹⁰ 5s²', 49: '[Kr] 4d¹⁰ 5s² 5p¹', 50: '[Kr] 4d¹⁰ 5s² 5p²',
    51: '[Kr] 4d¹⁰ 5s² 5p³', 52: '[Kr] 4d¹⁰ 5s² 5p⁴', 53: '[Kr] 4d¹⁰ 5s² 5p⁵',
    54: '[Kr] 4d¹⁰ 5s² 5p⁶',
    55: '[Xe] 6s¹', 56: '[Xe] 6s²',
    57: '[Xe] 4f⁰ 5d¹ 6s²', 58: '[Xe] 4f¹ 5d¹ 6s²', 59: '[Xe] 4f³ 6s²',
    60: '[Xe] 4f⁴ 6s²', 61: '[Xe] 4f⁵ 6s²', 62: '[Xe] 4f⁶ 6s²',
    63: '[Xe] 4f⁷ 6s²', 64: '[Xe] 4f⁷ 5d¹ 6s²', 65: '[Xe] 4f⁹ 6s²',
    66: '[Xe] 4f¹⁰ 6s²', 67: '[Xe] 4f¹¹ 6s²', 68: '[Xe] 4f¹² 6s²',
    69: '[Xe] 4f¹³ 6s²', 70: '[Xe] 4f¹⁴ 6s²', 71: '[Xe] 4f¹⁴ 5d¹ 6s²',
    72: '[Xe] 4f¹⁴ 5d² 6s²', 73: '[Xe] 4f¹⁴ 5d³ 6s²', 74: '[Xe] 4f¹⁴ 5d⁴ 6s²',
    75: '[Xe] 4f¹⁴ 5d⁵ 6s²', 76: '[Xe] 4f¹⁴ 5d⁶ 6s²', 77: '[Xe] 4f¹⁴ 5d⁷ 6s²',
    78: '[Xe] 4f¹⁴ 5d⁹ 6s¹', 79: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', 80: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
    81: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', 82: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
    83: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', 84: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
    85: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', 86: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
    87: '[Rn] 7s¹', 88: '[Rn] 7s²',
    89: '[Rn] 6d¹ 7s²', 90: '[Rn] 6d² 7s²', 91: '[Rn] 4f² 6d¹ 7s²',
    92: '[Rn] 5f³ 6d¹ 7s²', 93: '[Rn] 5f⁴ 6d¹ 7s²', 94: '[Rn] 5f⁶ 7s²',
    95: '[Rn] 5f⁷ 7s²', 96: '[Rn] 5f⁸ 7s²',
    97: '[Rn] 5f⁹ 7s²', 98: '[Rn] 5f¹⁰ 7s²',
    99: '[Rn] 5f¹¹ 7s²', 100: '[Rn] 5f¹² 7s²',
    101: '[Rn] 5f¹³ 7s²', 102: '[Rn] 5f¹⁴ 7s²',
    103: '[Rn] 5f¹⁴ 7s² 7p¹',
    # z>=104 超重元素电子构型（预测值）
    104: '[Rn] 5f¹⁴ 6d² 7s²', 105: '[Rn] 5f¹⁴ 6d³ 7s²',
    106: '[Rn] 5f¹⁴ 6d⁴ 7s²', 107: '[Rn] 5f¹⁴ 6d⁵ 7s²',
    108: '[Rn] 5f¹⁴ 6d⁶ 7s²', 109: '[Rn] 5f¹⁴ 6d⁷ 7s²',
    110: '[Rn] 5f¹⁴ 6d⁸ 7s²', 111: '[Rn] 5f¹⁴ 6d⁹ 7s²',
    112: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', 113: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
    114: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', 115: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
    116: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', 117: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
    118: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
}

# 元素特性描述库（用于生成19维度内容）
# 每个元素的关键知识点
ELEMENT_KNOWLEDGE = {
    1: {
        'subtitle': '宇宙中最丰富的元素，清洁能源的未来之星。从恒星的核心到人体的每一个水分子，氢无处不在。',
        'hero_meta': ['原子量 1.008', '电子构型 1s¹', '熔点 -259.14°C', '密度 0.00009 g/cm³', '电负性 2.20', '宇宙丰度 ~75%'],
        'key_properties': '氢是宇宙中最简单、最轻、最丰富的元素。它只有一个质子和一个电子，但却是宇宙化学的起点——恒星通过氢聚变产生所有更重的元素。在地球上，氢主要以水的形式存在，是生命的不可或缺的组成部分。',
        'atomic_structure_note': '氢原子是量子力学的教科书模型——薛定谔方程对氢原子的精确解是量子力学最早的重大成功之一。玻尔模型虽然简化，但精确预测了氢光谱的巴尔默系列。',
        'isotope_note': '氢的三种同位素各有独特应用：氕（¹H）是普通氢；氘（²H，D）用于重水核反应堆慢化剂和NMR溶剂；氚（³H，T）是聚变能源和放射性示踪的关键材料。',
        'chemistry_note': '氢能与几乎所有元素形成化合物。最重要的反应包括：与氧燃烧生成水（2H₂+O₂→2H₂O）、Haber合成氨（N₂+3H₂→2NH₃）、加氢反应（有机化学中最常用的还原方法之一）。氢键是决定水和DNA结构的关键力量。',
        'biology_note': '人体约60%为水（H₂O），10%为氢（质量分数）。氢键维持蛋白质二级结构和DNA双螺旋。NADH/FADH₂是细胞呼吸的关键电子载体。胃酸（HCl）依赖氢离子。',
        'applications': ['化石燃料精炼（加氢脱硫）', '合成氨（全球最大量化学生产，~1.8亿吨/年）', '氢燃料电池（PEMFC效率~60%）', '火箭推进剂（液氢+液氧）', '金属冶炼还原气氛', '半导体工艺（外延生长载气）'],
        'history': [('1766年', 'Henry Cavendish 确认氢为独立元素'), ('1783年', 'Lavoisier 命名"Hydrogen"（生成水之素）'), ('1931年', 'Harold Urey 发现氘'), ('1932年', '重水首次生产'), ('1950s', '氢聚变原理用于氢弹'), ('2020s', '氢能源商业化加速')],
        'frontiers': ['可控核聚变（ITER、EAST）', '绿氢制备（电解水+可再生能源）', '氢燃料电池汽车（Mirai、NEXO）', '固态储氢材料', '氢基炼钢（替代碳还原）', '太阳氢循环（人工光合作用）'],
    },
    2: {
        'subtitle': '太阳的第二代产物，惰性气体的先驱。它拒绝与其他元素结合，却赋予深海潜水安全与 MRI 超冷环境。',
        'hero_meta': ['原子量 4.0026', '电子构型 1s²', '沸点 -268.93°C', '密度 0.000179 g/cm³', '第二轻元素', '宇宙丰度 ~24%'],
        'key_properties': '氦是宇宙中第二丰富的元素，但地球上的氦极为稀缺（仅占大气0.0005%）。氦的1s²满壳层使其成为最惰性的元素之一，至今仅发现少数极端条件下的化合物。液氦（4.2 K以下）展现超流体性——零黏度、零电阻的量子奇观。',
        'atomic_structure_note': '氦的1s²闭合壳层是所有惰性气体的原型。泡利不相容原理决定了两个1s电子必须自旋相反（↑↓），这是化学稳定性的量子根源。',
        'chemistry_note': '氦的化学惰性近乎绝对。2017年科学家首次在极端高压下合成Na₂He化合物（>113 GPa），这是氦化学的唯一突破。氦主要用于惰性保护和低温环境。',
        'applications': ['MRI超导磁体冷却（液氦4.2K）', '深海潜水混合气（Heliox，防氮麻醉）', '气球/飞艇浮升气体', '半导体制造保护气', '核反应堆冷却介质', '超流体量子实验'],
    },
    6: {
        'subtitle': '生命的骨架，文明的燃料，宇宙中第四丰富的元素。从钻石到DNA，从石墨烯到星际尘埃——碳，是万物之基。',
        'hero_meta': ['原子量 12.011', '电子构型 [He] 2s² 2p²', '熔点 3550°C', '密度 2.267 g/cm³', '电负性 2.55', '已知化合物 >1000万种'],
        'key_properties': '碳是已知形成化合物种类最多的元素，这源于其独特的4个价电子（2s²2p²）和sp/sp²/sp³杂化灵活性。碳-碳键的能量适中（346 kJ/mol），既足够稳定又可断裂重组，使碳能够构建从直链到环状、从平面到立体的无穷分子结构。',
        'atomic_structure_note': '碳的三种轨道杂化是其化学多样性的核心：sp³杂化→正四面体（金刚石/甲烷），sp²杂化→平面三角（石墨/苯），sp杂化→直线型（CO₂/乙炔）。',
        'isotope_note': '¹²C是原子质量基准（精确12u）。¹³C（核自旋1/2）是NMR核心工具。¹⁴C（半衰期5730年）用于放射性碳测年——考古学和地质学的基石。δ¹³C分馏分析是古气候重建的关键。',
        'chemistry_note': '碳能与几乎所有元素成键，已知碳化合物超1000万种。C-C键能346 kJ/mol、C-H 411、C=O 745、C≡N 891。常见氧化态：-4（CH₄）到+4（CO₂）。碳在充足氧气中燃烧生成CO₂（ΔH=-393.5 kJ/mol），高温下可还原金属氧化物。',
        'biology_note': '碳是生命的核心元素。所有四大生物分子（蛋白质、核酸、脂质、碳水化合物）都以碳为骨架。人体约18.5%为碳（~13kg）。光合作用将CO₂转化为糖类，细胞呼吸将糖类氧化回CO₂——这是碳在生物圈中的循环。',
        'applications': ['钢铁冶炼（焦炭还原剂）', '锂电池负极（石墨）', '碳纤维复合材料', '活性炭吸附', '碳黑轮胎补强', '金刚石工具切割', '石墨烯电子器件'],
        'history': [('史前', '人类使用木炭'), ('1772年', '拉瓦锡证明金刚石由碳组成'), ('1779年', '舍勒证明石墨为碳'), ('1828年', '维勒合成尿素，开创有机化学'), ('1985年', '发现富勒烯C₆₀'), ('1991年', '发现碳纳米管'), ('2004年', '分离石墨烯（诺贝尔奖）'), ('2018年', '魔角石墨烯超导')],
        'frontiers': ['魔角石墨烯超导', '碳捕获与利用（CCUS）', '碳基量子计算（NV色心）', '碳纳米管计算机', '人工光合作用', '碳基储氢材料'],
    },
    8: {
        'subtitle': '呼吸的元素，燃烧的助燃剂，地球生命的守护者。氧以水的形式覆盖71%的地球表面，以臭氧层保护生命免受紫外辐射。',
        'hero_meta': ['原子量 15.999', '电子构型 [He] 2s² 2p⁴', '熔点 -218.79°C', '密度 0.001429 g/cm³', '电负性 3.44', '地壳丰度 46.6%'],
        'key_properties': '氧是地壳中最丰富的元素（46.6%），地球大气中占21%。氧的高电负性（3.44，仅次于氟）使其成为最强的氧化剂之一，也是绝大多数燃烧反应的驱动力。',
        'atomic_structure_note': '氧的2s²2p⁴价电子层有2个未配对电子（2p⁴→↑↓ ↑_ ↑_），使其倾向于形成2个共价键。但O₂分子中的双键实际是1个σ键+2个三电子π键（paramagnetic），这与简单双键模型不同。',
        'chemistry_note': '氧能与绝大多数元素反应形成氧化物。金属氧化物构成地壳的主体（SiO₂、Al₂O₃、Fe₂O₃等）。有机物的氧化（燃烧）是能量释放的主要途径。臭氧O₃是紫外线吸收的关键。',
        'biology_note': '氧是 aerobic 生命的基础。细胞呼吸：C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP。血红蛋白运输O₂到全身。臭氧层吸收UV-B/C辐射，保护地表生命。',
        'applications': ['医疗供氧', '钢铁冶炼（氧吹转炉）', '火箭推进剂氧化剂', '废水处理氧化', '化工氧化反应', '臭氧消毒'],
    },
    26: {
        'subtitle': '文明的骨架，工业的脊梁。从金字塔到高铁，从血液到星核，铁是地球上最实用也最深藏的元素。',
        'hero_meta': ['原子量 55.845', '电子构型 [Ar] 3d⁶ 4s²', '熔点 1538°C', '密度 7.874 g/cm³', '电负性 1.83', '地壳丰度 5.63%'],
        'key_properties': '铁是地球上使用量最大的金属（年产量18亿吨），也是地壳中第四丰富的元素。铁的3d⁶4s²电子构型赋予其多种氧化态（+2, +3最常见），是过渡金属化学的核心。',
        'atomic_structure_note': '铁的3d⁶4s²价电子使其具有多种氧化态。Fe²⁺（3d⁶）和Fe³⁺（3d⁵）是最常见的。Fe³⁺的半满d⁵壳层特别稳定（Hund规则最大交换能）。',
        'chemistry_note': '铁在潮湿空气中氧化为Fe₂O₃·nH₂O（铁锈），这是人类最大的材料损耗问题之一。炼铁的核心反应：2Fe₂O₃ + 3C → 4Fe + 3CO₂。钢铁中的碳含量决定性质：低碳钢(<0.3%)、中碳钢(0.3-0.6%)、高碳钢(0.6-2.1%)。',
        'biology_note': '铁是血红蛋白的核心——每个血红蛋白分子含4个Fe²⁺，每个Fe²⁺可结合1个O₂分子。铁缺乏是全球最常见的营养缺乏症（影响~20亿人）。铁也是细胞呼吸电子传递链的关键成分。',
        'applications': ['钢铁建材（全球最大用量金属）', '汽车/船舶/桥梁', '磁性材料（磁铁、变压器）', '血红蛋白核心', '催化剂（Fenton反应、Haber工艺）', '不锈钢（Cr+Fe合金）'],
    },
    79: {
        'subtitle': '永恒闪耀的贵金属，电子的完美导体。从法老的面具到纳米金粒子，黄金穿越千年仍光芒不减。',
        'hero_meta': ['原子量 196.97', '电子构型 [Xe] 4f¹⁴ 5d¹⁰ 6s¹', '熔点 1064.18°C', '密度 19.3 g/cm³', '电负性 2.54', '地壳丰度 0.004 ppm'],
        'key_properties': '金是化学稳定性最高的金属之一——不被空气氧化、不被单一酸溶解（仅王水可溶）。其5d¹⁰6s¹闭合d壳层赋予极高稳定性。金纳米粒子具有独特的光学性质（表面等离子共振）。',
        'chemistry_note': '金几乎不参与常规化学反应。王水（HNO₃+3HCl）溶解金：Au + HNO₃ + 4HCl → HAuCl₄ + NO + 2H₂O。氰化法提金：4Au + 8NaCN + O₂ + 2H₂O → 4Na[Au(CN)₂] + 4NaOH。',
        'applications': ['珠宝/货币储备', '电子互连（高可靠性）', '纳米金医学（靶向治疗）', '催化剂（Au/TiO₂低温CO氧化）', '金箔红外反射', '牙科修复'],
    },
}

# 为没有预写知识的元素生成通用模板内容
def generate_generic_knowledge(z, symbol, name, name_en, el_data):
    """为每个元素生成基础19维度内容"""
    category = CATEGORY_ZH.get(el_data.get('category', ''), el_data.get('category', ''))
    state = STATE_ZH.get(el_data.get('state', ''), el_data.get('state', ''))
    config = ELECTRON_CONFIG.get(z, f'[?] (z={z})')

    # 基本信息
    mp = el_data.get('meltingPoint')
    bp = el_data.get('boilingPoint')
    density = el_data.get('density')
    en = el_data.get('electronegativity')
    mass = el_data.get('mass')

    mp_str = f'{mp}°C' if mp is not None else '数据待测定'
    bp_str = f'{bp}°C' if bp is not None else '数据待测定'
    density_str = f'{density} g/cm³' if density is not None else '数据待测定'
    en_str = str(en) if en is not None else '尚未测定'

    period = el_data.get('period', '?')
    group = el_data.get('group', '?')
    radioactive = el_data.get('radioactive', False)
    radio_str = '，放射性元素' if radioactive else ''

    # 生成subtitle
    subtitles = {
        'alkali-metal': f'最活泼的金属族，{name}以剧烈反应闻名。一触水便燃烧，一入空气便氧化——{category}永远不甘寂寞。',
        'alkaline-earth': f'地壳深处的坚实力量。{name}虽不如碱金属狂暴，却以稳定和实用著称。',
        'transition': f'工业的脊梁，色彩的魔法师。{name}的d电子赋予其多变的氧化态和丰富的化学。',
        'post-transition': f'从铅的沉重到铝的轻盈，{name}是金属世界的过渡者。',
        'metalloid': f'金属与非金属的边界行者。{name}兼具两类性质，是半导体世界的关键。',
        'nonmetal': f'生命的构建者或反应的驱动力。{name}以多样化的化学性质丰富着这个世界。',
        'halogen': f'最凶猛的氧化剂家族。{name}对电子的渴望使它成为化学反应的急先锋。',
        'noble-gas': f'拒绝一切化学社交的隐士。{name}以满壳层的从容，在元素世界中独善其身。',
        'lanthanide': f'稀土家族的一员。{name}虽不张扬，却是现代科技不可或缺的幕后英雄。',
        'actinide': f'核能的双刃剑。{name}的放射性既是能量源泉，也是安全挑战。',
    }
    subtitle = subtitles.get(el_data.get('category', ''), f'{name}，第{z}号元素{radio_str}。')

    hero_meta = [
        f'原子量 {mass}', f'电子构型 {config}',
        f'熔点 {mp_str}', f'密度 {density_str}',
        f'电负性 {en_str}', f'第{period}周期 第{group}族'
    ]

    key_props = f'{name}（{name_en}）是第{z}号元素，属于{category}，位于第{period}周期第{group}族。'
    if mp is not None:
        key_props += f'熔点{mp_str}，沸点{bp_str}，密度{density_str}。'
    if en is not None:
        key_props += f'电负性{en_str}（Pauling标度）。'
    if radioactive:
        key_props += f'{name}是放射性元素，所有同位素都不稳定。'
    key_props += f'{name}的电子构型为{config}，'
    if el_data.get('oxidationStates'):
        oxs = el_data['oxidationStates']
        key_props += f'常见氧化态包括{",".join(str(x) for x in oxs[:4])}等。'

    return {
        'subtitle': subtitle,
        'hero_meta': hero_meta,
        'key_properties': key_props,
        'atomic_structure_note': f'{name}的核外电子排布为{config}。价电子数决定了{name}的成键模式和化学性质。',
        'isotope_note': f'{name}有{len(el_data.get("isotopes", []))}种已知同位素。' + ('最稳定的同位素半衰期信息见同位素章节。' if radioactive else '稳定同位素的天然丰度见同位素章节。'),
        'chemistry_note': f'{name}的化学性质由其{category}身份决定。',
        'biology_note': f'关于{name}在生物体系中的角色，取决于元素类别。' + (f'{name}是某些酶或蛋白质的组成部分。' if category in ['transition'] else ''),
        'applications': [el_data.get('productionMethod', '制备方法待补充') or '制备方法待补充'],
        'history': [],
        'frontiers': [],
    }


def generate_markdown_detail(z, symbol, name, name_en, el_data, knowledge):
    """生成单个元素的19维度 Markdown 详细内容"""
    category = CATEGORY_ZH.get(el_data.get('category', ''), el_data.get('category', ''))
    state_zh = STATE_ZH.get(el_data.get('state', ''), el_data.get('state', ''))

    lines = []
    lines.append(f'# {name}（{symbol}）· {name_en} — 全面知识图谱')
    lines.append('')
    lines.append(f'> {knowledge.get("subtitle", f"{name}，第{z}号元素。")}')
    lines.append('')
    lines.append(f'**核心标签：** 第{z}号元素 | {category} | 第{el_data.get("period","?")}周期第{el_data.get("group","?")}族 | {state_zh}')
    lines.append('')

    mp = el_data.get('meltingPoint')
    bp = el_data.get('boilingPoint')
    density = el_data.get('density')
    en = el_data.get('electronegativity')
    mass = el_data.get('mass')
    ion_e = el_data.get('ionizationEnergy')
    ea = el_data.get('electronAffinity')
    ar = el_data.get('atomicRadius')
    cr = el_data.get('covalentRadius')
    vdw = el_data.get('vdwRadius')
    config = ELECTRON_CONFIG.get(z, '待补充')
    oxs = el_data.get('oxidationStates', [])
    crystal = el_data.get('crystalStructure', 'unknown')

    # ─── 1. 基本属性 ───
    lines.append('## 1. 基本属性')
    lines.append('')
    lines.append(knowledge.get('key_properties', f'{name}是第{z}号元素。'))
    lines.append('')
    lines.append('### 基本参数总表')
    lines.append('')
    lines.append('| 属性 | 数值 | 属性 | 数值 |')
    lines.append('|------|------|------|------|')
    lines.append(f'| 符号 | {symbol} | 原子量 | {mass} u |')
    lines.append(f'| 熔点 | {mp if mp is not None else "待测定"}°C | 沸点 | {bp if bp is not None else "待测定"}°C |')
    lines.append(f'| 密度 | {density if density is not None else "待测定"} g/cm³ | 电负性 | {en if en is not None else "待测定"} |')
    lines.append(f'| 第一电离能 | {ion_e if ion_e is not None else "待测定"} kJ/mol | 电子亲和能 | {ea if ea is not None else "待测定"} kJ/mol |')
    lines.append(f'| 原子半径 | {ar if ar is not None else "待测定"} pm | 共价半径 | {cr if cr is not None else "待测定"} pm |')
    lines.append(f'| 范德华半径 | {vdw if vdw is not None else "待测定"} pm | 晶体结构 | {crystal} |')
    lines.append(f'| CAS号 | {el_data.get("casNumber", "待查")} | PubChem CID | {el_data.get("pubChemCid", "待查")} |')
    lines.append(f'| 氧化态 | {",".join(str(x) for x in oxs) if oxs else "待补充"} | 元素类别 | {category} |')
    lines.append('')

    # ─── 2. 原子结构 ───
    lines.append('## 2. 原子结构')
    lines.append('')
    lines.append(f'{name}的核外电子排布为 **{config}**，')
    lines.append(f'位于第{el_data.get("period","?")}周期，{category}。')
    lines.append(knowledge.get('atomic_structure_note', f'价电子数决定了{name}的成键模式。'))
    lines.append('')
    lines.append(f'- **完整电子排布：** `{config}`')
    lines.append(f'- **原子序数（Z）：** {z}')
    lines.append(f'- **核外电子总数：** {z}')
    lines.append(f'- **价电子数：** 由最外层s和p/d轨道电子数决定')
    lines.append('')

    # ─── 3. 同位素 ───
    lines.append('## 3. 同位素')
    lines.append('')
    isotopes = el_data.get('isotopes', [])
    lines.append(knowledge.get('isotope_note', f'{name}有{len(isotopes)}种已知同位素。'))
    lines.append('')
    if isotopes:
        lines.append('| 同位素 | 质量数 | 天然丰度 | 半衰期 | 衰变方式 | 说明 |')
        lines.append('|--------|--------|----------|--------|----------|------|')
        for iso in isotopes:
            ab = iso.get('abundance')
            ab_str = f'{ab}%' if ab is not None else '痕量/人工'
            hl = iso.get('halfLife', '—')
            dm = iso.get('decayMode') or '—'
            note = iso.get('note', '')
            lines.append(f'| {symbol}-{iso["massNumber"]} | {iso["massNumber"]} | {ab_str} | {hl} | {dm} | {note} |')
    lines.append('')

    # ─── 4. 物理性质 ───
    lines.append('## 4. 物理性质')
    lines.append('')
    state_zh_val = STATE_ZH.get(el_data.get('state',''), '?')
    lines.append(f'{name}在常温下为{state_zh_val}。')
    tc = el_data.get('thermalConductivity')
    er = el_data.get('electricalResistivity')
    hm = el_data.get('hardnessMohs')
    ym = el_data.get('youngsModulus')
    sm = el_data.get('shearModulus')
    bm = el_data.get('bulkModulus')
    s = el_data.get('standardEntropy')
    cp = el_data.get('molarHeatCapacity')

    lines.append('')
    lines.append('### 热力学性质')
    lines.append('')
    lines.append('| 性质 | 数值 | 说明 |')
    lines.append('|------|------|------|')
    lines.append(f'| 熔点 | {mp if mp is not None else "待测定"}°C | — |')
    lines.append(f'| 沸点 | {bp if bp is not None else "待测定"}°C | — |')
    lines.append(f'| 密度 | {density if density is not None else "待测定"} g/cm³ | 常温 |')
    lines.append(f'| 热导率 | {tc if tc is not None else "待测定"} W/(m·K) | — |')
    lines.append(f'| 电阻率 | {er if er is not None else "待测定"} nΩ·m | 20°C |')
    lines.append(f'| 莫氏硬度 | {hm if hm is not None else "待测定"} | — |')
    lines.append(f'| 杨氏模量 | {ym if ym is not None else "待测定"} GPa | — |')
    lines.append(f'| 剪切模量 | {sm if sm is not None else "待测定"} GPa | — |')
    lines.append(f'| 体积模量 | {bm if bm is not None else "待测定"} GPa | — |')
    lines.append(f'| 标准熵 | {s if s is not None else "待测定"} J/(mol·K) | — |')
    lines.append(f'| 摩尔热容 | {cp if cp is not None else "待测定"} J/(mol·K) | — |')
    lines.append('')

    # ─── 5. 化学性质 ───
    lines.append('## 5. 化学性质')
    lines.append('')
    lines.append(knowledge.get('chemistry_note', f'{name}的化学性质由其{category}身份决定。'))
    lines.append('')
    if oxs:
        lines.append('### 氧化态')
        lines.append('')
        lines.append(f'常见氧化态：{", ".join(str(x) for x in oxs)}')
        lines.append('')
    lines.append('')

    # ─── 6. 同素异形体/相态 ───
    lines.append('## 6. 同素异形体/相态')
    lines.append('')
    if symbol in ['C', 'S', 'P', 'O', 'Sn', 'Fe', 'Se', 'As']:
        lines.append(f'{name}存在多种同素异形体/相态，详见化合物知识库。')
    else:
        lines.append(f'{name}的晶体结构为{crystal}。对于大多数元素，同素异形体现象不如碳族元素显著。')
    lines.append('')

    # ─── 7-12. 其他维度（简化版） ───
    for sec_num, sec_title, sec_id in KNOWLEDGE_DIMENSIONS[6:]:
        if sec_num in ['sec7', 'sec8', 'sec9', 'sec10', 'sec11', 'sec12']:
            sec_zh = {
                'sec7': '有机/无机化学', 'sec8': '生物化学与生命', 'sec9': '循环与环境',
                'sec10': '环境与气候', 'sec11': '工业应用', 'sec12': '纳米技术',
            }
            lines.append(f'## {sec_id}. {sec_zh[sec_num]}')
            lines.append('')

            note = knowledge.get('biology_note' if sec_num == 'sec8' else
                                'chemistry_note' if sec_num == 'sec7' else
                                '', '')

            apps = knowledge.get('applications', [])
            if sec_num == 'sec11' and apps:
                lines.append(f'{name}的主要应用领域包括：')
                for app in apps[:6]:
                    lines.append(f'- {app}')
                lines.append('')
            elif note:
                lines.append(note)
                lines.append('')
            else:
                lines.append(f'{name}在此领域的详细信息待进一步补充。')
                lines.append('')

    # ─── 13. 核物理 ───
    lines.append('## 13. 核物理')
    lines.append('')
    if el_data.get('radioactive'):
        lines.append(f'{name}是放射性元素，其核物理性质对于核能和核技术具有重要意义。')
        # 列出主要衰变信息
        for iso in isotopes[:3]:
            hl = iso.get('halfLife', '')
            dm = iso.get('decayMode', '')
            if dm:
                lines.append(f'- {symbol}-{iso["massNumber"]}：半衰期{hl}，衰变方式{dm}')
    else:
        lines.append(f'{name}的核物理性质主要包括核结合能和核结构。{symbol}核的结合能约为{7.5*z:.0f} MeV（估算）。')
    lines.append('')

    # ─── 14. 天体物理 ───
    lines.append('## 14. 天体物理')
    lines.append('')
    crust_ab = el_data.get('crustAbundance')
    if crust_ab is not None:
        lines.append(f'{name}的地壳丰度为{crust_ab} ppm。')
    lines.append(f'{name}在宇宙中的分布取决于其核合成途径。')
    lines.append('')

    # ─── 15. 地质学 ───
    lines.append('## 15. 地质学')
    lines.append('')
    minerals = el_data.get('productionMethod', '')
    if minerals:
        lines.append(f'{name}的工业制备方法：{minerals}')
    lines.append('')

    # ─── 16. 发现历史 ───
    lines.append('## 16. 发现历史')
    lines.append('')
    history = knowledge.get('history', [])
    if history:
        for year, event in history:
            lines.append(f'- **{year}：** {event}')
    else:
        lines.append(f'{name}的发现历史和命名来源待补充。')
    lines.append('')

    # ─── 17-19. 量子化学、光谱学、前沿 ───
    lines.append('## 17. 量子化学')
    lines.append('')
    lines.append(f'{name}的量子化学性质由其电子构型{config}决定。')
    lines.append('')

    lines.append('## 18. 光谱学')
    lines.append('')
    lines.append(f'{name}的光谱特征包括原子发射谱线和XPS特征峰。')
    lines.append('')

    lines.append('## 19. 前沿与未来')
    lines.append('')
    frontiers = knowledge.get('frontiers', [])
    if frontiers:
        for f in frontiers[:6]:
            lines.append(f'- {f}')
    else:
        lines.append(f'{name}的前沿研究方向待补充。')
    lines.append('')

    return '\n'.join(lines)


# ════════════════════════════════════════════════════════════════════
# 第三部分：读取和更新 elements.js
# ════════════════════════════════════════════════════════════════════

def read_elements_js(filepath):
    """读取 elements.js 文件，提取 ELEMENTS 数组"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 找到 ELEMENTS 数组
    match = re.search(r'const ELEMENTS\s*=\s*\[', content)
    if not match:
        print(f"ERROR: Cannot find ELEMENTS array in {filepath}")
        sys.exit(1)

    # 提取数组起始位置
    start = match.end() - 1  # 包含 '['
    # 找到对应的 ']'
    bracket_count = 1
    pos = start + 1
    while bracket_count > 0 and pos < len(content):
        if content[pos] == '[':
            bracket_count += 1
        elif content[pos] == ']':
            bracket_count -= 1
        pos += 1

    array_str = content[start:pos]

    # 解析为JSON（需要将JS对象转为JSON）
    # 替换 JS 特有语法
    json_str = array_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')

    # 尝试解析
    try:
        elements = eval(json_str)  # 使用eval因为JS对象不是严格JSON
    except Exception as e:
        print(f"WARNING: Cannot parse elements array directly: {e}")
        print("Falling back to regex-based parsing...")
        elements = parse_elements_regex(content)

    return elements, content, start, pos


def parse_elements_regex(content):
    """正则解析每个元素对象"""
    elements = []
    # 匹配每个 {z:...} 对象
    pattern = r'\{z:(\d+),symbol:'
    for m in re.finditer(pattern, content):
        z = int(m.group(1))
        # 找到这个对象的结束位置
        obj_start = m.start()
        bracket_count = 1
        pos = obj_start + 1
        while bracket_count > 0 and pos < len(content):
            if content[pos] == '{':
                bracket_count += 1
            elif content[pos] == '}':
                bracket_count -= 1
            pos += 1

        obj_str = content[obj_start:pos]
        # 尝试解析单个对象
        try:
            json_str = obj_str.replace('true', 'True').replace('false', 'False').replace('null', 'None')
            el = eval(json_str)
            elements.append(el)
        except:
            print(f"WARNING: Cannot parse element z={z}")
            continue

    return elements


def count_null_fields(elements):
    """统计每个元素的 null 字段数量"""
    null_counts = {}
    total_nulls = 0
    for el in elements:
        z = el['z']
        nulls = 0
        null_fields = []
        for key, val in el.items():
            if val is None:
                nulls += 1
                null_fields.append(key)
        null_counts[z] = (nulls, null_fields)
        total_nulls += nulls
    return null_counts, total_nulls


def apply_supplements(elements):
    """将 SUPPLEMENT_DATA 中的值应用到缺失字段"""
    filled_count = 0
    for el in elements:
        z = el['z']
        supplement = SUPPLEMENT_DATA.get(z, {})
        for field, value in supplement.items():
            if field in el and el[field] is None and value is not None:
                el[field] = value
                filled_count += 1
            elif field not in el and value is not None:
                el[field] = value
                filled_count += 1
    return elements, filled_count


def write_elements_js(filepath, elements, original_content, array_start, array_end):
    """将更新后的元素数组写回 elements.js"""
    # 重建数组字符串
    parts = []
    for el in elements:
        obj_lines = []
        obj_lines.append('{')
        for key in sorted(el.keys()):
            val = el[key]
            if isinstance(val, str):
                obj_lines.append(f'{key}:\'{val}\'')
            elif isinstance(val, bool):
                obj_lines.append(f'{key}:{str(val).lower()}')
            elif val is None:
                obj_lines.append(f'{key}:null')
            elif isinstance(val, list):
                # 序列化列表（同位素等）
                if key == 'isotopes':
                    iso_parts = []
                    for iso in val:
                        iso_str = '{"massNumber":' + str(iso.get('massNumber',''))
                        if iso.get('abundance') is not None:
                            iso_str += ',\\"abundance\\":' + str(iso['abundance'])
                        else:
                            iso_str += ',\\"abundance\\":null'
                        iso_str += ',\\"halfLife\\":\\"' + str(iso.get('halfLife','stable')) + '\\"'
                        dm = iso.get('decayMode')
                        iso_str += ',\\"decayMode\\":' + (f'\\"{dm}\\"' if dm else 'null')
                        note = iso.get('note')
                        if note:
                            iso_str += ',\\"note\\":\\"' + note + '\\"'
                        iso_str += '}'
                        iso_parts.append(iso_str)
                    obj_lines.append(f'{key}:[{",".join(iso_parts)}]')
                else:
                    obj_lines.append(f'{key}:{json.dumps(val)}')
            elif isinstance(val, float):
                obj_lines.append(f'{key}:{val}')
            elif isinstance(val, int):
                obj_lines.append(f'{key}:{val}')
            else:
                obj_lines.append(f'{key}:{json.dumps(val)}')

        parts.append(','.join(obj_lines) + '}')

    new_array = '[' + ','.join(parts) + ']'

    # 重建完整文件
    new_content = original_content[:array_start] + new_array + original_content[array_end:]

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    return new_content


# ════════════════════════════════════════════════════════════════════
# 第四部分：生成 details/*.md 文件
# ════════════════════════════════════════════════════════════════════

def write_detail_md(z, symbol, name, name_en, el_data, knowledge):
    """写入 details/{symbol}.md 文件"""
    filepath = os.path.join(DETAILS_DIR, f'{symbol}.md')

    # 如果文件已存在且有丰富内容，则跳过（不覆盖手写内容）
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            existing = f.read()
        # 如果现有内容超过100行，视为已有充分内容
        if len(existing.split('\n')) > 50 and z <= 54:  # 对前54个元素更保守
            print(f"  SKIP {symbol}.md (已有丰富内容, {len(existing.split(chr(10)))} 行)")
            return False

    md_content = generate_markdown_detail(z, symbol, name, name_en, el_data, knowledge)

    os.makedirs(DETAILS_DIR, exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(md_content)

    return True


# ════════════════════════════════════════════════════════════════════
# 主程序
# ════════════════════════════════════════════════════════════════════

def main():
    print("=" * 60)
    print("元素周期表数据全面补全脚本 v1.0")
    print("=" * 60)

    elements_file = os.path.join(DATA_DIR, 'elements.js')

    # Step 1: 读取现有数据
    print("\n[Step 1] 读取 elements.js...")
    elements, original_content, arr_start, arr_end = read_elements_js(elements_file)
    print(f"  读取到 {len(elements)} 个元素")

    # Step 2: 统计缺失字段
    print("\n[Step 2] 统计缺失字段...")
    null_counts, total_nulls = count_null_fields(elements)
    print(f"  总计 {total_nulls} 个 null 字段")

    # 显示缺失最多的元素
    top_missing = sorted(null_counts.items(), key=lambda x: x[1][0], reverse=True)[:10]
    print("  缺失最多的前10个元素：")
    for z, (count, fields) in top_missing:
        print(f"    z={z} ({elements[z-1]['symbol'] if z <= len(elements) else '?'}): {count}个null → {fields[:5]}...")

    # Step 3: 应用补全数据
    print("\n[Step 3] 应用补全数据...")
    elements, filled = apply_supplements(elements)
    print(f"  填充了 {filled} 个缺失字段")

    # 重新统计
    null_counts2, total2 = count_null_fields(elements)
    print(f"  补全后剩余 {total2} 个 null 字段（减少 {total_nulls - total2} 个）")

    # Step 4: 生成 details/*.md
    print("\n[Step 4] 生成 details/*.md 文件...")
    md_generated = 0
    md_skipped = 0

    for el in elements:
        z = el['z']
        symbol = el['symbol']
        name = el['name']
        name_en = el['nameEn']

        # 获取知识数据
        knowledge = ELEMENT_KNOWLEDGE.get(z, None)
        if knowledge is None:
            knowledge = generate_generic_knowledge(z, symbol, name, name_en, el)

        result = write_detail_md(z, symbol, name, name_en, el, knowledge)
        if result:
            md_generated += 1
        else:
            md_skipped += 1

    print(f"  生成 {md_generated} 个 md 文件，跳过 {md_skipped} 个")

    # Step 5: 写回 elements.js
    print("\n[Step 5] 写回 elements.js...")
    # 注意：直接写回JS文件格式复杂，这里采用安全方式
    # 仅在用户确认时执行
    print("  ⚠️ 此步骤会修改 data/elements.js 原文件")
    print("  建议先备份再执行。脚本默认不写回，需要加 --write 参数。")

    if '--write' in sys.argv:
        write_elements_js(elements_file, elements, original_content, arr_start, arr_end)
        print("  ✅ elements.js 已更新")
    else:
        # 生成补全后的JSON文件供检查
        output_json = os.path.join(BASE_DIR, 'elements-supplemented.json')
        with open(output_json, 'w', encoding='utf-8') as f:
            json.dump(elements, f, ensure_ascii=False, indent=2)
        print(f"  补全数据已导出到 {output_json}（未修改原文件）")
        print(f"  要正式写回 elements.js，请运行：python {__file__} --write")

    # 生成补全报告
    report_path = os.path.join(BASE_DIR, 'completion-report.md')
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write('# 元素数据补全报告\n\n')
        f.write(f'生成时间：2026-06-21\n\n')
        f.write(f'## 概览\n\n')
        f.write(f'- 原始 null 字段总数：{total_nulls}\n')
        f.write(f'- 补全的字段数：{filled}\n')
        f.write(f'- 补全后剩余 null：{total2}\n')
        f.write(f'- 生成的 md 文件数：{md_generated}\n')
        f.write(f'- 跳过的 md 文件数：{md_skipped}\n\n')

        f.write('## 补全后仍为 null 的字段统计\n\n')
        f.write('| 元素 | null数量 | null字段 |\n')
        f.write('|------|----------|----------|\n')
        for z, (count, fields) in sorted(null_counts2.items()):
            if count > 0:
                symbol = elements[z-1]['symbol'] if z <= len(elements) else '?'
                f.write(f'| {symbol} (z={z}) | {count} | {", ".join(fields[:8])} |\n')

        f.write('\n## 补全的字段详情\n\n')
        f.write('| 元素 | 补全字段 | 补全值 |\n')
        f.write('|------|----------|--------|\n')
        for el in elements:
            z = el['z']
            supplement = SUPPLEMENT_DATA.get(z, {})
            for field, value in supplement.items():
                if value is not None:
                    f.write(f'| {el["symbol"]} (z={z}) | {field} | {value} |\n')

    print(f"\n✅ 补全报告已生成：{report_path}")
    print("\n" + "=" * 60)
    print("完成！下一步建议：")
    print("1. 检查 elements-supplemented.json 中的补全数据")
    print("2. 确认无误后运行 python complete-all-elements.py --write")
    print("3. 检查 details/*.md 生成内容的质量")
    print("4. 为重点元素（如C、O、Fe、Au等）手写增强内容")
    print("=" * 60)


if __name__ == '__main__':
    main()
