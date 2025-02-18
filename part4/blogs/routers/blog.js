const express = require('express')
const {BlogController} = require('../controllers/blog')
const { createJWTMiddleware } = require('../utils/middleware')

const createBlogRouter = ({BlogModel,UserModel}) => {
    const BlogRouter = express.Router()
    const blogController = new BlogController({BlogModel,UserModel})
    
    BlogRouter.get('/', blogController.getAll)
    BlogRouter.get('/:id', blogController.getById)
    
    // middleware to need auth functions 
    BlogRouter.use(createJWTMiddleware({UserModel}))
    BlogRouter.post('/', blogController.create)
    BlogRouter.put('/:id', blogController.update)
    BlogRouter.delete('/:id', blogController.delete)
    
    return BlogRouter
}

module.exports = {createBlogRouter}