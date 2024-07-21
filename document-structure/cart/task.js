const product = [...document.querySelectorAll(".product")];
const cart = document.querySelector(".cart__products");

product.forEach((elem) => {
  let quantityValue = elem.querySelector(".product__quantity-value");
  let quantityControlDec = elem.querySelector(".product__quantity-control_dec");
  let quantityControlInc = elem.querySelector(".product__quantity-control_inc");
  let productImage = elem.querySelector("img");
  let elemId = elem.dataset.id;

  quantityControlInc.onclick = function () {
    quantityValue.textContent++;
  };

  quantityControlDec.onclick = function () {
    if (quantityValue.textContent > 1) {
      quantityValue.textContent -= 1;
    }
  };

  let addButton = elem.querySelector(".product__add");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    const cartArr = [...cart.querySelectorAll(".cart__product")];

    let currentValue = quantityValue.textContent;
    let srcValue = productImage.src;

    for (let i = 0; i < cartArr.length; i++) {
      if (cartArr[i].dataset.id === elemId) {
        let currentAddDiv = cartArr[i].querySelector(".cart__product-count");
        currentAddDiv.textContent = +currentAddDiv.textContent + +currentValue;
        return;
      }
    }

    let addDiv = document.createElement("div");
    addDiv.className = "cart__product";
    addDiv.dataset.id = elemId;

    addDiv.innerHTML =
      '<img class="cart__product-image" src="' +
      srcValue +
      '"></img><div class="cart__product-count">' +
      currentValue +
      "</div>";

    cart.append(addDiv);
  });
});
