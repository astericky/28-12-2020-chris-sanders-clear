import mongoose from 'mongoose'

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  numberOfEmployees: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

export default mongoose.model('Organization', organizationSchema)