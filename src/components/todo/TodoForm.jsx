import React, { useRef, useContext, useEffect } from 'react';
import { TodosDispatchContext } from '../../store/todo-context';
import useAxios from '../../hooks/useAxios';
import { todoAPI } from '../../utils/api';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './TodoForm.module.css';

const TodoForm = () => {
  const todoInputRef = useRef();
  const { getTodoState, createTodoState } = useContext(TodosDispatchContext);
  const getTodos = useAxios(todoAPI.getTodos);
  const createTodo = useAxios(todoAPI.createTodo);

  useEffect(() => {
    todoInputRef.current.focus();
    getTodos([], {
      onSuccess: data => getTodoState(data),
    });
  }, []);

  const submitTodoHandler = e => {
    e.preventDefault();

    createTodo([todoInputRef.current.value], {
      onSuccess: data => {
        todoInputRef.current.value = '';
        createTodoState(data);
      },
    });
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
