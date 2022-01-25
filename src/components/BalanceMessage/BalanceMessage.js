import './BalanceMessage.scss';

export default function BalanceMessage() {
  return (
    <div className={'comment dialog'}>
      <div className={'text-wrap'}>
        <p className={'message-text'}>
          Привет! Для начала работы внеси текущий баланс своего счета!
        </p>
        <p
          className={'message-text'}
        >{`Это действие необратимо - ты можешь внести балланс только 1 раз. Будь внимателен!`}</p>
      </div>
    </div>
  );
}
