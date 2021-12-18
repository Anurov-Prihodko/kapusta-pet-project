import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icons from '../../Icons/Icons';
import ReportChart from './ReportChart';
import ReportChartMobile from './ReportChartMobile';

import styles from './ReportIncomeExpenses.module.scss';

import { getTransactionsByDate } from '../../redux/reports/reportsOperations';
import {
  getCategoryDataExpense,
  getCategoryDataIncome,
  getReportMonth,
  getReportYear,
} from '../../redux/reports/reportsSelectors';

const Chart = ({ chartData }) => {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);
  const handleScreenResize = () => setScreenWidth(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  return (
    <>
      {screenWidth < 768 ? (
        <ReportChartMobile data={chartData} />
      ) : (
        <ReportChart data={chartData} />
      )}
    </>
  );
};

export default function ReportIncomeExpenses() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(0);

  const dispatch = useDispatch();

  const reportMonth = useSelector(getReportMonth);
  const reportYear = useSelector(getReportYear);

  useEffect(() => {
    let reportDate;

    if (reportMonth && reportYear) {
      reportDate = `${reportMonth}-${reportYear}`;
      dispatch(getTransactionsByDate(reportDate));
    }
  }, [dispatch, reportMonth, reportYear]);

  const categoryDataExpense = useSelector(getCategoryDataExpense);
  const categoryDataIncome = useSelector(getCategoryDataIncome);

  let chartTransactionsDataExpense;
  if (categoryDataExpense) {
    chartTransactionsDataExpense =
      categoryDataExpense[categoryActiveIndex]?.transactions;
  }

  let chartTransactionsDataIncome;
  if (categoryDataIncome) {
    chartTransactionsDataIncome =
      categoryDataIncome[categoryActiveIndex]?.transactions;
  }

  let categoryData = [],
    chartData = [],
    reportLabel = '';

  const [reportType, setReportType] = useState('income');

  const toggleReport = () => {
    setCategoryActiveIndex(0);
    reportType === 'expense'
      ? setReportType('income')
      : setReportType('expense');
  };

  if (reportType === 'expense') {
    categoryData = categoryDataExpense;
    chartData = chartTransactionsDataExpense;
    reportLabel = 'Расходы';
  }

  if (reportType === 'income') {
    categoryData = categoryDataIncome;
    chartData = chartTransactionsDataIncome;
    reportLabel = 'Доходы';
  }

  const getCategoryBtnClassNames = activeIndex => {
    const categoryBtnClassNames = [styles.categoryBtn];

    if (categoryActiveIndex === activeIndex)
      categoryBtnClassNames.push(styles.active);

    return categoryBtnClassNames.join(' ');
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryPanel}>
        <div className={styles.toggleReport}>
          <button
            type="button"
            className={styles.toggleReportBtn}
            onClick={toggleReport}
          >
            <Icons
              name="before"
              color="#FF751D"
              width="7"
              height="12"
              className={styles.toggleIcon}
            />
          </button>
          <span className={styles.reportLabel}>{reportLabel}</span>
          <button
            type="button"
            className={styles.toggleReportBtn}
            onClick={toggleReport}
          >
            <Icons
              name="after"
              color="#FF751D"
              width="7"
              height="12"
              className={styles.toggleIcon}
            />
          </button>
        </div>
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
      {chartData && <Chart chartData={chartData} />}
    </div>
  );
}
