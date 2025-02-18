const express = require('express')
const app = express()
const cors = require('cors')
const {BlogModel} = require('./models/mongodb/blog')
const {createBlogRouter} = require('./routers/blog')
const middleware = require('./utils/middleware')
require('express-async-errors')
const {createUserRouter} = require('./routers/users')
const {UserModel} = require('./models/mongodb/user')
const {createAuthRouter} = require('./routers/auth')
app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)
app.use('/api/blogs', createBlogRouter({BlogModel,UserModel}))
app.use('/api/users', createUserRouter({UserModel}))
app.use('/api/auth', createAuthRouter({UserModel}))

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = {app}