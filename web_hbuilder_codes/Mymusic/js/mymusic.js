getData();
var musicArr = [];
var musicCongtroll = new MusicControll();

$(".porear").click(function() {
	musicCongtroll.preMusic();
});
$(".next").click(function() {
	musicCongtroll.nextMusic();
});
$(".pause").click(function() {
	musicCongtroll.pauseMusic();
});
$(".love").click(function() {
	if(localStorage.love) {

		//如果存在则移除
		localStorage.removeItem("love");
		alert("收藏已取消");
	} else {
		localStorage.love = true;
		alert("收藏成功");
	}

});

function getData() {
	$.getJSON("pbl.json", function(data) {
		//		console.log(data);
		for(var i = 0; i < data.length; i++) {
			var music = new MusicModel(data[i].img, data[i].musicName, data[i].name, data[i].num, data[i].src);
			musicArr.push(music);
		}
		//插入数据到view
		insertView();
	});
}

function insertView() {

	for(var i = 0; i < musicArr.length; i++) {
		//创建div
		var itemRow = $("<div class='music' data-index=" + i + "></div>");
		var itemImg = $("<img src=" + musicArr[i].img + " />");
		var itemtext = $("<p>" + musicArr[i].musicName+"---"+musicArr[i].name + "</p>");
//		var itemLove=$("<img src=" + +"/>")








		itemRow.append(itemImg);
		itemRow.append(itemtext);
		$(".musicbox").append(itemRow);

		//点击事件
		$(itemRow).click(function() {
			//添加点击样式
			$(this).addClass("playing");
			$(this).siblings().removeClass("playing");
			//切换音乐
			musicCongtroll.playingIndex = $(this).data("index");
			musicCongtroll.playMusic();

		});
	}
}

function MusicControll() {
	var myaudio = document.getElementById("audio");
	this.playingIndex = 0; //正在播放的歌曲的索引

	//播放方法
	this.playMusic = function() {
		console.log(this.playingIndex);
		$("audio").attr("src", musicArr[this.playingIndex].src);
		//更换左下角图片
		$(".left img").attr("src", musicArr[this.playingIndex].img);

		this.rangeChange();
	};

	//上一首
	this.preMusic = function() {
		console.log("上一首");
		if(this.playingIndex <= 0) {
			this.playingIndex = musicArr.length - 1;
		} else {
			this.playingIndex--;
		}
		$(".music").siblings().removeClass("playing");
		$(".music").eq(this.playingIndex).addClass("playing");
		//播放音乐
		this.playMusic();
	};
	//下一首
	this.nextMusic = function() {
		console.log("下一首");
		if(this.playingIndex >= musicArr.length - 1) {
			this.playingIndex = 0;
		} else {
			this.playingIndex++;
		}
		$(".music").siblings().removeClass("playing");
		$(".music").eq(this.playingIndex).addClass("playing");
		this.playMusic();

	};
	//暂停和播放
	//	var music=document.getElementsByClassName("pause");
	this.pauseMusic = function() {
		console.log("暂停");
		if(myaudio.paused) {
			myaudio.play();
			$(".pause img").attr("src", "img/stop.png");
		} else {
			myaudio.pause();
			$(".pause img").attr("src", "img/play.png");
		}
	};
	//进度条
	this.rangeChange = function() {
		myaudio.ontimeupdate = function() {
			console.log(this.currentTime);
			$(".range").val(this.currentTime);
			$(".range").attr("max", this.duration);
			//自动下一首
			if(this.currentTime == this.duration) {
				musicCongtroll.nextMusic();
			}
		};

	};
}

//相当于java中的基本类
function MusicModel(img, musicName, name, num, src) {
	this.img = img;
	this.musicName = musicName;
	this.name = name;
	this.src = src;
	this.num = num;
}

//登录注册页面
$("#login").click(function() {
	$(".hide-center").fadeIn("slow");
	$(".overCurtain").fadeIn("slow");
})
$("#close").click(function() {
	$(".hide-center").fadeOut("slow")
	$(".overCurtain").fadeOut("slow")
})