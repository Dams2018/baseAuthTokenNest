<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://reale-suite.itam.app/img/logoItam.png" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">AuthenticatorPost <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

## Description
Authenticator API written in
[Nest](https://github.com/nestjs/nest) framework TypeScript.




## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## EndPoint signin

```bash
Encrypted password in MD5

#  POST

http://localhost:5004/api/auth/signin

# JSON

    {
        "username": "admin",
        "password": "616f6550cffc9cd685214ec6c8"
    }

```


## Global config .env

npm i -D dotenv @types/dotenv


Create file  touch ---> .env

```bash

PORT=5004
HOST=127.0.0.1
USERNAME=root
PASSWORD=dockermysql
DATABASE=bddocker
JWT_SECRET=oirgdjnc$@dfg
```


## VsCode debugger

debugger mkdir ----> .vscode

touch ----> launch.json
```bash


 {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Debug Nest Framework",
        "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
        "args": ["${workspaceFolder}/src/main.ts"],
        "autoAttachChildProcesses": true
      }
    ]
  }
```