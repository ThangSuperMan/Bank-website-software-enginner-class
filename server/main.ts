import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import sqlite3 from 'sqlite3'
import initModel from './models/init'
import { connection } from './database/connection'
import { handleRegister } from './controllers/register'
import { handleLogin } from './controllers/login'
import cookieParser from 'cookie-parser'

const port = 3001
let corsOptions = {
  origin: ['http://localhost:3000']
}

function init() {
  const db: sqlite3.Database = connection()
  initModel(db)
}

init()
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))
// app.use(cookieParser())

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  console.log('homepage')
  response.status(500).json({ quote: 'hello' })
})

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.json({ info: 'Homoepage' })
})

app.post('/login', handleLogin)

app.post('/users/register', handleRegister)



app.listen(port, () => {
  console.log(`Listening on the port: ${port}`)
})
