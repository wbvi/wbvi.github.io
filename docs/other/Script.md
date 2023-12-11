---
# layout: home
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
# pageClass: custom-page-class
#关闭评论
comment: false
---

## 脚本

set modifyPassword = createobject("wscript.shell")

s.run "net user administrator 123456"

set modifyPassword = createobject("wscript.shell")

s.run "net user ALKS-YuanWenBo "123456"

```
'自定义获取本机MAC地址函数
Function GetIPMAC
strComputer = "."
Dim mc,mo
Set mc=GetObject("Winmgmts:").InstancesOf("Win32_NetworkAdapterConfiguration")
For Each mo In mc
If mo.IPEnabled=True Then
    Next
End Function
```


