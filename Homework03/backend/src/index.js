import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import Subscription from './resolvers/Subscription'
import User from './resolvers/User'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import dbUser from '../models/user'
import dbPost from '../models/post'
import dbComment from '../models/comment'
import initDb from './initDb'
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/db');
const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Comment
  },
  context: {
    pubsub
  }
})

server.start({ port: process.env.PORT | 4000 }, async () => {
  
  //await dbUser.remove()
  //await dbPost.remove()
  //await dbComment.remove()
  const dbUserExists = await dbUser.find();
  //console.log('User: ',dbUserExists)
  //console.log('Post: ', await dbPost.find())
  //console.log('Comment: ', await dbComment.find())
  if (dbUserExists.length === 0) {
    await initDb.initUsers();
    const users = await dbUser.find()
    console.log(users)
    initDb.initPosts(users)
  }
  

  /*
  const dbPostExists = await dbPost.find();
  if (dbPostExists.length === 0) initDb.initPosts();
  const dbCommentExists = await dbComment.find();
  if (!dbCommentExists.length === 0) initDb.initComments();
  */
  console.log(`The server is up on port ${process.env.PORT | 4000}!`)
})
