---
layout: post
title: "javascript基础学习之基本概念"
date: 2015-03-14 12:20
categories: [javascript]
tags: [javascript]
---

####javascript基础学习之基本概念

#####一、语法
1. ECMA中的一切————变量、函数名和操作符————都区分大小写
2. 标识符:就是指变量、函数、属性的名字,或者函数的参数.标识符规定:
    - 第一个字符串必须是一个字母、下划线(__) 或一个美元符号($);
    - 其他字符可以是字母、下划线、美元符号或数字;
    * (最佳实践)采用的是驼峰大小写格式,也就是第一个字母小写,剩下的每个有意义的单词的首字母大写: firstSecond,myCar,doSomethingImport;
    * 不能把关键字、保留字、true、false和null用作标识符
3. //单行注释     /*  块级注释 */
4. ECMA全部关键字:
    ```  
    break  else  new  var  case  finally  return  void  catch  for  switch 
    while  continue  function  this  with  default  if  throw  delete  in
    try  do  instanceof  typeof    
    ```
5. ECMA保留字:
    ```
    
    ```
6. ######变量:
   * ECMA的变量是松散类型的,所谓松散类型就是可以用来保存任何类型的数据.
   * 每个变量仅仅是一个用于保存值的占位符而已.定义变量时要使用var操作符(关键字),后跟变量名(即一个标识符),  var  message;
   * `var  message;` 定义了一个名为message的变量,该变量可以用来保存任何值(像这样未经初始化的值————undefined).
   * ECMA也支持直接初始化变量,因此在定义变量的同时就可以设置变量的值: `var message= "hi"; `. 这样初始化变量并不会把它标记为字符串类型;初始化的过程就是给变量赋一个值这么简单;                 
   * 如果在函数中使用var定义一个变量,那么这个变量在函数退出后就会被销毁.
     ```
     function test(){
        var message = "hi";  //局部变量
     }
     test();
     alert(message);  //undefined  外部无法访问
     ```
     ** 变量message是在函数中使用var定义的，当函数被调用时，就会创建该变量并为其赋值，在此之后，这个变量又会被立即销毁;因此例子中的下一行代码就会导致错误. 不过可以省略var操作符，从而创建一个全局变量 **
     ```
     function test(){
        message = "hi";  //全局变量
     }
     test();
     alert(message);  // "hi"
     ```
     ** 虽然省略var操作符可以定义全局变量，但是不推荐，这样会造成局部作用域中定义的全局变量很难维护. **
   * 可以使用一条语句定义多个变量，只要像下面这样把每个变量（初始化或不初始化都可）用逗号分隔开即可:
     ```
     var message = "hi", found = false, age = 29;
     ```


#####二、数据类型
> ECMAScript有5种简单的数据类型(也称为基本数据类型):Undefined、Null、Boolean、Number和String、Object(本质上是由一组无序的名值对组成的).ECMAScript不支持任何创建自定义类型的机制.而所有值都将是上述6种数据类型之一.

1. __typeof操作符__ 
    用来检测给定变量的数据类型.对一个值使用typeof操作符可能返回下列某个字符串:
    - "undefined"————如果这个值未定义;
    - "boolean"——————如果这个值是布尔值;(true,false)
    - "string" ——————如果这个值是字符串;("string")
    - "number" ——————如果这个值是数值; (1,1.1,2.3)
    - "object" ——————如果这个值是对象或null;
    - "function" ————如果这个值是函数; (function)

2. __Undefined类型__

    *  Undefined类型只有一个值,即特殊的undefined.在使用var声明变量但未对其加以初始化时,这个变量的值就是undefined.

    `var message; alert(message == undefined); //true `

    *  一般而言,不存在需要显式地把一个变量设置为undefined值的情况.
    *  包含undefined的值的变量与尚未定义的变量还是不一样的.

    ```
    var message;           //这个变量声明之后默认取得了undefined值.
    //下面这个变量没有声明
    //var age;
    alert(message);        // "undefined"
    alert(age);            // 产生错误

    ``` 

    * 未初始化的变量执行typeof操作符会返回undefined值.而对未声明的变量执行typeof操作符同样也会返回undefined值.

    ```
    var message;
    //var age;
    console.log(typeof message);  // "undefined"
    console.log(typeof age);      // "undefined"
    ```

3. **Null类型**
    - Null也是只有一个值的数据类型,这个特殊的值是null.从逻辑角度来看,null值表示一个**空对象指针**,而这也正是typeof操作符检查null值时会返回"object"的原因.
    `var car=null;  console.log(typeof null); // "object" `
    * 如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值,
    ```
    if(car != null){
         //只要直接检查null值就可以知道变量car是否已经保存了一个对象的引用了.
    }
    ```
    * undefined值是派生自null值的,因此ECMA-262规定对它们的相等性测试要返回true;
    ` alert(null == undefined);  //true `
    * 只要意在保存对象的变量还没有真正保存对象,就应该明确让改变量保存null值.

4. **Boolean类型**
> 布尔值只有两个字面值: true和false;  这两个值与数字值不是一回事,因为true不一定是1,而false不一定等于0.

    * Boolean类型的字面值是**区分大小写**的,也就是True和False都不是Boolean值,只是标识符而已.
    * ECMAScript中所有类型的值都可以转换为Boolean值,可以调用转型函数Boolean();
    ```
    var message = "hello,world!";
    var messageAsBoolean = Boolean(message);  //值为true
    ```

5. **Number类型**
    
6. **String类型**

7. **Object类型**

#####三、操作符


#####四、语句
1. if语句

2. 

#####五、函数

