import jwt from "jsonwebtoken"
import env from "../utils/getEnv.js"

export class UserFunctions{
    constructor({UserModel}){
        this.UserModel = UserModel
        this.me = this.me.bind(this)
        this.createUser = this.createUser.bind(this)
        this.login = this.login.bind(this)
    }

    me = (_,__,context) => {
        return context.currentUser
    }

    createUser = async(root, args) => {
        const user = await this.UserModel.create(
           {
            input:
                { 
                    username: args.username ,
                    favoriteGenre: args.favoriteGenre
                }
            }
        )

        return user
    }
    
    login = async (root, args) => {
        const user = (await this.UserModel.findBy({
            filter:{
                username:args.username
            }
        }))[0]

        const userForToken = {
            username: user.username,
            id: user._id,
        }

        return { value: jwt.sign(userForToken, env.JWTSECRET) }
    }
}