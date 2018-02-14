
$(document).ready(function () {
	$("body").animate({
		'scrollTop':$(".header1").offset().top
	});
});
//创建div
var block = $("<div></div>");
$(".imgFade .content .titles").append(block);
$(block).css({
	'width': '200px',
	'height': '2px',
	'background-color': 'red',
	'position': 'absolute',
	'bottom': '0px'
});

$(".imgFade .content .titles p").on("mouseover",function () {
	//滑块
	$(block).animate({
		'left':200*$(this).data('index')+"px"
	});
	//图片淡入淡出
	$(".imgFade .content .images img").eq($(this).data('index')).fadeIn().siblings().fadeOut();
	
	
	
	
});