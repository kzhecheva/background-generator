var css = document.querySelector('h4');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var random = document.querySelector('.random');
var body = document.getElementById('gradient');

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);

function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";

    css.textContent = body.style.background + ";";
}

function setRandomGradient() {
    color1.value = fullColorHex();
    color2.value = fullColorHex();
    setGradient();
}

function fullColorHex() {
    var red = rgbToHex();
    var green = rgbToHex();
    var blue = rgbToHex();
    return "#" + red + green + blue;
};

function rgbToHex() {
    var rgb = Math.floor(Math.random() * 256);
    var hex = Number(rgb).toString(16);
    if (hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
};