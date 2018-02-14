var catID;//定时器id
//初始化点击事件
window.onload=function  () {
	document.getElementById("cymbal").onclick=function () {
		startAnim("cymbal",13);
	};
	document.getElementById("drink").onclick=function () {
		startAnim("drink",81);
	};
}               
//播放动画方法
function startAnim (name,count) {
	var cat=document.getElementById("cat");
	var index=-1;//存储图片索引
	clearInterval(catID);
	catID=setInterval(function () {
//		debugger
		console.log(index);
		if(++index<count){
			cat.src=getImgPath(name,index);
		}else{
			clearInterval(catID);
		}
	},100);
}

function getImgPath (name,index) {
	if (index<10) {
		index="0"+index;
	} 
	return "img/Animatons/"+name+"/"+name+"_"+index+".jpg";
}