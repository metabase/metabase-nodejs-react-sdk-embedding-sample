#! /bin/bash
npm run start --prefix ./server &
npm run start --prefix ./client -- --host &
