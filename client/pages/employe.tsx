import React, { useRef, useState } from 'react';
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
import { PrismaClient } from '@prisma/client';
import { updateLanguageServiceSourceFile } from 'typescript';

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
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Doanh thu sổ tiết kiệm trong năm: 2022',
    },
  },
};

const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];


export default function Employe(props: any) {
  const yearRef = useRef<HTMLInputElement>(null)
  interface Montsh {
    janunary: String
    february: String
    march: String
    april: String
    may: String
    june: String
    july: String
    august: String
    september: String
    october: String
    november: String
    december: String
  }
  // {
  //   janunary: '',
  //   february: '',
  //   march: '',
  //   april: '',
  //   may: '',
  //   june: '',
  //   july: '',
  //   august: '',
  //   september: '',
  //   october: '',
  //   november: '',
  //   december: '',
  // }

  const [dataRevenue, setDateRevenue] = useState()
  const [year, setYearh] = useState<any>()
  // console.log(revenue);

  const data = {
    labels,
    datasets: [
      {
        label: 'Doanh thu theo tháng',
        data: dataRevenue,
        backgroundColor: '#9CCCEA',
      },
    ],
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    console.log('handleSubmit');
    e.preventDefault()

    const { current: yearEl } = yearRef
    if (yearEl) {
      console.log('yeah element');
      console.log(yearEl);
      const response = await fetch('/api/revenue', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ year: yearEl.value })
      })

      const data = await response.json()

      const { revenue, message, isSuccessFindYear } = data


      // console.log(typeof revenue);
      // console.log(message);
      if (isSuccessFindYear) {
        setYearh(revenue.year)
        let what = Object.values(revenue)
        console.log(`year: ${year}`);
        console.log(what);
        what = what.filter((item: any, index: any) => item !== year)
        setDateRevenue(what)
        console.log('ok fine');
      } else {
        alert(message)
      }
    }
  }

  return (
    <div className="main-content mt-[103px] max-w-[1200px] px-[15px] mx-auto">
      <div className="mt-10">
        <Bar data={data} options={options} />
        <form onSubmit={handleSubmit} className="flex items-center justify-center mt-10">
          <div className="flex items-center">
            <div className="flex flex-wrap">
              <span className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold" >
                Năm cần lập doanh thu
              </span>
              <div className="w-full mr-2">
                <input ref={yearRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Nhập năm mà bạn muốn thống kế doanh thu sổ tiết kiệm" required />
              </div>
            </div>
            <button className="bg-blue-google h-[46px] text-white px-3 py-2 rounded-md" type="submit">Vẽ biểu đồ</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const prisma = new PrismaClient()
  const revenue = await prisma.revenueSavingsAccount.findFirst()

  return {
    props: { revenue }
  }
}
