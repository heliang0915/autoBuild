#! /bin/bash
cd ../MyBlogBack/
git reset --hard origin/master
git clean -f
git pull
pm2 restart all