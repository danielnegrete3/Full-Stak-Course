const express = require('express')
const {AuthController} = require('../controllers/auth')

const createAuthRouter = ({UserModel}) => {
    const AuthRouter = express.Router()
    const authController = new AuthController({UserModel})

    AuthRouter.post('/login', authController.login)

    return AuthRouter
}

module.exports = {createAuthRouter}