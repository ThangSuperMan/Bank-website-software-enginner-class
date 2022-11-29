import express, { Request, Response, NextFunction } from 'express'
import bodyParser from 'body-parser'
import { handleRegister } from './controllers/register'
import cors from 'cors'

const port = 3001
let corsOptions = {
  origin: ['http://localhost:3000']
}
const app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  console.log('homepage')
  try {
    throw new Error("haha error")
  } catch (err: any) {
    console.log(err)
    response.status(500).json({ err: `Error: ${err.message}` })
  }
})

app.get('/', (request: Request, response: Response, next: NextFunction) => {
  response.json({ info: 'Homoepage' })
})

app.post('/users/register', handleRegister)

app.listen(port, () => {
  console.log(`Listening on the port: ${port}`)
})
