const express = require('express')
const {UserController} = require('../controllers/users')

const createUserRouter = ({UserModel}) => {
    const BlogRouter = express.Router()
    const userController = new UserController({UserModel})
    
    BlogRouter.post('/', userController.create)
    BlogRouter.get('/', userController.getAll)
    // BlogRouter.get('/:id', userController.getById)
    // BlogRouter.put('/:id', userController.update)
    // BlogRouter.delete('/:id', userController.delete)
    
    return BlogRouter
}

module.exports = {createUserRouter}