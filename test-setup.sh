#! /bin/bash
cp .env.example .env

npm ci --prefix ./client
npm ci --prefix ./server
