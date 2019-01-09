import React, { Component } from 'react';
import './TodoList.css';
import TodoListFooter from './TodoListFooter.js'
import TodoListTaskCreator from './TodoListTaskCreator.js'
import TasksList from './TasksList.js'

class TodoList extends Component {

  constructor() {
    super();

    this.state = {
      tasks: [
        {
          id: 0,
          title: 'learn react',
          isDone: false
        },
        {
          id: 1,
          title: 'learn redax',
          isDone: false
        }
      ],

      filter: "all"
    };

    //this.nextSlimHandler = this.nextSlimHandler.bind(this);
  }

  putTaskToState(task) {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }

  deleteTask(id) {
    this.setState({
      tasks: this.state.tasks
          .filter((t) => {
            return t.id !== id;
          })
    })
  }

  updateTask(task) {
    const newTasks = JSON.parse(JSON.stringify(this.state.tasks));

    newTasks.forEach((t, index) => {
      if (t.id === task.id) {
        newTasks[index] = task;
        return;
      }
    });

    this.setState({tasks : newTasks});

  }

  render() {
    var{tasks, filter} = this.state;
    return (
        <div className="todolist">
          <TodoListTaskCreator onCreate={this.putTaskToState.bind(this)}/>

          <TasksList tasks={this.state.tasks}
                     onDelete={this.deleteTask.bind(this)}
                     onUpdate={this.updateTask.bind(this)}/>
          <TodoListFooter tasks={tasks} filter={filter}/>
        </div>
    );
  }
}

export default TodoList;
