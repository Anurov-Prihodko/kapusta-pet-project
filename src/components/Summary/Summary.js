import { useState, useEffect } from 'react';
import axios from 'axios';
import s from './Summary.module.css';
import { MONTHS } from '../../utils/months';
import { formatNumber } from '../../utils/formatNumber';
//import { exampleSummary } from './exampleSummary';

/*
Component Summary expects props in form:
  {
      data: [
         {
             month: <a number 0..11>,
             sum: <a number>
        },
        {...}
      ],
  }
*/
const Summary = ({ year, type }) => {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(async () => {
    /*this login is only for test. it is needed to create token*/
    const BASE_URL = 'https://kapusta-team-project-back-end.herokuapp.com';
    axios.defaults.baseURL = BASE_URL;
    const loginData = {
      email: 'ivans@inbox.com',
      password: '123456',
    };
    const { data: login } = await axios.post(`/api/users/signin`, loginData);
    //console.log(login);
    axios.defaults.headers.common.Authorization = `Bearer ${login.data.token}`;
    /*end of test part*/

    const { data: trans } = await axios.get(`/api/transactions/annual/${year}`);
    const tableForYear =
      type === 'incomes'
        ? trans.data.incomesForYear
        : trans.data.expensesForYear;
    const table = tableForYear.map((item, index) => {
      return { month: index, sum: item.sum };
    });
    console.log(table);
    setSummaryData(table);
  }, []);

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

export { Summary };
