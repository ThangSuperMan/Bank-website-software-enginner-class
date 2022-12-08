import { Prisma, PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(`users api`);
  // const data = JSON.parse(req.body)
  console.log(req.body)
  let err: Prisma.PrismaClientKnownRequestError | null = null

  const { year } = req.body

  let revenue;

  try {
    revenue = await prisma.revenueSavingsAccount.findFirst({
      where: {
        // @ts-ignore
        year: parseInt(year)
      }
    })

    console.log('revenue')
  } catch (e: any) {
    console.log(e)
  }

  if (revenue !== null) {
    console.log(revenue)
    res.send({ revenue: revenue, message: 'Tìm kiếm thành công', isSuccessFindRevenueOfYear: true })
  } else {
    console.log('we dont have revenue')
    res.send({ message: 'Xinh lỗi nhưng năm bạn nhập vào không hợp lệ', isSuccessFindRevenueOfYear: false })
  }
}
