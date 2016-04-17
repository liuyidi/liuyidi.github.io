---
layout: post
title: "Markdown学习笔记"
date: 2014-11-01 20:20
categories: [markdown]
tags: [tools]
---

#### 一、Submit Text2中Markdown的安装

1. 安装Package Control
   * 按Ctrl+\` 打开console
   * 粘贴下面的代码到console并回车
   * 重启Sublime Text2.
   
   > import urllib2,os;pf='Package Control.sublime-package';ipp=sublime.installed_packages_path();os.makedirs(ipp) if not os.path.exists(ipp) else None;open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
   
   
2. 安装Markdown Preview
   * 按Ctrl + Shift + P
   * 输入pci 后回车(Package Control: Install Package)
   * 输入Markdown Preview回车
3. 编辑
   * 按Ctrl+N新建一个文档
   * 按Ctrl+Shift+P
   * 使用Markdown语法编辑文档
   * 语法高亮,输入ssm后回车(Set Syntax:Markdown GFM)
4. 在浏览器预览Markdown文档
   * 按Ctrl+shift+P
   * 输入mp后回车(Markdown Preview:Preview in Browser)
   * 此时就可以在浏览器里看到刚才编辑的文档了


#### 二、Markdown基础语法

- 使用" \*\* " 或 " \__ " 包裹文本产生strong效果: **强调**    __文本__
- 使用" * "或 "_" 包裹文本产生**斜体**效果:  *斜体*      
* __标题(h1~h6)格式__ 为使用相应个数的"#"作前缀,比如以下代码表示h3:   

    >  “### this is a level-3 header ###”

* 使用">"作为段落前缀来标识引用文字段落,这其实是email中标记引用文字的标准方式:

    >  引用了此段内容

* 使用"*"、"+"、"-"来表示 __无序列表__ ; 使用数字加“.”表示**有序列表**

    >  1. list item 1    
    >  2. So I should be item 2

* **代码**:  可以使用四个空格生成,也可以使用
   >  \`   或者 ```
* **图片**:  
   ``` ![ text ]( http://xxx.com/path/to/img.jpg "title")```
   
    > - 一个惊叹号！
    > - 接着一个方括号,里面放上图片的替代文字
    > - 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的’title’文字.

* **链接**:

    >    This is [an example](http://example.com/ "Title") inline link.
         如果你是要链接到同样主机的资源，你可以使用相对路径：See my [About](/about/) page for details.