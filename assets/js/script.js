// timer function - click 'Start' and timer starts

let int = null;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
const timeTaken = document.getElementById('time-taken');
const startButton = document.getElementById('start-button');

function timer() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(showTime, 10);
}

function showTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  timeTaken.innerHTML = `${m}:${s}`;
}

startButton.addEventListener('click', timer);