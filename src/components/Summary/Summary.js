import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import s from './Summary.module.css';
import { MONTHS } from '../../utils/months';
import { formatNumber } from '../../utils/formatNumber';
//import { exampleSummary } from './exampleSummary';

import {
  getSummaryYear,
  getSummaryCategory,
  getSummaryExpenses,
  getSummaryIncomes,
} from '../../redux/summary/summarySelectors';
import { getTransactionsAnnual } from '../../redux/summary/summaryOperations';


const Summary = (/*{ year, category, token }*/) => {
  const year = useSelector(getSummaryYear);
  const category = useSelector(getSummaryCategory);
  const expenses = useSelector(getSummaryExpenses);
  const incomes = useSelector(getSummaryIncomes);
  const dispatch = useDispatch();

  // const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (year) {
      //axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      //console.log('token2=', axios.defaults.headers.common.Authorization);
      dispatch(getTransactionsAnnual(year));
    }
  }, [dispatch, year]);

  let summaryData = [{ month: 2, sum: 99999.99 }];
  const table = category === 'incomes' ? incomes : expenses;
  if (table) {
    summaryData = table.map((item, index) => {
      return { month: index, sum: item.sum };
    });
  }


  return (
    <div className={s.summary__container}>
      <p className={s.summary__title}>Сводка</p>
      <table className={s.summary__table}>
        <tbody>
          {summaryData.map((monthData, index) => {
            return (
              <tr key={index}>
                <td className={s.summary__month}>{MONTHS[monthData.month]}</td>
                <td className={s.summary__sum}>
                  {formatNumber(monthData.sum)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

/*
const mapStateToProps = state => ({
  year: state.summary.summaryYear,
  category: state.summary.category,
  token: state.auth.token,
});
const Summary = connect(mapStateToProps)(Summary2);
*/

export { Summary };
