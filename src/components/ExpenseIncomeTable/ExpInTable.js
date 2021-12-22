import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIncome } from '../../redux/transactions/transactionsSelectors';
import {
  getExpenseByDate,
  getIncomseByDate,
  changeIncome,
} from '../../redux/transactions/transactionsOperations';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import { BASE_URL } from '../../services/kapustaAPIConstants';
// import HomeTable from '../HomeTable';
import dateRequest from '../../services/dateRequest';
import Icons from '../../Icons';
import s from './ExpInTable.module.scss';

/*
Component Summary requires the following additions to this file:*/

import {
  changeSummaryYear,
  changeCategory,
} from '../../redux/summary/summarySlice';
import {
  getSummaryYear,
  getSummaryCategory,
} from '../../redux/summary/summarySelectors';
registerLocale('ru', ru);

export default function ExpInTable({ children }) {
  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState('');
  const [expenses, setExpenses] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('pending');

  const incomeStatus = useSelector(getIncome);

  const dispatch = useDispatch();
  ////////////////////////////////////////////////////
  const prevCategory = useSelector(getSummaryCategory);

  function onChangeTime(date) {
    dispatch(changeSummaryYear(date.getFullYear()));
    if (!prevCategory) {
      dispatch(changeCategory('expenses'));
    }
  }

  function onCategoryExpenses() {
    dispatch(changeCategory('expenses'));
    dispatch(changeSummaryYear(startDate.getFullYear()));
  }

  function onCategoryIncomes() {
    dispatch(changeCategory('incomes'));
    dispatch(changeSummaryYear(startDate.getFullYear()));
  }
  ////////////////////////////////////////////////////////////////

  // const utcDate = startDate.setHours(startDate.getHours() + 2);
  // const newDate = new Date(utcDate);
  // const isoDate = newDate.toISOString();

  useEffect(() => {
    dispatch(getIncomseByDate(dateRequest(startDate)));
    dispatch(getExpenseByDate(dateRequest(startDate)));
    setSearch('pending');
  }, [dispatch, search, startDate, incomeStatus]);

  const handleNameChange = event => {
    setRequest(event.currentTarget.value);
  };
  const handleNumbChange = event => {
    setExpenses(event.currentTarget.value);
  };

  const changeSelect = event => {
    setCategory(event.currentTarget.value);
  };

  const onClear = event => {
    setExpenses('');
    setRequest('');
    setCategory('');
  };

  const handleSubmit = event => {
    if (incomeStatus === true) {
      return axios
        .post(`${BASE_URL}/transactions/income`, {
          sum: `${expenses}`,
          transactionName: `${request}`,
          category: `${category}`,
          income: incomeStatus,
        })
        .then(function (response) {
          onClear();
          setSearch('fullfild');
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    axios
      .post(`${BASE_URL}/transactions/expense`, {
        sum: `${expenses}`,
        transactionName: `${request}`,
        category: `${category}`,
        income: incomeStatus,
      })
      .then(function (response) {
        onClear();
        setSearch('fullfild');
      })
      .catch(function (error) {
        console.log(error);
      });
    event.preventDefault();
  };

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
          <button
            className={s.tabtitle}
            onClick={() => {
              dispatch(changeIncome(false));
              onCategoryExpenses();
            }}
          >
            РАСХОД
          </button>
          <button
            className={s.tabtitle}
            onClick={() => {
              dispatch(changeIncome(true));
              onCategoryIncomes();
            }}
          >
            ДОХОД
          </button>
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
                onChange={date => {
                  setStartDate(date);
                  dispatch(getExpenseByDate(dateRequest(date)));
                  dispatch(getIncomseByDate(dateRequest(startDate)));
                  onChangeTime(date);
                }}
                dateFormat="dd.MM.yyyy"
                locale="ru"
              />
            </div>
            <div className={s.expininput}>
              <input
                value={request}
                onChange={handleNameChange}
                className={s.expinplace}
                type="text"
                placeholder="Описание товара"
              />
              <select
                value={category}
                onChange={changeSelect}
                className={s.expinplace}
              >
                <option>Категория товара</option>
                <option>Транспорт</option>
                <option>Продукты</option>
                <option>Здоровье</option>
                <option>Алкоголь</option>
                <option>Развлечения</option>
                <option>Всё для дома</option>
                <option>Техника</option>
                <option>Коммуналка, связь</option>
                <option>Спорт, хобби</option>
                <option>Образование</option>
                <option>Прочее</option>
              </select>
              <input
                value={expenses}
                onChange={handleNumbChange}
                className={s.expinplace}
                type="number"
                placeholder="0,00"
              />
              <Icons
                name="calculator"
                width={20}
                height={20}
                className={s.iconCalculator}
              />
            </div>
            <div className={s.btnGroup}>
              <ButtonBasic
                type="submit"
                active={true}
                name="enter"
                onClick={handleSubmit}
              >
                Ввод
              </ButtonBasic>
              <ButtonBasic
                type="submit"
                active={false}
                bordered={true}
                name="clean"
                onClick={onClear}
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
            onChange={date => {
              setStartDate(date);
              dispatch(getExpenseByDate(dateRequest(date)));
              dispatch(getIncomseByDate(dateRequest(startDate)));
            }}
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
