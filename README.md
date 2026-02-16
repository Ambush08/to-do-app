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
The tasks need to be displayed in form of list items. Inside the function, Create a variable called list to hold each task to be displayed. Concatinate the task from the input field om the list and then append it to the task div.
             addTaskBtn.addEventListener("click", function() {
                   let task = document.createElement('div');
                   task.clissList.add('task);

                   let list = document.createElement('li');
                   list.innerText = `${inputTask.valu}`;
                   task.appendChild(li);
           })
Create two variables for the check task and delete task buttons. Add icons, class and append them to the task div. 

          addTaskBtn.addEventListener("click", function() {
                   let task = document.createElement('div');
                   task.clissList.add(task);

                   let list = document.createElement('li');
                   list.innerText = `${inputTask.value}`;
                   task.appendChild(li);

                   let checkBtn = document.createElement('button');
                   checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
                   checkBtn.classList.add('check-task');
                   task.appendChild(checkBtn);

                   let deleteBtn = document.createElement('button');
                   deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
                   deleteBtn.classList.add('delete-task');
                   task.appendChild(deleteBtn);
           })
Add a validation to ensure our button cannot the task if the input field is empty. And set the inputTask.value to an empty field so that once the task is submitted the input field becomes empty. 

          addTaskBtn.addEventListener("click", function() {
                   let task = document.createElement('div');
                   task.clissList.add(task);

                   let list = document.createElement('li');
                   list.innerText = `${inputTask.valu}`;
                   task.appendChild(li);

                   let checkBtn = document.createElement('button');
                   checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
                   checkBtn.classList.add('check-task');
                   task.appendChild(checkBtn);

                   let deleteBtn = document.createElement('button');
                   deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
                   deleteBtn.classList.add('delete-task');
                   task.appendChild(deleteBtn);

                   if(inputTask.value === "") {
                        alert"Please Enter Task"
                        } else {
                        taskContainer.appendChild(task)
                        };

           inputTask.value = "";
           })
Go to the styles sheet and style the classes we added in out task-container i.e the task class, checkBtn and deleteBtn. 
Add event listeners to the checkBtn and deleteBtn to check a task as complete and delete tasks.

         addTaskBtn.addEventListener("click", function() {
                   let task = document.createElement('div');
                   task.clissList.add(task);

                   let list = document.createElement('li');
                   list.innerText = `${inputTask.valu}`;
                   task.appendChild(li);

                   let checkBtn = document.createElement('button');
                   checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
                   checkBtn.classList.add('check-task');
                   task.appendChild(checkBtn);

                   let deleteBtn = document.createElement('button');
                   deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
                   deleteBtn.classList.add('delete-task');
                   task.appendChild(deleteBtn);

                   if(inputTask.value === "") {
                        alert"Please Enter Task"
                        } else {
                        taskContainer.appendChild(task)
                        };

           inputTask.value = "";


           checkBtn.addEventListener("click", function() {
                 checkBtn.parentElement.style.textDecoration = "line-through";
           })        

           deleteBTN.addEventListener("click", function(E) {
                let target = e.target;
                target.parentElement.parentElement.remove();
           })        
