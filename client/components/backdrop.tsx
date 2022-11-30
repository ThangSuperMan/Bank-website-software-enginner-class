import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactElement
  onClick: () => void
}

const Backdrop: React.FC<Props> = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute flex items-center justify-center bg-[#000000e1] z-20 inset-0 w-[100vw] h-[100vh]"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>{children}</div>
    </motion.div>
  )
}

export default Backdrop
