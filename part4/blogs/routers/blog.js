const express = require('express')
const {BlogController} = require('../controllers/blog')

const createBlogRouter = ({BlogModel}) => {
    const BlogRouter = express.Router()
    const blogController = new BlogController({BlogModel})
    
    BlogRouter.get('/', blogController.getAll)
    BlogRouter.post('/', blogController.create)
    
    return BlogRouter
}

module.exports = {createBlogRouter}