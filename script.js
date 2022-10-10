var minus=document.getElementById("minus");
var plus=document.getElementById("plus");
var number=document.getElementById("number");

let a = 0;

minus.addEventListener("click", decrease);
plus.addEventListener("click", increase);

function increase(){
    a++;
    number.innerHTML=a;
}

function decrease(){
    a--;
    number.innerHTML=a;
}