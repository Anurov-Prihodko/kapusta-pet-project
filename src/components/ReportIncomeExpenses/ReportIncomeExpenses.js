import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Wrapper from '../Wrapper';
import ReportCategoryPanel from './ReportCategoryPanel/ReportCategoryPanel';
import ReportChart from './ReportChart/ReportChart';
import ReportChartMobile from './ReportChart/ReportChartMobile';

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
  const [reportType, setReportType] = useState('expense');

  const dispatch = useDispatch();

  const reportMonth = useSelector(getReportMonth);
  const reportYear = useSelector(getReportYear);

  const categoryDataExpense = useSelector(getCategoryDataExpense);
  const categoryDataIncome = useSelector(getCategoryDataIncome);

  useEffect(() => {
    let reportDate;

    if (reportMonth && reportYear) {
      reportDate = `${reportMonth}-${reportYear}`;
      dispatch(getTransactionsByDate(reportDate));
    }
  }, [dispatch, reportMonth, reportYear]);

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

  return (
    <Wrapper>
      <ReportCategoryPanel
        categoryActiveIndex={categoryActiveIndex}
        setCategoryActiveIndex={setCategoryActiveIndex}
        reportType={reportType}
        setReportType={setReportType}
        reportLabel={reportLabel}
        categoryData={categoryData}
      />
      {chartData && <Chart chartData={chartData} />}
    </Wrapper>
  );
}
