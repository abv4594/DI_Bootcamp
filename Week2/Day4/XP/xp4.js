// Exercise 4: Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome: 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum: 5313




function isDivisible() {
    let divNumbers = []; //will store the divisible by 23
    for (let num=0;num<=500;num++) {
        if (num%23===0){
            console.log(num);
            divNumbers.push(num);
        }
    }
    console.log(`Sum equals:${sumArr(divNumbers)}`);
}

function sumArr(arr) {
    let sum = 0;
    for (let num of arr) {sum+=num}
    return sum
}

isDivisible();

// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum

function isDivisible2(divNumber) {
    let divNumbers = []; //will store the divisible by 23
    for (let num = 0; num <= 500; num++) {
        if (num % divNumber === 0) {
            console.log(num);
            divNumbers.push(num);
        }
    }
    console.log(`Sum equals:${sumArr(divNumbers)}`);
}

isDivisible2(parseInt(prompt('Enter a number:')));

isDivisible2(3);
isDivisible2(45);