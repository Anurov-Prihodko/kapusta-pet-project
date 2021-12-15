import s from './Summary.module.css';
import { MONTHS } from '../../utils/months';
import { formatNumber } from '../../utils/formatNumber';
import { exampleSummary } from './exampleSummary';

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
const Summary = () => {
  // console.log(data);
  return (
    <div className={s.summary__container}>
      <p className={s.summary__title}>Сводка</p>
      <table className={s.summary__table}>
        <tbody>
          {exampleSummary.map((monthData, index) => {
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
