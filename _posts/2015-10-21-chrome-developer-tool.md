---
layout: post
title: "Chrome开发者调试工具详解"
date: 2015-10-09 17:50
categories: [chrome]
tags: [chrome,tools]
---

###Chrome Developer Tool
[官方文档](https://developer.chrome.com/devtools/docs/javascript-debugging)
[resource](http://www.kazaff.me/2014/01/14/chrome-developer-tools%E4%B9%8B%E8%B0%83%E8%AF%95%E4%BB%A3%E7%A0%81/)

####Chrome Deverloper Tool网络调优(Network)



####Chrome Deverloper Tool断点调试(Sources)

> 所谓断点: 是指在代码中为了调试目的而需要被暂停执行的位置。

#####Sources面板中的调试按钮说明:

1. Continue(快捷键F8): 让代码继续执行,直到遇到下一个断点
2. Step over(快捷键F10): 当我们在调试代码时,遇到一个函数的调用,为了避免不必要的细节,我们不用进入某个函数，而是直接在当前上下文中调试.需要点击该按钮。
3. Step into(快捷键F11): 碰到函数调用,会进入到被调用的函数中去。
4. Step out(快捷键Shift+F11): 用于快速跳出当前函数,返回到被调用的当前函数的父级上下文中。
5. Deactivate breakpoints: 停止所有的断点
6. pause on exceptions: 暂停断点

#####Sources面板中的调试功能说明:

- Watch

- Call Stack(调用堆栈)

- Scope(作用域)
    
    可以查看当前声明过的变量列表
    
- Breakpoints(断点)

    我们设置的所有断点,都可以在Breakpoints里面看到
    
- DOM Breakpoints(DOM断点)
- XHR Breakpoints(XHR断点)
- Event Breakpoints(事件断点)
- Event Listener Breakpoints(事件监听断点)
- Event Listeners(事件监听)

#####DOM上的断点说明:

    Break on 
        subtree modifications（子树的修改)
        Attributes modifications（属性的修改)
        Node removal (节点的删除)
        
#####XHR上的断点说明:

    在XHR Breakpoints(XHR断点)中的"+"按钮添加需要添加的ajax
    
#####js事件上的断点说明:
    - Event Listener Breakpoints(事件监听断点)
    选择Event Listener Breakpoints中的某一个事件以后，比如Mouse中的mouseout,当执行该事件时,会出现断点。
