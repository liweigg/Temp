$(function() {
	

	$('.nav_text').hover(function() {
			$(this).toggleClass("active")
		}, function() {
			$(this).toggleClass("active")
		})
		//小屏导航按钮
	$("#menu").on("click", function() {
		$(".nav_hidden").slideToggle()
	})
	$(".nav_hidden").on("click", function() {
		$(".nav_hidden").toggle()
	})

	//友情链接
	$(".footer a").hover(function() {
		var index = $(this).parents(".footer").find("a").index($(this))
		$(".footer .linkShow").eq(index).stop().fadeIn();
	}, function() {
		var index = $(this).parents(".footer").find("a").index($(this))
		$(".footer .linkShow").eq(index).stop().fadeOut();
	})
	
	function changCss() {
		if ($(window).width()<=800) {
			$("#menu").css({"display":'block'});
			$(".nav").css({
				"display":'none',
				});
				$(".nav_hidden").css({
					 'width': '145px'
				})	
				$(".nav_hidden a").css({
					'margin-left':0
				})	
		}else if($(window).width()>800){
			$("#menu").css({"display":'none'});
			$(".nav").css({"display":'block'});
			$(".nav_hidden").hide();

		}
	}
	changCss();
	$(window).on("resize",function  () {
		
		changCss();
		
	})
	
})