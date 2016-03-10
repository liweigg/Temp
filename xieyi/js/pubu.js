$.fn.extend({
	pubu: function(imgs, cols) {
		//防止this指向错误,先保存
		
		var mainObj = $(this);
		//引入css
		$("head").append('<link rel="stylesheet" type="text/css" href="css/pubuliu.css"/>')
			//结构组建

		//逻辑编写
		changeCols();
		var padding = 10;
		//根据想要的列数来获取图片的宽度-减去padding
		ImgWidth = ($(window).width()) / cols - 10
	
		//定义一个数组来储存每列li的高,初始化都为0,这里需要4列
		var arrT = [];
		for (var j = 0; j < cols; j++) {
			arrT[j] = 0;
		}
		//定义一个来记录加载的个数
		var loading = -1;
		//建立一个新数组来存放加载好后的图片
		var newobjs = [];
		
		for (var i=0;i<imgs.length;i++) {
			var newI = new Image();
			//IE八要把这个写在onload的之后
			newI.src = imgs[i]
			newI.onload = function  () {	
			loading++;
			newobjs.push(this); //将加载完的图片推入数组
			console.log(newobjs[loading].src)
			var lis = $('<li><img src=' + newobjs[loading].src + '><div><a href="###"></a><span><img src="img/fangda.png"/></span></div></li>')
			mainObj.append(lis);
				
			//定义最后一次插入的那张
			var lastImg = $("#example li>img").last()
			console.log($("#example li>img").size())
			lastImg.css({
				"width": ImgWidth,
			})
			//因为之前已经预加载了,所以这里能获取到插入图片个高
			//根据图片的宽来获取与之匹配的高,将其赋值给父级,这样父级就有宽高了
			var NowImgH = lastImg.height()
				//用Math.min方法来获取数组中最小的那个值,indexOf不兼容IE8
//			var min = Math.min.apply(Math, arrT);
//			var minIndex = arrT.indexOf(min);
			var min = arrT[0];
			var minIndex = 0;
			for (var j = 0; j < arrT.length; j++) {
			if (min > arrT[j]) {
				min = arrT[j];
				minIndex = j;
			}
			}
			lis.css({
				"top": arrT[minIndex],
				"left": minIndex * (ImgWidth + padding),
			})
				
			// 现在最小的下标对应的那个值自身加上固定的高和padding
			//把它自己的高和padding加入这个下标对应的值,下个循环它就不是最小的下标了
			arrT[minIndex] += (NowImgH + padding);
			
			mainObj.css({
//						height:mainObj.find("li").last().position().top+mainObj.find("li").last().height()
						height:arrT[minIndex]
					})
			
			console.log("里面"+mainObj.height())
				//加载完成加上蒙版
			 if (loading >= imgs.length-1) {
//			 	alert("a")
					mask ();
			 }
		
				
			}
			newI.src = imgs[i]
			
		}
		
		function mask () {
//			
					//鼠标移到蒙版上去的效果
					$("#example>li").hover(function() {
					var index = $(this).index()
					$("#example li div").eq(index).stop().fadeIn();
					}, function() {
					var index = $(this).index()
					$("#example li div").eq(index).stop().fadeOut()	
					})
					
					//鼠标点击蒙版的效果
					$("#example span").on("click",function  () {
					var index = $(this).parents("#example").find("span").index($(this))
					//为了让蒙版出现的图片适应屏幕的大小,这里先计算原图的大小,然后再根据屏幕计算出蒙版图片的宽高比
//					先判断高和宽的长度哪个长,以较短的那个为参照对象确定宽
					var Imgscale =0;
					var maskImgWidth=0;
					if ($(window).width()>$(window).height()) {
						 Imgscale = $("#example li>img").eq(index).width()/$("#example li>img").eq(index).height()
						 maskImgWidth = $(window).height()*0.8*Imgscale
					}if ($(window).width()<$(window).height()) {
						 maskImgWidth = $(window).width()*0.8
					}
					
				 	//点击显示
					$("#mask").show()
					$("#mask").css({
						"width":$(window).width(),
						"height":$(window).height(),
						"cursor": 'pointer'
					})
					//把对应的图片的路径插入到蒙版里
					$("#mask img").attr({
						"src":$("#example li>img").eq(index).attr("src")
					})
					
					$("#mask img").animate({
						width:maskImgWidth
					})
					
				})
				//再点击蒙版让他消失	
				$("#mask").on("click",function () {	
					$("#mask img").animate({
						width:"0"
					},function  () {
						$("#mask").hide()
					})
					
				})
					
		}

		function  changeCols() {
			if ($(window).width() <= 500) {
				cols = 2;
			} else {
				cols = 4;
			}
	 	  ImgWidth = ($(window).width()) / cols - padding
		}
		
		$(window).on("resize", function() {
			
			changeCols();
				//			定义一个数组来储存每个li的高
			var arrT = [];
			//窗口改变后先确定一行的个数
			for (var j = 0; j < cols; j++) {
				arrT[j] = 0;
			}
			for (var i = 0; i < imgs.length; i++) {
				var lastImg = $(mainObj).find("li>img")
				lastImg.eq(i).css({
					"width": ImgWidth,
				})

				var NowImgH = lastImg.eq(i).height()
					//用Math.min方法来获取数组中最小的那个值,indexof不兼容IE8
//				var min = Math.min.apply(Math, arrT);
//				var minIndex = arrT.indexOf(min);
				
				var min = arrT[0];
				var minIndex = 0;
				for (var j=0;j<arrT.length;j++) {
					if (min>arrT[j]) {
						min = arrT[j];
						minIndex = j;
					}
				}
				var lis = $(mainObj).find("li")
				lis.eq(i).css({
						"top": arrT[minIndex],
						"left": minIndex * (ImgWidth + padding)
					})
				
					// 现在最小的下标对应的那个值自身加上固定的高和padding
					//把它自己的高和padding加入这个下标对应的值,下个循环它就不是最小的下标了
				arrT[minIndex] += (NowImgH + padding);
				
				mainObj.css({
					//最后一个LI距离顶部的距离加上自身的高就是UL的高
						height:mainObj.find("li").last().position().top + mainObj.find("li").last().height()
					})
				
			}

		})

	}
})