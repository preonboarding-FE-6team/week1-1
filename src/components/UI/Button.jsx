import React from "react";
import classes from "./Button.module.css";

const Button = ({ className, type, disabled, onClick, text }) => {
  const btnClass = ["submit", "toggle", "positive", "negative"].includes(
    className
  )
    ? className
    : "default";

  return (
    <button
      className={`${classes.button} ${classes[btnClass]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
