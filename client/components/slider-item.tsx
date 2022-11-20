import React from 'react'

interface Props {
  children: React.ReactElement
}

const SliderItem: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full">{children}</div>
  )

}

export default SliderItem
