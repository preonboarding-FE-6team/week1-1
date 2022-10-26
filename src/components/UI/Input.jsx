import React, { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(
  ({ className, id, label, name, type, value, onChange }, ref) => {
    const inputClass = ["todo-input"].includes(className)
      ? className
      : "default";

    return (
      <div className={`${classes.input} ${classes[inputClass]}`}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          required
          value={value}
          onChange={onChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default Input;
