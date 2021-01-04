import express from 'express'
import mongoose from 'mongoose'
import organizationrRouter from './src/routes/organizations.js'


mongoose.connect('mongodb://localhost:27017/organizations', { useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to Database'))

const app = express()
app.use(express.json())
app.use('/organizations', organizationrRouter)

export default app