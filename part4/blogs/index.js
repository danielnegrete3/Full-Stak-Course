const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const {BlogModel} = require('./models/mongodb/blog')
const {createBlogRouter} = require('./routers/blog')

app.use(cors())
app.use(express.json())

app.use('/api/blogs', createBlogRouter({BlogModel}))


const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} http://localhost:${PORT}`)
})