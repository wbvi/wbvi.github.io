---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2, 3, 4]
#关闭评论
comment: false
---
# 我的导航

::: info 说明
我的导航 [本页](./)
:::

<!-- 调用css -->
<style src="../../.vitepress/theme/style/nav.scss"></style>
<!-- 调用数据文件 mylnk-->

<script setup>
import { NAV_DATA } from '../../.vitepress/theme/untils/mylnk'
</script>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

::: tip
该导航由 [maomao](https://github.com/maomao1996) 开发，[版权声明](<https://github.com/maomao1996/vitepress-nav-template>)
:::
