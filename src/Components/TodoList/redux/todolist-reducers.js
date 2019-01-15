import {actionType} from './todolist-actions'

export function todoListReducer(oldState, action) {
    switch (action.type) {
        case actionType.CHANGE_FILTER:
            return {
                ...oldState, filter: 'completed'
            };
        case actionType.CREATE_NEW_TASK:
            return {
                ...oldState,
                tasks: [...oldState.tasks, {
                    id: action.id,
                    title: action.title,
                    isDone: action.isDone
                }]
            };
        case actionType.PUT_TASKS:
            return {
                ...oldState, tasks: [...oldState.tasks, action.tasks]
            };
        case actionType.CLEAR_COMPLETED:
            return {
                ...oldState, tasks: oldState.tasks.filter(t => t.isDone)
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