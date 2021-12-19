import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Icons from '../../Icons';
import s from './ModalBody.module.scss';
import ButtonBasic from '../ButtonBasic';

import { getUserEmail } from '../../redux/auth/authSelectors';
import { logOutUser } from '../../redux/auth/authOperations';
import { useSelector } from 'react-redux';

export default function ModalBody({ children, onClose }) {
  const [isEnterActive, setIsEnterActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  useEffect(() => {
    const button = document.getElementById('button-close');
    const btnNo = document.getElementById('btnNo');

    btnNo.addEventListener('click', onClose);
    button.addEventListener('click', onClose);
    return () => {
      btnNo.removeEventListener('click', onClose);
      button.removeEventListener('click', onClose);
    };
  }, [onClose]);

  const toggleEnterActiveBtn = () => {
    setIsEnterActive(true);
    setIsRegisterActive(false);

    dispatch(logOutUser(userEmail));
  };

  const toggleRegisterActiveBtn = () => {
    setIsEnterActive(false);
    setIsRegisterActive(true);
  };

  return (
    <div className={s.body}>
      <div className={s.wraper}>
        <button type="button" id="button-close" className={s.close__btn}>
          <Icons name="close" className={s.close__btn_svg} />
        </button>
      </div>

      <p className={s.text}>{children}</p>
      <div className={s.buttons}>
        <div className={s.button__yes}>
          <ButtonBasic
            type="submit"
            shadow
            active={isEnterActive}
            name="yes"
            onClick={toggleEnterActiveBtn}
          >
            Да
          </ButtonBasic>
        </div>

        <div>
          <ButtonBasic
            type="button"
            shadow
            id="btnNo"
            active={isRegisterActive}
            name="no"
            onClick={toggleRegisterActiveBtn}
          >
            Нет
          </ButtonBasic>
        </div>
      </div>
    </div>
  );
}
