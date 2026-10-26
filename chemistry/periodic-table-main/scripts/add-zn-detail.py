#!/usr/bin/env python3
"""
使用Python将元素30（锌）的详情添加到 data/element-details.js
运行: python add-zn-detail.py
"""

import re

# 读取文件
with open('data/element-details.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("📖 读取 element-details.js...")

# 元素30的详情
zn_detail = """ELEMENT_DETAILS[30] = `## 锌（Zn）— 第 30 号元素

### 发现与发展史

锌是人类最早使用的金属之一，约公元前1000年古印度已开始使用锌合金（黄铜）。

- **1746年**：英国化学家 **罗伯特·玻意耳（Robert Boyle）** 首次从异极矿中蒸馏出纯锌。
- **现代**：全球年产量约1300万吨，主要用于镀锌（防腐）和电池制造。

---

### 物理性质

| 性质 | 值 |
|------|-----|
| 原子量 | 65.38 u |
| 熔点 | 419.53 °C |
| 沸点 | 907 °C |
| 密度 | 7.14 g/cm³ |
| 硬度（莫氏） | 2.5 |
| 色泽 | 蓝白色，空气中变暗 |

---

### 化学性质

锌是中等活泼金属，化合物中通常为 **+2价**。

**与稀酸反应（置换反应）**

$$Zn + 2HCl \\rightarrow ZnCl_2 + H_2\\uparrow$$

离子方程式：$Zn + 2H^+ \\rightarrow Zn^{2+} + H_2\\uparrow$

**与强碱反应（两性）**

$$Zn + 2NaOH + 2H_2O \\rightarrow Na_2[Zn(OH)_4] + H_2\\uparrow$$

> 锌是两性金属，既溶于酸也溶于强碱。

**锌的腐蚀（电池原理）**

锌比铁活泼，作为牺牲阳极保护铁：$Zn - 2e^- \\rightarrow Zn^{2+}$

---

### 应用与原理

#### 1. 镀锌防腐（最大用途）

**原理**：锌在空气中形成致密ZnO/ZnCO₃膜，阻止进一步腐蚀。锌比铁活泼，作为牺牲阳极保护铁。

#### 2. 锌锰干电池

- 负极：$Zn \\rightarrow Zn^{2+} + 2e^-$
- 正极：$2MnO_2 + 2NH_4^+ + 2e^- \\rightarrow Mn_2O_3 + 2NH_3 + H_2O$
- 开路电压：1.5 V

#### 3. 氧化锌（ZnO）应用

- 防晒霜：ZnO纳米颗粒散射UV
- 橡胶硫化促进剂
- 药膏（收敛、抗菌）

---

### 注意事项

- 锌粉高度分散时有粉尘爆炸风险
- 锌中毒：吸入ZnO烟尘导致"金属烟热"
- 镀锌槽产生Zn蒸气，佩戴防毒面具

#### 泄漏应急处置

1. 切断泄漏源
2. 用干砂或专用吸附剂覆盖收集
3. 不得用水直接冲洗

---

### 发展前景

- **锌离子电池**：资源丰富、安全性高
- **锌空气电池**：理论能量密度高
- **纳米氧化锌**：光催化降解有机污染物

---

*参考：[NIST Chemistry WebBook](https://webbook.nist.gov/cgi/cbook.cgi?ID=7440-66-6) | [WebElements](https://www.webelements.com/zinc/)*`;

print("📝 添加元素30（锌）的详情...")

# 在 getElementMarkdown 函数之前添加
insert_marker = "function getElementMarkdown(el) {"
insert_pos = content.find(insert_marker)

if insert_pos == -1:
    print("❌ 错误：找不到插入位置")
    exit(1)

new_content = content[:insert_pos] + zn_detail + "\n\n" + content[insert_pos:]

# 写回文件
with open('data/element-details.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ 已添加元素30（锌）的详情！")
print(f"   详情长度：{len(zn_detail)} 字符")
print("   包含章节：")
print("     - 发现与发展史")
print("     - 物理性质")
print("     - 化学性质（含化学方程式）")
print("     - 应用与原理")
print("     - 注意事项（含泄漏应急）")
print("     - 发展前景")
