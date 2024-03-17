const taskNameInput = document.getElementById("task-name");
const taskDescriptionInput = document.getElementById("task-description");
const dueDateInput = document.getElementById("due-date");
const priorityInput = document.getElementById("priority");
const listContainer = document.getElementById("list-container");

function addTask() {
    const taskName = taskNameInput.value.trim();
    const taskDescription = taskDescriptionInput.value.trim();
    const dueDate = dueDateInput.value;
    const priority = priorityInput.value;
    
    if (taskName === '' || taskDescription === '') {
        alert("Task name and description cannot be empty!");
    } else {
        const currentDate = new Date().toLocaleDateString();
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task">${taskName}</span> 
            <span class="description">${taskDescription}</span>
            <span class="date-added">Added: ${currentDate}</span> 
            <span class="due-date">Due: ${dueDate}</span>
            <span class="priority">Priority: ${priority}</span>
        `;
        listContainer.appendChild(li);
        
        const deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        deleteButton.classList.add("delete");
        li.appendChild(deleteButton);
    }
    // Clear input fields
    taskNameInput.value = "";
    taskDescriptionInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "low";

    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
