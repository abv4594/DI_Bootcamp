// In the HTML above change the name “Pete” to “Richard”.
//getULs:
ulElements = document.getElementsByClassName("list"); //html collection
ulElements[0].children[1].textContent="Richard" 

// Change each first name of the two < ul > 's to your name.
//forEach in each UL -> using Array.from:
Array.from(ulElements).forEach(ul=>ul.children[0].textContent="Henry");

Array.from(ulElements).forEach(ul=>{
    let liHey = document.createElement("li");
    liHey.textContent = "Hey students"
    ul.appendChild(liHey)})

// Delete the name Sarah from the second < ul >.
document.querySelectorAll(".list")[1].children[1].remove();


// Bonus
// Add a class called student_list to both of the < ul > 's.
Array.from(ulElements).forEach(ul=>ul.classList.add("student_list"));

// Add the classes university and attendance to the first < ul >.
ulElements[0].classList.add("university", "attendance");
