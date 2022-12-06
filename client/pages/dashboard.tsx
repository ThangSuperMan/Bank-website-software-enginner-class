import { unstable_getServerSession } from 'next-auth';
import { getSession, signOut, useSession } from 'next-auth/react'
import React from 'react'
import Section from '../components/animation/section';
import { authOptions } from './api/auth/[...nextauth]'

const Dashboard = () => {
  const { data: session, status } = useSession({ required: true })
  console.log(`status: ${status}`);
  console.log(session);

  if (status === 'authenticated') {
    return (
      <Section delay={0.1}>
        <div>
          <div className="max-w-[1200px] rounded-2xl p-[15px] mx-auto mt-[103px] bg-gray-100">
            <div className="flex items-center justify-center">
              <img className="rounded-full text-center" src={session.user?.image!} alt="Avatar google người dùng" />
            </div>
            <div className="mt-5">
              <h3 className="text-center">Chào mừng bạn quay trở lại: {session.user?.name}</h3>
              <p className="text-center mt-2">Địa chỉ email: {session.user?.email}</p>
              <div className="text-center">
                <button className="bg-blue-google text-white mt-5 px-3 py-2 rounded-md mx-auto" onClick={() => signOut()}>Đăng xuất</button>
              </div>
            </div>
          </div>
          <h2 className="text-3xl mt-5 text-center">Trang điều khiển</h2>
        </div>
      </Section>
    )
  }
}

// export const getServerSideProps = async ({ req: any, res: any }) => {
//   return {
//     props: {
// session: await unstable_getServerSession(req, res, authOptions)
//   }
// }
// }


// export const getServerSideProps = async (context: any) => {
//   const session = await getSession(context)
//   console.log(session);
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/login'
//       }
//     }
//   }
//
//   return {
//     props: { session }
//   }
// }

export default Dashboard
