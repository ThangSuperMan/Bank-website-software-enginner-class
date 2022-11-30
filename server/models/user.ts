import { connection } from '../database/connection'
import { User } from '../schemas/main'

function createUser(user: User): boolean {
  const db = connection()
  console.log(`createUser model`)
  console.log(user)
  const sql = `
    insert into users (first_name, last_name, account_no, password, gender, city)
    values ($1, $2, $3, $4, $5, $6)
  `

  db.run(sql, [user.firstName, user.lastName, user.accountNo, user.password, user.gender, user.city], (err: any) => {
    if (err) {
      console.log(`Error here: ${err}`)
      return false
    }

    console.log(`Inserted a row user`)
  })

  return true
}

export {
  createUser
}
