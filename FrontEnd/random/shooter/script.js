const crosshair = document.querySelector('.cursor');
const target = document.querySelector('.target');
const score = document.querySelector('.score');

let scoreCount = 0;
let randomTargetInterval;

document.addEventListener('mousemove', (event) => {
    crosshair.style.left = `${event.clientX}px`;
    crosshair.style.top = `${event.clientY}px`;
})

function play() {
    scoreCount = 0;
    score.textContent = scoreCount;
    randomTargetInterval = setInterval(function () {
        target.style.display = "block";
        target.style.left = `${Math.random()*80 + 10}vw`;
        target.style.top = `${Math.random()*80 + 10}vh`;
    }, 2000);
    setTimeout(gameOver, 10000);
}

function gameOver()
{
    clearInterval(randomTargetInterval);
    target.style.display = 'none';
    alert('Your score is ' + scoreCount);
    window.location.reload();
}



function hit() {
    target.style.display = "none";
    scoreCount++;
    score.textContent = scoreCount;
}

target.addEventListener('click', hit);

play();