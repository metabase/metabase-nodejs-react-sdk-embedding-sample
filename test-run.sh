#! /bin/bash
echo "starting backend"
npm run start --prefix ./server &
echo "starting frontend"
npm run start --prefix ./client -- --host
