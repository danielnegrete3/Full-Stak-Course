const express = require('express')
const {BlogController} = require('../controllers/blog')

const createBlogRouter = ({BlogModel}) => {
    const BlogRouter = express.Router()
    const blogController = new BlogController({BlogModel})
    
    BlogRouter.get('/', blogController.getAll)
    
    return BlogRouter
}

module.exports = {createBlogRouter}