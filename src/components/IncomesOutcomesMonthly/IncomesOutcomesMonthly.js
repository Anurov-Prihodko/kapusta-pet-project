import s from './IncomesOutcomesMonthly.module.css';

const IncomesOutcomesMonthly = ({ incomes, outcomes }) => {
  return (
    <div className={s.balance_container}>
      <div className={s.outcomes_div}>
        <p className={s.title}>Расходы:</p>
        <p className={s.outcomes}>{`- ${outcomes} грн.`}</p>
      </div>
      <div className={s.incomes_div}>
        <p className={s.title}>Доходы:</p>
        <p className={s.incomes}>{`+ ${incomes} грн.`}</p>
      </div>
    </div>
  );
};

export { IncomesOutcomesMonthly };
