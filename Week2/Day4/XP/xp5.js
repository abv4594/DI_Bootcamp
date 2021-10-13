// Exercise 5 : Amazon Shopping
// Instructions
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// Create a function called checkBasket().
// It should:
// prompt the user for an item
// let the user know if the item is in the basket
// Hint: Use the in keyword inside the conditional

let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(){

    let item;
    do {
        item = (prompt('Please enter an item:'))
    } while (!item) // I saw that if item is null it will crash below. So while it's null keep asking the user.
    item = item.toLowerCase();
    if (item in amazonBasket) {console.log(`${capitalize(item)} is in the basket and its price is ${amazonBasket[item]}`)}
}

function capitalize(str){
    return (str[0].toUpperCase() + str.slice(1).toLowerCase())
}

checkBasket();

