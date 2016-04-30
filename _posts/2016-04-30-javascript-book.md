---
layout: post
title: "jQuery-Book"
date: 2016-04-30 13:20
categories: [javascript]
tags: [javascript]
---
*  目录
{:toc}

### 三天计划-重读javascript高程

|           | 第一天(4.30)  | 第二天(5.1) | 第三天(5.2) |
|:---------:|:------------:|:----------:|:-----------:|
| 1:00-5:30 |     看书     |           |              |
| 7:30-11:30 |     看书     |           |              |


---


## 7.函数表达式

### 7.2 闭包

> 当在函数内部定义了其他函数时,就创建了闭包,闭包有权访问其他函数内部的所有变量.

```
var fn = function(){
    var bar = "";
    function closure(){   //闭包
        return ;
    }
    
    return function(){   //闭包
        return closure; 
    }
}
```



### 7.3 


### 7.4 私有变量

#### 7.4.1 静态私有变量

#### 7.4.2 模块模式

### 7.5 小结
