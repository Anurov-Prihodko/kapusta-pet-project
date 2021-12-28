import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  getExpensesTotalSum,
  getIncomesTotalSum,
} from '../../redux/reports/reportsSelectors';
import Balance from '../Balance';
import { IncomesOutcomesMonthly } from '../IncomesOutcomesMonthly';
import MainReport from '../MainReport';
import { MonthSelector } from '../MonthSelector';
import ReportIncomeExpenses from '../ReportIncomeExpenses';
import { ReturnHome } from '../ReturnHome';
import Wrapper from '../Wrapper';
import s from './Report.module.scss';

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
                <ReturnHome>Вернуться на главную</ReturnHome>
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
