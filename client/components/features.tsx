import React from 'react'
import Image from 'next/image'
import FeatureOne from '../public/feature1.png'
import FeatureTwo from '../public/feature2.png'
import FeatureThree from '../public/feature3.png'
import FeatureFour from '../public/feature4.png'
import FeatureFive from '../public/feature5.png'
import styles from '../styles/features.module.css'

interface FeatureItemProps {
  content: string
  imageSrc: any
}

const FeatureItem = ({ content, imageSrc: imageLink }: FeatureItemProps) => (
  <div className={`${styles.featureItem} flex flex-col items-center`}>
    <div className={`${styles.featureInner} w-[72px] h-[72px] mb-[14px]`}>
      <Image src={imageLink} alt="Feature one" />
    </div>
    <span className="text-[15px]">{content}</span>
  </div>
)

const Features: React.FC = () => {
  return (
    <div className={styles.featureContainer}>
      <FeatureItem content="OMNI Cá Nhân" imageSrc={FeatureOne} />
      <FeatureItem content="Tiền vay" imageSrc={FeatureTwo} />
      <FeatureItem content="Thẻ" imageSrc={FeatureThree} />
      <FeatureItem content="Tài khoản" imageSrc={FeatureFour} />
      <FeatureItem content="Tiết kiệm" imageSrc={FeatureFive} />
    </div>
  )
}

export default Features
