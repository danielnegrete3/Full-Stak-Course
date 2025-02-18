const { test, after, beforeEach, before, describe } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const {app} = require('../app')
const api = supertest(app)

const helper = require('./test_helper')

const {Blog,BlogModel} = require('../models/mongodb/blog')
const {User, UserModel} = require('../models/mongodb/user')

let user
let token
let otherUser

describe('Basic test of api blogs',{},()=>{

  before(async ()=>{
    const resUser = await api.post('/api/users')
      .send(helper.user)

    user = await UserModel.findById({id:resUser.body.id})
  
    const resLog = await api.post('/api/auth/login')
      .send(helper.user)
  
    token = resLog.body.token

  })
  
  
  beforeEach(async () => {
    await Blog.deleteMany({})
    // delete the blog to user
    await UserModel.update({data:{blogs:[]},id:user.id})
    // insert blogs 
    for(blog of helper.initialblogs){
      await BlogModel.create({input:{...blog,author:user.name,user:user.id},user})
    }
    
  })

  after( async() =>{
    await User.deleteMany({})
  })
  
  test('Blogs are returned as json', async () => {
    const blogs = await BlogModel.getAll()
    console.log('estamos aqui',blogs)
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
      .set('Authorization', `Bearer ${token}`)
      .send(helper.newBlog)
      .expect(201)

    const blogsAfter = await helper.blogsInDb()
    assert.ok(blogsAfter.length > blogsBefore.length,'The number of blogs its more')
  })
  
  test('Likes are in 0 if they are not added manually', async ()=>{
    const res = await api.get('/api/blogs')
          .expect(200)
    assert.deepStrictEqual(res.body[0].likes,0,'The blogs has likes in 0')
  })
  
  test('If the fields are missing when adding is answered with status 400',async ()=>{
    await api.post('/api/blogs')
      .set('Authorization', `Bearer ${token}`)
      .send({})
      .expect(400)
  })
  
  test('Can delete a blog',async ()=>{
    const blogsBefore = await helper.blogsInDb()
    await api.delete(`/api/blogs/${blogsBefore[0].id}`).set('Authorization', `Bearer ${token}`)
    const blogsAfter = await helper.blogsInDb()
  
    assert.ok(blogsAfter.length < blogsBefore.length,'The number of blogs its less')
    assert.deepStrictEqual(blogsBefore[1],blogsAfter[0],'was deleted')
  })
  
  test('Can update a blog', async ()=>{
    const blogsBefore = await helper.blogsInDb()
    const res = await api.put(`/api/blogs/${blogsBefore[0].id}`)
                .set('Authorization', `Bearer ${token}`)
                .send(helper.newBlog)
    const {likes,id,...newBlog} = res.body
    const compBlog = {
      url:helper.newBlog.url,
      title:helper.newBlog.title,
      author : user.name,
      user: ''
    }
    newBlog.user = ''
    console.log(newBlog,compBlog)
    assert.deepStrictEqual(newBlog,compBlog,'was updated')
  })
})

describe('Auth verify',{},()=>{
  before(async ()=>{
    const resUser = await api.post('/api/users')
      .send(helper.user)

      console.log(resUser.body)
    user = await UserModel.findById({id:resUser.body.id})

    const resOther = await api.post('/api/users')
      .send(helper.otherUser)

    otherUser = await UserModel.findById({id:resOther.body.id})
  
    const resLog = await api.post('/api/auth/login')
      .send(helper.otherUser)
  
    token = resLog.body.token

  })
  
  
  beforeEach(async () => {
    console.log(user)
    await Blog.deleteMany({})
    // delete the blog to user
    await UserModel.update({data:{blogs:[]},id:user.id})
    // insert blogs 
    for(blog of helper.initialblogs){
      await BlogModel.create({input:{...blog,author:user.name,user:user.id},user})
    }
    
  })

  after( async() =>{
    await User.deleteMany({})
  })

  test('Other user cant delete a blog',async ()=>{
    const blogsBefore = await helper.blogsInDb()
    const res  = await api.delete(`/api/blogs/${blogsBefore[0].id}`)
              .set('Authorization', `Bearer ${token}`)
    const blogsAfter = await helper.blogsInDb()
  
    assert.ok(res.status === 400)
    assert.deepStrictEqual(res.body, {error: "User does not own this blog"} )
    assert.ok(blogsAfter.length === blogsBefore.length,'The number of blogs its the same')
    assert.deepStrictEqual(blogsBefore[0],blogsAfter[0],'wasnt deleted')
  })
  
  test('Other user cant update a blog', async ()=>{
    const blogsBefore = await helper.blogsInDb()
    const res  = await api.put(`/api/blogs/${blogsBefore[0].id}`)
              .set('Authorization', `Bearer ${token}`)
              .send(helper.newBlog)

    assert.ok(res.status === 400)
    assert.deepStrictEqual(res.body, {error: "User does not own this blog"} )
  })

})

after(async () => {
  await mongoose.connection.close()
})