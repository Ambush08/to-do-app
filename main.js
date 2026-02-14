let addTaskBtn = document.getElementById('add-task');
let taskInput = document.getElementById('input-task');

const taskContainer = document.getElementById('task-container');  

addTaskBtn.addEventListener('click', function() {
    let task = document.creatElement('div');
    task.classList.add('task')

    let li = document.createElement('li');
    li.innerText = `${taskInput.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHtml = '<i class="fa-solid fa-check"';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHtml = '<i class="fa-solid fa-trash"';
    checkBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);


    if(taskInput==="") {
        alert("Please Enter Task");
    }else{
        taskContainer.appendChild(task)
    }

    inputTask.value = "";
})