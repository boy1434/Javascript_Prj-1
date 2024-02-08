let computerNum = 0;
let playBtn = document.getElementById('playBtn');
let userInput = document.getElementById('userInput');
let result_area = document.getElementById('result_area');
let resetBtn = document.getElementById('resetBtn');
let chances = 5;
let gameOver = false;
let chances_area =document.getElementById('chances_area')

function pickRandomNum(){
    computerNum =  Math.floor((Math.random())*100)+1
    console.log(computerNum);
    chances_area.textContent=`남은기회 :${chances}`
}

playBtn.addEventListener("click", play);
resetBtn.addEventListener("click", reset);

function reset() {
    userInput.value = ""
    pickRandomNum();
    
    result_area.textContent = "결과 값이 나옵니다"
    
}


function play(){
    let userValue = userInput.value;
    chances -- ;
    

    if(userValue < computerNum){
        result_area.textContent = "UP!!";
    } else if (userValue > computerNum){
        result_area.textContent = "Down!!";
    } else{
        result_area.textContent = "정답입니다!";
    }

    if(chances <1){
        gameOver = true;
    }

    if(gameOver == true){
        playBtn.disabled = true;
    }
}


pickRandomNum();

