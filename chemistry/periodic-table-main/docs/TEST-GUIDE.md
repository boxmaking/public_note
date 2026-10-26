# 功能测试指南

## 测试1: PWA 功能

### 步骤1: 打开首页
1. 访问 http://localhost:8080/index.html
2. 打开浏览器开发者工具 (按 F12)
3. 切换到 "Application" (应用) 标签

### 步骤2: 检查 Manifest
1. 在左侧边栏找到 "Manifest"
2. 确认以下信息正确显示：
   - Name: 化学元素周期表
   - Short name: 周期表
   - Display: standalone
   - Icons: 应该显示两个图标 (192x192 和 512x512)

### 步骤3: 检查 Service Worker
1. 在左侧边栏找到 "Service Workers"
2. 确认 sw.js 已注册
3. 状态应该显示为 "activated and running" (已激活并运行)
4. 如果没有注册，刷新页面

### 步骤4: 测试离线功能
1. 在 Service Workers 面板中，勾选 "Offline" (离线) 复选框
2. 刷新页面 (F5)
3. 页面应该仍然可以正常加载
4. 取消勾选 "Offline" 恢复正常

### 步骤5: 测试 PWA 安装 (可选)
1. 在地址栏右侧应该看到安装图标 (⊕ 或 📥)
2. 点击安装图标
3. 确认应用可以独立运行

---

## 测试2: i18n 多语言功能

### 步骤1: 检查语言切换按钮
1. 在导航栏右侧应该看到 "🇺🇸 EN" 按钮
2. 按钮样式应该正确显示 (深色背景，圆角)

### 步骤2: 测试语言切换
1. 点击 "🇺🇸 EN" 按钮
2. 页面应该重新加载
3. 以下元素应该显示英文：
   - 导航链接: "Periodic Table", "History", "Elements"
   - 搜索框占位符: "Search elements..."
   - 英雄区标题: "Explore the Chemical Universe"
   - 按钮文本: "Simple View", "Full View", "Advanced Filter" 等

### 步骤3: 检查 localStorage
1. 打开开发者工具的 "Application" 标签
2. 在左侧找到 "Local Storage"
3. 展开 "Local Storage" -> http://localhost:8080
4. 确认 `periodic-table-lang` 的值为 "en"

### 步骤4: 测试中文切换
1. 点击 "🇨🇳 中文" 按钮
2. 页面应该切换回中文
3. 确认 `periodic-table-lang` 的值变回 "zh"

---

## 测试3: 元素详情页

### 步骤1: 打开元素详情页
1. 点击任意元素卡片
2. 或访问 http://localhost:8080/element.html?z=1

### 步骤2: 检查 PWA 功能
1. 打开开发者工具 -> Application -> Service Workers
2. 确认 sw.js 已注册 (应该与首页共享同一个 SW)

### 步骤3: 检查语言切换
1. 点击语言切换按钮
2. 确认页面可以切换语言

---

## 预期结果

### ✅ PWA 功能
- Manifest 正确加载
- Service Worker 成功注册
- 离线模式正常工作
- 图标正确显示

### ✅ i18n 功能
- 语言切换按钮显示正确
- 点击按钮后页面切换语言
- 语言偏好保存到 localStorage
- 页面刷新后保持语言选择

---

## 如果测试失败

### PWA 功能失败
- **Manifest 未加载**: 检查 `<link rel="manifest" href="./manifest.json" />` 是否存在
- **Service Worker 未注册**: 检查 `sw.js` 是否存在，路径是否正确
- **离线模式不工作**: 检查 sw.js 的缓存策略

### i18n 功能失败
- **语言按钮不显示**: 检查 `js/i18n.js` 是否正确加载
- **点击无反应**: 打开控制台查看错误信息
- **翻译不生效**: 检查元素是否有 `data-i18n` 属性

---

## 测试检查清单

- [ ] Manifest 正确加载
- [ ] Service Worker 成功注册
- [ ] 离线模式正常工作
- [ ] 语言切换按钮显示
- [ ] 语言切换功能正常
- [ ] localStorage 正确保存偏好
- [ ] 元素详情页功能正常
- [ ] 所有页面 PWA 功能正常
