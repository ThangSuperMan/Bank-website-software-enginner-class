import React, { useRef, useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Section from '../components/animation/section'
import TransitionPage from '../components/animation/page-transition'
import RegisterSuccessModal from '../components/register-success-modal'

interface PropsRegister {
  firstName: string
  lastName: string
  accountNo: string
  password: string
  confirmPassword: string
  gender: string
  city: string
}

const baseURL = 'http://localhost:3001'

function isNumber(n: any) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n)
}

const Register: React.FC = () => {
  const [isSuccessRegister, setIsSuccessRegister] = useState<boolean>(false)
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>("")
  const [accountNo, setAccountNo] = useState<string>("")
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const accountNoRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)
  const genderRef = useRef<HTMLSelectElement>(null)
  const cityRef = useRef<HTMLSelectElement>(null)

  function close() {
    setIsRegisterModalOpen(false)
  }

  function open() {
    setIsRegisterModalOpen(true)
  }

  function isSamePassword(originalPassword: string, confirmPassword: string): boolean {
    if (originalPassword === confirmPassword) {
      return true
    }
    return false
  }

  const clearInputValues = () => {
    const { current: firstNameEl } = firstNameRef
    const { current: lastNameEl } = lastNameRef
    const { current: accountNoEl } = accountNoRef
    const { current: passwordEl } = passwordRef
    const { current: confirmPasswordEl } = confirmPasswordRef

    if (firstNameEl && lastNameEl && accountNoEl && passwordEl && confirmPasswordEl) {
      firstNameEl.value = ''
      lastNameEl.value = ''
      accountNoEl.value = ''
      passwordEl.value = ''
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const { current: firstNameEl } = firstNameRef
    const { current: lastNameEl } = lastNameRef
    const { current: accountNoEl } = accountNoRef
    const { current: passwordEl } = passwordRef
    const { current: confirmPasswordEl } = confirmPasswordRef
    const { current: genderEl } = genderRef
    const { current: cityEl } = cityRef

    if (firstNameEl && lastNameEl && accountNoEl && passwordEl && confirmPasswordEl && genderEl && cityEl) {
      const registerInfo: PropsRegister = {
        firstName: firstNameEl.value,
        lastName: lastNameEl.value,
        accountNo: accountNoEl.value,
        password: passwordEl.value,
        confirmPassword: confirmPasswordEl.value,
        gender: genderEl.value,
        city: cityEl.value
      }

      const isMatchPassword: boolean = isSamePassword(registerInfo.password, registerInfo.confirmPassword)

      if (isMatchPassword && isNumber(registerInfo.accountNo)) {
        if (isNumber(registerInfo.accountNo)) {

          const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify(registerInfo)
          })

          console.log('resonse');
          console.log(response);
          const data = await response.json()
          console.log(data);
          interface PropsRegisterResponse {
            message: string
            isRegisterSuccess: boolean
          }
          const { message, isRegisterSuccess }: PropsRegisterResponse = data
          console.log(isRegisterSuccess);
          if (isRegisterSuccess) {
            clearInputValues()
            alert(message)
          } else {
            alert(message)
          }
        }
        return
      } else {
        alert('Mật khẩu xác nhận của bản không khớp với mật khẩu ở phía trên, xin vui lòng nhập lại thông tin!')
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Đăng ký</title>
        <meta name="description" content="" />
      </Head>
      <main>
        <TransitionPage>
          <Section delay={0.1}>
            <div>
              <div className="register-container flex items-center flex-col pb-10 mt-[73px] max-w-[1200px] px-[15px] mx-auto">
                <h2 className="text-3xl mt-3 mb-8">Đăng ký</h2>
                <div className="w-full flex items-center justify-center">
                  <form onSubmit={handleSubmit} className="w-full max-w-lg">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Tên
                        </label>
                        <input ref={firstNameRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="first-name" type="text" placeholder="Jane" required />
                        <p className="text-red-500 text-xs italic">Vui lòng hãy điền đầy đử mục này.</p>
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Họ
                        </label>
                        <input ref={lastNameRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="last-name" type="text" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Mã số tài khoản
                        </label>
                        <input ref={accountNoRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="account_no" type="text" placeholder="******************" required /> </div>
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Mật khẩu
                        </label>
                        <input ref={passwordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="password" type="password" placeholder="******************" />
                        <p className="text-gray-600 text-xs italic">Hãy cố gắng viết một mật khẩu thật sự đủ dài.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Nhập lại mật khẩu
                        </label>
                        <input ref={confirmPasswordRef} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="confirm_password" type="password" placeholder="******************" required />
                        <p className="text-gray-600 text-xs italic">Hãy chắc rằng nhập lại mật khẩu của bạn khớp với ở trên.</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-2">
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Thành Phố
                        </label>
                        <div className="relative">
                          <select ref={cityRef} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city">
                            <option>Hồ Chí Minh</option>
                            <option>Đà Nẵng</option>
                            <option>Hà Nội</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                          Giới Tính
                        </label>
                        <div className="relative">
                          <select ref={genderRef} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="gender">
                            <option>Nam</option>
                            <option>Nữ</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={() => isRegisterModalOpen ? close() : open()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      type="submit"
                      className="w-full px-3 py-2 mt-2 text-white rounded-md bg-secondary-color"
                    >Đăng Ký
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </Section>
        </TransitionPage>
        {isRegisterModalOpen && isSuccessRegister && (
          <RegisterSuccessModal accountNo={accountNo} handleClose={close}
            firstName={
              firstName === "" ? "" : firstName
            } />
        )}
      </main>
    </div >
  )
}

export default Register
