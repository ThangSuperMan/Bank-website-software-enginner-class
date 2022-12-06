import React, { useRef, useState } from 'react'
import Section from '../components/animation/section'
import Image from 'next/image'
import { motion } from 'framer-motion'
import GoogleIcon from '../public/google-icon.png'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const baseURL = 'http://localhost:3001'

interface User {
  name: string | null | undefined
  email: string | null | undefined
  image: string | null | undefined
}

interface LoginAccountInfo {
  accountNo: string
  password: string
}

const Login: React.FC = () => {
  const router = useRouter()
  const accountNoREf = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { data: session } = useSession()
  console.log('login compo');
  console.log(session);

  // if (session) {
  //   router.push('/dashboard', undefined, { scroll: true })
  // }

  function refreshInputsValue() {
    const { current: accountNoEl } = accountNoREf
    const { current: passwordEl } = passwordRef
    if (accountNoEl && passwordEl) {
      accountNoEl.value = ''
      passwordEl.value = ''
    }
  }
  const handleGoogleSignin = () => {
    console.log('handleGoogleSignn')
    signIn("google", { callbackUrl: "http://localhost:3000/login" })
  }


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    console.log('handleSubmit login');
    e.preventDefault()
    console.log('handleSubmit');
    const { current: accountNoEl } = accountNoREf
    const { current: passwordEl } = passwordRef

    let loginAccountInfo: LoginAccountInfo

    if (accountNoEl && passwordEl) {
      console.log(`accountNo: ${accountNoEl.value}`);
      const status = await signIn("credentials", {
        accountNo: accountNoEl.value,
        password: passwordEl.value,
        redirect: false,
      })

      console.log(status);
    }
  }

  console.log('just rendered the login compo');

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

export default Login
