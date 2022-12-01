import express, { Request, Response, NextFunction } from 'express'
import { User } from '../schemas/main'
import { createUser } from '../models/user'

function handleRegister(request: Request, response: Response, next: NextFunction) {
  console.log('handleRegister controller')

  const user: User = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    accountNo: parseInt(request.body.accountNo),
    password: request.body.password,
    gender: request.body.gender,
    city: request.body.city
  }

  let isSuccess: any = createUser(user)
  // const errorMessages = []
  if (isSuccess) {
    response.status(201).json({ message: 'Successfully, created the user' })
  } else {
    response.status(500).json({ message: 'Not Successfully, create user' })
  }
}

export {
  handleRegister
}
