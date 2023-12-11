---
layout: doc
layoutClass: m-nav-layout
sidebar: false
prev: false
next: false
outline: [2, 3, 4]
#关闭评论
comment: false
# 导航栏关闭
navbar: false
# 上次更新，默认开启，不想显示可以关闭
# lastUpdated: false
# 页脚
footer: false
---


# 工作导航

::: info 说明
连接公司内部网络可访问 [连接](./)
:::

<!-- 调用css -->
<style src="../../.vitepress/theme/style/nav.scss"></style>
<!-- 调用数据文件 worklnk-->
<!-- 注意调用数据库的路径../../不然会报错 -->
<script setup>
import { NAV_DATA } from '../../.vitepress/theme/untils/worklnk'
</script>

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
