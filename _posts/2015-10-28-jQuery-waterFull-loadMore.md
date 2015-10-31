---
layout: post
title: "jQuery-WaterFull-LoadMore"
date: 2015-10-29 23:20
categories: [jquery]
tags: [jquery,business]
---

一、业务需求

- 1.1 根据时间New和点赞数Hot排序;
- 1.2 用AJAX请求服务器数据;
- 1.3 通过遍历插入数据到最后;
- 1.4 滚动滚动条,判断图片是否进入可视区域,同时执行加载更多;
- 1.5 图片根据屏幕自适应布局,并且自动补全每行;
- 1.6 图片拥有图片信息和作者信息,带有可以点赞的AJAX调用功能,点赞以后＋1效果;

- 1.7 点击图片可以查看大图,图片浏览,左右切换,退出事件,支持键盘事件.
- 1.8 每张图片都拥有图片信息,作者信息,可以对单张图片进行评论,点赞,打赏

二、实现方法

- 2.1 根据New和Hot排序
    
- 2.2 Ajax加载数据
    
	```js
    	$.getJson();
	```
        
- 2.3 插入数据 
	
	```js
    $.each({ });
    ```

- 2.4 瀑布流布局jquery.flexImage.js

	```
	function waterFull(){

	}
	```

- 2.5 滚动加载更多

> 滚动距离＋window高度 > 页面高度

	
	$(this).scrollTop() + $(window).height() + 200 >= $(document).height() 
    && 
	$(this).scrollTop() > 200

	Scroll();
	function LoadMore(){

	}
	

三、优化和注意事项
