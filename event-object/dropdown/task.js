function openAndCloseMenu() {
  document
    .querySelector(".dropdown__list")
    .classList.toggle("dropdown__list_active");
}

const button = document.querySelector(".dropdown__value");
button.addEventListener("click", openAndCloseMenu);

const allItemOfList = Array.from(document.querySelectorAll(".dropdown__item"));

allItemOfList.forEach((item, index) => {
  item.onclick = function () {
    openAndCloseMenu();
    button.textContent = allItemOfList[index].textContent;
    return false;
  };
});
