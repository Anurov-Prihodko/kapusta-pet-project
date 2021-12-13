import Icons from '../../Icons';
import s from './ReturnHome.module.css';

const ReturnHome = () => {
  return (
    <div className={s.container}>
      <a href="#" className={s.href}>
        <Icons
          name="delete"
          color="#FF8000"
          width="32"
          height="32"
          className={s.icon}
        />
        <span className={s.text}>Вернуться на главную</span>
      </a>
    </div>
  );
};

export { ReturnHome };
