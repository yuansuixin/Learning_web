window.onload = function() {
	//捕捉拖拽事件
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	two.ondragstart = function(event) {
		//拖动开始
		console.log("开始");
	};
	two.ondrag = function(event) {
		console.log("移动")
	}
	two.ondragend = function(event) {
		console.log("完成");
	}

	one.ondragenter = function(event) {
		console.log("进去");
		event.preventDefault();
	}
	one.ondragover = function(event) {
		//		console.log("结束");
		event.preventDefault();
	}
	one.ondragleave = function(event) {
		console.log("离开");
		event.preventDefault();
	}
	one.ondrop = function(event) {
		console.log("放开");
		one.appendChild(two);
	}
}