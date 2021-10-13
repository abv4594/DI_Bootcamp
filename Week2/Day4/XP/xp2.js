// Exercise 2 : Keyless Car
// Instructions
// Ask the user for their age, and save the value to a variable.

let age = parseInt(prompt("Please enter your age:"));

// Create a function called checkDriverAge() that will notify the user if they are permitted to drive.They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car.Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On.Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving.Enjoy the ride!”
// Call the function.
// Instead of using prompt to ask the user for their age, have the checkDriverAge() function accept an argument age.

function checkDriverAge(age) {
    if (age > 18) { //age here is the argument, local
        alert("You are old enough to drive, Powering On.Enjoy the ride!")
    } else if (age < 18) {
        alert("Sorry, you are too young to drive this car.Powering off")
    } else { alert("Congratulations on your first year of driving.Enjoy the ride!") }
}

checkDriverAge(age); //age here is the global age
checkDriverAge(18);
checkDriverAge(1.7);

