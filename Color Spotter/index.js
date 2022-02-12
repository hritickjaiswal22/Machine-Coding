const palleteBoxes = document.querySelectorAll(".palleteBox");
const container = document.querySelector(".container");
let selectedColor = null;

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("palleteBox")) {
    selectedColor = e.target.style.backgroundColor;
  }

  if (e.target.className === "box") {
    if (selectedColor) {
      e.target.style.backgroundColor = selectedColor;
    }
  }
});

for (const palleteBox of palleteBoxes) {
  const randomColor = "#";
  palleteBox.style.backgroundColor =
    randomColor + Math.floor(Math.random() * 16777215).toString(16);
}
