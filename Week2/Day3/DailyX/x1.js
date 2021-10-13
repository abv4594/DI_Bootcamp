// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops(Nested means one inside the other - check out “nested for loops” on Google).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

const NumLevels = parseInt(prompt("How many levels for the pattern?"));

// with nested loop

for (let outCounter = 1; outCounter<=NumLevels; outCounter++) {
    let strOut = "";
    for (let innerCounter =1; innerCounter<=outCounter; innerCounter++) {
        strOut += '* ';
    }
    console.log(strOut);
}

// with simple loop

console.log("With simple loop >>>> ");

for (let counter = 1; counter<=NumLevels; counter++) {
    console.log('* '.repeat(counter));
}

