---
layout: post
title: "深入学习javascript之callback回调"
date: 2016-02-24 12:20
categories: [javascript]
tags: [javascript]
---

> [参考资料](http://blog.csdn.net/luoweifu/article/details/41466537)

> 说明: 回调函数来自于一种著名的编程范式-函数式编程

###深入理解javascript中的回调

 ```
 var clientData = {
    id: 091842,
    fullName: "not set",
    setUserName: function(firstName,lastName){
        this.fullName = firstName+lastName;
    }
 }
 
 function getUserName(firstName,lastName,callback,callbackObj){
     if(typeof callback === "function"){
        callback.call(callbackObj,firstName,lastName);
     }
 }
 getUserName("liu","yidi",clientData.setUserName,clientData);
 console.log(clientData.fullName);
 ```
 

####回调地狱