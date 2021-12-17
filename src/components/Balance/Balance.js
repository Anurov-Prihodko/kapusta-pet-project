import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import ModalBody from '../ModalBody';
import Modal from '../Modal';

import './Balance.scss';
import BalanceButton from './BalanceButton'

export default function Balance() {
    
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
                <form>
                    <label>
                        <input className={'balance-value'} type="number" autoComplete='off' name="name" placeholder={'00.00 UAH'}/>
                    </label>
                </form>
                <div>
                {mobile && (
                    <BalanceButton onClick={togleModal} />
                )}
                {desctopOrLaptopSize && (
                    <BalanceButton onClick={togleModal} />
                )}
                </div>
                {isModalOpen && (
                    <Modal onClose={togleModal}>
          <ModalBody onClose={togleModal}>
            Вы уверены?
          </ModalBody>
        </Modal>
                )}
            </div>
        </div>
        
    );
}
