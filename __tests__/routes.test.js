import mongoose from 'mongoose'
import request from 'supertest'
import app from '../test-server.js'



describe('Organization', () => {
  afterAll(async (done) => {
    
    await mongoose.connection.collection('organization').deleteMany({})
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

  it('should display organizations that match search criteria', async () => {
    const res = await request(app)
      .get('/organizations?search=10000')

    expect(res.statusCode).toEqual(200)
    expect(res.body.length).toEqual(1)
  })
})
