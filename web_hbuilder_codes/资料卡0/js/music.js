function musicctrl() {
	var music = document.getElementById("myaudio");
	var musicimg = document.getElementById("musicimg");
	    console.log(music);
	if (music.paused) {
		//播放
		music.play();
		musicimg.src="img/musicBtnOff.png";
	} else{
		music.pause();
		musicimg.src="img/musicBtn.png";
	}
}