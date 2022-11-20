import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SliderItem from './slider-item'
import SlideOne from '../public/slide1.jpeg'
import SlideTwo from '../public/slide2.jpeg'
import SlideThree from '../public/slide3.jpeg'
import SlideFour from '../public/slide4.jpeg'

interface DotButtonProps {
  selected: boolean
  onClick: () => void
}

export const DotButton = ({ selected, onClick }: DotButtonProps) => {
  return (
    <button
      className={`${selected ? "bg-secondary-color w-8" : "bg-gray-dot-navigation w-2"} ease-linear duration-300 rounded-full h-2 mx-1 flex items-center`}
      type="button"
      onClick={onClick}
    />
  )
}

const EmlaCarouselContainer = () => {
  const emblaSlideRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [scrollSnaps, setScrollSnaps] = useState([1, 1, 1, 1])
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { align: 'center' },
    [Autoplay({ delay: 3000 })]
  )

  const scrollTo = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index)
    }
  }

  const onSelect = () => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap)
  }

  useEffect(() => {
    console.log('just effect just being executed!');
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi])

  console.log('render carousel container');

  return (
    <div className="relative">
      <div className="viewport h-500px" ref={viewportRef}>
        <div className="embla-container flex">
          <div ref={emblaSlideRef} className="emable-slide min-w-full mr-3">
            <SliderItem>
              <Image src={SlideOne} className="object-cover" alt="Slider 1" />
            </SliderItem>
          </div>
          <div ref={emblaSlideRef} className="emable-slide min-w-full h-auto mx-3">
            <SliderItem>
              <Image src={SlideTwo} alt="Slider 1" />
            </SliderItem>
          </div>
          <div ref={emblaSlideRef} className="emable-slide min-w-full h-auto mx-3">
            <SliderItem>
              <Image src={SlideThree} alt="Slider 1" />
            </SliderItem>
          </div>
          <div ref={emblaSlideRef} className="emable-slide min-w-full h-auto ml-3">
            <SliderItem>
              <Image src={SlideFour} alt="Slider 1" />
            </SliderItem>
          </div>
        </div>
      </div>
      <div className="scroll-snaps mt-5 flex items-center justify-center">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div >
  )
}

export default EmlaCarouselContainer 
