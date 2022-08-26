var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");
var inputColor1 = document.getElementById("color1");
var inputColor2 = document.getElementById("color2");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


inputColor1.value = generateRandomColor().value;
inputColor2.value = generateRandomColor().value;

function generateRandomColor() {
    const maxVal = 0xFFFFFF; // 16777215
    const randomNumber = Math.floor(Math.random() * maxVal).toString(16);
    const randColor = randomNumber.padStart(6, 0);
    return `#${randColor.toUpperCase()}`
  }

  button.addEventListener("click", () => {
    inputColor1.value = generateRandomColor();
    inputColor2.value = generateRandomColor();
    setGradient();
  });
