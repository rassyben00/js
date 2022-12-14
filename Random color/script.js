var button=document.getElementById("button");
var body=document.getElementById("gradient");

button.addEventListener("click", setColor);

function setColor(){
    var color1=randomColor();
    var color2=randomColor();
    var direction=randomDirection();
    body.style.background = "linear-gradient("+direction+",  "+color1+", "+color2+")";
    printColor(color1, color2, direction);
}

function randomColor(){
    var color="rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
    return color;
}

function randomDirection(){
    var randomDirection=Math.floor(Math.random()*360)+"deg";
    return randomDirection;
}

function printColor(color1, color2, direction){
    var printRandom=document.getElementById("random_color");
    printRandom.innerHTML="linear-gradient("+direction+", "+color1+", "+color2+")";
}

