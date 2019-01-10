import React, { Component } from 'react';
//import './TodoList.css';
import {createTask} from './Services.js'

class TodoListTaskCreator extends Component {

    constructor(props) {
        super(props);

        //this.newIndex = 2;

        //this.nextSlimHandler = this.nextSlimHandler.bind(this);
    }

    createNewTask(event) {
        if (event.key === 'Enter') {

            const inputTarget = event.currentTarget;

          createTask(inputTarget.value, 123)
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