import {TaskManager} from "../TaskManager/TaskManager";

const taskManager = TaskManager(getTasksFromLocalStorage())

const deleteTask = taskManager.deleteTask;
taskManager.deleteTask = (taskIndex) => {
    deleteTask(taskIndex);
    storeTasksInLocalStorage(taskManager.tasks());
}
const addNewTask = taskManager.addNewTask;
taskManager.addNewTask = (description) => {
    addNewTask(description);
    storeTasksInLocalStorage(taskManager.tasks());
}
const markTaskUncompleted = taskManager.markTaskUncompleted;
taskManager.markTaskUncompleted = (taskIndex) => {
    markTaskUncompleted(taskIndex);
    storeTasksInLocalStorage(taskManager.tasks());
}
const markAsCompleted = taskManager.markAsCompleted;
taskManager.markAsCompleted = (taskIndex) => {
    markAsCompleted(taskIndex);
    storeTasksInLocalStorage(taskManager.tasks());
}
function storeTasksInLocalStorage(tasks) {
    const tasksString = JSON.stringify(tasks);
    localStorage.setItem('tasks', tasksString);
}

function getTasksFromLocalStorage() {
    const tasksString = localStorage.getItem('tasks');
    if (!tasksString) {
        return [];
    }
    return JSON.parse(tasksString);
}
window.getTasksFromLocalStorage = getTasksFromLocalStorage;
function createDeleteButton(index, liElement) {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "Eliminar"
    deleteButton.addEventListener('click', () => {
        taskManager.deleteTask(index);
        renderTasks();
    })
    liElement.append(deleteButton)
}

function createCompletedButton(completed, index, liElement) {
    const completeElement = document.createElement("div");
    completeElement.style.display = "inline-block"
    completeElement.innerText = completed ? '✔' : "✘"
    completeElement.addEventListener('click', () => {
        if (completed) {
            taskManager.markTaskUncompleted(index)
        } else {
            taskManager.markAsCompleted(index)
        }
        renderTasks();
    })
    liElement.append(completeElement)
}

function createDescriptionInput(description, liElement) {
    const descriptionElement = document.createElement('div');
    descriptionElement.style.display = "inline-block"
    descriptionElement.innerText = description
    liElement.append(descriptionElement)
}

function renderTasks() {
    const listContainer = document.getElementById('listContainer')
    listContainer.innerHTML = "";
    taskManager.tasks()
        .map((task, index) => {
            const liElement = document.createElement("li");
            createDescriptionInput(task.description, liElement);
            createCompletedButton(task.completed, index, liElement);
            createDeleteButton(index, liElement);
            return liElement;
        })
        .forEach(liElement => {
            listContainer.append(liElement)
        });
}

document.addEventListener('DOMContentLoaded', () => {
    renderTasks();
    const thisIsTheDescriptionInput = document.getElementById('descriptionInput');
    const buttonToAddTask = document.getElementById('buttonToAddTask');
    thisIsTheDescriptionInput.addEventListener('change', () => {
        buttonToAddTask.disabled = !thisIsTheDescriptionInput.value;
    });

    buttonToAddTask.addEventListener(
        "click",
        () => {
            taskManager.addNewTask(thisIsTheDescriptionInput.value)
            thisIsTheDescriptionInput.value = ""
            renderTasks()
        }
    );
});
