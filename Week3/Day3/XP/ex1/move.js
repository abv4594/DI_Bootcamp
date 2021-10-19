//get animate node
item = document.getElementById("animate");

function myMove() {

    let pos = 0; //box starts in left 0
    let intId = setInterval(()=> {
        if (pos == 350) {
            clearInterval(intId)
        } else {
            pos += 1;
            item.style.left = pos + "px";
        }
    },5)

}
