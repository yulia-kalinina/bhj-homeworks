const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

getHole = (index) => document.getElementById(`hole${index}`);

for (let i = 1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = function () {
    if (hole.className.includes("hole_has-mole")) {
      deadCounter.textContent++;
    } else {
      lostCounter.textContent++;
    }
    if (+deadCounter.textContent === 10) {
      alert("Вы победили!");
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
    if (+lostCounter.textContent === 5) {
      alert("Вы проиграли");
      deadCounter.textContent = 0;
      lostCounter.textContent = 0;
    }
  };
}
