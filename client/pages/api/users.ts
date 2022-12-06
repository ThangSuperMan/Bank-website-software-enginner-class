import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`users api`);
  const data = JSON.parse(req.body)
  let err: Prisma.PrismaClientKnownRequestError | null = null

  try {
    const createdUser = await prisma.users.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        accountNo: parseInt(data.accountNo),
        password: data.password,
        gender: data.gender,
        city: data.city,
      }
    })
  } catch (e: any) {
    console.log(e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(`error here:`);
      if (e.code === 'P2002')
        console.log(`error when create the new user`);
      console.log(e);
      err = e
    }
  }

  if (err !== null) {
    res.status(500).send({
      message: `Đăng ký tài khoản không thành công vì tên tài khoản: ${data.accountNo} đã có người đăng ký vui lòng hãy chọn một tên tài khoản khác, xin cảm ơn!`,
      isRegisterSuccess: false
    })
  } else {
    res.send({
      message: "Đăng ký tài khoản thành công",
      isRegisterSuccess: false
    })
  }
}
