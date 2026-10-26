#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
化合物知识库数据生成脚本 — 为118元素周期表Web应用生成完整compounds.js

用法: python scripts/generate-compounds-data.py
输出: data/compounds.js

数据分模块存储:
  gen_main.py       - 主逻辑: JS生成 + 元素列表 + 保留H/C现有数据
  data_part2.py     - He-Ar (2-18, 不含H和C)
  data_part3.py     - K-Kr  (19-36)
  data_part4.py     - Rb-Ba (37-56)
  data_part5.py     - Hf-Rn (72-86)
  data_part6.py     - 镧系 La-Lu (57-71)
  data_part7.py     - 锕系 Ac-Lr + Fr, Ra (87-103)
  data_part8.py     - 超重元素 Rf-Og (104-118)
"""
import os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from gen_main import main

if __name__ == '__main__':
    main()
