// PolarAreaChart.tsx
import React from 'react';
import { PolarArea} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale
} from 'chart.js'

ChartJS.register(
  RadialLinearScale
);

interface PolarAreaChartProps {
  data:{
    values: number[],
    labels: string[],
    colors:string[],
  }
}

const PolarAreaChart: React.FC<PolarAreaChartProps> = ({ data }) => {
  const chartData = {
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        label: 'Polar Area Chart',
      },
    ],
    labels: data.labels,
  };

  const chartOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5000,
      },
    },
  };

  return <PolarArea data={chartData} options={chartOptions} />;
};

export default PolarAreaChart;
