---
layout: post
title: "Mac环境下的Mongodb学习指南"
date: 2015-11-22 07:20
categories: [mongodb]
tags: [mongodb]
---


*  目录
{:toc}

### 安装brew和mongodb
在开始进行mac环境下的mongodb学习时,需要首先开始下载[Homebrew](http://brew.sh/index.html),用mac做开发一般都会用这个工具。

- 按照接下来的三个步骤:
   - 第一步：`brew install` 安装最新的brew,之后下载mongodb `brew install MongoDB`
   - 第二步：回到根目录下, `cd /`,执行下面的步骤, `sudo mkdir -p /data/db`,在这一步需要注意的是,由于权限问题,用户名下不能直接访问data文件夹,
         另外在接下来输入`mongod`来进行确认MongoDB连接成功时,也会报错。最直接的办法就是更改根目录下`/data`的权限,`sudo chmod -R 777 /data/db`
         或者使用`sudo mongod`;
   - 第三步：把mongod手动加入到环境变量中,`vim ~/.bach_profile`,之后输入`/usr/local/Cellar/mongodb/3.0.7/bin`,配置好环境变量后，执行`source ~/.bash_profile `即可以让环境变量生效
   - 第四步：修改mongodb配置文件,配置文件默认在/usr/local/etc下的mongod.conf,修改dbpath
   - 第五步：在其中一个终端已经执行mongod并成功以后,在另外一个端口使用`mongo`来检测是否连接成功。

### 安装成功后的相关信息说明

1. `/data/db` mongodb存放数据和日志的地方,启动mongodb server时候,-journal代表要写日志,-maxConns=2400代表mongodb可以接受2400个tcp连接,
              -rest 代表可以允许客户端通过rest api访问mongdb server
              `mongod -journal -maxConns=2400 -rest`
2. `/usr/local/Cellar/mongodb/3.0.7/bin` mongodb安装目录
3. `port:27017` 端口号   `web admin port:28017` 管理员端口号


### MongoDB基础入门

> 推荐使用Robomongo作为客户端

1. 