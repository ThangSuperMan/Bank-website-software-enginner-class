import sqlite3 from 'sqlite3'

function initModel(db: sqlite3.Database) {
  console.log('initModel')
  const queryPrepare = `
    create table if not exists users(
      id integer primary key autoincrement
      , first_name text not null
      , last_name text not null
      , account_no integer not null
      , password text not null
      , gender text not null
      , city text not null
    );
  `
  db.exec(queryPrepare, (err: any) => {
    if (err) {
      throw err
    }
  })
}

export default initModel
