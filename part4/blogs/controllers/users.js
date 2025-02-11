const bcrypt = require('bcrypt')
const User = require('../models/user')

class UserController {
    constructor({userModel}){
        this.userModel = userModel
        this.create = this.create.bind(this)
    }

    async create(req,res){
        const { username, name, password } = request.body

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const userData = {
            username,
            name,
            passwordHash,
        }
        
        const savedUser = await this.userModel.create({input:userData})

        response.status(201).json(savedUser)
    }
}

module.exports = {UserController}