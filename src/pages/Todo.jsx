import React from "react";
import { Navigate } from "react-router-dom";
import Todos from "../components/todo/Todos";

const Todo = () => {
  if (!window.localStorage.getItem("authToken")) {
    return <Navigate to="/"></Navigate>;
  } else {
  }

  return <Todos />;
};

export default Todo;
