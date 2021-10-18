// Using DOM methods, remove the last paragraph in the < article > tag from the DOM.
document.querySelector("article").lastElementChild.remove();


const hEles = document.querySelectorAll("h1,h2,h3,h4"); //to facilitate, will create the listener to all <h> elements at once
hEles.forEach(h=>h.addEventListener("click",hClick));

function hClick(event) {
    const randomColor = ('#' + Math.floor(Math.random() * 16777215).toString(16));
    const randomNum = (Math.floor(Math.random()*100));
    console.log(randomNum);
    console.log(event);
    const ele = event.target;
    const style = ele.style;
    console.log(ele);

    switch (ele.localName) { //localname attribute returns if its h1, h2, h3...
        // Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.
        case 'h2': 
            style.backgroundColor = randomColor;
            break;
        
        // Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
        case 'h1': 
            style.fontSize = randomNum + 'px';
            break;

        // Add an event listener which will hide the h3 when it’s clicked on(use the display property).
        case 'h3': 
            style.visibility = (style.visibility == "visible")? "hidden":"visible";
            break;
    }

    
}

// Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
// Add an event listener which will hide the h3 when it’s clicked on(use the display property).
// Add a < button > to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
//     then append them to a HTML table, in the div, below the form.
// When you hoover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)