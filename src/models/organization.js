import mongoose from 'mongoose'

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
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

organizationSchema.index({
  name: 'text',
  startDate: 'text',
  numberOfEmployees: 'text',
  type: 'text'
})

export default mongoose.model('Organization', organizationSchema)