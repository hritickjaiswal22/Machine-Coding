// ! Incomplete

const btn = document.querySelector(".btn");
const inner = document.querySelector(".inner");

function clickHandler() {
  inner.style.animationName = "fullWidth";
  setTimeout(() => {
    inner.style.animationName = "";
  }, 3000);
}

btn.addEventListener("click", clickHandler);
