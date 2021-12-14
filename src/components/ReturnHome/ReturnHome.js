import Icons from '../../Icons';
import s from './ReturnHome.module.css';

const ReturnHome = ({ whereto }) => {
  return (
    <div className={s.container}>
      <a href={whereto} className={s.href}>
        <Icons
          name="arrow-left"
          color="#FF751D"
          width="18"
          height="12"
          className={s.icon}
        />
        <span className={s.text}>Вернуться на главную</span>
      </a>
    </div>
  );
};

export { ReturnHome };
