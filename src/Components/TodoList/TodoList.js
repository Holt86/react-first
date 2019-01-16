import React, {Component } from 'react';
import './TodoList.css';
import TodoListFooter from './TodoListFooter.js'
import TodoListTaskCreator from './TodoListTaskCreator.js'
import TasksList from './TasksList.js'
import {getTasksFromServer} from './Services.js'
import {createStore, combineReducers} from 'redux';
import {todoListReducer} from './redux/todolist-reducers';
import {changeFilterAction, createTaskAction, putTasksFromServer, clearTasksCompleted, deleteTaskAction, updateTaskAction} from './redux/todolist-actions';

class TodoList extends Component {

    constructor() {
        super();
        //var reducers = combineReducers({todoListReducer});
        //var store = createStore(reducers);
        this.store = createStore(todoListReducer);
        this.state = this.store.getState();

        this.store.subscribe(() => {
            let newState = this.store.getState();
            this.setState(newState);
        });

        getTasksFromServer(123)
            .then(result => {
                var tasks = result.map(item => {
                    return {
                        id: item.id,
                        title: item.title,
                        isDone: item.done
                    };
                });
                let action = putTasksFromServer(tasks);
                this.store.dispatch(action);
            });
    }

    changeFilter(filterValue) {
        let action = changeFilterAction(filterValue);
        this.store.dispatch(action);
        //this.setState({filter: filterValue});
    }

    putTaskToState(task) {
        let action = createTaskAction(task);
        this.store.dispatch(action);
        //this.setState({
        //    tasks: [...this.state.tasks, task]
        //});

    }

    deleteTask(id) {
        let action = deleteTaskAction(id);
        this.store.dispatch(action)
    }

    clearCompleted() {
        let action = clearTasksCompleted();
        this.store.dispatch(action)
    }

    updateTask(task) {
        let action = updateTaskAction(task);
        this.store.dispatch(action);
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
