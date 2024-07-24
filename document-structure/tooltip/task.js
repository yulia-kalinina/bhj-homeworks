const allTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

allTooltip.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.preventDefault();

    let linkTitleAttr = el.getAttribute("title");

    let addDiv = document.createElement("div");
    addDiv.className = "tooltip";
    addDiv.textContent = linkTitleAttr;

    let tooltip = document.querySelector(".tooltip");

    if (tooltip) {
      tooltip.remove();
    }

    if (tooltip && tooltip.textContent === linkTitleAttr) {
      tooltip.classList.toggle("tooltip_active");
      return;
    }

    el.insertAdjacentElement("afterEnd", addDiv);
    addDiv.classList.add("tooltip_active");

    const { left } = el.getBoundingClientRect();
    addDiv.style.position = "absolute";
    let allLeft = left + "px";
    addDiv.style.left = allLeft;
  });
});
