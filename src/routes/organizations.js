import express from 'express'
import Organization from '../models/organization.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const organization = new Organization({
    ...req.body,
    startDate: Date(req.body.startDate),
  })

  try {
    const newOrganization = await organization.save()
    res.status(201).json(newOrganization)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/', getOrganizations, (req, res) => {
  res.send(res.organizations)
})

async function getOrganizations(req, res, next) {
  let organizations
  try {
    organizations = await Organization.find({ $text: { $search: req.query.search }})

    if (organizations == null) {
      return res.status(404).json({ message: 'Cannot find organization' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.organizations = organizations
  next()
}

export default router
