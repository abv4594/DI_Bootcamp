const colors = [
    "rgb(255,0,22)",
    "rgb(255, 58, 26)",
    "rgb(255, 154, 41)",
    "rgb(254, 254, 61)",
    "rgb(135, 198, 68)",
    "rgb(117, 235, 140",
    "rgb(0, 117, 26)",
    "rgb(0, 220, 202)",
    "rgb(0, 255, 254)",
    "rgb(115, 200, 246)",
    "rgb(0, 134, 249)",
    "rgb(26, 17, 247)",
    "rgb(12, 5, 124)",
    "rgb(70, 3, 115",
    "rgb(135, 0, 124)",
    "rgb(245, 119, 131)",
    "rgb(255, 173, 185)",
    "rgb(205, 205, 205)",
    "rgb(117, 117, 117)",
    "rgb(0, 0, 0)",
    "rgb(255, 255, 255)"
]

//flow control
let colorPicked = "";
let mouseDown = false;

//clear Button event
let clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click",clearPressed);

//fill collor grid 

let colorGrid = document.querySelector(".colorGrid")

for (let color of colors){
    let colorDiv = document.createElement("div");
    colorDiv.classList.add("colorPallete");
    colorDiv.style.backgroundColor = color;
    colorDiv.addEventListener("mousedown",selectColor);
    colorDiv.addEventListener("mouseup", pickColor);
    colorGrid.appendChild(colorDiv)
}

// fill canvas 60x24

let drawGrid = document.querySelector(".drawGrid");

for (let i=1;i<=60*24;i++) {
    square = document.createElement("div");
    square.classList.add("colorSquare");
    square.addEventListener("mousedown", paintSquare);
    square.addEventListener("mouseup",endPaintSquare);
    square.addEventListener("mouseover",contPaintSquare);
    drawGrid.appendChild(square);
}

function selectColor(event){ 
    colorPicked=event.target.style.backgroundColor
}

function pickColor(event) {
    if (event.target.style.backgroundColor != colorPicked) {
        colorPicked=""
    }
}

function paintSquare(event) {
    mouseDown = true;
    event.target.style.backgroundColor = colorPicked;
}

function endPaintSquare(event) {
    mouseDown = false;
}

function contPaintSquare(event) {
    if (mouseDown) {event.target.style.backgroundColor=colorPicked}
}

function clearPressed() {
    colorPicked = "";
    let squares = document.querySelector(".drawGrid").children;
    for (let square of squares) {
        square.style.backgroundColor = "white"
    }

}
