// Exercise 7 : Shopping List
// Instructions
let stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

let prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
} 
// Add the stock and prices objects to your js file.
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

cart = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList.In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1

function myBill(cart) {
    let sum=0;
    for (item of cart) {sum+=getPrice(item)}
    return sum;
}

function getPrice(item) {

    if (stock[item]>0) {
        stock[item]--
        return (prices[item])
    }
    return 0; //means inventory 0 or item not in inventory
}

console.log(myBill(cart));