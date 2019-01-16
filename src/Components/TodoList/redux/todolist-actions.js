export const actionType = {
    CREATE_TASK: 'CREATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    PUT_TASKS_FROM_SERVER: 'PUT_TASKS_FROM_SERVER',
    CHANGE_FILTER: 'CHANGE_FILTER',
    CLEAR_COMPLETED: 'CLEAR_COMPLETED'
};

export const createTaskAction = (task) => {
    return {
        type: actionType.CREATE_TASK,
        task: task
    }
};

export const deleteTaskAction = (id) => {
    return {
        type: actionType.DELETE_TASK,
        id: id
    }
};

export const updateTaskAction = (task) => {
    return {
        type: actionType.UPDATE_TASK,
        task: task
    }
};

export const putTasksFromServer = (tasks) => {
    return {
        type: actionType.PUT_TASKS_FROM_SERVER,
        tasks: tasks
    }
};

export const changeFilterAction = (filter) =>{
    return {
        type: actionType.CHANGE_FILTER,
        filter: filter
    }
};

export const clearTasksCompleted = () => {
    return{
        type: actionType.CLEAR_COMPLETED
    }
};