#!/bin/bash
# 前端环境安装所需
# 指定的Nodejs的12版本
curl --silent --location https://rpm.nodesource.com/setup_12.x | bash
# 安装nodejs
yum install -y nodejs
# 安装git
yes y | yum install git
# 设置npm镜像
npm config set registry https://registry.npm.taobao.org
# 安装 n 全局
npm install -g n
# 安装 node 14.17.4版本
n 14.17.4
# 安装pm2
npm install -g pm2
# 安装pnpm(以后升级需要)
npm install -g pnpm
# 设置pnpm镜像
pnpm config set registry http://registry.npm.taobao.org
# 安装yarn
npm install -g yarn
# 设置yarn镜像
yarn config set registry http://registry.npm.taobao.org
