#!/bin/sh

cd /var/www
# npm 
export NODE_ENV=development
echo 'running npm install and watch'
npm install && npm run watch