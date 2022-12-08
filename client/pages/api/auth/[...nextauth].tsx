import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { createEnumMember } from 'typescript'
import { w } from 'chart.js/dist/chunks/helpers.core'
// import prisma from '../../../lib/prismadb'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      // @ts-ignore
      clientId: process.env.GOOGLE_CLIENT_ID,
      // @ts-ignore
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any, req: any) {

        // Add logic here to look up the user from the credentials supplied
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        const { accountNo, password } = credentials
        console.log(`accountNo: ${accountNo}`);
        console.log(`password: ${password}`);

        try {
          console.log('user data from db');
          const user = await prisma.users.findUniqueOrThrow({
            where: {
              accountNo: parseInt(accountNo)
            }
          })
          console.log(typeof user);

          console.log(user);
          if (user) {
            console.log('have user');
            // Any object returned will be saved in `user` property of the JWT
            // return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
            // return user

          } else {
            // If you return null or false then the credentials will be rejected
            return null
            // You can also Reject this callback with an Error or with a URL:
            // throw new Error('error message') // Redirect to error page
            // throw '/path/to/redirect'        // Redirect to a URL
          }
        } catch (e: any) {
          console.log(e);
        }

        console.log('here');

        // const response = await fetch('/api/revenue', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({})
        // })
        //
        // const user = await response.json()
        //

      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  // secret: "test",
  // jwt: {
  //   secret: "ksdkfsldferSDFSDFSDf",
  // },
  // pages: {
  //   signIn: "/login"
  // }

}

export default NextAuth(authOptions)
