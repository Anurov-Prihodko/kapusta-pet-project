import './BalanceButton.scss';

export default function BalanceButton({
  children = 'ПОДТВЕРДИТЬ',
  onBtnClick,
}) {
  return (
    <button type="button" className={'balance-btn'} onClick={onBtnClick}>
      {children}
    </button>
  );
}