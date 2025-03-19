const express = require('express')
const {TestController} = require('../controllers/test')

const createTestRouter = ({BlogModel,UserModel}) => {
    const testRouter = express.Router()
    const testController = new TestController({BlogModel,UserModel})

    testRouter.post('/reset',testController.reset)
    return testRouter
}

module.exports = {createTestRouter}