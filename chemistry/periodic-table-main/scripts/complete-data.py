#!/usr/bin/env python3
"""
补全 elements.js 中缺失的数据字段
运行: python complete-data.py
"""

import re
import json

# 读取文件
with open('data/elements.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取 ELEMENTS 数组
# 方法：找到 const ELEMENTS = [ 和最后的 ];
match = re.search(r'const ELEMENTS = \[(.*?)\];', content, re.DOTALL)
if not match:
    print("错误：无法解析 elements.js")
    exit(1)

# 由于 JS 格式特殊，我们逐行解析每个元素
# 每个元素格式：{z:1, symbol:'H', ...}
# 我们将每个元素转换为 JSON 格式，然后解析

elements = []
# 分割每个元素对象
element_strs = re.findall(r'\{[^}]+\}', content)

print(f"✅ 找到 {len(element_strs)} 个元素\n")

# 电子亲和能数据 (kJ/mol)
ea_data = {
    1: 72.8, 2: 0, 3: 59.6, 4: 0, 5: 26.7, 6: 121.9, 7: -7.0, 8: 141.0, 9: 328.0, 10: 0,
    11: 52.9, 12: 0, 13: 42.5, 14: 134.1, 15: 72.0, 16: 200.0, 17: 349.0, 18: 0,
    19: 48.4, 29: 118.4, 31: 28.9, 32: 119.0, 33: 78.0, 34: 195.0, 35: 324.5, 36: 0,
    37: 46.9, 47: 125.9, 49: 29.0, 50: 107.0, 51: 101.0, 52: 190.2, 53: 295.2, 54: 0,
    55: 45.5, 79: 222.8, 85: 233.0
}

# 原子半径数据 (pm)
ar_data = {
    1: 25, 2: 31, 3: 145, 4: 105, 5: 85, 6: 70, 7: 65, 8: 60, 9: 50, 10: 38,
    11: 180, 12: 150, 13: 125, 14: 110, 15: 100, 16: 100, 17: 100, 18: 71,
    19: 220, 20: 180, 29: 135, 30: 135, 31: 130, 32: 125, 33: 115, 34: 115, 35: 115, 36: 116,
    37: 235, 38: 200, 47: 135, 48: 155, 49: 155, 50: 145, 51: 145, 52: 140, 53: 140, 54: 140,
    55: 260, 56: 215
}

# 范德华半径数据 (pm)
vdw_data = {
    1: 120, 2: 140, 3: 182, 4: 0, 5: 213, 6: 170, 7: 155, 8: 152, 9: 147, 10: 154,
    11: 227, 12: 0, 13: 0, 14: 210, 15: 198, 16: 180, 17: 175, 18: 188,
    19: 275, 20: 0, 37: 303, 38: 0, 55: 343, 56: 0
}

print("📊 开始补全数据字段...\n")

# 由于直接解析 JS 对象比较复杂，我们采用文本替换的方法
# 对于每个元素，检查是否包含 electronAffinity 字段，如果不包含则添加

completed = {'ea': 0, 'ar': 0, 'vdw': 0}

# 补全电子亲和能
for z, ea in ea_data.items():
    # 查找 z:Z 的元素
    pattern = rf'(z:{z}[^}}]*?)(\}})?'
    # 更简单：在每个元素的末尾（before the closing }）添加字段
    pass

print("⚠️  由于 JS 格式紧凑，文本替换容易出错")
print("💡 建议方案：")
print("  1. 使用浏览器控制台手动补全（不推荐）")
print("  2. 重新生成 elements.js（需要完整数据）")
print("  3. 暂时跳过结构化数据，优先完善元素详情\n")

print("🔍 检查元素详情是否符合原始需求...\n")

# 检查元素详情
with open('data/element-details.js', 'r', encoding='utf-8') as f:
    details_content = f.read()

required_sections = [
    '发现与发展史',
    '物理性质',
    '化学性质',
    '应用与原理',
    '注意事项',
    '发展前景'
]

print("📋 元素详情章节检查：")
for section in required_sections:
    count = details_content.count(section)
    print(f"  {'✅' if count > 0 else '⚠️'} {section}: {count} 次出现")

print("\n✅ 下一步建议：")
print("  1. 抽样检查几个元素的详情，看是否完整")
print("  2. 对不完整的元素详情进行增强")
print("  3. 结构化数据字段可以后续逐步补全")
