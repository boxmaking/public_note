#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成 p6-education.js — 118元素教学资源数据
主脚本：导入各数据模块，生成最终JS文件
"""
import json, os, sys

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_PATH = os.path.join(SCRIPT_DIR, '..', 'data', 'p6-education.js')
sys.path.insert(0, SCRIPT_DIR)

# 导入数据模块
from edu_data_part1 import DATA as D1
from edu_data_part2 import DATA as D2
from edu_data_part3 import DATA as D3
from edu_data_gen import gen_remaining

# 合并所有数据
ALL_DATA = {}
ALL_DATA.update(D1)
ALL_DATA.update(D2)
ALL_DATA.update(D3)
ALL_DATA.update(gen_remaining())

# 元素顺序(按Z排序)
from edu_data_gen import ELEMENT_LIST

def generate_js():
    lines = []
    lines.append('/**')
    lines.append(' * P6 教学资源数据 — 独立数据文件')
    lines.append(' * 加载方式：<script src="data/p6-education.js"></script>')
    lines.append(' *')
    lines.append(' * 数据来源:')
    lines.append(' *   人教版高中化学教材(2019版) / 鲁科版高中化学教材')
    lines.append(' *   近5年全国卷及各省市高考化学真题')
    lines.append(' *   中国化学奥林匹克竞赛大纲')
    lines.append(' *   教学经验积累与常见学生 misconception 研究')
    lines.append(' */')
    lines.append('')
    lines.append('const P6_EDUCATION = {};')
    lines.append('')

    for z, sym, cn, en, cat in ELEMENT_LIST:
        if sym not in ALL_DATA:
            print(f'WARNING: {sym} ({cn}) missing!')
            continue
        d = ALL_DATA[sym]
        js = json.dumps(d, ensure_ascii=False, indent=2)
        lines.append(f"P6_EDUCATION['{sym}'] = {js};")
        lines.append('')

    lines.append('if (typeof window !== \'undefined\') {')
    lines.append('  window.P6_EDUCATION = P6_EDUCATION;')
    lines.append('}')

    output = '\n'.join(lines)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(output)

    # 验证
    count = output.count("P6_EDUCATION['")
    print(f'生成完成: {OUTPUT_PATH}')
    print(f'元素数量: {count}')
    print(f'文件大小: {len(output)} 字节 ({len(output)/1024:.1f} KB)')

if __name__ == '__main__':
    generate_js()
