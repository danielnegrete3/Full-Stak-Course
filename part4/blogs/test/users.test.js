const { test, after, beforeEach, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const {app} = require('../app')
const api = supertest(app)

const helper = require('./test_helper')
const {User} = require('../models/mongodb/user')

describe('functions without users in db',{},()=>
{

    beforeEach(async () => {
        await User.deleteMany({})
      
    })
    
    test('Create a new user successfull', async ()=>{
        const res = await api.post('/api/users')
                            .send(helper.user)
                            .expect(201)

        const {body} = res
        const {id,blogs,passwordHash,...newUser} =body
        const {password,...user} = helper.user
        assert.deepEqual(newUser,user)
    })
    test('Create a new user error password', async ()=>{
        const res = await api.post('/api/users')
                            .send({
                                username:'dan',
                                name:'erase un',
                                password:'s'
                            })
                            .expect(400)
        const {body} = res
        assert.deepEqual(body,{error:'password must be at least 3 characters long'})
    })
    test('Create a new user error username', async ()=>{
        const res = await api.post('/api/users')
                            .send({
                                username:'d',
                                name:'erase un',
                                password:'sword'
                            })
                            .expect(400)
        const {body} = res
        assert.deepEqual(body,{error:'User validation failed: username: Username must be at least 3 characters long'})
    })
    test('Error same username', async () =>{
        await api.post('/api/users')
            .send(helper.user)
            .expect(201)

        const res = await api.post('/api/users')
            .send(helper.user)
            .expect(400)

            const {body} = res
            assert.deepEqual(body,{error:'expected `username` to be unique'})
    })
})

after(async () => {
  await mongoose.connection.close()
})