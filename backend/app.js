import express from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { tournamentsRouter } from './routes/tournaments.js'

const PORT = process.env.PORT || 1234
const app = express()
app.use(corsMiddleware())
app.use(express.json())

app.use('/tournaments', tournamentsRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
