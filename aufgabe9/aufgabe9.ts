var taskcounter: number = 0;

window.addEventListener("load", function(): void {
    document.querySelector(".button1").addEventListener("mousedown", AddTaskText);
    document.querySelector(".amount").addEventListener("mousedown", AddTaskText);
});

function AddTaskText (): void {
    var newtask: string = (<HTMLInputElement>document.querySelector(".newtask")).value;
    addTaskToList(newtask);

    var element = document.querySelector(".list");
    var numberofChildren = element.children.length;
    taskcounter = numberofChildren;
    document.querySelector(".amount").innerHTML = numberofChildren + " in total";
}


function addTaskToList (newTaskValue: string): void {
    var addElement = document.createElement("div");
    addElement.setAttribute("class", "Template");
    addElement.setAttribute("id", "TaskId" + taskcounter);
    var myHTMLTemplate: string = ""; 
    myHTMLTemplate += "<button onclick=\"CheckedButton(this)\" class=\"far fa-circle checkbox\" id=\"circle" + taskcounter + "\"></button>";
    myHTMLTemplate += "<input class=\"firsttask\" id=\"firsttask" + taskcounter + "\" value=\"" + newTaskValue + "\" ></input>";
    myHTMLTemplate += "<button onclick=\"DeleteTaskText(this)\" class=\"far fa-trash-alt trash\" id=\"delete" + taskcounter + "\"></button>";
    addElement.innerHTML = myHTMLTemplate;
    document.querySelector(".list").appendChild (addElement);
    console.log ("addTasktoLost:" + newTaskValue);
}

function DeleteTaskText (ClickedTrash): void {
    ClickedTrash.parentElement.remove();
    taskcounter --;
    var element = document.querySelector(".list");
    var numberofChildren = element.children.length;
    document.querySelector(".amount").innerHTML = numberofChildren + " in total";
}

function CheckedButton (clickedButton): void {
    if (clickedButton.classList.contains("fa-circle")) {
        clickedButton.classList.remove("fa-circle");
        clickedButton.classList.add("fa-check-circle");
}
    else {
        clickedButton.classList.remove("fa-check-circle"); 
        clickedButton.classList.add("fa-circle");
}}
