import React, { useRef, useContext, useEffect } from 'react';
import { TodosDisPatchContext } from '../../store/todo-context';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './TodoForm.module.css';

const TodoForm = () => {
  const todoInputRef = useRef();
  const { addTodo } = useContext(TodosDisPatchContext);

  useEffect(() => {
    todoInputRef.current.focus();
  }, []);

  const submitTodoHandler = e => {
    e.preventDefault();

    addTodo(todoInputRef.current.value);

    todoInputRef.current.value = '';
  };

  return (
    <>
      <div className={classes.title}> ✅ 오늘의 할 일을 적어보세요!</div>
      <form className={classes.form} onSubmit={submitTodoHandler}>
        <Input
          className={'todo-input'}
          id="text"
          type={'text'}
          ref={todoInputRef}
          placeholder="해야할 일을 작성해주세요!"
        />
        <Button text={'+ 추가'} className={'add-submit'} />
      </form>
    </>
  );
};

export default TodoForm;
