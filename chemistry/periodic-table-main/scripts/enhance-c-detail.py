#!/usr/bin/env python3
"""
完善元素6（碳）的详情
运行: python enhance-c-detail.py
"""

import re

# 读取文件
with open('data/element-details.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("🔍 检查元素6（碳）的当前详情...\n")

# 查找元素6的详情
pattern = r'ELEMENT_DETAILS\[6\] = `([\s\S]*?)`;'
match = re.search(pattern, content)

if match:
    current_detail = match.group(1)
    print(f"✅ 找到元素6的详情（{len(current_detail)} 字符）\n")
    
    # 检查是否包含必需章节
    required = ['发现与发展史', '物理性质', '化学性质', '应用与原理', '注意事项', '发展前景']
    for section in required:
        if section in current_detail:
            print(f"  ✅ {section}")
        else:
            print(f"  ❌ {section} (缺失)")
else:
    print("❌ 未找到元素6的详情")

print("\n💡 建议：")
print("  1. 元素1（氢）的详情非常完整，可以作为模板")
print("  2. 需要为元素6（碳）添加缺失的章节")
print("  3. 确保所有化学方程式格式正确")
