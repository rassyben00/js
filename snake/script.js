var blockSize=25;
var cols=20;
var rows=20;
var canvas;
var context;

var snakeX=Math.floor(Math.random()*(rows-1))*blockSize;
var snakeY=Math.floor(Math.random()*(cols-1))*blockSize;
var snakeBody=[];

var foodX=blockSize*10;
var foodY=blockSize*10;

var velocityX=0;
var velocityY=0;

var gameOver=false;
var gameOverMessage;

var restartButton;

var score=0;
var displayScore;
var finalScore;

gameOverMessage=document.getElementById("gameOver");
finalScore=document.getElementById("finalScore");
displayScore=document.getElementById("displayScore");
restartButton=document.getElementById("restartButton");
var playBtn=document.getElementById("playButton");
canvas=document.getElementById("canvas");
canvas.height=rows*blockSize;
canvas.width=cols*blockSize;
context=canvas.getContext("2d");

document.addEventListener("keyup", changeDir);
restartButton.addEventListener("click", resetGame);
playBtn.addEventListener("click", startGame);

function startGame(){
    document.getElementById("play").style.visibility = 'hidden';
    displayScore.innerHTML="Score: "+score;

    placeFood();
    update()
}

function update(){
    if(gameOver!=true){
        setTimeout(() => {
            drawCanavas();
            drawFood();
            isEating();
            drawSnakeBody();
            drawSnake();
            checkGameOver();  
            update();      
        }, 200);
    }
}

function drawCanavas(){
    context.fillStyle="black";
    context.fillRect(0,0, canvas.width, canvas.height);
}

function drawFood(){
    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

function drawSnake(){
    context.fillStyle="lime";
    snakeX=snakeX+velocityX*blockSize;
    snakeY=snakeY+velocityY*blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
}

function isEating(){
    if(snakeX==foodX && snakeY==foodY){
        snakeBody.push([foodX, foodY]);
        increaseScore();
        placeFood();
    }
}

function drawSnakeBody(){
    for(let i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0]=[snakeX, snakeY]
    }
    for(let i=0;i<snakeBody.length;i++){
        context.fillStyle="lime";
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
}

function increaseScore(){
    score++;
    displayScore.innerHTML="Score: "+score;
}

function checkGameOver(){
    if(snakeX<0 || snakeX>cols*blockSize-1 || snakeY<0 || snakeY>rows*blockSize-1){
        gameOver=true;
        displayGameOver();
    }

    for(let i=0;i<snakeBody.length;i++){
        if(snakeX==snakeBody[i][0] && snakeY==snakeBody[i][1]){
            gameOver=true;
            displayGameOver();
        }  
    }
}

function displayGameOver(){    
    gameOverMessage.classList.add("show"); 
    finalScore.innerHTML="Your score: "+score;
}

function placeFood(){
    foodX=Math.floor(Math.random()*(rows-1))*blockSize;
    foodY=Math.floor(Math.random()*(cols-1))*blockSize;
}

function changeDir(e){
    if(e.code=="ArrowUp" && velocityY!=1){
        velocityX=0;
        velocityY=-1;
    }
    else if(e.code=="ArrowDown" && velocityY!=-1){
        velocityX=0;
        velocityY=1;
    }
    else if(e.code=="ArrowLeft" && velocityX!=1){
        velocityX=-1;
        velocityY=0;
    }
    else if(e.code=="ArrowRight" && velocityX!=-1){
        velocityX=1;
        velocityY=0;
    }   
}

function resetGame(){
    score=0;
    gameOver=false;
    
    velocityX=0
    velocityY=0
    
    snakeX=Math.floor(Math.random()*(rows-1))*blockSize;
    snakeY=Math.floor(Math.random()*(cols-1))*blockSize;
    snakeBody=[];

    gameOverMessage.classList.remove("show");
    startGame();
}
