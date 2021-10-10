//Exercise XP Gold

// Exercise 1 : Favorite Color
// Instructions

let me = ["my", "favorite", "color", "is", "blue"];

// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

console.log(me.join());
console.log(me.join(' '));

// Exercise 2 : Mixup
// Instructions
// Create 2 variables.The values should be strings.For example:

let str1 = "mix";
let str2 = "pod";

// Slice out and swap the first 2 characters of the 2 strings from part 1.
// Create a third variable where the value is the concatenation of the two strings from the part 1(separated by a space).
// Finally console.log the new concatenated string.

function str_swap(str1, str2, num) { //

    str1_swap = str2.slice(0, num) + str1.slice(num);
    str2_swap = str1.slice(0, num) + str2.slice(num);

    return str1_swap + ' ' + str2_swap;

}

// console.log(str_swap(str1, str2,2));
// console.log(str_swap('Hello', 'World', 3)); // attention: the answers indicates you swapped the first 3 letters

// Exercise 3 : Calculator
// Instructions
// Make a Calculator.Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
//     BONUS: Make a program that can subtract, multiply, and also divide!

///////// Solution 1 /////////
let num1 = prompt('Please enter number 1');
let num2 = prompt('Please enter number 2');
let op = prompt('Please enter operation +, -, *, or /');
alert(eval(num1 + op + num2));

///////// Solution 2 (longer) /////////
let num1 = parseInt(prompt('Please enter number 1'));
let num2 = parseInt(prompt('Please enter number 2'));
let op = prompt('Please enter operation +, -, *, or /');
switch (op) {
    case '+': 
        var result = num1 + num2; //using var so can be used outside the case
        break;
    case '-': 
        var result = num1 - num2;
        break;
    case '*': 
        var result = num1 * num2;
        break;
    case '/': 
        var result = num1 / num2;
        break;
    default: 
        alert("Please enter a valid operation");


}

alert("The result is: " + result);





