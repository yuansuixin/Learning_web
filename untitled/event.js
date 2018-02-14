var eventutil={
    addhander:function (element,type,handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler ,false);
        }else if (element.attachEvent){
            element.attachEvent("on"+type,handler);
        }else{
            element["on"+type]=handler;
        }
    },
    removehander:function (element,type,handler) {
        if(element.removeEventListener){
            element.removeEventListener(type,handler ,false);
        }else if (element.detachEvent){
            element.detachEvent("on"+type,handler);
        }else{
            element["on"+type]=null;
        }
    },
    getEvent:function (event) {
        return event?event:window.event;
    },
    gettype:function (event) {
        return event.type;
    },
    getElement:function (event) {
      return event.target || event.srcElement;
    },
    preventDefult:function (event) {
        if(event.preventDefult){
            event.preventDefult();
        }else{
            event.returnValue=false;
        }
    },
    stopPropagation:function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
}
