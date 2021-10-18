let btnRed = document.getElementById("btn-red");
let btnBlue = document.getElementById("btn-blue");

let title = document.getElementById("title")

// SYNTAX:
// element.addEventListener(DOM events, callback function);

// with a function as a callback function
function welcome() {
    console.log("hello")
}

btnRed.addEventListener("click", welcome)
btnBlue.addEventListener("click", welcome)


title.addEventListener("click", welcome)


// with anonymous function as a callback function
button.addEventListener("click", function () {
    console.log("hello")
})

button.addEventListener("mouseover", function () {
    console.log("hovered")
})

title.addEventListener("click", function () {
    console.log("hello")
})