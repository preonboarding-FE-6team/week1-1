import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import TodosContextProvider from "./store/todo-context";
import "./index.css";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodosContextProvider>
        <GlobalStyle />
        <div className="wrapper">
        <App />
        </div>
      </TodosContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
