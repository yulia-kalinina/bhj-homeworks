const revealBlockArr = Array.from(document.querySelectorAll(".reveal"));

document.addEventListener("scroll", function () {
  for (let i = 0; i < revealBlockArr.length; i++) {
    const revalBlockTop = revealBlockArr[i].getBoundingClientRect().top;
    const revalBlockBottom = revealBlockArr[i].getBoundingClientRect().bottom;
    if (revalBlockTop < window.innerHeight && revalBlockBottom > 0) {
      revealBlockArr[i].classList.add("reveal_active");
    }
  }
});
