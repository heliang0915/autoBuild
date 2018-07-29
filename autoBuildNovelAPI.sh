#! /bin/bash
cd ../koa_novel_api/
git reset --hard origin/master
git clean -f
git pull
pm2 restart NovelAPI
