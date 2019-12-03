import React from "react";
import "./Todo.css";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChange = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewTask(this.state.newTask);
    this.setState({
      newTask: ""
    });
  };

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="task"
            value={this.state.newTask}
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
          <button onClick={this.props.removeCompleted}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
