// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
} from 'chart.js'

ChartJS.register(
  ArcElement
)


interface DoughnutChart {
  data: {
    labels: string[];
    values: number[];
    colors: string[];
  };
  width:number,
  height:number,
}

const DoughnutChart: React.FC<DoughnutChart> = ({ data, width, height }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false, // Disable the aspect ratio
    responsive:true,
      plugins: {
      legend: {
        position: "right" as const, // Move legend to the right
      },
    },
  };

  return <Doughnut data={chartData} options={chartOptions} width={`${width}px`} height={`${height}px`}/>;
};

export default DoughnutChart;
