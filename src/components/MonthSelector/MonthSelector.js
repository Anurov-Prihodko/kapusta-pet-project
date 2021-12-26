import { useState, useEffect } from 'react';
import Icons from '../../Icons';
import s from './MonthSelector.module.css';
import { MONTHS } from '../../utils/months';
import { useDispatch } from 'react-redux';
import { changeReportDate } from '../../redux/reports/reportsSlice';

const MonthSelector = () => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeReportDate(`${month + 1}-${year}`));
  }, []);

  function previousMonth() {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);

      dispatch(changeReportDate(`${12}-${year - 1}`));
    } else {
      setMonth(month - 1);

      dispatch(changeReportDate(`${month}-${year}`));
    }
  }

  function nextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);

      dispatch(changeReportDate(`${1}-${year + 1}`));
    } else {
      setMonth(month + 1);

      dispatch(changeReportDate(`${month + 2}-${year}`));
    }
  }

  return (
    <div className={s.selector_container}>
      <p className={s.selector_title}>Текущий период:</p>
      <div className={s.selector_line}>
        <button className={s.selector_toggle_btn} onClick={previousMonth}>
          <Icons
            name="before"
            color="#FF751D"
            width="7"
            height="12"
            className={s.icon}
          />
        </button>
        <div className={s.label}>
          <span className={s.month}>{MONTHS[month]}</span>
          <span className={s.year}>{year}</span>
        </div>

        <button className={s.selector_toggle_btn} onClick={nextMonth}>
          <Icons
            name="after"
            color="#FF751D"
            width="7"
            height="12"
            className={s.icon}
          />
        </button>
      </div>
    </div>
  );
};

export { MonthSelector };
