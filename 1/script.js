var minus=document.getElementById("minus");
var plus=document.getElementById("plus");
var resetbtn=document.getElementById("reset");
var number=document.getElementById("number");

let a = 0;

minus.addEventListener("click", decrease);
plus.addEventListener("click", increase);
resetbtn.addEventListener("click", reset);

function increase(){
    a++;
    number.innerHTML=a;
}

function decrease(){
    a--;
    number.innerHTML=a;
}

function reset(){
    a=0;
    number.innerHTML=a;
}