const p1ScoreDisplay = document.querySelector('#p1');
const p2ScoreDisplay = document.querySelector('#p2');

const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const reset = document.querySelector('#reset');

let p1=0;
let p2=0;

p1btn.addEventListener('click',()=>{
    p1 += 1;
    p1ScoreDisplay.innerText = p1;
})

p2btn.addEventListener('click',()=>{
    p2 += 1;
    p2ScoreDisplay.innerText = p2;
})

reset.addEventListener('click',()=>{
    p1=0;
    p2=0;
    p1ScoreDisplay.innerText = p1;
    p2ScoreDisplay.innerText = p2;
})