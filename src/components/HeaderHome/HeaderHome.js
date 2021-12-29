import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import s from './HeaderHome.module.scss';
import Icons from '../../Icons';
import LogoutBtn from '../LogoutBtn';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
import { nameFromEmail } from '../../utils/nameFromEmail';

export default function HeaderHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const togleModal = () => setIsModalOpen(state => !state);

  //const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.user.email);
  const userName = userEmail ? nameFromEmail(userEmail) : null;
  // console.log('email=', userEmail, ', name=', userName);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  const desctopOrLaptopSize = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const mobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={s.header}>
      <Icons name="logo" className={s.header__logo} />
      {userName && userEmail ? (
        <div className={s.login__container}>
          <div className={s.header__logout}>
            <Icons name="U" width="8 " height="14" />
          </div>
          {mobile && (
            <LogoutBtn onClick={togleModal}>
              <Icons name="logout-1" width="16" height="16" />
            </LogoutBtn>
          )}
          {desctopOrLaptopSize && (
            <div className={s.header__user}>
              <span className={s.logout__user_name}>{userName}</span>
              <LogoutBtn onClick={togleModal}>Выйти</LogoutBtn>
            </div>
          )}
        </div>
      ) : null}

      {isModalOpen && (
        <Modal onClose={togleModal}>
          <ModalBody onClose={togleModal}>
            Вы действительно хотите выйти?
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}
