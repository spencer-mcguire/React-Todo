import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const data = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      data: data
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addNewTask = task => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTask]
    });
  };

  markDone = itemID => {
    const todos = this.state.data.map(todo => {
      if (todo.id === itemID) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ todos, todo: "" });
  };

  removeCompleted = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        data: prevState.data.filter(todo => {
          return !todo.completed;
        })
      };
    });
  };

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          addNewTask={this.addNewTask}
          removeCompleted={this.removeCompleted}
        />
        <TodoList data={this.state.data} markDone={this.markDone} />
      </div>
    );
  }
}

export default App;
