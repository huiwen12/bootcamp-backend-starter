const merge = require('lodash.merge')
const Auth = require('./Auth')
const updateUser = require('./updateUser')

const resolvers = [Auth, updateUser]

module.exports = merge(...resolvers)
