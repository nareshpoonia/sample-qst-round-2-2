const inputSection = document.querySelector(".input-section");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");

btnPlus.addEventListener("click", btnPlusHandler);

let fontSize = 10;

function btnPlusHandler() {
  fontSize = fontSize + 2;
  inputSection.style.fontSize = fontSize + "px";
}

btnMinus.addEventListener("click", btnMinusHandler);

function btnMinusHandler() {
  fontSize = fontSize - 2;
  inputSection.style.fontSize = fontSize + "px";
}
