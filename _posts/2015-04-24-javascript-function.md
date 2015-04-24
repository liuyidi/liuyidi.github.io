---
layout: post
title: "javascript学习之Function"
date: 2015-04-24 02:20
categories: [javascript]
tags: [javascript]
---

###Javascript学习之Function类型


####1.函数声明与函数表达式
- 函数声明与函数表达式的区别:

	```js
	/*函数声明*/
	function sum (num1, num2){
		return num1 + num2;	
	}
	/*函数表达式*/
	var sum = function(num1, num2){
		return num1 + num2;
	}
	```
- 函数的名字仅仅是一个包含指针的变量而已.

####2.作为值的函数


####3.函数内部属性
- 在函数内部有两个特殊的属性: arguments & this . 
- arguments是一个类数组对象,包含着传入函数中的所有参数.主要作用就是保存函数参数,该对象有一个属性名叫:callee,该属性是一个指针,指向拥有这个arguments对象的函数.
	
	```js
	/*阶乘函数*/
	function factorial(num){
		if(num <= 1){
			return 1;
		}else{
			return num * factorial(num-1);
		}
	}
	/*与函数名解耦,保证使用其他变量调用该函数时不会出现问题*/
	function factorial(num){
		if(num <= 1){
			return 1;
		}else{
			       /*arguments.callee代表的是factorial*/
			return num * arguments.callee(num-1);  
		}
	}
	/******************************/
	var newfactorial = factorial;
	factorial = null;
	console.log(newfactorial);  //如果使用第一个,将会出现错误.
	console.log(factorial);     //Null
	```

- **this:**
####4.函数的属性和方法
- 每个函数都包含两个属性:length & prototype, length属性表示函数希望接受的命名参数的个数.

	```js
	function sum(num1, num2){ 
		return num1 + num2;
	} 
	console.log(sum.length);   //2
	```
	
- 每个函数都有两个非继承来的方法: apply() & call() ,两者的区别在于接收参数的方式不同.


- 每个函数都有toString()、toLocaleString()、valueOf()以及caller属性


####5.递归