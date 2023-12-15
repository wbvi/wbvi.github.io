---


---
本站网址：https://wbvi.github.io

`本地项目地址：http://localhost:5173/`

# 指南

[配置](./vitepress/site-config.md)

## 前言

### 简介

[VitePress](https://vitepress.dev/) 使用 Markdown 编写的源内容，生成可以轻松部署在任何地方的静态 HTML 页面，VitePress 作为 [VuePress](https://v2.vuepress.vuejs.org/zh/) 的孪生兄弟，借助 [Vue 3](https://cn.vuejs.org/) 和 [vite](https://vitejs.cn/)，VitePress 提供了明显更好的 DX、更好的生产性能、更精致的默认主题以及更灵活的定制 API

### 官方

它是搭建文档的 静态站点生成器(SSG) 最佳利器之一

* VitePress官网：[https://vitepress.dev/](https://vitepress.dev/)
* vite中文网：[https://vitejs.cn/](https://vitejs.cn/)

## 快速上手

### 从零开始装vitpress

1. 首先需要本地安装Node.js，需要16版本及以上。
2. 推荐使用pnpm，命令行安装npm install -g pnpm。
3. 创建工程，安装VitePress。首先创建文件夹，并打开命令行。

```shell
# 初始化node工程
pnpm init
# 安装vitepress
pnpm add -D vitepress
# 初始化vitepress
pnpm exec vitepress init
```

**初始化vitepress时的注意事项**

* 初始化时会要求填入配置目录位置，填入./docs
* 选择主题时，推荐采用默认主题
* 如果不后续希望改动主题，选择Default Theme。
* 如果希望后续修改主题，选择Default Theme + Customization
* 要加入VitePress npm scripts到package.json中

初始化之后再查看package.json，发现scripts中有了几条命令，这里说明下使用方法：

```shell
# 安装依赖
pnpm install
# 开发模式启动
pnpm docs:dev
# 手动构建
pnpm docs:build
# 预览构建成果
pnpm docs:preview
```

启动开发模式，把命令行中出现的网址复制到浏览器中，即可预览效果。

### 项目拉取装vitpress

* 拉取项目

```shell
 git clone git@github.com:wbvi/wbvi.github.io.git
```

* 安装依赖

```shell
pnpm install
```

## 路由

为了方便参考，这里列出我博客的工程目录。

```todotxt
wbvi.github.io
├─.github           # github配置
│  └─workflows      # 自动构建部署配置
├─bin               # 执行脚本
├─components        # vue组件
├─docs              # 文档内容
│   ├─.vitepress  
│   │  ├─config.ts  # vitepress配置
│   │  ├─cache      # 缓存文件，可忽略提交
│   │  ├─dist       # 构建包，可忽略提交
│   │  └─theme      # 样式和主题
│   ├─index.md      # 网站首页
│   ├─2023          # 按照年份存放博文
│   ├─2022
│   ├─...           # 更多博客目录
│   └─public        # 网站使用的静态资源
├─node_modules      # 依赖目录，可忽略提交
├─.gitignore        # git提交忽略配置
├─package.json      # node.js配置
├─pnpm-lock.yaml    # 依赖的锁定版本号
└─README.md         # 工程说明
```

## 部署

## 写作

### Markdown 扩展

[写法](./markdown.md)

### Frontmatter

```yaml
# layout: home
# navbar: false # 导航栏关闭
sidebar: false # 侧边栏关闭
# aside: left # 大纲默认右侧
# aside: false # 大纲关闭
# 设置到六级标题可以用 'deep' ，关闭 false,此设置与 页面中的大纲 设置相同，会覆盖！
#outline: [2,3]
# lastUpdated: false # 上次更新，默认开启，不想显示可以关闭
# footer: false # 页脚关闭
# pageClass: custom-page-class # 添加额外类名,在特定页面中自定义样式
comment: false #关闭评论
prev: false #关闭上页
next: false #关闭下页
# prev:
#   text: '页面'
#   link: '/page'
# next:
#   text: 'Markdown'
#   link: '/markdown'
```

### 部署github


#### 手动部署

创建仓库wbvi.github.io



1. "在你的项目的 `.github/workflows`目录下创建一个名为 `deploy.yml`的文件，并添加如下内容："

   ```shell
   # Sample workflow for building and deploying a VitePress site to GitHub Pages
   #
   name: Deploy VitePress site to Pages

   on:
     # Runs on pushes targeting the `main` branch. Change this to `master` if you're
     # using the `master` branch as the default branch.
     push:
       branches: [main]

     # Allows you to run this workflow manually from the Actions tab
     workflow_dispatch:

   # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
   permissions:
     contents: read
     pages: write
     id-token: write

   # Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
   # However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
   concurrency:
     group: pages
     cancel-in-progress: false

   jobs:
     # Build job
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
           with:
             fetch-depth: 0 # Not needed if lastUpdated is not enabled
         # - uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: npm # or pnpm / yarn
         - name: Setup Pages
           uses: actions/configure-pages@v3
         - name: Install dependencies
           run: npm ci # or pnpm install / yarn install
         - name: Build with VitePress
           run: npm run docs:build # or pnpm docs:build / yarn docs:build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v2
           with:
             path: docs/.vitepress/dist

     # Deployment job
     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       needs: build
       runs-on: ubuntu-latest
       name: Deploy
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v2
   ```
2. 在你的代码仓库设置中，找到"Pages"菜单项，在"Build and deployment > Source"下选择"GitHub Actions"作为构建和部署的源。
3. 将你的更改推送到 `main`分支，并等待GitHub Actions工作流程完成。你会看到你的网站部署到 `https://<username>.github.io/[repository]/`或 `https://<custom-domain>/`，具体取决于你的设置。每当推送到 `main`分支时，你的网站将自动部署。

### 部署gitee

## 基础配置

### 目录

git方法

手把手教你在VSCode中使用Git

https://blog.csdn.net/sinat_16643223/article/details/111713296

## 参考链接

* 文档参考：[VitePress 中文网](https://vitepress.qzxdp.cn/)、[vitepress中文教程](https://vitepress.docschina.org/)

- 官网：[vitepress官网](https://vitepress.dev/)、
- 好插件：[自动侧边栏](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar)、[导航](https://github.com/maomao1996/vitepress-nav-template)、
- 本站主题：[中文教程](https://vitepress.yiov.top/)、[vitepress中文教程](https://vitepress.yiov.top)
- vitepress主题仓库：[vitepress官方GitHub仓库](https://github.com/vuejs/vitepress)、[查尔斯的知识库](https://github.com/Charles7c/charles7c.github.io).、 [茂茂大神导航](https://github.com/maomao1996/vitepress-nav-template)、[前端吧](https://github.com/msyuan/vitePress-project)、[Yiov](https://github.com/Yiov/vitepress-doc)、
- [主题1](https://github.com/Charles7c/charles7c.github.io)
- 仓库 https://github.com/mondaylab/mondaylab-blog

#### 网上文章

[文章自动侧边栏可以参考](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar "版本低不能用")

[VuePress + github pages + Travis CI 教程](https://www.jianshu.com/p/a7435b8bc8bc)

[十分钟使用vitepress+github action+gitee pages 搭建你的专属文档](https://zhuanlan.zhihu.com/p/663023274 "知乎")

[从零用VitePress搭建博客教程](https://blog.csdn.net/qq_30678861/article/details/134004823)

[VitePress 搭建静态网站并在 github和gitee 部署](https://agangdundan.cn/origin/)

[0-1vitepress](https://mp.weixin.qq.com/s?__biz=Mzg5MDA4NTUyNA==&mid=2247491628&idx=1&sn=eb79e162f954e79aefca15a2e5d59758&chksm=cfe0a9d7f89720c1a84a9e200a5057854aa9a7dbf4785850f80b8a029bcfb0d4fb90d1237c50&mpshare=1&scene=1&srcid=1214dodUlL1Bhnku0Qs4ZgsZ&sharer_shareinfo=48b88e275fcab9160453c44b9399daf7&sharer_shareinfo_first=48b88e275fcab9160453c44b9399daf7&version=4.1.15.6007&platform=win#rd)

#### 其他

::: tip 其他静态站点生成器

[VuePress](https://v2.vuepress.vuejs.org/zh/)、[Docusaurus](https://docusaurus.io/)、[Astro](https://astro.build/)、[Modern.js](https://modernjs.dev/)、[docsify](https://docsify.js.org/)、[Docz](https://www.docz.site/)、[Nuxt](https://nuxt.com/)、[Jekyll](https://jekyllrb.com/)、[Hexo](https://hexo.io/zh-cn/)、[Hugo](https://gohugo.io/)、[idoc](https://wangchujiang.com/idoc/)、[Styleguidist](https://react-styleguidist.js.org/)、[Storybook](https://storybook.js.org/)、[Gatsby](https://www.gatsbyjs.com/)、[Eleventy](https://www.11ty.dev/)、[Publii](https://getpublii.com/)

:::
