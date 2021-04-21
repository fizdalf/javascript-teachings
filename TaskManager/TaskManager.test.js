const {format} = require('date-fns');
const {TaskManager} = require('./TaskManager');

test('TaskManager: it gets created with an empty array of tasks when nothing is passed as argument', () => {
    const taskManager = TaskManager();
    expect(taskManager.tasks().length).toBe(0);
})

test('TaskManager: it gets created with an the array of tasks provided as argument', () => {
    const taskManager = TaskManager([{
        description: "my momma",
        completed: true,
        completionDate: '2021-04-16 21:50:00'
    }]);
    expect(taskManager.tasks()[0].description).toBe('my momma');
})


test('TaskManager: markTaskUncompleted it should unmark a task as not completed and clear the completed date provided the id of the task ', () => {
    // preparar
    const taskManager = TaskManager([
            {description: "my momma", completed: true, completedDate: '2021-04-16 21:50:00'},
            {
                description: "my momma",
                completed: true, completedDate: '2021-04-16 21:50:00'
            }
        ]
    );
    const indexToUse = 1;
    // actuar
    taskManager.markTaskUncompleted(indexToUse);
    // comprobar
    expect(taskManager.tasks()[indexToUse].completed).toBe(false);
    expect(taskManager.tasks()[indexToUse].completedDate).toBe(null);
})
test('TaskManager: markTaskUncompleted checks that the task exists and if not throws an error ', () => {
    // preparar
    const taskManager = TaskManager();
    expect(() => taskManager.markTaskUncompleted(-50)).toThrow();
})

test('TaskManager: confirm that the task is added',
    () => {
        const taskManager = TaskManager();
        taskManager.addNewTask("cocinar al cerdo");
        expect(taskManager.tasks()[0].description).toBe("cocinar al cerdo")
        expect(taskManager.tasks()[0].completedDate).toBe(null);
        expect(taskManager.tasks()[0].completed).toBe(false);
    }
)
test('TaskManager: should error when adding a task with no string or empty string',
    () => {
        const taskManager = TaskManager();
        expect(() => taskManager.addNewTask(1)).toThrow()
    }
)

test('TaskManager: deleteTask erase certain task given the id of the task itself', () => {
    const taskManager = TaskManager(
        [
            {
                description: "Recoger las cacas del perro",
                completed: true,
                completedDate: '2021-04-16 21:50:00'
            },
            {
                description: "Tirar las cacas por el balcón",
                completed: true,
                completedDate: '2021-04-16 21:50:00'
            }
        ]);
    const taskIndex = 0
    taskManager.deleteTask(taskIndex)
    expect(taskManager.tasks().length).toBe(1)
})

test('TaskManager: deleteTask should check that the index exists before deleting and error if it doesn\'t', () => {
    const taskManager = TaskManager(
        [
            {
                description: "Recoger las cacas del perro",
                completed: true,
                completedDate: '2021-04-16 21:50:00',
            },
            {
                description: "Tirar las cacas por el balcón",
                completed: true,
                completedDate: '2021-04-16 21:50:00',
            }
        ]);
    const taskIndex = 3

    expect(() => taskManager.deleteTask(taskIndex)).toThrow("Índice no válido");
})
test('TaskManager: markAsCompleted should error when the id is beyond the existing limits', () => {
    const taskManager = TaskManager(
        [
            {
                description: "Recoger las cacas del perro",
                completed: false,
                completedDate: null
            },
            {
                description: "Tirar las cacas por el balcón",
                completed: false,
                completedDate: null
            }
        ]);
    expect(() => taskManager.markAsCompleted(2)).toThrow()
})


test('TaskManager: markAsCompleted should mark the completed task for the given id', () => {
    const taskManager = TaskManager(
        [
            {
                description: "Recoger las cacas del perro",
                completed: false,
                completedDate: null,
            },
            {
                description: "Tirar las cacas por el balcón",
                completed: false,
                completedDate: null,
            }
        ]);
    const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    taskManager.markAsCompleted(0);
    expect(taskManager.tasks()[0].completed).toBe(true)
    expect(taskManager.tasks()[0].completedDate).toBe(currentDate)
})


test('TaskManager: pendingTasks should return all the tasks that are not completed', () => {
    const taskManager = TaskManager(
        [
            {
                description: "Recoger las cacas del perro",
                completed: true,
                completedDate: '2021-04-16 21:50:00',
            },
            {
                description: "Tirar las cacas por el balcón",
                completed: false,
                completedDate: null,
            }
        ]);
    const pendingTasks = taskManager.pendingTasks();
    expect(pendingTasks[0].description).toBe("Tirar las cacas por el balcón")
    expect(pendingTasks[0].completed).toBe(false);
    expect(pendingTasks[0].completedDate).toBe(null);
})
