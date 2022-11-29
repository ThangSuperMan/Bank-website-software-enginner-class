import express, { Request, Response, NextFunction } from 'express'
import pool from '../database/connection'
import { User } from '../schemas/main'

function getUsers(request: Request, response: Response, next: NextFunction) {
  console.log(`getUsers`)
  const queryPrepare: string = `
    select *
    from users;
  `
  pool.query(queryPrepare, (err: Error, results: any) => {
    if (err) {
      throw err
    }

    const { rows } = results
    response.status(200).json(rows)
  })
}

function getUserById(request: Request, response: Response, next: NextFunction) {
  console.log('getUserById')
  const id = request.params.id
  console.log(`id: ${id}`)
  const queryPrepare = `
    select *
    from users
    where id = $1
  `

  pool.query(queryPrepare, [id], (err: Error, results: any) => {
    if (err) {
      throw err
    }
    const { rows } = results
    response.status(200).json({ user: rows })
  })
}

function createUser(user: User): boolean {
  console.log(`createUser model`)
  console.log(user)
  const queryPrepare = `
    insert into users (first_name, last_name, account_no, password, gender, city)
    values ($1, $2, $3, $4, $5, $6)
  `
  pool.query(queryPrepare, [user.firstName, user.lastName, user.accountNo, user.password, user.gender, user.city], (err: Error, results: any) => {
    if (err) {
      // throw err
      return false
    }
  })
  return true
}

export {
  getUsers,
  getUserById,
  createUser
}
