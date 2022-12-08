import React, { useRef, useState } from 'react';
import Section from '../components/animation/section';
import Chart from '../components/chart';

export default function Employe(props: any) {
  const yearRef = useRef<HTMLInputElement>(null)
  const [dataRevenue, setDataRevenue] = useState<any>()

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const { current: yearEl } = yearRef
    if (yearEl) {
      const currentYear = new Date().getFullYear()
      if (parseInt(yearEl.value) > currentYear) {
        alert("Xinh lỗi nhưng năm bạn nhập vào không hợp lệ")
        return
      }
      const response = await fetch('/api/revenue', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ year: yearEl.value })
      })

      const data = await response.json()

      const { revenue, message, isSuccessFindRevenueOfYear } = data
      if (isSuccessFindRevenueOfYear) {
        const newData = Object.values(revenue).filter((item: any) => {
          return item != yearEl.value
        })

        setDataRevenue(newData)
      } else {
        alert(message)
      }
    }
  }

  return (
    <Section delay={0.1}>
      <div className="main-content mt-[103px] max-w-[1200px] px-[15px] mx-auto">
        <h1 className="text-3xl text-center">Trang nhân viên kế toán</h1>
        <div className="mt-5">
          <Chart revenuMonths={dataRevenue} />
          <form onSubmit={handleSubmit} className="flex items-center justify-center mt-10">
            <div className="">
              <div className="block mb-2 uppercase tracking-wide text-gray-700 text-xs font-bold" >
                Năm cần lập doanh thu
              </div>
              <div className="flex items-center">
                <div className="flex items-center flex-wrap">
                  <div className="w-[500px] mr-2">
                    <input ref={yearRef} className="appearance-none rounded-lg block w-full bg-gray-200 text-gray-700 border border-gray-200 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Nhập năm mà bạn muốn thống kế doanh thu sổ tiết kiệm" required />
                  </div>
                </div>
                <button className="bg-blue-google h-[46px] text-white px-3 py-2 rounded-md" type="submit">Vẽ biểu đồ</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  )
}
