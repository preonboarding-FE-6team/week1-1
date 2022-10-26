import React, { useState, useEffect, useMemo, useCallback } from "react";
import useHttp from "../hooks/useHttp";
import { useLocation } from "react-router-dom";

const TodosContext = React.createContext({
  todos: [],
});

const TodosDisPatchContext = React.createContext({
  addTodo: () => {},
  updateTodo: (id, updateData) => {},
  removeTodo: (id) => {},
});

const TodosContextProvider = ({ children }) => {
  const sendRequest = useHttp();
  const [todos, setTodos] = useState([]);
  const { pathname } = useLocation();
  const token = localStorage.getItem("authToken") || "";

  useEffect(() => {
    if (pathname === "/todo" && token) {
      sendRequest(
        "todos",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        setTodos
      );
    }
  }, [pathname, sendRequest, token]);

  const addTodos = (newTodo) => {
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const updateTodos = (newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === newTodo.id ? newTodo : todo))
    );
  };

  const removeTodos = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodoHandler = useCallback(
    (todo) => {
      if (todo.trim().length === 0) return;

      sendRequest(
        "todos",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            todo,
          }),
        },
        addTodos
      );
    },
    [sendRequest, token]
  );

  const updateTodoHandler = useCallback(
    (id, todo, isCompleted) => {
      sendRequest(
        `todos/${id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            todo,
            isCompleted,
          }),
        },
        updateTodos
      );
    },
    [sendRequest, token]
  );

  const removeTodoHandler = useCallback(
    (id) => {
      sendRequest(
        `todos/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        removeTodos.bind(null, id)
      );
    },
    [sendRequest, token]
  );

  const todoDispatch = useMemo(
    () => ({
      addTodo: addTodoHandler,
      updateTodo: updateTodoHandler,
      removeTodo: removeTodoHandler,
    }),
    [addTodoHandler, updateTodoHandler, removeTodoHandler]
  );

  return (
    <TodosContext.Provider value={todos}>
      <TodosDisPatchContext.Provider value={todoDispatch}>
        {children}
      </TodosDisPatchContext.Provider>
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
export { TodosContext, TodosDisPatchContext };
