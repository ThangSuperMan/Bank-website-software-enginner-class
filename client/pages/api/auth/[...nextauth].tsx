import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { resolve } from 'path'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      credentials: {},
      name: "Credentials",
      async authorize(credentials: any, req: any) {
        const { accountNo, password } = credentials
        console.log(`accountNo: ${accountNo}`);
        console.log(`password: ${password}`);
        console.log(req);

        const user = await prisma.users.findUnique({
          where: {
            accountNo: parseInt(accountNo)
          }
        })
        console.log(user);
        return user


        throw Error('My error :)')
      }
    })
  ],
  pages: {
    signIn: "/login"
  }

}

export default NextAuth(authOptions)
