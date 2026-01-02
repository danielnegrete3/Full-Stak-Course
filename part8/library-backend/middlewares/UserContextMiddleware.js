import jsonwebtoken from "jsonwebtoken"
import env from "../utils/getEnv.js"

export const UserContextMiddleware =({UserModel}) => async({req}) => {
    const auth = req ? req.headers.authorization : null
    const context = {
        currentUser : null
    }
    if (auth && auth.startsWith('Bearer ')) {
        const decodedToken = jsonwebtoken.verify(
            auth.substring(7), env.JWTSECRET
        )
        const currentUser = (await UserModel.findBy({filter:{id:decodedToken.id}}))[0]

        context.currentUser = currentUser
    }

    return context
}