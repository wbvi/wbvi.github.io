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

## 其他

### 文章


### window 文章

#### 关闭设备加密
1、鼠标右键选中开始菜单，之后选择“windows powershell（管理员）”,输入“manage-bde -off D:”，这里要注意盘符后面的冒号同样要输入。


## 网络

### 华为

- 清除配置文件内容
    
- **reset saved-configuration**
    
-    -y reboot -n -y
    

```
恢复交换机出厂配置。
<HUAWEI> reset saved-configuration
Warning: The action will delete the saved configuration in the device. 
The configuration will be erased to reconfigure. Continue? [Y/N]:y 
Warning: Now clearing the configuration in the device. 
Info: Succeeded in clearing the configuration in the device.
<HUAWEI> reboot
Info: The system is now comparing the configuration, please wait.
Warning: The configuration has been modified, and it will be saved to the next startup saved-configuration file flash:/vrpcfg.zip. Continue? [Y/N]:n
Info: If want to reboot with saving diagnostic information, input 'N' and then execute 'reboot save diagnostic-information'.
System will reboot! Continue?[Y/N]:y
```

port-group group-member Ethernet0/0/1 to Ethernet0/0/22


### 锐捷

### 思科


