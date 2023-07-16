#!/usr/bin/env sh
export NODE_OPTIONS=--openssl-legacy-provider

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:mmdctjj/blogs.git master:gh-pages
# git push -f https://github.com/mmdctjj/blogs.git master:gh-pages
# git push -f "https://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@github.com/mmdctjj/blogs.git" master:gh-pages
git remote add origin https://github.com/mmdctjj/blogs.git
git config --global user.email "984808285@qq.com"
git config --global user.name "mmdctjj"
git checkout -b gh-pages
git add .
git commit -m 'deploy'
git push -f origin gh-pages
cd -
