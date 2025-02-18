const bcrypt = require('bcrypt')

class UserController {
    constructor({UserModel}){
        this.UserModel = UserModel
        this.create = this.create.bind(this)
        this.getAll = this.getAll.bind(this)
    }

    async create(req,res){
        const { username, name, password } = req.body
        if(password.length < 3){
            const error =  new Error('password must be at least 3 characters long')
            error.name = 'ounError'
            error.userMessage = 'password must be at least 3 characters long'
            throw error
        }
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(password, saltRounds)

        const userData = {
            username,
            name,
            passwordHash,
        }
        
        const savedUser = await this.UserModel.create({input:userData})

        res.status(201).json(savedUser)
    }

    async getAll(req,res){
        const users = await this.UserModel.getAll()

        res.status(200).json(users)
    }
}

module.exports = {UserController}