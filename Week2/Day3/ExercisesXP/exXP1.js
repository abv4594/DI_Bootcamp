// Exercise 1 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your favorite colors.

const numColors = prompt('How many favorite Colors');
let colors = []
for (let counter = 0; counter < numColors; counter++) {
    colors[counter] = prompt(`Enter favorite color ${counter + 1}:`)
}
console.log('Your favorite colors are:');

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//     Hint : create an array of suffixes to do the Bonus

const SUFFIXES = ['st','nd','rd', 'th']

for (let idx in colors){
    //idx starts in '0' - string type
    let pos = parseInt(idx)+1; // convert idx to Int and adds 1 (first color, second color, etc)
    let lastDigPos = pos%10; //will return the last digit of the position (if it's color 33 returns 3)

    //special case of numbers between 10 and 20 (10th, 11th versus 20th, 21st, 22nd or 33rd,...)
    let suffix =  (!(pos>=10 && pos<=20) && (lastDigPos >= 1 && lastDigPos <= 3))? SUFFIXES[lastDigPos-1] : 'th'; 
    console.log(`My ${pos+suffix} choice: ${colors[idx]}`)
}






