var newGameBtn=document.getElementById("new-game");
var rollBtn=document.getElementById("roll");
var holdBtn=document.getElementById("hold");
var dice=document.getElementById("dice");
var displayCurrentScore1=document.getElementById("current-score1");
var displayCurrentScore2=document.getElementById("current-score2");
var displayScore1=document.getElementById("score1");
var displayScore2=document.getElementById("score2");

var score1=0;
var score2=0;
var currentScore=0;
var activePlayer=1;
playing=true

let random;

let pointsToWin=20;

function roll(){
    random=Math.floor(Math.random()*6+1)
    dice.src="dice-"+random+".png";
    currentScoreFunction()
    isOne()
    if(random==1){
    switchPlayers()
    }
}

rollBtn.addEventListener("click", roll)
holdBtn.addEventListener("click", hold)
newGameBtn.addEventListener("click", reset)

function currentScoreFunction(){
    if(activePlayer%2==1){
        currentScore=currentScore+random;
        displayCurrentScore1.innerHTML=currentScore;
    }else{
        currentScore=currentScore+random;
        displayCurrentScore2.innerHTML=currentScore;
    }
    
}

function hold(){
    win()
    if(activePlayer%2==1 && playing==true){
        score1=score1+currentScore;
        displayScore1.innerHTML=score1;
        currentScore=0;
        displayCurrentScore1.innerHTML=currentScore;
        activePlayer++;
        switchPlayers()
    }else if(activePlayer%2==0 && playing==true){
        score2=score2+currentScore;
        displayScore2.innerHTML=score2;
        currentScore=0;
        displayCurrentScore2.innerHTML=currentScore;
        activePlayer++;
        switchPlayers()
    }
    if(win){
        playing=true;
        if(activePlayer%2==1){
            switchPlayers()
        }
    }
}

function win(){
    if(activePlayer%2==1){
        if(score1+currentScore>=pointsToWin){
            alert("player1 won")
            playing=false;
            reset()
        }
    }else{
        if(score2+currentScore>=pointsToWin){
            alert("player2 won")
            playing=false;
            reset()
        }
    }
}

function reset(){
    score1=0
    score2=0
    currentScore=0
    activePlayer=1
    //playing=true;
    displayCurrentScore1.innerHTML=currentScore;
    displayCurrentScore2.innerHTML=currentScore;
    displayScore1.innerHTML=score1;
    displayScore2.innerHTML=score2;
    if(activePlayer%2==1){
        switchPlayers()
    }
}

function isOne(){
    if(random==1){
        if(activePlayer%2==1){
            currentScore=0;
            displayCurrentScore1.innerHTML=currentScore;
            activePlayer++;
        }else{
            currentScore=0;
            displayCurrentScore2.innerHTML=currentScore;
            activePlayer++;
        }
    }
}

var player1=document.getElementById("player1")
var player2=document.getElementById("player2")

function switchPlayers(){
    if(activePlayer%2!=1 && playing==true){
        player1.classList.remove("active")
        player2.classList.add("active")
    }else if(activePlayer%2!=0 && playing==true){
        player2.classList.remove("active")
        player1.classList.add("active")
    }
}