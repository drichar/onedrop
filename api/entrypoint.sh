#!/bin/bash

cd /var/onedrop/api
# npm install -g node-gyp
# npm install --no-bin-links --no-progress

# https://github.com/npm/npm/issues/9953
# if [ $? -ne 0 ]; then
  # rm -rf node_modules/bcrypt
  # npm install -no-bin-links --no-progress
# fi

node app.js
# ping localhost
