//Optimal solution below (down less optmal one):
let sentence = prompt("Enter a sentence:");
console.log(sentence.replace(/not(\s\w+)*\sbad/, 'good'));

// Instructions
// Create a variable called sentence.The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.
let sentence = prompt("Please enter a sentence that contains the words 'not' and/or 'bad'");
let newSentence; //stores the result
console.log(sentence);


// Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
let wordNot = sentence.search(/not/);
console.log(wordNot);

// Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
let wordBad = sentence.search(/bad/); 
console.log(wordBad);

// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
if (wordBad>wordNot){
    newSentence = sentence.replace(/not(\s\w+)*\sbad/,'good')
} else { newSentence = sentence}

console.log(newSentence);

// For example, the result here should be: “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.

//   Your string is: 'This dinner is not that bad ! You cook well',
//     --> the result is: 'This dinner is good ! You cook well'

//   Your string is: 'This movie is not so bad !'
// --> the result is: 'This movie is good !'

//   Your string is: 'This dinner is bad !'
// --> the result is: 'This dinner is bad !'