import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div>
      <p
        onClick={e => {
          props.markDone(props.data.id);
        }}
        id={props.data.id}
        className={`${props.data.completed ? "completed" : ""} `}
      >
        {props.data.task}
      </p>
    </div>
  );
};

export default Todo;
