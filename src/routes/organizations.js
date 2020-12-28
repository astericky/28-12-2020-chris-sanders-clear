import express from 'express'
import Organization from '../models/organization.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const organizations = await Organization.find()
    res.json(organizations)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.post('/', async (req, res) => {
  const organization = new Organization({
    ...req.body,
  })

  try {
    const newOrganization = await organization.save()
    res.status(201).json(newOrganization)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

export default router
