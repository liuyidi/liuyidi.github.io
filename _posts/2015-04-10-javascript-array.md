---
layout: post
title: "javascript学习之对象"
date: 2015-04-10 02:20
categories: [javascript]
tags: [javascript]
---

#####对象数组
使用push()方法将一个点添加到数组最后,使用shift()方法将一个数组中的第一个元素移除.


#####对象中的数组

```
/**
 * 创建一个对象,用来保存观测到的周最高气温.该对象有两个方法:
 * 1. add(): 增加一条新的气温记录; 
 * 2. average(): 计算存储在对象中的平均气温;
 */
function weekTemps(){
	this.data = [];
	this.add = add;
	this.average = average;
}

/*方法: add */
function add(temp){
	this.data.push(temp);
}
/*方法: average */
function average(){
	var sum = 0;
	for(var i = 0; i < this.data.length; i++){
        sum += this.data[i];
    }
    return sum / this.data.length;
}

var thisweek = new weekTemps();
thisweek.add(42);
thisweek.add(39);
thisweek.add(36);
thisweek.add(37);
thisweek.add(35);
thisweek.add(40);
thisweek.add(41);
console.log(thisweek.average());
```