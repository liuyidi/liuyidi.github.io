
"use strict";

function $(id){
	return document.getElementById(id);
}

/**
 * 计算
 */
function calculate(){
	//查找文档中用于输入输出的元素
	var amount = $("amount"),                //借款总额
	    apr = $("apr"),                      //还款利率
	    years =$("years"),                   //偿还期限
	    zipcode =$("zipcode"),               //
	    payment = $("payment"),              //月付
	    total = $("total"),                  //总共需付
	    totalinterest = $("totalinterest");  //总利息

	//分别为借款总额、月利率、月期限
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value) / 100 / 12;
    var payments = parseFloat(years.value) * 12;

    //现在计算月度赔付的数据: 等额本息法
    //月还款=a×i×（1+i）^n÷〔（1+i）^n－1〕
    // 1w 12% 3year  10000*1%*(1+1%)^36 /( (1+1%)^36 - 1)     
    var x = Math.pow(1 + interest,payments);   //Math.pow()进行幂等运算.40802
    var monthy = (principal * x * interest) / (x-1);

    if(isFinite(monthy)){
    	payment.innerHTML = monthy.toFixed(2);
    	total.innerHTML = (monthy * payments).toFixed(2);
    	totalinterest.innerHTML = ((monthy * payments) - principal).toFixed(2);

    	//将用户的输入数据保存下来,这样在下次访问时也能取到数据.
    	save(amount.value, apr.value, years.value, zipcode.value);

    	//找到并展示本地贷款人,当忽略网络错误.
    	try{
    		getLenders(amount.value, apr.value, years.value, zipcode.value);
    	}catch(e){
    		//忽略这些异常
    	}

    	//最后用图表展示贷款余额、利息和资产收益、月期限
    	chart(principal, interest, monthy, payments);
    }else{
    	payment.innerHTML = " ";
    	total.innerHTML = " ";
    	totalinterest.innerHTML = " ";
    	chart();                 //不传参数的话就是清楚图表
    }
}

/**
 * 将用户的属性保存到localStorage对象的属性中
 */
function save(amount, apr, years, zipcode){
	if(window.localStorage){
		localStorage.loan_amount = amount;
		localStorage.loan_apr = apr;
		localStorage.loan_years = years;
		localStorage.loan_zipcode = zipcode;
	}
}

/**
 * 在文档首次加载时,将会尝试还原输入字段
 */
window.onload = function(){
 	if(window.localStorage && localStorage.loan_amount){
 		$("amount").value = localStorage.loan_amount;
 		$("apr").value = localStorage.loan_apr;
 		$("years").value = localStorage.loan_years;
 		$("zipcode").value = localStorage.loan_zipcode;
 	}
}

/**
 * 将用户的输入输出发送至服务器端脚本HTTP AJAX
 * 这个例子并没有实现查找放贷人的服务.但如果该服务存在,该函数会使用它
 */
function getLenders(amount, apr, years, zipcode){
	if(!window.XMLHttpRequest){
		return false;
	}

	var ad = $("lenders");
	if(!ad){
		return false;
	}
	//将用户的输入数据进行URI编码,并作为查询参数附加在URI里
	var url = "getLenders.php" + "?amt=" + encodeURIComponent(amount) +
	                             "&apr=" + encodeURIComponent(apr) +
	                             "&yrs=" + encodeURIComponent(yrs) +
	                             "&zip=" + encodeURIComponent(zipcode);
	//通过XMLHttpRequest对象来提取返回数据
	var req = new XMLHttpRequest();
	req.open("GET",url);
	req.send(null);

	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			var response = req.responseText;
			var lenders = JSON.parse(response);  //将其解析为JS数组

			//将数组中的放贷人对象转换为HTML字符串形式
			var list = "";
			for(var i = 0; i<lenders.length; i++){
				list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + "</a>";
			}

			ad.innerHTML = "<ul>" + list + "</ul>";
		}
	}
}

/**
 * 画图
 * 在HTML<canvas>元素中用图表展示月度贷款余额、利息和资产收益
 * 如果不传入参数的话,则清空之前的图表数据
 */
function chart(principal, interest, monthy, payments){
     var graph = $("graph");  // 得到<canvas>标签
     graph.width = graph.width;  // ????    清除画布并重置画布

     //如果不传入参数,或者浏览器不支持画布,则直接返回
     if(arguments.length == 0 || !graph.getContext){
     	return false;
     }
     //获取画布元素的"context"对象,所有的绘画操作都是基于这个对象
     var g = graph.getContext("2d");
     var width = graph.width,
         height = graph.height;         //获取画布大小

     //这里的函数作用是将付款数字和美元数据转换为像素
     function paymentToX(n){
     	return n * width/payments;
     }
     function amountToY(a){
     	return height - (a * height /(monthy * payments * 1.05));
     }

     //付款数据是一条从(0,0)到(payments,monthy*payments)的直线
     //从左下方开发,绘制从右上方,再到右下方
     g.moveTo(paymentToX(0), amountToY(0));  
     g.lineTo(paymentToX(payments), amountToY(monthy*payments));
     g.lineTo(paymentToX(payments), amountToY(0));
     g.closePath();            //将结尾连接至开头
     g.fillStyle = "#f88";
     g.fill();
     g.font = "bold 12px sans-serif";
     g.fillText("Total Interest payments", 20, 20);

     //很多资产数据并不是线性的,很难将其反映至图表中
     var equity = 0;
     g.beginPath();                            //开始绘制新图形
     g.moveTo(paymentToX(0), amountToY(0));    //从左下方开始
     for(var p = 1; p<= payments; p++){
     	//计算出每一笔赔付的利息
     	var thisMonthsInterest = (principal - equity) * interest;
     	equity += (monthy - thisMonthsInterest);  //得到资产额
     	g.lineTo(paymentToX(p), amountToY(equity));
     }
     g.lineTo(paymentToX(payments), amountToY(0));
     g.closePath();            //将结尾连接至开头
     g.fillStyle = "green";
     g.fill();
     g.fillText("Total Equity", 20, 35);

     //再次循环,余额数据显示为黑色粗线条
     var bal = principal;
     g.beginPath();                            //开始绘制新图形
     g.moveTo(paymentToX(0), amountToY(bal));    //从左下方开始
     for(var p = 1; p<= payments; p++){
     	//计算出每一笔赔付的利息
     	var thisMonthsInterest = bal * interest;
     	bal -= (monthy - thisMonthsInterest);  //得到资产额
     	g.lineTo(paymentToX(p), amountToY(bal));
     }
     g.lineWidth = 3;
     g.stroke();
     g.fillStyle = "black";
     g.fillText("Loan Balance", 20, 50);


    //将年度数据在X轴做标记
    g.textAlign = "center";
    var y = amountToY(0);
    for(var year = 1; year*12<=payments; year++){
    	var x = paymentToX(year * 12);
    	g.fillRect(x-0.5, y-3, 1, 3);
    	if(year == 1){
    		g.fillText("Year", x, y-5);
    	}
    	if(year%5 == 0 && year*12 !== payments){
    		g.fillText(String(year), x, y-5);
    	}
    }
    //将赔付数额标记在右边界
    g.textAlign = "right";
    g.textBaseline = "middle";
    var ticks = [monthy*payments, principal];
    var rightEdge = paymentToX(payments);
    for(var i = 0; i<ticks.length; i++){
    	var y = amountToY(ticks[i]);
    	g.fillRect(rightEdge-3, y-0.5, 3, 1);
    	g.fillText(String(ticks[i].toFixed(0)), rightEdge-5, y);
    }
}