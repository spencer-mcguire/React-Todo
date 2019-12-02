import React from "react";

const Todo = props => {
  return (
    <div>
      <p>{props.data.task}</p>
    </div>
  );
};

export default Todo;
