---
layout: post
title: "javascript基础学习之面向对象程序设计"
date: 2015-03-18 11:20
categories: [javascript]
tags: [javascript]
---

####面向对象Object-oriented
> ECMAScript中没有类的概念,ECMAScript中的对象可以被想象成散列表:无非就是一组名值对,其中值可以是数据或函数.每个对象都是基于一个引用类型创建的.

#####一、创建对象

   ```
   var person = new Object();
   person.name = "liuyidi";
   person.age = 29;
   person.job = "front-end web engineer";

   person.sayName = function(){
       alert(this.name);
   };

   person.sayName();
   ```

1. 工厂模式:

    **用函数来封装以特定接口创建对象的细节.**

    ```
    function createPerson(name,age,job){
       var o = new Object();
       o.name = name;
       o.age = age;
       o.job = job;
       o.sayName = function(){
           alert(this.name);
       }
       return o;
    }

    var person1 = createPerson("liuyidi", 22, "web developer");
    var person2 = createPerson("liuy",25,"phd");

    person1.sayName();   //"liuyidi"
    person2.sayName();   //"liuy"
    ```
    *工厂模式虽然解决了创建多个相似对象的问题,但却没有解决对象识别的问题(即怎样知道一个对象的类型).*

2. 构造函数模式:

       **ECMAScript中的构造函数可用来创建特定类型的对象,像Object和Array这样的
       原生构造函数,在运行时会自动出现在执行环境中**
   
    ```
    function Person(name,age,job){
       this.name = name;
       this.age = age;
       this.job = job;
       this.sayName = function(){
           alert(this.name);
       };
    }
    var person1 = new Person("liuyidi",22, "web developer");   // 要创建Person的新实例,必须使用new操作符
    var person2 = new Person("liuy", 25, "pdb");

    person1.sayName();   //"liuyidi"
    person2.sayName();   //"liuy"

    ```

    _以这种方式定义的构造函数是定义在Global对象(在浏览器中是window对象)中的_

    Person()中的代码除了与createPerson()中相同的部分外,还存在以下不同之处:
        - 没有显式地创建对象.
        - 直接将属性和方法赋给了this对象.
        - 没有return语句.

    构造函数始终以一个大写字母开头,而非构造函数以一个小写字母开头. 调用构造函数一般会经历以下4个步骤:
     - 1.创建一个新对象;
     - 2.将构造函数的作用域赋给新对象(因此this就指向了这个新对象);
     - 3.执行构造函数中的代码(为这个新对象添加属性);
     - 4.返回新对象;

    * 对象的constructor属性最初是用来标识对象类型的. person1.constructor == Person
    * console.log(person1 instanceof Object);   //true

    * 构造函数与一般函数不同的地方在于前者通过new操作符来调用.而任何函数,如果不通过new操作符来调用,那它和普通函数也不会有什么两样.

    ```
    //当作构造函数使用
    var person = new Person("liuyidi", 22, "front-end web Engineer");
    person.sayName();   //liuyidi

    //作为普通函数调用
    Person("liuy", 24, "web developer");  //添加到window
    window.sayName();   //liuy

    //在另一个对象的作用域中调用
    var o = new Object();
    Person.call(o,"liuy", 25, "kissy");
    o.sayName();  //liuy
    ```
   
    * 一般把sayName()函数的定义转移到构造函数外部,而在构造函数内部,我们将sayName属性设置成等于全局的sayName函数.

    ```
    function Person(name,age,job){
       this.name = name;
       this.age = age;
       this.job = job;
       this.sayName = sayName;   
    } 

    function sayName(){
       alert(this.name);
    }
    ```

3. 原型模式

