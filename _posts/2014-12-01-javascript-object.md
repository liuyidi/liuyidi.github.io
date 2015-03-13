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

    var student=new Object();
    student.living = true;
    student.age = 33;
    student.gender = 'male';

    console.log(student); 
    //输出Object {living: true, age: 33, gender: "male"} 

