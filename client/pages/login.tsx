import React, { useRef, useState } from 'react'
import Section from '../components/animation/section'
import Image from 'next/image'
import { motion } from 'framer-motion'
import GoogleIcon from '../public/google-icon.png'

const baseURL = 'http://localhost:3001'

interface LoginAccountInfo {
  accountNo: string
  password: string
}

const Login: React.FC = () => {
  const accountNoREf = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  function refreshInputsValue() {
    const { current: accountNoEl } = accountNoREf
    const { current: passwordEl } = passwordRef
    if (accountNoEl && passwordEl) {
      accountNoEl.value = ''
      passwordEl.value = ''
    }
  }

  async function postLoginAccoun(loginAccountInfo: LoginAccountInfo) {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginAccountInfo)
    }
    const response = await fetch(`${baseURL}/login`, fetchOptions)
    const data = await response.json()
    if (response.status === 200) {
      refreshInputsValue()
      setErrorMessage('')
      console.log(data);
      console.log(data.accessToken);
    } else if (response.status === 400) {
      console.log(data);
      const { message } = data
      setErrorMessage(message)
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    console.log('handleSubmit');

    const { current: usernameEl } = accountNoREf
    const { current: passwordEl } = passwordRef

    let loginAccountInfo: LoginAccountInfo

    if (usernameEl && passwordEl) {
      loginAccountInfo = {
        accountNo: usernameEl.value,
        password: passwordEl.value,
      }
      postLoginAccoun(loginAccountInfo)
    }
  }

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
                <input ref={accountNoREf} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="123" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                  Mật khẩu
                </label>
                <input ref={passwordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
              </div>
            </div>
            <div className="diagnostics text-red-400">{errorMessage}</div>
            <div className="flex items-center p-1 bg-blue-400 login-by-google-account">
              <div className="p-1 bg-white">
                <Image src={GoogleIcon} width={40} height={40} alt="Google icon" />
              </div>
              <span className="ml-2 text-white">Đăng nhập bằng tài khoản google</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="w-full px-3 py-2 mt-2 text-white rounded-md bg-secondary-color"
            >Đăng nhập
            </motion.button>
          </form>
        </div>
      </div>
    </Section>
  )
}

export default Login
