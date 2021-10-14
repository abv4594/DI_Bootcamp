// Instructions
// Prompt the user for several words(separated by commas).
// Put the words into an array.
//     Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to: ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

function maxLength(arr) {
    return Math.max(...arr.map((word)=>{return word.length}))
    //(10,4,9,13): returns 13
}

function fillSpace(str,length) {//returns a new str with spaces between str.length till length
    return str+(' '.repeat(length-str.length))
}

function getWords() { //returns array with user input 
    return prompt("Please enter words (separated by commas)").split(",");
}

// main
words = getWords();
maxl = maxLength(words);

console.log('*'.repeat(maxl+4)) //top outline
for (word of words){
    console.log('* '+fillSpace(word,maxl)+' *')
}
console.log('*'.repeat(maxl+4)) //bottom outline