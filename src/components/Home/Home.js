import { useSelector } from 'react-redux';
import s from './Home.module.scss';
import Wrapper from '../Wrapper';
import HomeTable from '../HomeTable';
import MainHome from '../MainHome';
import { Summary } from '../Summary';
import ExpInTable from '../ExpenseIncomeTable';
import Balance from '../Balance';
import Reports from '../Reports';
import { getBalanceHasBeenSet } from '../../redux/auth/authSelectors';

export default function Home() {
  const balanceHasBeenSet = useSelector(getBalanceHasBeenSet)
  return (
    <div className={s.main_container}>
      <MainHome>
        <Wrapper>
          <div className={s.home_container}>
            <ExpInTable>
              <div className={s.table_container}>
                <HomeTable />
                <Summary />
              </div>
            </ExpInTable>
          </div>
          <div className={s.reports}>
            <Reports />
          </div>
          <div className={!balanceHasBeenSet ? s.balance : s.hide}>
            <Balance />
          </div>
        </Wrapper>
      </MainHome>
    </div>
  );
}
