import sqlite3 from 'sqlite3'

function connection(): sqlite3.Database {
  const db = new sqlite3.Database("./bank.db", (err: any) => {
    if (err) {
      throw err
    }
    console.log('Connected to the sqlite database')
  })

  return db
}

export {
  connection
}

