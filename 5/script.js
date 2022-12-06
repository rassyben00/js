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

button.addEventListener("click", setInterval(start, 500));

/*
function compareColor(color11, color11new){
    if(color11!=color11new && color11>color11new){
        color11--;
    }if(color11<color11new){
        color11++;
    }
    console.log(color11)
}

function newColor(color11, color11new){
    if(color11==color11new){
        color11=color11new;
        color11new=randomColor();
    }
}

function newDir(direction, directionNew){
    if(direction==directionNew){
        direction=directionNew;
        directionNew=randomDirection();
    }

}
*/
function start(){
    /*
    compareColor(color11, color11new)
    compareColor(color12, color12new)
    compareColor(color13, color13new)
    compareColor(color21, color21new)
    compareColor(color22, color22new)
    compareColor(color23, color23new)
    compareColor(direction, directionNew)

    newColor(color11, color11new)
    newColor(color12, color12new)
    newColor(color13, color13new)
    newColor(color21, color21new)
    newColor(color22, color22new)
    newColor(color23, color23new)

    newDir(direction, directionNew)
    */
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
        directionNew=randomDirection();
    }

    setColor(color11, color12, color13, color21, color22, color23, direction);
};

function setColor(color11, color12, color13, color21, color22, color23, direction){
    body.style.background = "linear-gradient("+direction+"deg,  rgb("+color11+", "+color12+", "+color13+"), rgb("+color21+", "+color22+", "+color23+")";
    printColor(color11, color12, color13, color21, color22, color23, direction);
}

function randomColor(){
    var color=(Math.floor(Math.random()*255));
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

