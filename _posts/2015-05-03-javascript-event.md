---
layout: post
title: "javascript基础学习之事件"
date: 2015-05-03 12:20
categories: [javascript]
tags: [javascript]
---
*  目录
{:toc}

### 1.事件流
	- 事件冒泡
	- 事件捕获
	- DOM事件流
	
### 2.事件处理程序

#### 2.1 HTML事件处理程序
    
    ```
    <div onclick="alert('click')">点击</div>
    ``` 
#### 2.2 DOM0级事件处理程序
    
    ```
    document.getElementById("btn").onclick = function(){
        alert("click");
    }
    ```
    
#### 2.3 DOM2级事件处理程序
	定义了两个方法:用于处理指定和删除事件处理程序的操作: addEventListener() 和 removeEventListener()

#### 2.4 IE事件处理程序
		IE实现了与DOM中类似的两个方法: attachEvent()和detachEvent(),这两个方法接受相同的两个参数:事件处理程序名称与事件处理程序函数.

			```
			var btn = document.getElementById("myBtn");
			btn.attachEvent("onclick", function(){   /*参数为onclick*/
				alert("clicked");
			});
			```
		detachEvent()也是用来移除相应的事件处理程序

#### 2.5 跨浏览器的事件处理程序


### 3.事件对象

### 4.事件类型

	- DOM3级事件规定:
	> UI(User Interface 用户界面)事件: 当用户与页面上的元素交互时触发
	  焦点事件: 元素获得或失去焦点时触发
	  鼠标事件: 当用户通过鼠标在页面上执行操作时触发
	  滚轮事件: 当使用鼠标滚轮(或类似设备)时触发
	  文本事件: 当在文档中输入文本时触发
	  键盘事件: 当用户通过键盘在页面上执行操作时触发
	  合成事件: 当为IME(输入法编辑器)输入字符时触发
	  变动事件: 当底层DOM结构发生变化时触发

#### 4.1 UI事件

		- load: 当页面完全加载后(包括所有imgs、javascript文件、css文件等外部资源)
		在window上触发
			
			```
			EventUtil.addHandler(window, "load", function(event){
				alert("Loaded!");
			});

			/*图像加载完毕后显示一个警告框*/
			EventUtil.addHandler(image, "load", function(event){
				event = EventUtil.getEvent(event);
				alert(EventUtil.getTarget(event).src);
			})
			```
		- unload: 当页面完全卸载后在window上触发
		- abort
		- error:
		- select: 当用户选择文本框(<input>/<textarea>)中的一个或多个字符时触发.
		- resize: 当窗口或框架的大小变化时在window或框架上面触发
		- scroll: 当用户滚动带滚动条的元素中的内容时,在该元素上面触发
### 5.内存和性能

### 6.模拟事件

