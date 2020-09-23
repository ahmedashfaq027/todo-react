import React from "react";
// IMPORT COMPONENTS
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
