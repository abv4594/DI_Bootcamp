const colors = [
    'red',
    'orange',
    'orange',
    'yellow',
    'yellowgreen',
    'lightgreen',
    'green',
    'turquoise',
    'cyan',
    'lightskyblue',
    'dodgerblue',
    'blue',
    'darkblue',
    'indigo',
    'darkmagenta',
    'violet',
    'lightpink',
    'lightgray',
    'gray',
    'black',
    'white',
]

//fill collor grid

let colorGrid = document.querySelector(".colorGrid")

for (let color of colors){
    let colorDiv = document.createElement("div");
    colorDiv.classList.add("colorsquare");
    colorDiv.classList.add(color);
    colorGrid.appendChild(colorDiv);
}