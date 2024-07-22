const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const data = JSON.parse(xhr.responseText);

    const poll = document.querySelector(".poll");
    const arrOfAnswers = Object.values(data.data.answers);

    poll.innerHTML = `<div class="poll__title" id="poll__title"> ${data.data.title} </div><div class="poll__answers poll__answers_active" id="poll__answers"></div>`;

    arrOfAnswers.forEach((answer) => {
      const pollAnswers = document.getElementById("poll__answers");
      pollAnswers.insertAdjacentHTML(
        "beforeEnd",
        `<button class="poll__answer"> ${answer} </button>`
      );
    });

    const btn = [...document.querySelectorAll(".poll__answer")];

    btn.forEach((elem) => {
      elem.addEventListener("click", () => {
        alert("СпасибоСпасибо, ваш голос засчитан!");
      });
    });
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
