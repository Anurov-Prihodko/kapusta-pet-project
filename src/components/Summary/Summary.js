import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import s from './Summary.module.scss';
import { MONTHS } from '../../utils/months';
import { formatNumber } from '../../utils/formatNumber';

import {
  getSummaryYear,
  getSummaryCategory,
  getSummaryRefresh,
  getSummaryExpenses,
  getSummaryIncomes,
} from '../../redux/summary/summarySelectors';
import { getTransactionsAnnual } from '../../redux/summary/summaryOperations';

const Summary = () => {
  // console.log(formatNumber(7.89));
  // console.log(formatNumber(67.89));
  // console.log(formatNumber(567.89));
  // console.log(formatNumber(4567.89));
  // console.log(formatNumber(34567.89));
  // console.log(formatNumber(234567.89));
  // console.log(formatNumber(1234567.89));
  // return <div></div>;
  const year = useSelector(getSummaryYear);
  const category = useSelector(getSummaryCategory);
  const refresh = useSelector(getSummaryRefresh);
  const expenses = useSelector(getSummaryExpenses);
  const incomes = useSelector(getSummaryIncomes);
  const dispatch = useDispatch();

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token && year) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(getTransactionsAnnual(year));
    } else {
      return;
    }
  }, [dispatch, token, year, category, refresh]);

  let summaryData = [];
  const table = category === 'incomes' ? incomes : expenses;
  if (table) {
    summaryData = table.map((item, index) => {
      return { month: index, sum: item.sum };
    });
    summaryData = summaryData.filter(item => item.sum !== 0);
  }

  return (
    <div className={s.summary__container}>
      <p className={s.summary__title}>Сводка</p>
      <table className={s.summary__table}>
        <tbody>
          {summaryData.length > 0 ? (
            summaryData.map((monthData, index) => {
              return (
                <tr key={index}>
                  <td className={s.summary__month}>
                    {MONTHS[monthData.month]}
                  </td>
                  <td className={s.summary__sum}>
                    {formatNumber(monthData.sum)}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className={s.summary_notransactions}>
                No transactions in the year
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { Summary };
