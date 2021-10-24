let printa = [...Array(7).keys()].map(line=>{
    if (line === 0) {
        return "  ***  \n"
    } else if (line == 3) {
        return " ***** \n"
    } else {return " *   * \n"}
})
console.log(printa.join(""));

