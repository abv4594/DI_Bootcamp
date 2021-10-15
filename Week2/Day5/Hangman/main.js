let Letter = class {
    constructor(content) {
        this._content = content;
        this.visible = false;
    }

    // Getter
    get content() { return this._content}


    // Setter
    


    // Methods
    isVisible() { return this.visible}
    makeVisible() { this.visible = true}
    print() {
        if (this.isVisible()) {
            return this.content
        } else return "*";
    }
}

let Word = class {
    constructor(word) {
        this._content = word.split("").map(letter => {return new Letter(letter.toUpperCase())})
    }

    // set content(word) {
    // return word.split("").map(letter => {
    //     return new Letter(letter);
    // })
    // }

    get content(){ 
        return this._content
    }

    print() {
        let str="";
        for (let letter of this.content){str+=`${letter.print()} `}
        return str;       
        }
    

    wonGame() {
        for (let letter of this.content){
            if (!letter.isVisible()) {
                return false}
        }
        return true // attention with the location of return true, has to be outside the loop
    }

    letterFound(letter,pos) {
        return this.content[pos].content === letter
    }

    setLetterVisible(pos) {
        this.content[pos].makeVisible()
    }
}


let userWord = prompt('Please enter a word:');
let word = new Word (userWord);
let round = 1;
const MaxRounds = 10;

while ((round<=MaxRounds) && (!word.wonGame())) {

    console.log(word.print());
    let turn = prompt('Please enter a letter, pos:');
    console.log("----------------------");
    let letter = turn.slice(0,1).toUpperCase();
    let pos = parseInt(turn.slice(-1));
    round += 1;

    if (word.letterFound(letter,pos)) {
        word.setLetterVisible(pos)
    }
}

if (word.wonGame()) {
    console.log(word.print());
    console.log("Congratulations, you won!")
} else {
    console.log("Sorry, you loose.")
}














