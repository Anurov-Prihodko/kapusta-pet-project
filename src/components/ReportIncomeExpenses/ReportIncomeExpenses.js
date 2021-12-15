import { useState, useEffect } from 'react';

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import Icons from '../../Icons/Icons';
import ReportChart from './ReportChart';
import ReportChartMobile from './ReportChartMobile';

import styles from './ReportIncomeExpenses.module.scss';

const BASIC_CATEGORIES = [
  { name: 'Продукты', icon: 'produkty' },
  { name: 'Транспорт', icon: 'transport' },
  { name: 'Здоровье', icon: 'zdorovie' },
  { name: 'Алкоголь', icon: 'alcogol' },
  { name: 'Развлечения', icon: 'razvlecheniya' },
  { name: 'Всё для дома', icon: 'dlya-doma' },
  { name: 'Техника', icon: 'tehnika' },
  { name: 'Коммуналка, связь', icon: 'kommunalka' },
  { name: 'Спорт, хобби', icon: 'hobbi' },
  { name: 'Образование', icon: 'obrazovanie' },
  { name: 'Прочие', icon: 'prochee' },
];

const INCOME = [
  {
    name: 'ЗП',
    icon: 'salary',
  },
  {
    name: 'ДОП. ДОХОД',
    icon: 'additional-income',
  },
];

const data = [
  {
    name: 'Свинина',
    total: 2400,
  },
  {
    name: 'Говядина',
    total: 3398,
  },
  {
    name: 'Курица',
    total: 1800,
  },
  {
    name: 'Рыба',
    total: 3908,
  },
  {
    name: 'Панини',
    total: 4800,
  },
  {
    name: 'Кофе',
    total: 4800,
  },
  {
    name: 'Спагетти',
    total: 4800,
  },
];

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
        totalSum: 2400,
        transactions: [
          {
            name: 'Свинина',
            total: 2400,
          },
          {
            name: 'Говядина',
            total: 2398,
          },
          {
            name: 'Курица',
            total: 9800,
          },
          {
            name: 'Рыба',
            total: 3908,
          },
          {
            name: 'Панини',
            total: 4800,
          },
          {
            name: 'Кофе',
            total: 4800,
          },
          {
            name: 'Спагетти',
            total: 4800,
          },
        ],
      },
      {
        category: 'Транспорт',
        totalSum: 100,
        transactions: [
          {
            name: 'Метро',
            total: 40,
          },
          {
            name: 'Такси',
            total: 398,
          },
        ],
      },
      {
        category: 'Здоровье',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Развлечения',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Всё для дома',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Техника',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Коммуналка, связь',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Спорт, хобби',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Образование',
        totalSum: 100,
        transactions: [],
      },
      {
        category: 'Прочие',
        totalSum: 100,
        transactions: [],
      },
    ],
  },
};

export default function ReportIncomeExpenses() {
  const [categoryActiveIndex, setCategoryActiveIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const handleScreenResize = () => setScreenWidth(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', handleScreenResize);
    return () => window.removeEventListener('resize', handleScreenResize);
  }, []);

  const categoryDataExpense = TEST_DATA.data.expense; //for test

  const getCategoryBtnClassNames = activeIndex => {
    const categoryBtnClassNames = [styles.categoryBtn];

    if (categoryActiveIndex === activeIndex)
      categoryBtnClassNames.push(styles.active);

    return categoryBtnClassNames.join(' ');
  };

  return (
    <div className={styles.container}>
      <div className={styles.categoryPanel}>
        <ul className={styles.categoryList}>
          {BASIC_CATEGORIES.map(({ name, icon }, index) => (
            <li key={index} className={styles.categoryItem}>
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
              <h3 className={styles.categoryName}>{name}</h3>
            </li>
          ))}
        </ul>
      </div>
      {screenWidth <= 320 ? (
        <ReportChartMobile data={data} />
      ) : (
        <ReportChart data={data} />
      )}
    </div>
  );
}
