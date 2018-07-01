#! /bin/bash
cd ../MyBlogBack/
git reset --hard origin/master
git clean -f
git pull
npm start