let colors = ["blue", "red", "yellow", "lightblue"];

//1

colors.forEach(pcolor);

function pcolor(color) {
    // color.forEach(pchar) >>> Why this doesn't work ??
    color.split("").forEach(pchar); // Why I need to transform into an Array?
}

function pchar(char) {
    console.log(char);
}

