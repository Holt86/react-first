import React, { Component } from 'react';
import './TodoList.css';
import {updateTask} from './Services.js'

class Task extends Component {

  constructor(props) {
    super(props);
    //this.state = {
    //  task: props.task
    //};

    this.parentDeleteCallback = props.deleteCallback;
    this.parentUpdateCallback = props.updateCallback;
  }

  deleteTask(event) {
    this.parentDeleteCallback(this.props.task.id)
  }

  toggleTaskStatus(event) {
    let task = JSON.parse(JSON.stringify(this.props.task));
    task.isDone = !task.isDone;
    updateTask(task.id, 123, task.title, task.isDone)
        .then(t => {
          this.parentUpdateCallback(task);
        });
  }

  render(){
    return (
        <div className={this.props.task.isDone ? 'task done' : 'task'}>
          <input type="checkbox" checked={this.props.task.isDone} onChange={this.toggleTaskStatus.bind(this)}/>
          {this.props.task.title}
          <span className="delete" onClick={this.deleteTask.bind(this)}>x</span>
        </div>
    );
  }
}

export default Task;