import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import s from './BalanceConfirmModal.module.scss';

const modalRoot = document.getElementById('modal-confirm-root');

export default function BalanceConfirmModal({ children, onClose, onSubmit }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
      return;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
    return;
  };

  return createPortal(
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.content}>{children}</div>
    </div>,
    modalRoot,
  );
}
