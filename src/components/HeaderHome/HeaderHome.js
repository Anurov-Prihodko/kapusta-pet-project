import s from './HeaderHome.module.scss';
import Icons from '../../Icons';
import Media from 'react-media';
// import { GLOBAL_MEDIA_QUERIES } from '../../constants/constants';

export default function HeaderHome() {
  return (
    <div className={s.header}>
      <Icons name="logo" className={s.header__logo} />
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <div className={s.login__container}>
            <div className={s.header__logout}>
              <Icons name="U" width="8 " height="14" />
            </div>
            {matches.small && (
              <>
                <button className={s.logout__btn}>
                  <Icons name="logout-1" width="16" height="16" />
                </button>
              </>
            )}
            {matches.medium && (
              <div className={s.header__user}>
                <span className={s.logout__user_name}>User Name</span>
                <button className={s.logout__btn}>Выйти</button>
              </div>
            )}
          </div>
        )}
      </Media>
    </div>
  );
}
