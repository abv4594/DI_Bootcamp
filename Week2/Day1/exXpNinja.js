// Exercise 1 : Find Nemo
// Instructions
// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo !"
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]!".
//     Bonus : If you can’t find Nemo, console.log “I can’t find Nemo”.
// Hint: use an if/else statement

// Some examples:

// "I love the movie named Nemo !" ➞ "I found Nemo at 5"
// "Nemo is a cute fish" ➞ "I found Nemo at 0"
// "My fish is called Nemo, I love it" ➞ "I found Nemo at 4"

let sentence = prompt("Please enter a sentence containing the word “Nemo”");
let words = sentence.split(' ');
let pos = words.indexOf("Nemo");
if (pos==-1) {
    console.log("I can't find Nemo");
} else {
    console.log("I found Nemo at " + pos);
}

// Exercise 3 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas, console.log the sum of the numbers.
//     Hint: use some string methods

// Examples
// "2,3"➞ 5

let nums = prompt('Please enter a string of numbers separated by commas');

let nums_exp = nums.replace(/,/g, "+");
console.log(nums_exp);

// Solution (seems not to work all the time):
console.log('Solution:');
console.log(eval(nums_exp));


// Exercise 4 : Boom
// Instructions
// Hint: if statement(tomorrow’s lesson)

// Prompt the user for a number.Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s(n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
//     Examples
// 4 ➞ "Boooom!"
// // There are 4 "o"s and 4 is divisible by 2 (exclamation mark included)
// 1 ➞ "boom"
// // 1 is lower than 2, so we return "boom"


function boom(num) {

    if (num < 2) {
        return "boom"
    } else {
        let word = "B" + "o".repeat(num) + "m";
        if (num%2==0) word+="!";
        if (num%5==0) word = word.toUpperCase();
        return word;
    }
 }

 num = parseInt(prompt("Please enter a number"));

 console.log(boom(num));





let num = parseInt(prompt("Please enter a number"));

let word = 



