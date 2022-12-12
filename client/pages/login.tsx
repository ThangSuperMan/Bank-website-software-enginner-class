import React, { useRef, useState } from 'react'
import Section from '../components/animation/section'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import GoogleIcon from '../public/google-icon.png'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FiEdit } from 'react-icons/fi'

interface LoginProps {
  accountNo: number
  password: string
}

interface User {
  firstName: string
  lastName: string
  accountNo: string
  gender: string
}

interface SavingBook {
  typeSavings: string
  timeSavings: string
}

const Login: React.FC = () => {
  const router = useRouter()
  const [isUser, setIsUser] = useState<boolean>(false)
  const [isShowSavingsBook, setIsShowSavingsBook] = useState<boolean>(false)
  const [user, setUser] = useState<User>()
  const [savingsBook, setSavingsBook] = useState<SavingBook>()
  const accountNoREf = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { data: session } = useSession()
  console.log(session);

  if (session) {
    router.push('/dashboard', undefined, { scroll: true })
  }

  const handleGoogleSignin = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/login" })
  }

  const handleLogout = () => {
    console.log('handleLogout');
    setIsUser(prev => !prev)
  }

  const handleWatchSavingsBook = () => {
    setIsShowSavingsBook(prev => !prev)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    console.log('handleSubmit in login page');
    e.preventDefault()
    const { current: accountNoEl } = accountNoREf
    const { current: passwordEl } = passwordRef
    if (accountNoEl && passwordEl) {
      const loginInfo: LoginProps = {
        accountNo: parseInt(accountNoEl.value),
        password: passwordEl.value
      }

      const response = await fetch('/api/login/user', {
        method: 'POST',
        body: JSON.stringify(loginInfo)
      })
      const data = await response.json()
      const { user, message } = data
      if (user) {
        const { SavingsBook } = user
        console.log(SavingsBook[0]);
        if (user.password == passwordEl.value) {
          console.log('savingsBook data');
          setSavingsBook(SavingsBook[0])
          console.log(savingsBook);
          setUser(user)
          setIsUser(prev => !prev)
        } else if (user.password !== passwordEl.value) {
          alert('Mật khẩu sai, vui lòng nhập lại mật khẩu của bạn')
        }
      } else {
        alert(message)
      }
    }

  }

  {
    if (isUser) {
      // Render user page
      return (
        <Section delay={0.1}>
          <div>
            <div className="max-w-[540px] rounded-2xl p-[15px] mx-auto mt-[103px] bg-gray-100">
              <h2 className="text-3xl mt-5 text-center">Trang khách hàng</h2>
              <div className="flex items-center justify-center">
              </div>
              <div className="mt-5">
                <h3 className="">Chào mừng bạn quay trở lại: {user?.firstName}</h3>
                <p className="mt-2">Số tài khoản: {user?.accountNo} </p>
                <div className=" flex items-center justify-between mt-2">
                  <p className="">Tên: {user?.firstName}</p>
                  <div><FiEdit /></div>
                </div>
                <div className=" flex items-center justify-between mt-2">
                  <p>Họ: {user?.lastName}</p>
                  <div><FiEdit /></div>
                </div>
                <div className=" flex items-center justify-between mt-2">
                  <p className="">Giới tính: {user?.gender}</p>
                  <div><FiEdit /></div>
                </div>
                <button onClick={handleWatchSavingsBook} className="bg-blue-google text-white mt-5 px-3 py-2 rounded-md mx-auto">Xem thông tin sổ tiết kiệm</button>
                <button onClick={handleLogout} className="bg-gray-700 text-white ml-2 mt-5 px-3 py-2 rounded-md mx-auto">Đăng xuất</button>
              </div>
            </div>
            <AnimatePresence>
              {isShowSavingsBook && (
                <motion.div
                  className="mt-5"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <div className="savings-book max-w-[540px] rounded-2xl p-[15px] mx-auto bg-gray-100">
                    <h4 className="font-bold">Thông tin sổ tiết kiệm</h4>
                    <div>Thời gian gữi tiết kiệm: {savingsBook?.timeSavings} tháng</div>
                    <div>Loại hình thức gữi tiền: <span>{savingsBook?.typeSavings}</span></div>
                    <div className="bg-gray-500 my-2 mx-auto h-[1px]"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Section>
      )
      // render the login page is user does not login
    } else {
      return (
        <Section delay={0.1}>
          <div className="login-container flex items-center mt-[103px] mb-52 max-w-[1200px] px-[15px] mx-auto">
            <div className="w-full flex items-center flex-col">
              <h2 className="text-3xl mb-8">Đăng nhập</h2>
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                      Mã số tài khoản
                    </label>
                    <input ref={accountNoREf} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="123" required />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                      Mật khẩu
                    </label>
                    <input ref={passwordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" required />
                  </div>
                </div>
                <div className="diagnostics text-red-400"></div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                  className="w-full px-3 py-2 mb-3 text-white rounded-md bg-secondary-color"
                >Đăng nhập
                </motion.button>
                <div onClick={handleGoogleSignin} className="flex items-center p-1 bg-blue-400 login-by-google-account">
                  <div className="p-1 bg-white">
                    <Image src={GoogleIcon} width={30} height={30} alt="Google icon" />
                  </div>
                  <span className="ml-8 text-white">Đăng nhập bằng tài khoản google</span>
                </div>
              </form>
            </div>
            <button className="bg-blue-200" onClick={() => signOut()}>sign out</button>
          </div>
        </Section>
      )
    }
  }
}

export default Login
