import './BalanceButton.scss';

export default function BalanceButton({
  children = 'ПОДТВЕРДИТЬ',
  onClick = () => null,
}) {
  return (
    <button type="button" className={'balance-btn'} onClick={onClick}>
      {children}
    </button>
  );
}
