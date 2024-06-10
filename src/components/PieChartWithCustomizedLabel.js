import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 250, color: '#6C63FF' },
  { label: 'Group B', value: 200, color: '#FA9D17' },
  { label: 'Group C', value: 150, color: '#B9C606' },
  { label: 'Group D', value: 400, color: '#59CBD3' },
];

const sizing = {
  margin: { right: 5 },
  width: 168,
  height: 168,
  legend: { hidden: true },
};

const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${percent*100000}(${(percent * 100).toFixed(0)}%)`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 75,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 6,
        },
      }}
      {...sizing}
    />
  );
}
