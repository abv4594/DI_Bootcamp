// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others.You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.
// Your function must calculate and console.log the average.
// If the average is above 65 let the user know they passed
// If the average is below 65 let the user know they failed and must repeat the course.
//     Bonus Try and split parts 1, 2 and 3, 4 of this exercise to two separate functions.
// Hint One function must call the other.

let numGrades = parseInt(prompt("Please enter how many grades:"))
let grades = [];

for (let i=1;i<=numGrades;i++) {
    grades[i-1]=parseInt(prompt(`Please enter grade ${i}:`))
}

function sumGrades(grades){
    let sum = 0;
    for (v of grades){sum+=v}
    return sum
}

function avgGrades(grades){
    return (sumGrades(grades)/grades.length)
}

// Your function must calculate and console.log the average.
let avg = avgGrades(grades);
console.log(`Grades average is ${avg}`);
if (avg>65) {
    console.log('You passed!')
} else {console.log('You failed and must repeat the course!')}


