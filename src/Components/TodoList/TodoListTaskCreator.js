import React, { Component } from 'react';
//import './TodoList.css';
import {createTaskOnServer} from './Services.js'

class TodoListTaskCreator extends Component {

    constructor(props) {
        super(props);
    }

    createNewTask(event) {
        if (event.key === 'Enter') {

            const inputTarget = event.currentTarget;

          createTaskOnServer(inputTarget.value, 123)
                .then(result => {
                    const newTask =
                    {
                      id: result.task.id,
                      title: result.task.title,
                      isDone: result.task.done
                    }
                    this.props.onCreate(newTask);
                    inputTarget.value='';
                });
        }
    }

    render() {
        return (
            <div className="header">
                <input onKeyPress={this.createNewTask.bind(this)}/>
            </div>

        );
    }
}

export default TodoListTaskCreator;