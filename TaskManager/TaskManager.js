const {format} = require('date-fns');
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
            if (description === "" || typeof description !== "string") {
                throw Error("pon letras cerdo")
            }
            tasks.push({description, completed: false, completedDate: null});
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
            tasks[taskIndex].completedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
        },
        markTaskUncompleted(taskIndex) {
            checkIndexExists(taskIndex);
            tasks[taskIndex].completed = false;
            tasks[taskIndex].completedDate = null;
        },
        pendingTasks() {
            return tasks.filter((task, index, array) => {
                return task.completed === false;
            });
        },
        tasks() {
            return [...tasks];
        }
    }
}

exports.test = 4;
