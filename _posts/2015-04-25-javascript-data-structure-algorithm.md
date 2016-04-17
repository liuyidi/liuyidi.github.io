---
layout: post
title: "Javascript算法与数据结构描述"
date: 2015-03-14 12:20
categories: [javascript]
tags: [javascript,algorithm]
---

*  目录
{:toc}

### 数组

### 列表

### 栈

### 队列

### 链表
#### 1. 数组的缺点(相比于链表)

#### 2 .定义和设计链表
	> 链表是由一组“节点”组成的集合,每个节点都使用一个对象的引用指向它的后继,指向另一个节点的引用叫做“链”
    设计的链表包含两个类,Node类用来表示节点, LinkedList类提供了插入节点、删除节点、显示列表元素的方法,以及一些辅助方法;

    ```js
	/*Node类*/
	function Node(element){
		this.element = element;
		this.next = null;
	}
	/*LinkedList类的构造函数LList()*/
	function LList(){
		this.head = new Node("head");
		this.find = find;
		this.insert = insert;
		this.remove = remove;
		this.display = display;
	}
    ```

### 字典

### 散列

### 集合

--------------------------------------------------------------------

### 二叉树与二叉查找树

### 图与图算法

### 排序算法

### 检索算法

### 高级算法