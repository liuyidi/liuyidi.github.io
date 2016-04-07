---
layout: post
title: "深入学习javascript之常犯错误"
date: 2015-03-25 12:20
categories: [javascript]
tags: [javascript]
---

####常犯的错误
- 1. 问题：很多事件没有反应(日历,文件上传的点击事件)
    - 解答：文件没有在加载的时候执行,可以用js的ready事件,$(jQuery)的加载事件,或者放在$(function(){ ... }); 