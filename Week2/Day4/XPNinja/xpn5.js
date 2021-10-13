// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list = [1, 2, 3, 3, 3, 3, 4, 5] newList = [1, 2, 3, 4, 5]
// Example list = [1, 2, 3, 3, 3, 3, 4, 5] newList = [1, 2, 3, 4, 5]

function unique (arr) {
    new_arr = [];
    for (v of arr){
        if (!(new_arr.includes(v))){new_arr.push(v)} 
    }
    return new_arr;
}