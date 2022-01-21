import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { lastDayOfDecade } from 'date-fns';
import './Balance.scss';

import BalanceConfirmModalBody from '../BalanceConfirmModal/BalanceConfirmModalBody';
import BalanceConfirmModal from '../BalanceConfirmModal';
import BalanceButton from '../BalanceButton';
import {
  getBalance,
  getBalanceHasBeenSet,
} from '../../redux/auth/authSelectors';
// import { formatBalanceSumm } from '../../utils/formatBalanceSumm';

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

  // Для красивой отрисовки нужно преобразовывать в число

  // Вариант №1
  // let formatBalance = new Intl.NumberFormat('ru').format(
  //   Number(balanceNomalized),
  // );

  // Вариант №2
  // let x = formatBalanceSumm(Number(balanceNomalized), 2, ',', ' ');

  // console.log(x, formatBalance);

  // ======

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
              value={!balance ? 0 : Number(balanceNomalized)}
              className={'balance-value'}
              type="number"
              autoComplete="off"
              name="name"
              onChange={handleChange}
              style={
                balance === 0
                  ? { borderRadius: '22px 0 0 22px' }
                  : { borderRadius: '16px' }
              }
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
              {'Вы желаете установить начальный баланс в размере '}
              {Number(balanceNomalized)} UAH ?
            </BalanceConfirmModalBody>
          </BalanceConfirmModal>
        )}
      </div>
    </div>
  );
}
