var taskcounter = 0;
window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("mousedown", AddTaskText);
    document.querySelector(".amount").addEventListener("mousedown", AddTaskText);
});
function AddTaskText() {
    var newtask = document.querySelector(".newtask").value;
    addTaskToList(newtask);
    var element = document.querySelector(".list");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    document.querySelector(".amount").innerHTML = numberofChildren + " in total";
}
function addTaskToList(newTaskValue) {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHTMLTemplate = "";
    myHTMLTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHTMLTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHTMLTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHTMLTemplate;
    document.querySelector(".list").appendChild(addElement);
    console.log("addTasktoLost:" + newTaskValue);
}
function DeleteTaskText(ClickedTrash) {
    ClickedTrash.parentElement.remove();
    taskcounter--;
    var element = document.querySelector(".list");
    var numberofChildren = element.children.length;
    document.querySelector(".amount").innerHTML = numberofChildren + " in total";
}
function CheckedButton(clickedButton) {
    if (clickedButton.classList.contains("fa-circle")) {
        clickedButton.classList.remove("fa-circle");
        clickedButton.classList.add("fa-check-circle");
    }
    else {
        clickedButton.classList.remove("fa-check-circle");
        clickedButton.classList.add("fa-circle");
    }
}
//# sourceMappingURL=aufgabe9.js.map