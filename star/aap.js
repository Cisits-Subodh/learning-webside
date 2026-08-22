let x = 50, y = 50, dx = 3, dy = 2;

let score = 0, time = 10;
const countdown = setInterval(() => {

    time--;

    if (time <= 0) endGame();

}, 1000);

star.onclick = () => score++;

setInterval(move, 30);