/*  模板模式 */

/*立即执行的模块*/
(function(){
	/*构造函数Menubar*/
	var Menubar = function(){
    	this.el = document.querySelector('#sidebar ul');
    	this.state = 'allClosed';  //state=hasOpened
    	this.el.addEventListener('click',function(e){
    		e.stopPropagation();      //阻止事件冒泡
    	});
    	var self = this;
    	this.currentOpendMenuContent = null;
    	this.menuList = document.querySelectorAll('#sidebar ul>li');
        for(var i=0; i<this.menuList.length; i++){
        	this.menuList[i].addEventListener('click',function(e){
        		var menuContentEl = document.getElementById(e.currentTarget.id + '-content');
        		if(self.state === 'allClosed'){
        			console.log('打开' + menuContentEl.id);
        			self.state = 'hasOpened';
        			self.currentOpendMenuContent = menuContentEl;
        		}else {
        			console.log('关闭'+ self.currentOpendMenuContent.id);
        			console.log('打开' + menuContentEl.id);
        			self.state = 'hasOpened';
        			self.currentOpendMenuContent = menuContentEl;
        		}
        		
        	});
        }
    };
	/*构造函数Sidebar*/
	var Sidebar = function(eId,closeBarId){
		/*先申明一个状态*/
		this.state = 'opened';   
		/*获取Dom中的值*/
		this.el=document.getElementById(eId||'sidebar');
		this.closeBarEl=document.getElementById(closeBarId||'closebar');
		var self = this;
		/**/
		this.Menubar = new Menubar();
		/*添加事件监听*/
		this.el.addEventListener('click',function(event){
			if(event.target !==self.el){
				//console.log(this);
				self.triggerSwich();
			}
		});
	};
	/*添加原型*/
	Sidebar.prototype.close = function() {
		console.log('关闭sidebar');
		this.el.className = 'sidebar-move-left';
		this.closeBarEl.className = 'closebar-move-right';
		this.state = 'closed';
	};
	Sidebar.prototype.open = function() {
		console.log('打开sidebar');
		this.el.className = 'sidebar-move-right';
		this.closeBarEl = 'closebar-move-left';
		this.state = 'opened';
	}
    Sidebar.prototype.triggerSwich = function(){
    	if(this.state === 'opened'){
    		this.close();
    	}else{
    		this.open();
    	}
    }
    var sidebar = new Sidebar();

    
})();