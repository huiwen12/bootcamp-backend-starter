const { decodeToken } = require('../lib/auth')
const User = require('../models/User')

// The method exported here sets the context for all resolvers and refreshes tokens
module.exports = async ({ req, res }) => {
  // If login or register, skip auth requirements
  if (req.body.operationName === 'login' || req.body.operationName === 'register') {
    return ({
      req, res,
    })
  }
  // console.log(req.headers.authorization)
  if (!req.headers.authorization) {
    // console.log('hello')
    // No JWT present for auth
    return ({
      req,
      res,
    })
  }

  try {
    console.log(decodeToken(req.headers.authorization))
    const {
      id,
    } = decodeToken(req.headers.authorization)
    const user = await User.query().findById(id)
    // console.log(user)
    return ({
      req,
      res,
      user,
    })
    // If failed context creation, make unathenticated request
  } catch (error) {
    // console.log(error)
    return ({
      req, res,
    })
  }
}
