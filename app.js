// Display 
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

//Buttons
const p1Btn= document.querySelector('#p1Click');
const p2Btn= document.querySelector('#p2Click');
const resetButton= document.querySelector('#reset');

//select
const winningScoreSelect = document.querySelector('#playTo');

let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;


// winningScoreSelect.addEventListener('change' , (event)=>{
//     winningScore = event.target.value;
//     console.log(winningScore);
// })

winningScoreSelect.addEventListener('change' , function() {
    //int ja rha h
    winningScore = parseInt(this.value);
    reset();
})

p1Btn.addEventListener('click' , ()=>{
    console.log(p1Score);
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = !isGameOver;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
})

p2Btn.addEventListener('click' , ()=>{
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

resetButton.addEventListener('click' ,reset)


function reset() {
    console.log('called')
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success' , 'has-text-danger');
    p2Display.classList.remove('has-text-success' , 'has-text-danger');
    p1Btn.disabled = false;
    p2Btn.disabled = false;
};