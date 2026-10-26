# ⚛️ Interactive Periodic Table of Elements

> 交互式化学元素周期表 — 118种元素完整数据 · 3D可视化 · 中英双语 · PWA离线可用 · 知识测验

🌐 **[在线演示 / Live Demo](https://jame666888.github.io/periodic-table/)** · 📦 **[源代码 / Source Code](https://github.com/Jame666888/periodic-table)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Elements: 118](https://img.shields.io/badge/Elements-118-blue.svg)]()
[![PWA](https://img.shields.io/badge/PWA-Ready-purple.svg)]()
[![Languages](https://img.shields.io/badge/Languages-中文%20%7C%20English-green.svg)]()

一个功能丰富的化学元素周期表 Web 应用，涵盖 118 种元素的 20+ 属性字段，集成 3D 电子轨道可视化、晶体结构展示、GHS 安全数据、光谱信息、属性热力图、知识测验等功能。支持中英双语切换，可安装为 PWA 应用离线使用。

---

## ✨ 功能特性

### 📊 核心数据
- **118 种元素完整数据** — 原子量、电子排布、熔沸点、密度、电负性、离子半径等 20+ 属性字段
- **权威数据源** — IUPAC CIAAW 2024、CRC Handbook 105th ed.、NIST Chemistry WebBook、PubChem NIH
- **同位素数据** — 质量数、丰度、半衰期、衰变模式
- **热力学数据** — 生成焓、吉布斯自由能、标准熵、摩尔热容
- **电化学数据** — 标准电极电势、氧化还原电对、电化学当量

### 🧪 高级功能模块
| 模块 | 功能 |
|------|------|
| **P1 基础数据** | 元素周期表主界面、经典/简化视图切换、高级筛选排序 |
| **P2 对比与分析** | 元素对比工具（雷达图）、属性热力图、3D晶体结构 |
| **P3 安全与工业** | GHS危害分类、毒理数据、工业生产方法、应急处置指南 |
| **P4 光谱与前沿** | 光谱数据、先进晶体学、研究前沿信息 |
| **P5 可视化与互动** | 3D电子轨道、属性趋势图、自然丰度图、元素关系图、知识测验 |
| **化合物知识库** | 重要化合物的物化性质、发现历史、反应机理、安全注意事项、应急处置 |
| **化学方程式配平** | 智能方程式配平工具 |

### 🌐 国际化 (i18n)
- 中英文双语无缝切换
- 100+ 翻译键覆盖所有页面
- 自动检测浏览器语言
- 语言偏好持久化存储

### 📱 PWA 离线应用
- 完整 Service Worker 缓存策略（Stale-While-Revalidate）
- 可安装到主屏幕，离线可用
- 响应式设计，适配桌面/平板/手机

### 🎨 视觉体验
- 深色主题，科学感设计
- 属性热力图着色
- 3D 分子结构与电子轨道交互
- CSS 变量驱动，易于自定义主题

---

## 🚀 快速开始

### 在线使用
直接用浏览器打开 `index.html` 即可使用全部功能。

### 本地开发服务器
```bash
# 使用 Node.js
node server.js
# 然后访问 http://localhost:8080

# 或使用 Python
python -m http.server 8080
# 然后访问 http://localhost:8080
```

### 部署
本项目为纯静态网站，可部署到任何静态托管服务：
- GitHub Pages
- Vercel / Netlify
- Cloudflare Pages
- 腾讯云 EdgeOne Pages

---

## 📁 项目结构

```
periodic-table/
├── index.html              # 主页面 — 元素周期表
├── element.html            # 元素详情页
├── compare.html            # 元素对比页
├── history.html            # 化学发展史
├── carbon-element-comprehensive.html  # 碳元素知识图谱（独立专题）
├── manifest.json           # PWA 清单
├── sw.js                   # Service Worker
├── server.js               # 本地开发服务器
├── icon-192.png            # PWA 图标 192px
├── icon-512.png            # PWA 图标 512px
│
├── css/
│   ├── main.css            # 全局样式 + CSS 变量
│   ├── table.css           # 周期表表格样式
│   └── element.css         # 元素详情页样式
│
├── data/
│   ├── elements.js         # ★ 118元素核心数据 (20+ 字段/元素)
│   ├── element-details.js  # 元素扩展详情数据
│   ├── compounds.js        # 化合物知识库
│   ├── abundance-data.js   # 自然丰度数据
│   ├── crystal-structures.js # 晶体结构数据
│   ├── p3-safety.js        # GHS安全 + 毒理 + 应急
│   ├── p4-spectral.js      # 光谱数据
│   ├── p4-crystal.js       # 先进晶体学
│   └── p4-research.js      # 研究前沿
│
├── js/
│   ├── i18n.js             # 国际化模块
│   ├── table.js            # 周期表渲染
│   ├── search.js           # 搜索功能
│   ├── export.js           # 数据导出
│   ├── 3d-viewer.js        # 3D分子/晶体查看器 (Three.js)
│   ├── p5-orbital.js       # 3D电子轨道可视化
│   ├── p5-heatmap.js       # 属性热力图
│   ├── p5-trends.js        # 属性趋势图 (Chart.js)
│   ├── p5-abundance.js     # 丰度图
│   ├── p5-compare.js       # 元素对比
│   ├── p5-quiz.js          # 知识测验
│   ├── p5-relations.js     # 元素关系图
│   ├── p3-render.js        # P3安全模块渲染
│   ├── p4-renderer.js      # P4光谱/晶体渲染
│   ├── equation-balancing-enhanced.js  # 化学方程式配平
│   ├── crystal-structure-svg.js  # 晶体结构 SVG
│   ├── data-completer.js   # 数据补全
│   ├── data-validation.js  # 数据验证
│   └── ...                 # 其他增强模块
│
├── details/                # 118个元素的 Markdown 详情文件
│   ├── H.md
│   ├── He.md
│   └── ... (共118个)
│
├── scripts/                # 数据处理脚本（开发工具）
│   ├── generate_elements.py
│   ├── fill_all_missing_fields.py
│   └── ...
│
└── docs/                   # 项目文档与报告
    ├── IMPROVEMENT-PLAN.md
    ├── P5-FINAL-REPORT.md
    └── ...
```

---

## 📊 数据覆盖

| 属性 | 覆盖率 | 说明 |
|------|--------|------|
| 基本属性（原子量/符号/名称等） | 100% | 全部118种元素 |
| 熔点/沸点/密度 | ~97% | 超重人工元素部分为理论预测值 |
| 电负性 | ~85% | 稀有气体等无电负性元素为 null |
| 原子半径/共价半径/范德华半径 | ~90% | |
| 电离能/电子亲和能 | ~95% | |
| 晶体结构 | ~90% | |
| 热力学数据 | ~85% | |
| 同位素 | ~95% | |
| 工业生产数据 | ~80% | |
| GHS安全数据 | 重点元素 | 覆盖19个常见元素 |
| 化合物知识库 | 重点元素 | 覆盖19个常见元素，碳元素最完整（13个化合物） |

> `null` 表示该数据未测定或不适用（如气态元素的力学性质）

---

## 🛠️ 技术栈

| 技术 | 用途 |
|------|------|
| HTML5 / CSS3 / Vanilla JS | 核心技术栈，零框架依赖 |
| [Three.js](https://threejs.org/) | 3D 分子结构与电子轨道渲染（CDN） |
| [Chart.js](https://www.chartjs.org/) | 趋势图与丰度图（CDN） |
| Service Worker / Cache API | PWA 离线缓存 |
| CSS Custom Properties | 主题系统 |
| localStorage | 用户偏好持久化 |
| Python | 数据处理与补全脚本 |

---

## 🌍 数据来源

| 来源 | 覆盖内容 |
|------|----------|
| [IUPAC CIAAW 2024](https://ciaaw.org/) | 原子量、同位素组成 |
| [CRC Handbook 105th ed.](https://www.routledge.com/CRC-Handbook-of-Chemistry-and-Physics-105th-Edition/Haynes-Lide-Bruno/book) | 熔沸点、密度、半径、电阻、热导、硬度、模量、丰度 |
| [NIST Chemistry WebBook](https://webbook.nist.gov/chemistry/) | 电离能、电子亲和能、热力学数据 |
| [PubChem NIH](https://pubchem.ncbi.nlm.nih.gov/) | CAS号、PubChem CID |
| [USGS Minerals Yearbook](https://www.usgs.gov/centers/national-minerals-information-center) | 工业制备、产量、价格 |
| [ILO/WHO ICSC](https://www.ilo.org/) | 安全数据 |
| [COD](http://www.crystallography.net/cod/) | 晶体结构数据 |

---

## 📖 路线图

- [x] P1 — 118元素基础数据 + 热力学 + 同位素 + 电化学
- [x] P2 — 元素对比 + 高级搜索 + 属性热力图 + 3D晶体结构
- [x] P3 — GHS安全 + 毒理 + 工业生产 + 应急处置 + 数据导出
- [x] P4 — 光谱 + 先进晶体学 + 研究前沿
- [x] P5 — 3D电子轨道 + 趋势图 + 丰度图 + 元素关系图 + 知识测验
- [x] 化合物知识库（19个重点元素）
- [x] 中英双语 i18n（100+ 翻译键）
- [x] PWA 离线支持（Stale-While-Revalidate）
- [x] 移动端响应式适配
- [ ] P6 — 多语言扩展（日语、韩语等）
- [ ] P7 — 更多元素化合物数据补全
- [ ] 元素详情页 Markdown 动态渲染
- [ ] 暗色/亮色主题切换

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

- 发现数据错误？请提交 Issue 说明
- 想补充化合物数据？请编辑 `data/compounds.js`
- 想新增翻译语言？请扩展 `js/i18n.js`
- 想优化视觉效果？请修改 `css/` 下的样式文件

---

## 📄 许可证

[MIT License](./LICENSE) — 自由使用、修改、分发

---

## 🙏 鸣谢

感谢以下开源项目和数据提供方：
- [Three.js](https://threejs.org/) — 3D 渲染引擎
- [Chart.js](https://www.chartjs.org/) — 图表库
- [IUPAC](https://iupac.org/) — 国际纯粹与应用化学联合会
- [NIST](https://www.nist.gov/) — 美国国家标准与技术研究院
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) — 美国国家化学数据库
- [USGS](https://www.usgs.gov/) — 美国地质调查局

---

*Built with passion for chemistry education.* ⚛️
