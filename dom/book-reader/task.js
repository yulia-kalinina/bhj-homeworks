const controlArr = Array.from(document.querySelectorAll(".font-size"));
const book = document.getElementById("book");

function cleanActive() {
  for (i = 0; i < controlArr.length; i++) {
    controlArr[i].classList.remove("font-size_active");
  }

  book.classList.remove("book_fs-big");
  book.classList.remove("book_fs-small");
}

controlArr.forEach((elem, index) => {
  elem.onclick = function () {
    cleanActive();
    controlArr[index].classList.add("font-size_active");

    const actualSize = controlArr[index].getAttribute("data-size");

    if (actualSize == "small") {
      book.classList.add("book_fs-small");
    }

    if (actualSize == "big") {
      book.classList.add("book_fs-big");
    }

    if (actualSize === null) {
      book.classList.remove("book_fs-big");
      book.classList.remove("book_fs-small");
    }

    return false;
  };
});
