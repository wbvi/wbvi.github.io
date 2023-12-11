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
    {
        text: '导航',
        items: [
            { text: '我的导航', link: '/nav/mylnk/' },
            { text: '软件导航', link: '/nav/softlnk/' },
            { text: '工作导航', link: '/nav/worklnk/' },
            // 
            // { text: '工作导航', link: '/nav/' },
        ],
    },

    // 
    { text: '生活', link: '/life/' },
    // 
    { text: '笔记', link: '/notes/' },
    // 
    { text: '工作', link: '/work/' },
    // 
    { text: '工具', link: '/tools/' },
    // 其他
    { text: '其他', link: '/other/' },
    // 
    { text: '关于', link: '/about/' },

    // 仓库地址
    {
        text: '仓库',
        items: [
            { text: 'gitee', link: 'https://gitee.com/' },
            { text: 'github', link: 'https://github.com/' },
        ],
    },

]


// 侧边栏
export const sidebar: DefaultTheme.Config['sidebar'] = {
    // 目录1
    '/life/': [
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
    ],

    // 笔记
    '/notes/': [
        { text: '笔记目录', link: '/notes/list' },
        {
            text: '1-基础',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '2-中础',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '3-高础',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
    ],
    // 工作
    '/work/': [
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
        {
            text: '目录',
            collapsed: false,
            items: [
                { text: 'Index', link: '/life/' },
                { text: 'One', link: '/life/one' },
                { text: 'Two', link: '/life/two' }
            ],
        },
    ],
    // 目录4
    '/tools/': [
        {
            text: '笔记-目录',
            items: [
                { text: 'Index', link: '/tools/' },
                { text: 'Three', link: '/tools/three' },
                { text: 'Four', link: '/tools/four' }
            ],
        },
    ],

}