// Exercise 6 : What’s In My Wallet ?
//     Instructions
// Given a item price and an array representing the amount of change in your pocket, determine whether or not you can afford the item.
// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
//     Quarters = 0.25
// Dimes = 0.10
// Nickels = 0.05
// Pennies = 0.01
// To illustrate:
// changeEnough([25, 20, 5, 0], 4.25) should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25(the total amount due)

// Examples

// changeEnough([2, 100, 0, 0], 14.11) ➞ false
// changeEnough([0, 0, 20, 5], 0.75) ➞ true

const Change = [0.25, 0.10, 0.05, 0.01];

function changeEnough(arr, value) {
    return (sumArr(multArr(arr, Change))>value)
}

function multArr (arr1, arr2) { // multiply two arrays of same length, returns an Array
    let arr = [];
    for (let i in arr1) {arr.push(arr1[i]*arr2[i])}
    return arr;
}

function sumArr (arr) {
    let sum=0;
    for (let v of arr){sum+=v}
    return sum
}

console.log(changeEnough([2, 100, 0, 0], 14.11)); // false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // true
