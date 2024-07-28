const form = document.getElementById("signin__form");
const welcome = document.querySelector(".welcome");
const spanWithId = document.getElementById("user_id");

const savedId = localStorage.getItem("userId");

if (savedId) {
  welcome.classList.add("welcome_active");
  spanWithId.textContent = savedId;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
      const data = JSON.parse(xhr.responseText);
      let status = data["success"];

      if (status === false) {
        alert("Неверный логин/пароль");
      } else {
        let userId = data["user_id"];
        localStorage.userId = userId;

        welcome.classList.add("welcome_active");
        spanWithId.textContent = userId;
      }
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
  const formData = new FormData(form);
  xhr.send(formData);
});
