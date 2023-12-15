@REM .\bin\main.bat
@REM .\bin\dh-pages.bat

@REM  先执行下重构看是否报错
pnpm build

@REM 推送更新代码到主仓库
git init
git add -A
git commit -m "auto construct main"
@REM 更新到主仓库
git push -f https://github.com/wbvi/wbvi.github.io 
