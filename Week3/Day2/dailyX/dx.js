//fetching elements and setup:

const fields = document.querySelectorAll("ul>li>input");
const libBtn = document.querySelector("#lib-button");
const shufBtn = document.querySelector("#shuffle-button");
const resetBtn = document.querySelector("#reset-values"); 
const story = document.querySelector("#story");

// console.log(fields);
// console.log (libBtn);

//adding the event listeners:
libBtn.addEventListener("click",libBtnClick);
shufBtn.addEventListener("click",shuffleValues);

resetBtn.addEventListener("click",resetFields);

let fieldValues = [];//instatiate "global array" which will store the words

function libBtnClick(event) {
  
    //first checkt the fields are not empty
    if (!checkFields()) {
        alert("Please fill all the spaces.");
        return
    }

    //before extracting values, I need to reset the fieldValuesArr (which can contain values from before)
    fieldValues = [];

    //extract values:
    for (let i = 0; i < fields.length; i++) {
        fieldValues.push(fields[i].value)
    }

    //Now I have: fieldValues[0]=value of noun, [1]=value of adjective, ...
    //fill the sentence
    story.innerHTML = fillStory(fieldValues);

}

function shuffleValues() {
    //do we have values to shuffle?
    if (fieldValues.length!=5) {
        alert("First you need to Lib it!")
        return
    } else {
        story.innerHTML = fillStory(shuffle(fieldValues))
    } 
}

//copied from StackOverFlow
function shuffle(array) { 
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function resetFields() {
    for (let i=0;i<fields.length;i++){
        fields[i].value="";
    }
}

function checkFields() {
    for (let i=0;i<fields.length;i++) {
        if (fields[i].value=="") 
            {return false}
    }
    //Return TRUE if none of the field values are empy
    return true
    
}

function fillStory(valuesArr) {
    const storyArr = ["","!", " he said ", "", " as he jumped into his convertible ", "", " and drove off with his ", "", " wife to ","","."];
    const gapMap = [0,3,5,7,9];
    for (let i=0;i<5;i++) {
        storyArr[gapMap[i]]="<b>" + valuesArr[i] + "</b>";    
    }
    return storyArr.join("");
}