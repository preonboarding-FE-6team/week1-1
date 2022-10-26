import { useState } from "react";

const useInput = (validateValue, initValue = "") => {
  const [inputState, setInputState] = useState(initValue);

  const valueIsValid = validateValue(inputState);

  const changeHandler = (e) => {
    setInputState(e.target.value);
  };

  const reset = () => {
    setInputState(initValue);
  };

  return {
    value: inputState,
    valueIsValid,
    changeHandler,
    reset,
  };
};

export default useInput;
