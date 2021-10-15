let num = 10;
let pace = 1;
do { 
    console.log(`${num} ${num == 1 ? "bottle" : "bottles"} of beer on the wall`);
    console.log(`${num} ${num == 1 ? "bottle" : "bottles"} of beer on the wall`);
    console.log(`${num} bottles of beer`);
    if (num >= pace) {
        console.log(`Take ${pace} down, pass them around`)
    } else { console.log(`Oops not enough beer to take ${pace} bottles down`) }

    num=num-pace;
    pace=pace+1;

} while((num - pace) >= 0)