let seconds = 0;
let tens = 0;
let display = document.getElementById("display");
let interval;

const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("click", stopTimer);
buttonReset.addEventListener("click", resetTimer);

function startTimer() {
  clearInterval(interval);
  interval = setInterval(updateTime, 10);
}

function stopTimer() {
  clearInterval(interval);
}

function resetTimer() {
  clearInterval(interval);
  seconds = 0;
  tens = 0;
  display.innerHTML = "00:00:00";
}

function updateTime() {
  tens++;

  if (tens < 10) {
    display.innerHTML = "00:" + seconds + ":0" + tens;
  } else if (tens >= 10 && tens < 100) {
    display.innerHTML = "00:" + seconds + ":" + tens;
  } else {
    seconds++;
    tens = 0;
    if (seconds < 10) {
      display.innerHTML = "00:" + seconds + ":00";
    } else {
      display.innerHTML = "00:" + seconds + ":" + tens;
    }
  }
}
