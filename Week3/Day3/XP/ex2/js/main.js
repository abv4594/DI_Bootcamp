// grabbing nodes
const fillEle = document.querySelector('.fill');
const emptyEles = document.querySelectorAll('.empty');

// adding listners to the filled box -> dragging events
fillEle.addEventListener("dragstart", dragBeg);
fillEle.addEventListener("dragend", dragEnd);

// adding listners to the empty boxes
for (ele of emptyEles) {
    ele.addEventListener("dragover",dragOver);
    ele.addEventListener("dragenter", dragEnter);
    ele.addEventListener("dragleave", dragLeave);
    ele.addEventListener("drop", dragDrop);
}

function dragOver(e){
    e.preventDefault(); //allows drop to be called
}

function dragEnter(e){
    e.preventDefault(); //same allows drop to be called?
    this.className += " hovered"
}

function dragDrop(e){
    const eleToAppendId = e.dataTransfer.getData("text/plain")
    const eleToAppend = document.getElementById(eleToAppendId);
    e.target.appendChild(eleToAppend);
    //this.className="fill";
}

function dragLeave(){
    this.className = 'empty';
}

//function for dragging
function dragBeg(event) {
    this.classList.add("hold");
    setTimeout(()=>this.className = "invisible",0);
    console.log(event.target.id);
    console.log(event.target);
    event.dataTransfer.setData("text/plain", event.target.id);
}

function dragEnd() {
    this.className="fill";
}