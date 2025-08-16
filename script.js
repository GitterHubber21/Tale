const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const buttonBlock = document.getElementById("buttonBlock");
const arrowBody = document.getElementById("arrowBody");
const arrowTip = document.getElementById("arrowTip");


line1.style.animation = "typewriter 3s steps(60, end) forwards";

setTimeout(() => {
  line1.style.borderRight = "none";
  line2.style.animation = "typewriter 3s steps(60, end) forwards";
}, 3000);

setTimeout(() => {
  line2.style.borderRight = "none";
  buttonBlock.style.opacity = "1";
}, 6000);

setTimeout(() => {
  arrowBody.style.animation = "drawArrow 2s ease forwards";
}, 6000);


setTimeout(() => {
  arrowTip.style.animation = "drawArrow 1s ease forwards";
}, 8000);


document.querySelector(".get-started").addEventListener("click", () => {
  alert("Let's start writing together!");
});
