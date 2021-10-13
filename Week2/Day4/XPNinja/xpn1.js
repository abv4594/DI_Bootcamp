// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

// num = parseInt(prompt('Enter a number 1 to 100:'));

let num = Math.floor(Math.random() * 100) + 1;

for (let i=1;i<=num;i++) {
    if (i%2===0){console.log(i)}
}
