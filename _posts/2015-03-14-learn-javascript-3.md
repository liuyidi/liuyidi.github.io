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
     *虽然省略var操作符可以定义全局变量，但是不推荐，这样会造成局部作用域中定义的全局变量很难维护.*
   * 可以使用一条语句定义多个变量，只要像下面这样把每个变量（初始化或不初始化都可）用逗号分隔开即可:
     ```
     var message = "hi", found = false, age = 29;
     ```

