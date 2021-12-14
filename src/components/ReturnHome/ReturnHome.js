import Icons from '../../Icons';
import s from './ReturnHome.module.css';

const ReturnHome = ({ whereto }) => {
  return (
    <div className={s.container}>
      <a href={whereto} className={s.href}>
        <Icons
          name="delete"
          color="#FF751D"
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
