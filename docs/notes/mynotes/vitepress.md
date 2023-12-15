---


---
本站网址：https://wbvi.github.io

`本地项目地址：http://localhost:5173/`

# 介绍

## 前言

### 简介

[VitePress](https://vitepress.dev/) 使用 Markdown 编写的源内容，生成可以轻松部署在任何地方的静态 HTML 页面

VitePress 作为 [VuePress](https://v2.vuepress.vuejs.org/zh/) 的孪生兄弟，借助 [Vue 3](https://cn.vuejs.org/) 和 [vite](https://vitejs.cn/)，VitePress 提供了明显更好的 DX、更好的生产性能、更精致的默认主题以及更灵活的定制 API

## 官方

它是搭建文档的 静态站点生成器(SSG) 最佳利器之一

* VitePress官网：[https://vitepress.dev/](https://vitepress.dev/)
* vite中文网：[https://vitejs.cn/](https://vitejs.cn/)

# 指南

VitePress搭建

## 快速上手

从新开始安装vitpress

### 项目拉取装vitpress

* 拉取项目

```
 git clone git@github.com:wbvi/wbvi.github.io.git
```

* 安装依赖

```
pnpm install
```

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

```powershell
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

### 工程结构

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

# 配置

## 配置

git方法

手把手教你在VSCode中使用Git

https://blog.csdn.net/sinat_16643223/article/details/111713296

## 参考链接

* 文档参考：[VitePress 中文网](https://vitepress.qzxdp.cn/)、[vitepress中文教程](https://vitepress.docschina.org/)

- 官网：[vitepress官网](https://vitepress.dev/)、
- 好插件：[自动侧边栏](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar)、[导航](https://github.com/maomao1996/vitepress-nav-template)、
- 本主题：[中文教程](https://vitepress.yiov.top/)、[vitepress中文教程](https://vitepress.yiov.top)
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
