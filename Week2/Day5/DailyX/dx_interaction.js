let num = parseInt(prompt("How many bottles to start?"));
let pace = 1;
do { 
    console.log(`${num} ${num == 1 ? "bottle" : "bottles"} of beer on the wall`);
    console.log(`${num} ${num == 1 ? "bottle" : "bottles"} of beer on the wall`);
    console.log(`${num} ${num == 1 ? "bottle" : "bottles"} of beer`);
    if (num >= pace) {
        console.log(`Take ${pace} down, pass ${pace == 1 ? "it " : "them "} around`)
    } else { console.log(`Oops not enough beer to take ${pace} bottles down`) }

    num=num-pace;
    pace=pace+1;

} while(num>=0)


