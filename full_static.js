const position = [0,0,0,0]; id=Date.now()
document.body.insertAdjacentHTML("beforeEnd", "<div id='tool "+id+"' style='position: absolute;margin:0px;resize:both;overflow:hidden'></div>")
var tool=document.getElementById("tool "+id) //should be able to set a inserted element directly, but guess not?
tool.insertAdjacentHTML("beforeEnd", "<div id='toolbar "+id+"'>")
var toolbar=document.getElementById("toolbar "+id)
function AddEvent(object, id, func) {
    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object)})
    else if(object.addEventListener) object.addEventListener(id, func, false)
}
AddEvent(window,'keydown',function(e){
    console.log(e)
    switch(e.keyCode){
        case e.ctrlKey && 81:
            e.preventDefault()
            if(tool.style.visibility!="hidden"){tool.style.visibility=="hidden"}else{tool.style.visibility=="visible"}
            break
    }
})
tool.onmousedown=function(e){ //add mask
    tool.style.pointerEvents = "none"
    e = e || window.event;
    position[2] = e.clientX;
    position[3] = e.clientY;
    document.onmouseup=function(e){
        document.onmouseup = null;
        document.onmousemove = null;
        tool.style.pointerEvents = "all"}
    document.onmousemove=function(e){
        e = e || window.event;
        position[0] = position[2] - e.clientX;
        position[1] = position[3] - e.clientY;
        position[2] = e.clientX;
        position[3] = e.clientY;
        tool.style.top = (tool.offsetTop - position[1]) + "px";
        tool.style.left = (tool.offsetLeft - position[0]) + "px";}
}