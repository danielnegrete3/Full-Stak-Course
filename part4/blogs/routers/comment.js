const express = require('express')
const {CommentController} = require('../controllers/comment')
const { createJWTMiddleware } = require('../utils/middleware')

const createCommentRouter = ({Model,UserModel}) => {
    const Router = express.Router()
    const controller = new CommentController({Model,UserModel})
    
    Router.get('/', controller.getAll)
    Router.get('/:id', controller.getById)
    
    // middleware to need auth functions 
    Router.use(createJWTMiddleware({UserModel}))
    Router.post('/', controller.create)
    Router.put('/:id', controller.update)
    Router.delete('/:id', controller.delete)
    
    return Router
}

module.exports = {createCommentRouter}