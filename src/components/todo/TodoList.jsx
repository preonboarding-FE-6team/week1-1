import React, { useContext } from "react";
import { TodosContext } from "../../store/todo-context";
import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const todos = useContext(TodosContext);

  return (
    <ul className={classes["todo-list"]}>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
