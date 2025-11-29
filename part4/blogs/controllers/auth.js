const jwt = require('jsonwebtoken')
const {JWTSECRET} = require('../utils/getEnv')

class AuthController{
    constructor({UserModel}){
        this.UserModel = UserModel
        this.login = this.login.bind(this)
    }

    async login(req,res){
        const { username, password } = req.body
        const {user,valid} = await this.UserModel.login({username,password})

        if (!(user && valid)) {
            return res.status(401).json({
                error: 'invalid username or password'
            })
        }

        const userForToken = {
            username: user.username,
            id: user._id,
        }

        const token = jwt.sign(userForToken, JWTSECRET)

        res
        .status(200)
        .json({ token, username: user.username, name: user.name, id: user._id })
    }
}

module.exports = {AuthController}