#! /bin/bash
cp .env.test .env

npm ci --prefix ./client
npm ci --prefix ./server
