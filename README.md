Create the html and styles for the app.
Link the css file and javascript file to html file.
Go into your javascript file iand creat the variables i.e addTaskBtn, taskContainer and inputTask variables. To do this;
let addTaskBtn = document.getElementById("add-task");
let inputTask = document.getElementById("task-input");
let taskContainer = document.getElementById("task-container");
Create an event listener so that when the addTaskBtn is clicked the task is added to the taskContainer. To do this;
addTaskBtn.addEventListener("click", function() {})
We need to create a div to hold the task when they are added to the task container. So create a variable called task to hold the tasks in the div. Then add a class to the div to help in styling.
           addTaskBtn.addEventListener("click", function() {
                   let task = document.createElement('div');
                   task.clissList.add('task);
           })
The tasks need to be displayed in form of list items. Inside the function, Create a variable called list to hold each task to be displayed. 
             addTaskBtn.addEventListener("click", function() {
                   let task = document.createElement('div');
                   task.clissList.add('task);

                   let list = document.createElement('li');
           })
