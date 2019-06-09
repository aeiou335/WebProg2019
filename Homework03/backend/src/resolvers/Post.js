import user from '../../models/user';
import comment from '../../models/comment';

const Post = {
  async author(parent, args) {
    //console.log('parent', parent)
    const userData = await user.findById({_id:parent.author})
    return userData
  }/*,
  async comments(parent, args) {
    commentData = await comment.find()
    return db.comments.filter(comment => {
      return comment.post === parent.id
    })
  }*/
}

export { Post as default }
