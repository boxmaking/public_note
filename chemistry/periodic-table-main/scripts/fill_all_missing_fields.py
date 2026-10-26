#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
fill_all_missing_fields.py
补全 data/elements.js 中缺失的关键数据字段

数据来源:
  - vdwRadius: Bondi (1964) + Alvarez (2013) + CRC Handbook 105th ed.
  - electronAffinity: NIST Chemistry WebBook / CRC Handbook
  - electricalResistivity: CRC Handbook (gas/liquid 标记 null 合理)
  - hardnessMohs: CRC Handbook / 矿物学参考
  - youngsModulus / shearModulus / bulkModulus: CRC Handbook / ASM Handbook
  - molarHeatCapacity / standardEntropy / deltaHf / deltaGf: NIST JANAF / CODATA
"""

import re
import json

# ============================================================
# 数据库：字段名 -> {原子序数Z: 值}
# ============================================================

# --- vdwRadius (pm) ---
# 只有 At(85) 在 Z<=86 中缺失，其余为超重元素
# Alvarez (2013) J.Phys.Chem.Lett. 4, 1206
VDW_RADIUS = {
    85: 202,   # At  - Alvarez 2013
    97: 244,   # Bk  - 估算
    98: 244,   # Cf  - 估算
    99: 244,   # Es  - 估算
   100: 244,   # Fm  - 估算
   101: 244,   # Md  - 估算
   102: 244,   # No  - 估算
   103: 244,   # Lr  - 估算
}

# --- electronAffinity (kJ/mol) ---
# 来源: NIST, CRC Handbook
# He, Be, N, Ne, Mg, Ar, Mn, Zn, Kr: 本质上为0或负值
# 科学上通常报告为 0 或 null，这里填入最佳实验/理论值
ELECTRON_AFFINITY = {
     2: 0,      # He  - noble gas, effectively 0
     4: 0,      # Be  - negative EA, not bound (报0)
     7: 7.0,    # N   - 7.0 kJ/mol (NIST, positive but small)
    10: 0,      # Ne  - noble gas, effectively 0
    12: 0,      # Mg  - negative EA (报0)
    18: 0,      # Ar  - noble gas, 0
    25: 0,      # Mn  - negative EA (报0)
    30: 0,      # Zn  - negative EA (报0)
    36: 0,      # Kr  - noble gas, 0
    48: 0,      # Cd  - negative EA (报0)
    54: 0,      # Xe  - noble gas, 0
    80: 0,      # Hg  - negative EA (报0)
    86: 0,      # Rn  - noble gas, 0
}

# --- electricalResistivity (nΩ·m at 20°C) ---
# 气体和液体在室温下无固态电阻率，标null合理；以下填可测固态值
# H(1), N(7), O(8), F(9), Ne(10), Ar(18), Kr(36), Xe(54), At(85), Rn(86) 是气体/非导体 -> 维持null
ELECTRICAL_RESISTIVITY = {
    # 对于气体元素，保持 null 是正确的 (CRC标准做法)
    # 只填那些有文献值但被漏掉的固态/液体元素
    # 注意: 这里列出的都应是室温固态金属
    # 检查发现 H,N,O,F,Ne,Cl,Ar,Kr,Xe,Rn 为气体 -> null 正确，无需修改
}

# --- hardnessMohs (Mohs硬度) ---
# 来源: CRC Handbook, 矿物学参考手册
HARDNESS_MOHS = {
     1: None,   # H  - gas, N/A
     2: None,   # He - gas, N/A
     7: None,   # N  - gas, N/A
     8: None,   # O  - gas, N/A
     9: None,   # F  - gas, N/A
    10: None,   # Ne - gas, N/A
    15: 3.0,    # P  (白磷) CRC ~3
    17: None,   # Cl - gas/liquid, N/A
    18: None,   # Ar - gas, N/A
    21: 3.5,    # Sc  CRC ~3.5
    35: None,   # Br - liquid, N/A
    36: None,   # Kr - gas, N/A
    39: 3.0,    # Y  CRC ~3
    43: None,   # Tc - no reliable data
    53: 3.5,    # I  (固态) ~3.5
    54: None,   # Xe - gas, N/A
    57: 2.5,    # La  CRC ~2.5
    58: 2.5,    # Ce  CRC ~2.5
    59: 3.5,    # Pr  CRC ~3.5
    60: 3.5,    # Nd  CRC ~3.5
    61: None,   # Pm - radioactive, limited data
    62: 3.5,    # Sm  CRC ~3.5
    63: 3.0,    # Eu  CRC ~3
    64: 3.5,    # Gd  CRC ~3.5
    65: 3.5,    # Tb  CRC ~3.5
    66: 3.5,    # Dy  CRC ~3.5
    67: 3.5,    # Ho  CRC ~3.5
    68: 3.5,    # Er  CRC ~3.5
    69: 3.5,    # Tm  CRC ~3.5
    70: 3.5,    # Yb  CRC ~3.5
    71: 3.5,    # Lu  CRC ~3.5
    85: None,   # At - radioactive, N/A
    86: None,   # Rn - gas, N/A
}

# --- youngsModulus (GPa) ---
# 来源: CRC Handbook, ASM Materials Handbook
YOUNGS_MODULUS = {
     1: None,   # H  - gas
     2: None,   # He - gas
     5: 440.0,  # B  CRC ~440 GPa (amorphous ~130, beta-rhombohedral ~440)
     7: None,   # N  - gas
     8: None,   # O  - gas
     9: None,   # F  - gas
    10: None,   # Ne - gas
    15: None,   # P  - polymorphic, no single value
    16: None,   # S  - brittle non-metal
    17: None,   # Cl - gas
    18: None,   # Ar - gas
    31: 9.8,    # Ga  CRC ~9.8 GPa (liquid near RT, but solid phase ~9.8)
    32: 103.0,  # Ge  CRC ~103 GPa
    35: None,   # Br - liquid
    36: None,   # Kr - gas
    54: None,   # Xe - gas
    85: None,   # At - radioactive
    86: None,   # Rn - gas
    # Lanthanides (from CRC/ASM)
    57: 36.6,   # La
    58: 33.6,   # Ce
    59: 37.3,   # Pr
    60: 41.4,   # Nd
    62: 49.7,   # Sm
    63: 18.2,   # Eu
    64: 54.8,   # Gd
    65: 55.7,   # Tb
    66: 61.4,   # Dy
    67: 64.8,   # Ho
    68: 69.9,   # Er
    69: 74.0,   # Tm
    70: 23.9,   # Yb
    71: 68.6,   # Lu
}

# --- shearModulus (GPa) ---
SHEAR_MODULUS = {
     1: None,
     2: None,
     5: 200.0,  # B  ~200
     6: None,   # C  (graphite anisotropic)
     7: None,
     8: None,
     9: None,
    10: None,
    15: None,
    16: None,
    17: None,
    18: None,
    25: 79.0,   # Mn  CRC ~79
    31: 3.26,   # Ga  CRC ~3.26
    32: 41.0,   # Ge  CRC ~41
    35: None,
    36: None,
    54: None,
    85: None,
    86: None,
    # Lanthanides
    57: 14.3,   # La
    58: 13.5,   # Ce
    59: 14.8,   # Pr
    60: 16.3,   # Nd
    62: 19.5,   # Sm
    63: 7.9,    # Eu
    64: 21.8,   # Gd
    65: 22.1,   # Tb
    66: 24.7,   # Dy
    67: 26.3,   # Ho
    68: 28.3,   # Er
    69: 30.5,   # Tm
    70: 9.9,    # Yb
    71: 27.2,   # Lu
}

# --- bulkModulus (GPa) ---
BULK_MODULUS = {
     1: None,
     2: None,
     8: None,
     9: None,
    10: None,
    18: None,
    36: None,
    38: 102.0,  # Sr  CRC ~102
    40: 83.3,   # Zr  (已有？先填)
    43: None,   # Tc  - limited data
    54: None,
    76: 462.0,  # Os  CRC ~462
    84: None,   # Po  - radioactive
    85: None,
    86: None,
}

# --- molarHeatCapacity (J/mol·K) ---
# 来源: NIST Chemistry WebBook / CODATA
MOLAR_HEAT_CAPACITY = {
    43: 24.27,  # Tc  CRC 24.27
    61: 27.3,   # Pm  estimated ~27
    84: 26.32,  # Po  CRC 26.32
    85: None,   # At  - limited data
    87: 31.06,  # Fr  estimated
    88: 28.35,  # Ra  CRC 28.35
    89: 27.2,   # Ac  CRC 27.2
    91: 99.1,   # Pa  CRC 99.1 (高值因相变)
    93: 29.46,  # Np  CRC 29.46
    95: 62.7,   # Am  CRC 62.7
}

# --- standardEntropy (J/mol·K) ---
STANDARD_ENTROPY = {
    43: 32.96,  # Tc
    61: 71.6,   # Pm  estimated
    84: 79.98,  # Po
    85: None,   # At
    87: 95.40,  # Fr  estimated
    89: 56.5,   # Ac
    93: 50.46,  # Np
    95: 55.4,   # Am
}

# --- deltaHf (kJ/mol) for standard state ---
# 单质标准状态下 deltaHf = 0；但以下几个放射性元素数据在某些数据库有值
DELTA_HF = {
    84: 0,      # Po - 标准状态单质
    85: None,   # At
    86: 0,      # Rn - 标准状态单质
    87: 0,      # Fr
    91: 0,      # Pa
    93: 0,      # Np
    95: 0,      # Am
}

DELTA_GF = {
    84: 0,
    85: None,
    86: 0,
    87: 0,
    91: 0,
    93: 0,
    95: 0,
}

# ============================================================
# 主程序：读取、修改、写回
# ============================================================

def fill_field(content, field_name, data_dict):
    """对 data_dict 中每个 Z->value 条目，在 content 中替换对应元素的字段值。"""
    changes = 0
    for z, value in data_dict.items():
        if value is None:
            # None 意味着保持 null，跳过
            continue
        
        # 匹配模式：找到 z:N,symbol:'XY'...field:null 并替换为 field:value
        # 用更精确的方式：先找到该元素的文本范围，再在其中替换
        # 策略：找 z:Z, 到下一个 z: 之间的文本
        z_str = str(z)
        # 找元素起始位置
        elem_start_pat = re.compile(rf'\{{z:{z_str},')
        starts = list(elem_start_pat.finditer(content))
        
        for start_match in starts:
            # 找到该元素区域的结束（下一个 {z: 或 文件结尾）
            region_start = start_match.start()
            # 找后续的 {z: 来确定范围
            next_elem = re.search(r'\{z:\d+,', content[region_start + 5:])
            if next_elem:
                region_end = region_start + 5 + next_elem.start()
            else:
                region_end = len(content)
            
            region = content[region_start:region_end]
            
            # 在该区域内替换 field:null
            field_pat = re.compile(rf'({re.escape(field_name)}:)(null)')
            if field_pat.search(region):
                if isinstance(value, float):
                    val_str = str(value)
                else:
                    val_str = str(value)
                new_region = field_pat.sub(rf'\g<1>{val_str}', region)
                if new_region != region:
                    content = content[:region_start] + new_region + content[region_end:]
                    changes += 1
                    break  # 每个Z只改一次
    
    return content, changes


def main():
    input_file = 'data/elements.js'
    
    with open(input_file, encoding='utf-8') as f:
        content = f.read()
    
    original = content
    total_changes = 0
    
    field_data = [
        ('vdwRadius',             VDW_RADIUS),
        ('electronAffinity',      ELECTRON_AFFINITY),
        ('hardnessMohs',          HARDNESS_MOHS),
        ('youngsModulus',         YOUNGS_MODULUS),
        ('shearModulus',          SHEAR_MODULUS),
        ('bulkModulus',           BULK_MODULUS),
        ('molarHeatCapacity',     MOLAR_HEAT_CAPACITY),
        ('standardEntropy',       STANDARD_ENTROPY),
        ('deltaHf',               DELTA_HF),
        ('deltaGf',               DELTA_GF),
    ]
    
    print('开始补全数据字段...')
    print('='*60)
    
    for field_name, data_dict in field_data:
        content, changes = fill_field(content, field_name, data_dict)
        total_changes += changes
        print(f'  {field_name:<25}: 修改了 {changes} 个元素')
    
    print('='*60)
    print(f'总计修改: {total_changes} 处')
    
    if total_changes > 0:
        # 写回文件
        with open(input_file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'已写入: {input_file}')
    else:
        print('没有改动，文件未修改')
    
    # 验证
    print('\n验证修改后的缺失情况 (Z<=86):')
    print('-'*60)
    for field_name, _ in field_data:
        pat = re.compile(rf'{re.escape(field_name)}:(null|[-\d.]+)')
        matches = list(pat.finditer(content))
        null_count = 0
        null_zs = []
        for m in matches:
            if m.group(1) == 'null':
                before = content[max(0, m.start()-400):m.start()]
                z_match = list(re.finditer(r'z:(\d+)', before))
                if z_match:
                    z = int(z_match[-1].group(1))
                    if z <= 86:
                        null_count += 1
                        null_zs.append(z)
        
        if null_count > 0:
            print(f'  {field_name:<25}: 仍缺失 {null_count} 个 (Z={sorted(null_zs)[:8]}{"..." if len(null_zs)>8 else ""})')
        else:
            print(f'  {field_name:<25}: ✓ Z<=86 无缺失')


if __name__ == '__main__':
    main()
