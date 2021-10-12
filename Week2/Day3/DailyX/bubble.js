
const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Using the.toString() method convert the array to a string.


console.log(`using toString method: ${numbers.toString()}`);

// Using the.join()method convert the array to a string.Try passing different values into the join.
//     Eg.join(“+”), .join(” “), .join(“”)


console.log(`using join'+': ${numbers.join('+')}`);

console.log(`using join' ': ${numbers.join(' ')}`);

console.log(`using join'': ${numbers.join('')}`);

// Bonus: To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops(Not using built -in sort methods).
// The output should be: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
//     Use 2 “nested” for loops(Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
//     Requirement: Don’t copy paste solutions from Google

console.log("Now let's sort...");
console.log("-----------------");

let sorted = false; //we assume it's unsorted

do {
    sorted = true; //once inside we assume it's sorted
    for (let i=1;i<numbers.length;i++){
        if (numbers[i]>numbers[i-1]){
            //need to switch position
            [numbers[i], numbers[i-1]] = [numbers[i-1], numbers[i]];
            // need also to set sorted false because we need to run again
            sorted = false
        }
    }
} while (!sorted)

console.log(numbers);

