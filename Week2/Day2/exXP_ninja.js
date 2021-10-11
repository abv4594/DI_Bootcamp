// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
//     Notes: The dates are given in the format YYYY

let year1 = parseInt(prompt("Please enter the year the first person was born:"));
let year2 = parseInt(prompt("Please enter the year the second person was born:"));

let younger = Math.max(year1, year2);
let older = Math.min(year1,year2);
let i = younger;

while (i-younger!=((i-older)/2)){
    i += 1
}
console.log(`The younger one is exactly half the age of the older in ${i}`);

// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint: This exercise has 2 parts.First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace(spaces)
// Must not be greater than 5 digits in length


let zip = prompt('Please enter zip code (w/o Regex Cheker):');

// Without regular expression:
let check = "success";
if (zip.length!=5) {
    check = "error"
} else if (parseInt(zip).toString().length!=5) {
    check = "error"
}
console.log(check);


//With regular expression:

let zip2 = prompt('Please enter zip code (with Regex Cheker):');

// Without regular expression:
let check2 = "success"
if (!(/^[0-9]{5,5}$/.test(zip2))){
check2 = "error"
}
console.log(check2);

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint: Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
//     Bonus: Replace the vowels with another character and console.log the result

word = prompt("Please enter a word:");
console.log('Removing the vowels:')
console.log(word.replace(/[aeiou]/ig,""));
console.log('Replacing by 1,2,3,4,5 depending on the vowel');
let code = {
    'a': '1',
    'e': '2',
    'i': '3',
    'o': '4',
    'u': '5'
}

for (key in code) {
    word = word.replace(new RegExp(key,'ig'), code[key]);
}
console.log(word);



