---
layout: post
title: "plupload直接上传到阿里云OSS"
date: 2016-03-15 12:20
categories: [javascript]
tags: [javascript]
---


#### 几点问题:

1. 上传到OSS前更换文件名

2. 分块上传到OSS

3. plupload上传的执行顺序
    - init: plupload初始化触发
    - PostInit: init初始化完成时触发
    - FilesAdded: 添加文件到上传队列时触发
    - BeforeUpload: 上传前触发
    - UploadFile: 开始上传文件后触发
    - UploadProgress: 会在文件上传过程中不断触发
    - FileUploaded: 当队列中的某一个文件上传完成后触发
    - Error: 当发生错误时触发
    - UploadComplete: 当上传队列中**所有文件都上传完成后**触发