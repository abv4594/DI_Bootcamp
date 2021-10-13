// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
//     Note : This function should work with any array;
// Example:

const array = [-1, 0, 3, 100, 99, 2, 99];// should return 100 
const array2 = ['a', 3, 4, 2]; // should return 4 
const array3 = []; // should return 0

function biggestNumberInArray(arr) {
    let biggest = 0;
    for (v of arr) {
        if (typeof(v)=="number") {
            biggest = v>biggest? v:biggest
        }
    }
    return biggest
}