import { useMediaQuery } from 'react-responsive';

import HeaderHome from '../components/HeaderHome';
import { ReturnHome } from '../components/ReturnHome';
import { MonthSelector } from '../components/MonthSelector';
import { IncomesOutcomesMonthly } from '../components/IncomesOutcomesMonthly';
import ReportIncomeExpenses from '../components/ReportIncomeExpenses';
import s from './ReportView.module.css';

export default function ReportView() {
  const mobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <>
      <HeaderHome />
      <div className={s.balance_segment}>
        <div className={s.control_line}>
          <div className={s.return_home_div}>
            <ReturnHome whereto="home" text="Вернуться на главную" />
          </div>
          {mobile && (
            <>
              <div className={s.month_selector_div}>
                <MonthSelector />
              </div>
              <p className={s.placeholder}>placeholder</p>
            </>
          )}
          {!mobile && (
            <>
              <p className={s.placeholder}>placeholder</p>
              <div className={s.month_selector_div}>
                <MonthSelector />
              </div>
            </>
          )}
        </div>
        <div className={s.balance_line}>
          <IncomesOutcomesMonthly incomes={234075} outcomes={123000} />
        </div>
      </div>
      <ReportIncomeExpenses />
    </>
  );
}
