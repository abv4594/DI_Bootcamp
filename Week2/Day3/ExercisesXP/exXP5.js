// Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
//     Console.log the keys. (using a for loop).
//         Console.log the values. (using a for loop).

family = {
    name: "Trejgier",
    responsible: "Henry",
    members: ["Henry", "Rachel", "Danielle", "Hanna"],
    country: "Israel",
    city: "Raanana",
    origin: "Brazil"
}

for (let k in family){console.log(k)}
console.log('----------');
for (let k in family){console.log(family[k])}
console.log('Another way to access values:');
for (let v of Object.values(family)){console.log(v)} // notation for ... of doesn't work for objects


