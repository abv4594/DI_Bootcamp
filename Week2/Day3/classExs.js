// for (let num=0; num<=15; num+=1){
//     if (num%2==0) {
//         console.log(`Number ${num} is even`);
//     } else {
//         console.log(`Number ${num} is odd`);
//     }
// }

let shopping = ["apple", "pear", "melon", "banana"];
// 1. Loop over this array, and add transferm the words in plural
//     ("s" at the end) of every fruit

// output = ["apples", "pears", "melons", "bananas"];

for (let i=0; i<shopping.length; i++) {
    shopping[i] += 's';
}
console.log(shopping);

let prices = [23, 15, 34, 10];
let sum = 0;

for (let value of prices) {
    sum+=value;
}
console.log(sum);
// 1. Loop over this array, and console.log the sum of the prices
// 2. Where should you console log