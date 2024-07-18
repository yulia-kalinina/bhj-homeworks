const allTooltip = Array.from(document.querySelectorAll(".has-tooltip"));

allTooltip.forEach((el) => {
  el.addEventListener("click", function (event) {
    event.preventDefault();

    let tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.remove();
    }

    el.insertAdjacentHTML(
      "afterEnd",
      '<div class="tooltip tooltip_active"></div>'
    );

    let tooltipNew = document.querySelector(".tooltip");
    tooltipNew.textContent = el.getAttribute("title");

    const { left } = el.getBoundingClientRect();
    tooltipNew.style.position = "absolute";
    let allLeft = left + "px";
    tooltipNew.style.left = allLeft;
  });
});
