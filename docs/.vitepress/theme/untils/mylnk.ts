import type { NavData } from './types'

export const NAV_DATA: NavData[] = [
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
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        title: '文心一言',
        desc: '有用、有趣、有温度',
        link: 'https://yiyan.baidu.com/'
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
  // 常用
  {
    title: '常用',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.baidu.com/favicon.ico',
        title: '百度',
        desc: '百度一下，你就知道',
        link: 'https://www.baidu.com'
      },
      //必应
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://cn.bing.com/sa/simg/favicon-trans-bg-blue-mg-png.png',
        title: '必应',
        desc: '必应可帮助你将理论付诸实践，使得搜索更加方便快捷，从而达到事半功倍的效果。',
        link: 'https://cn.bing.com/'
      },
      //今日头条
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'http://sf3-cdn-tos.douyinstatic.com/obj/eden-cn/uhbfnupkbps/toutiao_favicon.ico',
        title: '今日头条',
        desc: '今日头条，头条，头条网，头条新闻，今日头条官网',
        link: 'https://www.toutiao.com'
      },
      //学习强国
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.xuexi.cn/favicon.ico',
        title: '学习强国',
        desc: '梦想从学习开始，事业从实践起步。',
        link: 'https://www.xuexi.cn'
      },

    ]
  },
  // 翻译
  {
    title: '翻译',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://ydlunacommon-cdn.nosdn.127.net/31cf4b56e6c0b3af668aa079de1a898c.png',
        title: '有道翻译',
        desc: '有道翻译',
        link: 'https://fanyi.youdao.com'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://static.deepl.com/img/logo/deepl-logo-blue.svg',
        title: 'deepl',
        desc: '翻译',
        link: 'https://www.deepl.com'
      },

    ]
  },
  // 笔记
  {
    title: '文档',
    items: [
      {
        // 语雀
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://mdn.alipayobjects.com/huamei_0prmtq/afts/img/A*vMxOQIh4KBMAAAAAAAAAAAAADvuFAQ/original',
        title: '语雀',
        desc: '文档与知识库工具,知识构建与分享工具',
        link: 'https://www.yuque.com'
      },
      {
        // 腾讯文档
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://docs.idqqimg.com/tim/docs/desktop/favicon.ico',
        title: '腾讯文档',
        desc: '文档ppt',
        link: 'https://docs.qq.com'
      },

      {
        // 企业微信文档- https://doc.weixin.qq.com
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://wwcdn.weixin.qq.com/node/wwnl/wwnl/style/images/independent/favicon/favicon_16h$e1750fed.png',
        title: '企业微信文档',
        desc: '企业微信文档',
        link: 'https://doc.weixin.qq.com'
      },
      // 飞书-https://www.feishu.cn/
      {
        icon: 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image',
        title: '飞书',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '飞书',
        link: 'https://www.feishu.cn/'
      },
      // 飞书-https://feishu.cn/messenger/
      {
        badge: {
          text: '飞书',
          type: 'info',
        },
        icon: 'https://p1-hera.feishucdn.com/tos-cn-i-jbbdkfciu3/84a9f036fe2b44f99b899fff4beeb963~tplv-jbbdkfciu3-image:0:0.image',
        title: '飞书网页',
        desc: '飞书网页版',
        link: 'https://feishu.cn/messenger/'
      },
      // FlowUS-https://flowus.cn
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://baiyunshan.flowus.cn/assets/_next/static/media/favicon.0c45c594.png',
        title: 'FlowUS',
        desc: '知识管理与协作平台以云端笔记为载体，配合在线文档、知识库、文件夹等多形态功能，为个人和团队提供数字信息管理与协同的一站式工作中心。',
        link: 'https://flowus.cn'
      },
      {
        // 思乎-GitMind-https://gitmind.cn
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://qncdn.aoscdn.com/astro/gitmind/_astro/favicon-32@32w.0c16987d.png',
        title: 'GitMind',
        desc: '免费思维导图协作软件，灵感流淌、思想共创，激发思想流动，让智慧自然涌现',
        link: 'https://gitmind.cn'
      },
      {
        // 印象笔记
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.yinxiang.com/new/wp-content/uploads/2019/08/%E7%9F%A9%E5%BD%A2@2x-12.png',
        title: '印象笔记',
        desc: '印象笔记',
        link: 'https://www.yinxiang.com'
      },
      {
        // 有道云笔记-https://note.youdao.com
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://note.youdao.com/favicon.ico',
        title: '有道云笔记',
        desc: '有道云笔记',
        link: 'https://note.youdao.com'
      },
      {
        // 为知笔记-
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://wcdn.wiz.cn/favicon.ico',
        title: '为知笔记',
        desc: '以知识释放创造力,从个人笔记到团队知识库，构建更强大的知识图谱',
        link: 'https://www.wiz.cn'
      },

      {
        // 石墨-https://shimo.im
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://as.smgv.cn/from_qbox/favicon.ico',
        title: '石墨文档',
        desc: '面向未来的办公软件,文档实时协同 · 知识沉淀管理 · 数据安全可控',
        link: 'https://shimo.im'
      },
      {
        // 幕布
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://assets.mubu.com/favicon.ico',
        title: '幕布',
        desc: '极简大纲笔记，一键生成思维导图',
        link: 'https://mubu.com'
      },
      {
        // 
        icon: 'https://www.processon.com/public_login/favicon.983368c6.ico',
        title: 'ProcessOn',
        badge: {
          text: '中',
          type: 'info',
        },
        desc: '免费在线流程图思维导图',
        link: 'https://www.processon.com'
      },

    ]
  },



  // 网盘
  {
    title: '网盘',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://nd-static.bdstatic.com/m-static/wp-brand/favicon.ico',
        title: '百度网盘',
        desc: '百度网盘',
        link: 'https://pan.baidu.com/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://img.weiyun.com/vipstyle/nr/box/img/favicon.ico?max_age=31536000',
        title: '腾讯云盘',
        desc: '腾讯云盘',
        link: 'https://www.weiyun.com/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico',
        title: '阿里网盘',
        desc: '阿里网盘',
        link: 'https://www.aliyundrive.com/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://static.ctfile.com/assets/img/favicons/favicon-32x32.png',
        title: '城通网盘',
        desc: '城通网盘',
        link: 'https://www.ctfile.com/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.lanzou.com/favicon.ico',
        title: '蓝奏云',
        desc: '蓝奏云',
        link: 'https://www.lanzou.com/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.jianguoyun.com/static/images/logo.png',
        title: '坚果云',
        desc: '坚果云',
        link: ' https://www.jianguoyun.com/'
      },
      {
        // 我的群辉
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://enduo.cn5.quickconnect.cn/webman/resources/images/icon_dsm_96.png?v=40438',
        title: '我的NAS',
        desc: '我的NAS',
        link: 'https://enduo.cn5.quickconnect.cn'
      },
    ]
  },
  //图书
  {
    title: '图书',
    items: [
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.ageeye.cn/statics/icons/favicon-16x16.png',
        title: '观沧海',
        desc: '地图分享知识是我们的核心理念',
        link: 'https://www.ageeye.cn/'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://avatar.0skyu.cn/assets/logo.f5999a59.svg',
        title: '自定义头像',
        desc: '零域色彩头像',
        link: 'https://avatar.0skyu.cn/'
      },

      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://cdnstatic.ventusky.com/images/favicon.ico',
        title: '风雨气温图',
        desc: '风雨气温图',
        link: 'https://www.ventusky.com'
      },
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://rescdn.qqmail.com/node/wr/wrpage/style/images/independent/favicon/favicon_48h.png',
        title: '微信读书',
        desc: '微信读书',
        link: 'https://weread.qq.com/'
      },
      {
        badge: {
          text: '中',
          type: 'tip',
        },
        icon: 'https://qwerty.liumingye.cn./favicon.ico',
        title: 'Qwerty Learner',
        desc: '打字练习单词',
        link: 'https://qwerty.liumingye.cn/'
      },
      {
        icon: 'https://www.zgbk.com/images/favicon.ico',
        title: '中国大百科全书',
        badge: {
          text: '中',
          type: 'warning',
        },
        desc: '中国大百科全书',
        link: 'https://www.zgbk.com/'
      },
    ]
  },
  //邮箱
  {
    title: '邮箱',
    items: [
      // 163邮箱
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://mail.163.com/favicon.ico',
        title: '163邮箱',
        desc: '邮件，邮箱，电子邮件，电子邮箱，网易邮箱，163邮箱，免费邮箱，mail，email，超大附件',
        link: 'https://mail.163.com/'
      },
      // 126邮箱-https://mail.126.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://mail.163.com/favicon.ico',
        title: '126邮箱',
        desc: '邮件，邮箱，电子邮件，电子邮箱，网易邮箱，163邮箱，免费邮箱，mail，email，超大附件',
        link: 'https://mail.126.com/'
      },
      //qq邮箱-https://mail.qq.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://mail.qq.com/zh_CN/htmledition/images/favicon/qqmail_favicon_96h.png',
        title: 'qq邮箱',
        desc: '为亿万用户提供高效稳定便捷的电子邮件服务',
        link: 'https://mail.qq.com/'
      },
      //企业邮箱-https://work.weixin.qq.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://exmail.qq.com/exmail_logo.ico',
        title: '企业邮箱',
        desc: '企业邮箱',
        link: 'https://work.weixin.qq.com'
      },
      // foxmail邮箱-https://www.foxmail.com/
      {
        badge: {
          text: '中',
          type: 'tip',
        },
        icon: 'https://www.foxmail.com/favicon.ico',
        title: 'foxmail邮箱',
        desc: 'foxmail邮箱',
        link: 'https://www.foxmail.com/'
      },
      // 阿里邮箱-https://mail.aliyun.com/
      {
        icon: 'https://mail.aliyun.com/static/0.2.6/images/favicon.ico',
        title: '阿里邮箱',
        badge: {
          text: '中',
          type: 'warning',
        },
        desc: '阿里邮箱',
        link: 'https://mail.aliyun.com/'
      },
    ]
  },

  //音乐
  {
    title: '音乐',
    items: [
      //酷狗音乐-https://www.kugou.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.kugou.com/root/favicon.ico',
        title: '酷狗音乐',
        desc: '酷狗,酷狗音乐,音乐,听书,音频mp3',
        link: 'https://www.kugou.com'
      },
      // 酷我音乐-http://www.kuwo.cn/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'http://www.kuwo.cn/favicon.ico?v=1',
        title: '酷我音乐',
        desc: '酷我音乐件',
        link: 'http://www.kuwo.cn/'
      },
      //网易云音乐-https://music.163.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://s1.music.126.net/style/favicon.ico?v20180823',
        title: '网易云音乐',
        desc: '企业邮箱',
        link: 'https://music.163.com'
      },
      //qq音乐-https://y.qq.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://y.qq.com/favicon.ico?max_age=2592000',
        title: 'qq音乐',
        desc: '音乐,QQ音乐,在线听歌,音乐下载,音乐播放器,音乐网站,MV,巅峰榜,音乐排行榜,翻译歌曲,热门歌曲,经典老歌,无损音乐,无损曲库',
        link: 'https://y.qq.com/'
      },
    ]
  },
  //视频
  {
    title: '视频',
    items: [
      //哔哩哔哩-https://www.bilibili.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.bilibili.com/favicon.ico?v=1',
        title: '哔哩哔哩',
        desc: '哔哩哔哩',
        link: 'https://www.bilibili.com/'
      },
      //西瓜视频-https://www.bilibili.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://sf1-cdn-tos.douyinstatic.com/obj/eden-cn/lpqpflo/ixigua_favicon.ico',
        title: '西瓜视频',
        desc: '西瓜视频',
        link: 'https://www.ixigua.com'
      },
      // CCTV-https://tv.cctv.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://tv.cctv.com/favicon.ico',
        title: 'CCTV',
        desc: 'CCTV',
        link: 'https://tv.cctv.com/'
      },
    ]
  },
  //购物
  {
    title: '购物',
    items: [
      //购物-https://www.jd.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.jd.com/favicon.ico',
        title: '京东',
        desc: '京东',
        link: 'https://www.jd.com/'
      },
    ]
  },
  //地图
  {
    title: '地图',
    items: [
      //本地测试-https://www.kugou.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://map.baidu.com/favicon.ico',
        title: '百度地图',
        desc: '百度地图',
        link: 'https://map.baidu.com'
      },
    ]
  },
  //资源
  {
    title: 'PPT网站',
    items: [
      //ppt网站-https://www.1ppt.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.1ppt.com/favicon.ico',
        title: '第一ppt',
        desc: '第一ppt',
        link: 'https://www.1ppt.com'
      },
      // 扑奔PPT-https://www.pooban.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://attachment.pooban.com/uploads/allimg/20230729/1-230H91Q4253L.ico',
        title: '扑奔PPT导航',
        desc: '扑奔PPT导航',
        link: 'https://www.pooban.com'
      },
      // 三顿导航-https://www.sandunppt.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.sandunppt.com/apple-touch-icon.png',
        title: '三顿导航',
        desc: '三顿导航',
        link: 'https://www.sandunppt.com/'
      },

      // PPT设计师导航-http://ppt.yoppt.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'http://ppt.yoppt.com/wp-content/uploads/2020/08/favicon.ico',
        title: 'PPT设计师导航',
        desc: 'PPT设计师导航',
        link: 'http://ppt.yoppt.com/'
      },
      // PPT设计师导航-https://www.aboutppt.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://www.aboutppt.com/favicon/www.51yuansu.com.png',
        title: 'AboutPPT 导航',
        desc: 'AboutPPT 导航',
        link: 'https://www.aboutppt.com/'
      },

    ]
  },
  //开发
  {
    title: '开发',
    items: [
      //代码库-https://g-tgcy8721.coding.net/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://help-assets.codehub.cn/enterprise/guanwang/favicon.ico',
        title: 'coding',
        desc: 'coding',
        link: 'https://g-tgcy8721.coding.net/'
      },
      //在线图片压缩工具
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        badge: {
          text: '中',
          type: 'tip',
        },
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com'
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        badge: {
          text: '中',
          type: 'warning',
        },
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech'
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        badge: {
          text: '中',
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
  // 腾讯
  {
    title: '腾讯',
    items: [
      //微信文件传输-https://filehelper.weixin.qq.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://res.wx.qq.com/t/fed_upload/5b551698-63f4-4f29-b9a2-cc3d6804686b/app-icon-192x192.png',
        title: '微信文件传输',
        desc: '微信文件传输',
        link: 'https://filehelper.weixin.qq.com/'
      },
      //腾讯兔小巢-https://txc.qq.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://res.wx.qq.com/t/fed_upload/5b551698-63f4-4f29-b9a2-cc3d6804686b/app-icon-192x192.png',
        title: '腾讯兔小巢',
        desc: '腾讯兔小巢',
        link: 'https://filehelper.weixin.qq.com/'
      },
      //微信文件传输-https://filehelper.weixin.qq.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://res.wx.qq.com/t/fed_upload/5b551698-63f4-4f29-b9a2-cc3d6804686b/app-icon-192x192.png',
        title: '微信文件传输',
        desc: '微信文件传输',
        link: 'https://filehelper.weixin.qq.com/'
      },
      //微信文件传输-https://filehelper.weixin.qq.com/
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: 'https://res.wx.qq.com/t/fed_upload/5b551698-63f4-4f29-b9a2-cc3d6804686b/app-icon-192x192.png',
        title: '微信文件传输',
        desc: '微信文件传输',
        link: 'https://filehelper.weixin.qq.com/'
      },
    ]
  },
  //本地c测试
  {
    title: '本地测试',
    items: [
      //本地测试-https://www.kugou.com
      {
        badge: {
          text: '中',
          type: 'info',
        },
        icon: '',
        title: '本地测试',
        desc: '本地测试',
        link: 'http://localhost:5173/'
      },
    ]
  },

]