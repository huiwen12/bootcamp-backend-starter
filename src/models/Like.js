const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const User = require('./User')
const Post = require('./Post')

class Like extends BaseModel {
  static get tableName() {
    return 'likes'
  }

  static get relationMappings() {
    return {
      user: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'likes.userId',
          to: 'users.id',
        },
      },

      post: {
        relation: BelongsToOneRelation,
        modelClass: Post,
        join: {
          from: 'likes.postId',
          to: 'post.id',
        },
      },
    }
  }
}

module.exports = Like
