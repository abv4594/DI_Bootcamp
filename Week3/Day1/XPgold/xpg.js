// In the js file, create an array called allBooks.This is an array of objects.Each object is a book that has 4 keys(ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean(true or false).

let Book = class {
    constructor(title, author, image, alreadyRead) {
        this.title = title;
        this.author = author;
        this.image = image;
        this.alreadyRead = alreadyRead
    }
} 

let configBooks = [
    ["Harry Potter", "JK Rolling", "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/7853/9781785301544.jpg", "false"],
    ["Lean Startup", "Eric Reis", "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/3078/9780307887894.jpg", "false"]
];

let books = [] //instatiating empty array to store books objects

// creating array of books objects
configBooks.forEach(line=>books.push(new Book(line[0],line[1],line[2],line[3])));


// html part
const headers = ["title","author","image","Read?"];
const mainDiv = document.body.querySelector(".listBooks");
const mainTable = document.createElement("table");
const tableHeader = document.createElement("tr");

// building header row
headers.forEach(header=>{
    const thEle = document.createElement("th");
    thEle.textContent = header;
    tableHeader.appendChild(thEle)
})

//append Header to Table:
mainTable.appendChild(tableHeader);

//append Table to Div:
mainDiv.appendChild(mainTable);

// building table
books.forEach(book=> {
    const trEle = document.createElement("tr");

    for (const col in book) {
        const tdEle = document.createElement("td");
        if (col==="image"){
            const imgEle = document.createElement("img")
            imgEle.setAttribute("src",book[col]);
            imgEle.setAttribute("alt",`${book["title"]} cover`);
            imgEle.classList.add("bookImg");
            tdEle.appendChild(imgEle);
            } else {
            tdEle.textContent = book[col]}
        trEle.appendChild(tdEle);
    }

    //append trEle to the main table
    mainTable.appendChild(trEle);
})



