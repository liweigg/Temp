$(function() {
	$('.nav_text').eq(3).css({
		'color': 'white',
		'border': '1px solid white'
	})
	$('.nav_hidden .nav_text').eq(3).css({
		'color': 'white',
		'border': '1px solid white'
		})
	
	var Nowtriangle = $("#content .triangle_mask>img:nth-child(2n)")
	Nowtriangle.hide();


	$("#content li").hover(function() {
		var index = $(this).index();
		Nowtriangle.eq(index).show();
		console.log(index)
	}, function() {
		var index = $(this).index()
		Nowtriangle.eq(index).hide();

	})

	function changCss() {
		if ($(window).width() < 700) {
			$("#content").css({
				"margin-top": "10px"
			})
			$("#content li").width("49%");
			$("#content li").css({
				"margin": "0 0.5% 5px"
			})
			$("#mask").css({
				'height':'50px',
				"font-size":'20px',
				"line-height":'50px'
			})
		}
		if ($(window).width() > 700) {
			$("#content").css({
				"margin-top": "32px"
			})
		$("#content li").width("32.33%");
		$("#content li").css({
			"margin": "0 0.5% 10px",
//			"margin-bottom": "10px"
		})
		$("#mask").css({
				'height':'103px',
				"font-size":'30px',
				"line-height":'103px'
			})
	}
}

changCss();
$(window).on("resize", function() {
	changCss();
})




//插入图片

//var imgArr = ['img/animate_img1.png', 'img/animate_img2.png', 'img/animate_img3.png', 'img/animate_img4.png', 'img/animate_img.png5',
//	'img/animate_img6.png', 'img/animate_img7.png', 'img/animate_img8.png', 'img/animate_img9.png',
//]
//var loading = 0;
//function appendImg(loading) {
//	var lis = $("<li><img src=" + imgArr[loading] + "/></li>");
//	$("#content").append(lis);
//	var imgWidth = $("#content").width() / 3 - 5;
//	$("#content li>img").width(imgWidth)
//
//}
//function imgLoad() {
//	var imgObj = new Image;
//	imgObj.src = imgArr[loading];
//	imgObj.onload = function() {
//		if (loading < imgArr.legnth) {
//			//推入
//
//			loading++;
//			imgLoad();
//		}
//		if (loading >= imgArr.legnth) {
//
//		}
//
//	}
//}

})