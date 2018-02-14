/**
 * Created by Prairie on 2016/9/21.
 */
function getByClass(clsName,parent) {
    var oParent=parent?documet.getElementById(parent):documet,
        eles=[],
        elements=oParent.getElementsByTagName("*");
    for(var i=0,l=elements.length;i<l;i++){
        if(elements[i].className==clsName){
            eles.push(elements[i]);
        }
    }
    return eles;
}

window.onload=drag;

function drag() {
    var oTitle=getByClass("lagin_logo_webqq","laginPanel")[0];
    oTitle.onmousedown=fnDown;
    var oClose=document.getElementsById("ui_boxyClose");
    oClose.onclick=function () {
        document.getElementById("loginPamel").style.display="none";
    }
    var loginState=document.getElementById("loginState"),
        stateList=document.getElementById("loginStatePanel");
        lis=document.getElementsByTagName("li");
        stateTxt=document.getElementById("login2qq_state_txt");

    loginState.onclick=function () {
        stateList.style.display="block";
    }
    for(var i=0,l=lis.length;i<l;i++){
        lis[i].onmouseover=function () {
            this.style.background="#567";
        }
        lis[i].onmouseout=function () {
            this.style.background="#FFF";
        }
        lis[i].onclick=function (e) {
            e=e || window.event;
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble=true;
            }
            var id=this.id;
            StateList.style.display="none";
            stateTxt.innerHTML=getByClass("stateSelect_text",id)[0].innerHTML;
            loginStateShow.className="";
            loginStateShow.className="login-state-show "+id;
        }
    }
    document.onclick=function (e) {
        e= e || window.event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble=true;
        }
        stateList.style.display="none";
    }
}

function fnDown(event) {
    event = event || window.event;
    var oDrag = document.getElementsById("loginPanel");
    disX=event.clientX-oDrag.offsetLeft;
    disY= event.clientY-oDrag.offsetTop;
    document.onmousemove=function (event) {
        event = event || window.event;
        fnMove(event,disX,disY);
    }
    document.onmouseup=function () {
        document.onmousemove=null;
        document.onmouseup=null;
    }
}

function fnMove (e,posX,posY) {
    var l=e.clientX-posX;
        t=e.clientY-posY;
    winW=document.documentElement.clientWidth || document.body.clientWidth;
    winH=document.documentElement.clientHeight || document.body.clientHeight;
    maxW=winW-oDrag.offsetWidth-10;
    maxH=winH-oDrag.offsetHeight;
    if(l<0){
        l=0;
    }else if(l>maxW){
        l=maxW;
    };
    if(t<0){
        t=10;
    }else if(t>maxH){
        t=maxH;
    }
    oDrag.style.top=t+"px";
    oDrag.style.left=l+"px";
}