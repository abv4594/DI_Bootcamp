let userCart = {
    username: "John",
    password: 1234,
    isUserSignedIn: true,
    cart: {
        apple: 2,
        banana: 1,
        pear: 5
    },
    prices: {
        apple: 0.5,
        banana: 0.8646466363,
        pear: 0.2
    }
};

// // Add the lastname Smith to the object
// userCart["lastname"]="Smith";
// console.log(userCart);

// // Change the price of the pear, so it will contain the Taxes
// userCart["prices"]["pear"] *= 1.17;
// console.log(userCart);

// // Ask the user for the fruit he wants between Apple, Banana and Pear.Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// let user_fruit = prompt("Which fruit do you want? Apple, Banana or Pear?");

// // Console.log the price for the specific fruit the user wants
// console.log(userCart["prices"][user_fruit.toLowerCase()]);

// //5. Change the price of banana, round it 2 numbers avec the comma

// userCart["prices"]["banana"] = +userCart["prices"]["banana"].toFixed(2);
// console.log(userCart);

// 1. If the user is SignedIn - show him his name and password

if (userCart["isUserSignedIn"]) { 
    console.log("Name:" + userCart["username"] + " | Password: "+ userCart["password"]) 
    // console.log("Name: ${userCart["username"]} Password: ${userCart["password"]}")
} else { alert("You need to sign in");};
    
// 2. If not - alert the user "you need to sign in"
// Done

// 2nd exercise
// 1. If the user is John AND his password is 1234 - alert him "You are signed in"
if (userCart["username"] === "John" && userCart["password"]===1234) {
    alert("You are signed in")
} else if (userCart["username"] === "John" || userCart["password"] === 1234 ) {
    alert("One credential is false!") } 
    else {
        alert("You need to sign in")
    };

// 2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else, alert the user "you need to sign in"