---
layout: post
title: "浏览器兼容问题总结"
date: 2015-11-21 07:20
categories: [javascript]
tags: [javascript]
---

> 浏览器兼容问题: 范围[IE8+,Chrome,Firefox,Opera,Safari],不考虑IE6,IE7

###CSS部分


###JavaScript部分

   - 1. jQuery的$.get方法获取xml文件 IE8不兼容
       - 原因:  IE从服务器获取XML数据,IE将xml数据作为String给解析了.
       - 解决方案:  [xml](http://blog.csdn.net/wu_huiwen/article/details/6222554)
    
   - 2. IE8报错：对象不支持trim属性或方法
       - 原因: trim()方法是原生js的方法,高级浏览器已经默认支持trim(),但IE6,7,8都不支持这个新加的方法,所以IE8及已经的版本会报错。
       - 解决方案: 1.使用jquery的$.trim()来代替原生js方法trim();
                 2.使用原生js来扩展String方法 