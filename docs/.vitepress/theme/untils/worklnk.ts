import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '内部应用',
    items: [
      // 沟通
      {
        icon: "https://im.autox.clu/static/images/favicon.svg?v=4",
        title: '沟通',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: 'Zulip-主要消息沟通工具',
        link: 'https://im.autox.clu'
      },
      // 会议
      {
        icon: 'https://meet.autox.clu/images/apple-touch-icon.png',
        title: '会议',
        badge: {
          text: '内网',
          type: 'tip',
        },
        desc: 'Meet-语音与视频会议',
        link: 'https://meet.autox.clu'
      },
      // office办公-
      {
        badge: {
          text: '内网',
          type: 'warning',
        },
        icon: 'https://office.autox.clu/skins/default/images/logo/favicon_general.ico?t=638390719474855370',
        title: '办公office',
        desc: 'Office-办公(word, ppt slides, spreadsheet',
        link: 'https://office.autox.clu'
      },
      // 存储
      {
        icon: 'https://office.autox.clu/skins/default/images/logo/favicon_general.ico?t=638390719474855370',
        title: '存储',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: 'Drive-网盘存储',
        link: 'https://drive.autox.clu'
      },
      // 内部邮箱
      {
        icon: 'https://office.autox.clu/skins/default/images/logo/favicon_general.ico?t=638390719474855370',
        title: '内部邮箱',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '内部邮箱',
        link: 'https://mail.autox.clu'
      },
      // 项目管理
      {
        icon: 'https://project.autox.clu/assets/apple-touch-icon-120x120-7cc127b22515cb03208e0cd2ab29c30545d6c1d232a8d68058c751bf29626354.png',
        title: '项目管理',
        badge: {
          text: '内网',
          type: 'danger',
        },
        desc: 'Project-项目管理',
        link: 'https://project.autox.clu'
      },
      //设置
      {
        icon: 'https://admin.autox.sz/ipa/ui/favicon.ico?v=40608',
        title: '设置',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '修改密码',
        link: 'https://admin.autox.sz'
      },
    ]
  },
  {
    title: '常用链接',
    items: [
      // 汽车之家
      {
        icon: "https://www.autohome.com.cn/favicon.ico",
        title: '汽车之家',
        badge: {
          text: '内外网',
          type: 'info',
        },
        desc: '提供最全的中国汽车网站',
        link: 'https://www.autohome.com.cn'
      },
      // 懂车帝
      {
        icon: "https://p3.dcarimg.com/obj/eden-cn/vlseh7ubqnuhs/motor/favicon/favicon-96x96.png",
        title: '懂车帝',
        badge: {
          text: '内外网',
          type: 'info',
        },
        desc: '汽车资讯平台，懂车更懂你',
        link: 'https://www.dongchedi.com'
      },
      // 有道翻译
      {
        icon: "https://ydlunacommon-cdn.nosdn.127.net/31cf4b56e6c0b3af668aa079de1a898c.png",
        title: '有道翻译',
        badge: {
          text: '内外网',
          type: 'info',
        },
        desc: '翻译',
        link: 'https://fanyi.youdao.com'
      },
    ]
  },
  // 内部应用
  {
    title: '内部系统',
    items: [
      // 电子信息管理系统
      {
        icon: "http://192.168.10.119/EwQIMS/Common/EwIMSNew/images/login/omnex-logo.svg",
        title: '电子信息管理系统',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '电子信息管理系统',
        link: 'http://192.168.10.119/EwQIMS'
      },
      // 电子信息管理系统-培训
      {
        icon: "http://192.168.10.119/EwQIMS/instancedata/common/Documents/Companylogo/ewims-logo.png",
        title: '电子信息管理系统-培训',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '电子信息管理系统-培训',
        link: 'http://192.168.10.119/EwQIMS_Training'
      },
    ]
  },
  // 常用下载
  {
    title: '常用下载',
    items: [
      // 手机证书
      {
        icon: "",
        title: '证书下载',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '手机证书',
        link: 'http://oa.xero.autox/1/rootca.pem'
      },
      // 手机端-Zulip
      {
        icon: "",
        title: '手机端zulip',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '手机端-zulip',
        link: 'http://oa.xero.autox/1/AutoX_Zulip_27.208.apk'
      },
    ]
  },
  // 短
  // {
  //   title: '常用相关',
  //   items: [
  //     {
  //       icon: 'https://g.autoimg.cn/@img/car3/cardfs/series/g24/M00/8F/37/71x53_q87_autohomecar__Chxky2PgczuAfLpXAAJkj3KKYDI686.png',
  //       title: '汽车之家',
  //       link: 'https://www.autohome.com.cn'
  //     },
  //     {
  //       icon: 'https://www.notion.so/images/logo-ios.png',
  //       title: 'Notion AI（笔记）',
  //       link: 'https://www.notion.so'
  //     },

  //   ]
  // },




]