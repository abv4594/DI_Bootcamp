const divEle = document.querySelector("#container");
const buttons = ["blue", "yellow", "green", "pink"];

buttons.forEach(button => {
    //create a generic button
    let btn = document.createElement("button");
    btn.textContent = button;

    //append button to div
    divEle.appendChild(btn);

    //already create the event listener;
    btn.addEventListener("click", changeColor);
})

function changeColor(event) {
    document.body.style.backgroundColor = event.target.textContent;
}