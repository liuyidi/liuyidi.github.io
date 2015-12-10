---
layout: post
title: "Git学习指南"
date: 2015-01-09 14:20
categories: [Git]
tags: [git,tools]
---
> 参考资料: [Git Pro](https://git-scm.com/book/zh/v2/)

###Git的常用命令行



1. 查看远程分支    `$ git branch -a`	
2. 查看本地分支    `$ git branch`

3. 创建分支       `$ git branch test`
4. 切换分支       `$ git checkout master`
	
5. 删除分支       `$ git branch -d test`
6. 删除远程分支    `$ git push origin :test`
	
7. 推送本地分支到远程   `$ git push origin dev:dev`
8. 查看远程仓库        `$ git remote -v`
	
9. 从远程获取最新版本到本地
	
	`$ git fetch origin master`
	
	从远程获取最新到本地并新建一个分支
   
    `$ git fetch origin master:dev`
	
10. 比较本地与远程
	
	`$ git log -p master.. origin/master`
	
11. 把本地的与远程合并
	
	`$ git merge origin/master`

12. 要取消git add .操作，需要执行
13. 要撤销git commit操作,需要运行`--amend`,
    

15. **[必须]**添加.gitignore到git项目目录中去,可以忽略很多不用提交的文件

###第二部分: Git常见的错误解决方案
1. git add本地错误文件到暂缓区

    > 解决办法：执行`git reset HEAD filename`,可以取消暂存
    
2. 使用`git checkout -- filename` 可以撤销对文件的修改
   
3. git commit提交信息写错了或者遗漏了需要添加的文件
    
    > 解决办法：单纯执行`git commit --amend` 可以解决提交信息错误,
      [在没有push到远程或者其他的改变之前]添加新的提交内容: 先执行`git add forgetfile`,
      再执行`git commit --amend`：   
      
     ```
       $ git commit -m "init commit"
       $ git add xxx.md
       $ git commit --amend
     ```
   上面三个命令最终只会产生一个提交.

4. git commit提交错误文件到本地仓库(HEAD)中
    > 先执行 `git reset --hard <commit log>`可以回滚到commit的某一步,其中
      `git log`可以查看log日志。
      再执行`git push origin HEAD --force`
    
5. git删除远程分支 
> 如果一不小心把本地的临时分支dev push到server上去了,想要删除, 一开始用
`git branch -r -d origin/dev`不成功, 发现只是删除了本地对应该远程分支的track,那么正确的方式是:
`git push origin :dev`冒号前面的空格不能少,原理是把一个空分支push到server上去,相当于删除该分支.



###第三部分：多人协作的Git

###第四部分: github和gitlab配置SSH
- 1.在配置SSH的第一步，需要通过一下命令行生成ssh key

	`ssh-keygen -t rsa -C "xxxxxx@email.com`

	第一次使用ssh生成key,默认在～/根目录下生成.ssh生成id_rsa和id_rsa.pub两个文件，把id_rsa.pub中的内容复制到github或者gitlab的SSH中就好了。

- 2.在配置完其中一个以后，需要再次执行上面步骤，此时要给文件起另外的名字，比如id_rsa_github,这样能够保证github和gitlab不冲突

- 3.在config中建一个config文件，添加内容如下：


    # gitlab
	Host gitlab.com
    	HostName gitlab.com
    	PreferredAuthentications publickey
    	IdentityFile ~/.ssh/id_rsa

    # github	
	Host github.com
    	HostName github.com
    	PreferredAuthentications publickey
    	IdentityFile ~/.ssh/id_rsa_github



