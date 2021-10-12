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

let numLevels = parseInt(prompt("How many levels for the pattern?"));

for (let outCounter = 1; outCounter<=numLevels; outCounter++) {
    let strOut = "";
    for (let innerCounter =1; innerCounter<=outCounter; innerCounter++) {
        strOut += '* ';
    }
    console.log(strOut);
}

