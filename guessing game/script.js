var excercise=document.getElementById("excercise");
var submitBtn=document.getElementById("submitBtn");
var displayLives=document.getElementById("lives");
var displayScore=document.getElementById("score");
var displayRemainingTime=document.getElementById("remainingTime");

submitBtn.addEventListener("click", check);
document.getElementById('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        check();
    }
});

var operators=["+","-","*"];
var randomOperator;
var var1;
var var2;

var solution;
var playerSolution;

var lives=3;
var score=0;

var timeToAnswer=10

function createRandomNumber(){
    return Math.floor(Math.random()*10);  
}

function createExcercise(){
    var1=createRandomNumber();
    var2=createRandomNumber();
    const random = Math.floor(Math.random() * operators.length);
    randomOperator=operators[random];
    createSolution();
}

function displayElements(){
    excercise.innerHTML=var1+" "+randomOperator+" "+var2+" = "+solution;
    displayScore.innerHTML="score: "+score;
    displayLives.innerHTML="lives: "+lives;
    displayRemainingTime.innerHTML=timeToAnswer;
}

function createSolution(){
    if(randomOperator=="+"){
        solution=var1+var2
    }
    if(randomOperator=="-"){
        solution=var1-var2
    }
    if(randomOperator=="*"){
        solution=var1*var2
    }
    
}

function check(){
    playerSolution=document.getElementById('input').value;
    document.getElementById('input').value="";
    if(playerSolution==solution){
        score++;
        console.log("correct");
        createExcercise();
        displayElements();
    }else{
        console.log("incorrect");
        lives--;
    }
    displayLives.innerHTML="lives: "+lives;
    setTimeout(checkGameOver, 100)
}

function checkGameOver(){
    if(lives<1){
        console.log("gameOver")
        lives=3;
        score=0;
    }
}

createExcercise();
createRandomNumber();
createSolution();
displayElements();
