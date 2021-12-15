import s from './MainHome.module.scss';

export default function MainHome({ children }) {
  return (
    <div className={s.main__container}>
      <div className={s.hero}></div>
      <div className={s.main}></div>
      {children}
    </div>
  );
}
