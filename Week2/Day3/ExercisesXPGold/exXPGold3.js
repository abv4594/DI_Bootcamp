// Exercise 3 : Playing With Numbers
// Instructions

let age = [20, 5, 12, 43, 98, 55];

// Requirements: Don’t use built -in Javascript methods to answer the following questions.You have to create the logic by yourself.Use simple for and while loops.
// 1. Console.log the sum of all the numbers in the age array.

let sum=0;
for (let num of age){sum+=num}
console.log(sum);

// 2. Console.log the largest age in the array.
let largest = age[0]
for (let i=1; i<age.length; i++) {
    if (age[i]>largest) {largest=age[i]}
}
console.log(`Largest is ${largest}`);


