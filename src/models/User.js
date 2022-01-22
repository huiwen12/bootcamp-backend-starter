const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Post = require('./Post')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      // each user can like many posts
      likedPost: {
        relation: HasManyRelation,
        modelClass: Post,
        join: {
          from: 'users.id',
          through: {
            from: 'likes.userId',
            to: 'likes.postId',
          },
          to: 'posts.id',
        },
      },
    }
  }
}

module.exports = User
