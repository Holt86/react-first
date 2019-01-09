import React, { Component } from 'react';
import './TodoList.css';

class TodoListTaskCreator extends Component {

  constructor(props) {
    super(props);

    this.newIndex = 2;

    //this.nextSlimHandler = this.nextSlimHandler.bind(this);
  }

  createNewTask(event) {
    if (event.key === 'Enter') {
      const newTask =
      {
        id: this.newIndex,
        title: event.currentTarget.value,
        isDone: false
      }

      this.props.onCreate(newTask)
      event.currentTarget.value = '';
      this.newIndex++;
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