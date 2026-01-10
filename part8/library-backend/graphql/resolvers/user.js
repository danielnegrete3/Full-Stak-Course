import { UserFunctions } from "../../logic/user.js"
import { ErrorHandler } from "../../utils/ErrorHandler.js"

export const CreateUserResolver = (data)=>{
    const functions = new UserFunctions(data)
    return {
        Own:{
            User:{
            }
        },
        Query:{
            me:ErrorHandler(functions.me),
        },
        Mutation:{
            createUser:ErrorHandler(functions.createUser),
            login:ErrorHandler(functions.login)
        },
        Subscription:{

        }
    }
}