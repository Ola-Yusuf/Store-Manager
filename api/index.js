import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import route from './routes'

const app = express()

app
  .use(cors())
  .use('/api/v1', route)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }));

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3500

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${port}`)
})
