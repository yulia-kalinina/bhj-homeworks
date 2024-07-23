const btn = document.getElementById("tasks__add");
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let addDiv = document.createElement("div");
  addDiv.className = "task";

  taskInput.value = taskInput.value.trim();
  let inputText = taskInput.value;

  if (!inputText) {
    return;
  }

  addDiv.innerHTML =
    '<div class="task__title">' +
    inputText +
    '</div><a href="#" class="task__remove">&times;</a></div>';

  taskList.appendChild(addDiv);
  taskInput.value = "";

  let taskRemove = addDiv.querySelector(".task__remove");

  taskRemove.addEventListener("click", (e) => {
    e.preventDefault();
    taskRemove.parentElement.remove();
  });
});
