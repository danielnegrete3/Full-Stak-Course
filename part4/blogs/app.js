const express = require('express')
const app = express()
const cors = require('cors')
const {BlogModel} = require('./models/mongodb/blog')
const {createBlogRouter} = require('./routers/blog')
const middleware = require('./utils/middleware')
require('express-async-errors')

app.use(cors())
app.use(express.json())

app.use(middleware.requestLogger)
app.use('/api/blogs', createBlogRouter({BlogModel}))

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = {app}