import React, { useState, useRef, useEffect, useContext } from 'react';
import useAxios from '../../../hooks/useAxios';
import { todoAPI } from '../../../utils/api';
import { TodosDispatchContext } from '../../../store/todo-context';
import Input from '../../common/UI/Input';
import classes from './TodoItem.module.css';

const TodoItem = ({ id, todo, isCompleted: prevIsCompleted }) => {
  const [editMode, setEditMode] = useState(false);
  const [isCompleted, setIsCompleted] = useState(prevIsCompleted);
  const { updateTodoState, deleteTodoState } = useContext(TodosDispatchContext);
  const updateTodo = useAxios(todoAPI.updateTodo);
  const deleteTodo = useAxios(todoAPI.deleteTodo);
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

    updateTodo([id, editInputRef.current.value, isCompleted], {
      onSuccess: data => {
        setEditMode(false);
        updateTodoState(data);
      },
    });
  };

  const deleteTodoHandler = () => {
    deleteTodo([id], {
      onSuccess: () => {
        deleteTodoState(id);
      },
    });
  };

  const toggleCopmleteHandler = () => {
    updateTodo([id, todo, !isCompleted], {
      onSuccess: data => {
        updateTodoState(data);
        setIsCompleted(prevState => !prevState);
      },
    });
  };

  const toggleEditHandler = () => {
    setEditMode(prevMode => !prevMode);
  };

  if (editMode) {
    return (
      <li className={classes['todo-item']}>
        <Input type={'text'} id={'text'} ref={editInputRef} />
        <div>
          <img src={`/icon/i_save.png`} className={classes['i-img']} onClick={updateTodoHandler} alt="수정 버튼" />
          <img src={`/icon/i_cancel.png`} className={classes['i-img']} onClick={toggleEditHandler} alt="취소 버튼" />
        </div>
      </li>
    );
  }

  return (
    <li className={classes['todo-item']}>
      <div className={classes['checkbox-container']}>
        <img
          className={classes['i-img']}
          onClick={toggleCopmleteHandler}
          src={isCompleted ? `/icon/check-o.png` : `/icon/check.svg`}
          alt="완료 버튼"
        />
        <label htmlFor="check" className={isCompleted ? classes.completed : ''}>
          {todo}
        </label>
      </div>
      <div className={classes['btn-container']}>
        <img src={`/icon/i_fix.png`} className={classes['i-img']} onClick={toggleEditHandler} alt="편집 버튼" />
        <img src={`/icon/i_delete.png`} className={classes['i-img']} onClick={deleteTodoHandler} alt="삭제 버튼" />
      </div>
    </li>
  );
};

export default React.memo(TodoItem);
