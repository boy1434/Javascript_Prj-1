let computerNum = 0;
let playBtn = document.getElementById('playBtn');
let userInput = document.getElementById('userInput');
let result_area = document.getElementById('result_area');
let resetBtn = document.getElementById('resetBtn');
let chances = 5;
let gameOver = false;
let chances_area =document.getElementById('chances_area');
let history = [];

function pickRandomNum(){
    computerNum =  Math.floor((Math.random())*100)+1
    console.log(computerNum);
    chances;
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

    if(userValue > 100 || userValue <1){
        result_area.textContent = "1과 100사이 숫자를 입력해주세요";
        return;
    } 
    if (history.includes(userValue)){
        result_area.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요";
        return;
    }

    chances -- ;
    chances_area.textContent=`남은기회 :${chances}`

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
   

    history.push(userValue);
    console.log(history)
}


pickRandomNum();

