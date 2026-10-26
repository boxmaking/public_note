#!/usr/bin/env python3
"""Generate complete p4-crystal.js with all 118 elements' crystallographic data."""

# Crystal data for all 118 elements
# Format: z: (spaceGroup, latticeParams, Z, coordinationNumber, crystalSystem, note)
# latticeParams: (a, b, c, alpha, beta, gamma, note)  None = same as a or 90/120

CRYSTAL_DATA = {
    # ── Period 1 ──
    1:  ('P2₁/c (H₂)',                (4.47, None, 4.47, 90, 90, 90, '固态 H₂ 为分子晶体，T < 14 K'),            4, 0,  '立方',   '氢无典型金属/共价晶体；固态 H₂ 为分子晶体'),
    2:  ('P6₃/mmc (⁴He)',             (3.57, None, 5.83, 90, 90, 120, '⁴He 在 < 1.7 K 为 hcp'),                 4, 12, '六方',   '⁴He 在极低温下为 hcp 结构；³He 为 bcc'),

    # ── Period 2 ──
    3:  ('Im3m',                      (3.509, None, None, 90, 90, 90, 'bcc，77 K 转为 fcc'),                       2, 8,  '立方',   '碱金属典型 bcc；低温 (< 77 K) 转 fcc'),
    4:  ('P6₃/mmc',                   (2.2858, None, 3.5843, 90, 90, 120, 'hcp，ABAB 堆垛'),                       2, 12, '六方',   'hcp 结构，c/a = 1.567（接近理想值 1.633）'),
    5:  ('R-3m (α-B₁₂)',              (4.906, None, 12.574, 90, 90, 120, 'α-硼：B₁₂ 二十面体单元'),                12, 6, '三方',   'α-硼由 B₁₂ 二十面体组成；β-硼也常见'),
    # 6 C - already precise
    6:  ('Fd3m (金刚石) / P6₃/mmc (石墨)', (3.567, None, None, 90, 90, 90, '金刚石 a=3.567 Å；石墨 a=2.461, c=6.708 Å'), 8, 4, '立方（金刚石）/ 六方（石墨）', '金刚石 sp³ 四面体；石墨 sp² 层状'),
    7:  ('Pa3 (α-N₂)',                (5.661, None, None, 90, 90, 90, 'α-N₂ 立方分子晶体，T < 35.6 K'),          4, 0,  '立方',   '氮为 N₂ 分子晶体；α 相立方，β 相六方'),
    8:  ('C2/m (α-O₂)',               (5.403, 3.429, 5.086, 90, 132.0, 90, 'α-O₂ 单斜，T < 23.9 K'),          2, 0,  '单斜',   '氧为 O₂ 分子晶体；多晶型转变复杂'),
    9:  ('C2/c (α-F₂)',               (5.50, 3.28, 7.28, 90, 102.2, 90, 'α-F₂ 单斜分子晶体，T < 45.6 K'),     4, 0,  '单斜',   '氟为 F₂ 分子晶体'),
    10: ('Fm3m',                      (4.462, None, None, 90, 90, 90, 'fcc 分子晶体'),                              4, 12, '立方',   '稀有气体典型 fcc 结构'),

    # ── Period 3 ──
    11: ('Im3m',                      (4.2906, None, None, 90, 90, 90),                                           2, 8,  '立方',   '碱金属典型 bcc 结构，体心立方'),
    12: ('P6₃/mmc',                   (3.2094, None, 5.2105, 90, 90, 120),                                        2, 12, '六方',   'hcp 结构，ABAB 堆垛'),
    13: ('Fm3m',                      (4.0495, None, None, 90, 90, 90),                                           4, 12, '立方',   'fcc 结构，面心立方，ABCABC 堆垛'),
    14: ('Fd3m',                      (5.4307, None, None, 90, 90, 90),                                           8, 4,  '立方',   '金刚石型结构，每个 Si 与 4 个 Si 形成 sp³ 四面体'),
    15: ('P-1 (白磷 P₄)',             (1.874, 1.874, 1.874, 60.0, 60.0, 60.0, '白磷为 P₄ 四面体分子晶体'),          4, 0,  '三斜',   '白磷为 P₄ 分子晶体；黑磷为正交晶系层状结构'),
    16: ('Fddd (α-S₈)',               (10.4646, 12.8660, 24.4860, 90, 90, 90, '正交 α-硫：S₈ 环分子'),             16, 0, '正交',   'α-硫由 S₈ 环状分子组成；β-硫为单斜'),
    17: ('C2/m (α-Cl₂)',             (6.24, 4.48, 8.26, 90, 102.5, 90, 'α-Cl₂ 单斜分子晶体'),                    4, 0,  '单斜',   '氯为 Cl₂ 分子晶体'),
    18: ('Fm3m',                      (5.256, None, None, 90, 90, 90),                                            4, 12, '立方',   '稀有气体 fcc 结构'),

    # ── Period 4 ──
    19: ('Im3m',                      (5.328, None, None, 90, 90, 90),                                            2, 8,  '立方',   '碱金属典型 bcc 结构'),
    20: ('Fm3m (fcc) / P6₃/mmc (>450°C)', (5.588, None, None, 90, 90, 90, '常温 fcc；> 450°C 转 hcp'),            4, 12, '立方 / 六方', '钙有多晶型转变'),
    21: ('P6₃/mmc',                   (3.3088, None, 5.2675, 90, 90, 120),                                        2, 12, '六方',   '钪为 hcp 结构（α 相）'),
    22: ('P6₃/mmc (hcp) / Im3m (>882°C)', (2.9506, None, 4.6788, 90, 90, 120, '常温 α-Ti (hcp)；> 882°C β-Ti (bcc)'), 2, 12, '六方 / 立方', '钛的 α→β 相变对合金设计重要'),
    23: ('Im3m',                      (3.024, None, None, 90, 90, 90),                                            2, 8,  '立方',   '钒为 bcc 结构'),
    24: ('Im3m',                      (2.884, None, None, 90, 90, 90),                                            2, 8,  '立方',   '体心立方结构'),
    25: ('I-43m (α-Mn)',             (8.914, None, None, 90, 90, 90, 'α-Mn 为复杂体心立方（58 原子/单胞）'),        58, 12, '立方',   'α-Mn 结构极其复杂，单胞含 58 个原子'),
    26: ('Im3m (α-Fe, bcc) / Fm3m (γ-Fe, 912-1394°C)', (2.8664, None, None, 90, 90, 90, 'α-Fe bcc; γ-Fe fcc 912-1394°C; δ-Fe bcc >1394°C'), 2, 8, '立方（多晶型）', '铁有 α→γ→δ 多晶型转变，是钢热处理的基础'),
    27: ('P6₃/mmc (α-Co, hcp) / Fm3m (β-Co, fcc, >422°C)', (2.507, None, 4.070, 90, 90, 120, '常温 α-Co hcp；> 422°C β-Co fcc'), 2, 12, '六方 / 立方', '钴的 α→β 相变温度 422°C'),
    28: ('Fm3m',                      (3.524, None, None, 90, 90, 90),                                            4, 12, '立方',   '面心立方结构，磁有序温度 Tc = 627 K'),
    29: ('Fm3m',                      (3.6147, None, None, 90, 90, 90),                                           4, 12, '立方',   '面心立方结构，高导电性'),
    30: ('P6₃/mmc',                   (2.6649, None, 4.9468, 90, 90, 120),                                        2, 12, '六方',   'hcp 结构，但 c/a = 1.856 偏离理想值 1.633'),
    31: ('Cmca (α-Ga)',              (4.519, 7.663, 4.526, 90, 90, 90, '正交晶系，Ga 形成二聚体 Ga₂ 分子'),         8, 7,  '正交',   '镓结构特殊，含 Ga₂ 二聚体单元'),
    32: ('Fd3m',                      (5.6575, None, None, 90, 90, 90),                                           8, 4,  '立方',   '金刚石型结构，半导体材料基础'),
    33: ('R-3m (α-As)',              (4.131, None, 11.612, 90, 90, 120, '三方晶系，As 层状结构'),                   6, 3,  '三方',   '砷为层状结构，每个 As 与 3 个 As 配位'),
    34: ('P3₁21 (灰硒)',             (4.366, None, 4.954, 90, 90, 120, '三方晶系，螺旋链状 Se₈'),                  3, 2,  '三方',   '灰硒为螺旋链状结构；每个 Se 与 2 个 Se 配位'),
    35: ('C2/m (α-Br₂)',             (6.67, 4.48, 8.74, 90, 102.6, 90, 'α-Br₂ 单斜分子晶体'),                    4, 0,  '单斜',   '溴为 Br₂ 分子晶体'),
    36: ('Fm3m',                      (5.686, None, None, 90, 90, 90),                                            4, 12, '立方',   '稀有气体 fcc 结构'),

    # ── Period 5 ──
    37: ('Im3m',                      (5.585, None, None, 90, 90, 90),                                            2, 8,  '立方',   '碱金属 bcc 结构'),
    38: ('Fm3m (fcc) / Im3m (>557°C)', (6.084, None, None, 90, 90, 90, '常温 fcc；> 557°C 转 bcc'),               4, 12, '立方',   '锶常温 fcc，高温转 bcc'),
    39: ('P6₃/mmc',                   (3.6474, None, 5.7306, 90, 90, 120),                                        2, 12, '六方',   '钇为 hcp 结构'),
    40: ('P6₃/mmc (hcp) / Im3m (>865°C)', (3.2316, None, 5.1475, 90, 90, 120, '常温 α-Zr hcp；> 865°C β-Zr bcc'), 2, 12, '六方 / 立方', '锆的 α→β 相变；核反应堆包壳材料'),
    41: ('Im3m',                      (3.3008, None, None, 90, 90, 90),                                           2, 8,  '立方',   '铌为 bcc 结构；超导临界温度 Tc = 9.26 K'),
    42: ('Im3m',                      (3.147, None, None, 90, 90, 90),                                            2, 8,  '立方',   '钼为 bcc 结构；高熔点金属（2623°C）'),
    43: ('P6₃/mmc',                   (2.738, None, 4.393, 90, 90, 120),                                          2, 12, '六方',   '锝为 hcp 结构；全部同位素均放射性'),
    44: ('P6₃/mmc',                   (2.7058, None, 4.2816, 90, 90, 120),                                        2, 12, '六方',   '钌为 hcp 结构'),
    45: ('Fm3m',                      (3.803, None, None, 90, 90, 90),                                            4, 12, '立方',   '铑为 fcc 结构'),
    46: ('Fm3m',                      (3.8907, None, None, 90, 90, 90),                                           4, 12, '立方',   '钯为 fcc 结构；催化活性高'),
    47: ('Fm3m',                      (4.0853, None, None, 90, 90, 90),                                           4, 12, '立方',   '银为 fcc 结构；导电导热性最佳'),
    48: ('P6₃/mmc',                   (2.9788, None, 5.6167, 90, 90, 120),                                        2, 12, '六方',   '镉为 hcp 结构'),
    49: ('I4/mmm',                    (4.5880, None, 4.9467, 90, 90, 90, '体心四方'),                              2, 12, '四方',   '铟为体心四方结构，近 fcc'),
    50: ('I4₁/amd (β-Sn, 白锡) / Fd3m (α-Sn, 灰锡)', (5.8315, None, 3.1814, 90, 90, 90, '白锡体心四方；灰锡金刚石型'), 4, 6, '四方（白锡）/ 立方（灰锡）', '锡有白锡（金属）→灰锡（半导体）相变（锡瘟）'),
    51: ('R-3m',                      (4.5066, None, 11.222, 90, 90, 120, '三方晶系，Sb 层状结构'),                 6, 3,  '三方',   '锑为层状结构，类砷'),
    52: ('P3₁21',                     (4.4566, None, 5.9149, 90, 90, 120, '三方晶系，螺旋链状 Te'),                3, 2,  '三方',   '碲为螺旋链状结构，类灰硒'),
    53: ('Cmcm (α-I₂)',              (4.786, 7.266, 9.782, 90, 90, 90, '正交晶系，I₂ 分子晶体'),                  8, 0,  '正交',   '碘为 I₂ 分子晶体'),
    54: ('Fm3m',                      (6.199, None, None, 90, 90, 90),                                            4, 12, '立方',   '稀有气体 fcc 结构'),

    # ── Period 6 ──
    55: ('Im3m',                      (6.141, None, None, 90, 90, 90),                                            2, 8,  '立方',   '铯为 bcc 结构；室温附近即熔化（28.5°C）'),
    56: ('Im3m',                      (5.025, None, None, 90, 90, 90),                                            2, 8,  '立方',   '钡为 bcc 结构'),
    57: ('P6₃/mmc (α-La, hcp) / Fm3m (β-La, fcc)', (3.7740, None, 12.171, 90, 90, 120, '常温 α-La hcp（双 hcp）；β-La fcc'), 4, 12, '六方 / 立方', '镧为双 hcp（dhcp）结构'),
    58: ('Fm3m (γ-Ce, fcc) / P6₃/mmc (β-Ce, hcp)', (5.161, None, None, 90, 90, 90, '常温 γ-Ce fcc；β-Ce hcp'),   4, 12, '立方 / 六方', '铈有多晶型转变，γ→β 相变伴随体积变化'),
    59: ('P6₃/mmc',                   (3.6721, None, 11.835, 90, 90, 120, '双 hcp（dhcp）'),                       4, 12, '六方',   '镨为双 hcp 结构'),
    60: ('P6₃/mmc',                   (3.658, None, 11.796, 90, 90, 120, '双 hcp（dhcp）'),                        4, 12, '六方',   '钕为双 hcp 结构'),
    61: ('P6₃/mmc',                   (3.65, None, 11.65, 90, 90, 120, '双 hcp（估算）'),                          4, 12, '六方',   '钷为双 hcp 结构（全部放射性）'),
    62: ('R-3m (Sm 型)',             (3.6290, None, 26.207, 90, 90, 120, '三方晶系，Sm 型堆垛'),                   9, 12, '三方',   '钐型结构是 hcp 与 fcc 的混合堆垛序列'),
    63: ('Im3m',                      (4.5827, None, None, 90, 90, 90),                                           2, 8,  '立方',   '铕为 bcc 结构（镧系中例外）'),
    64: ('P6₃/mmc',                   (3.6336, None, 5.7810, 90, 90, 120),                                        2, 12, '六方',   '钆为 hcp 结构；铁磁性居里温度 293 K'),
    65: ('P6₃/mmc',                   (3.6010, None, 5.6936, 90, 90, 120),                                        2, 12, '六方',   '铽为 hcp 结构'),
    66: ('P6₃/mmc',                   (3.5915, None, 5.6501, 90, 90, 120),                                        2, 12, '六方',   '镝为 hcp 结构'),
    67: ('P6₃/mmc',                   (3.5773, None, 5.6158, 90, 90, 120),                                        2, 12, '六方',   '钬为 hcp 结构'),
    68: ('P6₃/mmc',                   (3.5592, None, 5.5848, 90, 90, 120),                                        2, 12, '六方',   '铒为 hcp 结构'),
    69: ('P6₃/mmc',                   (3.5375, None, 5.5540, 90, 90, 120),                                        2, 12, '六方',   '铥为 hcp 结构'),
    70: ('Fm3m',                      (5.4862, None, None, 90, 90, 90),                                           4, 12, '立方',   '镱为 fcc 结构（镧系中例外，类 Eu）'),
    71: ('P6₃/mmc',                   (3.5052, None, 5.5494, 90, 90, 120),                                        2, 12, '六方',   '镥为 hcp 结构'),
    72: ('P6₃/mmc',                   (3.1946, None, 5.0511, 90, 90, 120),                                        2, 12, '六方',   '铪为 hcp 结构；核反应堆控制棒'),
    73: ('Im3m',                      (3.3013, None, None, 90, 90, 90),                                           2, 8,  '立方',   '钽为 bcc 结构；耐腐蚀性极佳'),
    74: ('Im3m',                      (3.1652, None, None, 90, 90, 90),                                           2, 8,  '立方',   '钨为 bcc 结构；熔点最高的金属（3422°C）'),
    75: ('P6₃/mmc',                   (2.760, None, 4.458, 90, 90, 120),                                          2, 12, '六方',   '铼为 hcp 结构；高熔点（3186°C）'),
    76: ('P6₃/mmc',                   (2.7341, None, 4.3197, 90, 90, 120),                                        2, 12, '六方',   '锇为 hcp 结构；密度最大的元素（22.59 g/cm³）'),
    77: ('Fm3m',                      (3.8393, None, None, 90, 90, 90),                                           4, 12, '立方',   '铱为 fcc 结构；密度第二大元素'),
    78: ('Fm3m',                      (3.9242, None, None, 90, 90, 90),                                           4, 12, '立方',   '铂为 fcc 结构；催化活性高'),
    79: ('Fm3m',                      (4.0782, None, None, 90, 90, 90),                                           4, 12, '立方',   '金为 fcc 结构；延展性极佳'),
    80: ('R-3m',                      (3.005, None, 5.259, 90, 90, 120, '三方晶系（汞晶体）；室温为液体'),          6, 12, '三方',   '汞室温为液体；凝固点 −38.83°C 时为三方晶系'),
    81: ('P6₃/mmc',                   (3.4566, None, 5.5248, 90, 90, 120),                                        2, 12, '六方',   '铊为 hcp 结构'),
    82: ('Fm3m',                      (4.9502, None, None, 90, 90, 90),                                           4, 12, '立方',   '铅为 fcc 结构'),
    83: ('R-3m',                      (4.5460, None, 11.8613, 90, 90, 120, '三方晶系，Bi 层状结构'),                6, 3,  '三方',   '铋为层状结构；半金属；强抗磁性'),
    84: ('Pm3m',                      (3.359, None, None, 90, 90, 90, '简单立方（唯一室温简立方元素）'),            1, 6,  '立方',   '钋是唯一室温下为简单立方结构的元素'),
    85: ('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构（数据有限）'),                  None, 12, '立方',   '砹为放射性元素，结构数据有限，预测为金属 fcc'),
    86: ('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '氡为放射性稀有气体，预测 fcc 结构'),

    # ── Period 7 (Actinides + Superheavy) ──
    87: ('Im3m (预测)',              (None, None, None, 90, 90, 90, '预测 bcc 结构'),                              None, 8,  '立方',   '钫为强放射性元素，结构数据有限'),
    88: ('Im3m (预测)',              (None, None, None, 90, 90, 90, '预测 bcc 结构'),                              None, 8,  '立方',   '镭为放射性元素，预测 bcc 结构'),
    89: ('Fm3m',                      (5.311, None, None, 90, 90, 90),                                            4, 12, '立方',   '锕为 fcc 结构'),
    90: ('Fm3m',                      (5.0840, None, None, 90, 90, 90),                                           4, 12, '立方',   '钍为 fcc 结构；核燃料候选'),
    91: ('I4/mmm',                    (3.925, None, 3.239, 90, 90, 90, '体心四方'),                                2, 12, '四方',   '镤为体心四方结构'),
    92: ('Cmcm (α-U)',               (2.8537, 5.8695, 4.9548, 90, 90, 90, '正交晶系（α-U）'),                     4, 12, '正交',   'α-铀为正交晶系；β-U 四方（>668°C）；γ-U bcc（>776°C）'),
    93: ('Pmcn (α-Np)',              (4.722, 4.887, 6.663, 90, 90, 90, '正交晶系（α-Np）'),                       8, 12, '正交',   '镎为正交晶系'),
    94: ('P2₁/m (α-Pu)',            (6.183, 4.822, 10.963, 90, 101.79, 90, '单斜晶系（α-Pu，16 原子/单胞）'),    16, 12, '单斜',   '钚有 6 个同素异形体，α-Pu 为单斜，极其复杂'),
    95: ('P6₃/mmc',                   (3.4681, None, 11.244, 90, 90, 120, '双 hcp（dhcp）'),                       4, 12, '六方',   '镅为双 hcp 结构'),
    96: ('P6₃/mmc (α) / Fm3m (β)',  (3.502, None, 11.308, 90, 90, 120, '常温 α-Cm hcp；高温 β-Cm fcc'),          4, 12, '六方 / 立方', '锔有 α→β 相变'),
    97: ('P6₃/mmc (预测)',           (3.49, None, 11.10, 90, 90, 120, '预测双 hcp 结构'),                          4, 12, '六方',   '锫为放射性元素，预测双 hcp'),
    98: ('P6₃/mmc (预测)',           (3.48, None, 11.00, 90, 90, 120, '预测双 hcp 结构'),                          4, 12, '六方',   '锎为放射性元素，预测双 hcp'),
    99: ('Fm3m (预测)',              (5.75, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '锿为放射性元素，预测 fcc'),
    100:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '镄为放射性元素，结构数据有限'),
    101:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '钔为放射性元素，结构数据有限'),
    102:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '锘为放射性元素，结构数据有限'),
    103:('P6₃/mmc (预测)',           (None, None, None, 90, 90, 120, '预测 hcp 结构'),                             None, 12, '六方',   '铹为放射性元素，预测 hcp'),

    # ── Transactinides (Z=104-118, all synthetic, predicted structures) ──
    104:('P6₃/mmc (预测)',           (None, None, None, 90, 90, 120, '预测 hcp 结构'),                             None, 12, '六方',   '𬬻为超重元素，预测 hcp 结构'),
    105:('Im3m (预测)',              (None, None, None, 90, 90, 90, '预测 bcc 结构'),                              None, 8,  '立方',   '𬭊为超重元素，预测 bcc 结构'),
    106:('Im3m (预测)',              (None, None, None, 90, 90, 90, '预测 bcc 结构'),                              None, 8,  '立方',   '𬭳为超重元素，预测 bcc 结构'),
    107:('Im3m (预测)',              (None, None, None, 90, 90, 90, '预测 bcc 结构'),                              None, 8,  '立方',   '𬭛为超重元素，预测 bcc 结构'),
    108:('Im3m (预测)',              (None, None, None, 90, 90, 90, '预测 bcc 结构'),                              None, 8,  '立方',   '𬭶为超重元素，预测 bcc 结构'),
    109:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '鿏为超重元素，预测 fcc 结构'),
    110:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '𫟼为超重元素，预测 fcc 结构'),
    111:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '𬬭为超重元素，预测 fcc 结构'),
    112:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '鎶为超重元素，预测类 Hg 结构'),
    113:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '鉨为超重元素，预测类 Tl 结构'),
    114:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '𫓧为超重元素，预测类 Pb 结构'),
    115:('P6₃/mmc (预测)',           (None, None, None, 90, 90, 120, '预测 hcp 结构'),                             None, 12, '六方',   '镆为超重元素，预测类 Bi 结构'),
    116:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '𫟷为超重元素，预测类 Po 结构'),
    117:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '鿬为超重元素，预测类 At 结构'),
    118:('Fm3m (预测)',              (None, None, None, 90, 90, 90, '预测 fcc 结构'),                              None, 12, '立方',   '鿫为超重元素，预测类 Rn 结构'),
}


def generate_js():
    lines = []
    lines.append("/**")
    lines.append(" * P4-2：先进晶体学数据（完整版 v3 — 全118元素）")
    lines.append(" * 包含：空间群、晶格参数、单胞原子数、配位数、晶系")
    lines.append(" * 用法：在 element.html 中加载此文件，数据自动合并到 ELEMENTS")
    lines.append(" */")
    lines.append("")
    lines.append("var P4_CRYSTAL = {};")
    lines.append("")

    # Group by period for comments
    period_ranges = [
        (1, 2, "第 1 周期"),
        (3, 10, "第 2 周期"),
        (11, 18, "第 3 周期"),
        (19, 36, "第 4 周期"),
        (37, 54, "第 5 周期"),
        (55, 86, "第 6 周期"),
        (87, 118, "第 7 周期"),
    ]

    # Element symbols for comments
    symbols = {
        1:'H',2:'He',3:'Li',4:'Be',5:'B',6:'C',7:'N',8:'O',9:'F',10:'Ne',
        11:'Na',12:'Mg',13:'Al',14:'Si',15:'P',16:'S',17:'Cl',18:'Ar',
        19:'K',20:'Ca',21:'Sc',22:'Ti',23:'V',24:'Cr',25:'Mn',26:'Fe',27:'Co',28:'Ni',29:'Cu',30:'Zn',
        31:'Ga',32:'Ge',33:'As',34:'Se',35:'Br',36:'Kr',
        37:'Rb',38:'Sr',39:'Y',40:'Zr',41:'Nb',42:'Mo',43:'Tc',44:'Ru',45:'Rh',46:'Pd',47:'Ag',48:'Cd',
        49:'In',50:'Sn',51:'Sb',52:'Te',53:'I',54:'Xe',
        55:'Cs',56:'Ba',57:'La',58:'Ce',59:'Pr',60:'Nd',61:'Pm',62:'Sm',63:'Eu',64:'Gd',65:'Tb',66:'Dy',
        67:'Ho',68:'Er',69:'Tm',70:'Yb',71:'Lu',72:'Hf',73:'Ta',74:'W',75:'Re',76:'Os',77:'Ir',78:'Pt',
        79:'Au',80:'Hg',81:'Tl',82:'Pb',83:'Bi',84:'Po',85:'At',86:'Rn',
        87:'Fr',88:'Ra',89:'Ac',90:'Th',91:'Pa',92:'U',93:'Np',94:'Pu',95:'Am',96:'Cm',97:'Bk',98:'Cf',
        99:'Es',100:'Fm',101:'Md',102:'No',103:'Lr',
        104:'Rf',105:'Db',106:'Sg',107:'Bh',108:'Hs',109:'Mt',110:'Ds',111:'Rg',112:'Cn',
        113:'Nh',114:'Fl',115:'Mc',116:'Lv',117:'Ts',118:'Og',
    }

    for start, end, label in period_ranges:
        lines.append(f"// ── {label} ────────────────────────────────────────────")
        for z in range(start, end + 1):
            if z not in CRYSTAL_DATA:
                continue
            sg, lp, Z_val, cn, cs, note = CRYSTAL_DATA[z]
            sym = symbols.get(z, '?')
            lines.append(f"P4_CRYSTAL[{z}] = {{  // {sym}")

            # spaceGroup
            lines.append(f"  spaceGroup: '{sg}',")

            # latticeParams
            if len(lp) == 7:
                a, b, c, alpha, beta, gamma, lp_note = lp
            else:
                a, b, c, alpha, beta, gamma = lp
                lp_note = None
            parts = []
            parts.append(f"a: {a}" if a is not None else "a: null")
            parts.append(f"b: {b}" if b is not None else "b: null")
            parts.append(f"c: {c}" if c is not None else "c: null")
            parts.append(f"alpha: {alpha}")
            parts.append(f"beta: {beta}")
            parts.append(f"gamma: {gamma}")
            if lp_note:
                parts.append(f"note: '{lp_note}'")
            lines.append(f"  latticeParams: {{ {', '.join(parts)} }},")
            lines.append(f"  Z: {Z_val if Z_val is not None else 'null'},")
            lines.append(f"  coordinationNumber: {cn if cn is not None else 'null'},")
            lines.append(f"  crystalSystem: '{cs}',")
            lines.append(f"  note: '{note}',")
            lines.append("};")
            lines.append("")

    # Add merge function
    lines.append("// ══════════════════════════════════════════════════════")
    lines.append("//  合并 P4 晶体学数据到 ELEMENTS 数组")
    lines.append("// ══════════════════════════════════════════════════════")
    lines.append("")
    lines.append("function mergeP4Crystal(ELEMENTS) {")
    lines.append("  for (var i = 0; i < ELEMENTS.length; i++) {")
    lines.append("    var el = ELEMENTS[i];")
    lines.append("    var z  = el.z;")
    lines.append("    if (P4_CRYSTAL[z]) {")
    lines.append("      var p4 = P4_CRYSTAL[z];")
    lines.append("      el.spaceGroup       = p4.spaceGroup;")
    lines.append("      el.latticeParams    = p4.latticeParams;")
    lines.append("      el.Z               = p4.Z;")
    lines.append("      el.coordinationNumber = p4.coordinationNumber;")
    lines.append("      el.crystalSystem   = p4.crystalSystem;")
    lines.append("      el.crystalNote     = p4.note;")
    lines.append("    }")
    lines.append("  }")
    lines.append("}")
    lines.append("")
    lines.append("// 自动合并")
    lines.append("if (typeof ELEMENTS !== 'undefined') {")
    lines.append("  mergeP4Crystal(ELEMENTS);")
    lines.append("}")
    lines.append("")

    return '\n'.join(lines)


if __name__ == '__main__':
    js_code = generate_js()
    output_path = r'E:\Desktop\periodic-table\data\p4-crystal.js'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_code)
    print(f"Generated {output_path}")
    print(f"Total elements: {len(CRYSTAL_DATA)}")
    # Verify all 118 are present
    missing = [z for z in range(1, 119) if z not in CRYSTAL_DATA]
    if missing:
        print(f"WARNING: Missing elements: {missing}")
    else:
        print("All 118 elements covered!")
