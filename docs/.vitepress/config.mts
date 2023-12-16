import { defineConfig } from 'vitepress'
import { nav, sidebar } from './configs'
//命令集：pnpm add -D vitepress vue less sass @mdit-vue/shared vitepress-markdown-timeline medium-zoom vitepress-plugin-comment-with-giscus
// 导入时间线
import timeline from "vitepress-markdown-timeline";

export default defineConfig({
    // base: '/', //网站部署到github的vitepress这个仓库里
  // base: '/wbvi/', //网站部署到gitee的wbvi仓库里
  // base: '/wbvi.github.io/', //网站部署到github的wbvi.github.io仓库里
  
  lang: 'zh-CN',
  title: "三二一",
  description: "文档和工具",
  // 死链检查
  ignoreDeadLinks: true,
// 全局开启上次更新
  lastUpdated: true,
  // #region fav
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
  ],
  // #endregion fav

  //cleanUrls:true, //开启纯净链接无html

  //启用深色模式
  // appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
    // 关闭多语言英文
    // en: {
    //   label: 'English',
    //   lang: 'en',
    //   link: '/en/',
    // },
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true,

    //时间线 
    config: (md) => {
      md.use(timeline);
    },

  },

  //主题配置
  themeConfig: {
    //左上角logo
    //logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //全局导航栏
    nav,
    //全局侧边栏 
    sidebar,
    
    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },

    //社交链接
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/Yiov/vitepress-doc' },
      { icon: 'github', link: 'https://github.com/wbvi/wbvi.github.io' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: 'https://gitee.com/'
      },

    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',

    //页脚
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/">京****号</a>',
    },

    //侧边栏文字更改(移动端)
    sidebarMenuLabel: '目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel: '返回顶部',

    //大纲显示2-5级标题
    outline: [2, 5],
    //大纲顶部标题
    outlineTitle: '当前页大纲',

    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},

    //上次更新时间
    lastUpdatedText: '上次更新',

    //自定义上下页名
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },

  },

  // outDir: './dist',
  // cacheDir: './.vitepress/.vite',
  // srcDir: './src',
  vite: {
    server: {
      host: '0.0.0.0',//启用
      // port: env.port
    }
  },


})
