/**
 * Created by Prairie on 2016/9/22.
 */
window.onload=function () {
    var oDiv=document.getElementById("div1");
    oDiv.onmousemove=function () {
        startMove(0);
    }
    oDiv.onmouseout=function () {
        startMove(-200);
    }
}

var timer=null;
function startMove(iTgrget) {
    clearInterval(timer);
    var oDiv=document.getElementById("div1");
    setInterval(function () {
        var speed=0;
        if(oDiv.offsetLeft>iTgrget){
            speed=-10;
        }else {
            speed = 10;
        }
        if(oDiv.offsetLeft==iTgrget){
            cleanInterval(timer);
        }else{
            oDiv.style.left=oDiv.offsetLeft+speed+"px";
        }
    },30);
}

