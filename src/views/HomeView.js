import { Summary } from '../components/Summary';
import { ReturnHome } from '../components/ReturnHome';
import { MonthSelector } from '../components/MonthSelector';
import { BalanceReport } from '../components/BalanceReport';
import HomeTable from '../components/HomeTable';
import HeaderHome from '../components/HeaderHome';

const exampleSummary = [
  { month: 0, sum: 10000.0 },
  { month: 1, sum: 10000.0 },
  { month: 2, sum: 100.0 },
  { month: 3, sum: 10000.0 },
  { month: 4, sum: 1000.0 },
  { month: 5, sum: 10000.0 },
  { month: 6, sum: 10000.0 },
  { month: 7, sum: 10000.0 },
  { month: 8, sum: 10000.0 },
  { month: 9, sum: 10000.0 },
  { month: 10, sum: 10000.0 },
  { month: 11, sum: 10000.0 },
];

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();

export default function HomeView() {
  return (
    <>
      <HeaderHome />
      <Summary data={exampleSummary} />
      <ReturnHome whereto="home" />
      <MonthSelector month={month} year={year} />
      <BalanceReport incomes={123000} outcomes={234075} />
      <HomeTable />
    </>
  );
}
