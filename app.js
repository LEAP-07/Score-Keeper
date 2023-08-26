const p1 = {
    score:0,
    button:document.querySelector('#p1Click'),
    display:document.querySelector('#p1Display'),
}

const p2 = {
    score:0,
    button:document.querySelector('#p2Click'),
    display:document.querySelector('#p2Display'),
}

//Buttons
const resetButton= document.querySelector('#reset');

//rounds selector
const winningScoreSelect = document.querySelector('#playTo');

let isGameOver = false;
let winningScore = 3;

function updateScores(player , opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = !isGameOver;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}



p1.button.addEventListener('click' , ()=>{
   updateScores(p1 , p2);
})

p2.button.addEventListener('click' , ()=>{
   updateScores(p2 , p1);
})

resetButton.addEventListener('click' ,reset)

winningScoreSelect.addEventListener('change' , function() {
    //int ja rha h
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    isGameOver = false;
    for(let p of [p1 , p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success' , 'has-text-danger');
        p.button.disabled = false;
    }

};