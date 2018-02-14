/**
 * Created by Prairie on 2016/9/24.
 */
// window.onload= function () {
//     var Li1 = document.getElementById("li1");
//     var Li2 = document.getElementById("li2");
//     Li1.onmouseover = function () {
//         startMove(this,"opacity",100);
//     }
//     Li1.onmouseout = function () {
//         startMove(this,"opacity",30);
//     }
// }
// var timer=null;
var  alpha=30;
function getStyle(obj,attr) {
    if(obj.currentStyle)//针对IE浏览器
        return obj.currentStyle[attr];
    else {
        return getComputedStyle(obj,false)[attr];
    }//针对火狐浏览器
}
//startMove(obj,{attr1:itarget1,attr2:itarget2},fn)
function startMove(obj,json,fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag=true;
        for(var attr in json ) {
            //noinspection JSDuplicatedDeclaration
            var icur = 0;
            if (json[attr] == "opacity") {
                icur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                var icur = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr]- icur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (icur!= json.attr) {
                flag = false;
            }
            if (json.attr == "opacity") {
                    obj.style.filter = "alpha(opacity:" + (icur + speed) + ")";
                    obj.style.opacity = (icur + speed) / 100;
            } else {
                    obj.style[attr] = icur + speed + "px";
            }
        }
        if(flag){
            clearInterval(timer);
            if(fn){
                fn();
            }
        }
    },30)
}