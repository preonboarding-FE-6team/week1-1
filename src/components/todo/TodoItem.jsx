import React, { useState, useRef, useEffect, useContext } from 'react';
import { TodosDisPatchContext } from '../../store/todo-context';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './TodoItem.module.css';

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
    setEditMode(prevMode => !prevMode);
  };

  const clickCompleteTodo = () => {
    updateTodo(null, id, todo, !isCompleted)
  }

  if (editMode) {
    return (
      <li className={classes['todo-item']}>
        <Input type={'text'} id={'text'} ref={editInputRef} />
        <div>
          <img src={`/icon/i_save.png`} className={classes['i-img']} onClick={updateTodoHandler} />
          <img src={`/icon/i_cancel.png`} className={classes['i-img']} onClick={toggleEditHandler} />
        </div>
      </li>
    );
  }

  return (
    <li className={classes['todo-item']}>
      <div className={classes['checkbox-container']}>
        <img className={classes['i-img']} onClick={updateTodo.bind(null, id, todo, !isCompleted)} src={isCompleted ? `/icon/check-o.png` : `/icon/check.svg`} />
        {/* <input
          type="checkbox"
          id="check"
          checked={isCompleted}
          onChange={updateTodo.bind(null, id, todo, !isCompleted)}
        /> */}
        <label htmlFor="check" className={isCompleted ? classes.completed : ''}>
          {todo}
        </label>
      </div>
      <div className={classes['btn-container']}>
        <img src={`/icon/i_fix.png`} className={classes['i-img']} onClick={toggleEditHandler} />
        <img src={`/icon/i_delete.png`} className={classes['i-img']} onClick={removeTodo.bind(null, id)} />
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
