import './BalanceMessage.scss';

export default function BalanceMessage() {
    return (
        <div className={'comment dialog'}>
            <div className={'text-wrap'}>
                    <p className={'message-text'}>Привет! Для начала работы внеси текущий баланс своего счета!</p>
                    <p className={'message-text'}>Ты не можешь тратить деньги пока
            их у тебя нет :)</p>
                </div>
        </div>
    )
}