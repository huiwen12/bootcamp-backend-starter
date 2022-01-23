const checkToken = async (_obj, params, { user }) => {
  if (user) {
    return user.id
  }
  throw new Error('No User Found')
}

const resolver = {
  Query: {
    checkToken,
  },
}

module.exports = resolver
