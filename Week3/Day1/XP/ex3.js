// For the following exercise use the HTML presented above:

// Add a “light blue” background color and some padding to the < div >.
let divEle = document.firstElementChild;
divEle.style.backgroundColor="lightblue";
divEle.style.padding = "20px";


// Do not display the first name(John) in the list.
// get ul Elements
let ulElements = document.getElementsByTagName("ul");
ulElements[0].children[0].style.display="none";

// Add a border to the second name(Pete).
ulElements[0].children[1].style.border="3px solid black";

// Change the font size of the whole body.
document.body.style.fontSize = "24px";

//     Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (divEle.style.backgroundColor=="lightblue") {
    alert(`Hello ${ulElements[0].children[0].textContent} and ${ulElements[0].children[1].textContent}`)
}