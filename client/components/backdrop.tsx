import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactElement
  onClick: () => void
}

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const { current: backdropEl } = backdropRef
    if (backdropEl && onClick) {
      console.log('backdropEl && onClick');
      backdropEl.addEventListener('click', onClick)
    }
  }, [])

  return (
    <motion.div
      className="absolute flex items-center justify-center bg-[#000000e1] z-20 inset-0 w-[100vw] h-[100vh]"
      ref={backdropRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default Backdrop
