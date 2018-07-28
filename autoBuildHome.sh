#! /bin/bash
cd ../BlogHome/
git reset --hard origin/master
git clean -f
git pull
pm2 restart BlogHome
