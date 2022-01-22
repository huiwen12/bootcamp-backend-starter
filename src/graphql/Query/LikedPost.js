//     likedPost(input: UserId!): Post

//
// type Post {
//   id: ID!
//   copyright: string
//   title: string!
//   url: string!
//   date: string!
//   explanation: string!
// }

// const run = async () => {
//   // Write Queries and Logs Here !!!

//   // Get all users and their pets
//   const user_pets = await User.query().withGraphFetched('pets')
//   console.log(user_pets)
//   // Get all users, their pets, AND their children
//   const pets_children = await User.query().withGraphFetched('[pets, children]')
//   console.log(pets_children)
//   // Get all users, their parents, and their grandparents
//   const fam_info = await User.query().withGraphFetched('parent.^2')
//   console.log(fam_info)
//   // Get all users, their pets, their chilren, and their childrens' pets
//   const allInfo = await User.query().withGraphFetched('[pets, children, children.pets]')
//   console.log(allInfo)
//   // -----
//   cleanup()
// }

// const Post = require('../../models/Post')
// const Like = require('../../models/Like')
const User = require('../../models/User')

const likedPost = async (_obj, { id }) => {
  try {
    // add a where
    const post = await User.query().withGraphFetched('likedPost').where('userId', id)
    console.log(post)
    console.log('hello')
    return post
  } catch (err) {
    console.log(err)
    throw new Error('Failed to get liked post')
  }
}

const resolver = {
  Query: {
    likedPost,
  },
}

module.exports = resolver
