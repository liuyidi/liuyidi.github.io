---
layout: post
title:  "Redis学习笔记一"
date: 2015-01-30 12:30
categories: [Redis]
tags: [redis]
---

## NoSQL 非关系数据库
- 以Key-Value形式存储{key1:value1,key2:value2},不一定遵守传统数据库的一些基本要求
- 不支持ACID属性:事件回滚,没有常用的SQL操作,没有表结构
- 用于对数据高并发读写,海量数据的高效率存储和访问,对数据的高可扩展性

### Redis
> 数据结构服务器,键包括string、hash、list（链表）、set(集合)、zset(有序集合)
  这些数据类型都支持push/pop、add/remove

### Redis使用场合
1.取最新N个数据的操作
2.排行榜应用,取TOP N操作 
3.需要精确定过期时间的应用
4.计数器应用
5.Uniq操作,获取某段时间所有数据排重值
6.实时系统,反垃圾系统
7.Pub/Sub构建实时消息系统 （发布与订阅）
8.构建队列系统 list
9.缓存

### Redis的安装与部署
1.下载安装包: wget http://redis.googlecode.com/files/redis-2.4.17.tar.gz
2.编译源程序: tar zxvf redis-1.4.17.tar.gz
  cd redis-1.4.17
  make
  cd src && make install 
  //安装redis成功
3.移动文件,便于管理
  mkdir -p /usr/local/redis/bin
  mkdir -p /usr/local/redis/etc
  //新建目录
  mv /lamp/redis-1.4.17/redis.conf  /usr/local/redis/etc
  //移动redis/etc下
  cd /lamp/redis-2.4.17/src && mv mkreleasehdr.sh redis-benchmark redis-check-aof redis-check-dump redis-cli redis-server /usr/local/redis/bin
  //打开和移动到redis/bin下
4.启动Redis服务
  /usr/local/redis/bin/redis-server
  /usr/local/redis/etc/redis.conf
  - Redis服务端默认连接端口是: 6379
  - Mysql服务端默认连接端口是: 3306
  - Mongodb服务端默认连接端口是: 27017/28017
5.客户端连接
  /usr/local/redis/bin/redis-cli
6.停止使用客户端连接
  /usr/local/redis/bin/redis-cli shutdown
  也可以使用pkill redis-server
