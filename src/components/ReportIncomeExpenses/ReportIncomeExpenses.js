import { useState, useEffect } from 'react';

import Icons from '../../Icons/Icons';
import ReportChart from './ReportChart';
import ReportChartMobile from './ReportChartMobile';

import styles from './ReportIncomeExpenses.module.scss';

import { getTransactionsByDate } from '../../redux/reports/reportsOperations';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategoryDataExpense,
  getCategoryDataIncome,
} from '../../redux/reports/reportsSelectors';

const TEST_DATA = {
  data: {
    allIncomes: 50000,
    allExpenses: 2500,
    income: [
      {
        category: 'Зарплата',
        totalSum: 50000,
        transactions: [],
      },
    ],
    expense: [
      {
        category: 'Продукты',
        icon: 'produkty',
        totalSum: 2400,
        transactions: [
          {
            transactionName: 'Свинина',
            transactionTotalSum: 2000,
          },
          {
            transactionName: 'Говядина',
            transactionTotalSum: 800,
          },
          {
            transactionName: 'Курятина',
            transactionTotalSum: 555,
          },
          {
            transactionName: 'Рыба',
            transactionTotalSum: 3908,
          },
          {
            transactionName: 'Панини',
            transactionTotalSum: 4800,
          },
          {
            transactionName: 'Кофе',
            transactionTotalSum: 4800,
          },
          {
            transactionName: 'Спагетти',
            transactionTotalSum: 4800,
          },
        ],
      },
      {
        category: 'Транспорт',
        icon: 'transport',
        totalSum: 100,
        transactions: [
          {
            transactionName: 'Метро',
            transactionTotalSum: 40,
          },
          {
            transactionName: 'Такси',
            transactionTotalSum: 398,
          },
          {
            transactionName: 'Поезд',
            transactionTotalSum: 700,
          },
        ],
      },
      {
        category: 'Здоровье',
        totalSum: 100,
        icon: 'zdorovie',
        transactions: [],
      },
      {
        category: 'Развлечения',
        totalSum: 100,
        icon: 'razvlecheniya',
        transactions: [
          {
            transactionName: 'кино',
            transactionTotalSum: 600,
          },
          {
            transactionName: 'театр',
            transactionTotalSum: 444,
          },
          {
            transactionName: 'музыка',
            transactionTotalSum: 300,
          },
          {
            transactionName: 'концерт',
            transactionTotalSum: 2500,
          },
        ],
      },
      {
        category: 'Всё для дома',
        totalSum: 100,
        icon: 'dlya-doma',
        transactions: [],
      },
      {
        category: 'Техника',
        totalSum: 100,
        icon: 'tehnika',
        transactions: [],
      },
      {
        category: 'Коммуналка, связь',
        totalSum: 100,
        icon: 'kommunalka',
        transactions: [],
      },
      {
        category: 'Спорт, хобби',
        totalSum: 100,
        icon: 'hobbi',
        transactions: [],
      },
      {
        category: 'Образование',
        totalSum: 100,
        icon: 'obrazovanie',
        transactions: [],
      },
      {
        category: 'Прочие',
        totalSum: 100,
        icon: 'prochee',
        transactions: [],
      },
    ],
  },
};

export default function ReportIncomeExpenses() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const dispatch = useDispatch();

  const handleScreenResize = () => setScreenWidth(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  const date = '12-2021';

  useEffect(() => {
    dispatch(getTransactionsByDate(date));
  }, [dispatch]);

  // const categoryDataExpense = TEST_DATA.data.expense; //for test
  const transData = TEST_DATA.data.expense.transactions;

  const categoryDataExpense = useSelector(getCategoryDataExpense);
  console.log('categoryDataExpense', categoryDataExpense);
  const categoryDataIncome = useSelector(getCategoryDataIncome);

  const chartTransactionsDataExpense =
    categoryDataExpense[categoryActiveIndex]?.transactions;

  const chartTransactionsDataIncome =
    categoryDataIncome[categoryActiveIndex]?.transactions;

  let categoryData = [];
  let chartData = [];

  const [reportType, setReportType] = useState('income');

  if (reportType === 'expense') {
    categoryData = categoryDataExpense;
    chartData = chartTransactionsDataExpense;
  }
  if (reportType === 'income') {
    categoryData = categoryDataIncome;
    chartData = chartTransactionsDataIncome;
  }

  const getCategoryBtnClassNames = activeIndex => {
    const categoryBtnClassNames = [styles.categoryBtn];

    if (categoryActiveIndex === activeIndex)
      categoryBtnClassNames.push(styles.active);

    return categoryBtnClassNames.join(' ');
  };

  return (
    // <h2 style={{ textAlign: 'center' }}>Hello!</h2>
    <div className={styles.container}>
      <div className={styles.categoryPanel}>
        <button
          type="button"
          className={styles.toggleReport}
          onClick={() => {
            setCategoryActiveIndex(0);
            reportType === 'expense'
              ? setReportType('income')
              : setReportType('expense');
          }}
        >
          change report
        </button>
        <ul className={styles.categoryList}>
          {categoryData?.map(({ category, icon, totalSum }, index) => (
            <li key={index} className={styles.categoryItem}>
              <span className={styles.categoryTotal}>{totalSum}.00</span>
              <button
                className={getCategoryBtnClassNames(index)}
                onClick={() => setCategoryActiveIndex(index)}
              >
                <div className={styles.categoryIconWrap}>
                  <Icons
                    name={icon}
                    width="56"
                    height="56"
                    className={styles.categoryIcon}
                  />
                </div>
              </button>
              <h3 className={styles.categoryName}>{category}</h3>
            </li>
          ))}
        </ul>
      </div>
      {/* <ReportChart data={chartData} /> */}
      {screenWidth < 768 ? (
        <ReportChartMobile data={chartData} />
      ) : (
        <ReportChart data={chartData} />
      )}
    </div>
  );
}
