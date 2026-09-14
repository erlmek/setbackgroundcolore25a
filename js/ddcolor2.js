const colArray2 = [["red","#ff0000"], ["green","#00ff00"], ["yellow","#ffff00"], ["purple","#1f35a9"]]

const colorObjects = [{"name" : "red", "id" : "#ff0000"}, {"name" : "green", "id" : "#00ff00"}, {"name" : "yellow", "id" : "#ffff00"}, {"name" : "purple", "id" : "#1f35a9"}]

const ddColor2 = document.getElementById("ddColor2");
console.log(ddColor);

const pbColor2 = document.getElementById("pbSetColor2");
console.log(pbColor2);

function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item[0];
    el.value = item[1];
    ddColor2.appendChild(el);
}

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colorObjects.forEach(fillDropdown2);
    console.log(ddColor2.innerHTML)
}

function setBackgroundColor2() {
    const selindex = ddColor2.selectedIndex;
    const selectedOption = ddColor2.options[selindex];
    console.log(selectedOption);
    const color = selectedOption.value
    bdy.style.backgroundColor = color;
}

pbColor2.addEventListener("click", addColors2);

ddColor2.addEventListener('change', setBackgroundColor2)
