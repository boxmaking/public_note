#!/usr/bin/env python3
"""
检查元素详情是否符合原始需求
运行: python check-element-details.py
"""

import re

# 读取 element-details.js
with open('data/element-details.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("🔍 检查元素详情完整性...\n")

# 原始需求的关键章节
required_sections = [
    ('发现与发展史', '元素的发现/发展史'),
    ('物理性质', '元素的所有物理性质'),
    ('化学性质', '所有的化学性质（含化学方程式）'),
    ('应用与原理', '各个领域的相关应用'),
    ('注意事项', '使用的注意事项'),
    ('泄漏', '泄露的专业级处理措施'),
    ('发展前景', '发展应用前景')
]

print("📋 必需章节检查：\n")

for keyword, description in required_sections:
    # 统计包含该关键词的元素数量
    count = content.count(keyword)
    status = '✅' if count >= 118 else ('⚠️' if count > 0 else '❌')
    print(f"  {status} {keyword}: {count}/118 个元素包含")

print("\n📊 抽样检查几个关键元素：\n")

# 抽样检查几个元素
sample_elements = [1, 6, 26, 79]  # H, C, Fe, Au

for z in sample_elements:
    # 查找该元素的详情
    pattern = rf'ELEMENT_DETAILS\[{z}\] = `(.*?)`'
    match = re.search(pattern, content, re.DOTALL)
    
    if match:
        detail = match.group(1)
        print(f"元素 Z={z}:")
        
        for keyword, description in required_sections:
            has_it = keyword in detail
            print(f"    {'✅' if has_it else '❌'} {keyword}")
        
        print()

print("\n💡 建议：")
print("  1. 对于缺失章节的元素，需要增强详情")
print("  2. 优先增强常见元素（H, C, Fe, Au等）")
print("  3. 确保化学方程式格式正确")
print("  4. 应用部分要说明原理和机制")
