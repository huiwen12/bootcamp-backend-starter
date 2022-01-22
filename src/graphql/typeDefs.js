const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!

  }

  type Query {
    welcome: String!
    likedPost(id: ID!): [Post]
    numLikes(input: ID!): Likes
    checkToken: String!
  }

  type Likes {
    userId: ID!
    postId: ID!
  }

  type Post {
    id: ID!
    copyright: String
    title: String!
    url: String!
    date: String!
    explanation: String!
  }

  type User {
    id: ID!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }
`
