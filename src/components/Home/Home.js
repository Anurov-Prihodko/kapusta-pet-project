import s from './Home.module.scss';
// import Wrapper from '../Wrapper';
import HomeTable from '../HomeTable';
import MainHome from '../MainHome';
import { Summary } from '../Summary';
import ExpInTable from '../ExpenseIncomeTable';
import Balance from '../Balance';
import Reports from '../Reports';

import { useSelector } from 'react-redux';
import { getBalance } from '../../redux/auth/authSelectors';

export default function Home() {
  const balance = useSelector(getBalance);
  let balancein;

  if (balance === 0) {
    balancein = (
      <div className={s.balance}>
        <Balance />
      </div>
    );
  } else {
    balancein = (
      <div
        className={s.balance}
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <Balance />
      </div>
    );
  }

  return (
    <div className={s.main_container}>
      <MainHome>
        {/* <Wrapper> */}
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
        {balancein}
      </MainHome>
    </div>
  );
}
