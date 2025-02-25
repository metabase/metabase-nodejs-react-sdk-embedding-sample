#! /bin/bash
cp .env.sample .env

npm ci --prefix ./client
npm ci --prefix ./server
