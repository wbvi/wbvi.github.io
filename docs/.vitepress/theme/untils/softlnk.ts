import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '软件导航推荐',
    items: [
      {
        icon: 'https://pc1.gtimg.com/finance/softweb/dist/img/logo-f43221a62a.png',
        title: '腾讯软件中心',
        badge: {
          text: '外网',
          type: 'info',
        },
        desc: '海量软件轻松下载',
        link: 'https://pc.qq.com/'
      },
      // 
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: '360软件管家',
        badge: {
          text: '外网',
          type: 'tip',
        },
        desc: '下载360软件管家，选择普通下载安装',
        link: 'https://soft.360.cn/'
      },
      // 
      {
        icon: 'https://office.autox.clu/skins/default/images/logo/light_small.svg',
        title: '联想应用商店',
        badge: {
          text: '外网',
          type: 'warning',
        },
        desc: '开为广大用户提供一站式的软件、游戏的极速下载,所有软件都通过人工亲测,安全无忧。',
        link: 'https://lestore.lenovo.com/'
      },
    ]
  },
// 常用软件下载



]