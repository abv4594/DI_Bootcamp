// Exercise 4 : Attendance
// Instructions
let guestList = {
     randy: "Germany",
     karla: "France",
     wendy: "Japan",
     norman: "England",
     sam: "Argentina"
 }
// Given the object above where the key is the students name and the value is the country they are from.

// Prompt the student for their name :

let studentName = (prompt('Please enter name:'))

// If the name is in the object, console.log the name of the student and the country they come from.

if (studentName.toLowerCase() in guestList) { console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName.toLowerCase()]}.`)}

//     example: "Hi! I'm [name], and I'm from [country]."
// Hint: Look up the statement if ... in
//     If the name is not in the object, console.log: "Hi! I'm a guest."