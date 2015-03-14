---
layout: post
title: "javascript专题之对象"
date: 2014-12-01 10:20
categories: [javascript]
tags: [javascript]
---

####javascript对象
> javascript启示录

- 对象只是一组属性集合的容器,每个属性都有一个名称和一个值,javascript采用具有命名值属性的容器(对象)这一个概念作为叫javascript表达式值的构建块;
```
    var student=new Object();
    student.living = true;
    student.age = 33;
    student.gender = 'male';

    console.log(student); 
    //输出Object {living: true, age: 33, gender: "male"} 
```
1. 由Object()构造函数创建的对象和通过string()构造函数创建的字符串对象没有太大的区别;
2. 所有的东西都可以是对象,包括通常不将其视为对象的值(即string字符串、数字num、布尔值)
```
    var myObject = new Object();
    myObject['0'] = 'f';
    myObject['1'] = 'o';
    myObject['2'] = 'o';

    console.log(myObject); 
    var myString = new String('foo');
    console.log(myString);
    //Object {0: "f", 1: "o", 2: "o"}
    //String {0: "f", 1: "o", 2: "o", length: 3} 
```

