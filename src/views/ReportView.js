import HeaderHome from '../components/HeaderHome';
import { ReturnHome } from '../components/ReturnHome';
import { MonthSelector } from '../components/MonthSelector';
import { BalanceReport } from '../components/BalanceReport';
import ReportIncomeExpenses from '../components/ReportIncomeExpenses';
import s from './ReportView.module.css';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

export default function ReportView() {
  return (
    <>
      <HeaderHome />
      <div className={s.balance_segment}>
        <div className={s.control_line}>
          <ReturnHome whereto="home" />
          <p className={s.placeholder}>placeholder</p>
          <MonthSelector month={month} year={year} />
        </div>
        <div className={s.balance_line}>
          <BalanceReport incomes={234075} outcomes={123000} />
        </div>
        <ReportIncomeExpenses />
      </div>
    </>
  );
}
