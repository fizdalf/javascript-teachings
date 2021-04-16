exports.TaskManager = function (initialTasks = []) {

    let tasks = [...initialTasks];

    /**
     * comprobar que la lista que nos pasan tiene la forma que nosotros esperamos
     */

    function checkIndexExists(taskIndex) {
        if (taskIndex < 0 || taskIndex >= tasks.length) {
            throw Error("Índice no válido");
        }
    }

    return {
        addNewTask(description) {
            tasks.push({description, completed: false});
        },
        deleteTask(taskIndex) {
            checkIndexExists(taskIndex);
            tasks = tasks.filter((item, index) => {
                return index !== taskIndex;
            })
        },
        markAsCompleted(taskIndex) {
            checkIndexExists(taskIndex);
            tasks[taskIndex].completed = true;
        },
        markTaskUncompleted(taskIndex) {
            checkIndexExists(taskIndex);
            tasks[taskIndex].completed = false;
        },
        tasks() {
            return [...tasks];
        }
    }
}

