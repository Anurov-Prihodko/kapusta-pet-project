import s from './Header.module.scss';
import Icons from '../../Icons';

export default function Header() {
  return (
    <div className={s.header}>
      <Icons name="logo" className={s.header__logo} />
    </div>
  );
}
