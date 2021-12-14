import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
// import Media from 'react-media';

import s from './HeaderHome.module.scss';
import Icons from '../../Icons';
import LogoutBtn from '../LogoutBtn';
import Modal from '../Modal';
import ModalBody from '../ModalBody';
// import { GLOBAL_MEDIA_QUERIES } from '../../constants/constants';

export default function HeaderHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const togleModal = () => setIsModalOpen(state => !state);

  const desctopOrLaptopSize = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const mobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={s.header}>
      <Icons name="logo" className={s.header__logo} />

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
            <span className={s.logout__user_name}>User Name</span>
            <LogoutBtn onClick={togleModal}>Выйти</LogoutBtn>
          </div>
        )}
      </div>

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
