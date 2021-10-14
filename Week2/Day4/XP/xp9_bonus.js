// Exercise 9 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night.The function should return the total price of the hotel.
// Define a function called planeRideCost().
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination: 300$
// If the user doesn’t answer or if the answer is not a string, ask again.
// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car.The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5 % discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
//     Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
//         Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost.
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.

// version without bonus

// variables:
const CostNight = 140;
const defaultDestination = 300;
const costRent = 40;
const flightCost = {
    london: 183,
    paris: 220
}

// Main:
function totalVacationCost() {
    let car = rentalCarCost(getNum("How many days for the car?"));
    let hotel = hotelCost(getNum("How many days for the hotel?"));
    let plane = planeRideCost(getStr("What is the destination?"));
    console.log(`The car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${plane}.`)
}

totalVacationCost();

// Data entry functions (for num and txt):
function getNum(txt) {
    let num = null;
    do {
        num = prompt(txt);
    } while (!/^\d+$/.test(num))
    return parseInt(num);
}

function getStr(txt) { //get a text and validates it's not a number or null
    let str = null;
    do {
        str = prompt(txt)
    } while (!(/^[a-z]+$/i.test(str)))
    return str;
}

// cost calculators:
function hotelCost(num) {
    return (CostNight * num)
}

function planeRideCost(dest) {
    
    if (flightCost[dest]) { //this line maybe not needed as I am checking user entry. 
        return flightCost[dest]
    } else { return defaultDestination }

}

function rentalCarCost(days) {
    // days = getNum("Please enter for how many days you would like to rent the car:")
    if (days > 10) {
        return (days * costRent * 0.95).toFixed(2)
    } else { return (days * costRent).toFixed(2) }
}

