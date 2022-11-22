import React from 'react'
import Image from 'next/image'
import InterestRate from '../public/interest-rate.jpeg'
import DealOne from '../public/deal1.jpeg'
import DealTwo from '../public/deal2.jpeg'
import DealThree from '../public/deal3.jpeg'
import DealFour from '../public/deal4.jpeg'
import DealFive from '../public/deal5.png'
import DealSix from '../public/deal6.jpeg'
import styles from '../styles/endow.module.css'

const Endow: React.FC = () => {

  return (
    <div className="px-[15px] w-[75%]">
      <div>
        <div>
          <h1 className="text-black-normal h-[52px] text-[35px]">Ưu Đãi</h1>
        </div>
        <Image className="mt-5 w-full rounded-lg object-cover" src={InterestRate} alt="Ưu đải" />
      </div>
      <div className="deals-container flex items-center justify-between flex-wrap mt-10">
        <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
          <div className="haha overflow-hidden">
            <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealOne} alt="deal one" />
          </div>
          <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
            <div className="flex justify-between">
              <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Thẻ </span>
              <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
            </div>
            <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> Black Friday! Chốt đơn Online, hoàn tiền siêu khủng đến 500k </div>
          </div>
        </div>
        <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
          <div className="overflow-hidden">
            <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealTwo} alt="deal one" />
          </div>
          <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
            <div className="flex justify-between">
              <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Thẻ </span>
              <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
            </div>
            <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> OCB tri ân khách hàng gửi tiết kiệm tại quầy mừng Tết Quý<span className="block">Mão 2023</span></div>
          </div>
        </div>
        <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] w-[calc(33.33%-20px)]`}>
          <div className="overflow-hidden">
            <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealThree} alt="deal one" />
          </div>
          <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
            <div className="flex justify-between">
              <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Thẻ </span>
              <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
            </div>
            <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> Đặt vé CGV siêu rẻ cùng <span className="block">thẻ OCB</span>  </div>
          </div>
        </div>
        <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
          <div className="overflow-hidden">
            <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealFour} alt="deal one" />
          </div>
          <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
            <div className="flex justify-between">
              <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Thẻ </span>
              <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
            </div>
            <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> Kết nối OCB VietQR cùng Sapo – Ưu đãi thả ga </div>
          </div>
        </div>
        <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
          <div className="overflow-hidden">
            <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealFive} alt="deal one" />
          </div>
          <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
            <div className="flex justify-between">
              <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Thẻ </span>
              <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
            </div>
            <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> App hay cùng Share - Có quà cùng hưởng </div>
          </div>
        </div>
        <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] w-[calc(33.33%-20px)]`}>
          <div className="overflow-hidden">
            <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealSix} alt="deal one" />
          </div>
          <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
            <div className="flex justify-between">
              <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Thẻ </span>
              <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
            </div>
            <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> Deal tặng nàng – thay ngàn <span className="block">lời chúc</span> </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Endow
