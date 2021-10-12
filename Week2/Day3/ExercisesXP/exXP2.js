// Exercise 2 : List Of People
// Instructions

function txt(msg) {console.log(msg)}

let people = ["Greg", "Mary", "Devon", "James"]
txt('Write code to remove “Greg” from the people array.')
console.log(people);
people.shift();
console.log(people);

txt('Write code to replace “James” to “Jason”');
people[people.length-1] = "Jason";
console.log(people);

txt('Write code to add your name to the end of the people array.')
people.push('Henry');
console.log(people);

txt('Using a loop, iterate through the people array and console.log each person')
for (const person of people){console.log(person)}

txt('Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.')
for (person of people) { 
    console.log(person);
    if (person==="Jason") {break};
}
txt(people);

// Write code to make a copy of the people array using slice.The copy should NOT include “Mary” or your name.
let lessPeople = people.slice(1,-1);
txt(lessPeople);
txt(people);

// Write code that console.logs Mary’s index.take a look at indexOf on google.
txt(people.indexOf('Mary'));
txt(lessPeople.indexOf('Mary'));

// Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
txt(people.indexOf('foo'));

// Create a variable called last which value is the last element of the array.
let last = people[people.length-1]; // or last = people.slice(-1);
txt(last);
//     Hint: What is the relationship between the index of the last element in the array and the length of the array ?