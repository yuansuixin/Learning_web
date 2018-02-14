window.onload=function () {
    var go= document.getElementsById("go");
    evevtutil.addhander(go,"click",function (event) {
        event=eventutil.getEvent(event);
        alert(eventutil.getElement(event));
        eventutil.preventDefult(event);
        eventutil.stopPropagation(event);
    });
}