import React, { useState } from 'react'
import { motion } from 'framer-motion'

const BankEmploye: React.FC = () => {
  console.log(BankEmploye);
  const [users, setUsers] = useState([])

  const handleChangeInputSearch: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    console.log('handleChangeInputSearch');
    const searchEl = e.target
    console.log(searchEl.value);
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: searchEl.value })
    }
    const response = await fetch('/api/get-savings-book', fetchOptions)
    const data = await response.json()

    if (searchEl.value === '') {
      setUsers([])
    } else {
      setUsers(data.users)
    }
    console.log(data.users);
  }

  return (
    <div className="mt-[103px] mb-52 max-w-[1200px] px-[15px] mx-auto">
      <h1 className="text-3xl text-center">Trang nhân viên ngân hàng</h1>
      <div className="max-w-[700px] mx-auto mt-8">
        <div className="text-2xl underline decoration-red-200 decoration-4 underline-offset-8 ">Tra cứu sổ tiết kiệm</div>
        <div className="flex items-center justify-center mt-5">
          <form>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input onChange={handleChangeInputSearch} type="search" id="default-search" className="block w-[700px] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Tìm kiếm theo tên khách hàng" autoComplete="off" required />
            </div>
          </form>
        </div>
        {users?.length > 0 ? (
          users?.map((user: any, index: number) => {
            const { SavingsBook } = user
            console.log('SavingsBook');
            console.log(SavingsBook[0]);

            if (SavingsBook[0]) {
              return (
                <motion.div
                  key={index}
                  initial={{ x: 0, y: 20, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 p-5 shadow-lg shadow-black-500/30 rounded-lg bg-gray-200 ">
                  <div>
                    <h4 className="font-bold">Thông tin khách hàng</h4>
                    <div>Mã số tài khoản: {user.accountNo}</div>
                    <div>Tên: {user.firstName}</div>
                    <div>Họ: {user.lastName}</div>
                    <div>Giới tính: {user.gender}</div>
                    <div className="savings-book">
                      <div className="bg-gray-500 my-2 mx-auto h-[1px]"></div>
                      <h4 className="font-bold">Thông tin sổ tiết kiệm</h4>
                      <div>Thời gian gữi tiết kiệm: {SavingsBook[0].timeSavings} tháng</div>
                      <div>Loại hình thức gữi tiền: <span>{SavingsBook[0].typeSavings}</span></div>
                    </div>
                  </div>
                </motion.div>
              )
            } else {
              return (
                <motion.div key={index} initial={{ x: 0, y: 20, opacity: 0 }} animate={{ x: 0, y: 0, opacity: 1 }} transition={{ duration: 0.3 }} className="mt-2 p-5 rounded-lg bg-gray-200 ">
                  <div>
                    <h4 className="font-bold">Thông tin khách hàng</h4>
                    <div>Tên: {user.firstName}</div>
                    <div>Họ: {user.lastName}</div>
                    <div>Giới tính: {user.gender}</div>
                  </div>
                </motion.div>
              )
            }
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default BankEmploye
