var color11=randomColor();
var color12=randomColor();
var color13=randomColor();
var color21=randomColor();
var color22=randomColor();
var color23=randomColor();
var direction=randomDirection();

var color11new=randomColor();
var color12new=randomColor();
var color13new=randomColor();
var color21new=randomColor();
var color22new=randomColor();
var color23new=randomColor();
var directionNew=randomDirection();

var button=document.getElementById("button");
var body=document.getElementById("gradient");
var firstColor=document.getElementById("random_color");

//button.addEventListener("click", setColor);
button.addEventListener("click", setInterval(start, 100));


function start(){
    if(color11!=color11new && color11>color11new){
        color11--;
    }if(color11<color11new){
        color11++;
    }
    
    if(color12!=color12new && color12>color12new){
        color12--;
    }if(color12<color12new){
        color12++;
    }

    if(color13!=color13new && color13>color13new){
        color13--;
    }if(color13<color13new){
        color13++;
    }

    if(color21!=color21new && color21>color21new){
        color21--;
    }if(color21<color21new){
        color21++;
    }

    if(color22!=color22new && color22>color22new){
        color22--;
    }if(color22<color22new){
        color22++;
    }

    if(color23!=color23new && color23>color23new){
        color23--;
    }if(color23<color23new){
        color23++;
    }

    if(direction!=directionNew && direction>directionNew){
        direction--;
    }if(direction<directionNew){
        direction++;
    }





    if(color11==color11new){
        color11=color11new;
        color11new=randomColor();
    }
    if(color12==color12new){
        color12=color12new;
        color12new=randomColor();
    }
    if(color13==color13new){
        color13=color13new;
        color13new=randomColor();
    }
    if(color21==color21new){
        color21=color21new;
        color21new=randomColor();
    }
    if(color22==color22new){
        color22=color22new;
        color22new=randomColor();
    }
    if(color23==color23new){
        color23=color23new;
        color23new=randomColor();
    }
    if(direction==directionNew){
        direction=directionNew;
        directionNew=randomColor();
    }

    setColor(color11, color12, color13, color21, color22, color23, direction);
};

function setColor(color11new, color12new, color13new, color21new, color22new, color23new, directionNew){
    body.style.background = "linear-gradient("+directionNew+"deg,  rgb("+color11new+", "+color12new+", "+color13new+"), rgb("+color21new+", "+color22new+", "+color23new+")";
    printColor(color11new, color12new, color13new, color21new, color22new, color23new, directionNew);
}

function randomColor(){
    var color=(Math.floor(Math.random()*256));
    return color;
}

function randomDirection(){
    var randomDirection=Math.floor(Math.random()*360);
    return randomDirection;
}

function printColor(color11, color12, color13, color21, color22, color23, direction){
    var printRandom=document.getElementById("random_color");
    printRandom.innerHTML="linear-gradient("+direction+"deg,  rgb("+color11+", "+color12+", "+color13+"), rgb("+color21+", "+color22+", "+color23+")";
}

