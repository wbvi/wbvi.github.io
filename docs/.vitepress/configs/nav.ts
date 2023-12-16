/* configs/nav.ts */
import type { DefaultTheme } from 'vitepress'


// 主菜单栏
export const nav: DefaultTheme.Config['nav'] = [
    //   { text: '首页', link: '/' },
    //   { text: 'VitePress', link: 'https://vitepress.dev/' },
    //   {
    //     text: '1.0.0-rc.31',
    //     items: [
    //       { text: '更新日志', link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md' },
    //       { text: '贡献', link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md' },
    //       ],
    //   },
    { text: '首页', link: '/' },
    // 指南
    // {
    //   text: '指南',
    //   items: [
    //     {
    //       // 分组标题1
    //       text: '介绍',
    //       items: [
    //         { text: '前言', link: '/preface' },
    //       ],
    //     },
    //     {
    //       // 分组标题2
    //       text: '基础设置',
    //       items: [
    //         { text: '快速上手', link: '/getting-started' },
    //         { text: '配置', link: '/configuration' },
    //         { text: '页面', link: '/page' },
    //         { text: 'Frontmatter', link: '/frontmatter' },
    //       ],
    //     },
    //     {
    //       // 分组标题3
    //       text: '进阶玩法',
    //       items: [
    //         { text: 'Markdown', link: '/markdown' },
    //         { text: '团队', link: '/team' },
    //         { text: '静态部署', link: '/assets' },
    //         { text: '样式美化', link: '/style' },
    //         { text: '组件', link: '/components' },
    //         { text: '插件', link: '/plugin' },
    //         { text: '更新及卸载', link: '/update' },
    //         { text: '搭建导航', link: '/nav/step' },
    //       ],
    //     },
    //   ],
    // },
    // { text: '导航', link: '/nav/' },
    // 导航折叠
    // {
    //     text: '导航',
    //     items: [
    //         { text: '我的导航', link: '/nav/mylnk/' },
    //         { text: '软件导航', link: '/nav/softlnk/' },
    //         { text: '工作导航', link: '/nav/worklnk/' },
    //         // 
    //         // { text: '工作导航', link: '/nav/' },
    //     ],
    // },

    // 顶端导航
    // { text: '自然', link: '/life/' },
    // { text: '笔记', link: '/notes/' },
    // { text: '工作', link: '/work/' },
    // { text: '软件', link: '/tools/' },
    // { text: '其他', link: '/other/' },
    { text: '归档', link: '/Archiving/' },
    { text: '关于', link: '/about/' },

    // 仓库地址
    {
        text: '仓库',
        items: [
            { text: 'gitee', link: 'https://gitee.com/' },
            { text: 'github', link: 'https://github.com/' },
            { text: 'github本站', link: 'https://github.com/wbvi/wbvi.github.io' },
            { text: 'gitee本站', link: 'https://gitee.com/' },
        ],
    },

]


// 侧边栏
export const sidebar: DefaultTheme.Config['sidebar'] = {

    '/life/': [     // 自然侧边栏
        {
            text: '天',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '人',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '地',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
    ],


    '/notes/': [     // 笔记侧边栏
        {
            text: '1-计算机基础',
            collapsed: false,
            items: [
                { text: '计算机基础', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '2-开发',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' },
            ],
        },
        {
            text: '3-架构',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' },
            ],
        },
        { text: '笔记导航', link: '/notes/list' },

    ],

    '/work/': [     // 工作侧边栏
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' },
            ],
        },
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' },
            ],
        },
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' },
            ],
        },
    ],

    '/tools/': [     // 软件库侧边栏
        {
            text: '软件库',
            items: [
                { text: '软件导航', link: '#软件导航 ' },
                { text: '软件分类', link: '#软件分类' },
                { text: 'Four', link: '/tools/four' },
            ],
        },
    ],

    '/Archiving/': [ //归档
        {
            text: '2023年',
            collapsed: false,
            items: [
                { text: '12月', link: '/life/' },
                { text: '11月', link: '/life/one' },
                { text: 'Two', link: '/life/two' },
            ],
        },
        {
            text: '导航',
            items: [
                { text: '软件导航', link: '/Archiving/ ' },
                { text: '软件分类', link: '/Archiving/' },
            ],
        },
        { text: '首页', link: '/' },

    ],

}