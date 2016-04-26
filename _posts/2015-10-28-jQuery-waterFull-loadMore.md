---
layout: post
title: "jQuery-WaterFull-LoadMore"
date: 2015-10-28 23:20
categories: [jquery]
tags: [jquery,business]
---
*  目录
{:toc}

> [参考资料](http://www.aliog.com/17133.html)

### 一、业务需求

- 1.1 根据时间New和点赞数Hot排序;
- 1.2 用AJAX请求服务器JSON数据;
- 1.3 通过遍历插入数据到最后;
- 1.4 在加载前应该有“加载中”的动画提示
- 1.5 滚动滚动条,判断图片是否进入可视区域,同时执行“加载更多”,同样应该有“加载中”提示;
- 1.6 图片根据屏幕自适应布局,并且自动补全每行;
- 1.7 图片拥有图片信息和作者信息,带有可以点赞的AJAX调用功能,点赞以后＋1效果;

- 1.8 点击图片可以查看大图,图片浏览,左右切换,退出事件,支持键盘事件.
- 1.9 每张图片都拥有图片信息,作者信息,可以对单张图片进行评论,点赞,打赏


### 二、实现方法
    
#### 2.1 根据New和Hot排序
    
#### 2.2 Ajax加载数据

##### 2.2.1 模拟JSON数据代替ajax获取

##### 2.2.2 通过ajax的post方式获取json数据
    
    ```js
    //加载函数
    function loadMore(){
        $.ajax({
            ...
            success: function(data){
                if(data.errorData == 0){ //表示加载成功
                    $("#loading").fadeOut();  //加载动画隐藏
                    //加载完以后
                    if(data[i]==undefined){
                        $("#loading").fadeOut();
                        //显示已经到底了
                    }
                    
                    //先将加载的json数据封装到imgs数组中
                    
                }
            }
        });
    }
    ```

##### 2.2.3 在加载循环数据中,加入判断数据是否为空的条件,为空则隐藏loading.gif   
           
    ```js
        if(data[i]==undefined){
            $("#loading").fadeOut();
        }
    ```
          
#### 2.3 插入数据
    
> 以处可采用artTemplate模版引擎
        
```js
$.each({});

loadMore();  //执行加载函数
```
    
#### 2.4 瀑布流布局jquery.flexImage.js
    
      ```js
        function waterFull(){

        }
      ```
    
#### 2.5 滚动加载更多

> 滚动距离＋window高度 > 页面高度

```js
$(window).bind("scroll", function(){
    if($(this).scrollTop() + $(window).height() + 200 >= $(document).height() && $(this).scrollTop() > 200){
         $("#loading").fadeOut();  //加载动画
         loadMore();
    }
}
```

### 三、优化和注意事项
