---
layout: post
title: "git-command"
date: 2015-01-09 14:20
categories: [Git]
tags: [linux, git]
---

###git学习指南
	
- git删除远程分支
  如果一不小心把本地的临时分支dev  push到server上去了,想要删除,
一开始用

	`git branch -r -d origin/dev`

不成功,	发现只是删除了本地对应该远程分支的track,那么正确的方式是:

	`git push origin :dev`

冒号前面的空格不能少,原理是把一个空分支push到server上去,相当于删除该分支.