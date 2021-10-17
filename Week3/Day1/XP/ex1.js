// In the < div > above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let navEle = document.getElementById("navBar")
navEle.setAttribute("id","socialNetworkNavigation");

// We are going to add a new < li > to the < ul >.
//     First, create a new < li > tag(use the createElement method).
let newLi = document.createElement("li");

//Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node(li).

newLi.textContent = "Logout";

// Finally, append this updated list node to the unordered list above, using the appendChild method.

let ulEle = navEle.children[0];

ulEle.appendChild(newLi);

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element(ul).Display the text of each link. (Hint: use the textContent property).

console.log(ulEle.children[0].textContent); // *** important, the text is inside an <a> tag inside the li - so that's why a second children[0] is needed
console.log(ulEle.lastChild.textContent);
