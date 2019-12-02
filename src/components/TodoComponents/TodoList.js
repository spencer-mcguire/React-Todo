import React from "react";
import Todo from "./Todo";

const TodoList = ({ data }) => {
  return (
    <div>
      {data.map(i => (
        <Todo key={i.id} data={i} />
      ))}
    </div>
  );
};

export default TodoList;
