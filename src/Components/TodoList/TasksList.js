import React, { Component } from 'react';
import Task from './Task.js'


class TasksList extends Component {


  render() {
    return (
          <div className="tasks">
            {
              this.props.tasks.map((task, index) => {
                return <Task task={task} store={this.props.store}
                             key={task.id}/>
              })
            }
          </div>
    );
  }
}

export default TasksList;