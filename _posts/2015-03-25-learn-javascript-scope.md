---
layout: post
title: "javascript基础学习系列之作用域&执行环境"
date: 2015-03-25 12:20
categories: [javascript]
tags: [javascript]
---

### 执行环境的几点总结:
 * 执行环境有全局执行环境和函数执行环境之分;
 * 每次进入一个新执行环境,都会创建一个用于搜索变量和函数的作用域链;
 * 函数的局部环境不仅有权访问函数作用域中的变量,而且有权访问其包含(父)环境,乃至全局环境;
 * 全局环境只能访问在全局环境中定义的变量和函数,而不能直接访问局部环境中的任何数据;
 * 变量的执行环境有助于确定应该何时释放内存;

### 作用域
1.变量声明提前

```js
var scope = "global";
function test(){
	console.log(scope);   //undefined
	var scope = "local";
	console.log(scope);   //local
}
//等价于
var scope = "global";
function test(){
	var scope;
	console.log(scope);  //undefined
	scope = "local";
	console.log(scope);  //local
}
*******************************
var scope="global";
function scopeTest(){
    console.log(scope);
}
scopeTest();            //global  函数内部未声明变量时使用全局变量
```

2.全局变量优先级低于局部变量,javascript中没有块级作用域

> 解析器将当前作用域内声明的所有变量和函数都会放到作用域的开始处，但是,只有变量的声明被提前到作用域的开始处了，而赋值操作被保留在原处。
作为最佳实践：变量声明一定要放在作用域/函数的最上方（JavaScript 只有函数作用域！）。

[深入理解javascript变量作用域](http://www.cnblogs.com/rainman/archive/2009/04/28/1445687.html)