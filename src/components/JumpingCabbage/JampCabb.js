import s from './JampCabb.module.scss';
import kapustina from '../../image/kapustina.png';
import ellipse from '../../image/ellipse.png';

export default function JampCabb() {
  return (
    <>
      <div className={s.animbox}>
        <div className={s.kap1}>
          <img className={s.icon} src={kapustina} alt="" />
        </div>
        <div className={s.el1}>
          <img className={s.iconElp} src={ellipse} alt="" />
        </div>
      </div>
      <div className={s.animbox}>
        <div className={s.kap}>
          <img className={s.icon} src={kapustina} alt="" />
        </div>
        <div className={s.el}>
          <img className={s.iconElp} src={ellipse} alt="" />
        </div>
      </div>
    </>
  );
}
