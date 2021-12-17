import s from './BalanceReport.module.css';
import { formatNumber } from '../../utils/formatNumber';
//грн.

const BalanceReport = ({ incomes, outcomes }) => {
  return (
    <div className={s.balance_container}>
      <div className={s.outcomes_div}>
        <p className={s.title}>Расходы:</p>
        <p className={`${s.summ} ${s.red}`}>{`- ${formatNumber(
          outcomes,
        )} грн.`}</p>
      </div>
      <div className={s.incomes_div}>
        <p className={s.title}>Доходы:</p>
        <p className={`${s.summ} ${s.green}`}>{`+ ${formatNumber(
          incomes,
        )} грн.`}</p>
      </div>
    </div>
  );
};

export { BalanceReport };
