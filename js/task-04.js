const deCr = document.querySelector("[data-action='decrement']");
const inRe = document.querySelector("[data-action='increment']");

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

inRe.addEventListener("click", increment);
deCr.addEventListener("click", decrement);