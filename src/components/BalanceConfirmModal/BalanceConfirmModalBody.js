import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Icons from '../../Icons';
import s from './BalanceConfirmModalBody.module.scss';
import ButtonBasic from '../ButtonBasic';


import { setBalance } from '../../redux/auth/authOperations';


export default function ModalBody({ children, onClose, balance }) {
  const [isEnterActive, setIsEnterActive] = useState(true);
  const [isRegisterActive, setIsRegisterActive] = useState(false);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const button = document.getElementById('button-close');
    const btnNo = document.getElementById('btnNo');
    const btnYes = document.getElementById('buttons');

    btnNo.addEventListener('click', onClose);
    button.addEventListener('click', onClose);
    return () => {
      btnNo.removeEventListener('click', onClose);
      button.removeEventListener('click', onClose);
      btnYes.removeEventListener('click', onClose);
    };
  }, [onClose]);

  const toggleEnterActiveBtn = () => {
    const btnYes = document.getElementById('buttons');
    setIsEnterActive(true);
    setIsRegisterActive(false);

      dispatch(setBalance({balance}));
    btnYes.addEventListener('click', onClose);
    onClose();
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
        <div className={s.button__yes} id="buttons">
          <ButtonBasic
            type="submit"
            shadow
            id="btnYes"
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