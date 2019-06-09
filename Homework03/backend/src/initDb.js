import db from './db';
import User from '../models/user'
import Post from '../models/post'
import Comment from '../models/comment'

const initUsers = async () => {
    for (let user of db.users){
        const newUser = new User(user);
        await newUser.save();
    }
    
}

const initPosts = async (users) => {
    let i = 0;
    for (let post of db.posts){
        const newPost = new Post({author:users[i]._id,...post});
        await newPost.save()
        i++
    }
}

const initComments = async () => {
    for (let comment of db.comments){
        const newComment = new Comment(comment);
        await newComment.save();
    }
}

const initDB = {
    initUsers,
    initPosts,
    initComments
}

export default initDB;

