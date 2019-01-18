import React, {Component } from 'react';
import {createTaskOnServer} from './Services.js';


class TodoListFormContainer extends Component{

    constructor(props){
        super(props);

        this.state = {
            title : '',
            isWaiting: false
        }
    }

    createTask(taskTitle) {
        this.setState({
            isWaiting: true
        });
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
            let {title, isWaiting} = this.state;
            return(
                <TaskCreatorPresentation createTask={this.createTask.bind(this)} title={title} isWaiting={isWaiting} />
            );
        }
}

const TaskCreatorPresentation = (props) =>{

    const createNewTask = (event) => {
        if (event.key === 'Enter') {
            props.createTask(event.currentTarget.value);
            event.currentTarget.value = '';
        }
    };
    return (
        <div className="header">
            <input onKeyPress={createNewTask} value={props.title} disabled={props.isWaiting
            }/>
        </div>

    );
};

export default TodoListFormContainer;

