// Exercise 7 : Secret Group
// Instructions
names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]
// A group of friends have decided to start a secret society.The society’s name will be the first letter of each of their names sorted in alphabetical order.
//     Hint: a string is an array of letters
// Console.log the name of their secret society.
let socName = '';
for (let v of names){socName+=v[0]}
console.log(socName.split('').sort().join(''));
