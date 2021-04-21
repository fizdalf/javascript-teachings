const TaskManager = require('../../TaskManager/TaskManager');

test('TaskManager: deleteTask erase certain task given the id of the task itself', () => {
    const taskManager = TaskManager([{description: "Recoger las cacas del perro", completed: true}, {
        description: "Tirar las cacas por el balcón",
        completed: true
    }]);
    const taskIndex = 0
    taskManager.deleteTask(taskIndex)
    const itExist = taskManager.checkIndexExists(taskIndex)
    expect(itExist).toBe(false)
})
