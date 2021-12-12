import styles from './ButtonBasic.module.scss';

export default function ButtonBasic({
  children,
  type,
  shadow,
  bordered,
  active,
  ...props
}) {
  const classNames = [styles.button];

  if (shadow) classNames.push(styles.shadow);
  if (bordered) classNames.push(styles.bordered);
  if (active) classNames.push(styles.active);

  return (
    <button
      className={classNames.join(' ')}
      type={type}
      shadow={shadow}
      bordered={bordered}
      active={active}
      {...props}
    >
      {children}
    </button>
  );
}
