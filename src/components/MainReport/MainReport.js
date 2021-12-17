import s from './MainReport.module.scss';

export default function MainReport({ children }) {
  return (
    <div className={s.main__container}>
      <div className={s.hero}></div>
      <div className={s.main}></div>
      {children}
    </div>
  );
}
