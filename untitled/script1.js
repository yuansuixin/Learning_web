/**
 * Created by Prairie on 2016/9/21.
 */
var data=["Phone5","Ipad","三星笔记本","佳能相机","惠普打印机","50元","1000元","2000"];
    timer=null;
    flag=0;

window.onload=function () {
    var play=document.getElementById("play"),
        stop=document.getElementById("stop");

    //开始抽奖
    play.onclick=playFun;
    stop.onclick=stopFun;
    
    //键盘事件
    document.onkeyup=function (event) {
        event=event || window.event;
        //看一下键码
        //console.log(event.keyCode);
        if(event.keyCode==13){
            if(flag==0){
                playFun();
                flag=1;
            }else{
                stopFun();
                flag=0;
            }
        }
    }
}

function playFun() {
    var that=this;
    var title=document.getElementById("title"),
        play=document.getElementById("play");
    clearInterval(timer);
    timer=setInterval(function () {
        var random=Math.floor(Math.random()*data.length);
        title.innerHTML=data[random];
    },50);
    play.style.background="#999";
}

function stopFun() {
    clearInterval(timer);
    var play=document.getElementById("play");
    play.style.background="#036";
}