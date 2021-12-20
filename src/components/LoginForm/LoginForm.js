import React from 'react';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
// ====== Google login ======
// import GoogleLogin from 'react-google-login';
// ====== Google login ======
import { useDispatch } from 'react-redux';
// import { login } from '../../redux/reducers/authReducer';
import { registerUser, loginUser } from '../../redux/auth/authOperations';

import styles from './LoginForm.module.scss';
import Icons from '../../Icons';
import ButtonBasic from '../ButtonBasic/ButtonBasic';

export default function LoginForm() {
  const [isEnterActive, setIsEnterActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); //validation from 'react-hook-form'

  const toggleEnterActiveBtn = () => {
    setIsEnterActive(true);
    setIsRegisterActive(false);
  };

  const toggleRegisterActiveBtn = () => {
    setIsEnterActive(false);
    setIsRegisterActive(true);
  };

  ///////////////////////////////////////
  // const onLoginFormSubmit = async data => {
  //   setError(null);

  //   const endpoint = isEnterActive ? '/api/users/signin' : '/api/users/signup';

  //   const response = await fetch(
  //     `https://kapusta-team-project-back-end.herokuapp.com${endpoint}`,
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     },
  //   );
  //   const json = await response.json();
  //   if (!response.ok) {
  //     setError(json.message);
  //     return;
  //   }

  //   if (isEnterActive) {
  //     dispatch(login(json.data));
  //   }
  // };
  //////////////////////////////////////

  const onLoginFormSubmit = async data => {
    if (isEnterActive) await dispatch(loginUser(data));

    if (isRegisterActive) await dispatch(registerUser(data));

    reset();
  };

  // ====== Google login ======

  // const handleLogin = async () => {
  //   const res = await fetch(
  //     'https://kapusta-team-project-back-end.herokuapp.com/api/users/google',
  //   );

  //   const data = await res.json();
  //   console.log(data);
  //   // store returned user somehow
  // };

  // ====== Google login ======

  const requiredErrorEmail = errors?.password?.type === 'required';
  const requiredErrorPassword = errors?.password?.type === 'required';

  const passwordErrorMessage =
    'пароль должен быть от 6 до 8 символов, содержать буквы латинского алфавита и хотя бы одну цифру';

  return (
    <section className={styles.login}>
      <h2 className="visuallyHidden">Регистрация и вход</h2>
      <p className={styles.loginDescription}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      {/* // ====== Google login ======
      <div className={styles.loginGoogle}>
        <GoogleLogin
          clientId="1074449574862-b74u2p9c4crciqqgbvvp05btqdlc724a.apps.googleusercontent.com"
          buttonText="Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
      </div>
      // ====== Google login ====== */}
      <a
        href="https://kapusta-team-project-back-end.herokuapp.com/api/users/google"
        className={styles.loginGoogle}
      >
        <Icons
          name="google"
          width="18"
          height="18"
          className={styles.iconGoogle}
        />
        <span>Google</span>
      </a>
      <p className={`${styles.loginDescription} ${styles.textCentered}`}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form
        className={styles.loginForm}
        onSubmit={handleSubmit(onLoginFormSubmit)}
      >
        <label className={styles.inputLabel}>
          <span className={styles.inputLabelText}>
            {requiredErrorEmail && (
              <span className={styles.requiredLabel}>*</span>
            )}
            Электронная почта:
          </span>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            className={styles.input}
            {...register('email', {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+$/,
            })}
          />
          <span className={styles.inputErrorMessage}>
            {error}
            {requiredErrorEmail && 'это обязательное поле'}
            {errors?.email?.type === 'pattern' &&
              'это не похоже на адрес эл. почты - проверьте правильность ввода'}
          </span>
        </label>

        <label className={styles.inputLabel}>
          <span className={styles.inputLabelText}>
            {requiredErrorPassword && (
              <span className={styles.requiredLabel}>*</span>
            )}
            Пароль:
          </span>
          <input
            type="text"
            name="password"
            placeholder="Пароль"
            className={styles.input}
            {...register('password', {
              required: true,
              minLength: 6,
              maxLength: 8,
              pattern: /^[a-zA-Z0-9]+$/,
            })}
          />
          <span className={styles.inputErrorMessage}>
            {requiredErrorPassword && 'это обязательное поле'}
            {errors?.password?.type === 'minLength' && passwordErrorMessage}
            {errors?.password?.type === 'maxLength' && passwordErrorMessage}
            {errors?.password?.type === 'pattern' && passwordErrorMessage}
          </span>
        </label>

        <div className={styles.loginFormBtnGroup}>
          <ButtonBasic
            type="submit"
            shadow
            active={isEnterActive}
            name="enter"
            onClick={toggleEnterActiveBtn}
          >
            Войти
          </ButtonBasic>
          <ButtonBasic
            type="submit"
            shadow
            active={isRegisterActive}
            name="register"
            onClick={toggleRegisterActiveBtn}
          >
            Регистрация
          </ButtonBasic>
        </div>
      </form>
    </section>
  );
}
