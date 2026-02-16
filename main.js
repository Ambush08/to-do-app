let addTaskBtn = document.getElementById('add-task');
let taskInput = document.getElementById('input-task');

const taskContainer = document.getElementById('task-container');  

addTaskBtn.addEventListener('click', function() {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${taskInput.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('check-task');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-task');
    task.appendChild(deleteBtn);


    if(taskInput.value==="") {
        alert("Please Enter Task");
    }else{
        taskContainer.appendChild(task)
    }

    taskInput.value = "";


    checkBtn.addEventListener('click', function() {
       
        checkBtn.parentElement.style.textDecoration = 'line-through';
    })

     deleteBtn.addEventListener('click', function(e) {
       
        let target = e.target;
            target.parentElement.parentElement.remove();
    })
})