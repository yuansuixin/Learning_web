//加载
var currentImg = 1;
var imges = $(".imgScroll img");
var count = imges.length;

for(var i = 0; i < imges.length; i++) {
	//处理样式，左中右
	if(i == 0) {
		$(imges[i]).css({
			'width': '25%',
			'height': '70%',
			'top': '15%',
			'left': '0'
		});
	} else if(i == 1) {
		$(imges[i]).css({
			'top': '0',
			'width': '50%',
			'height': '100%',
			'left': '25%',
			'z-index': count
		});
	} else {
		$(imges[i]).css({
			'width': '25%',
			'height': '70%',
			'top': '15%',
			'left': '75%',
			'z-index': count - i
		});
	}
}

//创建两个按钮
var leftBtn = $("<div class='leftBtn'></div>");
var rightBtn = $("<div class='rightBtn'></div>");
$(".imgScroll").append(leftBtn);
$(".imgScroll").append(rightBtn);
$(leftBtn).click(function() {
	$(imges[currentImg]).animate({
		'width': '25%',
		'height': '70%',
		'left': '75%',
		'top': '15%'
	});
	$(imges[currentImg]).css({
		'z-index':count-currentImg
	})
	currentImg--;
	$(imges[currentImg]).animate({
		'top': '0',
		'width': '50%',
		'height': '100%',
		'left': '25%',
		'top': '0%'
	});
	$(imges[currentImg]).css({
		'z-index': count
	});
});

$(rightBtn).click(function() {
	//向左移动当前img
	$(imges[currentImg]).animate({
		'width': '25%',
		'height': '70%',
		'top': '15%',
		'left': '0'
	});
	//修改当前图片的层级
	$(Image[currentImg]).css({
		'z-index': currentImg + 1
	});

	currentImg++;
	//把右边的图片呢移动到中间
	$(imges[currentImg]).animate({
		'width': '50%',
		'top': '0',
		'height': '100%',
		'left': '25%',
		'z-index': count
	});
	$(imges[currentImg]).css({
		'z-index': count
	});
});