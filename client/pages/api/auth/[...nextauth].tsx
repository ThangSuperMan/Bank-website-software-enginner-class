import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

const prisma = new PrismaClient()

const getUser = async (accountNo: string, password: string) => {
  console.log('getUser ');
  // const user = await prisma.users.findUnique({
  //   where: {
  //     accountNo: 123
  //   }
  // })
  const response = await fetch('/api/get-user', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ accountNo, password })
  })

  const user = await response.json()
  console.log(user);
  return user
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
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
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        const { accountNo, password } = credentials
        console.log(`accountNo: ${accountNo}`);
        console.log(`password: ${password}`);

        const user = await getUser(accountNo, password)
        // console.log('user from the db');
        console.log(user);

        console.log('here');
        if (user) {
          return user
        }
        console.log('another here');

        return null

        // const response = await fetch('/api/get-user', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({ accountNo: credentials.accountNo, password: credentials.password })
        // })
        //
        // const user = await response.json()
        // console.log(user);
        //
        // const user = await prisma.users.findUnique({
        //   where: {
        //     accountNo: 123
        //   }
        // })
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // console.log('user from the api');
        // console.log(user);

        // try {
        //   console.log('user data from db');
        //   const user = await prisma.users.findUniqueOrThrow({
        //     where: {
        //       accountNo: parseInt(accountNo)
        //     }
        //   })
        //   console.log(typeof user);
        //
        //   console.log(user);
        //   if (user) {
        //     console.log('have user');
        //     // Any object returned will be saved in `user` property of the JWT
        //     // return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        //     // return user
        //
        //   } else {
        //     // If you return null or false then the credentials will be rejected
        //     return null
        //     // You can also Reject this callback with an Error or with a URL:
        //     // throw new Error('error message') // Redirect to error page
        //     // throw '/path/to/redirect'        // Redirect to a URL
        //   }
        // } catch (e: any) {
        //   console.log(e);
        // }

        // console.log('here');
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
  // Signin credentials from the login page
  // pages: {
  //   signIn: "/login"
  // }

}

export default NextAuth(authOptions)
