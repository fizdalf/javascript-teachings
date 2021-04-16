// Create a program that keeps track of a list of tasks, it allows the user to add a task (with a description), mark the task as completed
// we need to be able to retrieve the list of tasks and show them, we will persist the information in a file
// The program will receive from the terminal argument the name of the list, it will present the user
// with the options the user can do, the options will be
// add task: this will ask the user for a description and will add the task to the lists
// remove task: this will allow the user to give a id/description and remove a task from the list
// mark task as completed: this will allow the user to mark a task a completed
// exit & save: this will allow the user to exit the program and save the tasks to a disk file
// The program is required to load a from a file with the same name of the list (if exits) upon initialization
const fs = require('fs');
const readline = require("readline");
const {TaskManager} = require('../TaskManager/TaskManager');
const [, , ...fileNameArray] = process.argv

const fileName = fileNameArray.join('_');
let tasks = [];
if (fs.existsSync(fileName)) {
    const test = fs.readFileSync(fileName);
    const retrievedText = test.toString();

    try {
        tasks = JSON.parse(retrievedText);
        console.log('Cargando tareas desde archivo . . .');
    } catch (error) {
        console.log('No existe archivo de tareas, creando uno nuevo');
    }

} else {
    console.log('No existe archivo de tareas, creando uno nuevo');
}

const taskManager = TaskManager(tasks);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function printTasks() {
    let rows = [
        [" tarea ", " descripción ", " completado "],
    ];

    const maxLengths = [
        rows[0][0].length,
        rows[0][1].length,
        rows[0][2].length,
    ]

    taskManager.tasks().forEach((task, index) => {
        const indexAsStringWithSpaces = " " + index + " ";
        const descriptionWithSpaces = " " + task.description + " ";
        const completedWithSpaces = " " + (task.completed ? "✔" : "✘️") + " ";
        const formattedRow = [indexAsStringWithSpaces, descriptionWithSpaces, completedWithSpaces];
        formattedRow.forEach((text, index) => {
            if (text.length > maxLengths[index]) {
                maxLengths[index] = text.length;
            }
        });
        rows.push(formattedRow);
    });

    rows = rows.map((row) => {
        row = row.map((text, columnIndex) => {
            while (text.length !== maxLengths[columnIndex]) {
                text += " ";
            }
            return text;
        });
        return row;
    });

    rows.forEach((row) => console.log(row.join("|")));
}

function pauseAndShowMenu() {
    rl.question('Pulsa Enter para continuar', function () {
        return showMenu();
    });
}

const showMenu = () => {
    rl.question(
        `
Bienvenido a tu programa de tareas
Escoge una de las siguientes opciones.
0) Mostrar las tareas actuales.
1) Añadir tarea.
2) Quitar tarea.
3) Marcar tarea completada.
4) Guardar y salir
`,
        function (selectedOption) {
            const numberOption = parseInt(selectedOption);
            if (isNaN(numberOption) || numberOption
                < 0 || numberOption > 4) {
                console.log('Opción inválida');
                return showMenu();
            }


            if (numberOption === 0) {
                printTasks();
                pauseAndShowMenu();
            } else if (numberOption === 1) {
                rl.question("Introduzca la descripción de la tarea que desea añadir\n", function (answer) {
                    taskManager.addNewTask(answer);
                    printTasks();
                    pauseAndShowMenu();
                });
            } else if (numberOption === 2) {
                printTasks();
                rl.question("Qué tarea desea eliminar?\n", function (answer) {
                    const numberOption = parseInt(answer);
                    if (isNaN(numberOption)) {
                        console.log('Opción inválida');
                        return showMenu();
                    }
                    try {
                        taskManager.deleteTask(numberOption);
                    } catch (error) {
                        console.log('Opción inválida');
                        return showMenu();
                    }
                    printTasks();
                    pauseAndShowMenu();
                })
            } else if (numberOption === 3) {
                printTasks();
                rl.question("Qué tarea quieres marcar como completada?\n", function (answer) {
                    const numberOption = parseInt(answer);
                    if (isNaN(numberOption)) {
                        console.log('Opción inválida');
                        return showMenu();
                    }

                    try {
                        taskManager.markAsCompleted(numberOption);
                    } catch (error) {
                        console.log('Opción inválida');
                        return showMenu();
                    }
                    printTasks();
                    pauseAndShowMenu();
                })
            } else if (numberOption === 4) {
                const text = JSON.stringify(taskManager.tasks());

                fs.writeFileSync(fileName, text);
                rl.close();
            }
        });
}

showMenu();
