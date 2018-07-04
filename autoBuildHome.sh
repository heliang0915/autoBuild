#! /bin/bash
cd ../BlogSimple/
git reset --hard origin/master
git clean -f
git pull
pm2 restart BlogHome