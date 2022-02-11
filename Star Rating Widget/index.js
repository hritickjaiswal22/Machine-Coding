const widgetBox = document.querySelector(".widgetBox");
const icons = document.querySelectorAll(".icon");
const span = document.querySelector("span");

widgetBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("icon")) {
    for (const icon of icons) {
      icon.classList.remove("colored");
    }

    let count = 0;

    for (const icon of icons) {
      icon.classList.add("colored");
      count++;

      if (icon === e.target) break;
    }

    span.innerText = `Rating : ${count}`;
  }
});
