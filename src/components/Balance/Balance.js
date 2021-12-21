import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getUserBalance, getBalanceHasBeenSet } from '../../redux/auth/authSelectors';
import { setBalance, getBalance } from '../../redux/auth/authOperations';

import ModalBody from '../ModalBody';
import Modal from '../Modal';

import './Balance.scss';
import BalanceButton from '../BalanceButton';


export default function Balance() {

  const dispatch = useDispatch();
  const balance = useSelector(getUserBalance);
  const balanceHasBeenSet = useSelector(getBalanceHasBeenSet)
  const [newBalance, setNewBalance] = useState(balance)

  useEffect(() => {
  setNewBalance(balance)
}, [balance])

  const updateBalance = e => {
    e.preventDefault();
    dispatch(setBalance({ balance: Number(newBalance) }));
  };
  
  const handleChange = e => {
  setNewBalance(e.value)
}

  const [isModalOpen, setIsModalOpen] = useState(false);
  const togleModal = () => setIsModalOpen(state => !state);

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
    <div className={'balance-wrapper'}>
      <p className={'balance-title'}>Баланс:</p>
      <div className={'balance-wrap'}>
        <form onSubmit={updateBalance}>
          <label >
            <input
              value={newBalance}
              className={'balance-value'}
              type="number"
              autoComplete="off"
              name="balance"
              placeholder={'00.00 UAH'}
              onChange={handleChange}
            />

          {mobile && <BalanceButton />}
          {desctopOrLaptopSize && <BalanceButton />}
          </label>
        </form>
        {/* <div className="bubble">
          <div className="arrow">
            <p>Привет! Для начала работы внеси текущий баланс своего счета!</p>
            <p>Ты не можешь тратить деньги пока их у тебя нет :)</p>
          </div>
        </div> */}
        {isModalOpen && (
          <Modal onClose={togleModal}>
            <ModalBody onClose={togleModal}>Вы уверены?</ModalBody>
          </Modal>
        )}
      </div>
    </div>
  );
}
