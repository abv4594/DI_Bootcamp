// Exercise 1 : Information
// Instructions
// Part I

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you(ie.your name, age, hobbies ect…).
// Call the function.

function infoAboutMe() {
    console.log("My name is Henry");
    console.log("I have 46 years old");
    console.log("I love going to the beach and programming");
    console.log("I am from Brazil and live in Israel since 2018");
}

infoAboutMe();

// Part II

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person(ie. “You name is …, you are..years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Part III

// Add a parameter personHobbies to the function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies).
// The function should
// console.log a sentence about the person(ie. “You name is …, you are..years old, your favorite color is …”)
// console.log the person’s hobbies one by one(ie.loop through the array of hobbies).
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

function infoAboutPerson2(personName, personAge, personFavoriteColor, personHobbies) {
    console.log(`You name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`);
    personHobbies.forEach(hobbie => console.log(hobbie));
}

infoAboutPerson2("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson2("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])