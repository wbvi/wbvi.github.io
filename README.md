# VitePress搭建

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

https://vitepress.yiov.top/

https://wbvi.github.io/


# git方法

### 手把手教你在VSCode中使用Git

https://blog.csdn.net/sinat_16643223/article/details/111713296
