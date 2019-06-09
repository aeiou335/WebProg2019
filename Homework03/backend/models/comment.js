import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    id: {type:String, required: [true, 'id is required!']},
    text: {type:String, required: [true, 'text is required!']},
    author: {type:String, required: [true, 'author is required!']},
    post: {type:String, required: [true, 'post is required!']}
})

const comment = mongoose.model('comment', commentSchema);
export default comment;
