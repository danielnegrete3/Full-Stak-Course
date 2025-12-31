import { GraphQLError } from 'graphql';

export const ErrorHandler = (fn) => {
    console.log(fn.BookModel)
    return function(root,args){
        try{
            return fn(root,args)
        }catch(e){
            throw transformToGraphQLError(e,args)
        }
    }
}

export const transformToGraphQLError = (error, args) => {
    if (error instanceof GraphQLError) {
        return error;
    }
    
    if (error.name === 'ValidationError') {
        const messages = Object.values(error.errors).map(e => e.message);
        return new GraphQLError(`Validation error: ${messages.join(', ')}`, {
            extensions: {
                code: 'BAD_USER_INPUT',
                invalidArgs: args,
                validationErrors: messages
            }
        });
    }
    
    if (error.code === 11000) {
        return new GraphQLError('Duplicate entry found', {
            extensions: {
                code: 'BAD_USER_INPUT',
                invalidArgs: args,
                field: Object.keys(error.keyPattern)[0]
            }
        });
    }
    
    return new GraphQLError('Internal server error', {
        extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            originalError: error.message
        }
    });
};