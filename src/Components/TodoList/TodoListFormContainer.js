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

    changeTitle(title){
        this.setState({
            title: title
        });
    }

    createTask(taskTitle) {
        this.setState({
            isWaiting: true,
            title: taskTitle
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
                this.setState({
                    isWaiting: false,
                    title: ''
                });
            });
    }
        render(){
            let {title, isWaiting} = this.state;
            return(
                <TaskCreatorPresentation createTask={this.createTask.bind(this)} changeTitle={this.changeTitle.bind(this)} isWaiting={isWaiting} />
            );
        }
}
export default TodoListFormContainer;

const TaskCreatorPresentation = (props) =>{

    const createNewTask = (event) => {
        if (event.key === 'Enter') {
            props.createTask(event.currentTarget.value);
            event.currentTarget.value = '';
        }
    };
    return (
        <div className="header">
            <input onKeyPress={createNewTask} onKeyUp={e => props.changeTitle(e.currentTarget.value)} disabled={props.isWaiting}/>
        </div>

    );
};



