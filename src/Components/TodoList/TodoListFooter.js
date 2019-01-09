import React, { Component } from 'react';
import './TodoList.css';
class TodoListFooter extends Component {

  constructor(props) {
    super(props);
  }

  handleFilterChanged(e) {
    alert(e.currentTarget.dataset.value);
  }

  render() {
    var{tasks, filter} = this.props;

    return (
        <div className="todolist-footer">
          <div>
            <span>{tasks.filter((t) => !t.isDone).length}
              items left</span>
          </div>
          <div className="buttons">
            <button className={filter == 'all' ? 'selected' : ''} data-value="all"
                    onClick={this.handleFilterChanged.bind(this)}>All
            </button>
            <button className={filter == 'active' ? 'selected' : ''} data-value="active"
                    onClick={this.handleFilterChanged.bind(this)}>Active
            </button>
            <button className={filter == 'completed' ? 'selected' : ''} data-value="completed"
                    onClick={this.handleFilterChanged.bind(this)}>Completed
            </button>
          </div>
          <div>Clear completed</div>
        </div>
    );
  }
}

export default TodoListFooter;
