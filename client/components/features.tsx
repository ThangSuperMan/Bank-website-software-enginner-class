import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import FeatureOne from '../public/feature1.png'
import FeatureTwo from '../public/feature2.png'
import FeatureThree from '../public/feature3.png'
import FeatureFour from '../public/feature4.png'
import FeatureFive from '../public/feature5.png'
import styles from '../styles/features.module.css'

interface FeatureItemProps {
  content: string
  link: string
  imageSrc: any
}

const FeatureItem = ({ content, link, imageSrc: imageLink }: FeatureItemProps) => (
  <Link href={link} className={`${styles.featureItem} relative h-[132px] flex flex-col items-center`}>
    <div className={`${styles.featureInner} w-[72px] h-[72px] mb-[14px]`}>
      <Image src={imageLink} alt="Feature one" />
    </div>
    <span className="text-[15px] absolute top-[calc(100%-20px)]">{content}</span>
  </Link >
)

const Features: React.FC = () => {
  const centerSlideIndex = 2
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { align: 'center' },
  )

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(centerSlideIndex)
    }
  }, [emblaApi])

  return (
    <div>
      <div className="viewport" ref={viewportRef}>
        <div className={styles.featureContainer}>
          <FeatureItem content="OMNI Cá Nhân" link="/ca-nhan" imageSrc={FeatureOne} />
          <FeatureItem content="Tiền vay" link="/tien-vay" imageSrc={FeatureTwo} />
          <FeatureItem content="Thẻ" link="/the" imageSrc={FeatureThree} />
          <FeatureItem content="Tài khoản" link="/tai-khoan" imageSrc={FeatureFour} />
          <FeatureItem content="Tiết kiệm" link="/tiet-kiem" imageSrc={FeatureFive} />
        </div>
      </div>
    </div>
  )
}

export default Features
