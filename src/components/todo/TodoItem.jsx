import React, { useState, useRef, useEffect, useContext } from "react";
import { TodosDisPatchContext } from "../../store/todo-context";
import Button from "../UI/Button";
import Input from "../UI/Input";
import classes from "./TodoItem.module.css";

const TodoItem = ({ id, todo, isCompleted }) => {
  const { updateTodo, removeTodo } = useContext(TodosDisPatchContext);
  const [editMode, setEditMode] = useState(false);
  const editInputRef = useRef();

  useEffect(() => {
    if (editMode) {
      editInputRef.current.value = todo;
      editInputRef.current.focus();
    }
  }, [editMode, todo]);

  const updateTodoHandler = () => {
    if (!editInputRef.current.value.trim()) {
      editInputRef.current.focus();
      return;
    }

    if (todo === editInputRef.current.value) {
      setEditMode(false);
      return;
    }

    updateTodo(id, editInputRef.current.value, isCompleted);
    setEditMode(false);
  };

  const toggleEditHandler = () => {
    setEditMode((prevMode) => !prevMode);
  };

  if (editMode) {
    return (
      <li className={classes["todo-item"]}>
        <Input type={"text"} id={"text"} ref={editInputRef} />
        <div>
          <Button
            text={"제출"}
            className={"positive"}
            onClick={updateTodoHandler}
          />
          <Button
            text={"취소"}
            className={"negative"}
            onClick={toggleEditHandler}
          />
        </div>
      </li>
    );
  }

  return (
    <li className={classes["todo-item"]}>
      <div className={classes["checkbox-container"]}>
        <input
          type="checkbox"
          id="check"
          checked={isCompleted}
          onChange={updateTodo.bind(null, id, todo, !isCompleted)}
        />
        <label htmlFor="check" className={isCompleted ? classes.completed : ""}>
          {todo}
        </label>
      </div>
      <div className={classes["btn-container"]}>
        <Button
          text={"수정"}
          className={"positive"}
          onClick={toggleEditHandler}
        />
        <Button
          text={"삭제"}
          className={"negative"}
          onClick={removeTodo.bind(null, id)}
        />
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
