let expression = ""; // global variable.
let lastOpEval = false; // for flow control 

function number(num) {
    expression+=num;
    // below some logic to better display numbers vs operators
    if (!(/\d/.test(num))) { // it means I entered and operator
        updateDisplay(num); // so I display the operator 
    } else {
        // I am entering a digit
        if (lastOpEval === true) { // last Operation was an evaluation
            lastOpEval = false // reset flag to false
            // if we insert a digit after evaluation, it's equivalent to reset
            expression = num.toString();
            updateDisplay(num);
        } else {updateDisplay(selectNumsEnd(expression))}
    
    }
}
function operator(operator) {
    //special case: user keeps inserting operation
    if (!(/\d/.test(expression.slice(-1)))) { //it means the last digit is not a number, thus an operator
        expression=expression.substring(0,expression.length-1)+operator //replace last carachter in expression by the last inserted operator
    } else {
        expression += operator;
    }
    updateDisplay(operator)
    lastOpEval = false; // in case I come from an evaluation and I insert an operation
}
function equal() {
    updateDisplay(eval(expression)); // display result in the screen
    lastOpEval = true; //allows to control if we reset the display on next click

}

function updateDisplay(display) {
    document.getElementById("display").innerHTML = display;
} 

function selectNumsEnd(str) {
    str = str.toString(); //just to ensure in case str was passes as a number
    let temp = str.match(/\d+(?=$)/);
    return temp
}

function reset() {
    expression="";
    clearDisplay(); // all reset triggers also clearDisplay
}

function clearDisplay() {
    updateDisplay("0");
    expression = expression.match(/\d+\w/);
}