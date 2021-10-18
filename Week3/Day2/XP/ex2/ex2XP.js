// Create a function called getBold_items() that takes no parameter.

// This function should collect all the bold items inside the paragraph.

const pEle = document.body.querySelector("p");
function getBold_items() {
    return pEle.querySelectorAll("strong");
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highligth() {
    const boldItems = getBold_items();
    setColor(boldItems,"blue");
  
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
    const boldItems = getBold_items();
    setColor(boldItems, "black");
}

// Call the function highlight() onmouseover(ie.when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() onmouseout(ie.when the mouse pointer is moved out of the paragraph).Look at this example
pEle.addEventListener("mouseover",highligth);
pEle.addEventListener("mouseout",return_normal);


function setColor(itemElements, new_color) {   
    for (let i=0;i<itemElements.length;i++)  {
        itemElements[i].style.color = new_color;
    }
}