var timer = 60;
var score = 0;
var hitrn= 0 ;
var totalhits = 0;
const backmusic = new Audio('GameBackgroundSound.mp3');
backmusic.play();
var red = 117;
var green = 141;
var blue = 153;

function bubbleSound(){
    const sound = new Audio('bubbleGame.mp3');
    sound.play();
}

function makebubble(){
    var clutter = "";
    for(var i = 1 ; i<=250 ; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`;
        // document.getElementsByClassName('bubble').style.backgroundColor = 'rgb(red, green , blue)';
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}

function runtimer(){
    var runtimer = setInterval(function(){
        // document.getElementsById("go").style.display = "none";
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent= timer;
        }
        else{
            clearInterval(runtimer);
            backmusic.pause();
            const gameover = new Audio('gameOver.mp3');
            gameover.play();
            document.querySelector(".pbtm").innerHTML = `--Game over-- <br> Total Bubble hitted :${totalhits} <br> Your Score : ${score}`;
        }
        

    }, 1000)
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}

function increaseScore(){
    score +=10;
    document.querySelector ("#score").textContent = score;
}
function deccreaseScore(){
    score -= 5;
    document.querySelector ("#score").textContent = score;
}
document.querySelector(".pbtm").addEventListener("click", function(details){
    var hitbubble = Number(details.target.textContent);
    if (hitbubble === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
        bubbleSound();
        totalhits++;
        
    }
    // if(hitbubble != hitrn){
    //     deccreaseScore();
    //     makebubble();
    //     getNewHit();
    // }
})


makebubble();
getNewHit();
runtimer();

