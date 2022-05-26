const position = [0,0,0,0]; id=Date.now()
document.body.insertAdjacentHTML("beforeEnd", "<div id='tool "+id+"' style='position: absolute;margin:0px;overflow:hidden;padding:0px;height:300px;width:500px'></div>")
var tool=document.getElementById("tool "+id)
tool.onmousedown=function(e){ //add mask
    tool.style.pointerEvents = "none"
    e = e || window.event
    e.preventDefault()
    position[2] = e.clientX
    position[3] = e.clientY
    document.onmouseup=function(e){
        document.onmouseup = null
        document.onmousemove = null
        tool.style.pointerEvents = "all"}
    document.onmousemove=function(e){
        e = e || window.event
        e.preventDefault()
        position[0] = position[2] - e.clientX
        position[1] = position[3] - e.clientY
        position[2] = e.clientX
        position[3] = e.clientY
        tool.style.top = (tool.offsetTop - position[1]) + "px"
        tool.style.left = (tool.offsetLeft - position[0]) + "px"}
}