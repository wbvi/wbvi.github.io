@REM .\bin\main.bat
@REM .\bin\dh-pages.bat

@REM @REM  先执行下重构看是否报错
@REM pnpm build

git init
git add -A
git commit -m "auto construct main"
git push -f https://github.com/wbvi/wbvi.github.io
@REM 更新到主仓库
@REM 推送更新代码到主仓库
