import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
// import HomeTable from '../HomeTable';
import Icons from '../../Icons';
import s from './ExpInTable.module.scss';
registerLocale('ru', ru);

export default function ExpInTable({ children }) {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={s.exptabs}>
      <section className={s.expinmain}>
        {/* <div className={s.expintab}>
          <input
            className={s.tabinput}
            type="radio"
            name="inset"
            value=""
            id="tab_1"
            // checked консоль бьет ошибку что нет обработчика события
          />
          <label className={s.tabtitle} data-for="tab_1">
            <span>РАСХОД</span>
          </label>
          <input
            className={s.tabinput}
            type="radio"
            name="inset"
            value=""
            id="tab_2"
          />
          <label className={s.tabtitle} data-for="tab_2">
            <span>ДОХОД</span>
          </label>
        </div> */}
        <div className={s.expintab}>
          <button className={s.tabtitle}>РАСХОД</button>
          <button className={s.tabtitle}>ДОХОД</button>
        </div>
        <div className={s.expinboard}>
          <div className={s.expinrail}>
            <div className={s.calendarblock}>
              <label data-for="date">
                <Icons
                  name="calendar"
                  width={20}
                  height={20}
                  className={s.calendaricon}
                />
              </label>
              <DatePicker
                id="date"
                className={s.calendar}
                selected={startDate}
                onChange={date => setStartDate(date)}
                dateFormat="dd.MM.yyyy"
                locale="ru"
              />
            </div>
            <div className={s.expininput}>
              <input
                className={s.expinplace}
                type="text"
                placeholder="Описание товара"
              />
              <select className={s.expinplace}>
                <option value="">Категория товара</option>
                <option value="">Транспорт</option>
                <option value="">Продукты</option>
                <option value="">Здоровье</option>
                <option value="">Алкоголь</option>
                <option value="">Развлечения</option>
                <option value="">Всё для дома</option>
                <option value="">Техника</option>
                <option value="">Коммуналка, связь</option>
                <option value="">Спорт, хобби</option>
                <option value="">Образование</option>
                <option value="">Прочее</option>
              </select>
              <input className={s.expinplace} type="text" placeholder="0,00" />
              <Icons
                name="calculator"
                width={20}
                height={20}
                className={s.iconCalculator}
              />
            </div>
            <div className={s.btnGroup}>
              <ButtonBasic type="submit" active={true} name="enter">
                Ввод
              </ButtonBasic>
              <ButtonBasic
                type="submit"
                active={false}
                bordered={true}
                name="clean"
              >
                Очистить
              </ButtonBasic>
            </div>
          </div>
          {/* <HomeTable /> */}
          {children}
        </div>
      </section>
      <section className={s.expinmainmobile}>
        <div className={s.calendarmob}>
          <label data-for="datemob">
            <Icons
              name="calendar"
              width={20}
              height={20}
              className={s.calendaricon}
            />
          </label>
          <DatePicker
            id="datemob"
            className={s.calendar}
            selected={startDate}
            onChange={date => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
            locale="ru"
          />
        </div>
        {/* <div>Здесь мобильная таблица расходов</div> */}
        {/* <div className={s.expbtnblock}>
          <button className={s.expmobBtn}>Расход</button>
          <button className={s.expmobBtn}>Доход</button>
        </div> */}
      </section>
    </div>
  );
}
