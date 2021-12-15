import s from './BalanceReport.module.css';
import { formatNumber } from '../../utils/formatNumber';
//грн.

const BalanceReport = ({ incomes, outcomes }) => {
  return (
    <div className={s.balance_container}>
      <p className={s.title}>Расходы:</p>
      <p className={s.outcomes}>{`- ${formatNumber(outcomes)} грн.`}</p>
      <p className={s.title}>Доходы:</p>
      <p className={s.incomes}>{`${formatNumber(incomes)} грн.`}</p>
    </div>
  );
};

export { BalanceReport };
