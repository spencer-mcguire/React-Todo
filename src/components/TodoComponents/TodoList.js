import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, markDone }) => {
  return (
    <div>
      {data.map(i => (
        <Todo key={i.id} data={i} markDone={markDone} />
      ))}
    </div>
  );
};

export default TodoList;
