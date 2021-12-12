import { useForm, Controller } from 'react-hook-form';

import styles from './LoginForm.module.scss';
import Icons from '../../Icons';
import ButtonBasic from '../ButtonBasic/ButtonBasic';

export default function LoginForm() {
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

      <form className={styles.loginForm}>
        <label className={styles.inputLabel}>
          <span className={styles.inputLabelText}>
            <span className={styles.requiredLabel}>*</span>Электронная почта:
          </span>
          <input
            type="email"
            placeholder="your@email.com"
            required
            className={styles.input}
          />
        </label>
        <span className={styles.inputErrorMessage}></span>
        <label className={styles.inputLabel}>
          <span className={styles.inputLabelText}>
            <span className={styles.requiredLabel}>*</span> Пароль:
          </span>
          <input
            type="text"
            placeholder="Пароль"
            required
            className={styles.input}
          />
        </label>
        <span className={styles.inputErrorMessage}></span>
        <div className={styles.loginFormBtnGroup}>
          <ButtonBasic type="submit" shadow active>
            Войти
          </ButtonBasic>
          <ButtonBasic type="submit" shadow>
            Регистрация
          </ButtonBasic>
        </div>
      </form>
    </section>
  );
}
