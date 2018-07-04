#! /bin/bash
cd ../BlogAdminSimple/
git reset --hard origin/master
git clean -f
git pull
pm2 restart BlogAdmin