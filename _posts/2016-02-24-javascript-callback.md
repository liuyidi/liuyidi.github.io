---
layout: post
title: "深入学习javascript之callback回调"
date: 2016-02-24 12:20
categories: [javascript]
tags: [javascript]
---

*  目录
{:toc}

> [参考资料](http://blog.csdn.net/luoweifu/article/details/41466537)
> [参考资料-javascript回调函数整理](https://segmentfault.com/a/1190000000657129)
> 说明: 回调函数来自于一种著名的编程范式-函数式编程


### 回调的定义


> 在JavaScript中，回调函数具体的定义为：函数A作为参数(函数引用)传递到另一个函数B中，并且这个函数B执行函数A。
> 我们就说函数A叫做回调函数。如果没有名称(函数表达式)，就叫做匿名回调函数。因此callback 不一定用于异步，
> 一般同步(阻塞)的场景下也经常用到回调，比如要求执行某些操作后执行回调函数

### 回调的例子
---

例子一
```
    var clientData = {
        id: 091842,
        fullName: "not set",
        setUserName: function(firstName,lastName){
            this.fullName = firstName+lastName;
        }
    }
    //callback为回调函数
    function getUserName(firstName,lastName,callback,callbackObj){
        if(typeof callback === "function"){
            callback.call(callbackObj,firstName,lastName);
        }
    }
getUserName("liu","yidi",clientData.setUserName,clientData);
console.log(clientData.fullName);
```
 
例子二
```
 var c = "hello";
 function display(){
    console.log(arguments[0]);
 };
 //callback为匿名回调函数
 function fun2(c,callback){
     (callback && typeof(callback) === "function") && callback(c);  //存在且为函数 执行callback
 }
 fun2(c,display);
```

### 回调的使用场合
---

- 资源加载
    - 动态加载js文件后执行回调
    - 加载iframe后执行回调
    - ajax操作回调
    - 图片加载完成后回调
- DOM事件以及Node.js事件基于回调机制
- 链式调用
    - 链式调用的赋值器(setter)很容易实现链式调用;
    - 链式调用的取值器(getter)会返回需要的数据,但是没有返回this指针,如果要实现链式调用,可以用回调函数实现。
- setTimeout&setInterval的函数调用
    - setTimeout的延迟时间为0,setTimeout调用的函数其实就是一个callback的体现
    - 由于两个函数都是异步的,即他们的调用时序和程序的主流程是相对独立的,所以没有办法在主体里面等待它们的返回值,
      它们被打开的时候程序也不会停下来等待,所以return没有意义,只能用callback,callback的意义就在于将timer执行
      的结果通知给代理函数进行及时处理
      
### 回调地狱