import React, { useEffect, useRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import LogoLoginIcon from '../public/OMNI_Icon.webp'
import { signIn } from 'next-auth/react'

interface LinkItemProps {
  href: string
  path: string
  children: React.ReactElement
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <div className={`${active ? 'text-secondary-color underline underline-offset-8' : undefined}`}>
        {children}
      </div>
    </NextLink>
  )
}

interface NavbarProps {
  asPath: string
}

const Navbar: React.FC<NavbarProps> = ({ asPath }) => {
  const loginBtnRef = useRef<HTMLDivElement>(null)
  const loginSubmenuRef = useRef<HTMLDivElement>(null)

  const handleMouseEnterBtnLogin = () => {
    const { current: loginSubmenuEl } = loginSubmenuRef
    if (loginSubmenuEl) {
      loginSubmenuEl.style.display = 'block'
      loginSubmenuEl.style.opacity = '100%'
    }
  }

  const handleMouseLeaveBtnLogin = () => {
    const { current: loginSubmenuEl } = loginSubmenuRef
    if (loginSubmenuEl) {
      loginSubmenuEl.style.display = 'none'
    }
  }

  useEffect(() => {
    const { current: loginBtnEl } = loginBtnRef
    if (loginBtnEl) {
      loginBtnEl.addEventListener('mouseenter', handleMouseEnterBtnLogin)
      loginBtnEl.addEventListener('mouseleave', handleMouseLeaveBtnLogin)
    }
  }, [])

  return (
    <nav className="navbar-container fixed top-0 right-0 left-0 z-10 bg-white sm:flex items-center justify-between border-slate-200 border-[1px] py-[15px] px-[30px]">
      <div className="navbar-container__left flex items-center">
        <NextLink href="/">
          <Logo />
        </NextLink>
        <ul className="flex">
          <li className={`${styles.navItem} nav-item py-[7.5px] px-[10px] hover:text-secondary-color`}>
            <LinkItem href="/" path={asPath}>
              <span>Cá Nhân</span>
            </LinkItem>
          </li>
          <li className={`${styles.navItem} nav-item py-[7.5px] px-[10px] hover:text-secondary-color`}>
            <LinkItem href="/business" path={asPath}>
              <span>Doanh Nghiệp</span>
            </LinkItem>
          </li>
          <li className={`${styles.navItem} nav-item py-[7.5px] px-[10px] hover:text-secondary-color`}>
            <LinkItem href="/register" path={asPath}>
              <span>Đăng Ký</span>
            </LinkItem>
          </li>
        </ul>
      </div>
      <div ref={loginBtnRef} className="navbar-container__right relative">
        <NextLink href="login">
          <div className=" flex items-center py-[7.5px] px-2 border-gray-light border-[1px] rounded-lg">
            <Image
              src={LogoLoginIcon}
              alt="Logo Icon Login"
              height={24}
              width={24}
            />
            <div className="text-[13px] text-gray-dark ml-2">
              Đăng nhập ORANGE OMNI
            </div>
          </div>
        </NextLink>
        <div className="absolute top-full w-full h-[10px] opacity-0"></div>
        <div ref={loginSubmenuRef} className="navbar-container__right-sub-login opacity-0 absolute z-50 bg-white py-2 border-[1px] rounded-lg top-[49px] left-0 right-0">
          <div className="p-2 text-gray-dark hover:bg-blue-100">
            <NextLink href="/login">Cá Nhân</NextLink>
          </div>
          <div className="bg-gray-seperate-line-light mx-auto h-[1px] w-[calc(100%-20px)]"></div>
          <div className="p-2 text-gray-dark hover:bg-blue-100">
            <NextLink href="/employe">Nhân Viên Kế Toán</NextLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
