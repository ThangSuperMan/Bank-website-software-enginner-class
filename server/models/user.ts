import sqlite3 from 'sqlite3'
import { connection } from '../database/connection'
import { User } from '../schemas/main'

interface Props {
  error: any
  row: any
}

function readUserByAccountNumber(accountNo: number): Promise<Props> {
  const db: sqlite3.Database = connection()
  const sql = `
  select * from users 
  where account_no = $1`

  return new Promise((resolve, reject) => {
    db.get(sql, [accountNo], (err: any, row: any) => {
      if (err) {
        reject({ error: err, row: row })
      } else if (row == undefined) {
        resolve({ error: null, row: null })
      } else {
        resolve({ error: null, row: row })
      }
    })
  })
}

async function createUser(user: User) {
  const db: sqlite3.Database = connection()
  let isExistAccountNumber: boolean = true
  const sql = `
    insert into users (first_name, last_name, account_no, password, gender, city)
    values ($1, $2, $3, $4, $5, $6)`

  try {
    const data: Props = await readUserByAccountNumber(user.accountNo)
    const { error, row } = data
    if (row == undefined && error == null) isExistAccountNumber = false
    if (!isExistAccountNumber) {
      db.run(sql, [user.firstName, user.lastName, user.accountNo, user.password, user.gender, user.city], (err: any) => {
        if (err) {
          console.log(`Error here: ${err}`)
          return false
        }

        console.log(`Inserted a row user`)
      })
    }
  } catch (err: any) {
    console.log(`Error in user model`)
    console.log(err)
  }

  return true
}

export {
  createUser
}
