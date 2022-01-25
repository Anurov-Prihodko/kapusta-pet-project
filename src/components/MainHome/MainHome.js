import s from './MainHome.module.scss';
import JampCabb from '../JumpingCabbage';
import Cole from '../Cole';

export default function MainHome({ children }) {
  return (
    <div className={s.main__container}>
      <div className={s.hero}></div>
      <div className={s.kapustaflay}>
        <div className={s.anim}>
          <JampCabb />
        </div>
      </div>
      <div className={s.flayanimation}>
        <Cole />
      </div>
      {children}
    </div>
  );
}
