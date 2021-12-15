import s from './LogoutBtn.module.scss';

export default function LogoutBtn({
  children = 'Выйти',
  onClick = () => null,
  ...otherProps
}) {
  return (
    <button
      type="button"
      className={s.logout__btn}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}
