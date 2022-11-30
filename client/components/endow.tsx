import React from 'react'
import Image, { StaticImageData } from 'next/image'
import InterestRate from '../public/interest-rate.jpeg'
import DealOne from '../public/deal1.jpeg'
import DealTwo from '../public/deal2.jpeg'
import DealThree from '../public/deal3.jpeg'
import DealFour from '../public/deal4.jpeg'
import DealFive from '../public/deal5.png'
import DealSix from '../public/deal6.jpeg'
import styles from '../styles/endow.module.css'

interface PropDeal {
  tag: string
  title: string
  imageName: StaticImageData
  createdAt: string
}

const DealItem = ({ tag, title, createdAt, imageName }: PropDeal) => (
  <div className={`${styles.dealItem} deal-item rounded-lg border-gray-border border-[1px]`}>
    <div className="overflow-hidden w-full">
      <Image className={`${styles.dealImg} w-full rounded-tl-lg rounded-tr-lg`} src={imageName} alt="deal one" />
    </div>
    <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
      <div className="flex justify-between">
        <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]">{tag}</span>
        <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]">{createdAt}</h2>
      </div>
      <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}>{title}</div>
    </div>
  </div>
)

const Endow: React.FC = () => {
  return (
    <div className="tablet:px-[15px] mt-2 w-full tablet:w-[75%]">
      <div>
        <div>
          <h1 className="text-black-normal flex-wrap h-[52px] text-[35px]">Ưu Đãi</h1>
        </div>
        <Image className="mt-5 bg-red-200 w-full rounded-lg object-cover" src={InterestRate} alt="Ưu đải" />
      </div>
      <div className="deal grid gap-5 lg:grid-cols-3 tablet:grid-cols-2 md:grid-cols-1  mt-10">
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealTwo} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealThree} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealFour} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealFive} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealSix} />
      </div>
    </div >
  )
}

export default Endow
