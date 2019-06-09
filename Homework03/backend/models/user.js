import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: [true, 'name is required!']},
    email: {type: String, required: [true, 'email is required!']},
    age: Number,
    posts: Array,
    comments: Array
})

const user = mongoose.model('user', userSchema);

export default user;