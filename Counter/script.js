var minus=document.getElementById("minus");
var plus=document.getElementById("plus");
var resetbtn=document.getElementById("reset");
var number=document.getElementById("number");

let counter=0;
number.innerHTML=counter;

minus.addEventListener("click", decrease);
plus.addEventListener("click", increase);
resetbtn.addEventListener("click", reset);

function increase(){
    counter++;
    number.innerHTML=counter;
}

function decrease(){
    counter--;
    number.innerHTML=counter;
    
}

function reset(){
    counter=0;
    number.innerHTML=counter;
}