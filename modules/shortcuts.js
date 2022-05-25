function AddEvent(object, id, func) {
    if(object.attachEvent) object.attachEvent("on" + id, function() {func.call(object);});
    else if(object.addEventListener) object.addEventListener(id, func, false);
}
AddEvent(window,'keydown',function(e){
    console.log(e.keyCode+""+e.ctrlKey)
    switch(e.keyCode){
        case e.ctrlKey && 81:
            e.preventDefault();
            break; 
    }
})