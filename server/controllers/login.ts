import express, { Request, Response, NextFunction } from 'express'
import { readUserByAccountNumber } from '../models/user'
import { User } from '../schemas/main'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'

interface InfoAccount {
  accountNo: number
  password: string
}

function checkUsernameAndPassword(userInfoFromClient: InfoAccount, userInfoFromDB: InfoAccount): boolean {
  console.log('checkUsernameAndPassword')
  console.log('is User')
  console.log(userInfoFromClient)
  console.log(userInfoFromDB)
  if (userInfoFromClient.accountNo === userInfoFromDB.accountNo && userInfoFromClient.password === userInfoFromDB.password) {
    return true
  }
  return false
}

async function handleLogin(request: Request, response: Response, next: NextFunction) {
  console.log('handleLogin')
  const { accountNo, password } = request.body
  console.log('----------')
  console.log(`accoutNo: ${accountNo}`)
  console.log(`password: ${password}`)
  console.log('----------')

  try {
    const data: any = await readUserByAccountNumber(accountNo)
    console.log('user')
    let isExistAccountNumber: boolean = true
    const { error, row } = data
    // Does not have the data
    if (row == null && error == null) isExistAccountNumber = false

    if (isExistAccountNumber) {
      const userInfoFromDB: InfoAccount = {
        accountNo: row.account_no,
        password: row.password,
      }
      const userInfoFromClient: InfoAccount = {
        accountNo: parseInt(accountNo),
        password: password
      }
      const isUser: boolean = checkUsernameAndPassword(userInfoFromClient, userInfoFromDB)
      if (isUser) {
        // Generate an access token
        const accessToken = jwt.sign({ id: userInfoFromDB.accountNo }, "mySecretKey")
        let options = {
          maxAge: 1000 * 60 * 15, // would expire after 15 minutes
          httpOnly: true, // The cookie only accessible by the web server
          signed: true // Indicates if the cookie should be signed
        }
        // response.cookie('accessToken', accessToken, options)
        response.status(200).json({ accountNo: userInfoFromDB.accountNo, accessToken })
      } else {
        console.log(`isUser: ${isUser}`)
        response.status(400).json({ message: 'Username and password is incorrect!' })
      }
    } else {
      response.status(400).json({ message: 'Username and password is incorrect!' })
    }
  } catch (err: any) {
    console.log(`Error in login controller`)
    console.log(err)
  }

}

export {
  handleLogin
}
