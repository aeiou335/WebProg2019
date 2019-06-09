import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type:String, required: [true, 'title is required!']},
    body: String,
    published: {type:Boolean, default: false},
    author: {type:String, required: [true, 'author is required!']},
    comments: Array,
    like: {type:Number, default: 0}
})

const post = mongoose.model('post', postSchema);

export default post;