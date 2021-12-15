import { Summary } from '../components/Summary';
import ExpInTable from '../components/ExpenseIncomeTable';
import HomeTable from '../components/HomeTable';
import Balance from '../components/Balance';
import Reports from '../components/Reports';
import HeaderHome from '../components/HeaderHome';
import BalanceMessage from '../components/BalanceMessage';

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

export default function HomeView() {
  return (
    <>
      <HeaderHome />
      <Summary data={exampleSummary} />
      <ExpInTable />
      <HomeTable />
      <Balance />
      <Reports />
      <BalanceMessage />
    </>
  );
}
