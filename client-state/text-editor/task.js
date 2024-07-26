const editor = document.getElementById("editor");

editor.value = localStorage.getItem("text");

editor.addEventListener("input", () =>
  localStorage.setItem("text", editor.value)
);

const card = document.querySelector(".card");
const btn = document.createElement("button");
btn.textContent = "Очистить содержимое";
btn.setAttribute("type", "reset");
card.appendChild(btn);

btn.addEventListener("click", () => {
  editor.value = "";
  localStorage.removeItem("text");
});
