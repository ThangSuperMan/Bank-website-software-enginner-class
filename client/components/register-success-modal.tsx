import React from 'react'
import Backdrop from './backdrop'
import styles from '../styles/register-success-modal.module.css'
import { motion } from 'framer-motion'


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  enter: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
  }
}

interface Props {
  handleClose: () => void
  accountNo: string
}

const RegisterSuccessModal: React.FC<Props> = ({ handleClose, accountNo }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="enter"
        exit={{ opacity: 1, y: '50vh' }}
      >
        <h1 className="text-white">RegisterSuccessModal</h1>
        <p className="text-center text-[15px]">Chúng mừng bạn, bãn vừa mới đăng ký tài khoản thành công với mã tài khoản là:{accountNo}</p>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop >
  )
}

export default RegisterSuccessModal
