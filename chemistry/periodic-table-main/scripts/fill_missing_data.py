"""
补全 elements.js 中缺失的 vdwRadius、hardnessMohs、atomicRadius、electronAffinity
数据来源：CRC Handbook 105th ed. / NIST / PubChem
仅填充 null 值，不覆盖已有数据
"""
import re

# ============================================================
# 权威数据（键为原子序数）
# ============================================================

# van der Waals 半径 (pm) — CRC Handbook / Alvarez 2013 (DOI:10.1039/c3dt50599e)
VDW_RADIUS = {
    3: 182,   # Li
    4: 153,   # Be
    11: 227,  # Na
    12: 173,  # Mg
    19: 275,  # K
    20: 231,  # Ca
    21: 211,  # Sc (estimated)
    22: 204,  # Ti (Alvarez 2013)
    23: 200,  # V
    24: 200,  # Cr (Alvarez 2013)
    25: 200,  # Mn (Alvarez)
    26: 194,  # Fe (Alvarez)
    27: 192,  # Co (Alvarez)
    28: 163,  # Ni
    31: 187,  # Ga
    32: 211,  # Ge
    37: 303,  # Rb
    38: 249,  # Sr
    39: 219,  # Y
    40: 186,  # Zr
    41: 207,  # Nb
    42: 209,  # Mo (Alvarez)
    43: 209,  # Tc
    44: 207,  # Ru
    45: 195,  # Rh
    47: 172,  # Ag
    48: 158,  # Cd
    55: 343,  # Cs
    56: 268,  # Ba
    57: 243,  # La
    58: 242,  # Ce
    59: 240,  # Pr
    60: 239,  # Nd
    61: 238,  # Pm
    62: 236,  # Sm
    63: 235,  # Eu
    64: 234,  # Gd
    65: 233,  # Tb
    66: 231,  # Dy
    67: 230,  # Ho
    68: 229,  # Er
    69: 227,  # Tm
    70: 226,  # Yb
    71: 224,  # Lu
    72: 221,  # Hf
    73: 217,  # Ta (Alvarez)
    74: 210,  # W  (Alvarez)
    75: 217,  # Re
    76: 216,  # Os
    77: 202,  # Ir
    79: 166,  # Au
    80: 155,  # Hg
    81: 196,  # Tl
    83: 207,  # Bi
    84: 197,  # Po
    87: 348,  # Fr (estimated)
    88: 283,  # Ra
    89: 247,  # Ac
    90: 245,  # Th
    91: 243,  # Pa
    92: 241,  # U
    93: 239,  # Np
    94: 243,  # Pu
    95: 244,  # Am
    96: 245,  # Cm
}

# Mohs 硬度 — CRC Handbook / Mineralogy databases
MOHS_HARDNESS = {
    3: 0.6,   # Li
    4: 5.5,   # Be
    7: None,  # N  (gas, N/A)
    8: None,  # O  (gas, N/A)
    11: 0.5,  # Na
    12: 2.5,  # Mg
    13: 2.75, # Al
    14: 7.0,  # Si — already set
    15: None, # P (waxy solid) 
    16: 2.0,  # S
    19: 0.4,  # K
    20: 1.75, # Ca
    21: None, # Sc — no reliable data
    22: 6.0,  # Ti
    24: 8.5,  # Cr
    25: 6.0,  # Mn
    27: 5.0,  # Co
    28: 4.0,  # Ni
    30: 2.5,  # Zn — already set
    31: 1.5,  # Ga
    33: 3.5,  # As — already set
    34: 2.0,  # Se — already set
    37: 0.3,  # Rb
    38: 1.5,  # Sr
    39: None, # Y
    40: 5.0,  # Zr
    41: 6.0,  # Nb — already set
    42: 5.5,  # Mo — already set
    44: 6.5,  # Ru
    45: 6.0,  # Rh — already set
    46: 4.75, # Pd — already set
    47: 2.5,  # Ag
    48: 2.0,  # Cd
    49: 1.2,  # In — already set
    50: 1.5,  # Sn — already set
    51: 3.0,  # Sb
    52: 2.25, # Te
    55: 0.2,  # Cs
    56: 1.25, # Ba
    57: 2.5,  # La — already set
    58: 2.5,  # Ce — already set
    59: None, # Pr
    60: None, # Nd
    62: None, # Sm
    63: None, # Eu
    64: None, # Gd
    66: None, # Dy
    67: None, # Ho
    68: None, # Er
    69: None, # Tm
    70: None, # Yb
    71: None, # Lu
    72: 5.5,  # Hf
    73: 6.5,  # Ta — already set
    74: 7.5,  # W  — already set
    75: 7.0,  # Re
    76: 7.0,  # Os
    77: 6.5,  # Ir — already set
    79: 2.5,  # Au
    80: None, # Hg (liquid, N/A)
    81: 1.2,  # Tl — already set
    82: 1.5,  # Pb — already set
    83: 2.25, # Bi
    84: None, # Po
    87: None, # Fr
    88: None, # Ra
    90: 3.0,  # Th
}

# 原子半径 (pm) empirical — CRC Handbook / Slater 规则
ATOMIC_RADIUS = {
    57: 195,  # La
    58: 185,  # Ce
    59: 185,  # Pr
    60: 185,  # Nd
    61: 185,  # Pm (estimated)
    62: 185,  # Sm
    63: 185,  # Eu
    64: 180,  # Gd
    65: 175,  # Tb
    66: 175,  # Dy
    67: 175,  # Ho
    68: 175,  # Er
    69: 175,  # Tm
    70: 175,  # Yb
    71: 175,  # Lu
    72: 155,  # Hf
    73: 145,  # Ta — already 200
    74: 135,  # W
    75: 135,  # Re
    76: 130,  # Os
    77: 135,  # Ir — already 180
    79: 135,  # Au
    80: 150,  # Hg
    81: 190,  # Tl — already 170
    83: 160,  # Bi
    87: 260,  # Fr (estimated)
    88: 215,  # Ra
    89: 195,  # Ac
    90: 180,  # Th
    91: 180,  # Pa
    92: 175,  # U
    93: 175,  # Np
    94: 175,  # Pu
    95: 175,  # Am
    96: 176,  # Cm
    97: 170,  # Bk
    98: 168,  # Cf
    99: 165,  # Es
    100: 165, # Fm
}

# 电子亲和能 (kJ/mol) — NIST Atomic Properties / CRC Handbook
ELECTRON_AFFINITY = {
    3: 59.6,   # Li
    4: None,   # Be (negative EA, endothermic)
    11: 52.8,  # Na
    12: None,  # Mg (negative EA)
    14: 133.6, # Si
    19: 48.4,  # K
    20: 2.37,  # Ca
    21: 18.1,  # Sc — already set
    22: 7.6,   # Ti — already set
    23: 50.6,  # V
    24: 64.3,  # Cr
    25: None,  # Mn (negative EA)
    27: 63.7,  # Co
    29: 118.4, # Cu — already set
    30: None,  # Zn (negative EA)
    31: 28.9,  # Ga
    32: 119.0, # Ge
    37: 46.9,  # Rb — already set
    38: 5.03,  # Sr — already set
    39: 29.6,  # Y
    40: 41.1,  # Zr
    41: 86.1,  # Nb — already set
    42: 71.9,  # Mo — already set
    43: 53.0,  # Tc
    44: 101.3, # Ru
    45: 109.7, # Rh — already set
    46: 53.7,  # Pd — already set
    47: 125.6, # Ag
    48: None,  # Cd (negative EA)
    49: 28.9,  # In — already set
    50: 107.3, # Sn — already set
    51: 103.2, # Sb
    52: 190.2, # Te
    55: 45.5,  # Cs
    56: 13.95, # Ba
    57: 48.3,  # La — already set
    58: 50.0,  # Ce
    71: 33.5,  # Lu
    72: 17.0,  # Hf
    73: 31.0,  # Ta — already set
    75: 14.5,  # Re
    76: 106.1, # Os
    77: 151.0, # Ir — already set
    79: 222.8, # Au
    80: None,  # Hg (negative EA)
    81: 19.2,  # Tl — already set
    82: 35.1,  # Pb — already set
    83: 91.2,  # Bi
    84: 136.0, # Po
    85: 270.1, # At — already set
    87: None,  # Fr (estimated negative)
    88: 9.6,   # Ra
    89: None,  # Ac
    90: None,  # Th
}

# ============================================================
# 读取并修改 elements.js
# ============================================================
with open('data/elements.js', 'r', encoding='utf-8') as f:
    content = f.read()

def replace_null_field(content, z, field, value):
    """把特定元素的特定字段从 null 替换为数值（仅当当前值为 null）"""
    if value is None:
        return content  # 不替换 None 值
    # 找到元素数据块（以 z:N, 开头的段落）
    # 使用正则查找 field:null 并在 z 附近替换
    # 采用精确匹配方式：在 z:Z, 之后找 field:null
    val_str = str(float(value)) if isinstance(value, float) else str(value)
    # 使用简单字符串替换，需要上下文
    # 策略：找到 z:Z, 的位置，然后在其后的范围内替换 field:null
    pattern = re.compile(r'\{z:' + str(z) + r',(.*?)\}', re.DOTALL)
    def replacer(m):
        inner = m.group(1)
        # 替换字段 null 值（仅在此元素块内）
        inner = re.sub(
            r'\b' + re.escape(field) + r':null\b',
            field + ':' + val_str,
            inner,
            count=1
        )
        return '{z:' + str(z) + ',' + inner + '}'
    new_content = pattern.sub(replacer, content, count=1)
    return new_content

changes = 0
for z, val in VDW_RADIUS.items():
    if val is not None:
        new = replace_null_field(content, z, 'vdwRadius', val)
        if new != content:
            content = new
            changes += 1

for z, val in MOHS_HARDNESS.items():
    if val is not None:
        new = replace_null_field(content, z, 'hardnessMohs', val)
        if new != content:
            content = new
            changes += 1

for z, val in ATOMIC_RADIUS.items():
    if val is not None:
        new = replace_null_field(content, z, 'atomicRadius', val)
        if new != content:
            content = new
            changes += 1

for z, val in ELECTRON_AFFINITY.items():
    if val is not None:
        new = replace_null_field(content, z, 'electronAffinity', val)
        if new != content:
            content = new
            changes += 1

with open('data/elements.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done! Made {changes} field replacements.')

# 重新统计
fields = ['vdwRadius', 'hardnessMohs', 'atomicRadius', 'electronAffinity']
for field in fields:
    null_count = content.count(f'{field}:null')
    print(f'  {field}: still null = {null_count}/118')
