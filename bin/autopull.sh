#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 先上传主仓库代码
git init
git add -A
git commit -m "auto construct main"
@REM 更新到主仓库
git push -f https://github.com/wbvi/wbvi.github.io 

# 上传分支ph-pages
# 生成静态文件
pnpm docs:build
# 进入生成的文件夹#cd docs/.vuepress/dist# cd dist
cd ./docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'auto-dh-pages'
# const msg = "gitee actions 自动部署"
# git commit -m "${msg}"

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

#gitee
git remote add origin https://gitee.com/viwb/viwb.git
#强制推送
git push -f origin master
#强制推送分支
#git push -f origin master:gh-pages

# 返回上次所在的目录
cd -

# 删除dist文件夹
#rm -rf docs/.vitepress/dist
# rm -rf dist
rm -rf ./docs/.vitepress/dist

# 是否关闭命令行窗口
exec /bin/bash

#一次复制上传

pnpm docs:build
cd ./docs/.vitepress/dist
git init
git add -A
git commit -m 'deploy'
git remote add origin https://gitee.com/viwb/viwb.git
git push -f origin master


#github
git config --global user.name "wbvi"
git config --global user.email "wb_enduo@126.com"

#gitee
# git config --global user.name "wb"
# git config --global user.email "12372099+viwb@user.noreply.gitee.com"
