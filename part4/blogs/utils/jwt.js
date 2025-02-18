const {JWTSECRET} = require('./getEnv')
const jwt = require('jsonwebtoken')

const getTokenFrom = req => {
    const authorization = req.get('authorization')
    if (authorization && authorization.startsWith('Bearer ')) {
        return authorization.replace('Bearer ', '')
    }
    return null
}

const getDecodedToken = (req) => jwt.verify(getTokenFrom(req), JWTSECRET)

  module.exports =  {getTokenFrom,getDecodedToken}