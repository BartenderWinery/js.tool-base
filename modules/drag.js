function popout(data){ //convert to protoype object
    const position = [0,0,0,0]; data.style.position="absolute";
    data.onmousedown=function(e){ //add mask
        data.style.pointerEvents = "none"
        e = e || window.event;
        e.preventDefault();
        position[2] = e.clientX;
        position[3] = e.clientY;
        document.onmouseup=function(e){
            document.onmouseup = null;
            document.onmousemove = null;
            data.style.pointerEvents = "all"
        }
    document.onmousemove=function(e){
        e = e || window.event;
        e.preventDefault();
        position[0] = position[2] - e.clientX;
        position[1] = position[3] - e.clientY;
        position[2] = e.clientX;
        position[3] = e.clientY;
        // set the element's new position:
        data.style.top = (data.offsetTop - position[1]) + "px";
        data.style.left = (data.offsetLeft - position[0]) + "px";
    }
}}