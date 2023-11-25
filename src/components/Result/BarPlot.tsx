// BarPlot.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface BarPlotProps {
  data: {
    labels: string[];
    datasets:{
    label: string,
    values: number[];
    colors: string[];
    }[]
  };
  width:number,
  height:number,
}

const BarPlot: React.FC<BarPlotProps> = ({ data, width, height }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      label: dataset.label,
      data: dataset.values,
      backgroundColor: dataset.colors,
    })),
  };

  const chartOptions = {
    // indexAxis: 'y' as const,
    maintainAspectRatio: false, // Disable the aspect ratio
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
  // <div className="w-full h-full">
    <Bar width={`${width}px`} height={`${height}px`} data={chartData} options={chartOptions} />
  // </div>
  );
};

export default BarPlot;
