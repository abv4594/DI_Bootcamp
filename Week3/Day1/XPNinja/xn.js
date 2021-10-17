
// Initial configuration

// Main blocks. body>div>table
const calendarSection = document.createElement("div");
const calendar = document.createElement("table");
document.body.prepend(calendarSection); 


// Preparing first row of the calendar, with week-days
const wkDays = {
    0: "SU",
    1: "MO",
    2: "TU",
    3: "WE",
    4: "TH",
    5: "FR",
    6: "SA"
}

let rowEle = document.createElement("tr")
const trEle = document.createElement("tr");
Object.values(wkDays).forEach(day=>{
    const thEle = document.createElement("th");
    thEle.textContent = day;
    trEle.appendChild(thEle);
})
calendar.appendChild(trEle);
calendarSection.appendChild(calendar);

// Adding some style
calendarSection.classList.add('calendarSection');
calendar.classList.add('calendar');


// Asking the user for year and month:
year = parseInt(prompt("Please enter a year:"));
month = parseInt(prompt("Please enter a month:"));

// Creates calendar, using function createCalendar which returns an object Calendar
Object.values(createCalendar(year,month)).forEach(wk=>{
    const trEle = document.createElement('tr'); // creates a week line for each week
    for (let i=0;i<7;i++) {
        const tdEle = document.createElement('td'); // for each day creates a td element
        tdEle.textContent = (wk[i])? wk[i]:" ";
        trEle.appendChild(tdEle);
    }
    calendar.appendChild(trEle);
})

// Function create calendar

function createCalendar(year, month) {
    const date = new Date (year,month-1,1); // in Javascript month starts in 0
    const daysInMonth = (new Date(year,month,0)).getDate(); // this gives the number of days in the month (28,29,30 or 31)
    const day = date.getDay(); //0-6 indicates the day in the week
    let calendarObj = {
        0:[],
        1:[],
        2:[],
        3:[],
        4:[],
    };

    for (let i = day;i<(day+daysInMonth);i++) {
        let wk = Math.floor(i/7);
        calendarObj[wk][i%7]=(i-day+1);
    }
    return calendarObj;
}









