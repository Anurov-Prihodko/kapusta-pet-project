import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import MainReport from '../MainReport';
import Wrapper from '../Wrapper';
import Balance from '../Balance';
import { ReturnHome } from '../ReturnHome';
import { MonthSelector } from '../MonthSelector';
import { IncomesOutcomesMonthly } from '../IncomesOutcomesMonthly';
import ReportIncomeExpenses from '../ReportIncomeExpenses';
import s from './Report.module.scss';

import {
  getIncomesTotalSum,
  getExpensesTotalSum,
} from '../../redux/reports/reportsSelectors';

export default function Report() {
  const incomesTotalSum = useSelector(getIncomesTotalSum);
  const expensesTotalSum = useSelector(getExpensesTotalSum);

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
              <IncomesOutcomesMonthly
                incomes={incomesTotalSum}
                outcomes={expensesTotalSum}
              />
            </div>
            <ReportIncomeExpenses />
          </div>
        </Wrapper>
      </MainReport>
    </div>
  );
}
