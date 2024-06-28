const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

image.onclick = function () {
  clickerCounter.textContent++;
  if (clickerCounter.textContent % 2 !== 0) {
    image.width = 220;
  } else if (clickerCounter.textContent % 2 == 0) {
    image.width = 200;
  }
};
