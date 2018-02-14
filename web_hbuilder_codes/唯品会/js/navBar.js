//点击效果
$(".navBar  a").click(function () {
	 $(this).siblings().removeClass("currentPage");
	 $(this).addClass("currentPage");
});
//滚动效果
var down=false;//记录是否已经下来
$(window).on("scroll",function () {
	if ($(this).scrollTop()>=200) {
		//执行动画
		$(".navBar").css({
			'position':'fixed',
			'z-index':99
		});
		if(!down){
			$(".navBar").css({
				'top':'-40px'
			});
			
			$(".navBar").animate({
				'top':'0'
			},800);
			down=true;
		}
	} 
	if ($(this).scrollTop()<=160) {
		$(".navBar").css({
			'position':''
		});
		down=false;
		
	}
	
})
