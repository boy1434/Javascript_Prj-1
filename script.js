let computerNum = 0;
let playBtn = document.getElementById('playBtn');
let userInput = document.getElementById('userInput');
let result_area = document.getElementById('result_area');

function pickRandomNum(){
    computerNum =  Math.floor((Math.random())*100)+1
    console.log(computerNum);
}

playBtn.addEventListener("click", play);

function play(){
    let userValue = userInput.value;
    if(userValue < computerNum){
        result_area.textContent = "UP!!";
    } else if (userValue > computerNum){
        result_area.textContent = "Down!!";
    } else{
        result_area.textContent = "정답입니다!";
    }
}


pickRandomNum();

