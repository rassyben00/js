var excercise=document.getElementById("excercise");
var submitBtn=document.getElementById("submitBtn");
var displayLives=document.getElementById("lives");
var displayScore=document.getElementById("score");
var displayRemainingTime=document.getElementById("remainingTime");
var playBtn=document.getElementById("playButton");
var restartBtn=document.getElementById("restartButton");
var gameOverMessage=document.getElementById("gameOver");
var displayGameOverScore=document.getElementById("displayGameOverScore");

var operators=["+","-","*"];
var randomOperator;
var var1;
var var2;

var solution;
var playerSolution;

var lives=3;
var score=0;

var timeToAnswer;

setInterval(countdown,1000);

playBtn.addEventListener("click", start);
restartBtn.addEventListener("click", start);
submitBtn.addEventListener("click", check);
document.getElementById('input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        check();
    }
});

function start(){
    timeToAnswer=10;
    document.getElementById("play").style.visibility = 'hidden';
    gameOverMessage.classList.remove("show");
    setInterval(countdown(), 1000);
    createExcercise();
    createRandomNumber();
    createSolution();
    displayElements();
}

function countdown(){
    timeToAnswer--;
    displayRemainingTime.innerHTML =  timeToAnswer+" seconds"; 
    if(timeToAnswer==0){
        lives--;
        timeToAnswer=10;
        checkGameOver();
        createExcercise();
        displayElements();
    }
}

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
    excercise.innerHTML=var1+" "+randomOperator+" "+var2+" = ?";
    displayScore.innerHTML="Score: "+score;
    displayLives.innerHTML="Lives: "+lives;
    displayRemainingTime.innerHTML=timeToAnswer+" seconds";
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
        timeToAnswer=10;
        setInterval(countdown(),1000);
        createExcercise();
        displayElements();
    }else{
        lives--;
        timeToAnswer=10;
        setInterval(countdown(),1000);
        createExcercise();
        displayElements();
    }
    displayLives.innerHTML="lives: "+lives;
    setTimeout(checkGameOver, 100)
}

function checkGameOver(){
    if(lives<1){
        gameOverMessage.classList.add("show");
        displayGameOverScore.innerHTML="Your score: "+score;
        lives=3;
        score=0;
        displayElements();
    }
}