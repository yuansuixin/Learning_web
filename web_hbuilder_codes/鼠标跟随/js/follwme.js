var ball = document.getElementById("ball");
ball.mouseX = 0;
ball.mouseY = 0;
ball.speedX = 0;
ball.speedY = 0;
document.body.addEventListener("mousemove", function(event) {
	//	console.log(dsa);

	//	ball.style.left=event.x+"px";
	//	ball.style.top=event.y+"px";
	//	console.log(ball.offsetWidth);
	ball.mouseX = event.x;
	ball.mouseY = event.y;
});

setInterval(function() {
	//计算小球圆心
	var centerX = ball.offsetLeft + ball.offsetWidth * 0.5;
	var centerY = ball.offsetTop + ball.offsetHeight * 0.5;
	if(ball.mouseX > centerX) {
		ball.speedX = 2;
	} else if(ball.mouseX < centerX) {
		ball.speedX = -2;
	} else {
		ball.speedX = 0;
	}
	//x:判断指针x坐标和小球圆心x坐标作比较
	if(ball.mouseY > centerY) {
		ball.speedY = 2;
	} else if(ball.mouseY < centerY) {
		ball.speedY = -2;
	} else {
		ball.speedY = 0;
	}
	//y:判断指针y坐标和小球圆心y坐标作比较

	//给小球left和top赋值
	ball.style.left = ball.offsetLeft + ball.speedX + "px";
	ball.style.top = ball.offsetTop + ball.speedY + "px";
}, 50);