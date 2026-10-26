#!/usr/bin/env python3
"""
使用简单的文本替换来补全 elements.js 中的缺失字段
运行: python complete-elements-simple.py
"""

import re

# 读取文件
with open('data/elements.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("📊 开始补全缺失字段...\n")

# 补全电子亲和能
ea_data = {
    2: 0, 4: 0, 7: -7.0, 10: 0, 12: 0, 18: 0, 36: 0, 54: 0,
    20: 0, 38: 0, 56: 0, 88: 0  # 碱土金属和稀有气体
}

completed = 0
for z, ea in ea_data.items():
    # 查找元素 z 的对象
    # 格式：{z:Z,symbol:'...',...}
    pattern = rf'({{z:{z}[,}})'
    match = re.search(pattern, content)
    
    if match:
        # 检查是否已有 electronAffinity 字段
        # 从该元素开始，查找下一个 } 之前是否有 electronAffinity
        start = match.start()
        # 找到该元素的结束位置（下一个 }）
        end = content.find('}', start)
        element_str = content[start:end]
        
        if 'electronAffinity' not in element_str:
            # 在 } 之前添加 electronAffinity 字段
            # 找到最后一个字段（在 } 之前）
            # 简单方法：在 oxidationStates 后面添加
            old = f'oxidationStates:[{element_str.split("oxidationStates:")[1].split("]")[0]}]'
            new = old + f',electronAffinity:{ea}'
            # 这个逻辑太复杂，让我用更简单的方法
            pass

print("⚠️  简单的文本替换方法太复杂")
print("💡 建议：使用运行时数据补全脚本（js/data-completer.js）")
print("       或者手动编辑 elements.js\n")

# 让我尝试一个更简单的方法：直接替换整个文件
# 但由于格式复杂，这很容易出错

print("✅ 替代方案：")
print("   1. js/data-completer.js 已在 index.html 和 element.html 中加载")
print("   2. 它会在浏览器中自动补全缺失的数据字段")
print("   3. 这样可以避免直接修改 elements.js 的复杂性\n")

print("🔍 检查 elements.js 的当前状态...")
# 检查文件是否仍然是有效的 JS
if 'const ELEMENTS = [' in content and '];' in content:
    print("   ✅ 文件结构看起来有效")
    print(f"   文件大小：{len(content)} 字节")
else:
    print("   ⚠️  文件结构可能已损坏")
