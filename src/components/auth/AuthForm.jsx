import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import Input from '../UI/Input';
import classes from './AuthForm.module.css';
import useInput from '../../hooks/useInput';
import useHttp from '../../hooks/useHttp';

const AuthForm = () => {
  const navigate = useNavigate();

  const {
    value: emailValue,
    valueIsValid: emailIsValid,
    changeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput(value => value.includes('@'));
  const {
    value: passwordValue,
    valueIsValid: passwordIsValid,
    changeHandler: passwordChangeHandler,
    reset: passwordReset,
  } = useInput(value => value.length >= 8);

  const sendRequest = useHttp();
  const [loginMode, setLoginMode] = useState(true);
  const emailInputRef = useRef();

  useEffect(() => {
    emailInputRef.current.focus();
  }, [loginMode]);

  const changeAuthHandler = () => {
    setLoginMode(prevMode => !prevMode);
    emailReset();
    passwordReset();
  };

  const setToken = token => {
    // eslint-disable-next-line
    window.localStorage.setItem('authToken', token['access_token']);

    navigate('/todo');
  };

  const submitHandler = e => {
    e.preventDefault();

    const url = loginMode ? 'auth/signin' : 'auth/signup';

    sendRequest(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      },
      setToken
    );
  };
  return (
    <div className={classes.auth}>
      <img src={loginMode ? '/icon/login.svg' : '/icon/sign-up.svg'} />
      <h1>{loginMode ? 'LOGIN 👋🏻' : 'SIGN UP 👋🏻'}</h1>
      <form onSubmit={submitHandler}>
        <Input
          id={'email'}
          label={'이메일'}
          name={'email'}
          type={'email'}
          value={emailValue}
          onChange={emailChangeHandler}
          ref={emailInputRef}
          placeholder="이메일"
        />
        <Input
          id={'password'}
          label={'비밀번호'}
          name={'password'}
          type={'password'}
          value={passwordValue}
          onChange={passwordChangeHandler}
          placeholder="비밀번호"
        />
        <div className={classes.actions}>
          <Button
            className={'submit'}
            disabled={!(emailIsValid && passwordIsValid)}
            text={loginMode ? '로그인' : '회원가입'}
          />
          <Button
            className={'toggle'}
            type="button"
            onClick={changeAuthHandler}
            text={loginMode ? '회원가입 하기' : '로그인 하기'}
          />
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
