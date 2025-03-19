const env = process.env.NODE_ENV
const dotenv = require('dotenv')
const path = require('path')
if(env === 'development'){
    dotenv.config({ path: path.resolve(__dirname,'..', '.env.dev') })
}else if(env === 'test'){
    dotenv.config({ path: path.resolve(__dirname,'..', '.env.test') })
}else{
    dotenv.config()
}
const vars = {
    MONGODB_URI:process.env.MONGODB_URI,
    MONGODB_DB_NAME:process.env.MONGODB_DB_NAME,
    PORT:process.env.PORT,
    JWTSECRET: process.env.JWTSECRET,
    NODE_ENV: process.env.NODE_ENV
}

module.exports = vars