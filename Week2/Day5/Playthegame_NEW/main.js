
function playTheGame() {
 
    if (confirm("Hi, do you want to play the game?")) {
        
        //game really starts

        let round=1; // will count rounds
        const MaxRounds = 3;
        let computerNumber = randomNum(0, 10); //define out of the loop so we can reference it
        while (round<=3) { // main loop
            let num = getNum();
            if (isNum(num)) { // check if it's a number. If not, it will exit the loop (break)
                num = parseInt(num);
                if (isBetweenZeroAndTen(num)) { // check if the num is between 0 and 10. If not it will break the loop.
                    let tryAgain = (round<MaxRounds)? "Try again!" : ""; //Try again will only appear if it is not the last round
                    switch(test(num, computerNumber)){ //test(num, comp...) returns 0 if numbers are equal, -1 if user is smaller, 1 if bigger.
                        case -1:
                            alert("Your number is smaller! " + tryAgain);
                            break;
                        case 1:
                            alert("Your number is bigger! " + tryAgain); 
                            break;
                        case 0:
                            alert("Congratulations! You won!");
                            round = 5; // will force loop to stop
                    } 
                    round++;

                } else {
                    alert("Number not between 0 and 10. Goodbye!");
                    break; //get out of the game
                }

            } else {
                alert("Not a number. Goodbye!");
                break;
            }
        } 
        if (round===4) {
            alert(`You exceeded the max number of rounds. The computer number was ${computerNumber}. Goodbye!`)}

        
    } else {alert("No problem, good bye.")};

}

function getNum() {
    return(prompt("Please select a number between 0 and 10:"))
}

function isBetweenZeroAndTen (num) {
    return ((num>=0 && num<=10))
}

function isNum (num) {
    return (/^\d+$/.test(num))
}

function randomNum(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

function test(userNumber, computerNumber) {
    if (userNumber==computerNumber) {return 0}
    else if (userNumber<computerNumber) {return -1}
    else return 1;
}