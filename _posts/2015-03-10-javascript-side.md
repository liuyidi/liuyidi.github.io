---
layout: post
title: "javascript-side"
date: 2015-03-10 14:20
categories: [Git]
tags: [javascript]
---

> [完整Demo](http://www.liuyidi.com/includes/SideDemo/)

### 功能实现todo
- 点击sidebar下方的关闭按钮(X),sidebar向左方滑出屏幕,关闭按钮向右方滑动,同时旋转为(+)
- 点击 + ,sidebar向右滑动, + 向左方滑动并旋转为 X
- 点击sidebar上的菜单栏,相应的内容栏(从左向右)滑动
- 打开的内容栏的右上方有关闭按钮(<),点击后内容栏向左滑动关闭。

### Sidebar Demo
- 完整页面体验流程 先加载css,之后加载HTML DOM文档,再加载js文件

- 阻止事件冒泡，这样点击菜单项，只响应菜单项事件，不干扰sidebar

### 动画效果


