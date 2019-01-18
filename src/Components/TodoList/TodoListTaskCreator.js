import React, {Component } from 'react';
import {createTaskOnServer} from './Services.js';


export class TodoListFormContainer extends Component{

    createTask(taskTitle) {
        createTaskOnServer(taskTitle, 123)
            .then(result => {
                const newTask =
                {
                    id: result.task.id,
                    title: result.task.title,
                    isDone: result.task.done
                };
                this.props.onCreate(newTask);
            });
    }
        render(){
            return(
                <TodoListTaskCreator createTask={this.createTask.bind(this)} />
            );
        }
}

const TodoListTaskCreator = (props) =>{

    const createNewTask = (event) => {
        if (event.key === 'Enter') {
            props.createTask(event.currentTarget.value);
            event.currentTarget.value = '';
        }
    };
    return (
        <div className="header">
            <input onKeyPress={createNewTask}/>
        </div>

    );
};

export default TodoListTaskCreator;
