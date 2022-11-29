import { Pool } from 'pg'

const pool = new Pool({
  user: 'thangphan',
  host: 'localhost',
  database: 'bank',
  password: '',
  port: 5432,
  max: 10,
})

export default pool
