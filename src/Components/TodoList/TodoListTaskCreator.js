import React, { Component } from 'react';
import './TodoList.css';

class TodoListTaskCreator extends Component {

    constructor(props) {
        super(props);

        //this.newIndex = 2;

        //this.nextSlimHandler = this.nextSlimHandler.bind(this);
    }

    createNewTask(event) {
        if (event.key === 'Enter') {


            const data = new URLSearchParams();
            data.append('widgetId', 123);
            data.append('title', event.currentTarget.value);

            fetch('https://repetitora.net/api/JS/Tasks',
                {
                    method: 'POST',
                    body: data,
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        'accept': "application/json"
                    },
                    mode: 'cors'
                })
                .then(result => result.json())
                .then(result => {
                    const newTask =
                    {
                      id: result.task.id,
                      title: result.task.title,
                      isDone: result.task.done
                    }
                    this.props.onCreate(newTask);
                });
            //const newTask =
            //{
            //  id: this.newIndex,
            //  title: event.currentTarget.value,
            //  isDone: false
            //}
            //
            //this.props.onCreate(newTask)
            //event.currentTarget.value = '';
            //this.newIndex++;
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