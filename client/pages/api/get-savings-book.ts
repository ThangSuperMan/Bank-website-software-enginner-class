import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName } = req.body
  const users = await prisma.users.findMany({
    where: {
      firstName: {
        startsWith: firstName
      }
    },
    include: {
      SavingsBook: true
    }
  })

  console.log(users)
  res.json({ users })
}
