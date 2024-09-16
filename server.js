import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import apiRouter from './src/server/api.js'
import { configDotenv } from 'dotenv'
import process from 'node:process'

configDotenv()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api', apiRouter)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})