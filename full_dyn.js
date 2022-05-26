const position = [0,0,0,0]; id=Date.now()
document.body.insertAdjacentHTML("beforeEnd", "<div id='tool "+id+"' style='position: absolute;margin:0px;resize:both;overflow:hidden;padding:0px;height:300px;width:500px'></div>")
var tool=document.getElementById("tool "+id) 
tool.insertAdjacentHTML("beforeEnd", "<div id='con "+id+"' style='margin:0px;height:25%;width:100%;top:0;padding:0px;margin:0px'>")
var con=document.getElementById("con "+id)
function AddEvent(object, id, func) {
    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object)})
    else if(object.addEventListener) object.addEventListener(id, func, false)
}
AddEvent(window,'keydown',function(e){
    console.log(e)
    switch(e.keyCode){
        case e.shiftKey && 81:
            tool.remove()
            break
        case !e.shiftKey && e.ctrlKey && 81:
            e.preventDefault()
            if(tool.style.visibility!="hidden"){tool.style.visibility="hidden"}else{tool.style.visibility="visible"}
            break
    }
})
con.onmousedown=function(e){ //add mask
    con.style.pointerEvents = "none"
    e = e || window.event;
    position[2] = e.clientX;
    position[3] = e.clientY;
    document.onmouseup=function(e){
        document.onmouseup = null;
        document.onmousemove = null;
        con.style.pointerEvents = "all"}
    document.onmousemove=function(e){
        e = e || window.event;
        position[0] = position[2] - e.clientX;
        position[1] = position[3] - e.clientY;
        position[2] = e.clientX;
        position[3] = e.clientY;
        tool.style.top = (tool.offsetTop - position[1]) + "px";
        tool.style.left = (tool.offsetLeft - position[0]) + "px";}
}