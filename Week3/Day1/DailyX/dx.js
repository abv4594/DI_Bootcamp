//Configuration files

planet_config_file = [ //config_file with information about the planets: name, color, size(x), size(y)
    ["mercury", "red", "30px", "30px"],
    ["venus", "gray", "48px", "48px"],
    ["earth", "blue", "60px", "60px"],
    ["mars", "orange", "55px", "55px"],
    ["jupiter", "brown", "70px", "70px"],
    ["saturn", "gray", "80px", "80px"],
    ["uranus", "purple", "50px", "50px"],
    ["neptune", "pink", "30px", "30px"]
]

moon_config_file = [ //name of the planet (must match the name of the planet in planet_config, relative position of the moon (x,y))
    ["earth", "-30px", "40px"],
    ["mars", "70px","10px"],
    ["mars", "0px","60px"]
    //Jupiter has 79
    //Saturn has 82
] // you can add how many moons you want. Code will take care.

//Building objects

//a class (template) for Planets

let Planet = class {
    constructor(color, height, width) {
        this.color = color;
        this.height = height;
        this.width = width;
        this.moons = []; //just initialize an array of moons
    }
}

//a class (template) for Moons

let Moon = class {
    constructor(vpos, hpos) {
        this.vpos = vpos;
        this.hpos = hpos
    }
}

let solarSystem = {}; // this object will hold planets, with their respective moons

// Building the solar system!

// First the planets:
planet_config_file.forEach(line => solarSystem[line[0]]=new Planet(line[1],line[2],line[3]));


// Then the moons. Notice moons are arrays inside the objects (could be objects, but for next release)
moon_config_file.forEach(line => solarSystem[line[0]]["moons"].push(new Moon(line[1],line[2])));

// Solar System is ready

// Now Solar System holds something like:
// SolarSystem = {
//     earth: {
//         color:
//         height:
//         width:
//         moons: Array of moons objects
//     } ...
// }


//Displaying the solar system in HTML


let secEle = document.getElementsByClassName("listPlanets"); //get the section 

Object.values(solarSystem).forEach(planet=>{ // we will iterate over each object(planet) of the SolarSystem

    let divEle = document.createElement("div"); // div which holds the planet
    divEle.classList.add("planet"); // add the generic css class for the planet
    divEle.style.backgroundColor = planet["color"]; // planet color - set color according the object
    divEle.style.height = planet["height"]; // planet sizing
    divEle.style.width = planet["width"];

    if (planet["moons"].length>0) { // if this planet has moons
        planet["moons"].forEach(moon => { // a planet can have multiple moons
            let divMoon = document.createElement("div");
            divMoon.classList.add("moon");
            divMoon.style.top = moon["vpos"];
            divMoon.style.left = moon["hpos"];
            divEle.appendChild(divMoon);
        });
    }

    secEle[0].appendChild(divEle);//attention with the fact getElements return an Array
})







