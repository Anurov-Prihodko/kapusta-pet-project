import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIncome } from '../../redux/transactions/transactionsSelectors';
import {
  getExpenseByDate,
  getIncomseByDate,
  changeIncome,
} from '../../redux/transactions/transactionsOperations';
import {
  getAllExpenseCategories,
  addCategory,
  removeCategoryById,
} from '../../redux/categories/categoriesOperations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import Icons from '../../Icons';
import s from './ExpInTable.module.scss';
import dateRequest from '../../services/dateRequest';
import { newExpenseData, newIncomeData } from '../../redux/auth/authOperations';

import {
  changeSummaryYear,
  changeCategory,
} from '../../redux/summary/summarySlice';
import {
  getSummaryYear,
  getSummaryCategory,
} from '../../redux/summary/summarySelectors';
import { getAllCategories } from '../../redux/categories/categoriesSelectors';
import { getTransactionsAnnual } from '../../redux/summary/summaryOperations';

registerLocale('ru', ru);

export default function ExpInTable({ children }) {
  // === Bugfix dataPicker

  // === End Bugfix dataPicker

  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState('');
  const [expenses, setExpenses] = useState('');
  const [category, setCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);

  // === Нужно для бека, чтобы передавать данные задним числом
  const utcDate = startDate.setHours(startDate.getHours() + 2);
  const newDate = new Date(utcDate);
  const transactionDate = newDate.toISOString();
  // === End

  const incomeStatus = useSelector(getIncome);
  const year = useSelector(getSummaryYear);
  const dispatch = useDispatch();

  ////////////////////////////////////////////////////

  const prevCategory = useSelector(getSummaryCategory);

  const expenseCategories = useSelector(getAllCategories);

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

  useEffect(() => {
    dispatch(getAllExpenseCategories());
    dispatch(changeSummaryYear(startDate.getFullYear()));
  }, [startDate, dispatch]);

  useEffect(() => {
    dispatch(getExpenseByDate(dateRequest(startDate))); // Два раза вызывается new Date()
  }, [startDate, dispatch]);

  const formatInputValue = inputValue => Number(inputValue).toFixed(2);

  const handleNameChange = event => {
    setRequest(event.currentTarget.value);
  };
  const handleNewCategory = event => {
    setNewCategory(event.currentTarget.value);
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

  const addCatagory = event => {
    setActiveBtn(!activeBtn);
  };

  const addNewCatagory = event => {
    if (newCategory === '') {
      return setActiveBtn(false);
    }
    dispatch(
      addCategory({
        category: newCategory,
        income: false,
        iconName: 'prochee',
      }),
    );
    setActiveBtn(false);
    setNewCategory('');
  };

  const deleteNewCatagory = event => {
    if (newCategory === '') {
      return setActiveBtn(false);
    }
    const curCategory = expenseCategories.find(
      item => item.category === newCategory,
    );
    dispatch(removeCategoryById(curCategory._id));
    setActiveBtn(false);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (category === '') {
      return;
    }
    if (incomeStatus) {
      await dispatch(
        newIncomeData({
          sum: `${formatInputValue(expenses)}`,
          transactionName: `${request}`,
          category: `${category}`,
          income: true,
        }),
      );
      dispatch(getTransactionsAnnual(year));
      dispatch(getIncomseByDate(dateRequest(startDate)));
      onClear();

      return;
    }
    if (!incomeStatus) {
      await dispatch(
        newExpenseData({
          sum: `${formatInputValue(expenses)}`,
          transactionName: `${request}`,
          category: `${category}`,
          income: false,
        }),
      );
      dispatch(getTransactionsAnnual(year));
      dispatch(getExpenseByDate(dateRequest(startDate)));
      onClear();

      return;
    }
  };

  const getIncomeList = () => {
    dispatch(getIncomseByDate(dateRequest(startDate)));
    dispatch(changeIncome(true));
    onCategoryIncomes();
    dispatch(getTransactionsAnnual(year));
  };

  const getExpenseList = () => {
    dispatch(getExpenseByDate(dateRequest(startDate)));
    dispatch(changeIncome(false));
    onCategoryExpenses();
    dispatch(getTransactionsAnnual(year));
  };

  return (
    <div className={s.exptabs}>
      <section className={s.expinmain}>
        <div className={s.expintab}>
          <button
            style={
              incomeStatus === true ? { color: 'black' } : { color: '#ff751d' }
            }
            className={s.tabtitle}
            onClick={getExpenseList}
          >
            РАСХОД
          </button>
          <button
            style={
              incomeStatus === false ? { color: 'black' } : { color: '#ff751d' }
            }
            className={s.tabtitle}
            onClick={getIncomeList}
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
              {incomeStatus === false ? (
                <>
                  <select
                    value={category}
                    onChange={changeSelect}
                    className={s.expinplace}
                  >
                    <option value="">Категория товара</option>
                    {expenseCategories
                      .filter(item => item.income === false)
                      .map(item => (
                        <option key={item.category}>{item.category}</option>
                      ))}
                  </select>
                  <button
                    type="click"
                    onClick={addCatagory}
                    className={s.btn_plus_category}
                  >
                    {activeBtn ? (
                      <Icons
                        name="minus"
                        width={14}
                        height={14}
                        color={'#52555f'}
                      />
                    ) : (
                      <Icons
                        name="plus"
                        width={14}
                        height={14}
                        color={'#52555f'}
                      />
                    )}
                  </button>
                  {activeBtn && (
                    <div className={s.add_categoty}>
                      <input
                        type="text"
                        value={newCategory}
                        onChange={handleNewCategory}
                        className={s.add_categoty_input}
                        placeholder="Название категории"
                      />
                      <div>
                        <button
                          type="click"
                          onClick={addNewCatagory}
                          className={s.btn_new_category}
                        >
                          Добавить
                        </button>
                        <button
                          type="click"
                          onClick={deleteNewCatagory}
                          className={s.btn_new_category}
                        >
                          Удалить
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <select
                  value={category}
                  onChange={changeSelect}
                  className={s.expinplace}
                >
                  <option value="">Категория товара</option>
                  {expenseCategories
                    .filter(item => item.income === true)
                    .map(item => (
                      <option key={item.category}>{item.category}</option>
                    ))}
                </select>
              )}
              <input
                value={expenses}
                onChange={handleNumbChange}
                className={s.expinplace}
                type="number"
                placeholder="0"
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
              onChangeTime(date);
            }}
            dateFormat="dd.MM.yyyy"
            locale="ru"
          />
        </div>
        {children}
        {/* <div>Здесь мобильная таблица расходов</div> */}
        {/* <div className={s.expbtnblock}>
          <button className={s.expmobBtn}>Расход</button>
          <button className={s.expmobBtn}>Доход</button>
        </div> */}
      </section>
    </div>
  );
}
