#!/usr/bin/env sh
export NODE_OPTIONS=--openssl-legacy-provider
GITHUB_TOKEN="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"

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
# git push -f git@github.com:mmdctjj/blogs.git master

cd -
