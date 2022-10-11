var button=document.getElementById("button");
var body=document.getElementById("gradient");

button.addEventListener("click", setColor);

function setColor(){
    var color1=randomColor();
    var color2=randomColor();
    body.style.background = "linear-gradient(to right,  "+color1+", "+color2+")";
    printColor(color1, color2);
    console.log(color1, color2)
}

function randomColor(){
    var color="rgb("+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+", "+(Math.floor(Math.random()*256))+")";
    return color;
}

function printColor(color1, color2){
    var printRandom=document.getElementById("random_color");
    printRandom.innerHTML="linear-gradient(to right, "+color1+", "+color2+")";



}

