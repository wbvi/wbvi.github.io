---
layout: home
# 导航栏关闭
# navbar: false
# 侧边栏关闭
# sidebar: false
# 大纲默认右侧或关闭
# aside: left
# aside: false
# 设置到六级标题可以用 'deep' ，关闭 false,此设置与 页面中的大纲 设置相同，会覆盖！
#outline: [2,3]
# 上次更新，默认开启，不想显示可以关闭
# lastUpdated: false
# 页脚
# footer: false
# 添加额外类名,在特定页面中自定义样式
# pageClass: test.css
#关闭评论
# comment: false


hero:
  name: 三二一
  text: "wbvi"
  tagline: 路漫漫其修道远，吾将上下而求索
  image:
    src: /logo.png
    alt: VitePress
  actions:
    - theme: brand
      text: 开始
      link: /started
    # 
    # - theme: alt
    #   text: GitHub
    #   link: https://github.com/Yiov/vitepress-doc
    # 
    # - theme: sponsor
    #   text: 搭建导航
    #   link: /nav/
    - theme: sponsor
      text: 我的导航
      link: /nav/mylnk/
    - theme: sponsor
      text: 软件导航
      link: /nav/softlnk/
    - theme: sponsor
      text: 工作导航
      link: /nav/worklnk/  
features:
  - icon: 
      dark: /vitepress.png
      light: /vitepress-light.png
    title: 我的导航
    details: 搬砖。
    link: /nav/mylnk/
    linkText: 点击直达
  - icon: 
      dark: /vitepress.png
      light: /vitepress-light.png
    title: 软件导航
    details: 热爱一切美学
    link: /nav/softlnk/
    linkText: 点击直达
  - icon: 
      dark: /vitepress.png
      light: /vitepress-light.png
    title: 斜杆
    details: 平平无奇。
    link: https://wbvi.github.io
    linkText: 点击直达
---
<style>
:root {
/*标题渐变色*/
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
/*图标背景渐变色 */
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(40px);
/* brand按钮*/
  --vp-button-brand-border: #F6CEEC;
  --vp-button-brand-text: #F6CEEC;
  --vp-button-brand-bg: #D939CD;

  --vp-button-brand-hover-border: #F6CEEC;
  --vp-button-brand-hover-text: #fff;
  --vp-button-brand-hover-bg: #D939CD;

  --vp-button-brand-active-border: #F6CEEC;
}

</style>
