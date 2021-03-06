// Exercise 8 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20 % when the bill is less than $50,
//     2. Tip 15 % when the bill is between $50 and $200,
//         3. Tip 10 % if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill(bill + tip).
// (NOTE: To calculate 20 % of a value, simply multiply it with 20 / 100 = 0.2)

function tip(amt) { //this amt is local
    if (amt<50) {
        return 1.2
    } else if (amt<200) {
        return 1.15
    } else return 1.1    
}

let amt=null;
do {
    amt = prompt("What was the bill amount?");
    if (amt) {
        amt=parseInt(amt)
        alert (`Bill: ${amt} | Total bill including tip: ${(amt*tip(amt)).toFixed(2)}`)
        }
} while(amt)







