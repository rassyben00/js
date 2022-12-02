var blockSize=25;
var cols=20;
var rows=20;
var canvas;
var context;

var snakeX=blockSize*3;
var snakeY=blockSize*3;

var snakeBody=[];

var foodX=blockSize*10;
var foodY=blockSize*10;

var velocityX=0;
var velocityY=0;

var gameOver=false;

var score=0;
var displayScore;

window.onload=function(){
    canvas=document.getElementById("canvas")
    canvas.height=rows*blockSize;
    canvas.width=cols*blockSize;
    context=canvas.getContext("2d");
   
    displayScore=document.getElementById("displayScore");
    displayScore.innerHTML="Score: "+score;

    placeFood();
        
    document.addEventListener("keyup", changeDir);
    setInterval(update, 300);


}

function update(){
    context.fillStyle="black";
    context.fillRect(0,0, canvas.width, canvas.height)

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize)

    if(snakeX==foodX && snakeY==foodY){
        snakeBody.push([foodX, foodY]);
        score++;
        displayScore.innerHTML="Score: "+score;
        placeFood();
    }

    for(let i=snakeBody.length-1;i>0;i--){
        snakeBody[i]=snakeBody[i-1];
    }

    if(snakeBody.length){
        snakeBody[0]=[snakeX, snakeY]
    }

    context.fillStyle="lime";
    snakeX=snakeX+velocityX*blockSize;
    snakeY=snakeY+velocityY*blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize)
    for(let i=0;i<snakeBody.length;i++){
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    if(snakeX<0 || snakeX>cols*blockSize || snakeY<0 || snakeY>rows*blockSize){
        gameOver=true;
        setInterval(location.reload(), 3000);
    }

    for(let i=0;i<snakeBody.length;i++){
        if(snakeX==snakeBody[i][0] && snakeY==snakeBody[i][1]){
            gameOver=true;
            setInterval(location.reload(), 3000);
        
        }  
    }
    
    
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