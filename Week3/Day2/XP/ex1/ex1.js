//1. Using DOM methods, remove the last paragraph in the < article > tag from the DOM.
document.querySelector("article").lastElementChild.remove();

//2, 3, 4. Have to do with h elements
const hEles = document.querySelectorAll("h1,h2,h3,h4"); //to facilitate, will create the listener to all <h> elements at once

hEles.forEach(h=>h.addEventListener("click",hClick)); //we listen all Hs elements

// hClick will handle the cases for h1, h2,...
function hClick(event) {

    //setup of constants for function
    const randomColor = ('#' + Math.floor(Math.random() * 16777215).toString(16));
    const randomNum = (Math.floor(Math.random() * 100));
    console.log(randomNum);
    console.log(event);
    const ele = event.target;
    const style = ele.style;
    console.log(ele);

// switch based on the element local name (h2,h2,...)

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
            style.display = "none"; //h3 is gone
            break;
    }


}

// 5 Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const btn = document.querySelector("#btn"); //grab the button
btn.addEventListener("click",bclick);


const pEles = document.querySelectorAll("article > p"); //grab all p elements (in a HTML collection)
function bclick(event) {
    //get all p elements
    for (let i=0;i<pEles.length;i++) { //iterate over p elements
        console.log(pEles[i].style);
        const currentStyle = pEles[i].style.fontWeight
        pEles[i].style.fontWeight = (currentStyle == "bold")? "normal" : "bold";
    }
    btn.textContent = (btn.textContent == "Click for bold")? "Click for normal" : "Click for bold";
}



//6. When the “Submit” button of the form is clicked:
// get the values of the input tags
// make sure that they are not empty,
//     then append them to a HTML table, in the div, below the form.

// create table inside the div:
const divEle = document.querySelector(".usersAnswer");
const tableEle = createTable(["First Name", "Last Name"])

divEle.appendChild(tableEle);

// grab form:
const chocoForm = document.forms[0]; 

chocoForm.addEventListener("submit", regForm);

function regForm (event) {
    event.preventDefault() //avoids reloading and messing up
    const fname = event.target.elements.fname.value;
    const lname = event.target.elements.lname.value;
    if (fname == "" || lname == "") {
        alert("First name and last name are required!");
        return
    } else {addRow([fname,lname],tableEle)}
}

// When you hoover on the 2nd paragraph, it should fade out(Check out “fade css animation” on Google)
const p3 = document.querySelectorAll("article > p")[1];

// const articleEle = document.querySelector("article");

p3.addEventListener("mouseover",mover);
p3.addEventListener("mouseleave",mleave); // returns to normal on mouse leave -> but is automatically triggered when p goes invisible!!!!

function mover(event) {
    event.target.classList.add("fadeAnimation");
}

function mleave(event) {
    const classInEle = event.target.classList;
    if (classInEle.contains("fadeAnimation")) {classInEle.remove("fadeAnimation")}
}



/// supporting functions below

function createTable(colArr) { //colArr is an array of columns
    const tableEle = document.createElement("table");
    const trEle = document.createElement("tr");
    colArr.forEach(col=>{
        const thEle = document.createElement("th");
        thEle.textContent = col;
        trEle.appendChild(thEle);
    })
    tableEle.appendChild(trEle);
    return tableEle;
}

function addRow(colArr, tableEle) {
    const trEle = document.createElement("tr");
    colArr.forEach(col => {
        const tdEle = document.createElement("td");
        tdEle.textContent = col;
        trEle.appendChild(tdEle);
    })
    tableEle.appendChild(trEle);
}