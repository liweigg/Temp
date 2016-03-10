$(function  () {
	$('.nav_text').eq(2).css({
		'color': 'white',
		'border': '1px solid white'
	})
	$('.nav_hidden .nav_text').eq(2).css({
		'color': 'white',
		'border': '1px solid white'
		})
var bannerImg = $("#banner img")

$("#round span").eq(0).addClass("round_yellow")
bannerImg.eq(0).css("opacity",1)


//banner 栏
window.onresize = function  () {
var imgWidth = $(window).width()
bannerImg.width(imgWidth)
var imgHeight = bannerImg.height()
$("#banner").height(imgHeight)

}
window.onload = function  () {
	var imgWidth = $(window).width()
bannerImg.width(imgWidth)
var imgHeight = bannerImg.height()
$("#banner").height(imgHeight)
}

var timer = null;
var lastindex = 0
var ShowTimer = null;
function  opaShow(obj) {
	var h=0;
	clearInterval(ShowTimer)
	ShowTimer =setInterval(function  () {
		h+=0.1
		if (h>=1) {
		clearInterval(ShowTimer)
		h=1
	}
		obj.css("opacity",h)
	},30)
	
	
}
var HideTimer = null;
function  opaHide(obj) {
	var t=1;
	clearInterval(HideTimer)
	HideTimer = setInterval(function  () {
		t-=0.1;
		if (t<=0) {
		clearInterval(HideTimer)
		t=0
		}
		obj.css("opacity",t)
	},30)
	
	
}


function bannerMove () {
	timer = setInterval(function  () {
	index++
	if (index>=$("#round span").size()) {
		index=0
	}
	$.each($("#round span"),function  (index,el) {
		
		$(el).removeClass("round_yellow");
//		bannerImg.eq(lastindex).hide()
		
	})
	$("#round span").eq(index).addClass("round_yellow")
//	bannerImg.eq(index).show()
	opaHide(bannerImg.eq(lastindex))
	opaShow(bannerImg.eq(index))
	lastindex = index;
	
},2000)
}
var index = 0
$("#round span").on("click",function  () {
	clearInterval(timer)
	 index = $(this).index()
	$.each($("#round span"),function  (index,el) {
		
		$(el).removeClass("round_yellow");
//		bannerImg.eq(index).hide(500)
	})
	opaHide(bannerImg.eq(lastindex))
	opaShow(bannerImg.eq(index))
	$(this).addClass("round_yellow")
//	bannerImg.eq(index).show()
	lastindex = index;
	clearInterval(timer)
	timer = setTimeout(function  () {
		bannerMove ();
	},2000)
})

bannerMove ();
//Swiper 插件写法更简单
// var swiper = new Swiper('.swiper-container',{
//  		loop:true,
//  		effect : 'fade',
//  		pagination : '.swiper-pagination',
////  		direction: 'vertical',
//  		autoplay:2000
//  });
//示例栏
var imgArr = ["img/example.png","img/example2.png","img/example3.png","img/example4.png","img/example5.png","img/example6.png","img/example7.png","img/example8.png","img/example9.png","img/example10.png",
"img/example4.png","img/example2.png","img/example3.png","img/example4.png","img/example5.png","img/example6.png"]
//进入瀑布流插件
$("#example").pubu(imgArr,4)
console.log($("#example").height())
//当鼠标放上去时候,让蒙版出来
//$(window).on("load",function  () {
//	alert($("#example>li").size())
//$("#example>li").hover(function  () {
//	$("#example li div").fadeToggle()
//},function  () {
//	$("#example li div").fadeToggle()
//}
//)
//})











})