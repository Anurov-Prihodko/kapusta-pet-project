import PropTypes from 'prop-types';

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
      shadow={shadow ? 1 : 0}
      bordered={bordered ? 1 : 0}
      active={active ? 1 : 0}
      {...props}
    >
      {children}
    </button>
  );
}

ButtonBasic.defaultProps = {
  children: null,
  type: 'button',
  shadow: false,
  bordered: false,
  active: false,
};

ButtonBasic.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  shadow: PropTypes.bool,
  bordered: PropTypes.bool,
  active: PropTypes.bool,
};
