import { useMediaQuery } from 'react-responsive';

import MainReport from '../MainReport';
import Wrapper from '../Wrapper';
import Balance from '../Balance';
import { ReturnHome } from '../ReturnHome';
import { MonthSelector } from '../MonthSelector';
import { BalanceReport } from '../BalanceReport';
import ReportIncomeExpenses from '../ReportIncomeExpenses';
import s from './Report.module.scss';

export default function Report() {
  const mobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <div className={s.reports_view}>
      <MainReport>
        <Wrapper>
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
                  <div className={s.balance_component}>
                    <Balance />
                  </div>
                  {/* <p className={s.placeholder}>placeholder</p> */}
                </>
              )}
              {!mobile && (
                <>
                  <Balance />
                  {/* <p className={s.placeholder}>placeholder</p> */}
                  <div className={s.month_selector_div}>
                    <MonthSelector />
                  </div>
                </>
              )}
            </div>
            <div className={s.balance_line}>
              <BalanceReport incomes={234075} outcomes={123000} />
            </div>
            <ReportIncomeExpenses />
          </div>
        </Wrapper>
      </MainReport>
    </div>
  );
}
