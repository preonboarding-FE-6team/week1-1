import React, { useRef, useContext, useEffect } from "react";
import { TodosDisPatchContext } from "../../store/todo-context";
import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./TodoForm.module.css";

const TodoForm = () => {
  const todoInputRef = useRef();
  const { addTodo } = useContext(TodosDisPatchContext);

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const submitTodoHandler = (e) => {
    e.preventDefault();

    addTodo(todoInputRef.current.value);

    todoInputRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitTodoHandler}>
      <Input
        className={"todo-input"}
        id="text"
        label="할 일을 적어주세요!"
        type={"text"}
        ref={todoInputRef}
      />
      <Button text={"할일추가"} className={"submit"} />
    </form>
  );
};

export default TodoForm;
