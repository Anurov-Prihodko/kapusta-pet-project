import s from './Main.module.scss';
import Icons from '../../Icons';
import LoginForm from '../LoginForm/LoginForm';
import Cole from '../Cole';
import JampCabb from '../JumpingCabbage';

export default function Main() {
  return (
    <div className={s.main__container}>
      <div className={s.flayanimation}>
        <Cole />
      </div>
      <div className={s.hero}>
        <Icons name="union" className={s.hero__logo} />
        <h1 className={s.hero__title}>Smart Finance</h1>
      </div>
      <div className={s.kapustaflay}>
        <div className={s.anim}>
          <JampCabb />
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
