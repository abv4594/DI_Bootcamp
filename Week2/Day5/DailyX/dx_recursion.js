// Instructions
// Have you heard the infamous song “99 Bottles of Beer ?”
// In ths exercise you need to console.log the lyrics to the song 99 Bottles of Beer as an output.

// Prompt the user for a number to begin counting down bottles.
// In the song everytime a bottle falls we subtract the bottles by 1.
// What your code should do is:
// instead of subtracting by 1, everytime a bottle drops the subtracted number should go up by 1
// For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.
// Take a look below for more help.

// ==============================

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall
// 98 bottles of beer on the wall
// 98 bottles of beer
// Take 2 down, pass them around
// 96 bottles of beer on the wall
// 96 bottles of beer on the wall
// 96 bottles of beer
// Take 3 down, pass them around
// 93 bottles of beer on the wall

// ==============================

// How will you choose to make the song end?
// Make sure you get the grammar correct.

// For 1 bottle, you pass “it” around.
// For more than one bottle, you pass “them” around.

function beer(num, pace) {

    if (num==0) {
        console.log("Zero bottles of beer on the wall");
        console.log("Zero bottles of beer on the wall");
        console.log("Zero bottles to pass around");
        return} else if (num<0) {
            console.log("Not enough bottles of beer on the wall");
            console.log("Not enough bottles of beer on the wall");
            console.log("Not enough bottles to pass around");
            return
        }

    console.log(`${num} ${num==1?"bottle":"bottles"} of beer on the wall`);
    console.log(`${num} ${num==1?"bottle":"bottles"} of beer on the wall`);
    console.log(`${num} bottles of beer`);
    if (num>pace) {
        console.log(`Take ${pace} down, pass them around`)
    } else {console.log (`Oops not enough beer to take ${pace} bottles down`)}
    beer(num-pace, pace=pace+1);
}
beer(parseInt(prompt(`With how many bottles you want to start?`)),1);