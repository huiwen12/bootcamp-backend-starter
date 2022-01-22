const casual = require('casual')
const userData = require('./user')
const postData = require('./post')

casual.define('like', ({ user1id, post1id }) => ({
  id: casual.uuid,
  userId: user1id,
  postId: post1id,
}))


const likeData = []

for (let i = 0; i < 1; ++i) {
  const user1id = casual.random_element(userData).id
  const post1id = casual.random_element(postData).id
  likeData.push(casual.like({ user1id, post1id }))
}

module.exports = likeData
