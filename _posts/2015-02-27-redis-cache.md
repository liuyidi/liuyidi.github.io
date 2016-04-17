---
layout: post
title:  "Redis学习笔记二"
date: 2015-02-27 12:30
categories: [Redis]
tags: [redis]
---

## Redis缓存核心技术

### Redis数据操作:
- 开启redis客户端,通过Xshell客户端控制远程或者本地的Linux服务,利用redis命令行远程开启redis客户端
- 设置缓存值,   set index-dc-cache '数据'
- 获取缓存数据, get index-dc-cache 
- 设置过期时间, setex key10 'cache'
- 删除缓存,     del key

### PHP操作Redis
- 安装phpredis扩展
- php链接redis服务-connect(127.0.0.1,6379)
> $redis=new redis();
  $redis->connect('127.0.0.1',6379);
  $redis->set('',123);