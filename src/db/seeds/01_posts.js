const postData = require('../../../data/post')


exports.seed = knex => knex('posts').del()
  .then(() => knex('posts').insert(postData))
