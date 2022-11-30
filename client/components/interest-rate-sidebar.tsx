import React from 'react'
import Link from 'next/link'
import styles from '../styles/interest-rate-sidebar.module.css'

const Sidebar: React.FC = () => {

  return (
    <div className="interest-rate-sidebar-container w-full tablet:w-[25%] px-0 tablet:px-[15px]">
      <div className="border-[1px] rounded-lg">
        <div className="relative bg-gray-interest-rate rounded-tl-lg h-12 overflow-hidden rounded-tr-lg">
          <div className="w-[50%] left-[-20px] h-12 absolute rounded-tl-lg rounded-tr-lg bg-primary-color skew-x-[40deg]"></div>
          <div
            className="w-[50%] left-[-20px] absolute top-0 right-0 pl-[30px]  h-12 text-[13px] leading-[48px] text-white z-20"
          >LÃI SUẤT</div>
        </div>
        <div className="w-full bg-gray-interest-rate ">
          <table className="w-full">
            <thead>
              <tr className="bg-white w-[200px] h-[60px]">
                <th className="text-[11px] uppercase font-bold text-left py-5 pl-[10px] pr-[5px]">loại tiết kiệm</th>
                <th className="text-[11px] uppercase">1th</th>
                <th className="text-[11px] uppercase">6th</th>
                <th className="text-[11px] uppercase">12th</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-[50px]">
                <td className="text-[13px] pl-[10px] pr-[5px] opacity-[0.6]">Kỳ hạn</td>
                <td className="text-[13px] text-center opacity-[0.6]">5.7</td>
                <td className="text-[13px] text-center opacity-[0.6]">7.8</td>
                <td className="text-[13px] text-center opacity-[0.6]">8.5</td>
              </tr>
              <tr className="bg-white h-[50px]">
                <td className="text-[13px] pl-[10px] pr-[5px] opacity-[0.6]">Thông thường</td>
                <td className="text-[13px] text-center opacity-[0.6]">5.7</td>
                <td className="text-[13px] text-center opacity-[0.6]">7.8</td>
                <td className="text-[13px] text-center opacity-[0.6]">8.5</td>
              </tr>
              <tr className="h-[50px]">
                <td className="text-[13px] pl-[10px] pr-[5px] opacity-[0.6]">Online</td>
                <td className="text-[13px] text-center opacity-[0.6]">5.8</td>
                <td className="text-[13px] text-center opacity-[0.6]">8.5</td>
                <td className="text-[13px] text-center opacity-[0.6]">8.8</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="sidebar-benefits mt-[10px] border-[1px] rounded-lg">
          <h4 className="pt-7 pl-5 pr-4 pb-4 text-[22px]">Công cụ & Tiện ích</h4>
          <div className="px-[10px] py-[20px]">
            <Link className={`${styles.toolItem} flex items-center p-[10px]`} href="/cong-cu/tra-cuu/tiet-kiem">
              <svg className="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28.1428 16.3155C28.089 14.0203 27.1381 11.8375 25.494 10.2351C23.8498 8.63261 21.6434 7.73805 19.3475 7.74317H14.4355C14.1791 6.94495 13.6755 6.24897 12.9974 5.75585C12.3194 5.26273 11.5021 4.99803 10.6637 5.00001V8.42896C9.21572 9.03182 7.96089 10.0204 7.03585 11.287C6.11081 12.5537 5.55101 14.0498 5.41741 15.6126H4.06297C3.78896 15.6145 3.52607 15.7213 3.32836 15.911C3.13065 16.1007 3.01315 16.359 3 16.6327V19.7873C2.99999 20.0701 3.11171 20.3413 3.31081 20.542C3.50992 20.7427 3.78027 20.8566 4.06297 20.8589H6.72041C7.66215 22.3462 9.03894 23.5075 10.6637 24.185V27.1339C10.6659 27.2438 10.7112 27.3484 10.7897 27.4254C10.8682 27.5023 10.9738 27.5454 11.0837 27.5453H14.3327C14.4196 27.5448 14.5042 27.5173 14.5748 27.4666C14.6455 27.4159 14.6986 27.3446 14.727 27.2625L15.5071 24.9051H17.9331"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M9.28369 14.2153V15.2012"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M23.5 26C25.9853 26 28 23.9853 28 21.5C28 19.0147 25.9853 17 23.5 17C21.0147 17 19 19.0147 19 21.5C19 23.9853 21.0147 26 23.5 26Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M27 25L29.7 27.8"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </svg>

              <span className="ml-[14px] text-gray-drak opacity-[0.6] text-[15px] font-semibold">Tra cứu TK tiết kiệm</span>
            </Link>
            <Link className={`${styles.toolItem} flex items-center p-[10px]`} href="/cong-cu/chuyen-tien">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.8047 15.852V20.7018C14.2137 21.735 12.3402 22.2465 10.4449 22.1651C6.93295 22.1651 4.00635 20.6934 4.00635 18.8873V14.0375C4.00635 15.8436 6.89114 17.3153 10.4532 17.3153C12.3458 17.3955 14.2163 16.884 15.8047 15.852V15.852Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M4.00635 14.2883V23.7287C4.00635 25.5349 6.89114 27.0065 10.4449 27.0065C12.3402 27.0879 14.2137 26.5764 15.8047 25.5432"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M15.8046 12.2146V15.8519C14.2161 16.8839 12.3456 17.3954 10.4531 17.3152C6.93277 17.3152 4.00616 15.8436 4.00616 14.0374C3.99795 13.954 3.99795 13.87 4.00616 13.7866C4.25702 12.1142 7.03311 10.7513 10.428 10.7513C12.329 10.6658 14.2091 11.1775 15.8046 12.2146V12.2146Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M15.8047 11.1025V10.7513"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M28.6899 11.1025V10.7513"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M15.8465 5.92664C15.8196 6.04462 15.8056 6.16518 15.8047 6.28619V5.92664H15.8465Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M28.6733 5.92664V6.28619C28.6863 6.16669 28.6863 6.04614 28.6733 5.92664Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M28.673 6.27783V11.1025C28.673 12.917 25.7882 14.3803 22.2345 14.3803C18.6808 14.3803 15.7876 12.917 15.7876 11.1025V6.27783C15.7876 8.09233 18.6724 9.55563 22.2345 9.55563C25.7966 9.55563 28.673 8.09233 28.673 6.27783Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M15.8047 11.1025V10.7513"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M28.673 15.9607V20.8189C28.673 22.625 25.7882 24.0967 22.2261 24.0967C20.3336 24.1769 18.4631 23.6654 16.8746 22.6334C16.5642 22.4369 16.3042 22.1705 16.1154 21.8553C15.9266 21.5402 15.8143 21.1852 15.7876 20.8189V15.9607C15.8137 16.3283 15.9257 16.6848 16.1144 17.0013C16.3032 17.3179 16.5636 17.5858 16.8746 17.7836C18.4656 18.8167 20.3392 19.3282 22.2345 19.2469C25.805 19.2134 28.673 17.7417 28.673 15.9607Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path
                  d="M28.673 20.7854V25.6185C28.673 27.433 25.7882 28.9046 22.2261 28.9046C18.664 28.9046 15.7876 27.433 15.7876 25.6185V20.7854C15.8143 21.1518 15.9266 21.5068 16.1154 21.8219C16.3042 22.137 16.5642 22.4035 16.8746 22.5999C18.4631 23.6319 20.3336 24.1434 22.2261 24.0632C25.805 24.0632 28.673 22.5915 28.673 20.7854Z"
                  stroke="#666666"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
                <path d="M28.6899 11.1025V10.7513" stroke="#666666" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28.6734 11.1025V15.9607C28.6734 17.7752 25.7886 19.2469 22.2349 19.2469C20.3395 19.3283 18.466 18.8168 16.875 17.7836C16.567 17.584 16.3099 17.3152 16.1241 16.9988C15.9383 16.6823 15.8289 16.3269 15.8047 15.9607V11.1025C15.8047 12.917 18.6895 14.3803 22.2516 14.3803C25.8137 14.3803 28.6734 12.917 28.6734 11.1025Z" stroke="#666666" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M28.673 6.2778C28.673 8.09229 25.7882 9.5556 22.2345 9.5556C18.6808 9.5556 15.7876 8.09229 15.7876 6.2778C15.7946 6.15898 15.8142 6.04125 15.8461 5.92661C16.1973 4.25426 18.9316 3 22.2512 3C25.5708 3 28.2967 4.25426 28.673 5.92661C28.6854 6.04334 28.6854 6.16106 28.673 6.2778Z" stroke="#666666" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.76904 7.7076V3.87793" stroke="#666666" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.483 4.71415L7.76884 3L6.05469 4.71415H9.483Z" stroke="#666666" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <span className="ml-[14px] text-gray-drak opacity-[0.6] text-[15px] font-semibold">Chuyển tiền</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Sidebar

