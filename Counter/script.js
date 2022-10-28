var minus=document.getElementById("minus");
var plus=document.getElementById("plus");
var resetbtn=document.getElementById("reset");
var number=document.getElementById("number");

//localStorage.getItem("counter");
let counter =localStorage.getItem("counter") || 0;

setTimeout(number.innerHTML=localStorage.getItem("counter")|| 0,0);

minus.addEventListener("click", decrease);
plus.addEventListener("click", increase);
resetbtn.addEventListener("click", reset);

function increase(){
    counter++;
    localStorage.setItem("counter", counter);
    number.innerHTML=counter;
}

function decrease(){
    counter--;
    localStorage.setItem("counter", counter);
    number.innerHTML=counter;
    
}

function reset(){
    counter=0;
    number.innerHTML=counter;
    localStorage.setItem("counter", counter);
}