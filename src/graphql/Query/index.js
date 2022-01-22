const merge = require('lodash.merge')
const Welcome = require('./Welcome')
const LikedPost = require('./LikedPost')
const Auth = require('./Auth')

const resolvers = [Welcome, LikedPost, Auth]

module.exports = merge(...resolvers)
