import { Link } from 'react-router-dom';
import Icons from '../../Icons';
import s from './ReturnHome.module.css';

const ReturnHome = ({ children }) => {
  return (
    <div className={s.container}>
      <Link to="/" className={s.href}>
        <Icons
          name="arrow-left"
          color="#FF751D"
          width="18"
          height="12"
          className={s.icon}
        />
        <span className={s.text}>{children}</span>
      </Link>
    </div>
  );
};

export { ReturnHome };
