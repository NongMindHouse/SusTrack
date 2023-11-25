// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {sdgColorList} from '@/utils/sdgColors'
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
    // colors: string[];
    // hoverColors: string[];
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
        // hoverBackgroundColor: [
        //   'rgba(255, 99, 132, 0.8)',
        //   'rgba(54, 162, 235, 0.8)',
        //   'rgba(255, 206, 86, 0.8)',
        //   'rgba(75, 192, 192, 0.8)',
        //   'rgba(153, 102, 255, 0.8)',
        // ],
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
