import { useCallback, useState } from 'react';

const useInput = (validateValue, initValue = '') => {
  const [inputState, setInputState] = useState(initValue);

  const valueIsValid = validateValue(inputState);

  const changeHandler = useCallback(
    e => {
      setInputState(e.target.value);
    },
    [inputState]
  );

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
