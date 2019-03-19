var classes = ["bg-success", "bg-info", "bg-warning", "bg-danger", "bg-secondary"]
var index = 0;
var El;
$(document).ready(function(){

    El = $(".progress-bar");
    Rotate();
});

function Rotate(){
    if(El.hasClass(classes[index])){
        El.removeClass(classes[index]);
        index++;
        if(index >= classes.length){
            index = 0;
        }
        El.addClass(classes[index]);

    }else{
        El.addClass(classes[0]);
    }
    
    
    setTimeout(Rotate, 1200);
}