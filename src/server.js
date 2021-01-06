import express from 'express'
import mongoose from 'mongoose'
import organizationrRouter from './routes/organizations.js'

mongoose.connect(process.env.DATABASE_URL, { useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const app = express()
app.use(express.json())
app.use('/organizations', organizationrRouter)

app.listen(process.env.PORT, () => console.log('Server Started'))

export default app