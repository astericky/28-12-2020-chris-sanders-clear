import express from 'express'
import Organization from '../models/organization.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const organization = new Organization({
    ...req.body,
    startDate: new Date(req.body.startDate),
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
  let searchResult = []
  let textSearchResult
  let dateSearchResult
  let numberOfEmployeeSearchResult
  let { text = null, date = null, numberOfEmployees = null } = req.query

  if (text) {
    textSearchResult = await Organization.find({ $text: { $search: text } })
    searchResult = [
      ...searchResult,
      ...textSearchResult,
    ]
  }

  // To search for the date
  // 1. check if date exists
  // 2. put the search term into a date to search
  // 3. and a next date to search
  // 4. increate the next date to search by 1 day
  // 5. then find all organizations that are greater than or equal to the date to search
  // 6. or less than the next date to search which starts at 12am the next day
  if (date) {
    let dateToSearch = new Date(date)
    let nextDateToSearch = new Date(date)

    // set the nextDate to search to the next day after the search date
    nextDateToSearch.setDate(nextDateToSearch.getDate() + 1)

    dateSearchResult = await Organization.find({ startDate: { $gte: dateToSearch, $lt: nextDateToSearch } })
    searchResult = [
      ...searchResult,
      ...dateSearchResult,
    ]
  }

  if (numberOfEmployees) {
    numberOfEmployeeSearchResult = await Organization.find({ numberOfEmployees: numberOfEmployees })
    searchResult = [
      ...searchResult,
      ...numberOfEmployeeSearchResult,
    ]
  }

  res.organizations = searchResult
  next()
}

export default router