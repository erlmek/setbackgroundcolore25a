const colArray = ["red", "green", "yellow", "blue", "orange"]

const ddColor = document.getElementById("ddColor");
console.log(ddColor);

const pbColor = document.getElementById("pbSetColor");
console.log(pbColor);

const bdy = document.querySelector("body");

function fillDropdown(color) {
    const el = document.createElement("option")
    el.value = color;
    el.textContent = color;
    ddColor.appendChild(el);
}

function addColors(btn) {
    ddColor.innerHTML = ""
    colArray.forEach(fillDropdown);
    console.log(ddColor.innerHTML)
    //console.log(document.all);
}

function setBackgroundColor() {
    const selindex = ddColor.selectedIndex;
    const selectedOption = ddColor.options[selindex];
    console.log(selectedOption);
    const color = selectedOption.innerText
    bdy.style.backgroundColor = color;
}

pbColor.addEventListener("click", addColors);

ddColor.addEventListener('change', setBackgroundColor)

