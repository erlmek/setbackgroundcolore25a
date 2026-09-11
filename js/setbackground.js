console.log("setbackground.js");

let inp = document.querySelector(".inpColor");
console.log(inp);

let inpColorValue = document.querySelector(".inpColorValue")
console.log(inpColorValue);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

const inpColorPicker = document.getElementById("inpColorPicker");
console.log(inpColorPicker)

let bdy = document.querySelector("body");
console.log(bdy);

const pTags = document.getElementsByTagName('p')
console.log(pTags)
const pArray = Array.from(pTags)

let glbFontSize = 20;

function increaseFont(element) {
    //debugger;  aktiverer debugger
    element.style.fontSize = glbFontSize + "px";
    glbFontSize += 2;
    let fontSize = element.style.fontSize;
    console.log(fontSize);
}

pArray.forEach(increaseFont);

function setBackground() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

function useColorPicker() {
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

pbCol.addEventListener("click", setBackground);
inpColorPicker.addEventListener("input", useColorPicker);

document.addEventListener("keyup", setBackground)
