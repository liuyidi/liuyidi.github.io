---
layout: post
title: "javascript基础学习之垃圾收集"
date: 2015-03-27 12:20
categories: [javascript]
tags: [javascript]
---

####垃圾收集
> javascript具有自动垃圾收集机制,也就是执行环境会负责管理代码执行过程中使用的内存.原理:找出那些不再继    public function responseMsg()
续使用的变量,然后释放其占有的内存.垃圾收集器会按照固定的时间间隔，周期性地执行这一操作.


* 局部变量只在函数执行的过程中存在,而在这个过程中,会为局部变量在栈(或堆)内存上分配相应的空间,以便存储它们的值.

**标记清除&引用计数**







**管理内存**

* 解除引用: 确保占有最少的内存可以让页面获得更好的性能,而优化内存占用的最佳方式,就是为执行中的代码只保存必要的数据.一旦数据不再有用.最好通过将其值设置为null来释放其引用.

```
function createPerson(name){
	var localPerson = new Object();
	localPerson.name = name;
	return localPerson;
}

var globalPerson = createPerson("liuyidi");
console.log(globalPerson);

globalPerson = null;  //手工解除globalPerson的引用
```

> 解除一个值的引用并不意味着自动回收该值所占用的内存,解除引用的真正作用是让值脱离执行环境,以便垃圾收集器下次运行时将其回收.