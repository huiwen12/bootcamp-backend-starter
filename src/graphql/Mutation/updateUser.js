const User = require('../../models/User')

const updateUser = async (_obj, args) => {
  try {
    const getUserByEmail = await User.query().findOne('email', args.email)
    const user = await getUserByEmail.$query().patch({
      email: args.input,
    }).returning('*')
    return user
  } catch (err) {
    throw new Error('Failed to change user info.')
  }
}

const reoslver = {
  Mutation: {
    updateUser,
  },
}

module.exports = reoslver
