const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const img = document.getElementById("loader");
    img.classList.remove("loader_active");

    let data = JSON.parse(xhr.responseText);
    let arrOfValute = Object.keys(data.response.Valute);

    const item = document.getElementById("items");

    arrOfValute.forEach((key) => {
      item.innerHTML += `<div class="item">
            <div class="item__code">
                ${data.response.Valute[key].CharCode}
            </div>
            <div class="item__value">
                ${data.response.Valute[key].Value}
            </div>
            <div class="item__currency">
               руб.
            </div>
            </div>`;
    });
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);

xhr.send();
