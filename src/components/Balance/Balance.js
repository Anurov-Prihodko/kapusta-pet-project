import './Balance.scss';

export default function Balance() {
    return(
        <div className={'balance-wrapper'}>
            <p className={'balance-title'}>Баланс:</p>
            <div className={'balance-wrap'}>
                <p className={'balance-value'}>55 000.00 UAH</p>
                <button className={'balance-btn'}>ПОДТВЕРДИТЬ</button>
                </div>
        </div>
        
    )
}
