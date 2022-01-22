const likeData = require('../../../data/like')


exports.seed = knex => knex('likes').del()
  .then(() => knex('likes').insert(likeData))
