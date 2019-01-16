import {actionType} from './todolist-actions'

export function todoListReducer(oldState, action) {
    switch (action.type) {
        case actionType.CREATE_TASK:
        {
            return {
                ...oldState,
                tasks: [...oldState.tasks, action.task]
            };
        }

        case actionType.DELETE_TASK:
        {
            return {
                ...oldState,
                tasks: [...oldState.tasks.filter((t) => {
                    return t.id !== action.id;
                })]
            };
        }

        case actionType.UPDATE_TASK:
        {
            const newTasks = JSON.parse(JSON.stringify(oldState.tasks));
            newTasks.forEach((t, index) => {
                if (t.id === action.task.id) {
                    newTasks[index] = action.task;
                }
            });
            return {
                ...oldState, tasks: newTasks
            };
        }

        case actionType.PUT_TASKS_FROM_SERVER:
            return {
                ...oldState, tasks: [...oldState.tasks, ...action.tasks]
            };

        case actionType.CHANGE_FILTER:
            return {
                ...oldState, filter: action.filter
            };

        case actionType.CLEAR_COMPLETED:
            return {
                ...oldState, tasks: oldState.tasks.filter(t => !t.isDone)
            };

        default:
            if (!!oldState)
                return oldState;
            return {
                tasks: [],
                filter: "all"
            }
    }
};