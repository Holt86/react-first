export const actionType = {
    CHANGE_FILTER: 'CHANGE_FILTER',
    CREATE_NEW_TASK: 'CREATE_NEW_TASK',
    PUT_TASKS: 'PUT_TASKS',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED'
}

//export const changeFilterAction = {
//    type: actionType.CHANGE_FILTER
//};
//
//export const createNewTaskAction = {
//    type: actionType.CREATE_NEW_TASK,
//    id: 2,
//    title: 'learn react',
//    isDone: true
//};

export const putTasksAction = (tasks) => {
    return {
        type: actionType.PUT_TASKS,
        tasks: tasks
    }
};

export const clearTaskCompleted = () => {
    return{
        type: actionType.CLEAR_COMPLETED
    }
};