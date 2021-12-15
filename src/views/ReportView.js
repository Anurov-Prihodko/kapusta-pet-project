import HeaderHome from '../components/HeaderHome';
import { ReturnHome } from '../components/ReturnHome';
import { MonthSelector } from '../components/MonthSelector';
import { BalanceReport } from '../components/BalanceReport';
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
          <BalanceReport incomes={123000} outcomes={234075} />
        </div>
      </div>
    </>
  );
}
