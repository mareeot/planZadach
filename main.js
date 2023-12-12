const ModalBtn = document.getElementById('listBtn');
const Modal = document.getElementById('modal1');
const ModalKrest = document.getElementById('krestic');

ModalBtn.addEventListener('click', function(){
    Modal.style.display = 'initial';
})
ModalKrest.addEventListener('click', function(){
    Modal.style.display = 'none';
})


const CreatePJ = document.getElementById('create__pj');
const HavePJ = document.getElementById('my__pj');
const Coment = document.getElementById('coment');
const ComentForm = document.getElementById('createBtn');

CreatePJ.addEventListener('click', function(){
    CreatePJ.style.color = 'white';
    HavePJ.style.color = 'rgba(255, 255, 255, 0.628)';
    Coment.style.display = 'none';
    ComentForm.style.display = 'flex';
});

HavePJ.addEventListener('click', function(){
    HavePJ.style.color = 'white';
    CreatePJ.style.color = 'rgba(255, 255, 255, 0.628)';
    Coment.style.display = 'initial';
    ComentForm.style.display = 'none';
})





const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
 
addTaskButton.addEventListener("click", () => {
    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    if (task.trim() === "" || deadline === "") {
        alert("Please select an upcoming date for the deadline.")
        return; 
    }
 
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
 
    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return; 
    }
 
 
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
    <p>${task}</p>
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <button class="mark-done">Mark Done</button>
  `;
 
    taskList.appendChild(taskItem);
 
    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
});
 
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});






