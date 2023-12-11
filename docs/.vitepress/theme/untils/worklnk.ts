import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
  {
    title: '内部应用',
    items: [
      // 沟通
      {
        icon: "https://im.autox.clu/static/webpack-bundles/files/zulip-org-logo.870840a9a290f98cce91.svg",
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
        icon: 'https://meet.autox.clu/images/watermark.svg',
        title: '会议',
        badge: {
          text: '内网',
          type: 'tip',
        },
        desc: 'Meet-语音与视频会议',
        link: 'https://meet.autox.clu'
      },
      // office办公
      {
        icon: 'https://office.autox.clu/skins/default/images/logo/light_small.svg',
        title: '办公',
        badge: {
          text: '内网',
          type: 'warning',
        },
        desc: 'Office-办公(word, ppt slides, spreadsheet',
        link: 'https://office.autox.clu'
      },
      // 项目管理
      {
        icon: 'https://project.autox.clu/assets/enterprise-add-on-674b81d3d81dd2a1890b194af1b46a484de746e9bd3dceda297053fb4db1b1a8.svg',
        title: '项目管理',
        badge: {
          text: '内网',
          type: 'danger',
        },
        desc: 'Project-项目管理',
        link: 'https://project.autox.clu'
      },
      // 存储
      {
        icon: 'https://office.autox.clu/skins/default/images/logo/light_small.svg',
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
        icon: 'https://office.autox.clu/skins/default/images/logo/light_small.svg',
        title: '内部邮箱',
        badge: {
          text: '内网',
          type: 'info',
        },
        desc: '内部邮箱',
        link: 'https://mail.autox.clu'
      },
      //设置
      {
        icon: 'https://office.autox.clu/skins/default/images/logo/light_small.svg',
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
        icon: "https://t9.baidu.com/it/u=3545360772,4093091615&fm=85&app=131&size=f242,150&n=0&f=PNG?s=638792461F142E535063AE8C0300D08B&sec=1701709200&t=52c20ae355c15a38e1720afb64cc87ec",
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
        icon: "https://lf3-motor.dcarstatic.com/obj/motor-fe-static/motor/pc/_next/static/images/logo-fcf421caf44b23091eee..svg",
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
        icon: "https://fanyi.youdao.com/img/logo.50fdfa99.png",
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
        icon: "",
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
        icon: "",
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