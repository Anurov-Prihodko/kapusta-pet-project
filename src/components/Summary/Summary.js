import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import s from './Summary.module.scss';
import { MONTHS } from '../../utils/months';
import { formatNumber } from '../../utils/formatNumber';
import {
  getTransactionsExpenseMonth,
  getTransactionsIncomseMonth,
} from '../../redux/transactions/transactionsSelectors';

import {
  getSummaryYear,
  getSummaryCategory,
  getSummaryExpenses,
  getSummaryIncomes,
} from '../../redux/summary/summarySelectors';
import { getTransactionsAnnual } from '../../redux/summary/summaryOperations';

const Summary = () => {
  const year = useSelector(getSummaryYear);
  const category = useSelector(getSummaryCategory);
  const expenses = useSelector(getSummaryExpenses);
  const incomes = useSelector(getSummaryIncomes);
  const dispatch = useDispatch();

  const transactionsExpenseMonth = useSelector(getTransactionsExpenseMonth);
  const transactionsIncomseMonth = useSelector(getTransactionsIncomseMonth);

  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch(getTransactionsAnnual(year));
    } else {
      return;
    }
  }, [
    dispatch,
    token,
    year,
    category,
    transactionsExpenseMonth,
    transactionsIncomseMonth,
  ]);

  let summaryData = [];
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
          {summaryData?.map((monthData, index) => {
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

export { Summary };
