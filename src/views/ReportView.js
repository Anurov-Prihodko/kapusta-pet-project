import HeaderHome from '../components/HeaderHome';
import { ReturnHome } from '../components/ReturnHome';
import { MonthSelector } from '../components/MonthSelector';
import { BalanceReport } from '../components/BalanceReport';

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

export default function ReportView() {
  return (
    <>
      <HeaderHome />

      <ReturnHome whereto="home" />
      <MonthSelector month={month} year={year} />
      <BalanceReport incomes={123000} outcomes={234075} />
    </>
  );
}
