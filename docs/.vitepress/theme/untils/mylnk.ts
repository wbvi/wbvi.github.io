import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '常用',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        badge: {
          text: '茂神牛',
          type: 'info',
        },
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com'
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        badge: {
          text: '茂神牛',
          type: 'tip',
        },
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        badge: {
          text: '茂神牛',
          type: 'warning',
        },
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        badge: {
          text: '茂神牛',
          type: 'danger',
        },
        desc: '开发人员的工具箱',
        link: 'https://tool.lu'
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        badge: {
          text: '请给茂茂点点小星星哦',
          type: 'info',
        },
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn'
      }
    ]
  },
  // ai导航
  {
    title: 'AI 导航',
    items: [
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT（最强）',
        link: 'https://chat.openai.com/chat'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai'
      }
    ]
  },

  // ai导航
  {
    title: '笔记文档',
    items: [
      {
        // icon: '/icons/chatgpt.png',
        title: 'FlowUS',
        link: 'https://flowus.cn'
      },
      {
        // icon: 'https://www.notion.so/images/logo-ios.png',
        icon: 'https://wcdn.wiz.cn/static/images/wiznotex/grid_cut.svg',
        title: 'GitMind',
        link: 'https://gitmind.cn'
      },
      {
        icon: 'https://wcdn.wiz.cn/static/images/wiznotex/grid_cut.svg',
        title: '印象笔记',
        link: 'https://www.yinxiang.com'
      },
      {
        icon: 'https://note.youdao.com/_nuxt/img/ynote-logo.d8ea7de.png',
        title: '有道云笔记',
        link: 'https://note.youdao.com'
      },
      {
        icon: 'https://wcdn.wiz.cn/static/images/wiznotex/grid_cut.svg',
        title: '为知笔记',
        link: 'https://www.wiz.cn'
      },
      {
        icon: '',
        title: '语雀',
        link: 'https://www.yuque.com'
      },
      {
        icon: 'https://docs.gtimg.com/home/img/products/icon-doc-ede672.png',
        title: '腾讯文档',
        link: 'https://docs.qq.com'
      },
      {
        icon: 'https://docs.gtimg.com/home/img/products/icon-smartcanvas-64ee75.png',
        title: '石墨文档',
        link: 'https://shimo.im'
      },
      {
        icon: 'https://docs.gtimg.com/home/img/products/icon-smartcanvas-64ee75.png',
        title: '幕布',
        link: 'https://mubu.com'
      },
      {
        icon: '',
        title: 'ProcessOn',
        link: 'https://www.processon.com'
      },
      {
        icon: 'https://docs.gtimg.com/home/img/products/icon-smartcanvas-64ee75.png',
        title: '飞书',
        link: 'https://www.feishu.cn/'
      },
    ]
  },


]