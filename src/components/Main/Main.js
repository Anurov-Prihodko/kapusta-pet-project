import s from './Main.module.css';
import Icons from '../Icons';

export default function Main() {
  return (
    <div className={s.main__container}>
      <div className={s.hero}>
        <Icons name="union" width="183" height="46" className={s.hero__logo} />
        <h1 className={s.hero__title}>Smart Finance</h1>
        <Icons
          name="cole-hero"
          width="83"
          height="89"
          className={s.hero__cole}
        />
      </div>
      <div className={s.main}>
        <Icons
          name="cole-main"
          width="83"
          height="89"
          className={s.main__cole}
        />
      </div>
    </div>
  );
}
