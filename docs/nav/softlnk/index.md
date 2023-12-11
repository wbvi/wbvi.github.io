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
# 软件导航

::: info 说明
常用软件下载 [连接](./)
:::

<!-- 调用css -->
<style src="../../.vitepress/theme/style/nav.scss"></style>
<!-- 调用数据文件 softlnk-->
<script setup>
import { NAV_DATA } from '../../.vitepress/theme/untils/softlnk'
</script>
<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
