import React from 'react'
import Backdrop from './backdrop'
import styles from '../styles/register-success-modal.module.css'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SuccessCheckmar from '../public/success-checkmark.png'

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
  firstName: string
  accountNo: string
}

const RegisterSuccessModal: React.FC<Props> = ({ handleClose, accountNo, firstName }) => {
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
        <Image src={SuccessCheckmar} alt="Checkmark success" />
        <p className="mt-3 text-center text-[15px]">Chúng mừng bạn {firstName}, bãn vừa mới đăng ký tài khoản thành công
          <span className="block">với mã tài khoản là: {accountNo}</span>
        </p>
      </motion.div>
    </Backdrop >
  )
}

export default RegisterSuccessModal
