// Exercise 1 : Checking The BMI
// Instructions
// Create two objects, each object should hold a persons details.Here are the details:
// FullName
// Mass
// Height
// Each object should also have a key which value is a function (ie.A method), that calculates the Body Mass Index(BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.

let person1 = {
    fullName: 'John',
    mass: 80,
    height: 1.70,
    bmi() {return (this.mass)/(Math.pow(this.height,2))}
}

let person2 = {
    fullName: 'Mary',
    mass: 55,
    height: 1.60,
    bmi() { return ((this.mass) / (Math.pow(this.height, 2))) }
}

console.log(`${person1["fullName"]}'s BMI is: ${person1.bmi()}`);
console.log(`${person2["fullName"]}'s BMI is: ${person2.bmi()}`);

function bmiCompare(personObj1, personObj2) {
    if (personObj1.bmi()>personObj2.bmi()) {
        return (personObj1["fullName"])
    } else return(personObj2["fullName"])
} 

console.log(`${bmiCompare(person1, person2)} has the higher BMI of the two`);

