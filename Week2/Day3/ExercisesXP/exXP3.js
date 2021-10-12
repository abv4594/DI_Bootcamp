// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
//     Tip : Which while loop is more relevant for this situation ?
//         Hint : Check the data type you receive from the prompt(ie.typeof method)

let num;
do {
    num = parseInt(prompt('Please enter a number:'))
} while (num<10)

