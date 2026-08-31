# 嵌入式开发实习生 · 个人作品集网站

一个面向嵌入式岗位面试的静态个人作品集网站，使用 **HTML5 + Tailwind CSS + JavaScript** 构建，响应式设计，适配桌面端和移动端。纯静态网页，本地双击 HTML 即可预览，上传 GitHub Pages / Vercel 即生成公开链接。

---

## 📁 项目结构

```
portfolio/
├── index.html                  # 首页 — 个人简介、技能清单、联系方式
├── projects.html               # 项目列表总览页 — 卡片式项目展示
├── about.html                  # 关于我页 — 学习路线、求职规划
├── contact.html                # 联系方式页 — 邮箱/手机/GitHub/微信
├── project-template.html       # 项目详情模板 — 复制此文件新建项目
├── project-freertos.html       # FreeRTOS 智能窗户温控系统 详情
├── project-butterfly.html      # 仿生蝴蝶 BLE 姿态控制 详情
├── project-3prs.html           # 3-PRS 并联雕刻机器人 详情
├── css/
│   └── style.css               # 公共自定义样式（Tailwind 补充）
├── js/
│   └── main.js                 # 全局交互逻辑（导航/滚动/代码高亮）
├── assets/                     # 图片/视频资源目录（请将素材放这里）
└── README.md                   # 本文件
```

---

## 🚀 本地打开预览

### 方法一：直接双击（最简单）
1. 打开 `portfolio` 文件夹
2. 双击 `index.html`
3. 浏览器会自动打开网站首页

### 方法二：Live Server（推荐开发时使用）
```bash
cd d:/简历相关/portfolio
npx serve .          # 或使用 VS Code 的 Live Server 插件
```
然后打开 http://localhost:3000

### 方法三：Python 简易服务器
```bash
cd d:/简历相关/portfolio
python -m http.server 8080
```
打开 http://localhost:8080

---

## 🚀 部署到 GitHub Pages（生成公开访问链接）

### 第一步：创建 GitHub 仓库

1. 打开 [github.com](https://github.com) 并登录（没有账号先注册）
2. 点击右上角 `+` → `New repository`
3. 仓库名填写：`portfolio`（或任意名称，如 `embedded-portfolio`）
4. 选择 **Public**（公开仓库，GitHub Pages 免费版要求公开）
5. **不要**勾选 "Add a README file"（我们已有自己的 README）
6. 点击 `Create repository`

### 第二步：上传文件到仓库

**方式 A — 直接在网页上传（推荐新手）：**

1. 进入新建的仓库页面，会看到 "Quick setup" 页面
2. 点击 `uploading an existing file` 链接
3. 将 `portfolio` 文件夹内**所有文件和子文件夹**直接拖入浏览器窗口
4. 在下方 "Commit message" 填写：`初始化作品集网站`
5. 确保选中 `Commit directly to the main branch`
6. 点击 `Commit changes`

**方式 B — 使用 Git 命令行（推荐后续维护）：**

```bash
# 1. 进入项目目录
cd d:/简历相关/portfolio

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 首次提交
git commit -m "初始化作品集网站"

# 5. 设置主分支名为 main
git branch -M main

# 6. 关联远程仓库（替换 YOUR_USERNAME 为你的 GitHub 用户名）
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 7. 推送到 GitHub
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 进入仓库页面 → 点击上方 `Settings` 标签
2. 左侧菜单找到 `Pages`（在 "Code and automation" 分类下）
3. **Source** 选择 `Deploy from a branch`
4. **Branch** 下拉选择 `main`，目录选择 `/ (root)`，点击 `Save`
5. 等待约 **1-2 分钟**，页面顶部会显示部署成功的绿色提示框：
   ```
   ✅ Your site is live at https://YOUR_USERNAME.github.io/portfolio/
   ```
6. **复制这个链接，这就是你的公开作品集网址！** 发给面试官即可直接浏览。

> 💡 如果是通过方式 A（网页上传）的，GitHub 会自动触发部署，不需要额外操作。

### 第四步：后续更新网站

每次修改了本地文件后，通过 Git 推送更新：

```bash
cd d:/简历相关/portfolio
git add .
git commit -m "更新了 xxx 内容"
git push
```

GitHub Pages 会在 1-2 分钟内自动重新部署。如果使用网页上传方式，重新拖入覆盖文件即可。

---

## 📝 如何修改内容

### 修改个人信息

| 要修改的内容 | 所在文件 | 搜索关键词 |
|---|---|---|
| 姓名 | `index.html` Hero 区域 | `陈明` |
| 手机号 | `index.html` / `contact.html` | `18244439951` |
| 邮箱 | `index.html` / `about.html` / `contact.html` | `18244439951@163.com` |
| GitHub 地址 | `index.html` / `contact.html` | `your-username` |
| 技能清单 | `index.html` 核心技能区域 | `STM32F103` |
| 一句话介绍 | `index.html` Hero 区域 | `东北林业大学` |
| 学习路线 | `about.html` 时间线区域 | `大一 · 基础入门` |
| 求职规划 | `about.html` 求职规划区域 | `目标岗位` |
| 微信二维码 | `contact.html` | `微信二维码` |

### 新增第四个项目（完整步骤）

**1. 复制模板创建详情页：**
```
复制：project-template.html → 重命名为 project-新项目名.html
```

**2. 编辑详情页内容：**
打开 `project-新项目名.html`，按以下 7 个板块逐一替换：
- ① 项目概述：开发背景、实现目标
- ② 硬件/系统架构：替换硬件资源表、架构图
- ③ 核心技术实现：技术亮点、算法描述
- ④ 开发难点 & 解决方案：面试高频提问点
- ⑤ 演示素材：替换图片和视频 src
- ⑥ 核心代码片段：替换代码示例
- ⑦ 项目总结 & 个人收获

**3. 在项目列表页添加新卡片：**
打开 `projects.html`，在 `<!-- ───── 项目 4: 3-PRS 并联雕刻机器人 ───── -->` 卡片后面（或替换它）插入：

```html
<!-- ───── 项目 N: 新项目名称 ───── -->
<div class="project-card fade-in">
  <div class="card-accent-bar"></div>
  <div class="p-6">
    <div class="w-14 h-14 rounded-lg bg-xxx-50 flex items-center justify-center text-2xl mb-4">
      🔧   <!-- 替换为合适的 emoji -->
    </div>
    <h3 class="text-lg font-bold text-slate-800 mb-2">新项目名称</h3>
    <p class="text-sm text-slate-500 mb-4 leading-relaxed">项目一句话概述</p>
    <div class="mb-5">
      <span class="tech-tag">技术1</span>
      <span class="tech-tag">技术2</span>
    </div>
    <a href="project-新项目名.html" class="inline-flex items-center gap-1 text-accent hover:text-accent-hover font-semibold text-sm transition-colors">
      查看详情
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </a>
  </div>
</div>
```

### 替换图片/视频

1. 将你的图片或视频文件放入 `assets/` 目录
2. 在 HTML 中找到占位区域（搜索 `img-placeholder` 或 `video-placeholder`）
3. 替换占位 div 为实际标签：

**图片示例：**
```html
<!-- 替换前 -->
<div class="img-placeholder"><span>📷 实物照片</span></div>

<!-- 替换后 -->
<img src="assets/my-photo.jpg" alt="实物照片" class="w-full rounded-lg">
```

**视频示例（本地文件，建议 <10MB）：**
```html
<!-- 替换前 -->
<div class="video-placeholder"><span>🎬 视频</span></div>

<!-- 替换后 -->
<video controls class="w-full rounded-lg" poster="assets/cover.jpg">
  <source src="assets/demo.mp4" type="video/mp4">
</video>
```

**视频示例（B站嵌入，推荐大视频使用）：**
```html
<!-- 在 B站视频页点"分享"→"嵌入代码"，复制 iframe -->
<iframe src="//player.bilibili.com/player.html?bvid=xxx"
        class="w-full rounded-lg" style="height: 400px;"
        scrolling="no" border="0" frameborder="no" framespacing="0"
        allowfullscreen="true"></iframe>
```

---

## 🎨 自定义样式

- **配色变量**：修改 `css/style.css` 文件顶部的 `:root` 块中的 CSS 变量
- **Tailwind 颜色**：修改每个 HTML 文件 `<script>` 中 `tailwind.config` 的 `colors` 对象
- **新增动画**：给任何元素添加 `class="fade-in"` 即可启用滚动渐现效果
- **导航栏透明度**：修改 `style.css` 中 `.navbar` 的 `rgba(26, 54, 93, 0.97)` 最后一个值

---

## 📋 技术栈

| 技术 | 用途 |
|---|---|
| HTML5 | 页面结构 |
| Tailwind CSS (CDN) | 原子化样式，快速布局 |
| CSS3 (`style.css`) | 自定义动画、组件样式 |
| Vanilla JavaScript | 导航交互、滚动动画、代码语法高亮 |
| GitHub Pages | 免费静态网站托管 |

---

## ⚠️ 注意事项

1. **Tailwind CSS 使用 CDN 引入**，无需构建工具。本地打开即用，无需 `npm install`。
2. **视频文件不要太大**（建议 <10MB），否则 GitHub Pages 加载会很慢。大视频推荐上传到 B站/YouTube 后嵌入 iframe。
3. **GitHub Pages 免费版**每月有 100GB 带宽限制，个人作品集完全够用。
4. **个人信息**已从简历中填充，如需修改请在各 HTML 文件中搜索 `陈明` 或 `18244439951` 全局替换。
5. **项目详情页**均包含详细的面试常见问题（难点与解决方案板块），面试官可直接浏览。
6. **内置语法高亮**：代码块中的 C/Python 代码会自动高亮关键字、函数名、字符串、数字等。

---

## 🖥️ 页面清单

| 页面 | 文件 | 说明 |
|---|---|---|
| 首页 | `index.html` | Landing 页，个人简介 + 技能 + 联系方式摘要 |
| 项目合集 | `projects.html` | 4 个项目的卡片式展示 |
| 关于我 | `about.html` | 在校经历 + 成长时间线 + 求职规划 |
| 联系方式 | `contact.html` | 邮箱/手机/GitHub/微信 + 联系建议 |
| FreeRTOS 温控 | `project-freertos.html` | DHT22 + OLED + 蓝牙 + Flash + IWDG 全链路 |
| 仿生蝴蝶 | `project-butterfly.html` | MPU6050 + 互补滤波 + 串级 PID + BLE |
| 3-PRS 机器人 | `project-3prs.html` | 运动学反解 + OpenCV + 三轴同步插补 |
| 模板 | `project-template.html` | 复制此文件新增项目 |
