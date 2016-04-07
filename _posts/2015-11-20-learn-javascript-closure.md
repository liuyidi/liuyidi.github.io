---
layout: post
title: "javascript基础学习系列之闭包"
date: 2015-03-25 12:20
categories: [javascript]
tags: [javascript]
---
*  目录
{:toc}

> - 参考书籍和资料
  1. [JavaScript语言精粹(修订版)]() 
  2. [你不知道的JavaScript上卷]()
  3. [Javascript高级程序设计]()
  4. [MDN Closure](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
  
一、什么是闭包？
---
   函数可以访问它被创建时所处的上下文环境,这被称为闭包,
   换句话说闭包中的函数可以记忆它被创建时候的环境。
       
   经典实例：
       
      ```js
      
       for(var i=0; i<5; i++){  
         (function(i){
            setTimeout(function({ console.log(i); },i*1000);   
         })(i);
       }
      ``` 
      
       
   ES6的解决方案：
   **声明let,让其变成块作用域**
       
   ```js
    
    for(let i=0; i<5; i++){
    
        setTimeout(function(){ console.log(i); },i*1000);
        
    }
   ```
  
二、闭包的常用场景
---
  
  事件处理和闭包结合

常见错误一:在循环中创建闭包
------
 
  ```js
  //  常见错误一:在循环中创建闭包
  var addHandler = function(nodes){
    
    for(var i=0; i<nodes.length; i++){
        nodes[i].onclick = function(e){
            alert(i);
        }
    }
  }
  
  //正确的做法
  var clickHandler = function(nodes){
      
      for(var i=0; i<nodes.length; i++){
          nodes[i].onclick = function(i){
              return function(){
                 alert(i);
              }
          }(i);
      }
  }
  clickHandler();
  ```