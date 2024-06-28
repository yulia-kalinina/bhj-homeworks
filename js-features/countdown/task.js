const timer = document.getElementById("timer");

const reduceTimer = function () {
  timer.textContent -= 1;
  if (+timer.textContent < 1) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  }
};

let intervalId = setInterval(reduceTimer, 1000);
