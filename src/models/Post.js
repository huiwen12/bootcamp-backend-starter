const { HasManyRelation, ManyToManyRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Like = require('./Like')
const User = require('./User')

class Post extends BaseModel {
  static get tableName() {
    return 'posts'
  }

  static get relationMappings() {
    return {
      // has many to likes since posts can have multiple likes
      likes: {
        relation: HasManyRelation,
        modelClass: Like,
        join: {
          from: 'posts.id',
          to: 'likes.postId',
        },
      },

      likedPost: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'posts.id',
          through: {
            from: 'likes.postId',
            to: 'likes.userId',
          },
          to: 'users.id',
        },
      },
    }
  }
}


module.exports = Post
