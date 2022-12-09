import React from 'react'
import { motion } from 'framer-motion'

interface Props {
  children: React.ReactElement
  delay: number
}

const Section: React.FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 10, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: 0, y: 10, opacity: 0, transition: { duration: 1 } }}
      transition={{ duration: 0.8, delay: delay }}
    >
      {children}
    </motion.div>
  )
}


export default Section
