import mongoose from 'mongoose'
import request from 'supertest'
import organizations from '../src/models/organization.js'
import app from '../test-server.js'


describe('Organization', () => {
  beforeEach(async (done) => {
    await mongoose.connection.collection('organizations').deleteMany({})
    done()
  })

  afterAll(async (done) => {
    await mongoose.connection.close()
    done()
  })

  it('should create a new organization', async () => {
    const res = await request(app)
      .post('/organizations')
      .send({
        name: 'Google',
        startDate: '2020/04/03',
        numberOfEmployees: 10000,
        type: 'Green'
      })

      expect(res.statusCode).toEqual(201)
      expect(res.body.name).toEqual('Google')
  })

  it('should display organizations that match string earch criteria', async () => {
    await request(app)
      .post('/organizations')
      .send({
        name: 'Google',
        startDate: '2020/04/03',
        numberOfEmployees: 10000,
        type: 'Green'
      })

    const res = await request(app)
      .get('/organizations?text=Google')

    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(1)
  })

  it('should display organizations that match integer search criteria', async () => {
    await request(app)
      .post('/organizations')
      .send({
        name: 'Google',
        startDate: '2020/04/04',
        numberOfEmployees: 10000,
        type: 'Green'
      })

    const res = await request(app)
      .get('/organizations?numberOfEmployees=10000')

    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(1)
  })

  it('should display organizations that match date search criteria', async () => {
    await request(app)
      .post('/organizations')
      .send({
        name: 'Google',
        startDate: '2020/04/05',
        numberOfEmployees: 10000,
        type: 'Green'
      })

    const res = await request(app)
      .get('/organizations?date=2020/04/05')

    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(1)
  })
})