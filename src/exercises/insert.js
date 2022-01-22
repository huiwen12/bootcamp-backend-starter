// const cleanup = require('../cleanup')
// // Import models
// const Post = require('../models/Post')

// const run = async () => {
//   // Write Queries and Logs Here !!!

//   // Insert yourself in the users table
//   const addPost = await Post.query().insert({
//     copyright: 'This is a testing post',
//     title: 'A testing post',
//     date: '0000-00-00',
//     ur: 'https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_nasa_emblem.jpg',
//     explanation: 'This post is a testing post.',
//   })
//     .returning('*')

//   console.log(addPost)

//   // -----
//   cleanup()
// }

// run()
