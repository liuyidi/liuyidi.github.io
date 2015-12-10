---
layout: post
title: "深入理解setTimeout和setInterval的作用域和this指向"
date: 2015-11-21 07:20
categories: [javascript]
tags: [javascript]
---

###setTimeout

1. setTimtout放在最后执行.
```js
var a = 6;
setTimeout(function () {
    alert(a);
    a = 666;
}, 1000);
a = 66;
//最后的结果为 66
```

2. setTimeout中所执行函数中的this,永远指向window

```js
  var name = "liuyidi"; 
  var obj = {
    name : "liuren", 
    getName: function(){
       var self = this;
       setTimeout(function(){
            console.log(self);   //obj
            console.log(this);  // window
            console.log(self.name);   //liuren
            console.log(this.name);   //liuyidi
       },0);
    }
  };
  obj.getName();
```