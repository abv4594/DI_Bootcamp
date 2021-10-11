// Exercise 1: Simple If/Else Statement

// Create 2 variables, x and y.Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// Example:

// let x = 5;
// let y = 2;

let x = 10;
let y = 10;
var bigger 

if (x>y) {
    bigger = "x"
} else if (y>x) {
    bigger = "y"
} else { bigger = false}

if (bigger) {
    console.log(`${bigger} is the biggest number`)
} else {
    console.log("Numbers are equal")
}

// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.

let newDog = "Chihuahua";

// Check and display how many letters are in newDog.

console.log(newDog.length);

// Display the newDog variable in uppercase and then in lowercase(no need to create new variables, just console.log twice).

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log("I dont care, I prefer cats")
}

// Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.

num = parseInt(prompt("Please enter a number:"));

// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

if (num % 2 == 0) {
    console.log(`${num} is an even number`)
} else {
    console.log(`${num} is an odd number`)
}

// Exercise 4: Group Chat
// Instructions
// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
// Using the array above, console.log the number of users in a group chat based on the following rules:
// If there is no users(the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
//     If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
//         If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
//         For example, if there are 5 users, it should display:
//         name_user1, name_user2 and 3 more are online

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
//let users = ["Lea123", "X", "Y"];
let txt;

switch (users.length){
    case 0:
        txt = 'no one is online';
        break;
    case 1:
        txt = `${users[0]} is online`;
        break;
    case 2:
        txt = `${users[0]} and ${users[1]} are online`;
        break;
    default:
        txt = `${users[0]}, ${users[1]} and ${users.length-2} more are online`;
}

console.log(txt);


