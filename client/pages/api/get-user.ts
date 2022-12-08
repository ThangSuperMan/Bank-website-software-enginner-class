import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('user-get route')
  console.log('req.body')
  console.log(req.body)
  const user = await prisma.users.findUnique({
    where: {
      accountNo: 123
    }
  })
  console.log(user)
  res.json({ user })
}

