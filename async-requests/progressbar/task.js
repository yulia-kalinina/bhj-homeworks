const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
  const formData = new FormData(form);
  xhr.send(formData);
});
