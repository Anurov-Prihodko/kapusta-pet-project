import { useSelector } from 'react-redux';
import s from './Main.module.scss';
import Icons from '../../Icons';
import LoginForm from '../LoginForm/LoginForm';

export default function Main() {
  const user = useSelector(state => state.auth.user);

  return (
    <div className={s.main__container}>
      <div className={s.hero}>
        <Icons name="union" className={s.hero__logo} />
        <h1 className={s.hero__title}>Smart Finance</h1>
        <div className={s.kochanback}>
          <ul className={s.kochan__hero}>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
            <li>
              <Icons name="cole-hero" height="89" className={s.hero__cole} />
            </li>
          </ul>
        </div>
      </div>
      <div className={s.main}></div>
      {!user && <LoginForm />}
    </div>
  );
}
