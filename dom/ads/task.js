const rotatorsArr = Array.from(document.querySelectorAll(".rotator__case"));

let counter = 0;

setInterval(function () {
  for (let i = 0; i < rotatorsArr.length; ++i) {
    rotatorsArr[i].classList.remove("rotator__case_active");
  }

  rotatorsArr[counter].classList.add("rotator__case_active");
  counter++;

  if (counter > rotatorsArr.length - 1) {
    counter = 0;
  }

  let colorChange = rotatorsArr[counter].dataset.color;
  rotatorsArr[counter].style.color = colorChange;
}, 1000);
