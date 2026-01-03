import { GraphQLError } from "graphql"

export const IsLoged = ({context}) => {
    if(!context.currentUser) throw new GraphQLError("You're not loged",{
        extensions: {
            code: 'FORBIDDEN',
        },
    })
}