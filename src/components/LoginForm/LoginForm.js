import { useForm } from 'react-hook-form';
import { useState } from 'react';

import styles from './LoginForm.module.scss';
import Icons from '../../Icons';
import ButtonBasic from '../ButtonBasic/ButtonBasic';

export default function LoginForm() {
  const [isEnterActive, setIsEnterActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const toggleEnterActiveBtn = () => {
    setIsEnterActive(true);
    setIsRegisterActive(false);
  };

  const toggleRegisterActiveBtn = () => {
    setIsEnterActive(false);
    setIsRegisterActive(true);
  };

  const onLoginFormSubmit = data => {
    console.log(data); //for test
  };

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
      <a href="#" className={styles.loginGoogle}>
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
