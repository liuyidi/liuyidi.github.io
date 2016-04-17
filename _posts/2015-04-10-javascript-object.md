---
layout: post
title: "Javascript学习之对象"
date: 2015-04-10 02:20
categories: [javascript]
tags: [javascript]
---
*  目录
{:toc}

## Javascript对象是什么？

### 对象的定义

- 对象只是一组属性集合的容器,每个属性都有一个名称和一个值,javascript采用具有命名值属性的容器(对象)这一个概念作为叫javascript表达式值的构建块;

```js
    var student=new Object();
    student.living = true;
    student.age = 33;
    student.gender = 'male';

    console.log(student); 
    //输出Object {living: true, age: 33, gender: "male"} 
```

1. 由Object()构造函数创建的对象和通过string()构造函数创建的字符串对象没有太大的区别;
2. 所有的东西都可以是对象,包括通常不将其视为对象的值(即string字符串、数字num、布尔值)

```js
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

### 对象属性

#### 对象属性的创建(create)

##### 对象直接量

##### 通过new创建对象

##### 通过原型

##### 通过Object.create()

#### 对象属性的设置(set)

#### 对象属性的查找(query)

#### 对象属性的删除(delete)

#### 对象属性的检测(test)

#### 对象属性的枚举(enumerate)

### 对象的原型

### 对象方法

### 对象数组

- 使用push()方法将一个点添加到数组最后,使用shift()方法将一个数组中的第一个元素移除.


### 对象中的数组

```js
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

