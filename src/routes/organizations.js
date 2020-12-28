import express from 'express'
import Organization from '../models/organization'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const organizations = await Organization.find()
    res.json(organizations)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', (req, res) => {
  return 'BOOM2!'
})

export default router