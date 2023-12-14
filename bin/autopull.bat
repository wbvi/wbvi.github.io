@REM 更新到主仓库
git init
git add -A
git commit -m "auto construct main"
git push -f https://github.com/wbvi/wbvi.github.io

@REM 上传到分支dh-pages
call pnpm docs:build
cd docs/.vitepress/dist
git init
git add -A
git commit -m "auto construct docs3"
@REM 上传到分支dh-pages
git push -f https://github.com/wbvi/wbvi.github.io master:dh-pages