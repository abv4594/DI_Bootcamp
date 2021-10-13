// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
//     Note:
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

//     capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']

function isEven(num) {
    return(num%2===0)
}

function capStr(str,capEven) { //if capEven is flagged, we capitalize even indexes. Odd otherwise.
   
    return str.split("").map((letter,i) => {
        if (capEven && isEven(i)) {return letter.toUpperCase()}
        else if (!capEven && !isEven(i)) {return letter.toUpperCase()}
        else {return letter}
    }).join("")
    
}

function capitalize(str) {
    return [capStr(str,true), capStr(str,false)]
}
