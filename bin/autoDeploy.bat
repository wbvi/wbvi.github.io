call pnpm docs:build
cd docs/.vitepress/dist

git init
git add -A
git commit -m "auto construct docs"

git push -f https://github.com/wbvi/wbvi.github.io master:dis-pages

@REM 这里dis-pages是一个分支
