
const thorwOwnError = ({opt,message}) => {
    if(opt){
        const error =  new Error(message)
        error.name = 'ounError'
        error.userMessage = message
        throw error
    }
}

module.exports = {thorwOwnError}