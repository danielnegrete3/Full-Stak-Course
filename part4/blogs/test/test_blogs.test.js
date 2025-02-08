const { test, after, beforeEach } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const {app} = require('../app')
const api = supertest(app)


const helper = require('./test_helper')

const {Blog} = require('../models/mongodb/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  await Blog.insertMany(helper.initialblogs)
})

test('Blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Blog has id',async ()=>{
  await api.get('/api/blogs')
  .expect(200)
  .expect('Content-Type', /application\/json/)
  .expect(res=>{
      assert.ok(res.body[0].hasOwnProperty("id"),'the object of blog has id')
      assert.ok(!res.body[0].hasOwnProperty("_id"),'the object of blog dont has _id')
      assert.ok(!res.body[0].hasOwnProperty("_v"),'the object of blog dont has _v')
    }
  )
  
})

test('Insert a new blog',async ()=>{
  const blogsBefore = await helper.blogsInDb()
  const res = await api.post('/api/blogs')
    .send(helper.newBlog)
    .expect(201)

  const {id,likes,...newBlog} = res.body
  const blogsAfter = await helper.blogsInDb()
  assert.ok(blogsAfter.length > blogsBefore.length,'The number of blogs its more')
  assert.deepEqual(newBlog,helper.newBlog,'was added')
})

test('Likes are in 0 if they are not added manually', async ()=>{
  const res = await api.get('/api/blogs')
        .expect(200)
  assert.deepStrictEqual(res.body[0].likes,0,'The blogs has likes in 0')
})

test('If the fields are missing when adding is answered with status 400',async ()=>{
  await api.post('/api/blogs')
    .send({})
    .expect(400)
})

test('Can delete a blog',async ()=>{
  const blogsBefore = await helper.blogsInDb()
  await api.delete(`/api/blogs/${blogsBefore[0].id}`)
  const blogsAfter = await helper.blogsInDb()

  assert.ok(blogsAfter.length < blogsBefore.length,'The number of blogs its less')
  assert.deepStrictEqual(blogsBefore[1],blogsAfter[0],'was deleted')
})

test('Can update a blog', async ()=>{
  const blogsBefore = await helper.blogsInDb()
  const res = await api.put(`/api/blogs/${blogsBefore[0].id}`)
              .send(helper.newBlog)
  const {likes,id,...newBlog} = res.body

  assert.deepStrictEqual(newBlog,helper.newBlog,'was updated')
})

after(async () => {
  await mongoose.connection.close()
})