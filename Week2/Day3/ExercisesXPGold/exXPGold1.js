// Exercise 1 : Building Management
// Instructions
let building = {
    numberLevels: 4,
    numberOfAptByLevel: {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        "Sarah": [3, 990],
        "Dan": [4, 1000],
        "David": [1, 500],
    },
}
// Console.log the number of levels in the building.
console.log(building["numberLevels"]);

//     Console.log how many apartments are on levels 1 and 3.
console.log(`Apartments in level 1: ${building["numberOfAptByLevel"][1]}`);
console.log(`Apartments in level 3: ${building["numberOfAptByLevel"][3]}`);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`Second tenant: ${building["nameOfTenants"][1]}. Number of rooms he has in his apartment ${building["numberOfRoomsAndRent"]["Dan"][0]}`);

// Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
let sarahRent = building["numberOfRoomsAndRent"]["Sarah"][1];
let davidRent = building["numberOfRoomsAndRent"]["David"][1];
let danRent = building["numberOfRoomsAndRent"]["Dan"][1];

console.log(`Sarah rent is ${sarahRent}`);
console.log(`David rent is ${davidRent}`);
console.log(`Dan rent is ${danRent}`);
console.log(`the sum of Sarah and David’s rent is bigger than Dan’s rent? ` + ((sarahRent + davidRent) > danRent));

// If it is than increase Dan’s rent.

if ((sarahRent + davidRent) > danRent) {
    let increase = parseInt(prompt("For how much you want to increase Dan's rent?"));
    building["numberOfRoomsAndRent"]["Dan"][1] += increase;
}

danRent = building["numberOfRoomsAndRent"]["Dan"][1];
console.log(`Dan rent is ${danRent}`);

