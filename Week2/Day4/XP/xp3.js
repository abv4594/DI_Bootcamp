// Exercise 3: Odd Or Even
// Instructions
// Create a function called checkNumber() that takes no parameter.
// In the function, loop through numbers 0 to 100.
// Add an if/else block
// If the number is even, console.log "the number <number> is even"
// Else, console.log "the number <number> is odd"
// Call the function

function checkNumber() {
    for (let num=1; num<=100; num++) {
        let numberIs = "is odd";
        if (num % 2 === 0) {
            numberIs = "is even"; 
        } 
        console.log(`The number ${num} is ${numberIs}`);
    }    
}

checkNumber();