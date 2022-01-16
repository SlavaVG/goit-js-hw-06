function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomHexColor2() {
  return `#${Math.floor(Math.random() * 90111895).toString(16)}`;
}
const chColor = document.querySelector(".change-color");
const colorTx = document.querySelector(".color");

chColor.addEventListener('click', updateColor);


function updateColor(event) {
  let randColor = getRandomHexColor();
  let randColor2 = getRandomHexColor2();
  document.body.style.backgroundColor = randColor;
  colorTx.style.color = randColor2;
  colorTx.textContent = randColor;
}
