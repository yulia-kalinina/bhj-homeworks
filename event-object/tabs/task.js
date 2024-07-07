const allTabs = Array.from(document.querySelectorAll(".tab"));
const allTabsContent = Array.from(document.querySelectorAll(".tab__content"));

function cleanActive() {
  for (i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove("tab_active");
  }
  for (e = 0; e < allTabsContent.length; e++) {
    allTabsContent[e].classList.remove("tab__content_active");
  }
}

allTabs.forEach((tab, index) => {
  tab.onclick = function () {
    cleanActive();
    allTabs[index].classList.add("tab_active");
    let findIndex = allTabs.indexOf(allTabs[index]);
    allTabsContent[findIndex].classList.add("tab__content_active");
    return false;
  };
});
