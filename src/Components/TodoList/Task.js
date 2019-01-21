import React, { Component } from 'react';
import './TodoList.css';
import {updateTaskOnServer, deleteTaskOnServer} from './Services.js'
import {deleteTaskAction, updateTaskAction} from './redux/todolist-actions';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      title: props.task.title
    };

    this.store = this.props.store;
  }

  deleteTask(event) {
    let taskId = this.props.task.id;
    deleteTaskOnServer(taskId, 123);
    this.store.dispatch(deleteTaskAction(taskId));
  }

  toggleTaskStatus(event) {
    let task = JSON.parse(JSON.stringify(this.props.task));
    task.isDone = !task.isDone;
    updateTaskOnServer(task.id, 123, task.title, task.isDone)
        .then(t => {
          this.store.dispatch(updateTaskAction(task));
        });
  }

  saveTitle(event){
    const newTitle = event.currentTarget.value;
    let task = JSON.parse(JSON.stringify(this.props.task));
    task.title = newTitle;
    updateTaskOnServer(task.id, 123, task.title, task.isDone)
        .then(t => {
          this.setState({
            editMode: false
          });
          this.store.dispatch(updateTaskAction(task));
        });
  }

  changeTitle(event){
    this.setState({
      title: event.currentTarget.value
    })
  }

  goToEditMode(){
    this.setState({
      editMode : true
    })
  }

  render(){
    let {isDone} = this.props.task;
    let {title} = this.state;

    let displayElement = <span onDoubleClick={this.goToEditMode.bind(this)}>{title}</span>;

    if(this.state.editMode){
      displayElement = <input value={title} onChange={this.changeTitle.bind(this)} onBlur={this.saveTitle.bind(this)}/>
    }

    return (
        <div className={isDone ? 'task done' : 'task'}>
          <input type="checkbox" checked={isDone} onChange={this.toggleTaskStatus.bind(this)}/>
          {displayElement}
          <span className="delete" onClick={this.deleteTask.bind(this)}>x</span>
        </div>
    );
  }
}

export default Task;