import { BarChart, Bar, Cell, XAxis, CartesianGrid } from 'recharts';

import styles from './Reports.module.scss';

const data = [
  {
    name: 'Свинина',

    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Говядина',

    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Курица',

    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Рыба',

    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Панини',

    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Кофе',

    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Спагетти',

    pv: 4800,
    amt: 2181,
  },
];

const data1 = [
  {
    name: 'Свинина',

    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Говядина',

    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Курица',

    pv: 9800,
    amt: 2290,
  },
];

const renderCustomBarLabel = ({ x, y, width, value }) => {
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

export default function Reports() {
  return (
    <div className={styles.container}>
      <div className={styles.chartView}>
        <BarChart
          width={605}
          height={328}
          margin={{ top: 50, right: 15, bottom: 9, left: 15 }}
          data={data}
          barCategoryGap={20}
          barSize={38}
          className={styles.chart}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            dy={5}
            fontSize={12}
            color={'#52555F'}
          />

          <Bar
            dataKey="pv"
            radius={[10, 10, 0, 0]}
            label={renderCustomBarLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index % 3 ? '#FFDAC0' : '#ff751d'}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
