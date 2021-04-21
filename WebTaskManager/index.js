import {TaskManager} from "../TaskManager/TaskManager";

const taskManager = TaskManager()


function renderTasks() {
    const listContainer = document.getElementById('listContainer')
    listContainer.innerHTML = "";
    taskManager.tasks().map((task, index) => {
        const liElement = document.createElement("li");
        const descriptionElement = document.createElement('div');
        descriptionElement.style.display = "inline-block"
        descriptionElement.innerText = task.description
        liElement.append(descriptionElement)
        const completeElement = document.createElement("div");
        completeElement.style.display = "inline-block"
        completeElement.innerText = task.completed ? '✔' : "✘"
        completeElement.addEventListener('click', () => {
            if (task.completed) {
                taskManager.markTaskUncompleted(index)
            } else {
                taskManager.markAsCompleted(index)
            }
            renderTasks();
        })
        liElement.append(completeElement)
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Eliminar"
        deleteButton.addEventListener('click', () => {
            taskManager.deleteTask(index);
            renderTasks();
        })
        liElement.append(deleteButton)
        return liElement;
    }).forEach(liElement => {
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
