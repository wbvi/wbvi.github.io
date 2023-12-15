本站网址：https://wbvi.github.io

# 指南

VitePress搭建

###### 什么是 VitePress？

**VitePress 是 VuePress 的下一代框架，是基于 Vue3+Vite 构建的静态站生成器。**

原先的 VuePress 是基于 Webpack 构建，本地启动开发一个只有几个简单页面的文档站点需要等待的时间让人难以忍受。即使是 `HMR`热更新也需要几秒钟的时间才能在浏览器中显示出来。

从根本上说，这是因为 VuePress 是 webpack 的一个应用程序。即使只有两页，这也是一个完整的 webpack 项目(包括所有的主题源文件)正在编译。当项目有很多页面时，情况会变得更糟：每个页面都必须先完全编译，然后服务器才能显示内容！

Vite 很好地解决了这些问题：几乎立即启动服务器，只按需编译正在服务的页面，以及闪电般的快速 hmr。所以基于 Vue3 和 Vite 的 VitePress 诞生了。

###### VitePress 的优势

1. VitePress 是 VuePress 的下一代框架，所以它有 VuePress 的所有优点；
2. 具有 Vite 的速度， 开发服务器启动快，热更新快，构建快，只按需编译正在服务的页面；
3. 利用 Vue 3 做的一些优化， JS 负载更容易解析，hydration 也变得更快。
4. 容易上手，VitePress 更多的是主观性的并且配置很少。
5. VitePress 是面向未来的：VitePress 仅适用于支持原生 ES 模块导入的浏览器，鼓励使用没有经过转换的原生 JavaScript 以及主题化中使用 CSS 变量。

**总之，性能好，是未来的。**

###### 现在的不足

1. 还在开发中，体验有点糟糕，官方文档奇奇怪怪，像假的。

> 警告
> VitePress 是早期的 WIP！目前的重点首先是让 Vite 稳定和功能完善。目前，不推荐将其用于任何正式的场景。

2. 网上踩坑的经验太少，需要自己解决，我还参考过 vuepress 的踩坑文章。
3. 配置少，或者说官方文档写的不好；可以看一下 VuePress 的文档，它上面得配置竟然也能用。

其他

如何使用：

有着vuepress的搭建经验，上手还算OK,官方文档目前还没有中文，于是自己尝试搭建了一下

测试访问


## 快速上手

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

# git方法

### 手把手教你在VSCode中使用Git

https://blog.csdn.net/sinat_16643223/article/details/111713296

# 参考链接

* vitepree

[vitepress中文教程](https://vitepress.docschina.org/)

* vitepress主题
  [主题1](https://github.com/Charles7c/charles7c.github.io)
* vitepree网上文章

[VuePress + github pages + Travis CI 教程](https://www.jianshu.com/p/a7435b8bc8bc)

[十分钟使用vitepress+github action+gitee pages 搭建你的专属文档](https://zhuanlan.zhihu.com/p/663023274 "知乎")

https://blog.csdn.net/qq_30678861/article/details/134004823

https://agangdundan.cn/origin/

https://vitepress.yiov.top/



---


---
# vitepress

- 官网：[vitepress官网](https://vitepress.dev/)、
- 其他项目参考：[前端吧](https://github.com/msyuan/vitePress-project)、[Yiov](https://github.com/Yiov/vitepress-doc)
- 好插件：[自动侧边栏](https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar)、[导航](https://github.com/maomao1996/vitepress-nav-template)、
- 本主题：[中文教程](https://vitepress.yiov.top/)

# # vite

茂茂大神导航
https://github.com/maomao1996/vitepress-nav-template

文章自动侧边栏可以参考
https://github.com/QC2168/vite-plugin-vitepress-auto-sidebar

# 参考链接

* vitepree

[vitepress中文教程](https://vitepress.docschina.org/)

* vitepress主题
  [主题1](https://github.com/Charles7c/charles7c.github.io)
* vitepree网上文章

[VuePress + github pages + Travis CI 教程](https://www.jianshu.com/p/a7435b8bc8bc)

[十分钟使用vitepress+github action+gitee pages 搭建你的专属文档](https://zhuanlan.zhihu.com/p/663023274 "知乎")

https://blog.csdn.net/qq_30678861/article/details/134004823

https://agangdundan.cn/origin/
