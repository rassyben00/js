var newGameBtn=document.getElementById("new-game");
var restartBtn=document.getElementById("restartButton");
var gameOverMessage=document.getElementById("gameOver");
var rollBtn=document.getElementById("roll");
var holdBtn=document.getElementById("hold");
var dice=document.getElementById("dice");
var displayCurrentScore1=document.getElementById("current-score1");
var displayCurrentScore2=document.getElementById("current-score2");
var displayScore1=document.getElementById("score1");
var displayScore2=document.getElementById("score2");
var player1=document.getElementById("player1")
var player2=document.getElementById("player2")
var displayWinner=document.getElementById("displayWinner");
var playBtn=document.getElementById("playButton");

rollBtn.addEventListener("click", roll);
holdBtn.addEventListener("click", hold);
newGameBtn.addEventListener("click", reset);
restartBtn.addEventListener("click", reset);
playBtn.addEventListener("click", reset);

var score1=0;
var score2=0;
var currentScore=0;
var activePlayer=1; //1 or 2
let random;
let pointsToWin=100;

function roll(){
    random=Math.floor(Math.random()*6+1);
    dice.src="dice-"+random+".png";
    currentScoreFunction();
    isOne();
    if(random==1){
        switchPlayers();
    }
}

function currentScoreFunction(){
    if(activePlayer==1){
        currentScore=currentScore+random;
        displayCurrentScore1.innerHTML=currentScore;
    }else{
        currentScore=currentScore+random;
        displayCurrentScore2.innerHTML=currentScore;
    }
}

function hold(){
    win()
    if(activePlayer==1){
        score1=score1+currentScore;
        displayScore1.innerHTML=score1;
        currentScore=0;
        displayCurrentScore1.innerHTML=currentScore;
        activePlayer=2;
        switchPlayers()
    }else if(activePlayer==2){
        score2=score2+currentScore;
        displayScore2.innerHTML=score2;
        currentScore=0;
        displayCurrentScore2.innerHTML=currentScore;
        activePlayer=1;
        switchPlayers()
    }
}

function win(){
    if(activePlayer==1){
        if(score1+currentScore>=pointsToWin){
            displayWinner.innerHTML="Player 1 won!";
            gameOverMessage.classList.add("show");
        }
    }else{
        if(score2+currentScore>=pointsToWin){
            displayWinner.innerHTML="Player 2 won!";
            gameOverMessage.classList.add("show");
        }
    }
}

function reset(){
    document.getElementById("play").style.visibility = 'hidden';
    score1=0;
    score2=0;
    currentScore=0;
    activePlayer=1;
    displayCurrentScore1.innerHTML=currentScore;
    displayCurrentScore2.innerHTML=currentScore;
    displayScore1.innerHTML=score1;
    displayScore2.innerHTML=score2;
    if(activePlayer==1){
        switchPlayers();
    }
    gameOverMessage.classList.remove("show");
}

function isOne(){
    if(random==1){
        currentScore=0;
        if(activePlayer==1){
            displayCurrentScore1.innerHTML=currentScore;
            activePlayer=2;
        }else{
            displayCurrentScore2.innerHTML=currentScore;
            activePlayer=1;
        }
    }
}

function switchPlayers(){
    if(activePlayer==2){
        player1.classList.remove("active");
        player2.classList.add("active");
    }else if(activePlayer==1){
        player2.classList.remove("active");
        player1.classList.add("active");
    }
}