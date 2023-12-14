@REM .\bin\main.bat

git init
git add -A
git commit -m "auto construct main"
@REM 更新到主仓库
git push -f https://github.com/wbvi/wbvi.github.io 
