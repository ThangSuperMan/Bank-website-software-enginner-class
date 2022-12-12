import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`user login route`);
  // const data = JSON.parse(req.body)
  console.log(typeof JSON.parse(req.body))

  const { accountNo } = JSON.parse(req.body)

  let user;

  try {
    user = await prisma.users.findUnique({
      where: {
        // @ts-ignore
        accountNo: parseInt(accountNo)
      },
      include: {
        SavingsBook: true
      }
    })

    console.log('revenue')
  } catch (e: any) {
    console.log(e)
  }

  if (user !== null) {
    console.log(user)
    res.send({ user: user, isUser: true })
  } else {
    console.log('we dont have revenue')
    res.send({ message: 'Xinh lỗi nhưng tên tài khoản không tồn tại vui lòng sử dụng một tên tài khoản hợp lệ' })
  }
}
