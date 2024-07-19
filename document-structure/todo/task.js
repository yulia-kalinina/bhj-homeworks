const btn = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let addDiv = document.createElement("div");
  addDiv.className = "task";

  let inputText = taskInput.value;

  if (!taskInput.value) {
    return;
  }

  addDiv.innerHTML =
    '<div class="task__title">' +
    inputText +
    '</div><a href="#" class="task__remove">&times;</a></div>';

  taskList.appendChild(addDiv);
  taskInput.value = "";

  const taskRemove = Array.from(document.querySelectorAll(".task__remove"));

  taskRemove.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      e.preventDefault();
      elem.parentElement.remove();
    });
  });
});
