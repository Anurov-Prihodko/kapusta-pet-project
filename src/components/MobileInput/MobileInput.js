import React, { useState, useEffect } from 'react';
import s from './MobileInput.module.scss';
import Icons from '../../Icons';
import ButtonBasic from '../ButtonBasic/ButtonBasic';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categories/categoriesSelectors';
import { getIncome } from '../../redux/transactions/transactionsSelectors';
import { newExpenseData, newIncomeData } from '../../redux/auth/authOperations';
import {
  getExpenseByDate,
  getIncomseByDate,
  // eslint-disable-next-line no-unused-vars
  changeIncome,
} from '../../redux/transactions/transactionsOperations';
import {
  getSummaryYear,
  // eslint-disable-next-line no-unused-vars
  getSummaryCategory,
} from '../../redux/summary/summarySelectors';
import dateRequest from '../../services/dateRequest';
import { getTransactionsAnnual } from '../../redux/summary/summaryOperations';
import { formatInputValue } from '../../utils/formatInputValue';

export default function MobileInput({ onClose }) {
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(new Date());
  const [request, setRequest] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState('');
  const expenseCategories = useSelector(getAllCategories);
  const incomeStatus = useSelector(getIncome);
  const year = useSelector(getSummaryYear);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseByDate(dateRequest(startDate)));
    dispatch(getIncomseByDate(dateRequest(startDate)));
  }, [startDate, dispatch]);

  useEffect(() => {
    const button = document.getElementById('button-close');
    button.addEventListener('click', onClose);
    return () => {
      button.removeEventListener('click', onClose);
    };
  }, [onClose]);

  const dateFormatter = date => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const normalDate = new Date(date)
      .toLocaleString('Ru-ru', options)
      .split('.')
      .join('-');

    return normalDate;
  };

  // const formatInputValue = inputValue => {
  //   const interValue = Number(inputValue).toFixed(2);
  //   return Number(interValue);
  // };

  const handleNameChange = event => {
    setRequest(event.currentTarget.value);
  };

  const changeSelect = event => {
    setCategory(event.currentTarget.value);
  };

  const handleNumbChange = event => {
    if (expenses.includes('.')) {
      if (expenses.split('.')[1].length > 1) {
        alert('Слишком много символов после точки!');
        setExpenses('');
        return;
      }
      setExpenses(event.currentTarget.value);
    }

    setExpenses(event.currentTarget.value);
  };

  const onClear = event => {
    setExpenses('');
    setRequest('');
    setCategory('');
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (category === '') {
      return;
    }
    if (incomeStatus) {
      await dispatch(
        newIncomeData({
          sum: formatInputValue(expenses),
          transactionName: `${request}`,
          category: `${category}`,
          income: true,
          createdAt: dateFormatter(startDate),
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
          sum: formatInputValue(expenses),
          transactionName: `${request}`,
          category: `${category}`,
          income: false,
          createdAt: dateFormatter(startDate),
        }),
      );
      dispatch(getTransactionsAnnual(year));
      dispatch(getExpenseByDate(dateRequest(startDate)));
      onClear();
      return;
    }
  };
  return (
    <div className={s.body}>
      <div className={s.wraper}>
        <button type="button" id="button-close" className={s.close__btn}>
          <Icons name="close" className={s.close__btn_svg} />
        </button>
      </div>
      <div className={s.expininput}>
        <div className={s.inputfirst}>
          <input
            value={request}
            onChange={handleNameChange}
            type="text"
            className={s.expinplace}
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
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className={s.secondinput}>
          <input
            value={expenses}
            onChange={handleNumbChange}
            type="number"
            placeholder="0"
            className={s.expinplace}
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
    </div>
  );
}
