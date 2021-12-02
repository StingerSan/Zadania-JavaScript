const startPause = document.querySelector('.main');
const reset = document.querySelector('.reset');
const table = document.querySelector('.time div');

let time = 0;
let active = true;
let trigger;

const startStop = () => {
    if (active) {
        active = !active;
        startPause.textContent = "Pauza";
        trigger = setInterval(timeFlow, 10);
    } else {
        active = !active;
        startPause.textContent = "Start";
        clearInterval(trigger);
    }
}

const timeFlow = () => {
    time++
    table.textContent = (time / 100).toFixed(2);
}

const resetWatch = () => {
    time = 0;
    active = true;
    startPause.textContent = "Start";
    clearInterval(trigger);
    table.textContent = "- - -";
}

startPause.addEventListener('click', startStop);
reset.addEventListener('click', resetWatch);