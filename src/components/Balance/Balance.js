import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import BalanceConfirmModalBody from '../BalanceConfirmModal/BalanceConfirmModalBody';
import BalanceConfirmModal from '../BalanceConfirmModal';

import './Balance.scss';
import BalanceButton from '../BalanceButton';
import { useSelector } from 'react-redux';
import {
  getBalance,
  getBalanceHasBeenSet,
} from '../../redux/auth/authSelectors';

export default function Balance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const togleModal = () => setIsModalOpen(state => !state);

  const balance = useSelector(getBalance);
  const balanceHasBeenSet = useSelector(getBalanceHasBeenSet);
  const [newBalance, setNewBalance] = useState(balance);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);

  useEffect(() => {
    setNewBalance(balance);
  }, [balance]);

  const handleChange = e => {
    setNewBalance(e.currentTarget.value);
  };

  const balanceNomalized = Number(newBalance).toFixed(2);

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
        <form>
          <label>
            <input
              disabled={balanceHasBeenSet}
              placeholder={'00.00 UAH'}
              value={newBalance}
              className={'balance-value'}
              type="number"
              autoComplete="off"
              name="name"
              onChange={handleChange}
            />
          </label>
        </form>
        <div>
          {mobile && !balanceHasBeenSet && (
            <BalanceButton onClick={togleModal} />
          )}
          {desctopOrLaptopSize && !balanceHasBeenSet && (
            <BalanceButton onClick={togleModal} />
          )}
        </div>
        {!balanceHasBeenSet && (
          <div className="bubble">
            <div className="arrow">
              <p>
                Привет! Для начала работы внеси текущий баланс своего счета!
              </p>
              <p>Ты не можешь тратить деньги пока их у тебя нет :)</p>
            </div>
          </div>
        )}
        {isModalOpen && (
          <BalanceConfirmModal onClose={togleModal}>
            <BalanceConfirmModalBody
              onClose={togleModal}
              balance={Number(balanceNomalized)}
            >
              Вы желаете установить начальный баланс в размере
              {Number(balanceNomalized)} UAH ?
            </BalanceConfirmModalBody>
          </BalanceConfirmModal>
        )}
      </div>
    </div>
  );
}
