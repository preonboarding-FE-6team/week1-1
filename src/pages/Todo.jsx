import React from 'react';
import Todos from '../components/todo/Todos';
import { Navigate } from 'react-router-dom';

const Todo = () => {
  if (!window.localStorage.getItem('authToken')) {
    return <Navigate to="/"></Navigate>;
  }

  return <Todos />;
};

export default Todo;
