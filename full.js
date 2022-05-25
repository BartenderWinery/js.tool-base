const position = [0,0,0,0];
var tool=document.body.insertAdjacentHTML("beforeEnd", "<div></div>");
tool.onmousedown=function(e){ //add mask
    e.preventDefault();
    e = e || window.event;
    position[2] = e.clientX;
    position[3] = e.clientY;
    document.onmouseup=function(e){
        e.preventDefault();
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
tool.onmousemove=function(e){
    e.preventDefault();
    e = e || window.event;
    position[0] = position[2] - e.clientX;
    position[1] = position[3] - e.clientY;
    position[2] = e.clientX;
    position[3] = e.clientY;
    // set the element's new position:
    tool.style.top = (tool.offsetTop - position[1]) + "px";
    tool.style.left = (tool.offsetLeft - position[0]) + "px";
}
function AddEvent(object, id, func) {
    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object);});
    else if(object.addEventListener) object.addEventListener(id, func, false);
}
AddEvent(window,'keydown',function(e){
    switch(e.keyCode){
        case e.ctrlKey && 81:
            e.preventDefault();
            if(tool.style.visibility!="hidden"){tool.style.visibility=="hidden"}else{tool.style.visibility=="visible"}
            break; 
    }
})