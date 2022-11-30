import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import InterestRate from '../public/interest-rate.jpeg'
import DealOne from '../public/deal1.jpeg'
import DealTwo from '../public/deal2.jpeg'
import DealThree from '../public/deal3.jpeg'
import DealFour from '../public/deal4.jpeg'
import DealFive from '../public/deal5.png'
import DealSix from '../public/deal6.jpeg'
import styles from '../styles/endow.module.css'

// <div className="deals-container flex items-center justify-between flex-wrap mt-10">
// <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
//   <div className="haha overflow-hidden">
//     <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealOne} alt="deal one" />
//   </div>
//   <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
//     <div className="flex justify-between">
//       <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Th·∫ª </span>
//       <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
//     </div>
//     <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> Black Friday! Ch·ªët ƒë∆°n Online, ho√†n ti·ªÅn si√™u kh·ªßng ƒë·∫øn 500k </div>
//   </div>
// </div>
// <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
//   <div className="overflow-hidden">
//     <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealTwo} alt="deal one" />
//   </div>
//   <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
//     <div className="flex justify-between">
//       <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Th·∫ª </span>
//       <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
//     </div>
//     <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> OCB tri √¢n kh√°ch h√†ng g·ª≠i ti·∫øt ki·ªám t·∫°i qu·∫ßy m·ª´ng T·∫øt Qu√Ω<span className="block">M√£o 2023</span></div>
//   </div>
// </div>
// <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] w-[calc(33.33%-20px)]`}>
//   <div className="overflow-hidden">
//     <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealThree} alt="deal one" />
//   </div>
//   <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
//     <div className="flex justify-between">
//       <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Th·∫ª </span>
//       <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
//     </div>
//     <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> ƒê·∫∑t v√© CGV si√™u r·∫ª c√πng <span className="block">th·∫ª OCB</span>  </div>
//   </div>
// </div>
// <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
//   <div className="overflow-hidden">
//     <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealFour} alt="deal one" />
//   </div>
//   <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
//     <div className="flex justify-between">
//       <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Th·∫ª </span>
//       <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
//     </div>
//     <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> K·∫øt n·ªëi OCB VietQR c√πng Sapo ‚Äì ∆Øu ƒë√£i th·∫£ ga </div>
//   </div>
// </div>
// <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] mr-[30px] w-[calc(33.33%-20px)]`}>
//   <div className="overflow-hidden">
//     <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealFive} alt="deal one" />
//   </div>
//   <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
//     <div className="flex justify-between">
//       <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Th·∫ª </span>
//       <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
//     </div>
//     <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> App hay c√πng Share - C√≥ qu√† c√πng h∆∞·ªüng </div>
//   </div>
// </div>
// <div className={`${styles.dealItem} deal-item mb-[30px] rounded-lg border-gray-border border-[1px] w-[calc(33.33%-20px)]`}>
//   <div className="overflow-hidden">
//     <Image className={`${styles.dealImg} rounded-tl-lg rounded-tr-lg`} src={DealSix} alt="deal one" />
//   </div>
//   <div className="pt-[6px] pl-[15px] pr-[8px] pb-4 p-[15px]">
//     <div className="flex justify-between">
//       <span className="deal-item-tag text-secondary-color uppercase text-xs leading-[22px]"> Th·∫ª </span>
//       <h2 className="text-[#BDBDBD] text-[11px] leading-[22px]"> 21/11/2022 </h2>
//     </div>
//     <div className={`${styles.dealItemTitle} font-[600] text-[15px] h-16 mt-[2px]`}> Deal t·∫∑ng n√†ng ‚Äì thay ng√†n <span className="block">l·ªùi ch√∫c</span> </div>
//   </div>
// </div>
// </div>

interface PropDeal {
  tag: string
  title: string
  imageName: StaticImageData
  createdAt: string
}

const DealItem = ({ tag, title, createdAt, imageName }: PropDeal) => (
  <div className={`${styles.dealItem} deal-item rounded-lg border-gray-border border-[1px]`}>
    <div className="overflow-hidden w-full">
      <Image className={`${styles.dealImg} w-full rounded-tl-lg rounded-tr-lg`} src={DealSix} alt="deal one" />
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
  const [deals, setDeals] = useState<PropDeal[]>([])

  return (
    <div className="px-[15px] w-[75%]">
      <div>
        <div>
          <h1 className="text-black-normal h-[52px] text-[35px]">Ưu Đãi</h1>
        </div>
        <Image className="mt-5 bg-red-200 w-full rounded-lg object-cover" src={InterestRate} alt="Ưu đải" />
      </div>
      <div className="deal grid gap-5 lg:grid-cols-3 tablet:grid-cols-2 md:grid-cols-1  mt-10">
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
        <DealItem tag="OCB OMNI" title="Trải nghiệm mượt – Được thêm quà" createdAt="18/11/2022" imageName={DealOne} />
      </div>
    </div >
  )
}

export default Endow
