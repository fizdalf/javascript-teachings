const {TaskManager} = require('./TaskManager');

test('TaskManager: it gets created with an empty array of tasks when nothing is passed as argument', () => {
    const taskManager = TaskManager();
    expect(taskManager.tasks().length).toBe(0);
})

test('TaskManager: it gets created with an the array of tasks provided as argument', () => {
    const taskManager = TaskManager([{description: "my momma", completed: true}]);
    expect(taskManager.tasks()[0].description).toBe('my momma');
})


test('TaskManager: it unmarks as completed a task provided the id of the task ', () => {
    // preparar
    const taskManager = TaskManager([{description: "my momma", completed: true}, {
        description: "my momma",
        completed: true
    }]);
    const indexToUse = 1;
    // actuar
    taskManager.markTaskUncompleted(indexToUse);
    // comprobar
    expect(taskManager.tasks()[indexToUse].completed).toBe(false);
})
test('TaskManager: markTaskUncompleted checks that the task exists and if not throws an error ', () => {
    // preparar
    const taskManager = TaskManager();
    expect(() => taskManager.markTaskUncompleted(-50)).toThrow();
})
