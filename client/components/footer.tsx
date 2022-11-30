import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Googleplay from '../public/googleplay.png'
import Appstore from '../public/appstore.png'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-footer-gray-light text-[15px] overflow-hidden">
        <div className="flex items-center justify-between py-5 max-w-[1200px] px-[15px] mx-auto">
          <span className="mt-[9px] mr-6 font-semibold">Đăng ký nhận thông tin từ OCB</span>
          <div className="flex items-center">
            <span className="mt-[9px] mr-6 font-semibold">
              Cài đặt ứng dụng OCB OMNI
            </span>
            <div>
            </div>
            <Image className="mr-[10px]" src={Googleplay} width={100} height={30} alt="Google play" />
            <Image src={Appstore} width={100} height={30} alt="appstore" />
          </div>
        </div>
      </div>
      <div className="bg-primary-color text-white">
        <div className="flex items-center justify-between py-[13px] max-w-[1200px] mx-auto">
          <h2>&#169; Bản quyền thuộc về Ngân hàng Phương Đông</h2>
          <ul className="flex items-center">
            <li className="px-[15px]"><Link className="hover:text-secondary-color ease-in duration-100" href="/">Tuân thủ đạo luật FATCA</Link></li>
            <li className="px-[15px]"><Link className="hover:text-secondary-color ease-in duration-100" href="/">Quy định sử dụng</Link></li>
            <li className="px-[15px]"><Link className="hover:text-secondary-color ease-in duration-100" href="/">Chính sách bảo mật</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
