import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

import styles from './ReportIncomeExpenses.module.scss';

const renderBarLabel = ({ x, y, width, value }) => {
  return (
    <text
      x={x + width / 2}
      y={y - 4}
      fill="#52555F"
      textAnchor="middle"
      dy={-10}
      fontSize={12}
    >{`${value} грн`}</text>
  );
};

export default function ReportChart({ data }) {
  // const { transactionName, transactionTotalSum } = data;

  return (
    <div className={styles.chartView}>
      <ResponsiveContainer
        width={638}
        height={328}
        className={styles.chartResponsiveContainer}
      >
        <BarChart
          margin={{ top: 50, bottom: 9 }}
          data={data}
          barCategoryGap={20}
          barSize={38}
          className={styles.chart}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="transactionName"
            axisLine={false}
            tickLine={false}
            dy={5}
            fontSize={12}
            color={'#52555F'}
          />

          <Bar
            dataKey="transactionTotalSum"
            radius={[10, 10, 0, 0]}
            label={renderBarLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? '#FFDAC0' : '#ff751d'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
