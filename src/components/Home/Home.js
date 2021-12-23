import s from './Home.module.scss';
// import Wrapper from '../Wrapper';
import HomeTable from '../HomeTable';
import MainHome from '../MainHome';
import { Summary } from '../Summary';
import ExpInTable from '../ExpenseIncomeTable';
import Balance from '../Balance';
import Reports from '../Reports';

export default function Home() {
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
        <div className={s.balance}>
          <Balance />
        </div>
        {/* </Wrapper> */}
      </MainHome>
    </div>
  );
}
