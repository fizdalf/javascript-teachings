// Create a program that keeps track of a list of tasks, it allows the user to add a task (with a description), mark the task as completed
// we need to be able to retrieve the list of tasks and show them, we will persist the information in a file
// The program will receive from the terminal argument the name of the list, it will present the user
// with the options the user can do, the options will be
// add task: this will ask the user for a description and will add the task to the lists
// remove task: this will allow the user to give a id/description and remove a task from the list
// mark task as completed: this will allow the user to mark a task a completed
// exit & save: this will allow the user to exit the program and save the tasks to a disk file
// The program is required to load a from a file with the same name of the list (if exits) upon initialization

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [
    {
        description: "Tachar el dia del calendario",
        completed: true,
    },
    {
        description: "Recoger las hojas del patio",
        completed: false,
    }
];


function printTasks() {
    let rows = [
        [" tarea ", " descripción ", " completado "],
    ];

    const maxLengths = [
        rows[0][0].length,
        rows[0][1].length,
        rows[0][2].length,
    ]

    tasks.forEach((task, index) => {
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
    < 0 || numberOption > 4)
    {
        console.log('Opción inválida');
        return showMenu();
    }


if (numberOption === 0)
    {
        printTasks();
        return showMenu();
    }
else if (numberOption === 1)
    {
        // request the description of the task
        rl.question("Introduzca la descripción de la tarea que desea añadir", function (answer){
                tasks.push({description: answer, completed: false})
            printTasks();
            return showMenu();
        });
        // add the task to the list of tasks
        // print the list of tasks updated
        // printTasks();
        // show the menu again
        // return showMenu();
    }
else if (numberOption === 2)
    {
        // request the index of the task to remove
        rl.question("Qué tarea desea eliminar?",function (answer){
            const numberOption = parseInt(answer);
            if (isNaN(numberOption) || numberOption < 0 || numberOption > tasks.length) {
                console.log('Opción inválida');
                return showMenu();
            }
            function removeTaskFromLstByIndex(numberOption,){
                let listOfTask = []

                for(let i =0; i < tasks.length; i++){
                    if(numberOption !== tasks[i]){
                        listOfTask.push(numberOption)
                    }
                    let tasks = listOfTask;
                }
            }
            printTasks()
            return showMenu()
        })
        // check if the value given is correct (if it's not valid return to menu)
        // if the value is correct, remove the task with the given index
        // print the list of tasks updated
        // show the menu again
    }
else if (numberOption === 3)
    {
        rl.question("Qué tarea quieres marcar como completada?",function(asnswer){
            const numberOption = parseInt(answer);
            if (isNaN(numberOption) || numberOption < 0 || numberOption > tasks.length) {
                console.log('Opción inválida');
                return showMenu();
            }

        })
        console.log("Marcar tarea completada.")
    }
else if (numberOption === 4)
    {
        console.log("Guardar y salir");
        rl.close();
    }
});
}

showMenu();





