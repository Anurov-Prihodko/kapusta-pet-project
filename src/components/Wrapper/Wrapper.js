import s from './Wrapper.module.scss';

export default function Wrapper({ children }) {
  return <div className={s.wrapper_container}>{children}</div>;
}
