---
layout: post
title: "javascript基础学习之引用类型"
date: 2015-03-16 10:20
categories: [javascript]
tags: [javascript]
---

#####变量
> JavaScript的变量与其他语言的变量有很大区别,JavaScript变量松散类型的本质,决定了它**不存在定义某个变量时必须要保存何种数据类型的规则**.



#####引用类型
> 引用类型的值(对象)是引用类型的一个实例.新对象是使用new操作符后跟一个构造函数来创建的,构造函数本身是一个函数,只不过该函数是出于创建新对象的目的而定义的.

``` 
    var person = new Object();
   //这行代码创建了Object引用类型的一个新实例,然后把该实例保存在了变量person中,
   使用的构造函数是Object,它只为新对象定义了默认的属性和方法;

```

1. Object类型

    * 创建Object实例的方式有两种,第一种是使用new操作符后跟Object构造函数.
    ```
    var person = new Object();
    person.name = "liuyidi";
    person.age = 22;
    ```
    * 另一种方式就是使用**对象字面量**
    表示法,对象字面量是对象定义的一种简写形式,目的在于简化创建包含大量属性的对象的过程.
    ```
    var person = {
        name : "liuyidi",
        age  : 22
    };

    与上述的方式等价;
    var person = {};  //与new Object()相同
    person.name = "liuyidi";
    person.age = 29;

    ----
    function displayInfo(args){
        var output = "";

        if(typeof args.name == "string"){
            output += "Name:"+ args.name + "\n";
        }

        if(typeof args.age == "number"){
            output += "Age: " + args.age + "\n";
        }
        console.log(output);
    }

    displayInfo({
        name: "liuyidi",
        age : 22
    });

    //console.log
        Name:liuyidi
        Age: 22
    ```
    * 一般访问对象属性都是使用**点表示法**,在javascript中也可以使用方括号表示法来访问对象的属性.

2. Array类型

    > ECMAScript数组也是数据的有序列表，ECMAScript数组的每一项可以保存任何类型的数据. 也就是说可以用数组的第一个位置来保存字符串,用第二位置来保存数值,用第三个位置来保存对象,以此类推.而且ECMAScript数组的大小是可以动态调整的,即可以随着数据的添加自动增长以容纳新增数据.

    - 创建数组的基本方式有两种,第一种是使用Array构造函数

     ```
      var colors = new Array(); 
      //也可以预先设置数组要保存的项目数量
      var colors = new Array(20);  每一项的初始值都是undefined.
      var colors = new Array("red","blue","green");
     ```

    - 创建数组的第二种方式:

     ```
      var colors = ["red","blue","green"];
      var names = [];
      console.log(colors.length);  //3
      console.log(names.length);   //0
     ```

    - 利用length属性可以方便地在数组末尾添加新项.

     ```
     ###减少一项
      var colors = ["red","blue","green"];
      colors.length = 2;
      console.log(colors[2]);  //undefined
     ###增加一项
      var colors = ["red","blue","green"];
      colors.length = 4;
      console.log(colors[3]);
     ```
    
    - **Array中的栈和队列方法**

      > 栈是一种LIFO(last-in-first-out后进先出)的数据结构,也就是最新添加的项最早被移除.而栈中项的插入(叫做推入push)和移除(叫做弹出pop),只发生在栈的顶部.
      > push()方法可以接收任意数量的参数,把它们逐个添加到数组末尾,并返回修改后数组的长度,而pop()方法则从数组末尾移除最后一项,减少数组的length值,然后返回移除的项.

    ```
      var colors = new Array();
      var count = colors.push("red","green");
      console.log(count);   //2
      count = colors.push("black");       //推入另一项
      console.log(count);   //3

      var item = colors.pop();            //取得最后一项
      console.log(item);    //"black"
      console.log(colors.length);   //2
    ```
      > 队列数据结构的访问规则是FIFO(first-in-first-out,先进先出),队列在列表的末端添加项,从列表的前端移除项.用shift()移除数组中的第一个项并返回该项,同时数组长度减1; 从数组末端添加项任然用push();

    ```
      var colors = new Array();
      var count = colors.push("red","green");
      console.log(count);  //2
      count = colors.push("black");
      console.log(count);

      var item = colors.shift();  //取得第一项 red
      console.log(item);          // "red"
      console.log(colors.length);  
    ```
      > ECMAScript还为数组提供了一个unshift()方法, 能在数组前端添加任意个项并返回新数组的长度.使数组长度加1;

3. Date类型
    
     

4. RegExp类型

     > RegExp类型是ECMAScript支持正则表达式的一个接口,提供了最基本的和一些高级的正则表达式.


6. 基本包装类型

7. 内置对象
    * Global对象

    * Math对象