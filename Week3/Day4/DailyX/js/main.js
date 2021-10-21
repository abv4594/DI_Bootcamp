//task object
let Task = class {
    constructor(task_id,text,done) {
        this.task_id=task_id;
        this.text=text;
        this.done=done;
    }
}


// elements
let listTasks = [];
let taskEle = document.getElementById("newTask");
let addForm = document.getElementById("addForm");
let boxInput = document.querySelector(".boxInput");
console.log(addForm);
let taskContainer = document.querySelector(".listTasks");
console.log(taskContainer);


//listeners
addForm.addEventListener("submit",addTask);
boxInput.addEventListener("focusin",clearValue);
boxInput.addEventListener("focusout", addDefaultValue);

function clearValue(event){
    event.target.value=""
}

function addDefaultValue(event){
    let previousValue = event.target.value;
    event.target.value = (previousValue=="")? "new task":previousValue;
}

function addTask(event) {
    event.preventDefault();
    let taskTxt = taskEle.value
    taskEle.value = "";
    if (isInputInvalid(taskTxt)) 
        {return}
    let newTask = new Task(listTasks.length, taskTxt, false)
    listTasks.push(newTask);
    moveToTaskList(taskTxt,newTask.task_id);
}

function isInputInvalid(str) {
    return (str=="" || str==="new task");
}

function moveToTaskList(txt, task_id) {
    let newDiv = document.createElement("div"); //hold the task
    let newInput = document.createElement("input"); //the checkbox
    let newLabel = document.createElement("label"); //the label of the checkbox
    let newxBtn = document.createElement("button"); // (the x) button

    //adding relevant classes to elements:
    newxBtn.classList.add("xbtn");
    newDiv.classList.add("taskLine");


    newInput.type = "checkbox"; //set to checkbox
    newInput.name = txt;
    newInput.setAttribute("task_id", task_id); //will allow-me identify later the task
    newxBtn.setAttribute("task_id", task_id);
    newInput.addEventListener("change",doneTask); //listner to the checkbox of the task
    newxBtn.addEventListener("click", deleteTask);

    newLabel.for = txt;
    newLabel.textContent = txt;
    
    //icon to button:
    newxBtn.innerHTML = `<i class="fas fa-times" task_id="${task_id}"></i>`;

    newDiv.appendChild(newxBtn);
    newDiv.appendChild(newInput);
    newDiv.appendChild(newLabel);

    taskContainer.appendChild(newDiv);

}

function doneTask(event) {
    console.log(event);
    let inputEle = event.target;
    let txtEle = inputEle.nextSibling;
    let task_id = inputEle.attributes.task_id.value;
    if (toggleDone(task_id)) {
        txtEle.classList.add("done")
    } else {
        txtEle.classList.remove("done")
    }
}

function toggleDone(toggle_id) {

    let task = findTask(toggle_id);
    console.log("Task was: " + task.done);
    task.done = (task.done)? false : true;
    console.log("Now task was: " + task.done);
    return task.done;
    
}

function deleteTask(event) {
    console.log(listTasks.length);
    console.log(event);
    let ele = event.target;
    let parentDiv = ele.closest(".taskLine");
    console.log("parent div " + parentDiv)
    parentDiv.remove();
    removeFromListTasks(ele.attributes.task_id.value);
    console.log(listTasks.length);


}

function findTask (id) {
    for (let task of listTasks) {
        if (task.task_id == id) {
            return task
        }
    }
    return false
}

function removeFromListTasks(id) {
    //find which task obj we are talking about:
    let taskToDel = findTask(id);

    //find its index:
    let indexToDel = listTasks.indexOf(taskToDel);

    //delete it:
    listTasks.splice(indexToDel,1)
}