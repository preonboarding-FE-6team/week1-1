import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import classes from './Todos.module.css';

const Todos = () => (
  <div className={classes.todos}>
    <TodoForm />
    <TodoList />
  </div>
);

export default Todos;
