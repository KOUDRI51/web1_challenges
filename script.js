// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskText;
        taskList.appendChild(newTaskItem);
        taskInput.value = '';

        // Save tasks to local storage
        saveTasksToLocalStorage();
    }
}

// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    const taskList = document.getElementById('taskList');
    const tasks = [];
    for (let i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].textContent);
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        const taskList = document.getElementById('taskList');
        tasks.forEach(task => {
            const newTaskItem = document.createElement('li');
            newTaskItem.textContent = task;
            taskList.appendChild(newTaskItem);
        });
    }
}

// Load tasks from local storage when the page loads
window.onload = function() {
    loadTasksFromLocalStorage();
};
