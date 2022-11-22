import React from 'react'

const Login: React.FC = () => {
  return (
    <div className="login-container flex items-center mt-[103px] mb-52 max-w-[1200px] px-[15px] mx-auto">
      <div className="w-full flex items-center flex-col">
        <h2 className="text-3xl mb-8">Đăng nhập</h2>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Mã số tài khoản
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="abc" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Mật khẩu
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
            </div>
          </div>
          <button type="submit" className="w-full px-3 py-2 mt-2 text-white rounded-md bg-secondary-color">Đăng nhập</button>
        </form>
      </div>
    </div>

  )
}

export default Login
