import React, {Component } from 'react';
import './TodoList.css';
import TodoListFooter from './TodoListFooter.js'
import TodoListTaskCreator from './TodoListTaskCreator.js'
import TasksList from './TasksList.js'
import {getTasks} from './Services.js'
import {createStore, combineReducers} from 'redux';

class TodoList extends Component {

    constructor() {
        super();


        var todoListState = {
            tasks: [{
                id: 1,
                title: "learn CSS",
                isDone: false
            }],
            filter: "all"
        };

        const changeFilterAction = {
            type: 'CHANGE_FILTER'
        };

        const createNewTaskAction = {
            type: 'CREATE_NEW_TASK',
            id: 2,
            title: 'learn react',
            isDone: true
        };

        function todoListReducer(oldState = { tasks: [{
            id: 1,
            title: "learn CSS",
            isDone: false
        }],
            filter: "all"}, action) {
            switch (action.type) {
                case 'CHANGE_FILTER':
                    return {
                        ...oldState, filter: 'completed'
                    };
                case 'CREATE_NEW_TASK':
                    return {
                        ...oldState,
                        tasks: [...oldState.tasks, {
                            id: action.id,
                            title: action.title,
                            isDone: action.isDone
                        }]
                    };
                default:
                    return oldState;
            }
        };

        //var reducers = combineReducers({todoListReducer});
        //var store = createStore(reducers);
        var store = createStore(todoListReducer)

        var state1 = store.getState();
        console.log('state: ', state1);

        store.dispatch(changeFilterAction);
        var state2 = store.getState();
        console.log('state: ', state2);







        this.state = {
            tasks: [],

            filter: 'all'
        };

        getTasks(123)
            .then(result => {
                var getTasks = result.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        isDone: item.done
                    };
                });

                this.setState({
                    tasks: getTasks
                })
            });
    }

    changeFilter(filterValue) {
        this.setState({filter: filterValue});
    }

    putTaskToState(task) {
        this.setState({
            tasks: [...this.state.tasks, task]
        });
    }

    deleteTask(id) {
        this.setState({
            tasks: this.state.tasks
                .filter((t) => {
                    return t.id !== id;
                })
        })
    }

    clearCompleted() {
        let activeTask = this.state.tasks.filter(t => !t.isDone);
        this.setState({tasks: activeTask});
    }

    updateTask(task) {
        const newTasks = JSON.parse(JSON.stringify(this.state.tasks));

        newTasks.forEach((t, index) => {
            if (t.id === task.id) {
                newTasks[index] = task;
                return;
            }
        });

        this.setState({tasks: newTasks});

    }

    render() {
        var {tasks, filter} = this.state;

        var filteredTask = [];
        if (filter === 'all') {
            filteredTask = tasks;
        } else if (filter === 'active') {
            filteredTask = tasks.filter(t => !t.isDone);
        } else if (filter === 'completed') {
            filteredTask = tasks.filter(t => t.isDone);
        }
        return (
            <div className="todolist">
                <TodoListTaskCreator onCreate={this.putTaskToState.bind(this)}/>

                <TasksList tasks={filteredTask}
                           onDelete={this.deleteTask.bind(this)}
                           onUpdate={this.updateTask.bind(this)}/>
                <TodoListFooter tasks={tasks} filter={filter} onFilterChanged={this.changeFilter.bind(this)}
                                onClearCompleted={this.clearCompleted.bind(this)}/>
            </div>
        );
    }
}

export
default
TodoList;
