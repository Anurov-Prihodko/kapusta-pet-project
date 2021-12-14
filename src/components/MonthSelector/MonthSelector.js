import Icons from '../../Icons';
import s from './MonthSelector.module.css';
import { MONTHS } from '../../utils/months';

const MonthSelector = ({ month, year }) => {
  let prevMonth, prevYear, nextMonth, nextYear;
  if (month === 0) {
    prevMonth = 11;
    prevYear = year - 1;
  } else {
    prevMonth = month - 1;
    prevYear = year;
  }
  if (month === 11) {
    nextMonth = 0;
    nextYear = year + 1;
  } else {
    nextMonth = month + 1;
    nextYear = year;
  }
  return (
    <div className={s.selector_container}>
      <p className={s.selector_title}>Текущий период:</p>
      <div className={s.selector_line}>
        <a href={`#?month=${prevMonth}&year=${prevYear}`} className={s.href}>
          <Icons
            name="before"
            color="#FF751D"
            width="7"
            height="12"
            className={s.icon}
          />
        </a>

        <p className={s.month}>{MONTHS[month]}</p>
        <p className={s.year}>{year}</p>

        <a href={`#?month=${nextMonth}&year=${nextYear}`} className={s.href}>
          <Icons
            name="after"
            color="#FF751D"
            width="7"
            height="12"
            className={s.icon}
          />
        </a>
      </div>
    </div>
  );
};

export { MonthSelector };
