import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Doanh thu sổ tiết kiệm trong năm',
    },
  },
};

const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

interface Props {
  revenuMonths: {
    january: string
    february: string
    march: string
    april: string
    may: string
    june: string
    july: string
    august: string
    october: string,
    november: string,
    september: string,
    december: string,
  }
}

const Chart: React.FC<Props> = (props) => {
  console.log('chart compo');
  const { revenuMonths } = props
  console.log(typeof revenuMonths);
  console.log(revenuMonths);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Doanh thu theo tháng (triệu đồng)',
        data: revenuMonths,
        backgroundColor: '#9CCCEA',
      },
    ],
  };

  console.log('datat in chart compo');
  return (
    <div className="max-w-[768px] mx-auto">
      <Bar data={data} options={options} />
    </div>
  )
}

export default Chart
