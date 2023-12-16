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

## 部署

### 部署github

#### 手动部署

#### 自动化部署pages

::: tip 说明

实测

:::

创建仓库wbvi.github.io

1. "在你的项目的 `.github/workflows`目录下创建一个名为 `deploy.yml`的文件，并添加如下内容："

   ```shell
   # 执行成功
   name: Deploy Pages

   on:
     # 推送时执行
     push:
       branches: [main, master]
     # pr 时执行
     pull_request:
       branches: [main, master]
     # 定时执行，字段含义：分钟 小时 日 月 星期
     # 注意：
     # 1.采用的是 UTC 时间
     #   即，你配置的 0 0 * * *（UTC）00:00 实际上是（GMT+0800）08:00
     #   只有你配置为 00 16 * * *（UTC）16:00 实际上才是 GMT+0800）00:00
     # 2.官方声明：schedule 事件在 GitHub Actions 工作流运行期间负载过高时可能会延迟。 高负载时间包括每小时的开始时间。 为了降低延迟的可能性，建议将您的工作流程安排在不同时间运行。
     #   例如：笔者之前设定的定时规则为 0 0 * * *（UTC），实际（GMT+0800）执行时间通常在 9:10 ~ 10:00，甚至会出现在 10:00 之后执行的情况
     # 3.建议不只是定时执行的时候注意时间，自己 push 时也注意时间，早点休息
     #   例如：笔者多次亲身经历，凌晨时间 pages build and deployment 任务大概能持续 8 分钟的 Current status: deployment_queued 状态，
     #        即使能进入 Current status: deployment_in_progress 和 Current status: syncing_files 状态，如果文件多点，没一会儿就 Error: Timeout reached, aborting! 超时失败了
     schedule:
       - cron: 30 17 * * *
     # 可手动执行
     workflow_dispatch:

   jobs:
     # 任务1: 部署 GitHub Pages
     deploy-github-pages:
       runs-on: ubuntu-latest
       steps:
         # 1、检出源码
         - name: Checkout
           uses: actions/checkout@v3
           with:
             # 默认只拉取分支最近一次的 commit，可能会导致一些文章的 GitInfo 变量无法获取，设为 0 代表拉取所有分支所有提交
             fetch-depth: 0
         # 2、配置 Git
         # 主要是 quotePath，默认情况下，文件名包含中文时，git 会使用引号把文件名括起来，这会导致 action 中无法读取 :GitInfo 变量
         - name: Git Configuration
           run: |
             git config --global core.quotePath false
             git config --global core.autocrlf false
             git config --global core.safecrlf true
             git config --global core.ignorecase false  
         # 3、安装 PNPM
         - name: Setup PNPM
           uses: pnpm/action-setup@v2
           with:
             version: latest
         # 4、安装 Node 环境
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 16
             registry-url: https://registry.npmjs.org
             cache: pnpm
         # 5、安装依赖
         - name: Install dependencies
           run: pnpm i --frozen-lockfile
         # 6、打包
         - name: Build
           run: pnpm build
         # 7、部署 GitHub Pages
         - name: Deploy GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             # 修改成自己的仓库分支gh-pages,原始是pages
             BRANCH: gh-pages
             # BRANCH: pages
             FOLDER: docs/.vitepress/dist

     # 任务2: 部署 Gitee Pages
     # deploy-gitee-pages:
     #   runs-on: ubuntu-latest
     #   steps:
     #     # 1、同步内容到 Gitee
     #     - name: Sync to Gitee
     #       uses: wearerequired/git-mirror-action@master #使用action库
     #       env:
     #         SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }} #Gitee私钥
     #       with:
     #         source-repo: git@github.com:wbvi/wbvi.github.io.git #GitHub 源仓库地址
     #         destination-repo: git@github.com:wbvi/wbvi.github.io.git #Gitee 目标仓库地址
     #     # 2、部署 Gitee Pages
     #     - name: Deploy Gitee Pages
     #       # 手动执行时只同步内容, 不进行部署
     #       if: github.event_name != 'workflow_dispatch'
     #       uses: yanglbme/gitee-pages-action@main
     #       with:
     #         gitee-username: ${{ secrets.GITEE_USERNAME }} #Gitee 用户名
     #         gitee-password: ${{ secrets.GITEE_PASSWORD }} #Gitee 密码
     #         gitee-repo: Charles7c/charles7c #Gitee 仓库
     #         branch: pages #要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
   ```
2. 在你的代码仓库设置中，找到"Pages"菜单项，在"Build and deployment > Source"下选择"GitHub Actions"作为构建和部署的源。
3. 将你的更改推送到 `main`分支，并等待GitHub Actions工作流程完成。你会看到你的网站部署到 `https://<username>.github.io/[repository]/`或 `https://<custom-domain>/`，具体取决于你的设置。每当推送到 `main`分支时，你的网站将自动部署。

### 部署gitee

## 基础配置

### 侧边栏

手动侧边栏

配置自动侧边栏

pnpm 卸载依赖：pnpm remove 依赖包名字

pnpm remove vitepress-sidebar

pnpm 安装：https://pnpm.io/zh/installation

https://gitee.leader755.com/leader755/28884.html

https://juejin.cn/post/7124142007659790372

https://www.jianshu.com/p/918b6d87e3fd

```
#查看pnpm 源：
wbvi.github.io>pnpm config get registry
https://registry.npmjs.org/
# 设置为淘宝镜像源，可以使用下面的命令：
pnpm config set registry https://registry.npmmirror.com
# 切回原镜像源，可以使用下面的命令：
pnpm config set registry https://registry.npmjs.org


```

```go
Usage: pnpm [command] [flags]
       pnpm [ -h | --help | -v | --version ]

Manage your dependencies:
      add                  Installs a package and any packages that it depends on. By default, any new package is installed as a prod dependency
      import               Generates a pnpm-lock.yaml from an npm package-lock.json (or npm-shrinkwrap.json) file
   i, install              Install all dependencies for a project
  it, install-test         Runs a pnpm install followed immediately by a pnpm test
  ln, link                 Connect the local project to another one
      prune                Removes extraneous packages
  rb, rebuild              Rebuild a package
  rm, remove               Removes packages from node_modules and from the project's package.json
      unlink               Unlinks a package. Like yarn unlink but pnpm re-installs the dependency after removing the external link
  up, update               Updates packages to their latest version based on the specified range

Review your dependencies:
      audit                Checks for known security issues with the installed packages
      licenses             Check licenses in consumed packages
  ls, list                 Print all the versions of packages that are installed, as well as their dependencies, in a tree-structure
      outdated             Check for outdated packages

Run your scripts:
      exec                 Executes a shell command in scope of a project
      run                  Runs a defined package script
      start                Runs an arbitrary command specified in the package's "start" property of its "scripts" object
   t, test                 Runs a package's "test" script, if one was provided

Other:
      pack
      publish              Publishes a package to the registry
      root

Manage your store:
      store add            Adds new packages to the pnpm store directly. Does not modify any projects or files outside the store
      store path           Prints the path to the active store directory
      store prune          Removes unreferenced (extraneous, orphan) packages from the store
      store status         Checks for modified packages in the store

Options:
  -r, --recursive          Run the command for each project in the workspace.
```

#### 侧边栏插件

插件有两个一个是：

generateSidebar

https://cloud.tencent.com/developer/article/2270641

插件1：https://github.com/jooy2/vitepress-sidebar

::: tip

没安装过

:::

插件2:https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar

::: tip

安装需要降低版本

:::

git方法

手把手教你在VSCode中使用Git

https://blog.csdn.net/sinat_16643223/article/details/111713296

## 安装其他

pnpm i

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
